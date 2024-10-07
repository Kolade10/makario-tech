import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import projectsArray from '../projectsArray'; // Assuming you have an array of projects
import Link from 'next/link';

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
                    <div className='grid grid-flow-col items-center justify-start gap-[30px]'>
                        <Link href='#' className='text-[#1e1d1d] hover:text-[#337ab7] transition-all duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" /></svg>
                        </Link>
                        <Link href='#' className='text-[#1e1d1d] hover:text-[#337ab7] transition-all duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                        </Link>
                        <Link href="#" className='text-[#1e1d1d] hover:text-[#337ab7] transition-all duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" /><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" /></g></svg>
                        </Link>
                        <Link href="#" className='text-[#1e1d1d] hover:text-[#337ab7] transition-all duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" /></svg>
                        </Link>
                    </div>
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
