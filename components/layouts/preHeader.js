import Link from "next/link"

const PreHeader = ()=>{
    return(
        <div className="w-full bg-[#0f0e0e] py-3">
            <div className="max-w-[90%] lg:max-w-[1440px] px-[120px] m-auto grid grid-flow-col justify-between items-center text-white"> 
                <div className="grid grid-flow-col gap-[20px] items-center">
                    <div className="grid grid-flow-col items-center justify-start gap-[0.7em]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z"/></svg>
                        <p className="text-[13px] text-[#9f9f9f]">Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</p>
                    </div>
                    <div className="grid grid-flow-col items-center justify-start gap-[0.7em]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"/></svg>
                        <p className="text-[13px] text-[#9f9f9f]">1-800-458-56987</p>
                    </div>
                    <div className="grid grid-flow-col items-center justify-start gap-[0.7em]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/><path fill="currentColor" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"/></svg>
                        <p className="text-[13px] text-[#9f9f9f]">47 Bakery Street, London, UK</p>
                    </div>
                </div>
                <div className="grid grid-flow-col items-center gap-[32px]">
                    <Link href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
                    </Link><Link href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/></svg>
                    </Link><Link href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PreHeader