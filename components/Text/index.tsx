import { Text as RNText, TextProps } from "react-native";

type Props = TextProps & { className?: string };

export function Text({ className, ...props }: Props) {
  return (
    <RNText
      className={`text-foreground ${className ?? ""}`}
      {...props}
    />
  );
}
