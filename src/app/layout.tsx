import { Frame } from "@/components";
import { config } from "@/configs";
import { LayoutWrapper } from "@/layouts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: config.appName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper><Frame>{children}</Frame></LayoutWrapper>
      </body>
    </html>
  );
}
