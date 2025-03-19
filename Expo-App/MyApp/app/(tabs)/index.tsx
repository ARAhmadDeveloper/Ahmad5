import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";
import { createFFmpeg } from "@ffmpeg/ffmpeg"; 
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const App = () => {
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(10);
  const [duration, setDuration] = useState(10);
  const videoRef = useRef<Video | null>(null);
  const ffmpeg = createFFmpeg({ log: true });

const loadFFmpeg = async () => {
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }
};


  


  // 🔹 Function to request media library permissions
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied! Please enable gallery access in settings.");
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
      console.error("Error picking video:", error);
      alert("Error picking video. Please try again.");
    }
  };

  // 🔹 Get video duration
  const onVideoLoad = async (playbackStatus: AVPlaybackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.durationMillis) {
      setDuration(playbackStatus.durationMillis / 1000);
      setEndTime(playbackStatus.durationMillis / 1000);
    }
  };

  const trimVideo = async () => {
    if (!videoUri) {
      alert("No video selected!");
      return;
    }
  
    // 🔹 Request permissions for gallery access
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Gallery permission is required to save the video.");
      return;
    }
  
    // 🔹 Load FFmpeg if not already loaded
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }
  
    // 🔹 Read video file
    const inputUri = videoUri;
    const inputFileName = "input.mp4";
    const outputFileName = "trimmedVideo.mp4";
    const outputUri = `${FileSystem.documentDirectory}${outputFileName}`;
  
    // 🔹 Convert video into a format FFmpeg can process
    const inputData = await FileSystem.readAsStringAsync(inputUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  
    ffmpeg.FS("writeFile", inputFileName, new Uint8Array(Buffer.from(inputData, "base64")));
  
    // 🔹 Run FFmpeg command to trim the video
    await ffmpeg.run(
      "-i", inputFileName,   // Input file
      "-ss", `${startTime}`, // Start time
      "-to", `${endTime}`,   // End time
      "-c", "copy",         // Fast trimming without re-encoding
      outputFileName        // Output file
    );
  
    // 🔹 Get the trimmed video data
    const outputData = ffmpeg.FS("readFile", outputFileName);
    const outputBase64 = Buffer.from(outputData).toString("base64");
  
    // 🔹 Save trimmed video to file system
    await FileSystem.writeAsStringAsync(outputUri, outputBase64, {
      encoding: FileSystem.EncodingType.Base64,
    });
  
    // 🔹 Save video to user's gallery
    const asset = await MediaLibrary.createAssetAsync(outputUri);
    await MediaLibrary.createAlbumAsync("Trimmed Videos", asset, false);
  
    alert("Trimmed video saved to gallery!");
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
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}// ✅ Add event listener
          />

          {/* Trim Controls */}
          <Text style={styles.sliderLabel}>
            Start Time: {startTime.toFixed(1)}s
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            step={0.1}
            value={startTime}
            onValueChange={setStartTime}
          />

          <Text style={styles.sliderLabel}>
            End Time: {endTime.toFixed(1)}s
          </Text>
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







































































// import React, { useState, useRef } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
// import Slider from "@react-native-community/slider";
// import { RNFFmpeg } from 'react-native-ffmpeg';


// const App = () => {
//   const [videoUri, setVideoUri] = useState<string | null>(null);
//   const [startTime, setStartTime] = useState(0);
//   const [endTime, setEndTime] = useState(10);
//   const [duration, setDuration] = useState(10);
//   const videoRef = useRef<Video | null>(null);

  


//   // 🔹 Function to request media library permissions
//   const requestPermissions = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== "granted") {
//       alert("Permission denied! Please enable gallery access in settings.");
//       return false;
//     }
//     return true;
//   };

//   // 🔹 Function to pick a video
//   const pickVideo = async () => {
//     const hasPermission = await requestPermissions();
//     if (!hasPermission) return;

//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Videos, // ✅ Correct
//       });

//       if (!result.canceled && result.assets.length > 0) {
//         setVideoUri(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error("Error picking video:", error);
//       alert("Error picking video. Please try again.");
//     }
//   };

//   // 🔹 Get video duration
//   const onVideoLoad = async (playbackStatus: AVPlaybackStatus) => {
//     if (playbackStatus.isLoaded && playbackStatus.durationMillis) {
//       setDuration(playbackStatus.durationMillis / 1000);
//       setEndTime(playbackStatus.durationMillis / 1000);
//     }
//   };

//   // 🔹 Trim video (Just controls playback)
//   const trimVideo = async () => {
//     if (!videoRef.current) {
//       alert("No video loaded!");
//       return;
//     }
//     await videoRef.current.setPositionAsync(startTime * 1000); // Start video at trimmed time
//     await videoRef.current.playAsync();
//   };

  
//   const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
//     if (status.isLoaded && status.positionMillis) {
//       if (status.positionMillis / 1000 >= endTime) {
//         if (videoRef.current) {
//           await videoRef.current.pauseAsync(); // ✅ Stop video at endTime
//         }
//       }
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Video Trimmer</Text>

//       {/* ✅ Fixed Upload Button */}
//       <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
//         <Text style={styles.uploadButtonText}>Upload Video</Text>
//       </TouchableOpacity>

//       {/* Video Preview */}
//       {videoUri && (
//         <>
//           <Video
//             ref={videoRef}
//             source={{ uri: videoUri }}
//             style={styles.video}
//             useNativeControls
//             resizeMode={ResizeMode.CONTAIN}
//             isLooping={false} // ❌ Disable looping to prevent auto-restart
//             onLoad={onVideoLoad}
//             onPlaybackStatusUpdate={onPlaybackStatusUpdate}// ✅ Add event listener
//           />

//           {/* Trim Controls */}
//           <Text style={styles.sliderLabel}>
//             Start Time: {startTime.toFixed(1)}s
//           </Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={0}
//             maximumValue={duration}
//             step={0.1}
//             value={startTime}
//             onValueChange={setStartTime}
//           />

//           <Text style={styles.sliderLabel}>
//             End Time: {endTime.toFixed(1)}s
//           </Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={startTime}
//             maximumValue={duration}
//             step={0.1}
//             value={endTime}
//             onValueChange={setEndTime}
//           />

//           <TouchableOpacity style={styles.cropButton} onPress={trimVideo}>
//             <Text style={styles.cropButtonText}>Trim Video</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#1E90FF",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   uploadButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   video: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   sliderLabel: {
//     color: "#fff",
//     marginTop: 10,
//   },
//   slider: {
//     width: 250,
//     height: 40,
//   },
//   cropButton: {
//     marginTop: 20,
//     backgroundColor: "#E63946",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 12,
//   },
//   cropButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default App;
