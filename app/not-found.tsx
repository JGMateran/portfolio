import Link from 'next/link'

export default function NotFountRoute() {
	return (
		<div className="max-w-lg mx-auto text-center mt-32 mb-15">
			<h2 className="dark:text-white text-black text-6xl mb-4 font-bold">
				404
			</h2>
			<p className="dark:text-gray-100 text-gray-600 text-sm leading-6 mb-6">
				The page you are looking for might have been removed,had its name
				changed or is temporarily unavalible.
			</p>
			<Link
				href="/"
				className="active:scale-95 bg-blue-600 inline-block py-3 px-6 font-bold text-white rounded-full"
			>
				Back to home
			</Link>
		</div>
	)
}
