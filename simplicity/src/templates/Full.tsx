import React, { FC, ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

type FullProps = {
  children: ReactNode;
};

const Full: FC<FullProps> = ({ children }) => (
  <main role="main" className="bg-light">
    <Header />
    {children}
    <Footer />
  </main>
);

export default Full;
