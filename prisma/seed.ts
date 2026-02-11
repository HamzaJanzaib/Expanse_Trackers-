import { PrismaClient, CategoryType } from '@prisma/client'

const prisma = new PrismaClient()

const defaultCategories = [
  { name: 'Salary', type: CategoryType.INCOME },
  { name: 'Gift', type: CategoryType.INCOME },
  { name: 'Food', type: CategoryType.EXPENSE },
  { name: 'Rent', type: CategoryType.EXPENSE },
  { name: 'Transport', type: CategoryType.EXPENSE },
  { name: 'Health', type: CategoryType.EXPENSE },
  { name: 'Entertainment', type: CategoryType.EXPENSE }
]

async function main() {
  const systemFamily = await prisma.family.upsert({
    where: { id: 'seed-family' },
    update: {},
    create: {
      id: 'seed-family',
      name: 'Sample Family',
      description: 'Seed family with default categories'
    }
  })

  await Promise.all(
    defaultCategories.map((category) =>
      prisma.category.upsert({
        where: {
          id: `${systemFamily.id}-${category.name.toLowerCase()}`
        },
        update: {},
        create: {
          id: `${systemFamily.id}-${category.name.toLowerCase()}`,
          familyId: systemFamily.id,
          name: category.name,
          type: category.type
        }
      })
    )
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
