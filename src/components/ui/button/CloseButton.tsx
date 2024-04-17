import { X } from 'lucide-react'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import styles from './button.module.scss'

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export const CloseButton: FC<Props> = ({ ...rest }) => {
	return (
		<button
			className={styles.closeBtn}
			{...rest}
		>
			<X
				strokeWidth={1}
				size={16}
			/>
		</button>
	)
}
