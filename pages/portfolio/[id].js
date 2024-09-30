import { useRouter } from 'next/router';
import AboutHero from '@/components/layouts/aboutHero';
import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import projectsArray from '@/components/projectsArray';
import { useEffect, useState } from 'react';
import SingleProject from '@/components/layouts/single-project';

const PortfolioItem = () => {
    const router = useRouter();
    const { id } = router.query;

    // Local state to store the project
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (id) {
            // Convert the id from the query string to a number
            const foundProject = projectsArray.find((project) => project.id === parseInt(id));
            if (foundProject) {
                setProject(foundProject);
            }
        }
    }, [id]);
    console.log(project);
    
    // If the project hasn't been found yet or the router query is still loading
    if (!project && router.isReady) {
        return <p>Project not found</p>;
    }

    // Loading state if the query is not ready
    if (!router.isReady || !project) {
        return <p>Loading...</p>;
    }

    return (
        <Shell>
            <WhiteHeader />
            <AboutHero>Project</AboutHero>
            <SingleProject project={project} />
        </Shell>
    );
};

export default PortfolioItem;
