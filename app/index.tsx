import {
  Text,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";

export default function App() {
  return (
    <LinearGradient colors={["#B3DEFF", "#FFD0FA"]} className="h-full">
      <CustomSafeAreaView style="h-full flex justify-end">
        <Text className="font-bold text-3xl mx-4">
          Date together, let memories last forever
        </Text>
        <Text className="text-sm text-gray-500 mx-4 mt-4">
          Lorem ipsum dolor sit amet consectetur ardipisicing elit. Est ducimus
          numquam hic velit sed! Accusamus accusantium beatae illo, dolore
          molestias optio architecto dolores ullam quis reprehenderit porro
          earum veniam ab?
        </Text>
        <TouchableOpacity
          onPress={() => {
            // router.push("/sign-in");
            router.push('/(tabs)/home')
          }}
          className="bg-primary rounded-xl mx-4 mt-8"
          activeOpacity={0.8}
        >
          <Text className="p-4 text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/sign-up");
          }}
          className="rounded-xl border border-primaryDark m-4"
          activeOpacity={0.8}
        >
          <Text className="p-4 text-primaryDark text-center font-bold">Sign Up</Text>
        </TouchableOpacity>
      </CustomSafeAreaView>
    </LinearGradient>
  );
}
