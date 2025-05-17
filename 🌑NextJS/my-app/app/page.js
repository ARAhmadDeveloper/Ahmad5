import Link from 'next/link';
import { Suspense } from 'react';
import { User } from './user';


export default async function Home() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log(posts[0])
  return (
   <div>
<Link href="/about">
 About Page
</Link>
<br />
<Link href="/form">Form Page
</Link>
<br />
<Link href="/blog">Blog Page
</Link>
    {/* <Contact /> */}
    <h1>Hello Next JS</h1>
    {/* <About /> */}
    <section>
      <h1>This will be prerendered</h1>
      <Suspense>
        <User />
      </Suspense>
    </section>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
   </div>
  );
}
