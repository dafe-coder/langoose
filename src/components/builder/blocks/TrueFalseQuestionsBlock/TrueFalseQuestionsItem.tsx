import { FC, useState } from 'react'

import { CheckBox, CloseButton, InputWithNav } from '@/components/ui'

type Props = {
	id: string
}

export const TrueFalseQuestionsItem: FC<Props> = ({ id }) => {
	const [isChecked, setIsChecked] = useState(false)
	return (
		<div>
			<InputWithNav>
				<CloseButton />
			</InputWithNav>
			<CheckBox
				isChecked={isChecked}
				setIsChecked={setIsChecked}
				id={id}
				name='nad'
			/>
			<CheckBox
				isChecked={!isChecked}
				setIsChecked={setIsChecked}
				id={id}
				name='nad'
			/>
		</div>
	)
}
