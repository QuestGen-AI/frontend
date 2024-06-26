import { Toaster } from "@repo/ui/components/ui/toaster";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import ProgressBar from "./components/progress-bar";
import DataProvider from "./context/providers";
export const metadata: Metadata = {
  title: "Client",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Pretendard" }}>
        <DataProvider>
          <ProgressBar />
          <div className="px-10 pt-8">{children}</div>
          <Toaster />
        </DataProvider>
      </body>
    </html>
  );
}
