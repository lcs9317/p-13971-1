'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {

    const [posts, setPosts] = useState<{ [key: string]: any }[]>([]);

    useEffect(() => {
        setPosts([
            {id: 1, title: '명언 1', content: '명언 1 내용'},
            {id: 2, title: '명언 2', content: '명언 2 내용'},
            {id: 3, title: '명언 3', content: '명언 3 내용'},
        ]);
    }, []);

  return (<>
  <h1>글 목록</h1>
  <ul>
    {posts.map((post) => (
        <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ))}
   
    </ul>
  </>);
}