import { CircleAlert } from 'lucide-react'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

import { Par } from '@/components/ui'

import styles from './wrapBlock.module.scss'

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	titleBlock: string
	placeholder?: string
	tip: string
	children: ReactNode
}

export const WrapBlock: FC<Props> = ({
	titleBlock,
	tip,
	placeholder = 'Write your instructions here',
	children,
	...rest
}) => {
	return (
		<div
			className={styles.wrapper}
			{...rest}
		>
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
