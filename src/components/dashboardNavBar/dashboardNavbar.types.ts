export interface IDashboardDataItem {
	id: string,
	icon: any
	name: string
	index?: number
}

export interface IDashboardDataBlock {
	category: string
	items: IDashboardDataItem[]
}
