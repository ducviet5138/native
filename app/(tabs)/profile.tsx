import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Divider from "@/components/Divider";
import ProfileListItem from "@/components/ProfileListItem";
import { router } from "expo-router";

export default function Profile() {
  return (
    <CustomSafeAreaView style="bg-white">
      <ScrollView>
        <View className="justify-center items-center py-4">
          <Image
            source={require("@assets/images/Profile.png")}
            style={{
              width: 160,
              height: 160,
              borderRadius: 1000,
            }}
          />
          <Text className="font-bold text-2xl mb-4">ducviet5138</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-red-100 rounded-xl py-2.5 items-center justify-center"
            style={{ width: 140, height: 40 }}
          >
            <Text className="text-[#39071f] font-bold">Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-base font-bold mx-4">Account Information</Text>
        <View className="border rounded-xl m-4 border-grey-200 px-4">
          <ProfileListItem
            props={{
              title: "Change Password",
              icon: "chevron-right",
              onPress: () => {
                router.push("/change-password");
              }
            }}
          />
          <Divider />
          <ProfileListItem
            props={{
              title: "Email",
              content: "example@email.com",
            }}
          />
          <Divider />
          <ProfileListItem
            props={{
              title: "Date of Birth",
              content: "01/01/1970",
            }}
          />
        </View>
        <Text className="text-base font-bold mx-4">General Settings</Text>
        <View className="border rounded-xl m-4 border-grey-200 px-4">
          <ProfileListItem
            props={{
              title: "Reminder Mode",
              icon: "chevron-right",
            }}
          />
          <Divider />
          <ProfileListItem
            props={{
              title: "Language",
              content: "English (en)",
            }}
          />
          <Divider />
          <ProfileListItem
            props={{
              title: "Appearance",
              content: "Light mode",
            }}
          />
          <Divider />
          <ProfileListItem
            props={{
              title: "Logout",
              error: true,
            }}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
}
