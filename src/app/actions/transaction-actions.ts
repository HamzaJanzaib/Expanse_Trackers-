'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { transactionSchema } from '@/lib/validations/transaction'

export async function getTransactions(familyId: string) {
  return prisma.transaction.findMany({
    where: { familyId },
    include: {
      category: true,
      paidBy: true
    },
    orderBy: { date: 'desc' }
  })
}

export async function createTransaction(payload: unknown) {
  const data = transactionSchema.parse(payload)

  const transaction = await prisma.transaction.create({ data })
  revalidatePath(`/dashboard/families/${data.familyId}/transactions`)

  return transaction
}

export async function deleteTransaction(transactionId: string, familyId: string) {
  await prisma.transaction.delete({ where: { id: transactionId } })
  revalidatePath(`/dashboard/families/${familyId}/transactions`)
}
