"use client";
import { SplashScreen } from "@/components/structure/SplashScreen";
import useAuthNavigation from "@/hooks/use-auth-navigation";
import StoreProvider from "@/providers/StoreProvider";
import { type FC, type ReactNode } from "react";
import '@/i18n';

interface LayoutProps {
  children: ReactNode;
}

export const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
  const value = useAuthNavigation();

  return (  
    <StoreProvider>
          {!value ? <SplashScreen /> : children}
    </StoreProvider>
  )
};
