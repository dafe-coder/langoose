import { FC, useState } from 'react'

import { CloseButton, InputWithNav } from '@/components/ui'
import { Checkbox } from '@/components/ui/Inputs'

import styles from './trueFalseQuestions.module.scss'

type Props = {
	id: string
}

export const TrueFalseQuestionsItem: FC<Props> = ({ id }) => {
	const [isChecked, setIsChecked] = useState(false)
	return (
		<div className={styles.item}>
			<InputWithNav>
				<CloseButton />
			</InputWithNav>
			<div className={styles.nav}>
				<Checkbox
					active={isChecked}
					setActive={setIsChecked}
					id={id}
				/>
				<Checkbox
					active={!isChecked}
					setActive={setIsChecked}
					id={id}
				/>
			</div>
		</div>
	)
}
