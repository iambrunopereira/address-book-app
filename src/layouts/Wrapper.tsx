"use client";
import '@/i18n';
import StoreProvider from "@/providers/StoreProvider";
import '@/theme/globals.css';
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
