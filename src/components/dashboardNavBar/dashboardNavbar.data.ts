import { IDashboardDataBlock } from './dashboardNavbar.types'
import {v4 as uuid} from 'uuid'

export const dashboardDataNavbar: IDashboardDataBlock[] = [
	{
		category: 'Layout',
		items: [
			{
				id: uuid().toString(),
				icon: 'Layers2',
				name: 'Prebuilt Blocks'
			},
			{
				id: uuid().toString(),
				icon: 'BringToFront',
				name: 'Layouts'
			},
			{
				id: uuid().toString(),
				icon: 'Minus',
				name: 'Line Braker'
			},
			{
				id: uuid().toString(),
				icon: 'BringToFront',
				name: 'Table'
			}
		]
	},
	{
		category: 'Text',
		items: [
			{
				id: uuid().toString(),
				icon: 'Heading',
				name: 'Heading'
			},
			{
				id: uuid().toString(),
				icon: 'BringToFront',
				name: 'Single Line'
			},
			{
				id: uuid().toString(),
				icon: 'Text',
				name: 'Multiline'
			}
		]
	},
	{
		category: 'Media',
		items: [
			{
				id: uuid().toString(),
				icon: 'Image',
				name: 'Image'
			},
			{
				id: uuid().toString(),
				icon: 'Mic',
				name: 'Audio'
			},
			{
				id: uuid().toString(),
				icon: 'Video',
				name: 'Video'
			},
			{
				id: uuid().toString(),
				icon: 'Video',
				name: 'Recording'
			},
			{
				id: uuid().toString(),
				icon: 'Paperclip',
				name: 'Attach File'
			}
		]
	}
]
