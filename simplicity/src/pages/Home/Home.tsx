import React, { FC } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import Intro from "components/Intro";


type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <main role="main" className="bg-light">
      <Header />
      <Intro />
      <List />
      <Footer />
    </main>
  );
};

export default Home;
