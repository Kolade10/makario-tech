import Image from "next/image";
import InputBox from "../common/InputBox";
import PrimartButton from "../common/primaryButton";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center m-auto">
        <div className="bg-[url('/images/contact.png')] bg-cover bg-center bg-no-repeat w-full h-[840px]"></div>
        <div className="grid px-[120px] items-center gap-[30px] ">
            <div className="grid gap-[20px]">
                <p className="text-[14px] text-[#1e1d1d] tracking-[3px] font-medium">CONTACT US</p>
                <p className="max-w-[580px] text-[36px] lg:text-[56px] text-[#1e1d1d] font-bold leading-[48px]">Let&#39;s work together. <br/>Get the best offer!</p>
            </div>
            <form className="grid gap-[44px]">
                <div className="grid gap-[20px]">
                    <div className="grid grid-flow-col gap-[30px]">
                        <InputBox
                            placeholder='First Name'
                            type="text"
                        />
                        <InputBox
                            placeholder='last Name'
                            type="text"
                        />
                    </div>
                    <div className="grid grid-flow-col gap-[30px]">
                        <InputBox
                            placeholder='Email'
                            type="email"
                        />
                        <InputBox
                            placeholder='Phone Number'
                            type="number"
                        />
                    </div>
                    <InputBox
                        placeholder='Message'
                        type="text"
                    />
                </div>
                <PrimartButton href={'#'} style='text-white grid grid-flow-col items-center gap-[8px] m-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><path fill="#fcfcfc" d="M16 0L0 8l4.7 1.6L5 15l2.5-2.8L10 16zM7.5 10.4l4.3-5.9l-6.2 4.3l-3-1L14.2 2L9.7 13.8z"/></svg>
                    Submit
                </PrimartButton>
            </form>
        </div>
    </div>
  );
}
export default ContactForm