import { Plus } from 'lucide-react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Button } from '@/components/ui'

import { WrapBlock } from '../WrapBlock/WrapBlock'

import { TrueFalseQuestionsItem } from './TrueFalseQuestionsItem'
import styles from './trueFalseQuestions.module.scss'

type Props = {}

export const TrueFalseQuestionsBlock = (props: Props) => {
	const [items, setItems] = useState([{ id: uuid() }])

	return (
		<WrapBlock
			titleBlock='True/False Questions'
			tip='Display statements or sentences where learners determine whether each statement is true or false.'
		>
			<div className='my-3.5'>
				<div className={styles.header}>
					<span>True</span>
					<span>False</span>
				</div>
				{items.map(item => (
					<TrueFalseQuestionsItem id={item.id} />
				))}
				<Button
					variant='inline'
					color='blue'
					icon={Plus}
					iconPos='left'
					className='mx-auto'
					onClick={() => setItems(state => [...state, { id: uuid() }])}
				>
					Add new question
				</Button>
			</div>
		</WrapBlock>
	)
}
