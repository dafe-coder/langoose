import { Video } from 'lucide-react'
import { FC } from 'react'

import { FileDrop } from '@/components/ui/FileDrop/FileDrop'

import { WrapBlock } from '../WrapBlock/WrapBlock'

export const VideoBlock: FC = () => {
	return (
		<WrapBlock
			titleBlock='Watch Video'
			placeholder='Write your instructions here'
			tip='Upload or record video content for visual learning or listening comprehension.'
		>
			<FileDrop
				icon={{ icon: Video }}
				iconText='Add Video'
			/>
		</WrapBlock>
	)
}
