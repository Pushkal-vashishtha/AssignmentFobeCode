import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
      <View style={styles.details}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID:</Text>
          <TextInput style={styles.input} value={user.id.toString()} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>UID:</Text>
          <TextInput style={styles.input} value={user.uid} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} value={user.password} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.input} value={user.first_name} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.input} value={user.last_name} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} value={user.username} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} value={user.email} editable={false} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%', // Adjust the width to make the card smaller
    padding: 15, // Reduce padding to make the card smaller
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 10, // Add some vertical margin for better spacing
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 90, // Reduce avatar size to fit within the container
    height: 90, // Reduce avatar size to fit within the container
    borderRadius: 45, // Make it a circle
  },
  name: {
    fontSize: 20, // Reduce font size
    fontWeight: 'bold',
    marginBottom: 15, // Reduce bottom margin
  },
  details: {
    width: '100%',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10, // Reduce margin between fields
    backgroundColor: '#e0e0e0', // Gray background color
    padding: 8, // Adjust padding inside each field to reduce height
    borderRadius: 5,
  },
  label: {
    width: 100, // Adjust label width to fit new size
    fontSize: 12, // Reduce font size
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
     // Remove bottom border
    fontSize: 10, // Reduce font size
    backgroundColor: '#e0e0e0', // Match background color
 // Remove vertical padding to prevent cropping
    height: 30,
    color:'#000' // Set a specific height for the input
  },
});

export default UserCard;
