import { Plus } from 'lucide-react'
import { FC, useState } from 'react'

import { Button, Choice } from '@/components/ui'

import { WrapBlock } from '../WrapBlock/WrapBlock'

import styles from './singleChoice.module.scss'

type Props = {}

const idFrst = { id: Date.now().toString(), name: 'hello' }

export const SingleChoice: FC = (props: Props) => {
	const [listChoice, setListChoice] = useState([idFrst])
	const deleteChoice = (id: string) => {
		setListChoice(listChoice.filter(item => item.id.toString() !== id))
	}
	const [isCheckedRadio, setIsCheckedRadio] = useState(idFrst.id)
	return (
		<WrapBlock
			titleBlock='Single Choice'
			placeholder='Write your instructions here'
			tip='Create single-choice questions with predefined options for assessment or comprehension checks.'
		>
			<div className={styles.wrap}>
				{listChoice.map(item => (
					<Choice
						choice='single'
						deleteChoice={deleteChoice}
						key={item.id}
						name={item.name}
						id={item.id.toString()}
						isCheckedRadio={isCheckedRadio}
						setIsCheckedRadio={setIsCheckedRadio}
					/>
				))}
				<Button
					color='blue'
					variant='inline'
					iconPos='left'
					icon={Plus}
					className='mx-auto'
					onClick={() =>
						setListChoice(state => [
							...state,
							{ id: Date.now().toString(), name: 'hello' }
						])
					}
				>
					Add new option
				</Button>
			</div>
		</WrapBlock>
	)
}
