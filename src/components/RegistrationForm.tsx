import { useState, type FormEventHandler } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

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
      <div className="space-y-2">
        <Input
          label="E-mail"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input
          label="Language"
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
      <div>
        <Button type="submit" label="Send" />
      </div>
    </form>
  );
};
