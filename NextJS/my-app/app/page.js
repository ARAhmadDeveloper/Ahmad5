import Link from 'next/link';

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
   </div>
  );
}
