import { GripVertical } from 'lucide-react'
import { FC } from 'react'

export const TextBlock: FC = () => {
	return (
		<div>
			<div>
				<GripVertical />
			</div>
			<input
				type='text'
				placeholder='Insert your title here'
			/>
		</div>
	)
}
