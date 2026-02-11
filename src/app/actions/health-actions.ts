'use server'

import { HealthType } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'

export async function addHealthRecord(data: {
  userId: string
  familyId: string
  type: HealthType
  date?: Date
  description?: string
  cost?: number
  doctorName?: string
}) {
  const record = await prisma.healthRecord.create({ data })
  revalidatePath(`/dashboard/families/${data.familyId}/health`)
  return record
}

export async function getHealthRecords(familyId: string) {
  return prisma.healthRecord.findMany({
    where: { familyId },
    orderBy: { date: 'desc' }
  })
}
