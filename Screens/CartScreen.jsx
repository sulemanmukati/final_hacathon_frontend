import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
  // Retrieve the passed item from navigation
  const { cartItem } = route.params || {};

  // Debugging: Check if item is received correctly
  console.log("Received in Cart Screen:", cartItem);

  return (
    <View style={styles.container}>
      {cartItem ? (
        <>
          <Text style={styles.itemText}>Name: {cartItem.name}</Text>
          <Text style={styles.itemText}>Option: {cartItem.option}</Text>
          <Text style={styles.itemText}>Quantity: {cartItem.quantity}</Text>
          <Text style={styles.itemText}>Price per Unit: ${cartItem.price}</Text>
          <Text style={styles.itemText}>
            Total Price: ${cartItem.quantity * cartItem.price}
          </Text>
        </>
      ) : (
        <Text style={styles.itemText}>No items in the cart</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c3a',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 4,
  },
});

export default CartScreen;
