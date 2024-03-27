import { IDashboardDataBlock } from './dashboardNavbar.types'

export const dashboardDataNavbar: IDashboardDataBlock[] = [
	{
		category: 'Layout',
		items: [
			{
				icon: 'Layers2',
				name: 'Prebuilt Blocks'
			},
			{
				icon: 'BringToFront',
				name: 'Layouts'
			},
			{
				icon: 'Minus',
				name: 'Line Braker'
			},
			{
				icon: 'BringToFront',
				name: 'Table'
			}
		]
	},
	{
		category: 'Text',
		items: [
			{
				icon: 'Heading',
				name: 'Heading'
			},
			{
				icon: 'BringToFront',
				name: 'Single Line'
			},
			{
				icon: 'Layers2',
				name: 'Multiline'
			}
		]
	},
	{
		category: 'Media',
		items: [
			{
				icon: 'Image',
				name: 'Image'
			},
			{
				icon: 'Mic',
				name: 'Audio'
			},
			{
				icon: 'Video',
				name: 'Video'
			},
			{
				icon: 'Video',
				name: 'Recording'
			},
			{
				icon: 'Paperclip',
				name: 'Attach File'
			}
		]
	}
]
