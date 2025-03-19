  import Hero from "./hero/hero";
  import Navbar from "./navbar/navbar";
  import FeaturedBlogs from './pages/topEngineering/featuredblog'


  export default function Home() {
    return (
      <div>
        <Navbar />
        <main style={{ paddingTop: "1px" }}>
          <Hero/>
          {/* Additional page content */}
          <FeaturedBlogs />
        </main>
      </div>
    );
  }