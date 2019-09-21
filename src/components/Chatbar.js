import React from "react";
import smallLogo from "../logo-sm.svg";
import "../styles/chatbar.css";

export default function Chatbar() {
  return (
    <main>
      <div className="chat-box">
        <header>
          <div className="menu-left">
            <img src={smallLogo} alt="logo" className="chat-logo" />
            <p>Roger</p>
          </div>
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </header>
        <section>
          <form action="POST"></form>
        </section>
      </div>
    </main>
  );
}
