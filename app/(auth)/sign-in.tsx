import CustomSafeAreaView from "@/components/CustomSafeAreaView"
import { Link } from "expo-router"
import { Text, View } from "react-native"

const SignIn = () => {
    return (
        <CustomSafeAreaView>
            <Text>SignIn</Text>
            <Link href='/(tabs)/home'>Go to Home</Link> 
        </CustomSafeAreaView>
    )
}

export default SignIn