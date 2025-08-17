import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useState, useMemo } from "react";

const quiz = [
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],

    correctAns: "React",
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "boolean"],

    correctAns: "object",
  },
  {
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Array", "Linked List"],

    correctAns: "Stack",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "var", "const", "define"],

    correctAns: "const",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],

    correctAns: "O(log n)",
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],

    correctAns: "CSS",
  },
  {
    question: "Which method is used to parse a JSON string in JavaScript?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"],

    correctAns: "JSON.parse()",
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",

    options: ["String", "Number", "Boolean", "Object"],

    correctAns: "Object",
  },
];

const App = () => {
  const colorScheme = useColorScheme();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showStart, setShowStart] = useState(true);

  const theme = useMemo(
    () => ({
      backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#ffffff",
      textColor: colorScheme === "dark" ? "#ffffff" : "#333333",
      buttonColor: colorScheme === "dark" ? "#333333" : "#f0f0f0",
      correctColor: colorScheme === "dark" ? "#2d5a27" : "#4caf50",
      incorrectColor: colorScheme === "dark" ? "#862020" : "#e53935",
      borderColor: colorScheme === "dark" ? "#444444" : "#dddddd",
      progressColor: colorScheme === "dark" ? "#888888" : "#666666",
    }),
    [colorScheme]
  );

  const handleOptionPress = (option) => {
    setSelected(option);
    if (option === quiz[current].correctAns) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < quiz.length - 1) {
        setCurrent(current + 1);

        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  const handleStart = () => {
    setCurrent(0);
    setScore(0);

    setSelected(null);

    setShowScore(false);

    setShowStart(false);
  };
  const handleHome = () => {
    setShowScore(false);
    setShowStart(true);
  };

  if (showScore) {
    return (
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Text style={[styles.question, { color: theme.textColor }]}>
          Quiz Complete!
        </Text>

        <Text style={styles.score}>
          Your Score: {score} / {quiz.length}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Restart Quiz</Text>\
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleHome}>
          <Text style={styles.buttonText}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (showStart) {
    return (
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.buttonColor }]}
          onPress={handleStart}
        >
          <Text style={[styles.buttonText, { color: theme.textColor }]}>
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.question, { color: theme.textColor }]}>
        {quiz[current].question}
      </Text>

      {quiz[current].options.map((option, idx) => (
        <TouchableOpacity
          key={idx}
          style={[
            styles.button,
            { backgroundColor: theme.buttonColor },
            selected === option
              ? option === quiz[current].correctAns
                ? { backgroundColor: theme.correctColor }
                : { backgroundColor: theme.incorrectColor }
              : null,
          ]}
          onPress={() => !selected && handleOptionPress(option)}
          disabled={!!selected}
        >
          <Text style={[styles.buttonText, { color: theme.textColor }]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={[styles.progress, { color: theme.progressColor }]}>
        Question {current + 1} of {quiz.length}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  question: {
    fontSize: 22,
    marginBottom: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    width: 260,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  progress: {
    marginTop: 4,
    fontSize: 16,
  },
  score: {
    fontSize: 24,
    marginVertical: 4,
    fontWeight: "bold",
  },
});
