/* 
    Used to render a post in the blog at the uri https://.../posts/[id]

    We pass in the url a parameter of "id" which corresponds to the name of the post markdown file in the
    public/Posts/Markdown folder. The markdown file will be [id].md
 */
import Head from "next/head"
import { notFound, redirect } from 'next/navigation'

export default async function Post({ params }) {
    const { id } = params; /* Important to get id correctly */
    const req = await fetch(`http://localhost:3000/Posts/Posts.json`);
    const json = await req.json();
    
    const post: Post = json.posts.find((Post: Post) => Post.id === parseInt(id));
    if(!post) // Redirect to 404 if post is not found
        return notFound();

    //const reqMD = await fetch(`http://localhost:3000/Posts/Markdown/${post.id}.md`);
    return(<>
        <Head>
            <title>{post.title}</title>
        </Head>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
    </>)
}