import React from 'react';
import PrimartButton from '../common/primaryButton';
import ContactInput from '../common/contactInput';

const ContactDetails = () => {
    return (
        <div className='max-w-[100%] lg:px-[120px] py-[80px] lg:py-[120px] grid gap-[20px] m-auto grid gap-[20px]'>
            <p className="w-[90%] lg:w-full m-auto text-[14px] text-[#1e1d1d] tracking-[3px] font-medium">CONTACT US</p>
            <div className='grid gap-[60px] justify-between lg:grid-flow-col items-start'>
                <div className='w-[90%] lg:w-full m-auto grid gap-[30px] content-start max-w-[645px]'>
                    <p className="max-w-[580px] text-[27px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[28px] lg:leading-[48px]">Have questions? Get in touch!</p>
                    <p className="text-[16px] text-[#61666f] max-w-[450px]">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    <div className='grid grid-flow-col justify-start items-center gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 20 20"><path fill="#337ab7" d="M10 3a5 5 0 0 0-5 5c0 1.128.67 2.444 1.61 3.71c.926 1.246 2.047 2.36 2.818 3.067a.835.835 0 0 0 1.144 0c.77-.708 1.892-1.82 2.818-3.067C14.33 10.444 15 9.128 15 8a5 5 0 0 0-5-5M4 8a6 6 0 1 1 12 0c0 1.468-.843 3.007-1.807 4.306c-.98 1.319-2.152 2.48-2.945 3.207a1.835 1.835 0 0 1-2.496 0c-.793-.727-1.966-1.888-2.945-3.207C4.843 11.007 4 9.468 4 8m6-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m6.92 5.638a23 23 0 0 1-.715.826q.382.108.712.235c.554.213.969.455 1.236.698S16 15.844 16 16s-.08.36-.347.603s-.682.485-1.236.698c-1.106.426-2.667.7-4.417.7s-3.311-.274-4.417-.7c-.554-.213-.969-.455-1.236-.698S4 16.156 4 16s.08-.36.347-.603s.682-.485 1.236-.698a8 8 0 0 1 .712-.235a22 22 0 0 1-.715-.826a9 9 0 0 0-.356.128c-.621.239-1.159.536-1.55.891C3.284 15.012 3 15.466 3 16c0 .535.284.988.674 1.343s.929.652 1.55.892C6.471 18.715 8.16 19 10 19s3.529-.286 4.776-.765c.621-.24 1.159-.537 1.55-.892c.39-.355.674-.808.674-1.343s-.284-.988-.674-1.343s-.929-.652-1.55-.891a9 9 0 0 0-.356-.128"/></svg>
                        <p className="text-[16px] text-[#61666f]">785 15h Street, Office 478 Berlin</p>
                    </div>
                    <div className='grid grid-flow-col justify-start items-center gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 16 16"><path fill="#337ab7" d="M7 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM5.75 1A1.75 1.75 0 0 0 4 2.75v10.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 12 13.25V2.75A1.75 1.75 0 0 0 10.25 1zM5 2.75A.75.75 0 0 1 5.75 2h4.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75z"/></svg>
                        <p className="text-[16px] text-[#61666f]">+1 840 841 25 69</p>
                    </div>
                    <div className='grid grid-flow-col justify-start items-center gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24"><path fill="#337ab7" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"/></svg>
                        <p className="text-[16px] text-[#61666f]">info@example.com</p>
                    </div>
                </div>
                <form className='w-[90%] lg:w-full m-auto grid gap-[44px] content-start'>
                    <div className='grid lg:grid-cols-2 gap-[24px]'>
                        <ContactInput type='text' placeholder='Name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="#846b6f"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
                        </ContactInput>
                        <ContactInput type='email' placeholder='Email'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#846b6f" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"/></svg>
                        </ContactInput>
                        <ContactInput type='number' placeholder='Phone'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="#846b6f" d="M148.14 47a4 4 0 0 1 4.86-2.87A82.24 82.24 0 0 1 211.86 103a4 4 0 0 1-2.83 4.89a3.7 3.7 0 0 1-1 .14a4 4 0 0 1-3.86-3A74.35 74.35 0 0 0 151 51.86a4 4 0 0 1-2.86-4.86M143 83.86C158 87.89 168.11 98 172.14 113a4 4 0 0 0 3.86 3a3.7 3.7 0 0 0 1-.14a4 4 0 0 0 2.83-4.89c-4.8-18-16.85-30-34.83-34.84a4 4 0 0 0-2 7.73m76.94 98.72A52.25 52.25 0 0 1 168 228C90.8 228 28 165.2 28 88a52.25 52.25 0 0 1 45.42-51.91a12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36c-.09.13-.18.26-.28.38l-21.2 25.21a3.9 3.9 0 0 0-.18 3.69c7.84 16.05 24.65 32.73 40.89 40.57a3.93 3.93 0 0 0 3.7-.21l24.87-21.12l.38-.29a12 12 0 0 1 11.38-1l47.22 21.16a12 12 0 0 1 7.13 12.41Zm-10.35-5.12l-47.24-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75c.09-.14.19-.26.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.49A4 4 0 0 0 74.9 44a4 4 0 0 0-.48 0A44.23 44.23 0 0 0 36 88c0 72.78 59.22 132 132 132a44.23 44.23 0 0 0 44-38.42a4 4 0 0 0-2.44-4.12Z"/></svg>
                        </ContactInput>
                        <ContactInput type='text' placeholder='Subject'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="#846b6f" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m.005-4.222v-6.333"/><path stroke-width="2" d="M11.956 7.443h.01"/></g></svg>
                        </ContactInput>
                    </div>
                    <div className='w-full grid grid-flow-col gap-[10px] pb-[5px] items-start border-b-[1px] border-[#e2e2e2]'>
                        <svg className='mt-[10px]' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#846b6f" d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"/></svg>
                        <textarea
                        placeholder='How can we help you? Feel free to get in touch!'
                        className="lg:min-w-[500px] min-w-[350px] min-h-[50px] appearance-none placeholder-grey-500 outline-none py-[10px] border-gray-300 rounded-md text-base leading-normal"
                        />
                    </div>
                    <div className='grid justify-start items-center gap-[5px]'>
                        <PrimartButton style='text-white grid grid-flow-col items-center gap-[8px] !m-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><path fill="#fcfcfc" d="M16 0L0 8l4.7 1.6L5 15l2.5-2.8L10 16zM7.5 10.4l4.3-5.9l-6.2 4.3l-3-1L14.2 2L9.7 13.8z"/></svg>
                            Get in Touch
                        </PrimartButton>
                        <div className='grid grid-flow-col gap-[8px] items-center'>
                            <input type='checkbox' className='w-[16px] h-[16px] border-[1px] border-[#337ab7]'/>
                            <p className='text-[14px] text-[#61666f]'>I agree that my submitted data is collected and stored.</p>
                        </div>
                    </div>
                </form>
            </div>
            <iframe className='w-full h-[300px] lg:h-[600px] border-0 mt-[30px] lg:mt-[60px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.657684854352!2d3.511171775877255!3d6.437991024149299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7d79d4cf8ef%3A0xca074d65da8ec0fa!2sSpacepad%20%7C%20Co%20Working%20Space%20And%20Serviced%20Private%20Office%20Space%20Lekki!5e0!3m2!1sen!2sng!4v1727428886238!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactDetails;