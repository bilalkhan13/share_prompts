import { ReactElement } from "react";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/global.css";

export const metadata = {
  title: process.env.APP_NAME,
  description: "Discover & Share AI Prompts",
};

type childrenProps = {
  children?: ReactElement;
};

const RootLayout = ({ children }: childrenProps) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
