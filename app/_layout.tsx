import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "BeVietNamPro-Black": require("@/assets/fonts/BeVietnamPro-Black.ttf"),
    "BeVietNamPro-BlackItalic": require("@/assets/fonts/BeVietnamPro-BlackItalic.ttf"),
  });

    // Load font
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  } ), [fontsLoaded, error];

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />
      <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      <Stack.Screen name='(screens)/(profile)' options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout
