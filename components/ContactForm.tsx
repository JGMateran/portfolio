'use client'

import { useForm as useFormpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import Textarea from 'react-textarea-autosize'

import { ArrowRight } from 'react-feather'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'

import { Badge } from '@/components/Badge'
import { Box } from '@/components/Box'
import { Divider } from '@/components/Divider'

const VALID_EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export function ContactForm() {
	const [state, onSubmit] = useFormpree('xnqwobwa')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	if (state.succeeded) {
		return (
			<>
				<Container>
					<Divider />
				</Container>

				<Container size="small">
					<Box className="p-10">
						<h2 className="text-3xl font-bold mb-4">
							Your message has been sent
						</h2>
						<Text>
							Thank you very much for contacting me, I will get back to you as
							soon as possible.
						</Text>
					</Box>
				</Container>
			</>
		)
	}

	return (
		<>
			<Container>
				<div
					id="contact"
					className="pb-14 mt-14 border-t -mx-6 border-dotted border-slate-500 dark:border-gray-600"
				/>
			</Container>
			<Container size="small">
				<div className="text-center">
					<Heading size="big" className="mb-4">
						Contact me
					</Heading>
					<Text>
						I had love to hear from you. Send me a message and I’ll get back to
						you. I’m always happy to talk about new projects, opportunities, and
						collaborations.
					</Text>
				</div>

				<div className="flex justify-center mt-4 mb-8">
					<Social />
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="block mb-6">
						<span className="block mb-2 text-sm font-bold">Email</span>
						<input
							type="text"
							className="block p-3 border-2 rounded-md w-full dark:bg-gray-800 dark:focus:border-gray-500 focus:outline-none dark:border-gray-600 border-gray-100 focus:border-gray-200 bg-slate-100 placeholder-gray-500"
							placeholder="john@doe.com"
							autoComplete="off"
							{...register('email', {
								required: true,
								pattern: VALID_EMAIL_REGEXP,
							})}
						/>

						{errors.email?.type === 'required' && <Badge>Email required</Badge>}
						{errors.email?.type === 'pattern' && (
							<Badge>Must be a valid email</Badge>
						)}
					</label>

					<label className="block mb-6">
						<span className="block mb-2 text-sm font-bold">Message</span>
						<Textarea
							className="block p-3 border-2 rounded-md w-full dark:bg-gray-800 dark:focus:border-gray-500 focus:outline-none dark:border-gray-600 border-gray-100 focus:border-gray-200 bg-slate-100 placeholder-gray-500"
							placeholder="Hello, I would like to hire you"
							minRows={4}
							{...register('message', {
								required: true,
							})}
						/>
						{errors.message?.type === 'required' && (
							<Badge>Message required</Badge>
						)}
					</label>

					<div className="flex justify-center">
						<Button
							disabled={state.submitting}
							className="inline-flex space-x-2 items-center"
						>
							<span>{state.submitting ? 'Sending...' : 'Send message'}</span>
							<ArrowRight className="w-4 h-4" />
						</Button>
					</div>
				</form>
			</Container>
		</>
	)
}
