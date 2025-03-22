import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import FeaturedBlogs from "./pages/topEngineering/featuredblog"; // ✅ Corrected import path
import constants from "constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "1px" }}>
        <Hero />
        <FeaturedBlogs /> {/* ✅ Displays the list of colleges */}
      </main>
    </div>
  );
}
