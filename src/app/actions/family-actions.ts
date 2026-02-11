'use server'

import { revalidatePath } from 'next/cache'
import { randomUUID } from 'crypto'
import { Role } from '@prisma/client'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function createFamily(name: string, description?: string) {
  const user = await getCurrentUser()
  if (!user?.id) throw new Error('Unauthorized')

  const family = await prisma.family.create({
    data: {
      name,
      description,
      members: {
        create: {
          role: Role.ADMIN,
          userId: user.id
        }
      }
    }
  })

  revalidatePath('/dashboard/families')
  return family
}

export async function generateInvite(familyId: string) {
  const inviteCode = randomUUID()
  await prisma.family.update({
    where: { id: familyId },
    data: { inviteCode }
  })

  return inviteCode
}

export async function joinFamily(inviteCode: string) {
  const user = await getCurrentUser()
  if (!user?.id) throw new Error('Unauthorized')

  const family = await prisma.family.findUnique({ where: { inviteCode } })
  if (!family) throw new Error('Invalid invite code')

  await prisma.familyMember.upsert({
    where: {
      familyId_userId: {
        familyId: family.id,
        userId: user.id
      }
    },
    create: {
      familyId: family.id,
      userId: user.id,
      role: Role.MEMBER
    },
    update: {}
  })

  revalidatePath(`/dashboard/families/${family.id}`)
  return family.id
}
