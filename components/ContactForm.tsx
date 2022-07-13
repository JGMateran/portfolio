import { useForm, ValidationError } from '@formspree/react'

import { ArrowRight } from 'react-feather'

import { Container } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Social } from '@/components/Social'

import { Box } from '@/components/Box'
import { Divider } from '@/components/Divider'

export function ContactForm () {
  const [state, handleSubmit] = useForm('xnqwobwa')

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
      <div id="contact" className="pb-14 mt-14 border-t border-white -mx-6 border-dotted border-slate-500 dark:border-gray-600"></div>

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

        <form onSubmit={handleSubmit} method="POST">
          <Input
            label="Email"
            placeholder="john@doe.com"
            type="email"
            name="email"
            required={true}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <Input
            label="Message"
            placeholder="Hello, I would like to hire you for a job."
            as="textarea"
            className="h-36 resize-none"
            name="message"
            required={true}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

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
