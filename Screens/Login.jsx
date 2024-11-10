
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('https://finail-hackathone-backend.vercel.app/login', {
        email: email,
        password: password,
      });

      console.log('API Response:', response);

      if (response.status === 200 && response.data.status) {
        console.log('Login Successful! Navigating to Dashboard...');
        setIsLoading(false);
        navigation.replace('Dashboard'); // Replaces the current screen with Dashboard
      } else {
        setIsLoading(false);
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#4A90E2','#000000']} // Black to blue gradient
      style={styles.gradient}
    >
      <View style={styles.container}>
        
      <Image
            style={styles.logo}
            source={require('../Images/foodielogo.png')} // Make sure the path is correct
          />
          <Text style={styles.title}>Deliver Favourite food</Text>
        {/* Card-like container for the login form */}
        <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#707070"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#707070"
          />
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={() => Alert.alert('Redirect to Forgot Password Screen')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>{isLoading ? 'Logging in...' : 'Login'}</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={styles.buttonTextBlack}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText2}>

              <Text style={styles.buttonTextSignUp}>REGISTER</Text>
            </Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    fontSize: 16,
    color: '#707070',
  },
  button: {
    backgroundColor: '#5063b2',  
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
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
    marginTop:"20",
    color: 'white',
  },
  buttonTextSignUp: {
    color: 'white',
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#707070',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Login;
