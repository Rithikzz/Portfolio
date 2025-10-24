import React, { useState } from "react";

const InputField = ({ field, label, icon: Icon, formData, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = `
    w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent
    focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all duration-300
    ${isFocused ? "border-[#6366f1]" : "border-white/20 hover:border-[#6366f1]"} 
    ${field === "message" ? "resize-none h-44" : "pl-12"}
  `;

  return (
    <div className="relative w-full mb-4">
      {/* Icon */}
      <div className="absolute left-4 top-4 flex items-center gap-2 text-gray-400 group-focus-within:text-[#6366f1]">
        <Icon className="w-5 h-5" />
      </div>

      {/* Label */}
      <label
        htmlFor={field}
        className={`
          absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm
          transition-all duration-300
          ${isFocused || formData[field] ? "-translate-y-6 text-[#6366f1] text-xs" : ""}
        `}
      >
        {label}
      </label>

      {/* Input / Textarea */}
      {field === "message" ? (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
          required
        />
      ) : (
        <input
          id={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
          required
        />
      )}
    </div>
  );
};

export default InputField;
