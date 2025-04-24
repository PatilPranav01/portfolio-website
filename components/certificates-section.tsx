"use client"

import { useState } from "react"
import { Award, Calendar, ExternalLink, PlusCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  // Sample certificates - you can add or remove certificates as needed
  const certificates = [
    {
      id: 1,
      title: "ChatGPT Playground for Beginners: Intro to NLP AI",
      issuer: "Coursera Project Network",
      date: "April 2024",
      description:
        "An online non-credit project focused on introducing natural language processing and AI using ChatGPT. Offered through Coursera and authorized by Coursera Project Network.",
      image: "/chtgptplayground.png",
      credentialUrl: "https://coursera.org/verify/2D89NS5AGRXS",
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "October 2024",
      description:
        "Successfully completed a 12-week course on Cloud Computing offered by NPTEL and funded by the MoE, Govt. of India. Scored 54% (Online Assignments: 24.03/25, Proctored Exam: 30/75).",
      image: "nptel.png",
      credentialUrl: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S1670201933", // Replace with direct verify URL if available
    }
    ,
    {
      id: 3,
      title: "JAVA Backend Development - Live",
      issuer: "GeeksforGeeks",
      date: "Date not specified", // You can replace this with the actual date if known
      description:
        "Successfully completed a 12-week live course on JAVA Backend Development conducted by GeeksforGeeks.",
      image: "spring.png",
      credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/6443777d96130b9fe58c0ae354529f0a.pdf"
    }
    ,
    {
      id: 4,
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      date: "Nov. 14, 2023",
      description:
        "Completed a 58.5-hour course focused on mastering data structures and algorithms using C and C++, taught by Abdul Bari.",
      image: "/udemy.png",
      credentialUrl: "https://ude.my/UC-d912ddc2-c1f5-40f1-a483-13961caa94543"
    },
    {
      "id": 5,
      "title": "Algorithms on Strings",
      "issuer": "Coursera (UC San Diego & Higher School of Economics)",
      "date": "Feb 14, 2024",
      "description": "Completed an online non-credit course on Algorithms on Strings, authorized by the University of California San Diego and offered through Coursera.",
      "image": "/five.png",
      "credentialUrl": "https://coursera.org/verify/EPZU6Y4Q7KA9"
    }
    ,
    {
      "id": 6,
      "title": "GenAI for Everyone",
      "issuer": "Coursera (Fractal Analytics)",
      "date": "Feb 6, 2024",
      "description": "Completed an online non-credit course on GenAI for Everyone, authorized by Fractal Analytics and offered through Coursera.",
      "image": "/six.png",
      "credentialUrl": "https://coursera.org/verify/DRFKUFK5542D"
    },
    {
      "id": 7,
      "title": "Object Oriented Programming",
      "issuer": "Lovely Professional University",
      "date": "January 2024",
      "description": "Completed a 72-hour online course on Object Oriented Programming via iamneo platform, covering core concepts and practical applications.",
      "image": "/seven.png",
      "credentialUrl": "#"
    },
  ]

  // Display only the first 4 certificates initially
  const displayedCertificates = certificates.slice(0, 4)

  return (
    <section className="py-20 bg-muted/30" id="certificates">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Certificates & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm committed to continuous learning and professional development. Here are some of my certifications and
            achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCertificates.map((certificate) => (
            <Card key={certificate.id} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="line-clamp-1">{certificate.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {certificate.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{certificate.description}</p>
                <p className="text-sm font-medium mt-2">Issued by: {certificate.issuer}</p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedCertificate(certificate)}>
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    {selectedCertificate && (
                      <>
                        <DialogHeader>
                          <DialogTitle>{selectedCertificate.title}</DialogTitle>
                          <DialogDescription>
                            Issued by {selectedCertificate.issuer} • {selectedCertificate.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                          <Image
                            src={selectedCertificate.image || "/placeholder.svg"}
                            alt={selectedCertificate.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{selectedCertificate.description}</p>
                        <Button asChild className="w-full sm:w-auto">
                          <a
                            href={selectedCertificate.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Verify Credential
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/certificates">
              View All Certificates
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Add New Certificate Button - This would typically link to an admin page or form */}
        <div className="flex justify-center mt-6">
          <Button variant="outline" asChild>
            <Link href="/add-certificate">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Certificate
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
