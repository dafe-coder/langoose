'use client'

import { ChevronLeft } from 'lucide-react'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import { Button } from '../Button/Button'

import styles from './goBack.module.scss'

export const GoBack: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ ...rest }) => {
	return (
		<Button
			onClick={e => e.preventDefault()}
			className={styles.goBack}
			icon={ChevronLeft}
			{...rest}
		></Button>
	)
}
