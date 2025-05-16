import { Card, CardContent } from "@/components/ui/card";

export default function TechStackSection() {
  const techCategories = {
    languages: {
      title: "Languages & DBs",
      items: [
        { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
        { name: "Python", logo: "https://cdn.simpleicons.org/python" },
        { name: "R", logo: "https://cdn.simpleicons.org/r" },
        { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
        { name: "Postgres", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "Pinecone" },
      ]
    },
    cloud: {
      title: "Cloud",
      items: [
        { name: "AWS ECS Fargate", logo: "https://icon.icepanel.io/AWS/svg/Compute/Fargate.svg" },
        { name: "AWS Lambda", logo: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" },
        { name: "AWS Cognito", logo: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Cognito.svg" },
        { name: "AWS RDS", logo: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg" },
        { name: "AWS Amplify", logo: "https://cdn.simpleicons.org/awsamplify" },
        { name: "GCP Firestore", logo: "https://cdn.simpleicons.org/googlecloud" },
        { name: "GCP Cloud Run", logo: "https://cdn.simpleicons.org/googlecloud" },
      ]
    },
    frameworks: {
      title: "Frameworks & Tools",
      items: [
        { name: "React", logo: "https://cdn.simpleicons.org/react" },
        { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
        { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", logo: "https://cdn.simpleicons.org/express" },
        { name: "Git", logo: "https://cdn.simpleicons.org/git" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
      ]
    },
    ai: {
      title: "AI/ML Tools",
      items: [
        { name: "AWS SageMaker", logo: "https://icon.icepanel.io/AWS/svg/Machine-Learning/SageMaker.svg" },
        { name: "Vertex AI", logo: "https://cdn.simpleicons.org/googlecloud" },
        { name: "LangChain"}, // custom or local
        { name: "LangGraph"},
        { name: "LlamaIndex"},
      ]
    },
  };

  return (
    <section id="tech-stack" className="py-12 px-4 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 tracking-tight">Tech Stack</h2>
          <div className="h-1 w-16 bg-primary rounded"></div>
        </div>

        <div className="space-y-6">
          {Object.entries(techCategories).map(([key, category]) => (
            <div key={key} className="mb-4">
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <Card className="glass-card border-0">
                <CardContent className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors border border-primary/30"
                      >
                        {tech.logo && (
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-5 h-5"
                            title={tech.name}
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
