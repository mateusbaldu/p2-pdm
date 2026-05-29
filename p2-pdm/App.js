import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  const [termoBusca, setTermoBusca] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procurar País</Text>
      
      <TextInput 
        style={styles.input}
        onChangeText={(texto) => setTermoBusca(texto)}
        value={termoBusca}
      />
      
      <Pressable 
        style={styles.button}
        onPress={() => console.log(termoBusca)}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 15
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  }
});
