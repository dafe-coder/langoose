import { Ellipsis } from 'lucide-react'
import { FC } from 'react'

import Icon from '@/components/ui/LucideIcon/LucideIcon'

import { SectionCardBuilder } from '../SectionCardBuilder/SectionCardBuilder'

import styles from './canvasBuilder.module.scss'

export const CanvasBuilder: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>Reading</div>
				<div>
					<Ellipsis />
				</div>
			</div>
			<div className={styles.sectionWrapper}>
				<section>
					<div className={styles.sectionHeader}>
						<div className={styles.sectionHeaderTitle}>
							<strong>Page 1 - </strong>
							Add page title
						</div>
						<div className={styles.sectionHeaderNav}>
							<button>
								<Icon
									name='chevron-up'
									strokeWidth={1}
									size={16}
								/>
							</button>
							<button>
								<Icon name='chevron-down' />
							</button>
							<button>
								<Icon name='copy' />
							</button>
							<button>
								<Icon name='trash-2' />
							</button>
							<button>
								<Icon name='copy-plus' />
							</button>
						</div>
					</div>
					<SectionCardBuilder />
				</section>
			</div>
		</div>
	)
}
