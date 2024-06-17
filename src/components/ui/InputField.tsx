import React from "react";

interface InputFieldProps {
  className?: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  className,
  id,
  name,
  type,
  placeholder,
  required = false,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        className={`border-b text-black dark:text-white border-gray-300 w-full py-1 focus:border-b-2 dark:focus:border-white focus:border-black transition-colors focus:outline-none peer bg-inherit placeholder-transparent ${className}`}
        placeholder={placeholder}
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-1 cursor-text transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:text-xs peer-focus:-top-4 dark:peer-focus:text-white peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs dark:peer-valid:text-white peer-valid:text-black"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
