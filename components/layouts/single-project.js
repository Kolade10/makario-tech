import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import projectsArray from '../projectsArray'; // Assuming you have an array of projects

const SingleProject = ({ project }) => {
    const router = useRouter();

    // Find the current index of the project in the projectsArray based on the project id
    const currentIndex = projectsArray.findIndex((p) => p.id === project.id);

    // Ensure the project exists in the array
    if (currentIndex === -1) {
        return <p>Error: Project not found.</p>;
    }

    // Handlers for Previous and Next navigation
    const handlePrevious = () => {
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : projectsArray.length - 1;
        router.push(`/portfolio/${projectsArray[previousIndex].id}`);
    };

    const handleNext = () => {
        const nextIndex = currentIndex < projectsArray.length - 1 ? currentIndex + 1 : 0;
        router.push(`/portfolio/${projectsArray[nextIndex].id}`);
    };

    return (
        <div className='pb-[100px] max-w-[90%] lg:max-w-[1440px] m-auto lg:px-[120px]'>
            <div className='relative grid grid-cols-2 items-start justify-center gap-[51px]'>
                <div className='grid gap-[30px] pt-[100px]'>
                    <Image
                        src={`/images/${project.image}`}
                        alt='project'
                        quality={100}
                        width={693}
                        height={480}
                    />
                    <div className='grid gap-[22px]'>
                        <p className='text-[35px] leading-[48px] text-[#1e1d1d] font-semibold'>{project.title}</p>
                        <p className='text-[17px] text-[#61666f]'>{project.description}</p>
                    </div>
                    <div className='grid gap-[10px]'>
                        <div className='grid grid-cols-2 gap-[10px]'>
                            {project.imageArray.slice(0, 2).map((img, index) => (
                                <Image
                                    key={index}
                                    src={`/images/${img}`}
                                    alt={`project image ${index + 1}`}
                                    quality={100}
                                    width={342}
                                    height={237}
                                />
                            ))}
                        </div>
                        {project.imageArray.slice(2, 3).map((img, index) => (
                            <Image
                                key={index}
                                src={`/images/${img}`}
                                alt={`project image ${index + 1}`}
                                quality={100}
                                width={693}
                                height={480}
                            />
                        ))}
                    </div>
                </div>
                <div className='grid gap-[35px] content-start sticky top-0 pt-[100px]'>
                    <p className='text-[17px] text-[#61666f]'>{project.scope}</p>
                    <div className='grid gap-[20px]'>
                        <div className='grid grid-flow-col items-center justify-start gap-[30px]'>
                            <p className=' w-[100px] font-semibold text-[18px] text-[#1e1d1d]'>Client</p>
                            <p className='text-[17px] text-[#61666f]'>{project.client}</p>
                        </div>
                        <div className='grid grid-flow-col items-center justify-start gap-[30px]'>
                            <p className=' w-[100px] font-semibold text-[18px] text-[#1e1d1d]'>Duration</p>
                            <p className='text-[17px] text-[#61666f]'>{project.duration}</p>
                        </div>
                    </div>

                    {/* Previous and Next buttons */}

                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div onClick={handlePrevious} className='grid grid-flow-col items-center gap-[13px] text-[#1e1d1d] hover:text-[#337ab7] cursor-pointer duration-500 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m1.5 7.5l4-4m-4 4l4 4m-4-4H14" /></svg>
                    <p className='text-[16px]'>Prev Project</p>
                </div>
                <div onClick={handleNext} className='grid grid-flow-col items-center gap-[13px] text-[#1e1d1d] hover:text-[#337ab7] cursor-pointer duration-500 transition-all'>
                    <p className='text-[16px]'>Next Project</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1" /></svg>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
