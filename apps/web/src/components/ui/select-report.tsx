import React, { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select
      className={`border rounded px-3 py-2 ${className || ''}`}
      {...props}
    >
      {children}
    </select>
  );
};

interface OptionProps {
  value: string;
  children: ReactNode;
}

export const Option: React.FC<OptionProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
