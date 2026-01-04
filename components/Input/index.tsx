import { StyledEye as Eye, StyledEyeClosed as EyeClosed } from "@/lib/icons";
import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & { className?: string };

export function Input({ className, ...props }: Props) {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View className="relative">
      <TextInput
        className={`text-foreground placeholder:text-muted bg-secondary w-80 rounded-2xl ${className ?? ""}`}
        style={{ paddingHorizontal: 24, paddingVertical: 20 }}
        {...props}
        secureTextEntry={props.secureTextEntry && isSecure}
      />
      {props.secureTextEntry && (
        <Pressable
          className="absolute top-4 right-4"
          onPress={() => setIsSecure((v) => !v)}
        >
          {isSecure ? (
            <EyeClosed size={32} className="text-muted" pointerEvents="none" />
          ) : (
            <Eye size={32} className="text-muted" pointerEvents="none" />
          )}
        </Pressable>
      )}
    </View>
  );
}
