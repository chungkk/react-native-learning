import React from 'react'
import { Button, View, Text } from 'react-native';

function DetailsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.push('Setting')}
      />
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.navigate('Setting')}
      />
    </View>
  );
}

export default DetailsScreen