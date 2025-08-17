import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#60a5fa" : "#2563eb",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#6b7280" : "#9ca3af",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
          borderTopColor: colorScheme === "dark" ? "#333333" : "#e5e7eb",
        },
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
        },
        headerTitleStyle: {
          color: colorScheme === "dark" ? "#ffffff" : "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="image"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="image" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: "Quiz",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="question-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="address-book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "Stopwatch",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="clock-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity1"
        options={{
          title: "Activity-1",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="tasks" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity2"
        options={{
          title: "Activity-2",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="tasks" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
