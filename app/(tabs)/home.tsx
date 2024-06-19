import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import TextField from "@/components/TextField";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <CustomSafeAreaView style="bg-white">
      <Text> Home </Text>
      <TextField props={{ placeholder: "Username", icon: "home" }} />
    </CustomSafeAreaView>
  );
}
