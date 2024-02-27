import Link from 'next/link'
import React, { ReactNode } from 'react'

const postLists = async () => {

    const response = await fetch(`https://dummyjson.com/posts?limit=3`
    // we can prevent nextjs from caching with this
    // {cache: 'no-cache'}
    // we can also use the revalidate method 
    // {
    //     next: {
    //         revalidate: 3600
    //     }
    // }
    )

    interface Post {
        id: number;
        title: string;
        body: string;
        userId: number;
        tags: string[];
        reactions: number;
      }
      
      interface ApiResponse {
        posts: Post[];
        total: number;
        skip: number;
        limit: number;
      }

    const data:ApiResponse = await response.json()

    
  return (
    <div>
        {data.posts.map((post : Post)=>(
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>

          </div>
        ))}

    </div>
  )
}

export default postLists