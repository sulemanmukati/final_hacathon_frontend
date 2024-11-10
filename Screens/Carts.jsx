
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Cart = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params || {}; // Handle if item is undefined
  const [quantity, setQuantity] = useState(1);
  const [selectedNoodleType, setSelectedNoodleType] = useState('Thin');

  // Function to handle navigation to Orders page
  const handleOrder = () => {
    // Prepare order data
    const orderData = {
      title: item.title,
      price: item.price,
      quantity,
      noodleType: selectedNoodleType,
      totalPrice: (item.price * quantity).toFixed(2),
      image: item.image,
    };

    // Navigate to the Orders screen with the order data
    navigation.navigate('orders', { orderedItem: orderData });
    Alert.alert('Order Placed', 'Your order has been successfully added.');
  };

  // Check if there are no items in the cart
  if (!item || Object.keys(item).length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noItemsText}>No items in cart</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${(item.price * quantity).toFixed(2)}</Text>

      {/* Noodle Type Selection */}
      <View style={styles.noodleTypeContainer}>
        <Text style={styles.noodleTypeTitle}>Choose Noodle Type:</Text>
        <View style={styles.noodleTypeOptions}>
          {['Thin', 'Thick', 'Udon'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.noodleTypeButton,
                selectedNoodleType === type && styles.noodleTypeButtonSelected,
              ]}
              onPress={() => setSelectedNoodleType(type)}
            >
              <Text
                style={[
                  styles.noodleTypeText,
                  selectedNoodleType === type && styles.noodleTypeTextSelected,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quantity Control */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Order It Button */}
      <Button title="Order It" onPress={handleOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c3a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  noodleTypeContainer: {
    marginBottom: 20,
  },
  noodleTypeTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  noodleTypeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  noodleTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#2c2c52',
  },
  noodleTypeButtonSelected: {
    backgroundColor: '#4e4ec8',
  },
  noodleTypeText: {
    color: '#ccc',
    fontSize: 16,
  },
  noodleTypeTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    fontSize: 30,
    color: '#4e4ec8',
    paddingHorizontal: 20,
  },
  quantity: {
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 10,
  },
});

export default Cart;
