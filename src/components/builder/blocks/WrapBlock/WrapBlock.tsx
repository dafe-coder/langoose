import { CircleAlert } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import { Par } from '@/components/ui'

import styles from './wrapBlock.module.scss'

interface Props extends PropsWithChildren {
	titleBlock: string
	placeholder?: string
	tip: string
}

export const WrapBlock: FC<Props> = ({
	titleBlock,
	tip,
	placeholder = 'Write your instructions here',
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<Par
				fw='semibold'
				className='mb-3'
			>
				{titleBlock}
			</Par>
			<Par>
				{placeholder} <span>(optional)</span>
			</Par>
			{children}
			<div className={styles.footer}>
				<CircleAlert
					size={16}
					strokeWidth={1}
				/>
				<Par size='xs'>{tip}</Par>
			</div>
		</div>
	)
}
