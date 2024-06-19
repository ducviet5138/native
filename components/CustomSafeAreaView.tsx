import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

interface Props {
  children?: ReactNode;
  style?: string;
}

export default function CustomSafeAreaView({ children, style }: Props) {
  return <SafeAreaView style={androidSafeAreaStyle.config} className={style}>{children}</SafeAreaView>;
}

const androidSafeAreaStyle = StyleSheet.create({
  config: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
