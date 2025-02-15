"use client" // Needed for next.js when using useState

import styles from "./ArticleCard.module.css";
import { redirect } from 'next/navigation'

export default function ArticleCard({ post }: { post: Post }) {

    return (
        <div className={styles.container} onClick={() => redirect(`/posts/${post.id}`)}>
            <div className={styles.articlePreview}>
                <h1 className="text-xl">{post.title}</h1>
                <p className="text-sm opacity-70 italic">{post.createdAt.toString()}</p>
                <p>{post.description}</p>
            </div>
        </div>
    );
}