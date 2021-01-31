import { FC } from "react";
import { scrollTop } from "utils/helpers";
import "./Footer.css";

type FooterProps = {};

const Footer: FC<FooterProps> = () => (
  <footer className="text-muted bg-white py-5">
    <div className="container d-flex">
      <p>&copy; Try something new every day!</p>
      <button type="button" className="ml-auto btn" onClick={() => scrollTop()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          transform="rotate(-90)"
        >
          <path
            d="M16 8v-4l8 8-8 8v-4h-5v-8h5zm-7 0h-2v8h2v-8zm-4.014 0h-1.986v8h1.986v-8zm-3.986 0h-1v8h1v-8z"
            className="goToTop"
          ></path>
        </svg>
      </button>
    </div>
  </footer>
);

export default Footer;
