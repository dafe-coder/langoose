import update from 'immutability-helper'
import React, { FC, useCallback, useEffect } from 'react'
import { useDrop } from 'react-dnd'

import { IDashboardDataItem } from '@/components/dashboardNavBar/dashboardNavbar.types'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import { ImageBlock, TextBlock, TextareaBlock } from '../../blocks'

import { DropItem } from './DropItem'

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

	const generateItem = (item: IDashboardDataItem) => {
		switch (item.name) {
			case 'Heading':
				return (
					<DropItem
						id={item.id}
						moveBlock={moveBlock}
						findBlock={findBlock}
					>
						<TextBlock />
					</DropItem>
				)
			case 'Multiline':
				return (
					<DropItem
						id={item.id}
						moveBlock={moveBlock}
						findBlock={findBlock}
					>
						<TextareaBlock />
					</DropItem>
				)
			case 'Image':
				return (
					<DropItem
						id={item.id}
						moveBlock={moveBlock}
						findBlock={findBlock}
					>
						<ImageBlock />
					</DropItem>
				)
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
				<React.Fragment key={item.id}>{generateItem(item)}</React.Fragment>
			))}
		</div>
	)
}

export default DropList
