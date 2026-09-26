import Navbar from "@/components/Navbar";
import HeroTransformation from "@/components/HeroTransformation";
import Treatments from "@/components/Treatments";
import Doctors from "@/components/Doctors";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroTransformation />
      <Treatments />
      <Doctors />
      <Reviews />
      <Booking />
      <footer className="site-footer">
        <div className="container footer-inner">
          <div><span className="brand-mark">L</span> Luma Dental</div>
          <p>Modern dentistry. Human care.</p>
          <span>© 2026 Luma Dental</span>
        </div>
      </footer>
    </main>
  );
}
