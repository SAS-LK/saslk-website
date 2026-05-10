import type { Metadata } from 'next';
import ProjectsPageContent from '@/sections/ProjectsPageContent';

export const metadata: Metadata = {
    title: 'Projects | SASLK — Software Solutions & Digital Innovation',
    description:
        'Explore our portfolio of software projects across fintech, healthcare, logistics, edtech, e-commerce, and cybersecurity domains.',
    keywords: ['portfolio', 'projects', 'software development', 'SASLK', 'case studies'],
};

export default function ProjectsPage() {
    return (
        <main>
            <ProjectsPageContent />
        </main>
    );
}
