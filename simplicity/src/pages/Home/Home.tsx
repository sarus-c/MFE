import React, { FC } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import Info from "components/Info";

const ITEMS = [
  {
    title: "Content types",
    description:
      "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.",
  },
  {
    title: "Body",
    description:
      "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.",
  },
  {
    title: "Example",
    description:
      "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.",
  },
];

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <main role="main" className="bg-light">
      <Header />
      <Info />
      <List items={ITEMS} />
      <Footer />
    </main>
  );
};

export default Home;
