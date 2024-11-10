import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import intro from "../Screens/Intro";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Home from "../Screens/Home";
import TabOrder from "../Screens/TabOrder";
import OptionSelection from "../Screens/OptionSelection";
import CartScreen from "../Screens/CartScreen";
import Orders from "../Screens/Orders";


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      {/* <Stack.Screen options={{headerShown:false}} name="Intro" component={intro} /> */}
      <Stack.Screen  options={{headerShown:false}}  name="Login" component={Login} />
      <Stack.Screen  options={{headerShown:false}}  name="Signup" component={Signup} />
      <Stack.Screen options={{headerShown:false}}  name="Dashboard" component={Home} />
      <Stack.Screen options={{headerShown:false}}  name="TabOrder" component={TabOrder} />
      {/* <Stack.Screen options={{headerShown:false}}  name="Orders" component={Orders} /> */}
{/*   
     <Stack.Screen options={{headerShown:false}} 
  name="OptionSelection" component={OptionSelection} /> */}
      <Stack.Screen options={{headerShown:false}} 
  name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigation