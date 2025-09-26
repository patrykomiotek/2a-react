type Props = {
  children: string | number | (string | number)[];
};

export function Text({ children }: Props) {
  return <p>{children}</p>;
}
