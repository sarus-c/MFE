import { FC } from "react";

export type ErrorProps = {
  e: Error | undefined;
};

const Error: FC<ErrorProps> = ({ e }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h5 className="alert-heading">Ups we have an Error!</h5>
      <p>{e ? e.message : "Hm... this is strange..."}</p>
      <hr />
      <p className="mb-0">
        Reloading the page may fix the problem{" "}
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
          </svg>
        </a>
      </p>
    </div>
  );
};

export default Error;
