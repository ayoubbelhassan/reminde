import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Time from './Time'

const App = () => {
  return (
    <View style={styles.container}>
      <Time />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:50
  }
})