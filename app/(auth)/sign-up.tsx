import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import Google from "@assets/images/Google.svg";
import { MaterialIcons } from '@expo/vector-icons';
import CustomSafeAreaView from "@/components/CustomSafeAreaView";

const SignUp = () => {
  const [email, onEmailChange] = React.useState("");
  const [username, onUsernameChange] = React.useState("");

  return (
    <CustomSafeAreaView style="bg-white h-full">
      <Text className="font-bold text-3xl mb-8 mx-4 mt-4">Hello new friend!</Text>
      <View className="flex flex-row bg-grey-50 mx-4 mb-4 rounded-xl">
        <TextInput
          className="flex-grow p-4"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={onEmailChange}
        />
        <MaterialIcons
          name="mail"
          size={24}
          color="grey"
          style={{ alignSelf: "center", marginRight: 10 }}
        />
      </View>
      <View className="flex flex-row bg-grey-50 mx-4 rounded-xl">
      <TextInput
        className="p-4 flex-grow"
        placeholder="Username"
        keyboardType="default"
        value={username}
        onChangeText={onUsernameChange}
      />
      <MaterialIcons name="person" size={24} color="gray"
          style={{ alignSelf: "center", marginRight: 10 }} />
      </View>
      <View className="flex justify-end flex-grow">
        <TouchableOpacity
          onPress={() => {
            router.push("otp");
          }}
          className="rounded-xl bg-primary m-4"
          activeOpacity={0.8}
        >
          <Text className="p-4 text-white text-center font-bold">Sign Up</Text>
        </TouchableOpacity>
        <View className="items-center flex-row mx-4">
          <View className="flex-1 h-px bg-grey-400" />
          <Text className="text-grey-400 mx-4">Or continue with</Text>
          <View className="flex-1 h-px bg-grey-400" />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-xl border border-primaryDark m-4"
          activeOpacity={0.8}
        >
          <View className="flex flex-row items-center justify-center p-4">
            <Text className="text-center text-primaryDark font-bold">
              Sign up with {"  "}
            </Text>
            <Google />
          </View>
        </TouchableOpacity>
        <Text className="text-center mb-4">
          Already have an account?{" "}
          <Text
            className="text-primary font-bold"
            onPress={() => router.push("(auth)/sign-in")}
          >
            Sign in here
          </Text>
        </Text>
      </View>
    </CustomSafeAreaView>
  );
};

export default SignUp;
