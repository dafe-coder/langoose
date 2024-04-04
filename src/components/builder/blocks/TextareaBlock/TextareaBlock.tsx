import { FC } from 'react'

import styles from './textareaBlock.module.scss'

export const TextareaBlock: FC = () => {
	return (
		<input
			className={styles.input}
			type='text'
			placeholder='Write your text here'
		/>
	)
}
