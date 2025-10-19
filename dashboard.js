// screens/Dashboard.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to AQI Dashboard!</Text>
      <Text style={styles.subtitle}>Your air quality insights</Text>

      {/* Placeholder for your AQI UI */}
      <View style={styles.card}>
        <Text style={styles.cardText}>PM2.5: 35 µg/m³</Text>
        <Text style={styles.cardText}>AQI: 142 (Unhealthy for Sensitive Groups)</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          // You'll handle logout later
          navigation.replace('Login');
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;
