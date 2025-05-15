import Link from 'next/link';
import { Suspense } from 'react';
import { User } from './user';

// import Contact from "./contact/page"
// import About from "./about/page"

export default async function Home() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log(posts[0])
  return (
   <div>
<Link href="/about">
 About Page
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
