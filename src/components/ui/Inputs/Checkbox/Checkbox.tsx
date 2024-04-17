import cn from 'classnames'
import { Check } from 'lucide-react'
import { FC } from 'react'
import { blue } from 'tailwindcss/colors'

import styles from './checkBox.module.scss'

interface ICheckBoxProps {
	id: string
	setActive: (checked: boolean) => void
	active: boolean
}

export const CheckBox: FC<ICheckBoxProps> = ({ id, setActive, active }) => {
	return (
		<>
			<input
				onChange={e => setActive(e.target.checked)}
				className={styles.chooseInp}
				id={id}
				type='checkbox'
				checked={active}
			/>
			<label
				htmlFor={id}
				className={cn(styles.check)}
			>
				<Check
					color={blue[500]}
					size={14}
					strokeWidth={1.5}
				/>
			</label>
		</>
	)
}
