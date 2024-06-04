import update from 'immutability-helper'
import React, { FC, useCallback } from 'react'
import { useDrop } from 'react-dnd'

import { IDashboardDataItem } from '@/components/dashboardNavBar/dashboardNavbar.types'

import { dashboardBlocksDragType } from '@/types/dashboard/dashboard.interface'

import {
	AudioBlock,
	ImageBlock,
	MultipleChoice,
	RecordBlock,
	SingleChoice,
	TextBlock,
	TextareaBlock,
	TrueFalseQuestionsBlock,
	VideoBlock
} from '../../blocks'

import { DropItem } from './DropItem'

const DropList: FC<{
	data: IDashboardDataItem[]
	setData: (data: IDashboardDataItem[]) => void
	addItem: (item: IDashboardDataItem) => void
}> = ({ data, setData, addItem }) => {
	const findBlock = useCallback(
		(id: string) => {
			let block = data.filter(item => item.id == id)[0]
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

	const generateDropItem = (
		component: JSX.Element,
		id: string
	): JSX.Element => {
		return (
			<DropItem
				id={id}
				moveBlock={moveBlock}
				findBlock={findBlock}
			>
				{component}
			</DropItem>
		)
	}

	const generateItem = (item: IDashboardDataItem) => {
		switch (item.name) {
			case 'Heading':
				return generateDropItem(<TextBlock />, item.id)
			case 'Multiline':
				return generateDropItem(<TextareaBlock />, item.id)
			case 'Image':
				return generateDropItem(<ImageBlock />, item.id)
			case 'Audio':
				return generateDropItem(<AudioBlock />, item.id)
			case 'Video':
				return generateDropItem(<VideoBlock />, item.id)
			case 'Recording':
				return generateDropItem(<RecordBlock />, item.id)
			case 'Multi-choice':
				return generateDropItem(<MultipleChoice />, item.id)
			case 'Single Choice':
				return generateDropItem(<SingleChoice />, item.id)
			case 'True/False':
				return generateDropItem(<TrueFalseQuestionsBlock />, item.id)
			default:
				break
		}
	}

	const [, drop] = useDrop(() => ({
		accept: dashboardBlocksDragType.navbarBlock,
		drop: (item: IDashboardDataItem, monitor) => {
			addItem(item)

			return { name: 'SectionCardBuilder' }
		}
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
