import { StyleSheet, View, Text, Image ,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Onboarding/logo.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Rounded Button Pressed!')}>
          <Text style={styles.buttonText}>skip</Text>
        </TouchableOpacity>
      </View>
      <Text style={{flex: 2, marginTop: 20, marginLeft: 20}}>
      <Text style={styles.figma}>
       Find Best Place to Stay in {"\n"}<Text style={{color: "purple"}}> Good Price{"\n"} </Text>
       </Text>
       <Text style={{marginLeft: 20, fontSize: 20}}>Lorem ipsum dolor sit amet, consectetur</Text>
       </Text>
       <Image 
          source={require('../../assets/images/Onboarding/Rectangle 6.png')}
          style={styles.btm}
        /> 
        <TouchableOpacity style={styles.pos} onPress={() => console.log('Rounded Button Pressed!')}>
         <View style={styles.hl}>
<Text style={styles.hlb}/>
      </View>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
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
    marginTop: 20
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center"
  },
  figma: {
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 60
  },
  btm: {
    flex: 7,
    width: "90%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  pos: {
    backgroundColor: '#841584',
    borderRadius: 10, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    marginTop: 680,
    width: 130,
    marginLeft: 100
  },
  hl: {
    position: "relative", // Ensure this container is the reference point
  },
  hlb: {
    width: "90%",
    height: 2,
    backgroundColor: "yellow",
    position: "absolute",
    bottom: 19, // Place it 10px above the button
    alignSelf: "center", // Center horizontally
  },
});
