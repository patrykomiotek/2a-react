import { useRef, type ChangeEventHandler, type FormEventHandler } from "react";
import { Button } from "../ui/Button";

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const emailValue = emailFieldRef.current?.value || "";
    const passwordValue = passwordFieldRef.current?.value || "";
    const languageValue = languageFieldRef.current?.value || "";
    // FormData
    // state
    console.log({
      email: emailValue,
      password: passwordValue,
      language: languageValue,
    });
  };

  const handleLanguageValidation: ChangeEventHandler<HTMLInputElement> = () => {
    const languageField = languageFieldRef.current;
    const languageValue = languageField?.value;
    if (languageValue && languageValue === "php") {
      languageField.value = "***";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input ref={emailFieldRef} id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordFieldRef} id="password" type="password" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          ref={languageFieldRef}
          onChange={handleLanguageValidation}
          id="language"
        />
      </div>
      <div>
        <Button type="submit" label="Send" />
      </div>
    </form>
  );
};
