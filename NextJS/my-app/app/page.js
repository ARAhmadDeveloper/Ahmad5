import Link from 'next/link';
import { Suspense } from 'react';
import { User } from './user';

// import Contact from "./contact/page"
// import About from "./about/page"

export default function Home() {
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
   </div>
  );
}
