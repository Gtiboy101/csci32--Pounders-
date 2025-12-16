import { Query, Resolver } from 'type-graphql'

@Resolver()
export class ForumResolver {
  @Query(() => [String])
  async forumCategories(): Promise<string[]> {
    // Return mockup categories for development
    return [
      'General Discussion',
      'Maintenance & Technical',
      'Reviews & Recommendations',
      'Buying & Selling',
      'Performance & Modifications',
      'News & Industry Updates',
    ]
  }

  @Query(() => String)
  async forumStatus(): Promise<string> {
    return 'Forum functionality is under development. Check back soon!'
  }
}
