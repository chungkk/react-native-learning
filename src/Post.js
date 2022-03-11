import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Post({ navigation }) {
  return (
    <View>
      <Text>Post List</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Postdetail')}
      />
    </View>
  )
}