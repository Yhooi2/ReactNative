import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & { className?: string };

export function Input({ className, ...props }: Props) {
  return (
    <TextInput
      className={`text-foreground placeholder:text-muted bg-secondary w-80 rounded-2xl ${className ?? ""}`}
      style={{ paddingHorizontal: 24, paddingVertical: 20 }}
      {...props}
    />
  );
}
