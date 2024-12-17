import { Metadata } from "next"
import Link from "next/link"

async function getData() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
    if(!response.ok) throw new Error("Unable to fetch posts")

    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Test-app'
}

export default async function Blog() {
    const posts = await getData();
    return ( 
        <>
        <h1>blog</h1>
        <ul>
            { posts.map(( post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}> {post.title}</Link>
                </li>
            ))}
        </ul>
        </>
        
    )
}