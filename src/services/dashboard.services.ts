import axios from 'axios'

import { IDashboardDataBlock } from '@/components/dashboardNavBar/dashboardNavbar.types'

export const DashboardServices = {
	async getAll() {
		const response = await axios.get<IDashboardDataBlock[]>(
			'http://localhost:4200/navigation-blocks'
		)

		return response.data
	}
}
