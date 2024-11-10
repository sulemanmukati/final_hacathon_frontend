import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './Config/Stack_Navigations'
import { PaperProvider } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (<>

  <PaperProvider>

  <StackNavigation />
 
  </PaperProvider>
  
  </>
    // <View>
    //   <Text>App</Text>
    // </View>
  )
}

export default App