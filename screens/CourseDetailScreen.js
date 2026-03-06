import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import RatingComponent from "../components/RatingComponent";

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const screenWidth = Dimensions.get("window").width;

  const togglePlayPause = async () => {
    if (!videoRef.current) return;

    const status = await videoRef.current.getStatusAsync();

    if (status.isPlaying) {
      await videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Course Image Card */}
      <View style={styles.mediaCard}>
        <Image source={course.image} style={styles.image} />
      </View>

      {/* Course Info */}
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {/* Video Section */}
      <Text style={styles.sectionTitle}>Course Introduction Video</Text>
      <View style={styles.mediaCard}>
        <Video
          ref={videoRef}
          source={course.video}
          style={styles.video}
          resizeMode="cover"
          useNativeControls
          isLooping
        />
      </View>

      {/* Play / Pause Button */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause} style={styles.button}>
          <Text style={styles.buttonText}>
            {isPlaying ? "Pause Video" : "Play Video"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rating */}
      <RatingComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f9", 
  },

  mediaCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 740, 
    borderRadius: 15,
    marginBottom: 10,
  },

  video: {
    width: "100%",
    height: 750, 
    borderRadius: 15,
    backgroundColor: "#000",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
    color: "#444",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#371eee",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});