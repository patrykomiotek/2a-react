import { useState, type FormEventHandler } from "react";
import { Button } from "../ui/Button";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // FormData
    // state
    console.log({ email, password, language });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <Button type="submit" label="Send" />
      </div>
    </form>
  );
};
