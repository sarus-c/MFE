import { FC, ReactNode } from 'react';

type IntroProps = {
  children: ReactNode;
};

const Intro: FC<IntroProps> = ({ children }) => (
  <section className="jumbotron text-center bg-white mb-0">
    <div className="container">
      { children }
    </div>
  </section>
);

export default Intro;
