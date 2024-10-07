import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import projectsArray from '../projectsArray';

const ServiceProjectGrid = () => {
    // Sort projectsArray from newest to oldest based on the id
    const sortedProjects = [...projectsArray].sort((a, b) => b.id - a.id);

    return (
        <div className='max-w-[90%] lg:max-w-[1440px] justify-center lg:px-[120px] m-auto grid lg:grid-flow-col gap-[30px]'>
            <div className='grid gap-[30px]'>
                {sortedProjects.slice(0, 2).map((project, index) => (
                    <Link key={project.id} href={`/portfolio/${project.id}`} className={`relative lg:w-[300px] ${index === 1 ? 'lg:h-[630px]' : 'lg:h-[300px]'} group`}>
                        <Image
                            src={`/images/${project.image}`}
                            alt={project.title}
                            quality={100}
                            width={300}
                            height={300}
                            className={`lg:w-[300px] ${index === 1 ? 'lg:h-[630px]' : 'lg:h-[300px]'}`}
                        />
                        <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                            <p className='text-[#1e1d1d] text-[24px] font-semibold'>{project.client}</p>
                            <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='grid gap-[30px]'>
                <div className='grid gap-[30px] content-start lg:grid-flow-col'>
                    {sortedProjects.slice(2, 3).map((project) => (
                        <Link key={project.id} href={`portfolio/${project.id}`} className='relative lg:w-[630px] lg:h-[630px] group'>
                            <Image
                                src={`/images/${project.image}`}
                                alt={project.title}
                                quality={100}
                                width={300}
                                height={300}
                                className='lg:w-[630px] lg:h-[630px]'
                            />
                            <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                                <p className='text-[#1e1d1d] text-[24px] font-semibold'>{project.client}</p>
                                <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                            </div>
                        </Link>
                    ))}
                    <div className='grid gap-[30px]'>
                        {sortedProjects.slice(3, 5).map((project) => (
                            <Link key={project.id} href={`/portfolio/${project.id}`} className='relative lg:w-[300px] lg:h-[300px] group'>
                                <Image
                                    src={`/images/${project.image}`}
                                    alt={project.title}
                                    quality={100}
                                    width={300}
                                    height={300}
                                    className='lg:w-[300px] lg:h-[300px]'
                                />
                                <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                                    <p className='text-[#1e1d1d] text-[24px] font-semibold'>{project.client}</p>
                                    <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {sortedProjects.slice(5, 6).map((project) => (
                    <Link key={project.id} href={`/portfolio/${project.id}`} className='relative w-full h-[300px] group'>
                        <Image
                            src={`/images/${project.image}`}
                            alt={project.title}
                            quality={100}
                            width={300}
                            height={300}
                            className='w-full h-[300px]'
                        />
                        <div className='grid items-end content-end gap-[10px] p-3 absolute top-0 left-0 right-0 bottom-0 bg-white lg:scale-50 scale-90 group-hover:scale-90 lg:opacity-0 group-hover:opacity-[100%] transition-all duration-300 z-0'>
                            <p className='text-[#1e1d1d] text-[24px] font-semibold'>{project.client}</p>
                            <p className='text-[#61666f] font-medium text-[14px]'>Projects</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceProjectGrid;
