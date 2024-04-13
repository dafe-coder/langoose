import { FC, PropsWithChildren } from 'react'

import { Par } from '@/components/ui'
import Icon from '@/components/ui/LucideIcon/LucideIcon'

import styles from './wrapBlock.module.scss'

interface Props extends PropsWithChildren {
	titleBlock: string
	placeholder: string
	tip: string
}

export const WrapBlock: FC<Props> = ({
	titleBlock,
	tip,
	placeholder,
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
				<Icon name='circle-alert' />
				<Par size='xs'>{tip}</Par>
			</div>
		</div>
	)
}
