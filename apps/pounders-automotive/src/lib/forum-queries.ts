import { gql } from 'graphql-request'

export const GET_FORUM_POSTS = gql`
  query GetForumPosts($category: String) {
    forumPosts(category: $category) {
      post_id
      title
      content
      category
      isSticky
      isLocked
      createdAt
      updatedAt
      author {
        user_id
        name
        email
      }
      replies {
        reply_id
        content
        createdAt
        author {
          user_id
          name
        }
      }
    }
  }
`

export const GET_FORUM_POST = gql`
  query GetForumPost($postId: String!) {
    forumPost(post_id: $postId) {
      post_id
      title
      content
      category
      isSticky
      isLocked
      createdAt
      updatedAt
      author {
        user_id
        name
        email
      }
      replies {
        reply_id
        content
        createdAt
        author {
          user_id
          name
        }
      }
    }
  }
`

export const CREATE_FORUM_POST = gql`
  mutation CreateForumPost($input: CreatePostInput!) {
    createForumPost(input: $input) {
      post_id
      title
      content
      category
      createdAt
      author {
        name
      }
    }
  }
`

export const CREATE_FORUM_REPLY = gql`
  mutation CreateForumReply($input: CreateReplyInput!) {
    createForumReply(input: $input) {
      reply_id
      content
      createdAt
      author {
        name
      }
    }
  }
`

export const GET_FORUM_CATEGORIES = gql`
  query GetForumCategories {
    forumCategories
  }
`
