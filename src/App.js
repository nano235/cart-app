import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import PreLoader from "./PreLoader";
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <PreLoader />;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
