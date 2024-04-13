import { Video } from 'lucide-react'
import { FC } from 'react'

import { WrapBlock } from '../WrapBlock/WrapBlock'

export const VideoBlock: FC = () => {
	return (
		<WrapBlock
			titleBlock='Watch Video'
			placeholder='Write your instructions here'
			icon={{ icon: Video }}
			iconText='Add Video'
			tip='Upload or record video content for visual learning or listening comprehension.'
		/>
	)
}
