import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Profile_ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState<boolean>(true);
  const [newPassword, setNewPassword] = useState<boolean>(true);
  const [retypePassword, setRetypePassword] = useState<boolean>(true);

  return (
    <CustomSafeAreaView style="bg-white">
      <View className="m-4 flex-row bg-grey-50 rounded-xl">
        <TextInput
          className="flex-grow p-4"
          placeholder="Current Password"
          secureTextEntry={currentPassword}
          style={{ height: 48 }}
        />
        <MaterialIcons
          name={`${currentPassword ? "visibility" : "visibility-off"}` as any}
          size={24}
          color="grey"
          style={{ alignSelf: "center", marginRight: 10 }}
          onPress={() => setCurrentPassword(!currentPassword)}
        />
      </View>
      <View className="mb-4 mx-4 flex-row bg-grey-50 rounded-xl">
        <TextInput
          className="flex-grow p-4"
          placeholder="New Password"
          secureTextEntry={newPassword}
          style={{ height: 48 }}
        />
        <MaterialIcons
          name={`${newPassword ? "visibility" : "visibility-off"}` as any}
          size={24}
          color="grey"
          style={{ alignSelf: "center", marginRight: 10 }}
          onPress={() => setNewPassword(!newPassword)}
        />
      </View>
      <View className="mb-4 mx-4 flex-row bg-grey-50 rounded-xl">
        <TextInput
          className="flex-grow p-4"
          placeholder="Re-type Password"
          secureTextEntry={retypePassword}
          style={{ height: 48 }}
        />
        <MaterialIcons
          name={`${retypePassword ? "visibility" : "visibility-off"}` as any}
          size={24}
          color="grey"
          style={{ alignSelf: "center", marginRight: 10 }}
          onPress={() => setRetypePassword(!retypePassword)}
        />
      </View>
    </CustomSafeAreaView>
  );
}
