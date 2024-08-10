import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Card from '@/components/Card/Card'; // Ajuste o caminho conforme necessário
import CardContent from '@/components/Card/CardContent'; // Ajuste o caminho conforme necessário
import CardCover from '@/components/Card/CardCover'; // Ajuste o caminho conforme necessário
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Descubra Mais!</Text>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>

      {/* Card Component */}
      <Card style={styles.card}>
        <CardCover source={{ uri: 'https://fastly.picsum.photos/id/940/450/200.jpg?hmac=GQKbnHKHdYR86VWb3yHUUao1NQATLp2vl8ynDAfljQM' }} />
        <CardContent style={styles.cardContent}>
          <Text style={styles.cardTitle}>Explorando Novos Horizontes</Text>
          <Text style={styles.cardText}>Descubra as oportunidades que estão à sua espera e como aproveitá-las ao máximo.</Text>
        </CardContent>
      </Card>

      {/* Card Component */}
      <Card style={styles.card}>
        <CardCover source={{ uri: 'https://fastly.picsum.photos/id/566/450/200.jpg?hmac=KmqH2iNY5j1Wdjc2uRUhXgCknsQfB_8EL6mwXrADP0w' }} />
        <CardContent style={styles.cardContent}>
          <Text style={styles.cardTitle}>Seu Futuro Começa Aqui</Text>
          <Text style={styles.cardText}>Dê o primeiro passo para um futuro brilhante com ferramentas e dicas úteis para o sucesso.</Text>
        </CardContent>
      </Card>

      {/* Card Component */}
      <Card style={styles.card}>
        <CardCover source={{ uri: 'https://fastly.picsum.photos/id/553/450/200.jpg?hmac=cNtxHfkapI0WXjSA4-nUMJYJzQZASPAHRcISHqHLfqE' }} />
        <CardContent style={styles.cardContent}>
          <Text style={styles.cardTitle}>Inspire-se e Conquiste</Text>
          <Text style={styles.cardText}>Encontre inspiração para alcançar suas metas e transformar seus sonhos em realidade.</Text>
        </CardContent>
      </Card>

      {/* Card Component */}
      <Card style={styles.card}>
        <CardCover source={{ uri: 'https://fastly.picsum.photos/id/82/450/200.jpg?hmac=LSZmQvE0irw2SWIGmE55Z9hywtKDr3dvWcrFb6SlaxA' }} />
        <CardContent style={styles.cardContent}>
          <Text style={styles.cardTitle}>Seu Guia de Sucesso</Text>
          <Text style={styles.cardText}>Explore dicas e estratégias para otimizar seu desempenho e alcançar suas metas com eficácia.</Text>
        </CardContent>
      </Card>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
      
      {/* EditScreenInfo with rounded borders */}
      <View style={styles.editScreenInfoContainer}>
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que o ScrollView expanda seu conteúdo
    alignItems: 'center',
    padding: 20, // Adiciona padding para o container
    backgroundColor: '#f8f9fa', // Cor de fundo clara
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, // Reduz a margem inferior para diminuir o espaço
  },
  separatorContainer: {
    marginVertical: 20, // Reduz a margem vertical para diminuir o espaço
    width: '80%',
    alignItems: 'center', // Centraliza o separator horizontalmente
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#eee', // Define a cor de fundo da separação
    borderRadius: 10, // Adiciona bordas arredondadas
  },
  card: {
    width: '100%', // Ocupa toda a largura disponível
    maxWidth: 400, // Largura máxima para o card
    borderRadius: 10, // Bordas arredondadas
    overflow: 'hidden', // Para aplicar o borderRadius corretamente
    marginVertical: 10, // Reduz a margem vertical para separar os cards
  },
  cardContent: {
    padding: 20, // Adiciona padding dentro do CardContent
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Margem inferior para separar o título do texto
  },
  cardText: {
    fontSize: 16,
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
    elevation: 5, // Elevation para Android
  },
});
