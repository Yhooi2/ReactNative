import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import "@/global.css";
import { Image, Pressable, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-background flex-1 items-center justify-center gap-10">
      <Image
        source={require("../assets/logo.png")}
        className="w-60"
        resizeMode="contain"
      />
      <View className="gap-4">
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Pressable
          className="bg-primary items-center rounded-2xl px-6 py-5"
          onPress={() => {
            alert("click!");
          }}
        >
          <Text>Войти</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text className="text-accent!">Восстановить пароль</Text>
      </Pressable>
    </View>
  );
}
