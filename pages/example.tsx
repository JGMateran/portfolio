import type { GetServerSideProps } from 'next'

import { useEffect } from 'react'

type ExamplePageProps = {
  example: any,
  error: boolean
}

export default function ExamplePage ({
  example,
  error
}: ExamplePageProps) {
  useEffect(
    () => {
      console.log({ example, error })
    },
    [example, error]
  )
  return (
    <div className="min-h-screen bg-white p-6">
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/example', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const json = await res.json()

  return {
    props: {
      example: json
    }
  }
}
