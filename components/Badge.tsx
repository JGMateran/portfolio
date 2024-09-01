import type { ReactNode } from 'react'

import { AlertCircle } from 'react-feather'

export function Badge({ children }: { children: ReactNode }) {
	return (
		<span className="p-4 justify-center text-sm flex items-center dark:text-white text-red-600">
			<AlertCircle className="mr-3" /> {children}
		</span>
	)
}
