
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const TabOrder = ({ route, navigation }) => {
//   const { cartItems } = route.params;

//   // Debugging: Check if cartItems are passed correctly
//   console.log('Received Cart Items:', cartItems);

//   // Check if cartItems is undefined or empty
//   if (!cartItems || cartItems.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.emptyCartText}>Your cart is empty!</Text>
//       </View>
//     );
//   }

//   // Calculate the total price with proper checks
//   const totalPrice = cartItems.reduce((total, item) => {
//     // Ensure price and quantity are numbers
//     const price = parseFloat(item.price) || 0;
//     const quantity = Number(item.quantity) || 0;
//     return total + price * quantity;
//   }, 0);

//   // Navigate to Orders Screen with cart data
//   const handlePlaceOrder = () => {
//     navigation.navigate('orders', { cartItems, totalPrice });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {cartItems.map((item, index) => (
//           <View key={index} style={styles.cartItem}>
//             <Text style={styles.cartItemText}>{item.name} x {item.quantity ?? '0'}</Text>
//             <Text style={styles.cartItemText}>Option: {item.option || 'N/A'}</Text>
//             <Text style={styles.cartItemText}>Price: ${item.price || '0.00'}</Text>
//             <Text style={styles.cartItemText}>
//               Total: ${(item.price * (item.quantity || 0)).toFixed(2) || '0.00'}
//             </Text>
//           </View>
//         ))}
//       </ScrollView>
//       <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>

//       {/* Place Order Button */}
//       <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
//         <Text style={styles.placeOrderButtonText}>Place Order</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1c3a',
//     padding: 20,
//   },
//   cartItem: {
//     backgroundColor: '#2c2c52',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   cartItemText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   totalText: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   emptyCartText: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   placeOrderButton: {
//     backgroundColor: '#4e4ec8',
//     padding: 16,
//     borderRadius: 5,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   placeOrderButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default TabOrder;
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TabOrder = ({ route, navigation }) => {
  // Safely accessing cart items from route params
  const cartItems = route.params?.cartItems ?? [];

  // Check if the cart is empty
  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>Your cart is empty!</Text>
      </View>
    );
  }

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Function to navigate to the Orders screen and pass the cart data
  const handlePlaceOrder = () => {
    // Navigate to the 'OrdersTab' and pass the cart items and total price
    navigation.navigate('Carts', { cartItems, totalPrice });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.name} x {item.quantity}</Text>
            <Text style={styles.cartItemText}>Option: {item.option || 'N/A'}</Text>
            <Text style={styles.cartItemText}>Price: ${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c3a', padding: 20 },
  cartItem: { backgroundColor: '#2c2c52', padding: 10, marginBottom: 10, borderRadius: 5 },
  cartItemText: { color: '#fff', fontSize: 16 },
  totalText: { color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  emptyCartText: { color: '#fff', fontSize: 18, textAlign: 'center', marginTop: 20 },
  placeOrderButton: { backgroundColor: '#4e4ec8', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  placeOrderButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default TabOrder;
