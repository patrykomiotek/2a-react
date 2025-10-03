import { useState } from "react";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div>
      <p>
        E-mail: {email}, Password: {password}, Language: {language}
      </p>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
    </div>
  );
};
