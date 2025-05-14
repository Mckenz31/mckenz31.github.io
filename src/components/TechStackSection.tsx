
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TechItem {
  name: string;
  color: string;
}

export default function TechStackSection() {
  const techCategories = {
    languages: [
      { name: "JavaScript", color: "bg-tech-javascript text-black" },
      { name: "TypeScript", color: "bg-tech-typescript text-white" },
      { name: "Python", color: "bg-tech-python text-white" },
      { name: "R", color: "bg-blue-500 text-white" },
      { name: "Dart", color: "bg-sky-500 text-white" },
      { name: "MySQL", color: "bg-orange-500 text-white" },
      { name: "Postgres", color: "bg-blue-700 text-white" },
      { name: "Pinecone", color: "bg-purple-600 text-white" },
    ],
    cloud: [
      { name: "AWS ECS Fargate", color: "bg-tech-aws text-black" },
      { name: "AWS Lambda", color: "bg-tech-aws text-black" },
      { name: "AWS Cognito", color: "bg-tech-aws text-black" },
      { name: "AWS RDS", color: "bg-tech-aws text-black" },
      { name: "AWS Amplify", color: "bg-tech-aws text-black" },
      { name: "GCP Firestore", color: "bg-tech-gcp text-white" },
      { name: "GCP Cloud Run", color: "bg-tech-gcp text-white" },
    ],
    frameworks: [
      { name: "React", color: "bg-tech-react text-black" },
      { name: "Flutter", color: "bg-tech-flutter text-white" },
      { name: "Next.js", color: "bg-tech-nextjs text-white" },
      { name: "Node.js", color: "bg-green-600 text-white" },
      { name: "Express", color: "bg-gray-800 text-white" },
      { name: "Git", color: "bg-orange-600 text-white" },
      { name: "GitHub", color: "bg-gray-900 text-white" },
    ],
    ai: [
      { name: "AWS Bedrock", color: "bg-tech-aws text-black" },
      { name: "Vertex AI", color: "bg-tech-gcp text-white" },
      { name: "LangChain", color: "bg-green-600 text-white" },
      { name: "LangGraph", color: "bg-blue-600 text-white" },
      { name: "LlamaIndex", color: "bg-purple-500 text-white" },
    ],
  };

  return (
    <section id="tech-stack" className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Tech Stack</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="languages">Languages & DBs</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks & Tools</TabsTrigger>
            <TabsTrigger value="ai">AI/ML Tools</TabsTrigger>
          </TabsList>
          
          {Object.entries(techCategories).map(([category, techs]) => (
            <TabsContent value={category} key={category}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {techs.map((tech: TechItem) => (
                      <span 
                        key={tech.name}
                        className={`tech-tag transition-all duration-200 hover:scale-105 ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
