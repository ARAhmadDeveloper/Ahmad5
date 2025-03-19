import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode,AVPlaybackStatus } from 'expo-av';
import Slider from '@react-native-community/slider';



const App = () => {
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(10);
  const [duration, setDuration] = useState(10);
  const videoRef = useRef<Video | null>(null);



  // 🔹 Function to request media library permissions
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied! Please enable gallery access in settings.');
      return false;
    }
    return true;
  };

  // 🔹 Function to pick a video
  const pickVideo = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos, // ✅ Correct
      });
      

      if (!result.canceled && result.assets.length > 0) {
        setVideoUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking video:', error);
      alert('Error picking video. Please try again.');
    }
  };

  // 🔹 Get video duration
  const onVideoLoad = async (playbackStatus: AVPlaybackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.durationMillis) {
      setDuration(playbackStatus.durationMillis / 1000);
      setEndTime(playbackStatus.durationMillis / 1000);
    }
  };

  // 🔹 Trim video (Just controls playback)
  const trimVideo = async () => {
    if (!videoRef.current) {
      alert('No video loaded!');
      return;
    }
    await videoRef.current.setPositionAsync(startTime * 1000); // Start video at trimmed time
    await videoRef.current.playAsync();
  };



  const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.positionMillis) {
      if (status.positionMillis / 1000 >= endTime) {
        if (videoRef.current) {
          await videoRef.current.pauseAsync(); // ✅ Stop video at endTime
        }
      }
    }
  };









  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video Trimmer</Text>

      {/* ✅ Fixed Upload Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
        <Text style={styles.uploadButtonText}>Upload Video</Text>
      </TouchableOpacity>

      {/* Video Preview */}
      {videoUri && (
        <>
        <Video
  ref={videoRef}
  source={{ uri: videoUri }}
  style={styles.video}
  useNativeControls
  resizeMode={ResizeMode.CONTAIN}
  isLooping={false} // ❌ Disable looping to prevent auto-restart
  onLoad={onVideoLoad}
  onPlaybackStatusUpdate={onPlaybackStatusUpdate} // ✅ Add event listener
/>

          {/* Trim Controls */}
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
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  video: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  sliderLabel: {
    color: '#fff',
    marginTop: 10,
  },
  slider: {
    width: 250,
    height: 40,
  },
  cropButton: {
    marginTop: 20,
    backgroundColor: '#E63946',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  cropButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
