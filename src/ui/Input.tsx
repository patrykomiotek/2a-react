import { useId, type ComponentPropsWithRef } from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

// 16, 17, 18 -> forwardRef (deprecated)
export const Input = ({ id, label, ref, ...rest }: Props) => {
  const reactId = useId();
  const fieldId = id ? id : reactId;

  return (
    <div>
      <label htmlFor={fieldId}>{label}</label>
      <input ref={ref} id={fieldId} {...rest} />
    </div>
  );
};
