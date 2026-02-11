'use server'

import { CategoryType } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'

export async function getCategories(familyId: string) {
  return prisma.category.findMany({
    where: { familyId },
    orderBy: { createdAt: 'asc' }
  })
}

export async function createCategory(data: {
  familyId: string
  name: string
  type: CategoryType
  parentId?: string
}) {
  const category = await prisma.category.create({ data })
  revalidatePath(`/dashboard/families/${data.familyId}/categories`)
  return category
}

export async function deleteCategory(categoryId: string, familyId: string) {
  await prisma.category.delete({ where: { id: categoryId } })
  revalidatePath(`/dashboard/families/${familyId}/categories`)
}
