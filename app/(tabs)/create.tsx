import { View, Text, TextInput, StyleSheet,Image,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';

const create = () => {
  const [glucose, setGlucose] = React.useState('');
  const [time, setTime] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image source={require('../../assets/tear.png')} style={styles.logo} />
        </View>
      </View>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Glicemia</Text>
        <TextInput
          style={styles.input}
          value={glucose}
          onChangeText={setGlucose}
          placeholder="Digite o valor"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="Digite o horário"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar Registro</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#D3D3D3', // Cor de fundo semelhante à imagem
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  
});
export default create;
