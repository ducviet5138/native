import { MaterialIcons } from "@expo/vector-icons";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import TypeOfMaterialIcons from "./TypeOfMaterialIcons";

interface Atrributes {
  password?: boolean;
  showPassword?: boolean;
  placeholder?: string;
  className?: string;
  icon?: string | undefined;
}

interface Props {
  props: Atrributes;
}

function handlePasswordIcon(
  password: boolean,
  icon: string,
  showPassword: boolean,
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!password && !icon) return <></>;

  if (!password)
    return (
      <MaterialIcons
        name={icon as TypeOfMaterialIcons}
        size={24}
        color="gray"
        style={{ alignSelf: "center" }}
      />
    );

  // If password === true
  return (
    <MaterialIcons
      name={showPassword ? "visibility" : ("visibility-off" as any)}
      size={24}
      color="gray"
      style={{ alignSelf: "center" }}
      onPress={() => setShowPassword(!showPassword)}
    />
  );
}

export default function TextField({
  props: { password = false, placeholder = "", className = "", icon = "" },
}: Props) {
  if (password && icon) throw new Error("Password field already has an icon");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`bg-grey-50 rounded-xl flex-row p-4 ${className}`}>
      <TextInput
        className="flex-grow"
        placeholder={placeholder}
        secureTextEntry={password && !showPassword}
      ></TextInput>
      {handlePasswordIcon(password, icon, showPassword, setShowPassword)}
    </View>
  );
}
