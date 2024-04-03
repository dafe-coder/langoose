import { IDashboardDataBlock } from './dashboardNavbar.types'

export const dashboardDataNavbar: IDashboardDataBlock[] = [
	{
		category: 'Layout',
		items: [
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Layers2',
				name: 'Prebuilt Blocks'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'BringToFront',
				name: 'Layouts'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Minus',
				name: 'Line Braker'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'BringToFront',
				name: 'Table'
			}
		]
	},
	{
		category: 'Text',
		items: [
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Heading',
				name: 'Heading'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'BringToFront',
				name: 'Single Line'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Text',
				name: 'Multiline'
			}
		]
	},
	{
		category: 'Media',
		items: [
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Image',
				name: 'Image'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Mic',
				name: 'Audio'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Video',
				name: 'Video'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Video',
				name: 'Recording'
			},
			{
				id: new Date().getMilliseconds().toString(),
				icon: 'Paperclip',
				name: 'Attach File'
			}
		]
	}
]
