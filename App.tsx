import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('App is connected');


  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => { console.log('hello world') }}>Press me</Text>
      <Image source={{ width: 200, height: 300, uri: "https://picsum.photos/200/300" }}></Image>
      <Image source={require('./assets/favicon.png')}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
