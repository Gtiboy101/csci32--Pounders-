import type { AuthChecker } from 'type-graphql'
import type { Context } from '@/utils/graphql'
import { PermissionName } from 'csci32-database'
import { extractTokenFromHeader, verifyToken } from '@/utils/auth'

export const customAuthChecker: AuthChecker<Context> = ({ context, info }, requiredPermissions) => {
  // Allow introspection queries (GraphiQL needs these to function)
  if (info.fieldName.startsWith('__')) {
    return true
  }

  const authHeader = context.request.headers.authorization
  const token = extractTokenFromHeader(authHeader)

  if (!token) {
    return false
  }

  try {
    const payload = verifyToken(token)

    // ✅ If no specific permissions are required, any authenticated user passes
    if (!requiredPermissions.length) {
      return true
    }

    const userPerms = payload.permissions ?? []

    // ✅ Check that the user has all required permissions
    return requiredPermissions.every((perm) => userPerms.includes(perm as PermissionName))
  } catch (err) {
    return false
  }
}
