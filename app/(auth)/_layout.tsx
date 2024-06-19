import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{headerShown: false}}/>
      <Stack.Screen name='sign-up' options={{headerShown: false}}/>
      <Stack.Screen name='otp' options={{headerShown: false}}/>
      <Stack.Screen name='new-password' options={{headerShown: false}}/>
    </Stack>
  )
}

export default AuthLayout