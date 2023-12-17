"use client";
import StoreProvider from "@/providers/StoreProvider";
import { type FC, type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const LayoutWrapper: FC<LayoutProps> = ({ children }) => {

  return (  
    <StoreProvider>
          {children}
    </StoreProvider>
  )
};
