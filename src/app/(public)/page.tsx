"use client";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    id: 0,
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefuly curated courses designed by industry experts.",
    icon: "📚",
  },
  {
    id: 1,
    title: "Interactive Learning",
    description:
      "Engage with intercative content, quizzes and assignments to enhance your learning experience",
    icon: "🎮",
  },
  {
    id: 2,
    title: "Progess Tracking",
    description:
      "Monitor your progress and achivements with detailed analytics and personalized dashboards.",
    icon: "📊",
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Join a vibrant community of learners and instructions to collaborate and share knowledge",
    icon: "👥",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your Learnig Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to learn with our modern, intercative learning
            management system. Acces high-quality courses anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link className={buttonVariants({ size: "lg" })} href="/courses">
              Explore Courses
            </Link>
            <Link
              className={buttonVariants({ size: "lg", variant: "outline" })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-43">
        {features.map((feature) => (
          <Card key={feature.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
