import { LucideProps, icons } from 'lucide-react'

interface IconProps extends LucideProps {
	name: keyof typeof icons
}

const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = icons[name]

	return (
		<LucideIcon
			size={16}
			strokeWidth={1}
			{...props}
		/>
	)
}

export default Icon
