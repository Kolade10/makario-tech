import React from 'react';

const ContactInput = ({ children, label, name, type, placeholder, value, onChange }) => {
  return (
    <div className='grid grid-flow-col gap-[10px] pb-[5px] items-center justify-start border-b-[1px] border-[#e2e2e2]'>
        {children}
        <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full appearance-none placeholder-grey-500 outline-none py-[10px] border-gray-300 rounded-md text-base leading-normal"
        />
    </div>
  );
};

export default ContactInput;
