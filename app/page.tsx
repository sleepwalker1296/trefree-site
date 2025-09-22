import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactTeaser } from "@/components/contact-teaser"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0E2A] text-[#E8EBFF] relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B0E2A] via-[#1a237e] to-[#4a148c] opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial from-[#00D1FF]/10 via-transparent to-[#FF4FD8]/10 animate-pulse" />

      <div className="relative z-10">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <Benefits />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FAQ />
          <ContactTeaser />
        </main>
        <Footer />
      </div>
    </div>
  )
}
