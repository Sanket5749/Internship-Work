import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useMemo } from "react";
import { useLocalSearchParams } from "expo-router";

const Activity2 = () => {
  const { data } = useLocalSearchParams();
  const parsedData = JSON.parse(data);
  const themeColor = useColorScheme();

  const theme = useMemo(
    () => ({
      backgroundColor: themeColor === "dark" ? "#1a1a1a" : "#ffffff",
      textColor: themeColor === "dark" ? "#ffffff" : "#000000",
    }),
    [themeColor]
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>
        Name : {parsedData.name}
      </Text>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Age : {parsedData.age}
      </Text>
    </View>
  );
};

export default Activity2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 5,
    fontSize: 20,
  },
});
