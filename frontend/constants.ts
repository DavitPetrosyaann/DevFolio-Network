import { Developer } from './types';

export const MOCK_DEVELOPERS: Developer[] = [
    {
        id: 'dev-1',
        name: 'Elena Rodriguez',
        role: 'Full Stack Engineer',
        avatarUrl: 'https://picsum.photos/seed/elena/200/200',
        bio: 'Passionate about building scalable web applications and intuitive user interfaces. Specializing in React and Node.js ecosystems.',
        skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        projects: [
            {
                id: 'p-1',
                title: 'E-Commerce Platform',
                description: 'A high-performance headless e-commerce solution built with Next.js and Stripe integration.',
                imageUrl: 'https://picsum.photos/seed/p1/600/400',
                tags: ['Next.js', 'Stripe', 'Tailwind'],
                link: '#'
            },
            {
                id: 'p-2',
                title: 'Task Management API',
                description: 'RESTful API for a task management system with real-time updates using WebSockets.',
                imageUrl: 'https://picsum.photos/seed/p2/600/400',
                tags: ['Node.js', 'Express', 'Socket.io'],
                link: '#'
            }
        ]
    },
    {
        id: 'dev-2',
        name: 'Marcus Chen',
        role: 'Frontend Architect',
        avatarUrl: 'https://picsum.photos/seed/marcus/200/200',
        bio: 'Creating pixel-perfect, accessible, and performant web experiences. Advocate for design systems and clean code.',
        skills: ['Vue.js', 'CSS Architecture', 'Accessibility', 'Figma'],
        projects: [
            {
                id: 'p-3',
                title: 'Design System Library',
                description: 'A comprehensive UI component library used across multiple enterprise applications.',
                imageUrl: 'https://picsum.photos/seed/p3/600/400',
                tags: ['Vue', 'Storybook', 'SCSS'],
                link: '#'
            }
        ]
    },
    {
        id: 'dev-3',
        name: 'Sarah Jenkins',
        role: 'Backend Developer',
        avatarUrl: 'https://picsum.photos/seed/sarah/200/200',
        bio: 'Data enthusiast and API designer. Focused on building robust microservices and optimizing database performance.',
        skills: ['Python', 'Django', 'Docker', 'AWS'],
        projects: [
            {
                id: 'p-4',
                title: 'Analytics Dashboard Backend',
                description: 'Scalable data processing pipeline and API serving real-time analytics to frontend clients.',
                imageUrl: 'https://picsum.photos/seed/p4/600/400',
                tags: ['Python', 'FastAPI', 'Redis'],
                link: '#'
            },
             {
                id: 'p-5',
                title: 'Auth Microservice',
                description: 'Centralized authentication service supporting OAuth2 and JWT.',
                imageUrl: 'https://picsum.photos/seed/p5/600/400',
                tags: ['Go', 'PostgreSQL', 'Security'],
                link: '#'
            }
        ]
    }
];