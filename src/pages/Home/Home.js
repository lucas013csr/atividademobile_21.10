import { ScrollView, View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import global from '../../styles/global';
import styles from './Home.styles';

export default function Home({ navigation }) {
  return (
    <ScrollView style={global.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>Bem-vindo ao nosso aplicativo!</Text>
        <Text style={styles.bannerTexto}>A FitCode acompanha seus treinos do primeiro dia à meta.</Text>
      </View>

      <View style={global.card}>
        <Text style={styles.destaque}>Treino do dia</Text>
        <Text style={global.texto}>Peito e tríceps · 45 minutos</Text>
      </View>
      <View style={global.card}>
        <Text style={styles.destaque}>Aulas coletivas</Text>
        <Text style={global.texto}>Spinning às 18h · Funcional às 19h30</Text>
      </View>

      <CustomButton title="Sobre a FitCode" onPress={() => navigation.navigate('Sobre')} />
      <CustomButton title="Fale conosco" onPress={() => navigation.navigate('Contato')} variant="secondary" />
    </ScrollView>
  );
}