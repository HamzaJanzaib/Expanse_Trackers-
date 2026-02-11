import { CategoryType } from '@prisma/client'
import { z } from 'zod'

export const transactionSchema = z.object({
  familyId: z.string().min(1),
  amount: z.coerce.number().positive(),
  description: z.string().max(300).optional(),
  categoryId: z.string().min(1),
  type: z.nativeEnum(CategoryType),
  paidById: z.string().min(1),
  date: z.coerce.date()
})
