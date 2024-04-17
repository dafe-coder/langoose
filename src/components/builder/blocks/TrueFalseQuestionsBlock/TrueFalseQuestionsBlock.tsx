import { WrapBlock } from '../WrapBlock/WrapBlock'

import { TrueFalseQuestionsItem } from './TrueFalseQuestionsItem'

type Props = {}

export const TrueFalseQuestionsBlock = (props: Props) => {
	return (
		<WrapBlock
			titleBlock='True/False Questions'
			tip='Display statements or sentences where learners determine whether each statement is true or false.'
		>
			<div className='my-3.5'>
				<TrueFalseQuestionsItem id='dsd' />
			</div>
		</WrapBlock>
	)
}
