import cn from 'classnames'
import { FC, useState } from 'react'

import { CloseButton } from '../Button/CloseButton'
import { CheckBox } from '../Checkbox/CheckBox'
import { InputWithNav } from '../InputWithNav/InputWithNav'

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
			<CheckBox
				choice={choice}
				setIsCheckedRadio={setIsCheckedRadio}
				name={name}
				id={id}
				isCheckedRadio={isCheckedRadio}
				isChecked={isChecked}
				setIsChecked={setIsChecked}
			/>
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
