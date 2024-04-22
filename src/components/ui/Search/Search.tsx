import { SearchIcon } from 'lucide-react'
import { FC } from 'react'

import { Input } from '../Inputs'

type Props = {
	placeholder?: string
	value: string
	setValue: (value: string) => void
}
export const Search: FC<Props> = ({ value, setValue, placeholder }) => {
	return (
		<div className='mt-3'>
			<Input
				icon={SearchIcon}
				value={value}
				setValue={setValue}
				placeholder={placeholder}
			/>
		</div>
	)
}
