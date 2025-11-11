// Removed explicit express type import to avoid needing @types/express in this demo mock

// Mock user storage (in-memory for demo)
const users = new Map<string, { user_id: string; name?: string; email: string; password: string }>()

// Simple JWT-like token generation (for demo only)
function generateToken(userId: string): string {
  return `mock_token_${userId}_${Date.now()}`
}

// Mock authentication endpoints
export function setupMockAuth(app: any) {
  // Health check endpoint
  app.get('/health', (req: any, res: any) => {
    res.json({ status: 'ok', service: 'pounders-automotive-backend' })
  })

  // GraphQL endpoint mock for authentication
  app.post('/api/graphql', (req: any, res: any) => {
    const { query, variables } = req.body

    if (query.includes('signUp')) {
      const { input } = variables
      const userId = `user_${Date.now()}`

      // Check if user already exists
      for (const [, user] of users) {
        if (user.email === input.email) {
          return res.status(200).json({
            errors: [{ message: 'A user with this email already exists' }],
          })
        }
      }

      // Create new user
      const newUser = {
        user_id: userId,
        name: input.name,
        email: input.email,
        password: input.password,
      }
      users.set(userId, newUser)

      const token = generateToken(userId)

      res.json({
        data: {
          signUp: {
            token,
            user_id: newUser.user_id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      })
    } else if (query.includes('signIn')) {
      const { input } = variables

      // Find user by email
      let foundUser = null
      for (const [, user] of users) {
        if (user.email === input.email) {
          foundUser = user
          break
        }
      }

      if (!foundUser || foundUser.password !== input.password) {
        return res.status(200).json({
          errors: [{ message: 'Invalid email or password' }],
        })
      }

      const token = generateToken(foundUser.user_id)

      res.json({
        data: {
          signIn: {
            token,
            user_id: foundUser.user_id,
            name: foundUser.name,
            email: foundUser.email,
          },
        },
      })
    } else {
      res.status(400).json({
        errors: [{ message: 'Unsupported query' }],
      })
    }
  })
}
