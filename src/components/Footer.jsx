import React from "react";
import vg from "../assets/logo2.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={vg} alt="Founder" />
        <h2>Shubham Bisht</h2>
        <p>Keep learning and Growing</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://linkedin.com/in/shubham-bisht-1a8027225"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/shubham_bisht004" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Shubham22Bisht" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineUp />
      </a>
    </footer>
  );
};

export default Footer;
