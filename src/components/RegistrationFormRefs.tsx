import {
  useRef,
  type FormEventHandler,
  // createRef,
} from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const RegistrationFormRefs = () => {
  // const [passwordError, setPasswordError] = useState(false);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const passwordErrorFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const emailValue = emailFieldRef.current?.value || '';
    const passwordValue = passwordFieldRef.current?.value || '';

    if (passwordValue.length <= 3) {
      // setPasswordError(true);
      const passwordError = passwordErrorFieldRef.current;
      if (passwordError) {
        passwordError.innerText = 'Too short';
        // passwordError.style.color = "red";
      }
    }

    const languageValue = languageFieldRef.current?.value || '';
    // FormData
    // state
    console.log({
      email: emailValue,
      password: passwordValue,
      language: languageValue,
    });
  };

  // const handleLanguageValidation: ChangeEventHandler<HTMLInputElement> = () => {
  //   const languageField = languageFieldRef.current;
  //   const languageValue = languageField?.value;
  //   if (languageValue && languageValue === 'php') {
  //     languageField.value = '***';
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Input ref={emailFieldRef} label="E-mail" type="email" />

        <Input ref={passwordFieldRef} label="Password" type="password" />
        <p className="text-red-500" ref={passwordErrorFieldRef}></p>

        <Input ref={languageFieldRef} label="Language" />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
