import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge'
}

export default async function handler (req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text')

  const interRegularPath = new URL('../../public/Inter-Regular.ttf', import.meta.url).toString()
  const interBoldPath = new URL('../../public/Inter-Bold.ttf', import.meta.url).toString()

  const interRegular = await fetch(interRegularPath).then((res) => res.arrayBuffer())
  const interBold = await fetch(interBoldPath).then((res) => res.arrayBuffer())

  if (req.method !== 'GET') {
    return new Response(
      `Method ${req.method} is not allowed`, {
        status: 400
      }
    )
  }

  if (!text) {
    return new Response(
      'text is required',
      {
        status: 422
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#16191d',
          color: '#fff',
          padding: 48,
          fontFamily: '"Inter"'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            src="https://www.github.com/JGMateran.png"
            width={100}
            height={100}
            style={{
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              marginLeft: 32,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 32,
                marginBottom: 8,
                fontFamily: '"InterBold"'
              }}
            >
              Greg.tsx
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 24,
                color: '#646D7D'
              }}
            >
              @reburn_dev
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}></div>
        <h2
          style={{
            margin: 0,
            fontSize: 54,
            fontFamily: '"InterBold"'
          }}
        >
          {text}
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: interRegular,
          name: 'Inter'
        },
        {
          data: interBold,
          name: 'InterBold'
        }
      ]
    }
  )
}
