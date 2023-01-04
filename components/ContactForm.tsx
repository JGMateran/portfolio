import type { ReactNode } from 'react'

import { useForm as useFormpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import { ArrowRight, AlertCircle } from 'react-feather'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Social } from '@/components/Social'

import { Box } from '@/components/Box'
import { Divider } from '@/components/Divider'

const VALID_EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

type ContactData = {
  email: string
  message: string
}

function Badge ({ children }: { children: ReactNode }) {
  return (
    <span className="p-4 justify-center text-sm flex items-center dark:text-white text-red-600">
      <AlertCircle className="mr-3" /> {children}
    </span>
  )
}

export function ContactForm () {
  const [state, onSubmit] = useFormpree('xnqwobwa')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactData>()

  if (state.succeeded) {
    return (
      <>
        <Divider />
        <Container size="small" gap={false}>
          <Box className="p-10">
            <h2 className="text-3xl font-bold mb-4">
              Successfully sent
            </h2>
            <Text>
              Thank you very much for contacting me, I will get back to you as soon as possible.
            </Text>
          </Box>
        </Container>
      </>
    )
  }

  return (
    <>
      <div id="contact" className="pb-14 mt-14 border-t -mx-6 border-dotted border-slate-500 dark:border-gray-600"></div>

      <Container size="small" gap={false}>
        <div className="text-center">
          <Heading size="big" className="mb-4">
            Contact me
          </Heading>
          <Text>
            I had love to hear from you. Send me a message and I’ll get back to you. I’m always happy to talk about new projects, opportunities, and collaborations.
          </Text>
        </div>

        <div className="flex justify-center mt-4 mb-8">
          <Social />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-6">
            <span className="block mb-2 text-sm font-bold">
              Email
            </span>
            <input
              type="text"
              className="block p-3 border-2 rounded-md w-full dark:bg-gray-800 dark:focus:border-gray-500 focus:outline-none dark:border-gray-600 border-gray-100 focus:border-gray-200 bg-slate-100 placeholder-gray-500"
              placeholder="john@doe.com"
              {...register('email', {
                required: true,
                pattern: VALID_EMAIL_REGEXP
              })}
            />

            { errors.email?.type === 'required' && <Badge>Email required</Badge> }
            { errors.email?.type === 'pattern' && <Badge>Must be a valid email</Badge> }
          </label>

          <label className="block mb-6">
            <span className="block mb-2 text-sm font-bold">
              Message
            </span>
            <textarea
              className="block p-3 border-2 rounded-md w-full dark:bg-gray-800 dark:focus:border-gray-500 focus:outline-none dark:border-gray-600 border-gray-100 focus:border-gray-200 bg-slate-100 placeholder-gray-500 h-36 resize-none"
              placeholder="Hello, I would like to hire you"
              {...register('message', {
                required: true
              })}
            />
            {
              errors.message?.type === 'required' && <Badge>Message required</Badge>
            }
          </label>

          <div className="flex justify-center">
            <Button
              variant="outlined"
              disabled={state.submitting}
              className="inline-flex space-x-2 items-center"
            >
              <span>
                {
                  state.submitting
                    ? 'Sending...'
                    : 'Send message'
                }
              </span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}
