'use server'

import { Frequency } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'

export async function assignPocketMoney(data: {
  childId: string
  familyId: string
  amount: number
  frequency: Frequency
  nextDate: Date
}) {
  const record = await prisma.pocketMoney.create({ data })
  revalidatePath(`/dashboard/families/${data.familyId}/pocket-money`)
  return record
}

export async function getChildBalance(childMemberId: string) {
  const entries = await prisma.transaction.findMany({
    where: {
      pocketMoney: {
        childId: childMemberId
      }
    }
  })

  return entries.reduce((total, entry) => total + entry.amount, 0)
}
