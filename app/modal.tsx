import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App do TP1</Text>
      <Text style={styles.info}>Criado por Leonardo Muniz</Text>
      <Text style={styles.info}>Versão 1.0</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* EditScreenInfo with rounded borders */}
      <View style={styles.editScreenInfoContainer}>
        <EditScreenInfo path="app/modal.tsx" />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adiciona algum padding ao redor do container
    backgroundColor: '#f8f9fa', // Cor de fundo clara para contraste
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espaço abaixo do título
    color: '#333', // Cor escura para contraste
  },
  info: {
    fontSize: 18,
    marginBottom: 10, // Espaço abaixo dos textos informativos
    color: '#555', // Cor mais clara para o texto informativo
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ddd', // Cor de fundo da separação
    borderRadius: 5, // Bordas arredondadas para a separação
  },
  editScreenInfoContainer: {
    marginVertical: 20,
    padding: 15, // Adiciona padding interno
    backgroundColor: '#fff', // Fundo branco para contraste
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevação para Android
  },
});
