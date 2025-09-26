const palette = {
  emerald: "#2ecc71",
  "peter-river": "#3498db",
  amethyst: "#9b59b6",
  "sun-flower": "#f1c40f",
  carrot: "#e67e22",
  clouds: "#ecf0f1",
  "midnight-blue": "#2c3e50",
};

// typeof - stworzenie typu na podstawie zmiennej
// keyof - wyciągnięcie kluczy z typu
type Colors = keyof typeof palette;

type Props = {
  label: string;
  bgColor: Colors;
  color: Colors;
};

export function Button({ label, bgColor, color }: Props) {
  const styles = {
    color: palette[color], // emerald | carrot
    backgroundColor: palette[bgColor],
  };

  const handleClick = () => {
    alert("Hello world!");
  };

  return (
    <button style={styles} onClick={handleClick}>
      {label}
    </button>
  );
}
