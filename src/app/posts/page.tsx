import Link from 'next/link'
import React, { Suspense } from 'react'
import PostLists from '../components/postLists'
import AddPostForm from '../components/addPostForm'
// import Prisma

//so that the server 
// export const dynamic = "force dynamic"

const PostsPage=async()=> {


 
  return (
    <main className='text-center pt-16 px-5'>
        <AddPostForm></AddPostForm>
        <h1 className='text-5xl font-semibold mb-7'>All posts</h1>
        <Suspense fallback="...loading">
        <PostLists/>
        </Suspense>
       

        {/* <Link href={'/1'}>
        <p></p>
        </Link>
        <Link href={'/2'}><p></p></Link>
        <Link href={'/3'}><p></p></Link> */}
    </main>
  )
}

export default PostsPage