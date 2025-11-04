import { prisma } from '../src/client'

async function main() {
  // Create test users
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john@example.com',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
      },
      {
        name: 'Bob Wilson',
        email: 'bob@example.com',
      },
    ],
  })

  console.log(`Created ${users.count} users`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
