import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const title = searchParams.get('title')

	if (typeof title !== 'string') {
		return new Response('title is required', {
			status: 422,
		})
	}

	const interRegular = fetch(
		new URL('../../../public/Inter-Regular.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())

	return new ImageResponse(
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#fff',
				padding: 64,
				background: '#1b1e23',
				color: '#fff',
				fontFamily: '"Inter"',
			}}
		>
			<div style={{ display: 'flex' }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					viewBox="0 0 160 160"
					fill="none"
				>
					<title>Logo</title>
					<rect width="160" height="160" rx="10" fill="white" />
					<path
						d="M53.321 117V44.2727H82.0142C87.5066 44.2727 92.1941 45.2552 96.0767 47.2202C99.983 49.1615 102.954 51.9195 104.99 55.4943C107.05 59.0455 108.08 63.224 108.08 68.0298C108.08 72.8594 107.038 77.0142 104.955 80.4943C102.871 83.9508 99.8527 86.6023 95.8991 88.4489C91.9692 90.2955 87.2107 91.2188 81.6236 91.2188H62.4119V78.8608H79.1378C82.0734 78.8608 84.5118 78.4583 86.4531 77.6534C88.3944 76.8485 89.8385 75.6411 90.7855 74.0312C91.7562 72.4214 92.2415 70.4209 92.2415 68.0298C92.2415 65.6151 91.7562 63.5791 90.7855 61.9219C89.8385 60.2647 88.3826 59.0099 86.4176 58.1577C84.4763 57.2817 82.026 56.8438 79.0668 56.8438H68.6974V117H53.321ZM92.5966 83.9034L110.672 117H93.6974L76.0128 83.9034H92.5966Z"
						fill="#1B1E23"
					/>
				</svg>
			</div>
			<div
				style={{
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<h2
					style={{
						fontSize: 64,
						margin: 0,
					}}
				>
					{title}
				</h2>
			</div>
			<div
				style={{
					display: 'flex',
				}}
			>
				<img
					alt=""
					src="https://www.github.com/JGMateran.png"
					width={100}
					height={100}
					style={{
						borderRadius: '50%',
						width: 64,
						height: 64,
					}}
				/>
				<div
					style={{
						display: 'flex',
						paddingLeft: 20,
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h2
						style={{
							fontSize: 28,
							margin: '0 0 2px',
						}}
					>
						Greg.tsx
					</h2>
					<span
						style={{
							fontSize: 20,
							margin: 0,
							color: '#8e96a4',
						}}
					>
						@reburn_dev
					</span>
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					data: await interRegular,
					name: 'Inter',
				},
			],
		},
	)
}
