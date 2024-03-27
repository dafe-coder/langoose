export interface IDashboardDataItem {
	icon: any
	name: string
}

export interface IDashboardDataBlock {
	category: string
	items: IDashboardDataItem[]
}
