import React, { useState } from "react";
import smallLogo from "../logo-sm.svg";
import "../styles/chatbar.css";

export default function Chatbar({ data }) {
  const [messages, setMessages] = useState([]);

  const handleMessage = e => {
    e.preventDefault();
    let message = {
      firstName: "Laura",
      content: e.target.children[0].value,
      createdAt: new Date()
    };
    let time =
      message.createdAt.getHours() + ":" + message.createdAt.getMinutes();
    console.log(time);

    let newMessageList = [...messages, message];
    setMessages(newMessageList);
    e.target.children[0].value = "";
  };

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
        <ul className="message-list">
          <li>{data}</li>
          {messages.map((msg, i) => (
            <li key={i}>{msg.content}</li>
          ))}
          <li>
            <span>
              <i className="fas fa-robot"></i>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur quidem molestias iure rem exercitationem, recusandae
              dolorum maiores, ullam corrupti, nulla dolore ea temporibus
              provident. Culpa nobis nesciunt architecto ex.
            </p>
          </li>
          <li>
            <span>
              <i className="fas fa-robot"></i>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur quidem molestias iure rem exercitationem, recusandae
              dolorum maiores, ullam corrupti, nulla dolore ea temporibus
              provident. Culpa nobis nesciunt architecto ex.
            </p>
          </li>
          <li>
            <span>
              <i className="fas fa-robot"></i>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur quidem molestias iure rem exercitationem, recusandae
              dolorum maiores, ullam corrupti, nulla dolore ea temporibus
              provident. Culpa nobis nesciunt architecto ex.
            </p>
          </li>
        </ul>
        <section className="chat-input">
          <form onSubmit={handleMessage}>
            <input type="text" placeholder="Enter a message" />
            <button>Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}
