import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";

export default function NewPassword() {
  return (
    <CustomSafeAreaView style="bg-white">
      <View className="items-center justify-center mt-4 mx-4">
        <Text className="text-2xl font-bold items-centers">New Password</Text>
        <TextInput
          className="bg-grey-50 rounded-xl w-full mt-4 px-4"
          placeholder="New Password"
          secureTextEntry={true}
          style={{ height: 48 }}
        />
        <TextInput
          className="bg-grey-50 rounded-xl w-full mt-4 px-4"
          placeholder="Confirm New Password"
          secureTextEntry={true}
          style={{ height: 48 }}
        />
      </View>
      <View className="flex-grow"></View>
      <View className="flex-row">
      <TouchableOpacity
          className="rounded-xl bg-white m-4 border border-primaryDark flex-grow"
          activeOpacity={0.8}
          onPress={() => {
            // router.push("/sign-in");
          }}
        >
          <Text className="p-4 text-primaryDark text-center font-bold">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl bg-primary my-4 mr-4 flex-grow"
          activeOpacity={0.8}
          onPress={() => {
            // router.push("/sign-in");
          }}
        >
          <Text className="p-4 text-white text-center font-bold">Submit</Text>
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  );
}
