import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
