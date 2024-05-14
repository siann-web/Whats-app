import React, { useState } from 'react';
import { View, Linking, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';

const Main = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = () => {
    if (!phoneNumber || phoneNumber.length < 13) {
      Alert.alert('Número de telefone inválido', 'Por favor, insira um número de telefone válido!');
      return;
    }

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappURL);
  };

  const number = (text) => {
    const numericText = text.replace(/[^\d]/g, '');

    const formattedText = numericText.startsWith('55') ? numericText : '55' + numericText;

    setPhoneNumber(numericText.slice(0, 13));
  };
  
  

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Que tal enviar uma mensagem? </Text>


      <TextInput
        //maxLength={13}
        //min
        style={styles.input}
        placeholder="Número de Telefone"
        keyboardType="phone-pad" 
        value={phoneNumber}
        onChangeText={number}
      />
      
      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        placeholder="Mensagem"
        value={message}
        onChangeText={text => setMessage(text)
        }
      />

      <Button
       color='#00cbcc'
       title="Enviar Mensagem via WhatsApp" 
       onPress={sendWhatsAppMessage}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005227',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: '#fff',
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#fff',
  },


});

export default Main;