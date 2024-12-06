import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState('');

  const nameHandler = () => {
    console.log("Clicked once")
    setName('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Onboarding/logo.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Rounded Button Pressed!')}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => nameHandler()} // Pass input directly to the handler
          placeholder="Type your name here..."
          value={name} // Controlled component for state
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: 15,
  },
  image: {
    width: 80, // Set width
    height: 90, // Set height
    marginTop: 20,
    marginLeft: 0,
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 30, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 160, // Adds spacing between the image and the button
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
    marginLeft: 35,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});























// import { StyleSheet, View, Text,TextInput, Image ,TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import {useState} from 'react'

// export default function HomePage() {

//   const [name, setName] = useState("")
// const nameHandler = (e) => {
//   console.log(e.target.value)
// }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={require('../../assets/images/Onboarding/logo.png')}
//           style={styles.image}
//         />
//         <TouchableOpacity style={styles.button} onPress={() => console.log('Rounded Button Pressed!')}>
//           <Text style={styles.buttonText}>skip</Text>
//         </TouchableOpacity>
//       </View>
//       <View
//       style={styles.input}
//       >
//       <Text>  Name </Text>
//       <TextInput
//         onChangeText={(e)=>nameHandler(e.target.value)}
//         placeholder="Type here..."
        
        
//       />
// </View>

//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     marginTop: 15,
//   },
//   image: {
//     width: 80, // Set width
//     height: 90, // Set height
//     marginTop: 20,
//     marginLeft: 0,
//   },
//   button: {
//     backgroundColor: '#841584',
//     borderRadius: 30, // Rounded corners
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginLeft: 160, // Adds spacing between the image and the button
//     marginTop: 20
//   },
//   buttonText: {
//     color: '#fff', // White text
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: "center"
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     marginLeft: 35,
//     display: "flex",
//     flexDirection: "row",
//     borderColor: "blue",
//     borderStyle: "solid",
//     borderWidth: 2
//   },
  
// });
