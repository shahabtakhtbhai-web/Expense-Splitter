import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTABanner from "./CTABanner";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
