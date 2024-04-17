import cn from 'classnames'
import { FC } from 'react'

import styles from './radio.module.scss'

interface IRadioProps {
	id: string
	name: string
	setActive: (checked: string) => void
	active: string
}

export const Radio: FC<IRadioProps> = ({ id, name, setActive, active }) => {
	return (
		<>
			<input
				onChange={() => setActive(id)}
				className={styles.chooseInp}
				id={id}
				type='radio'
				name={name}
				checked={active == id}
			/>
			<label
				htmlFor={id}
				className={cn(styles.radio)}
			>
				{active === id && <div className={styles.circle}></div>}
			</label>
		</>
	)
}
