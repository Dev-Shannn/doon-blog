
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <h1>Welcome to the Website</h1>
        <Hero/>
        {/* Additional page content */}
      </main>
    </div>
  );
}
