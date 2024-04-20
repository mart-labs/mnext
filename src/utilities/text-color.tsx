type colorType = "red" | "green" | "blue";

export function TextColor(text: string, color: colorType) {
  return <span className={`text-${color}-500`}>{text}</span>;
}
