import { Headphones } from 'lucide-react'
import { FC } from 'react'

import { WrapBlock } from '../WrapBlock/WrapBlock'

export const AudioBlock: FC = () => {
	return (
		<WrapBlock
			titleBlock='Listen to Audio'
			placeholder='Write your instructions here'
			icon={{ icon: Headphones }}
			iconText='Add Audio'
			tip='Upload or record audio files for listening exercises, pronunciation practice, or instructions.'
		/>
	)
}
