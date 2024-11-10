import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Importing FontAwesome icon
const Intro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Icon */}
      <Icon name="react" size={100} color="#860fce" style={styles.icon} />
      {/* <Icon name="rocket" size={30} color="#900" /> */}
      <Text style={styles.title}>Login Template</Text>
      <Text style={styles.para}>The easiest way to start with your amaizing applicaton</Text>
      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Signup Button */}
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText2}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'#6725d3'
  },
  button: {
    backgroundColor: '#6725d3', // Button ka background color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF', // Button text ka color
    fontSize: 16,
    fontWeight: 'bold',
  }, 
   button2: {
border: "2px solid black",
borderWidth: 2, // Border ka thickness
borderColor: '#6725d3', // Border ka color (same as title text)
paddingVertical: 12,
paddingHorizontal: 30,
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
marginTop: 10,
width: '80%',
  },
  buttonText2: {
    color: '#6725d3', // Button text ka color
    fontSize: 16,
    fontWeight: 'bold',
  },
  para:{
    textAlign:'center',
    color: 'black', // Button text ka color
    fontSize: 16,
    fontWeight: 'bold',
  }
});
export default Intro;