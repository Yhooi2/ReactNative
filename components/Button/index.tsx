import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import { Text } from "../Text";

interface ButtonProps extends PressableProps {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <Pressable
      className="bg-primary items-center rounded-2xl px-6 py-5"
      onPress={() => {
        alert("click!");
      }}
      {...props}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}
