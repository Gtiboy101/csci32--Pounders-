// Default role IDs - these should match the actual role IDs in your database
// You may need to update these values based on your database seeding

// This should be the role_id of the "User" role from your database
// You can find this by running: SELECT role_id FROM "Role" WHERE name = 'User';
export const BASIC_ROLE_ID = 'basic-user-role-id' // Update this with actual role_id

// Admin role ID for reference
export const ADMIN_ROLE_ID = 'admin-role-id' // Update this with actual role_id

// You can also export the role names if needed
export const ROLE_NAMES = {
  ADMIN: 'Admin',
  USER: 'User',
  MODERATOR: 'Moderator',
} as const
