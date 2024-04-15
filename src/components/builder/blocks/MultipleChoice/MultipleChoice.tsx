import { Plus } from 'lucide-react'
import { FC, useState } from 'react'

import { Button, Choice } from '@/components/ui'

import { WrapBlock } from '../WrapBlock/WrapBlock'

import styles from './multipleChoice.module.scss'

const listIds = [1]

export const MultipleChoice: FC = () => {
	const [listChoice, setListChoice] = useState(listIds)
	const deleteChoice = (id: string) => {
		setListChoice(listChoice.filter(item => item.toString() !== id))
	}
	return (
		<WrapBlock
			titleBlock='Multiple Choice'
			placeholder='Write your instructions here'
			tip='Create multiple-choice questions with predefined options for assessment or comprehension checks.'
		>
			<div className={styles.wrap}>
				{listChoice.map(item => (
					<Choice
						deleteChoice={deleteChoice}
						key={item}
						id={item.toString()}
					/>
				))}
				<Button
					color='blue'
					variant='inline'
					iconPos='left'
					icon={Plus}
					className='mx-auto'
					onClick={() => setListChoice(state => [...state, Date.now()])}
				>
					Add new option
				</Button>
			</div>
		</WrapBlock>
	)
}
