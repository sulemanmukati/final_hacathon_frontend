
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const OptionSelection = ({ route, navigation }) => {
//   const { item, addToCart } = route.params;

//   // Initialize quantity and selectedOption states
//   const [quantity, setQuantity] = useState(1);
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Select an option
//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   // Add to cart with complete item information
//   const handleAddToCart = () => {
//     if (!selectedOption) {
//       alert('Please select an option');
//       return;
//     }

//     // Create updated item with selected option and quantity
//     const updatedItem = {
//       ...item,
//       option: selectedOption,
//       quantity: quantity > 0 ? quantity : 1, // Ensure quantity is at least 1
//     };

//     // Debugging: Check values before passing to addToCart
//     console.log('Adding to cart:', updatedItem);

//     // Add to cart using addToCart function
//     addToCart(updatedItem);

//     // Navigate to the Cart screen (if you have a Tab Navigation setup)
//     navigation.goBack(); // Make sure your Tab Navigator has a 'TabOrder' route
//   };

//   // Increase and decrease quantity functions
//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   return (
//     <View style={styles.container}>
//       {item.image && <Image source={item.image} style={styles.itemImage} />}
//       <Text style={styles.header}>Choose an Option for {item.name}</Text>

//       {/* Option selection buttons */}
//       {['Thin', 'Thick', 'Udon'].map((option) => (
//         <TouchableOpacity
//           key={option}
//           style={[
//             styles.optionButton,
//             selectedOption === option && styles.selectedOption,
//           ]}
//           onPress={() => handleOptionSelect(option)}
//         >
//           <Text style={styles.optionText}>{option}</Text>
//         </TouchableOpacity>
//       ))}

//       {/* Quantity selector */}
//       <View style={styles.quantityContainer}>
//         <TouchableOpacity style={styles.counterButton} onPress={decreaseQuantity}>
//           <Text style={styles.counterText}>-</Text>
//         </TouchableOpacity>
//         <Text style={styles.quantityText}>{quantity}</Text>
//         <TouchableOpacity style={styles.counterButton} onPress={increaseQuantity}>
//           <Text style={styles.counterText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Add to Cart Button */}
//       <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
//         <Text style={styles.addButtonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1c3a',
//     alignItems: 'center',
//     padding: 16,
//   },
//   itemImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//   },
//   header: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 16,
//   },
//   optionButton: {
//     backgroundColor: '#2c2c52',
//     padding: 16,
//     borderRadius: 10,
//     marginVertical: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#4e4ec8',
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   counterButton: {
//     backgroundColor: '#2c2c52',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 8,
//   },
//   counterText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   quantityText: {
//     color: '#fff',
//     fontSize: 22,
//   },
//   addButton: {
//     backgroundColor: '#4e4ec8',
//     padding: 16,
//     borderRadius: 5,
//     marginTop: 16,
//     width: '100%',
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default OptionSelection;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OptionSelection = ({ route, navigation }) => {
  const { item, addToCart } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }

    const updatedItem = {
      ...item,
      option: selectedOption,
      quantity: quantity > 0 ? quantity : 1,
    };

    addToCart(updatedItem);
    navigation.navigate('TabOrder', { cartItems: [updatedItem] });
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {item.image && <Image source={item.image} style={styles.itemImage} />}
      <Text style={styles.header}>Choose an Option for {item.name}</Text>

      {['Thin', 'Thick', 'Udon'].map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={decreaseQuantity}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.counterButton} onPress={increaseQuantity}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c3a', alignItems: 'center', padding: 16 },
  itemImage: { width: 200, height: 200, resizeMode: 'cover' },
  header: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
  optionButton: { backgroundColor: '#2c2c52', padding: 16, borderRadius: 10, marginVertical: 8, width: '100%', alignItems: 'center' },
  selectedOption: { backgroundColor: '#4e4ec8' },
  optionText: { color: '#fff', fontSize: 18 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  counterButton: { backgroundColor: '#2c2c52', padding: 10, borderRadius: 5, marginHorizontal: 8 },
  counterText: { color: '#fff', fontSize: 18 },
  quantityText: { color: '#fff', fontSize: 22 },
  addButton: { backgroundColor: '#4e4ec8', padding: 16, borderRadius: 5, width: '100%', alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default OptionSelection;
