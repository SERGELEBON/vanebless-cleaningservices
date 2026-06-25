import { Navbar } from "@/components/vanebless/navbar";
import { HeroSlider } from "@/components/vanebless/hero-slider";
import { AboutSection } from "@/components/vanebless/about-section";
import { ServicesGrid } from "@/components/vanebless/services-grid";
import { GallerySection } from "@/components/vanebless/gallery-section";
import { TestimonialsSection } from "@/components/vanebless/testimonials-section";
import { QuoteSection } from "@/components/vanebless/quote-section";
import { ContactSection } from "@/components/vanebless/contact-section";
import { Footer } from "@/components/vanebless/footer";
import { FloatingWhatsApp } from "@/components/vanebless/floating-whatsapp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <ServicesGrid />
        <GallerySection />
        <TestimonialsSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
