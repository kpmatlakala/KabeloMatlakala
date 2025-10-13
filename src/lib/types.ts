// types/project.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  tech: string[];
  status: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
}
