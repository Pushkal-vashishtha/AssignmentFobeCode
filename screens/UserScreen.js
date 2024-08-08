import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserCard from '../components/UserCard';

const UserScreen = ({ user }) => {
  // Check if user data is valid
  if (!user) {
    return <Text style={styles.errorText}>No user data available</Text>; // Fallback for no user
  }

  return (
    <View style={styles.screen}>
      <UserCard user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default UserScreen;
