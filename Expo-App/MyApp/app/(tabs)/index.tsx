import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";
import { RNFFmpeg } from "react-native-ffmpeg";

const App = () => {
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(10);
  const [duration, setDuration] = useState(10);
  const videoRef = useRef<Video | null>(null);

  // ✅ Request permissions
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied! Enable gallery access in settings.");
      return false;
    }
    return true;
  };

  // ✅ Pick video from gallery
  const pickVideo = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["videos"], // ✅ Corrected API usage
      });

      if (!result.canceled && result.assets.length > 0) {
        setVideoUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking video:", error);
      alert("Error picking video. Please try again.");
    }
  };

  // ✅ Get video duration on load
  const onVideoLoad = async (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.durationMillis) {
      const durationSec = status.durationMillis / 1000;
      setDuration(durationSec);
      setEndTime(durationSec);
    }
  };

  // ✅ Stop video playback at `endTime`
  const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
    if (!status.isLoaded || !status.positionMillis) return;

    if (status.positionMillis / 1000 >= endTime) {
      videoRef.current?.pauseAsync();
    }
  };

  // ✅ Trim video using FFmpeg
  const trimVideo = async () => {
    if (!videoUri) {
      alert("No video selected!");
      return;
    }

    const outputUri = `${videoUri.split(".").slice(0, -1).join(".")}_trimmed.mp4`;
    const command = `-i ${videoUri} -ss ${startTime} -to ${endTime} -c copy ${outputUri}`;

    try {
      await RNFFmpeg.execute(command);
      alert("Video trimmed successfully!");
      setVideoUri(outputUri);
    } catch (error) {
      console.error("Error trimming video:", error);
      alert("Failed to trim video.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video Trimmer</Text>

      <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
        <Text style={styles.uploadButtonText}>Upload Video</Text>
      </TouchableOpacity>

      {videoUri && (
        <>
          <Video
            ref={videoRef}
            source={{ uri: videoUri }}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            onLoad={onVideoLoad}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          />

          <Text style={styles.sliderLabel}>Start Time: {startTime.toFixed(1)}s</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            step={0.1}
            value={startTime}
            onValueChange={setStartTime}
          />

          <Text style={styles.sliderLabel}>End Time: {endTime.toFixed(1)}s</Text>
          <Slider
            style={styles.slider}
            minimumValue={startTime}
            maximumValue={duration}
            step={0.1}
            value={endTime}
            onValueChange={setEndTime}
          />

          <TouchableOpacity style={styles.cropButton} onPress={trimVideo}>
            <Text style={styles.cropButtonText}>Trim Video</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  video: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  sliderLabel: {
    color: "#fff",
    marginTop: 10,
  },
  slider: {
    width: 250,
    height: 40,
  },
  cropButton: {
    marginTop: 20,
    backgroundColor: "#E63946",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  cropButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
