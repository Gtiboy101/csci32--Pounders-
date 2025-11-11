import type { PrismaClient } from '@prisma/client'

export async function seedPermissions(prisma: PrismaClient) {
  const permissions = ['UserRead', 'UserWrite'] as const
  let count = 0

  for (const name of permissions) {
    const existing = await prisma.permission.findUnique({
      where: { name: name as any },
    })

    if (!existing) {
      await prisma.permission.create({
        data: { name: name as any },
      })
      count++
    }
  }

  console.log(`✅ Seeded permissions: ${count}`)
}
