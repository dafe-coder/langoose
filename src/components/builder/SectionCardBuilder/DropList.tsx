import update from 'immutability-helper'
import React, { FC, useCallback, useEffect } from 'react'
import { useDrop } from 'react-dnd'

import { IDashboardDataItem } from '@/components/dashboardNavBar/dashboardNavbar.types'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { TextBlock, TextareaBlock } from '../blocks'

const DropList: FC<{
	data: IDashboardDataItem[]
	setData: (data: IDashboardDataItem[]) => void
}> = ({ data, setData }) => {
	const findBlock = useCallback(
		(id: string) => {
			const block = data.filter(item => item.id == id)[0]

			return {
				block,
				index: data.indexOf(block)
			}
		},
		[data]
	)

	useEffect(() => {
		console.log(data)
	}, [data])
	const moveBlock = useCallback(
		(id: string, atIndex: number) => {
			const { block, index } = findBlock(id)
			setData(
				update(data, {
					$splice: [
						[index, 1],
						[atIndex, 0, block]
					]
				})
			)
		},
		[findBlock, data, setData]
	)

	const generateItem = (name: string) => {
		console.log(name)

		switch (name) {
			case 'Heading':
				return (
					<TextBlock
						moveBlock={moveBlock}
						findBlock={findBlock}
					/>
				)
			case 'Multiline':
				return <TextareaBlock />
			default:
				break
		}
	}
	const [, drop] = useDrop(() => ({
		accept: dashboardBlocksDragType.buildBlocks
	}))

	return (
		<div
			// @ts-ignore
			ref={drop}
		>
			{data.map(item => (
				<React.Fragment key={item.id}>{generateItem(item.name)}</React.Fragment>
			))}
		</div>
	)
}

export default DropList
