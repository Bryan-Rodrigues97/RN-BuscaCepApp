import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';

import Button from './src/components/button';
import ZipCode, { ZipCodeProps } from './src/components/zipCode';
import api from './src/services/api';

import { styles } from './style';
import { useState } from 'react';

export default function App() {
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showZipCode, setShowZipCode] = useState(false);
  const [zipCodeResponse, setZipCodeResponse] = useState<ZipCodeProps | null>(); 
  
  async function handleSearch() {
    try {
      setIsLoading(true);
      const response = await api.get(`${zipCode}/json`);
      setZipCodeResponse(response.data);
      setShowZipCode(true);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClear() {
    setZipCode('');
    setShowZipCode(false);
    setZipCodeResponse(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o CEP desejado</Text>
      <TextInput
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType='numeric'
        placeholder='Ex: 92726878'
        style={styles.inputZipCode}
      />

      <View style={styles.buttonArea}>
        <Button title='Buscar' color='#2F7FF3' onPress={handleSearch} isLoading={isLoading} />
        <Button title='Limpar' color='#F32F2F' onPress={handleClear} />
      </View>

      {showZipCode && zipCodeResponse && <ZipCode zipCode={zipCodeResponse} />}

      <StatusBar style="auto" />
    </View>
  );
}
