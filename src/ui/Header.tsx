import type { ComponentProps } from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'h1'>;

export const Header = ({ children, variant = 'h1' }: Props) => {
  if (variant === 'h1') {
    return <h1 className="text-4xl">{children}</h1>;
  } else if (variant === 'h2') {
    return <h2 className="text-3xl">{children}</h2>;
  } else if (variant === 'h3') {
    return <h3 className="text-2xl">{children}</h3>;
  } else if (variant === 'h4') {
    return <h4 className="text-xl">{children}</h4>;
  } else if (variant === 'h5') {
    return <h5>{children}</h5>;
  } else if (variant === 'h6') {
    return <h6 className="text-md">{children}</h6>;
  }
};
