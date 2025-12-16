import { PrismaClient } from '@prisma/client'
export const ADMIN_ROLE_ID = 'role-admin'
export const BASIC_ROLE_ID = 'role-basic'

export async function seedRoles(prisma: PrismaClient) {
  const adminRole = await prisma.role.upsert({
    where: { role_id: ADMIN_ROLE_ID },
    update: {},
    create: {
      role_id: ADMIN_ROLE_ID,
      name: 'Admin' as any, // Using string literal instead of enum
    },
  })

  const basicRole = await prisma.role.upsert({
    where: { role_id: BASIC_ROLE_ID },
    update: {},
    create: {
      role_id: BASIC_ROLE_ID,
      name: 'Basic' as any, // Using string literal instead of enum
    },
  })

  const [userRead, userWrite, forumRead, forumWrite] = await Promise.all([
    prisma.permission.findUnique({ where: { name: 'UserRead' as any } }),
    prisma.permission.findUnique({ where: { name: 'UserWrite' as any } }),
    prisma.permission.findUnique({ where: { name: 'ForumRead' as any } }),
    prisma.permission.findUnique({ where: { name: 'ForumWrite' as any } }),
  ])

  if (!userRead || !userWrite || !forumRead || !forumWrite) throw new Error('Permissions must be seeded first!')

  // Create role permissions one by one to avoid SQLite limitations
  const rolePermissions = [
    { role_id: ADMIN_ROLE_ID, permission_id: userRead.permission_id },
    { role_id: ADMIN_ROLE_ID, permission_id: userWrite.permission_id },
    { role_id: ADMIN_ROLE_ID, permission_id: forumRead.permission_id },
    { role_id: ADMIN_ROLE_ID, permission_id: forumWrite.permission_id },
    { role_id: BASIC_ROLE_ID, permission_id: userRead.permission_id },
    { role_id: BASIC_ROLE_ID, permission_id: forumRead.permission_id },
    { role_id: BASIC_ROLE_ID, permission_id: forumWrite.permission_id },
  ]

  for (const rp of rolePermissions) {
    const existing = await prisma.rolePermission.findUnique({
      where: { role_id_permission_id: { role_id: rp.role_id, permission_id: rp.permission_id } },
    })

    if (!existing) {
      await prisma.rolePermission.create({
        data: rp,
      })
    }
  }

  console.log(`✅ Seeded roles: ${adminRole.name}, ${basicRole.name}`)
  return { adminRole, basicRole }
}
