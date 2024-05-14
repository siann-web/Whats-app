import { Text, TextInput, View, StyleSheet} from 'react-native';
import {changeNumber, number} from './ParentComponent'

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <TextInput maxLength={11}
      autoComplete='tel-country-code'
      placeholder='Digite o contato aqui:'
      style={styles.paragraph}
      onPressIn={changeNumber} 
      keyboardType="numeric"
      />
      <Text value={number}
      style={styles.text}></Text>
      <TextInput maxLength={500}
      placeholder='Digite sua mensagem aqui:'
      style={styles.paragraph}
      multiline
      numberOfLines={3}
      value={number}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },

 text:{
   fontSize: 14,
   color:'yellow'
 },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'cyan',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'green'
  },
  
  logo: {
    height: 128,
    width: 128,
  }
});
