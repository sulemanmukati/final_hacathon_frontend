// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Browse = ({ navigation }) => {
//   const [cart, setCart] = useState([]);

//   // Function to add the item to the cart after selecting an option
//   const addItemToCart = (item) => {
//     // Navigate to the OptionSelection screen to select Thin, Thick, or Udon
//     navigation.navigate('OptionSelection', {
//       item,
//       addToCart: handleOptionSelection,
//     });
//   };

//   const handleOptionSelection = (item, selectedOption, quantity) => {
//     const newItem = { ...item, option: selectedOption, quantity };
//     setCart((prevCart) => [...prevCart, newItem]); // Add item to cart
//   };

//   const goToTabOrder = () => {
//     navigation.navigate('Carts', { cartItems: cart });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../Images/address_to_a_haggis.jpg')} style={styles.headerImage} />
//       <View style={styles.restaurantInfo}>
//         <Text style={styles.restaurantName}>Muhammad Suleman</Text>
//         <Text style={styles.restaurantAddress}>2972 Westheimer Rd. Santa Ana</Text>
//       </View>

//       <ScrollView style={styles.menuContainer}>
//         {menuData.map((item) => (
//           <View key={item.name} style={styles.menuItem}>
//             <Image source={item.image} style={styles.menuImage} />
//             <View style={styles.menuTextContainer}>
//               <Text style={styles.menuTitle}>{item.name}</Text>
//               <Text style={styles.menuDescription}>{item.description}</Text>
//               <Text style={styles.menuPrice}>${item.price}</Text>
//             </View>

//             <TouchableOpacity style={styles.plusIcon} onPress={() => addItemToCart(item)}>
//               <Ionicons name="add-circle" size={36} color="#4e4ec8" />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       <TouchableOpacity style={styles.cartButton} onPress={goToTabOrder}>
//         <Text style={styles.cartButtonText}>Go to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const menuData = [
//   {
//     name: 'Udon Miso',
//     description: 'Thick handmade udon noodles in a rich miso broth topped with green onions and mushrooms.',
//     price: 16.0,
//     image: require('../Images/burgerimage-removebg-preview.png'),
//   },
//   {
//     name: 'Tempura',
//     description: 'Crispy battered shrimp and vegetables served with a savory dipping sauce.',
//     price: 12.0,
//     image: require('../Images/png-transparent-ice-cream-creme-caramel-frutti-di-bosco-cheesecake-dessert-assorted-desserts-cream-frutti-di-bosco-food-thumbnail-removebg-preview.png'),
//   },
//   {
//     name: 'Macaroni',
//     description: 'Creamy macaroni pasta with cheese and herbs.',
//     price: 10.0,
//     image: require('../Images/pngtree-tasco-mexican-food-png-image_13326426-removebg-preview.png'),
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1c3a',
//   },
//   headerImage: {
//     width: '100%',
//     height: 200,
//   },
//   restaurantInfo: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 16,
//     alignItems: 'center',
//   },
//   restaurantName: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   restaurantAddress: {
//     color: '#ccc',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   menuContainer: {
//     paddingHorizontal: 16,
//   },
//   menuItem: {
//     backgroundColor: '#2c2c52',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     position: 'relative',
//   },
//   menuImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   menuTextContainer: {
//     padding: 16,
//   },
//   menuTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   menuDescription: {
//     color: '#ccc',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   menuPrice: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   plusIcon: {
//     position: 'absolute',
//     right: 16,
//     bottom: 16,
//   },
//   cartButton: {
//     backgroundColor: '#4e4ec8',
//     padding: 16,
//     alignItems: 'center',
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   cartButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Browse;
// TabBrowser.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Browse = () => {
  const navigation = useNavigation();
  const menuItems = [
    {
      id: 1,
      title: 'Udon Miso',
      description: 'Thick handmade udon noodles in a rich miso broth topped with green onions and mushrooms.',
      price: 16.00,
      image: require('../Images/burgerimage-removebg-preview.png'),
    },
    {
      id: 2,
      title: 'Tempura',
      description: 'Crispy battered shrimp and vegetables served with a savory dipping sauce.',
      price: 12.00,
      image: require('../Images/pngtree-tasco-mexican-food-png-image_13326426-removebg-preview.png'),
    },
    {
      id: 3,
      title: 'Macaroni',
      description: 'Creamy macaroni pasta with cheese and herbs.',
      price: 10.00,
      image: require('../Images/Tray-with-delicious-sushi-rolls-isolated-on-transparent-background-PNG-removebg-preview.png'),
    },
  ];

  const handleAddToCart = (item) => {
    navigation.navigate('Carts', { item });
  };

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image source={require('../Images/address_to_a_haggis.jpg')} style={styles.headerImage} />

      {/* Restaurant Info */}
      <View style={styles.restaurantInfo}>
      <Text style={styles.restaurantName}>Muhammad Suleman</Text>
        <Text style={styles.restaurantAddress}>2972 Westheimer Rd. Santa Ana</Text>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
              <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.plusIcon}
              onPress={() => handleAddToCart(item)}
            >
              <Ionicons name="add-circle" size={36} color="#4e4ec8" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c3a',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  restaurantInfo: {
    padding: 16,
    alignItems: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  menuContainer: {
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#2c2c52',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
  },
  menuImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  menuTextContainer: {
    padding: 16,
  },
  menuTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  menuDescription: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  menuPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plusIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default Browse;