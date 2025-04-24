"use client"

import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

export default function AddCertificatePage() {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
    credentialUrl: "",
    image: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Certificate added!",
      description: "Your certificate has been successfully added to your portfolio.",
    })

    setFormData({
      title: "",
      issuer: "",
      date: "",
      description: "",
      credentialUrl: "",
      image: null,
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container py-12 max-w-3xl">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/certificates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Certificates
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Add New Certificate</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Certificate Details</CardTitle>
            <CardDescription>Fill out the form below to add a new certificate to your portfolio.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Certificate Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter certificate title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="issuer">Issuing Organization</Label>
                  <Input
                    id="issuer"
                    name="issuer"
                    placeholder="e.g., Coursera, Udemy, etc."
                    required
                    value={formData.issuer}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date Issued</Label>
                  <Input
                    id="date"
                    name="date"
                    placeholder="Month Year (e.g., January 2023)"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe what you learned or achieved"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="credentialUrl">Credential URL</Label>
                <Input
                  id="credentialUrl"
                  name="credentialUrl"
                  placeholder="https://example.com/verify/credential"
                  value={formData.credentialUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Certificate Image</Label>
                <Input id="image" name="image" type="file" accept="image/*" onChange={handleFileChange} />
                <p className="text-sm text-muted-foreground">
                  Upload an image of your certificate. Max file size: 5MB.
                </p>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Adding Certificate..."
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Certificate
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
