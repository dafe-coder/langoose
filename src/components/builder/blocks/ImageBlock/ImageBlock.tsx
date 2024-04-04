import { Image } from 'lucide-react'
import { FC } from 'react'

import { Par } from '@/components/ui/'

import styles from './imageBlock.module.scss'

export const ImageBlock: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Par>
				Write your instructions here <span>(optional)</span>
			</Par>
			<div className={styles.dropWrapper}>
				<div className={styles.addImages}>
					<Image strokeWidth={1} />
					<p>Add Images</p>
				</div>
			</div>
			<Par size='xs'>Upload or select some of existing images.</Par>
		</div>
	)
}
