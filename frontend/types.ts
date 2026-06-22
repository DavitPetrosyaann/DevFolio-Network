export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
}

export interface Developer {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    bio: string;
    skills: string[];
    projects: Project[];
}