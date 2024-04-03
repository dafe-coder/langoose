import classnames from 'classnames'
import { GripVertical } from 'lucide-react'
import { FC } from 'react'
import { blue } from 'tailwindcss/colors'

import styles from './textareaBlock.module.scss'

export const TextareaBlock: FC = () => {
	return (
		<div className={classnames('white-box', styles.box)}>
			<div>
				<GripVertical color={blue[300]} />
			</div>
			<input
				className={styles.input}
				type='text'
				placeholder='Write your text here'
			/>
		</div>
	)
}
