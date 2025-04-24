"use client"

import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsSection() {
  // Sample projects - you can add or remove projects as needed
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/ecommerce.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality and team collaboration features.",
      image: "/taskmanager.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with private chats, group conversations, and media sharing capabilities.",
      image: "/chat.png",
      tags: ["Next.js", "Socket.io", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current conditions and forecasts for multiple locations.",
      image: "/weather.png",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Content Management System",
      description: "A custom CMS with user roles, content publishing workflow, and analytics integration.",
      image: "\cms.png",
      tags: ["Next.js", "PostgreSQL", "GraphQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Tasty Trails - Restaurant Website",
      description: "Developed a responsive website using React.js, Node.js, and MongoDB for dynamic menus and online reservations. Designed an intuitive UI for a seamless user experience.",
      image: "rest.png", // Replace with your actual image path
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB", "React.js", "Node.js"],
      demoUrl: "https://tastytrails-demo.vercel.app", // Replace with your actual live URL
      githubUrl: "https://github.com/yourusername/tasty-trails" // Replace with your actual repo URL
    },
    {
      id: 7,
      title: "Hospital Management System",
      description: "Built a React.js-based platform with MongoDB for automated appointment scheduling and patient management. Integrated doctor availability tracking and secure patient data handling.",
      image: "\hospital.png", // Replace with your actual image path
      tags: ["React.js", "MongoDB", "Node.js", "Express.js"],
      demoUrl: "https://hospital-management-demo.vercel.app", // Replace with your actual live URL
      githubUrl: "https://github.com/yourusername/hospital-management-system" // Replace with your actual repo URL
    },
    {
      id: 8,
      title: "Movie Ticket Booking",
      description: "A web application that allows users to browse movies, select showtimes, and book tickets online seamlessly.",
      image: "\movie.png",
      tags: ["Java", "Spring Boot", "React", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    
    
    {
      id: 9,
      title: "Cryptocurrency Dashboard",
      description:
        "A real-time dashboard for tracking cryptocurrency prices, portfolio performance, and market trends.",
      image: "\crypto.png",
      tags: ["React", "WebSockets", "Chart.js", "Crypto API"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  // Display only the first 6 projects initially
  const displayedProjects = projects.slice(0, 6)

  return (
    <section className="py-20" id="projects">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've
            mastered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
