
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  award?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      name: "TokGen",
      description: "RAG-based multimodal TikTok assistant built with a team of 5 individuals. It provides a chatbot that interacts with users based on a Multi-modal architecture, offering customized suggestions tailored to their interactions.",
      tech: ["LlamaIndex", "Gemini Vision Pro", "Llava 1.6", "GPT-4", "Whisper", "Qdrant", "StreamLit"],
    },
    {
      name: "Rewind",
      description: "AI-powered education platform that facilitates the use of generative AI to assist in education. Features include summarizing text, generating AI-powered audio from lectures, AI flashcards, customized quizzes, and a chatbot.",
      tech: ["Flutter", "Python", "FastAPI", "VertexAI", "ElevenLab"],
      award: "Google Cloud – Overall Winner & MLH: Best Use of AI in Education at AI ATL",
    },
    {
      name: "FoodBuddy",
      description: "Mobile and web application that keeps track of pantry items along with their expiration dates to minimize food wastage and provides tailored recipe recommendations based on the available ingredients.",
      tech: ["Flutter", "React", "Django", "Python", "Machine Learning"],
      award: "1st Place Winner at HackNC 2023",
    },
    {
      name: "Virtual Assistance",
      description: "Affordable, ergonomic wearable for assisting the visually impaired, using Python and TensorFlow on a Raspberry Pi. A mobile app built with Flutter and Firebase offers secure location tracking for user safety.",
      tech: ["Python", "TensorFlow", "Raspberry Pi", "Flutter", "Firebase"],
    },
    {
      name: "Dance Battle",
      description: "Miniature, cost-efficient, portable dance battle board with software created using React, Python, Node.js, and Express embedded into the Raspberry Pi, connected with Firebase for both local and online competitions.",
      tech: ["React", "Python", "Node.js", "Express", "Raspberry Pi", "Firebase"],
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Projects & Hackathons</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card transition-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{project.name}</span>
                  {project.award && (
                    <span className="flex items-center text-amber-500">
                      <Award size={16} className="mr-1" />
                    </span>
                  )}
                </CardTitle>
                {project.award && (
                  <CardDescription className="text-amber-500">
                    {project.award}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">{tech}</Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline">+{project.tech.length - 3} more</Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
