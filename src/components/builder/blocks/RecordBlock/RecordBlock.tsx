import { gray } from 'tailwindcss/colors'

import { Par } from '@/components/ui'
import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { WrapBlock } from '../WrapBlock/WrapBlock'

import styles from './recordBlock.module.scss'

type Props = {}

export const RecordBlock = (props: Props) => {
	return (
		<WrapBlock
			titleBlock='Speaking Time'
			tip='Enable learners to record their voice and practice speaking skills, participate in oral activities, or deliver presentations.'
		>
			<div className={styles.wrap}>
				<div className={styles.center}>
					<Icon
						name='Mic'
						size={28}
						color={gray[300]}
					/>
					<Par
						color='gray'
						size='m'
					>
						Record Your Voice
					</Par>
				</div>
			</div>
		</WrapBlock>
	)
}
