import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div style={styles.beastplex}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <text>x</text>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, beastplex: {
    backgroundColor: 'green',
    width: '100%',
    height: '100vh'
  }
});
