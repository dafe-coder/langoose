'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DashboardNavBar } from '@/components/dashboardNavBar/DashboardNavbar'

import { Header } from '../../components/header/header'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const queryClient = new QueryClient()
	return (
		<div>
			<Header />
			<div className='flex'>
				<QueryClientProvider client={queryClient}>
					<DndProvider backend={HTML5Backend}>
						<DashboardNavBar />
						{children}
					</DndProvider>
				</QueryClientProvider>
			</div>
		</div>
	)
}
