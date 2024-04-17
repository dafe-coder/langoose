import cn from 'classnames'
import { FC, useState } from 'react'

import { CloseButton } from '../Button/CloseButton'
import { InputWithNav } from '../InputWithNav/InputWithNav'
import { CheckBox, Radio } from '../Inputs'

import styles from './choice.module.scss'

export type ChoiceType = 'single' | 'multiple'

export interface IChoiceProps {
	choice?: ChoiceType
	id: string
	name?: string
	deleteChoice: (id: string) => void
	setIsCheckedRadio?: (id: string) => void
	isCheckedRadio?: string
}

export const Choice: FC<IChoiceProps> = ({
	id,
	choice = 'multiple',
	deleteChoice,
	name = '',
	setIsCheckedRadio,
	isCheckedRadio = ''
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	return (
		<div className={styles.wrap}>
			{choice == 'multiple' && (
				<CheckBox
					id={id}
					setActive={setIsChecked}
					active={isChecked}
				/>
			)}
			{setIsCheckedRadio && (
				<Radio
					setActive={setIsCheckedRadio}
					active={isCheckedRadio}
					name={name}
					id={id}
				/>
			)}
			<InputWithNav active={isChecked || isCheckedRadio === id}>
				<label
					className={cn(styles.btn, {
						[styles.active]: isChecked || isCheckedRadio === id
					})}
					htmlFor={id}
				>
					{!isChecked || isCheckedRadio === id ? 'Set as correct' : 'Correct'}
				</label>
				<CloseButton onClick={() => deleteChoice(id)} />
			</InputWithNav>
		</div>
	)
}
