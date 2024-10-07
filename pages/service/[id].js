import { useRouter } from 'next/router';
import AboutHero from '@/components/layouts/aboutHero';
import Shell from '@/components/layouts/shell';
import WhiteHeader from '@/components/layouts/WhiteHeader';
import servicesArray from '@/components/servicesArray';
import { useEffect, useState } from 'react';
import SingleService from '@/components/layouts/single-service';

const ServiceItem = () => {
    const router = useRouter();
    const { id } = router.query;

    // Local state to store the service
    const [service, setService] = useState(null);

    useEffect(() => {
        if (id) {
            // Convert the id from the query string to a number
            const foundService = servicesArray.find((service) => service.id === parseInt(id));
            if (foundService) {
                setService(foundService);
            }
        }
    }, [id]);
    console.log(service);
    
    // If the service hasn't been found yet or the router query is still loading
    if (!service && router.isReady) {
        return <p>Service not found</p>;
    }

    // Loading state if the query is not ready
    if (!router.isReady || !service) {
        return <p>Loading...</p>;
    }

    return (
        <Shell>
            <WhiteHeader />
            <SingleService service={service} />
        </Shell>
    );
};

export default ServiceItem;
