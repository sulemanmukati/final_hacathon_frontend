
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Orders = () => {
  const route = useRoute();
  const { orderedItem } = route.params || {};

  // Check if there are no ordered items
  if (!orderedItem) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Order Summary</Text>
        <Text style={styles.noItemsText}>No items to display</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Order Summary</Text>
      <View style={styles.orderCard}>
        <Image source={orderedItem.image} style={styles.orderImage} />
        <Text style={styles.orderItemText}>Title: {orderedItem.title}</Text>
        <Text style={styles.orderItemText}>Quantity: {orderedItem.quantity}</Text>
        <Text style={styles.orderItemText}>Noodle Type: {orderedItem.noodleType}</Text>
        <Text style={styles.orderItemText}>Total Price: ${orderedItem.totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c3a',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  noItemsText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  orderCard: {
    backgroundColor: '#2c2c52',
    padding: 15,
    borderRadius: 5,
  },
  orderImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  orderItemText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Orders;
