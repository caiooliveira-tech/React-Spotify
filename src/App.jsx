import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <Outlet/>
      </Container>
    </>
  )
}

export default App