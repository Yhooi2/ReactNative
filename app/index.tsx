import { Pressable, Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Pressable
        className="mt-4 rounded-full bg-red-500 px-6 py-4"
        onPress={() => alert("Button Pressed!")}
      >
        <Text className="font-bold text-white">Click Me</Text>
      </Pressable>
    </View>
  );
}
