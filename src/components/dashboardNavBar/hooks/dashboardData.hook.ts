import { useQuery } from '@tanstack/react-query'

import { DashboardServices } from '@/services/dashboard.services'

export const useDashboard = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ['dashboard data'],
		queryFn: () => DashboardServices.getAll()
	})

	return { isPending, data, error }
}
