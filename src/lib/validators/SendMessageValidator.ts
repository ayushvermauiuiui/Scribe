import {z} from 'zod'

export const SendMesageValidator = z.object({
    fileId: z.string(),
    message: z.string()
})