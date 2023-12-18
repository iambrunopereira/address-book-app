"use client"
import { Frame } from "@/components";
import { publicRoutes } from "@/configs";
import { LayoutWrapper } from "@/layouts";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isPublic = publicRoutes.includes(path);
  return (
    <html lang="en">
      <body>
        {isPublic ? <LayoutWrapper>{children}</LayoutWrapper> : <LayoutWrapper><Frame>{children}</Frame></LayoutWrapper>}
      </body>
    </html>
  );
}
