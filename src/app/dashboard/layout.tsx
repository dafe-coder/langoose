'use client'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DashboardNavBar } from '@/components/dashboardNavBar/DashboardNavbar'

import { Header } from '../../components/header/header'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<Header />
			<div className='flex'>
				<DndProvider backend={HTML5Backend}>
					<DashboardNavBar />
					{children}
				</DndProvider>
			</div>
		</div>
	)
}
