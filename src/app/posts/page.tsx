'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {

    const [posts, setPosts] = useState([{id: 0, title: '', content: ''}]);

    useEffect(() => {
        
        fetch('http://localhost:3000/api/v1/posts')
        .then(res => res.json())
        .then(setPosts);
    }, []);

  return (<>
  <h1>글 목록</h1>
  <ul>
    {posts.length == 0 && <div>로딩중...</div>}
    {posts.map((post) => (
        <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ))}
   
    </ul>
  </>);
}