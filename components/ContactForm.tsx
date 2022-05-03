import { useForm, ValidationError } from '@formspree/react'

import { Container } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Social } from '@/components/Social'

export function ContactForm () {
  const [state, handleSubmit] = useForm('xnqwobwa')

  if (state.succeeded) {
    return (
      <h2>Se ha enviado el mensaje</h2>
    )
  }

  return (
    <Container size="small" gap={false} className="my-14">
      <div className="text-center">
        <Heading size="big" className="mb-4">
          Contact me
        </Heading>
        <Text className="">
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
          placeholder="I want to work with you"
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
          <Button variant="outlined" disabled={state.submitting}>
            Send message
          </Button>
        </div>
      </form>
    </Container>
  )
}
