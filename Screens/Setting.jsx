
import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Setting = () => {
    // Data for categories and banners
    const categoryData = [
        {
            name: 'Burgers',
            image: require('../Images/burgerimage-removebg-preview.png'),
            offerText: 'Juicy Burgers at 30% OFF',
        },
        {
            name: 'Dessert',
            image: require('../Images/png-transparent-ice-cream-creme-caramel-frutti-di-bosco-cheesecake-dessert-assorted-desserts-cream-frutti-di-bosco-food-thumbnail-removebg-preview.png'),
            offerText: 'Desserts at 20% OFF',
        },
        {
            name: 'Mexican',
            image: require('../Images/pngtree-tasco-mexican-food-png-image_13326426-removebg-preview.png'),
            offerText: 'Mexican Deals - 25% OFF',
        },
        {
            name: 'Sushi',
            image: require('../Images/Tray-with-delicious-sushi-rolls-isolated-on-transparent-background-PNG-removebg-preview.png'),
            offerText: 'Sushi Rolls at 15% OFF',
        },
    ];

    const fastestNearYouImages = [
        require('../Images/burgerimage-removebg-preview.png'),
        require('../Images/burgerimage-removebg-preview.png'),
        require('../Images/burgerimage-removebg-preview.png'),
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1a0c3d' }}>
            {/* Header */}
            <View style={{ paddingTop: 40, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 16 }}>Delivery</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Maplewood Suites</Text>
                </View>
                <MaterialIcons name="delivery-dining" size={30} color="white" />
            </View>
            {/* Search Bar */}
            <View style={{ marginVertical: 15, paddingHorizontal: 15 }}>
                <View style={{ backgroundColor: '#2c1857', flexDirection: 'row', borderRadius: 10, alignItems: 'center', padding: 10 }}>
                    <Icon name="search1" size={20} color="white" />
                    <TextInput
                        style={{ color: 'white', marginLeft: 10, flex: 1 }}
                        placeholder="Your order?"
                        placeholderTextColor="white"
                    />
                </View>
            </View>

            {/* Categories Section */}
            <View style={{ paddingHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 16 }}>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal Scroll for Categories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 15 }}>
                {categoryData.map((category, index) => (
                    <TouchableOpacity key={index} style={{ alignItems: 'center', marginRight: 20 }}>
                        <View style={{ backgroundColor: '#2c1857', padding: 20, borderRadius: 20 }}>
                            <Image style={{ width: 50, height: 50 }} source={category.image} />
                        </View>
                        <Text style={{ color: 'white', marginTop: 10 }}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Special Offers Section */}
            <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Special Offers</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10 }}>
                    {categoryData.map((banner, index) => (
                        <ImageBackground
                            key={index}
                            source={banner.image}
                            style={{
                                width: 250,
                                height: 200,
                                marginRight: 15,
                                borderRadius: 20,
                                overflow: 'hidden',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            imageStyle={{ borderRadius: 20 }}
                        >
                            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: 70, borderRadius: 10, alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>{banner.offerText}</Text>
                                <TouchableOpacity
                                    style={{
                                        marginTop: 10,
                                        backgroundColor: 'blue',
                                        borderRadius: 10,
                                        paddingVertical: 8,
                                        paddingHorizontal: 20,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Order Now</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    ))}
                </ScrollView>
            </View>

            {/* Fastest Near You Section - Vertical Cards */}
            <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Fastest Near You</Text>
            </View>

            {/* Vertical Cards for "Fastest Near You" */}
            <ScrollView style={{ marginTop: 10, paddingHorizontal: 15 }}>
                {fastestNearYouImages.map((image, index) => (
                    <View key={index} style={{ backgroundColor: '#2c1857', padding: 20, borderRadius: 20, marginBottom: 20 }}>
                        <Image source={image} style={{ width: '100%', height: 150, borderRadius: 15 }} />
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 10 }}>Fast Delivery</Text>
                        <Text style={{ color: 'white', marginTop: 5 }}>Order now and get your food quickly!</Text>
                        <TouchableOpacity
                            style={{
                                marginTop: 15,
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                paddingVertical: 8,
                                paddingHorizontal: 20,
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

export default Setting;
