import { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';


export default function App() {
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <View>
      <TextInput 
        onChangeText={(texto) => setTermoBusca(texto)}
        value={termoBusca}
      />
      <Pressable onPress={() => console.log(termoBusca)}>
        <Text>Buscar</Text>
      </Pressable>

      <Text>{termoBusca}</Text>
    </View>
  );
}