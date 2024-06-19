import Button from "@/components/Button";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Otp() {
  return (
    <CustomSafeAreaView style="bg-white">
      <View className="items-center justify-center mt-4">
        <Text className="text-2xl font-bold items-centers">Verify OTP</Text>
        <Text className="text-sm text-grey-400 items-center mt-8 w-64 text-center">
          Please enter the verification code sent to example@gmail.com
        </Text>
      </View>
      <View className="mx-4 flex-row justify-between mt-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <TextInput
              key={index}
              className="bg-grey-50 rounded-xl text-center"
              keyboardType="number-pad"
              maxLength={1}
              style={{ width: 54, height: 54 }}
            />
          ))}
      </View>
      <View className="justify-end flex-grow">
        <TouchableOpacity
          className="rounded-xl bg-primary m-4"
          activeOpacity={0.8}
          onPress={() => {
            router.push("/new-password");
          }}
        >
          <Text className="p-4 text-white text-center font-bold">Submit</Text>
        </TouchableOpacity>
        <Text className="mb-4 text-center">
          Didn't receive an OTP? <Text className="font-bold">Resend OTP</Text>
        </Text>
      </View>
    </CustomSafeAreaView>
  );
}
