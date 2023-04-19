import React, { ReactNode } from 'react';

type BaseButtonProps = {
  variant: string;
  className?: string;
  icon?: any;
  children: ReactNode;
};

export default function BaseButton({
  variant,
  className = '',
  icon,
  children,
}: BaseButtonProps) {
  return (
    <button className={`base-button--${variant} ${className}`}>
      {icon ? (
        <span>
          <img src={icon} alt="" />
        </span>
      ) : null}
      {children}
    </button>
  );
}
