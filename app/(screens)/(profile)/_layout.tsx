import { Stack } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function LayoutRoot() {
  return (
    <Stack>
      <Stack.Screen
        name="change-password"
        options={{
          headerTitle: "Change Password",
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.8}>
              <Text className="p-4 text-primary text-center font-bold">
                Save
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
