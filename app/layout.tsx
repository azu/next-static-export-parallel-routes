import "./globals.css";
import type { Metadata } from "next";
import { ApolloWrapper } from "./apollo/ApolloWrapper";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({
                                     children,
                                     list,
                                     detail
                                   }: Readonly<{
  children: React.ReactNode;
  list: React.ReactNode;
  detail: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body><ApolloWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{
          display: "flex",
          gap: "24px"
        }}>
          {children}
          {list}
          {detail}
        </div>
      </Suspense>
    </ApolloWrapper></body>
    </html>
  );
}
