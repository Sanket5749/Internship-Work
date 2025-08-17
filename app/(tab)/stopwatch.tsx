import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useState, useRef, useMemo } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const themeColor = useColorScheme();

  const theme = useMemo(
    () => ({
      backgroundColor: themeColor === "dark" ? "#1a1a1a" : "#ffffff",
      buttonBackground: themeColor === "dark" ? "#333333" : "#f5f5f5",
      textColor: themeColor === "dark" ? "#ffffff" : "#000000",
    }),
    [themeColor]
  );

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.timeText, { color: theme.textColor }]}>{time}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={handleStart}
      >
        <Text style={[styles.buttonText, { color: theme.textColor }]}>
          Start
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={handleStop}
      >
        <Text style={[styles.buttonText, { color: theme.textColor }]}>
          Stop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={handleReset}
      >
        <Text style={[styles.buttonText, { color: theme.textColor }]}>
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});
