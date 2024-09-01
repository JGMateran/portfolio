import { z } from 'zod'

const serverEnvitomentSchema = z.object({
	NEXT_PUBLIC_HOME_URL: z.string().trim().min(1),
})

export default serverEnvitomentSchema.parse(process.env)
