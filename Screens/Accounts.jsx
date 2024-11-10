import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Accounts = () => {
  // const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({
    name: 'Manchester, Kentucky 39495',
    imageUrl: 'https://via.placeholder.com/400x200', // Placeholder map image
  });

  // Handle search input change
  const handleSearchInputChange = (text) => {
    setSearchQuery(text);
  };

  // Simulate setting a location
  const handleSearch = () => {
    if (searchQuery.toLowerCase() === 'manchester') {
      setLocation({
        name: 'Manchester, Kentucky 39495',
        imageUrl: 'https://via.placeholder.com/400x200', // Placeholder for Manchester map image
      });
    } else if (searchQuery.toLowerCase() === 'new york') {
      setLocation({
        name: 'New York, NY 10007',
        imageUrl: 'https://via.placeholder.com/400x200', // Placeholder for New York map image
      });
    } else {
      setLocation({
        name: 'Unknown Location',
        imageUrl: 'https://via.placeholder.com/400x200', // Placeholder for default map
      });
    }
  };

  // Handle "Set Location" button press
  // const handleSetLocation = () => {
  //   navigation.navigate('TrackOrder'); // Change to your specific navigation target
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Location</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Find your Location"
          placeholderTextColor="#ccc"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearchInputChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: location.imageUrl }} style={styles.mapImage} />

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Selected Location:</Text>
        <Text style={styles.locationName}>{location.name}</Text>
      </View>

      <TouchableOpacity style={styles.setLocationButton}>
        <Text style={styles.setLocationText}>Set Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c3a',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    height: 40,
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: '#fff',
  },
  mapImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  locationContainer: {
    backgroundColor: '#3a3a6a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#fff',
  },
  locationName: {
    fontSize: 14,
    color: '#ccc',
  },
  setLocationButton: {
    backgroundColor: '#4e4ec8',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  setLocationText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Accounts;