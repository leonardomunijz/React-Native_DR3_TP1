import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ButtonComponent from '@/components/ButtonComponent'; // Ajuste o caminho conforme necessário
import InputComponent from '@/components/InputComponent'; // Ajuste o caminho conforme necessário
import GridComponent from '@/components/GridComponent'; // Ajuste o caminho conforme necessário
import ImageComponent from '@/components/ImageComponent'; // Ajuste o caminho conforme necessário
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Grid Component with a Single Image */}
      <GridComponent columns={1} style={styles.grid}>
        <ImageComponent 
          source={{ uri: 'https://fastly.picsum.photos/id/4/400/300.jpg?hmac=lng2dNcUgQscvNiEXCskwuBrbDDoyjbA0ZWDtMUJW88' }} 
          style={styles.image} 
        />
      </GridComponent>

      {/* Add space between the image and the inputs */}
      <View style={styles.spaceBetweenImageAndInput} />

      {/* Input Component */}
      <InputComponent label="Email" placeholder="Digite seu email" style={styles.input} />
      <InputComponent label="Senha" placeholder="Digite sua senha" style={styles.input} secureTextEntry />

      {/* Button Component */}
      <ButtonComponent title="Login" onPress={() => alert('Login Pressionado!')} style={styles.button} />

      <View style={styles.separator} />
      
      {/* EditScreenInfo with rounded borders */}
      <View style={styles.editScreenInfoContainer}>
        <EditScreenInfo path="app/(tabs)/two.tsx" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que o ScrollView expanda seu conteúdo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa', // Adiciona um fundo claro para contraste
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40', // Cor escura para o título
  },
  input: {
    marginBottom: 15,
    width: '100%',
  },
  button: {
    marginVertical: 15,
    width: '100%',
  },
  card: {
    marginVertical: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40', // Cor escura para o texto do card
  },
  cardText: {
    fontSize: 16,
    color: '#495057', // Texto adicional com cor um pouco mais clara
  },
  grid: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  spaceBetweenImageAndInput: {
    marginVertical: 20, // Adiciona um espaço vertical entre a imagem e os inputs
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#dee2e6',
  },
  editScreenInfoContainer: {
    marginVertical: 20,
    padding: 10, // Adiciona padding ao redor do componente
    backgroundColor: '#fff', // Fundo branco para contraste
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevation para Android
  },
});
