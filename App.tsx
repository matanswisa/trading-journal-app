import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './components/Login';

export default function App() {
  console.log('App is connected');


  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1} onPress={() => { console.log('hello world') }}>Press me</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Login></Login>
      {/* <Text></Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
