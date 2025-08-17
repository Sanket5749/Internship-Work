import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
