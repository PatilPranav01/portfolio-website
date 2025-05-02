"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />

      <div className="container relative z-10 flex flex-col items-center text-center gap-6 py-20">
        <div className="rounded-full bg-muted p-2 px-4 mb-4">
          <p className="text-sm font-medium">Welcome to my portfolio</p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Pranav</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="max-w-[600px] text-muted-foreground md:text-lg">
          I build accessible, responsive, and performant web applications with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex gap-4 mt-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/PatilPranav01" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/pranav9096/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:patil.pranav9096@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}
//temp