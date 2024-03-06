"use client";
import React, { useState } from "react";
import { generatePassword } from "../passwordGenerator";

export default function Home() {
  let [input, setInput] = useState("");
  let password = " ";
  const changethis = () => {
    password = generatePassword();
    setInput(password);
  };
  const copy = async () => {
    await navigator.clipboard.writeText(input);
    alert("Text copied");
  };
  return (
    <main>
      <div id="title">
        <h1>Password Generator</h1>
      </div>
      <h2 id="password">{input}</h2>

      <div id="button">
        <button id="generate-password-button" onClick={changethis}>
          Generate Password
        </button>
        <button id="copy-button" onClick={copy}>
          Copy To Clipboard
        </button>
      </div>
      <div id="password-information">
        <h2 id="title">Good Password Practices</h2>
        <ul id="information-text">
          <li>Should be 12 Characters or Longer</li>
          <li>Use Letters, Numbers, and Symbols</li>
          <li>When Possible use Multi-Factor Authentication</li>
          <li>Use Different Passwords for Each Account</li>
          <li>Passwords Should be Random</li>
        </ul>
        <p id="sources">
          Sources:
          https://www.forbes.com/advisor/business/how-create-strong-password/
          and https://www.cisa.gov/secure-our-world/use-strong-passwords
        </p>
      </div>
    </main>
  );
}
