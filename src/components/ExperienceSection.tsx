
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  tech: string[];
  achievements: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Connect2Co",
      position: "Chief Technology Officer",
      duration: "October 2024 - Present",
      location: "Texas, US",
      tech: ["React", "Node", "TypeScript", "AWS ECS", "RDS Postgres", "Lambda", "Cognito", "Amplify"],
      achievements: [
        "Led all aspects of product development, including full-stack engineering, database design, cloud infrastructure, and deployment.",
        "Built and managed a small technical team including a freelancer and a designer; oversaw execution, code quality, and UI/UX direction.",
        "Translated direct customer insights into feature development, resulting in 9 paying customers and 32 users.",
        "Launched Connect2Co in February 2021, leading to a $300K federal letter of intent within one month."
      ]
    },
    {
      company: "Connect2Co",
      position: "Full Stack Engineer",
      duration: "September 2024",
      location: "Texas, US",
      tech: ["React", "Node", "TypeScript", "AWS"],
      achievements: [
        "Carried out development, updates, and optimizations for the Connect2Co MVP, including implementing necessary fixes and enhancements.",
        "Optimized AWS spend, reducing the cost by more than 24%.",
        "Plan the development of Connect2Co V1 by creating detailed documentation and reports that outline the roadmap, necessary technologies, and steps for building the next version."
      ]
    },
    {
      company: "Branchly",
      position: "Technical Intern",
      duration: "June 2024 - August 2024",
      location: "Texas, US",
      tech: ["Python", "Web Development", "AI/ML", "Data Analytics"],
      achievements: [
        "Developing fullstack web applications as products for partners, aimed at increasing their user engagement.",
        "Tasked with integrating chatbots in Branchly's main page to increase lead generation, and offer more personalized experiences.",
        "Utilizing Python, to look into existing metrics to transform data into key insights to improve business decisions."
      ]
    },
    {
      company: "The University of Texas at Tyler",
      position: "Lab Technician",
      duration: "June 2024 - August 2024",
      location: "Texas, US",
      tech: ["R", "Python", "TensorFlow", "Neural Networks"],
      achievements: [
        "Developing new predictive neural network models based on the results of initial models, leveraging R, Python and Tensorflow.",
        "Consolidating research findings and co-authoring two research papers with UT Tyler's pharmacy and computer science departments."
      ]
    },
    {
      company: "The University of Texas at Tyler",
      position: "Research Assistant",
      duration: "January 2023 - May 2024",
      location: "Texas, US",
      tech: ["R", "Python", "SQL", "TensorFlow", "Big Data", "Linux"],
      achievements: [
        "Spearheaded research with UT Tyler's pharmacy and computer science departments to identify unknown, harmful drug interactions.",
        "Big data analysis and manipulation of more than 19.75 million Adverse Reaction reports using R and SQL on Linux Servers.",
        "Utilized R, Python and TensorFlow to obtain mortality outcome prediction of 72% & 7 adverse reactions outcome prediction of 62%."
      ]
    },
    {
      company: "The University of Texas at Tyler",
      position: "Graduate Assistant",
      duration: "September 2022 - December 2022",
      location: "Texas, US",
      tech: ["Linux", "Teaching", "Research"],
      achievements: [
        "Optimizing Linux Servers and increased its performance. Did a lot of literature surveys for upcoming research work.",
        "Peer reviewed papers.",
        "Also performed the duties of a Teaching Assistant for Analysis and Logical Design, improving overall class GPA by 10.42%."
      ]
    },
    {
      company: "Woosong University",
      position: "Research Intern",
      duration: "July 2021 - September 2021",
      location: "Daejeon, South Korea",
      tech: ["Flutter", "Dart", "Hive", "NoSQL"],
      achievements: [
        "Built a task management application to tackle the time-based planning fallacy using anchoring and adjustment methodology",
        "Local storage management was created using Hive, a NoSQL database to perform CRUD operations on the host's storage",
        "Illustrated results via several visualization charts following data analytics of timed tasks recorded in the application"
      ]
    },
    {
      company: "Vault Infosec",
      position: "Intern Project Engineer",
      duration: "July 2020 - November 2020",
      location: "Chennai, India",
      tech: ["Front-end Development", "UI Design", "API Testing", "Postman"],
      achievements: [
        "Headed the front-end development for creating the administrative pages for a commercial network security product.",
        "Re-designed and validated several user interfaces for component build pages, to enhance user experience.",
        "Collaborated with the back-end team to design the data structures for efficient API usage and testing them using Postman."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {experiences.map((job, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/30">
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-left w-full">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold">{job.position}</p>
                    <p className="text-primary">{job.company}</p>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{job.duration}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="mt-4">
                  <h4 className="font-mono text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <h4 className="font-mono text-sm mb-2">Key achievements:</h4>
                  <ul className="list-disc list-outside pl-5 space-y-2">
                    {job.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
