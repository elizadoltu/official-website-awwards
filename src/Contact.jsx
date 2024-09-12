import React from "react";
import contactAbstract from "./assets/abstract-contact.svg";
import "./css/contact.css";

const Contact = () => {
  return (
    <div className="w-full pb-5 mt-40">
      <div className="absolute -mt-40">
        <img src={contactAbstract} alt="abstract thing" />
      </div>
      <div className="flex justify-center items-center main-container">
        <div className="pt-5 pl-5 pr-5 rounded-3xl bg-font-color uppercase flex flex-col justify-between">
          <div className="flex flex-col items-end">
            <h1 className="text-14xl font-clash-grotesk text-bg-color uppercase -mt-40">
              contact
            </h1>
            <p className="text-bg-color -mt-40 w-2/6 text-right">
              Let's Connect! Reach out and let the conversation begin. Your
              thoughts, questions, and ideas are always welcome
            </p>
          </div>
          <div className="text-bg-color flex items-end justify-between pt-20 font-urbanist font-bold text-lg -mb-3">
          <div className="flex items-end">
          <div>
            <ul className="list-none">
              <li><a href="https://bento.me/elizadoltu" className="hover-link"><span><span>bento</span><span>bento</span></span></a></li>
              <li className="-mt-5"><a href="https://www.instagram.com/elizadoltu.design/" className="hover-link"><span><span>instagram</span><span>instagram</span></span></a></li>
              <li className="-mt-5"><a href="https://www.behance.net/elizadoltu" className="hover-link"><span><span>behance</span><span>behance</span></span></a></li>
              <li className="-mt-5"><a href="https://www.linkedin.com/in/eliza-teodora-doltu-56336b24a/" className="hover-link"><span><span>linkedin</span><span>linkedin</span></span></a></li>
            </ul>
          </div>
          <div className="ml-20">
            <ul>
              <li><a href="./pdf/Resume - short.pdf" download="Resume Eliza - Teodora Doltu" className="hover-link"><span><span>resume</span><span>resume</span></span></a></li>
              <li className="-mt-5"><a href="tel:+40732134019" className="hover-link"><span><span>+40732134019</span><span>+40732134019</span></span></a></li>
              <li className="-mt-5"><a href="mailto:elizadoltuofficial@gmail.com" className="hover-link"><span><span>elizadoltuofficial@gmail.com</span><span>elizadoltuofficial@gmail.com</span></span></a></li>
            </ul>
          </div>
        </div>
            <p className="mb-5">©all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
