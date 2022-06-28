import React from "react";
import "./Button.scss";

interface IProps {
  isDisabled?: boolean;
  className?:string;
  children: React.ReactNode;
  onButtonClick: () => void;
}

export function Button({
  isDisabled = false,
  className,
  children,
  onButtonClick,
}: IProps) {

  const ROOT_CLASS = 'button'

  const cn = `${ROOT_CLASS} ${className ? className : ''}`

  return (
    <button
      type="button"
      className={cn}
      disabled={isDisabled}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
