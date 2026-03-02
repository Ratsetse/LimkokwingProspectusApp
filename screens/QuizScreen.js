import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuizScreen() {
  const questions = [
    {
      question: "Which career interests you the most?",
      options: [
        { text: "Journalism & Broadcasting", faculty: "Communication Media & Broadcasting" },
        { text: "Software Development", faculty: "Communication & Information Technology" },
        { text: "Starting a Business", faculty: "Business Management & Globalization" },
        { text: "Fashion & Design", faculty: "Design & Innovation" }
      ]
    },
    {
      question: "Which subject do you enjoy most?",
      options: [
        { text: "Media Studies", faculty: "Communication Media & Broadcasting" },
        { text: "Computer Programming", faculty: "Communication & Information Technology" },
        { text: "Business Studies", faculty: "Business Management & Globalization" },
        { text: "Tourism & Hospitality", faculty: "Tourism & Hospitality" }
      ]
    },
    {
      question: "What kind of work environment do you prefer?",
      options: [
        { text: "Film Studio or TV Station", faculty: "Communication Media & Broadcasting" },
        { text: "Tech Company", faculty: "Communication & Information Technology" },
        { text: "Corporate Office", faculty: "Business Management & Globalization" },
        { text: "Hotel or Travel Agency", faculty: "Tourism & Hospitality" }
      ]
    },
    {
      question: "What skill best describes you?",
      options: [
        { text: "Creative Storytelling", faculty: "Communication Media & Broadcasting" },
        { text: "Logical Thinking", faculty: "Communication & Information Technology" },
        { text: "Leadership", faculty: "Business Management & Globalization" },
        { text: "Customer Service", faculty: "Tourism & Hospitality" }
      ]
    },
    {
      question: "Which activity sounds most exciting?",
      options: [
        { text: "Designing Buildings", faculty: "Architecture & Built Environment" },
        { text: "Designing Clothes", faculty: "Design & Innovation" },
        { text: "Managing a Company", faculty: "Business Management & Globalization" },
        { text: "Developing an App", faculty: "Communication & Information Technology" }
      ]
    },
    {
      question: "What future career do you imagine?",
      options: [
        { text: "Architect", faculty: "Architecture & Built Environment" },
        { text: "Fashion Designer", faculty: "Design & Innovation" },
        { text: "IT Specialist", faculty: "Communication & Information Technology" },
        { text: "Event Manager", faculty: "Tourism & Hospitality" }
      ]
    },
    {
      question: "Which environment inspires you most?",
      options: [
        { text: "Newsroom", faculty: "Communication Media & Broadcasting" },
        { text: "Technology Lab", faculty: "Communication & Information Technology" },
        { text: "Airport or Resort", faculty: "Tourism & Hospitality" },
        { text: "Design Studio", faculty: "Design & Innovation" }
      ]
    },
    {
      question: "What motivates you the most?",
      options: [
        { text: "Sharing Information", faculty: "Communication Media & Broadcasting" },
        { text: "Innovation & Technology", faculty: "Communication & Information Technology" },
        { text: "Building Businesses", faculty: "Business Management & Globalization" },
        { text: "Creative Expression", faculty: "Design & Innovation" }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (faculty) => {
    const updatedScores = {
      ...scores,
      [faculty]: (scores[faculty] || 0) + 1
    };

    setScores(updatedScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updatedScores);
    }
  };

  const calculateResult = (finalScores) => {
    let highestFaculty = null;
    let highestScore = 0;

    for (let faculty in finalScores) {
      if (finalScores[faculty] > highestScore) {
        highestScore = finalScores[faculty];
        highestFaculty = faculty;
      }
    }

    setResult(highestFaculty);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  };

  if (result) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultTitle}>🎓 Recommended Faculty:</Text>
        <Text style={styles.result}>{result}</Text>

        <TouchableOpacity style={styles.button} onPress={restartQuiz}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestion].question}
      </Text>

      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option.faculty)}
        >
          <Text style={styles.buttonText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold"
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  result: {
    fontSize: 18,
    marginBottom: 20
  }
});