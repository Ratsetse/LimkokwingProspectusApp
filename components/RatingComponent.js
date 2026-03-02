import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  const resetRating = () => {
    setRating(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rating: {rating}/6</Text>

      {rating === 6 && (
        <Text style={styles.maxText}>Maximum rating reached ⭐</Text>
      )}

      <TouchableOpacity
        style={[
          styles.rateButton,
          rating === 6 && styles.disabledButton
        ]}
        onPress={handleRating}
        disabled={rating === 6}
      >
        <Text style={styles.buttonText}>Rate Course ⭐</Text>
      </TouchableOpacity>

      {rating > 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={resetRating}>
          <Text style={styles.resetText}>Reset Rating</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  maxText: {
    color: "red",
    marginBottom: 8,
  },
  rateButton: {
    backgroundColor: "#ff9800",
    padding: 12,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 12,
    padding: 10,
  },
  resetText: {
    color: "#2196F3",
    fontWeight: "bold",
  },
});