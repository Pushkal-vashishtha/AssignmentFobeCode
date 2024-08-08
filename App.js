import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import UserScreen from './screens/UserScreen';

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://random-data-api.com/api/users/random_user?size=80');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle navigation to the next user
  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle navigation to the previous user
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Render loading indicator or error message if needed
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {users.length > 0 && <UserScreen user={users[currentIndex]} />}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, currentIndex === 0 && styles.disabledButton]}
          onPress={handlePrevious} 
          disabled={currentIndex === 0}
          accessibilityLabel="Previous User"
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, currentIndex === users.length - 1 && styles.disabledButton]}
          onPress={handleNext} 
          disabled={currentIndex === users.length - 1}
          accessibilityLabel="Next User"
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
