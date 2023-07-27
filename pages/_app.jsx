import "../styles/global.css";
import Navbar from "../components/Navbar";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="w-5/6 mx-auto">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
