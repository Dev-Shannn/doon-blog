
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "1px" }}>
        <Hero/>
        {/* Additional page content */}
      </main>
    </div>
  );
}
