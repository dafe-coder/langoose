import cn from 'classnames'
import { Check } from 'lucide-react'
import { FC } from 'react'
import { blue } from 'tailwindcss/colors'

import { IChoiceProps } from '../Choice/Choice'

import styles from './checkBox.module.scss'

interface ICheckBoxProps extends Omit<IChoiceProps, 'deleteChoice'> {
	setIsChecked: (checked: boolean) => void
	isChecked: boolean
}

export const CheckBox: FC<ICheckBoxProps> = ({
	choice = 'multiple',
	setIsChecked,
	id,
	setIsCheckedRadio,
	isCheckedRadio,
	isChecked,
	name
}) => {
	return (
		<>
			{choice === 'multiple' ? (
				<input
					onChange={e => setIsChecked(e.target.checked)}
					className={styles.chooseInp}
					id={id}
					type='checkbox'
					checked={isChecked}
				/>
			) : (
				setIsCheckedRadio &&
				isCheckedRadio && (
					<input
						onChange={e => setIsCheckedRadio(id)}
						className={styles.chooseInp}
						id={id}
						type='radio'
						name={name}
						checked={isCheckedRadio == id}
					/>
				)
			)}
			<label
				htmlFor={id}
				className={cn({
					[styles.check]: choice === 'multiple',
					[styles.radio]: choice === 'single'
				})}
			>
				{isCheckedRadio === id ? (
					<div className={styles.circle}></div>
				) : (
					<Check
						color={blue[500]}
						size={14}
						strokeWidth={1.5}
					/>
				)}
			</label>
		</>
	)
}
