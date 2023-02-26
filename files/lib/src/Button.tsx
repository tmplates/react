import React, { FC, PropsWithChildren } from "react";

interface IButtonProps {}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ children }) => {
  return <button>{children}</button>;
};
