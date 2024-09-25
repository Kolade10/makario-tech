import React from 'react';

const InputBox = ({ label, name, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border-b-[1px] appearance-none placeholder-grey-500 outline-none py-[10px] border-gray-300 rounded-md text-base leading-normal"
    />
  );
};

export default InputBox;
