import { useRef, type ChangeEventHandler, type FormEventHandler } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

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
      <Input ref={emailFieldRef} label="E-mail" type="email" />
      <Input ref={passwordFieldRef} label="Password" type="password" />
      <Input ref={languageFieldRef} label="Language" />
      <Button type="submit" label="Send" />
    </form>
  );
};
