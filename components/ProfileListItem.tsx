import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

interface Value {
    title?: string;
    icon?: string;
    content?: string;
    onPress?: () => void;
    error?: boolean;
}

interface Props {
    props: Value;
}

export default function ProfileListItem({
    props: { title, icon, content, error = false, onPress }
}: Props) {
    if (icon && content) 
        throw new Error("Icon and Content cannot be used together");

    return (
        <TouchableOpacity
          className="flex flex-row justify-between py-3 items-center"
          activeOpacity={0.8}
          style={{ height: 52 }}
          onPress={ onPress }
        >
          <Text className={`text-sm ${error ? "text-error": ""}`}>{title}</Text>
          {icon ?
            <MaterialIcons name={icon as any} size={24} color="#B4B4B4" />
            :
            <Text className="text-sm">{content}</Text>
          }
        </TouchableOpacity>
    )
}