import { ScrollView, View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import global from '../../styles/global';
import styles from './Sobre.styles';

export default function Sobre({ navigation }) {
  return (
    <ScrollView style={global.container}>
      <Text style={global.titulo}>Sobre</Text>

      <View style={global.card}>
        <Text style={global.subtitulo}>FitCode</Text>
        <Text style={global.texto}>
          Aplicativo institucional da FitCode Academia, desenvolvido como projeto acadêmico para a
          disciplina de Programação para Dispositivos Móveis I.
        </Text>
        <Text style={styles.versao}>Versão: 1.0</Text>
      </View>

      <View style={global.card}>
        <Text style={global.subtitulo}>Missão</Text>
        <Text style={global.texto}>Tornar o treino mais simples, acessível e acompanhado por dados.</Text>
        <Text style={global.subtitulo}>Visão</Text>
        <Text style={global.texto}>Ser referência em academias conectadas na zona leste de São Paulo.</Text>
        <Text style={global.subtitulo}>Valores</Text>
        <Text style={global.texto}>Saúde, disciplina, respeito e inovação.</Text>
      </View>

      <CustomButton title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}