import { Image } from 'lucide-react'
import { FC } from 'react'

import { FileDrop } from '../../../ui/FileDrop/FileDrop'
import { WrapBlock } from '../WrapBlock/WrapBlock'

export const ImageBlock: FC = () => {
	return (
		<WrapBlock
			titleBlock='Add Image'
			placeholder='Write your instructions here'
			tip='Upload or select some of existing images.'
		>
			<FileDrop
				icon={{ icon: Image }}
				iconText='Add Images'
			/>
		</WrapBlock>
	)
}
