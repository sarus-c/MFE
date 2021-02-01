import { FC } from 'react';

export type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
