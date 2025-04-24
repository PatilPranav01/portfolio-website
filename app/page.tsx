import { ChevronDown } from "lucide-react"
import Link from "next/link"
import AboutSection from "@/components/about-section"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <div className="container flex justify-center py-8">
          <Link
            href="#contact"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Get in touch</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
