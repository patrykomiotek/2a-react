import { useId, type ComponentPropsWithRef } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'input'>;

// 16, 17, 18 -> forwardRef (deprecated)
export const Input = ({ id, label, error, ref, ...rest }: Props) => {
  const reactId = useId();
  const fieldId = id ? id : reactId;

  return (
    <>
      <div className="flex gap-2 space-y-2 items-center">
        <label htmlFor={fieldId} className="min-w-[100px]">
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className="border rounded-lg p-2"
          {...rest}
        />
      </div>
      <div>{error && <p className="text-red-500">{error.message}</p>}</div>
    </>
  );
};
