import type { FormEvent } from 'react'

import { useForm, ValidationError } from '@formspree/react'

import { Container } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Social } from '@/components/Social'
import { ArrowRight } from 'react-feather'

export function ContactForm () {
  const [state, onSubmit] = useForm('xnqwobwa')

  if (state.succeeded) {
    return (
      <h2>Se ha enviado el mensaje</h2>
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sending')
    // onSubmit()
  }

  return (
    <Container size="small" gap={false} className="my-14">
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

      <form onSubmit={handleSubmit}>
        <Input
          label="Correo electrónico"
          placeholder="john@doe.com"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <Input
          label="Mensaje"
          placeholder="what's up dude, I want to hire you"
          as="textarea"
          className="h-36 resize-none"
          name="message"
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
  )
}
