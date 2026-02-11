'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'

export async function addDailyLog(data: {
  userId: string
  familyId: string
  date?: Date
  mood?: number
  activity?: string
  notes?: string
}) {
  const log = await prisma.dailyLog.create({ data })
  revalidatePath(`/dashboard/families/${data.familyId}/daily`)
  return log
}

export async function getDailyLogs(familyId: string) {
  return prisma.dailyLog.findMany({
    where: { familyId },
    orderBy: { date: 'desc' }
  })
}
