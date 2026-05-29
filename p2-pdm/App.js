import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, FlatList, Image } from 'react-native';
import countriesClient from './src/utils/countriesClient';

export default function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [termoBuscaCapital, setTermoBuscaCapital] = useState('');
  const [pais, setPais] = useState([]);

  const buscarPais = () => {
    countriesClient.get(`/v3.1/name/${termoBusca}`)
      .then(resultado => {
        setPais(resultado.data);
        console.log("Dados do país:", resultado.data[0]);
      });
    limpaCampos()
  }

  const buscarPaisPorCapital = () => {
    countriesClient.get(`/v3.1/capital/${termoBuscaCapital}`)
      .then(resultado => {
        setPais(resultado.data);
        console.log("Dados do país:", resultado.data[0]);
      });
    limpaCampos()
  }

  const limpaCampos = () => {
    setTermoBusca("")
    setTermoBuscaCapital("")
  }

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
        onPress={buscarPais}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>


      <Text style={styles.title}>Procurar País por Capital</Text>

      <TextInput
        style={styles.input}
        onChangeText={(texto) => setTermoBuscaCapital(texto)}
        value={termoBuscaCapital}
      />

      <Pressable
        style={styles.button}
        onPress={buscarPaisPorCapital}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>

      <FlatList
        style={styles.list}
        data={pais}
        renderItem={({ item }) => (
          <View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Nome Comum do País: {item.name.common}</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Nome Oficial do País: {item.name.official}</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Nome do País em Russo: {item.translations.rus.common}</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Mapa do País (no OpenStreetMaps): {item.maps.openStreetMaps}</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Bandeira do País:</Text>
              <Image
                source={{ uri: item.flags.png }}
                style={{ width: 50, height: 50, marginLeft: 10 }}
              />
            </View>

          </View>
        )}
      />

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
    borderRadius: 4,
    marginBottom: 20
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
  },
  list: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginTop: 12,
    borderRadius: 4,
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#F0F0F0',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    textAlign: 'center',
  }
});
