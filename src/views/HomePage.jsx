import React from "react";
import Navbar from "../components/Navbar/NavBar";
import PrimaryButton from "../components/inputs/Primarybutton";
import RenderPikachu from "../components/renders/pikachu/Pikachu"

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Home paye</h1>
      <PrimaryButton text="Click"/>
      <button className="animate-bounce delay-150 duration-300 ...">Button A</button>
      <RenderPikachu />
    </div>
  );
}

export default HomePage;
