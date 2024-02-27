import React from 'react'
import SubmitBtn from './submitBtn'
import { revalidatePath } from 'next/cache'

const addPostForm = () => {

    const addPost = async (formData: FormData)=>{
        'use server'

        // await Prisma.post.create({
        //     data: {
        //         title: formData.get("title") as string,
        //         body: formData.get("body") as string
        //     }
        // })
        revalidatePath("/posts")
    }
  return (
    <div>
        <form action={addPost} className='flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2'>
    <input name='title' placeholder='title' type="text" className='border rounded h-10 px-3' />
    <textarea name="body" placeholder='Body' rows={5} required className='border rounded px-3' />
    <SubmitBtn/>
        </form>
    </div>
  )
}

export default addPostForm