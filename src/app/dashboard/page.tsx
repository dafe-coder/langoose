import { Metadata } from 'next'

import { Dashboard } from './dashboard'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default function Page() {
	return <Dashboard />
}
