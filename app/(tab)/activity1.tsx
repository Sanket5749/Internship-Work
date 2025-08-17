import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import React, { useMemo } from "react";

import { Link } from "expo-router";

const Activity1 = () => {
  const themeColor = useColorScheme();

  const theme = useMemo(
    () => ({
      backgroundColor: themeColor === "dark" ? "#1a1a1a" : "#ffffff",
      textColor: themeColor === "dark" ? "#ffffff" : "#000000",
      buttonBackground: themeColor === "dark" ? "#333333" : "#f5f5f5",
    }),
    [themeColor]
  );
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
      >
        <Link
          style={{ color: theme.textColor }}
          href={{
            pathname: "/activity2",
            params: {
              data: JSON.stringify({ name: "Sanket", age: 19 }),
            },
          }}
        >
          <Text style={[styles.text, { color: theme.textColor }]}>
            Go to Activity 2
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Activity1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 5,
    width: 200,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
