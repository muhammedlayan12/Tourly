import React from 'react';
import { Metadata } from "next";
import "./globals.css";

// import { config, library } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { faClock } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// config.autoAddCss = false;
// library.add(faClock);

export const metadata: Metadata = {
  title: "Tourly",
  description: "ITS TRAVEL AGENCY WEBSITE MADE BY MUHAMMAD LAYAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        {/* <FontAwesomeIcon icon="clock" style={{ marginRight: '8px' }} /> */}
        {children}
      </body>
    </html>
  );
}
