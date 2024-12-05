import Navbar from "../../components/navbar/Navbar";
import Hero from '../../components/hero/Hero';
import BlogSection from "../../components/blogSection/BlogSection";
import Footer from "../../components/footer/Footer";



function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
    <BlogSection />
     <Footer />
    </div>
  );
}

export default Home;
