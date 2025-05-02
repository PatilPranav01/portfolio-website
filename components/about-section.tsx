import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Cpu, Globe, Palette } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive and accessible web interfaces with React, Next.js, and modern CSS.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications with Node.js, Express, and databases.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full Stack Solutions",
      description:
        "Developing end-to-end applications with seamless integration between frontend and backend.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and experiences with attention to detail.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with a strong foundation in
              building web applications. I specialize in JavaScript technologies
              across the stack, with expertise in React, Next.js, Node.js, and
              modern databases.
            </p>
            <p className="text-muted-foreground">
              My journey in web development began when I built my first website
              in college out of curiosity—and I’ve been hooked ever since. I've
              since dedicated my time to learning modern development practices,
              building personal and academic projects, and continuously
              improving my skills to keep up with the ever-evolving tech
              landscape.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or experimenting with new technologies.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lovely Professional University • 2022-2026
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                  Higher Secondary 
                  </h4>
                  <p className="text-sm text-muted-foreground">
                  Laxmi Narayan Jr College  • 2020-2021
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                  Secondary School 
                  </h4>
                  <p className="text-sm text-muted-foreground">
                  Sanskar Dnyanpeeth • 2018-2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">
              My Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="mb-2">{skill.icon}</div>
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML",
                "CSS",
                
                "php",
                  
                  "Java",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Git",
                  "Docker",
                  "AWS",
                  "Firebase",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-muted px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
//temp