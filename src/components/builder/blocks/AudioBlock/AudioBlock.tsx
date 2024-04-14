import { Headphones } from 'lucide-react'
import { FC } from 'react'

import { FileDrop } from '@/components/ui/FileDrop/FileDrop'

import { WrapBlock } from '../WrapBlock/WrapBlock'

export const AudioBlock: FC = () => {
	return (
		<WrapBlock
			titleBlock='Listen to Audio'
			placeholder='Write your instructions here'
			tip='Upload or record audio files for listening exercises, pronunciation practice, or instructions.'
		>
			<FileDrop
				icon={{ icon: Headphones }}
				iconText='Add Audio'
			/>
		</WrapBlock>
	)
}
