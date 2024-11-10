
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios'; // For making API requests
import LinearGradient from 'react-native-linear-gradient';

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for button

  // Handle the signup logic with API call
  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      // API call with a timeout
      const response = await axios.post(
        'https://finail-hackathone-backend.vercel.app/api/signup',
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          timeout: 10000, // 10 seconds timeout
        }
      );

      if (response.status === 200 && response.data.status) {
        // If signup is successful, navigate to the dashboard
        setIsLoading(false);
        navigation.replace('Dashboard'); // Replaces login/signup screen with Dashboard
      } else {
        setIsLoading(false);
        Alert.alert('Signup Failed', response.data.message || 'Something went wrong');
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        // Handle server-side errors
        Alert.alert('Error', 'Server Error: ' + (error.response.data.message || 'Please try again.'));
      } else if (error.request) {
        // Handle request errors (no response from the server)
        Alert.alert('Error', 'Network Error: Unable to reach the server.');
      } else {
        // Handle other errors
        Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#4A90E2', '#000000']} // Black to blue gradient
      style={styles.gradient}
    >
      <View style={styles.container}>
        {/* Logo Image */}
        <Image
          style={styles.logo}
          source={require('../Images/foodielogo.png')} // Make sure to replace with correct image path
        />
              <Text style={styles.title}>Deliver Favourite food</Text>


        {/* Card-like container for the form */}
        <View style={styles.card}>
          {/* First Name Input */}
          <Text style={styles.title}>Signup</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#707070"
          />

          {/* Last Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#707070"
          />

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#707070"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#707070"
          />

          {/* Sign Up Button */}
          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleSignup}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>

            <Text style={styles.buttonTextBlack}>Already have an account? </Text>
        {/* Navigate to Login Screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText2}>
            <Text style={styles.buttonTextSignUp}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Styles
const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Ensure gradient covers entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400, // Max width of the card
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light gray border
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#5063b2',  
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#C1A1D8', // Light purple when disabled
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonTextBlack: {
    color: 'white',
    marginTop:'20' // "Already have an account?" text color
  },
  buttonTextSignUp: {
    color: 'white', // Purple color for the "Login" link
  },
});

export default Signup;
