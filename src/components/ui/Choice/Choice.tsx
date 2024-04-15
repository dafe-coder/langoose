import cn from 'classnames'
import { FC, useState } from 'react'
import { blue } from 'tailwindcss/colors'

import Icon from '@/components/ui/LucideIcon/LucideIcon'

import styles from './choice.module.scss'

interface Props {
	choice?: 'single' | 'multiple'
	id: string
	name?: string
	deleteChoice: (id: string) => void
	setIsCheckedRadio?: (id: string) => void
	isCheckedRadio?: string
}

export const Choice: FC<Props> = ({
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
					<Icon
						color={blue[500]}
						name='check'
						size={14}
						strokeWidth={1.5}
					/>
				)}
			</label>
			<div
				className={cn(styles.inputWrap, {
					[styles.active]: isChecked || isCheckedRadio === id
				})}
			>
				<input placeholder='Option 1' />
				<div className={styles.nav}>
					<label
						className={cn(styles.btn, {
							[styles.active]: isChecked || isCheckedRadio === id
						})}
						htmlFor={id}
					>
						{!isChecked || isCheckedRadio === id ? 'Set as correct' : 'Correct'}
					</label>
					<button
						className={styles.closeBtn}
						onClick={() => deleteChoice(id)}
					>
						<Icon name='x' />
					</button>
				</div>
			</div>
		</div>
	)
}
