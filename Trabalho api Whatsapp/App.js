import {View, StyleSheet } from 'react-native';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
    <AssetExample></AssetExample>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'max',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8, 
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
