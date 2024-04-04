import { FC } from 'react'

import styles from './textBlock.module.scss'

export const TextBlock: FC = () => {
	return (
		<input
			className={styles.input}
			type='text'
			placeholder='Insert your title here'
		/>
	)
}
