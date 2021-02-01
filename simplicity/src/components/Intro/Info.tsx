import { FC } from 'react';

const Intro: FC<{}> = () => (
  <section className="jumbotron text-center bg-white mb-0">
    <div className="container">
      <h1>Album example</h1>
      <p className="lead text-muted">
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don’t
        simply skip over it entirely.
      </p>
      <p>
        <button type="button" className="btn btn-primary my-2 mr-2">
          Main call to action
        </button>
        <button type="button" className="btn btn-secondary my-2">
          Secondary action
        </button>
      </p>
    </div>
  </section>
);

export default Intro;
