import { ScrollView, View, Text, Linking } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import global from '../../styles/global';
import styles from './Contato.styles';

export default function Contato({ navigation }) {
  return (
    <ScrollView style={global.container}>
      <Text style={global.titulo}>Contato</Text>

      <View style={global.card}>
        <Text style={global.subtitulo}>FitCode Academia</Text>
        <Text style={global.texto}><Text style={styles.rotulo}>Telefone: </Text>(11) 99999-9999</Text>
        <Text style={global.texto}><Text style={styles.rotulo}>E-mail: </Text>contato@fitcode.com</Text>
        <Text style={global.texto}><Text style={styles.rotulo}>Endereço: </Text>Rua dos Desenvolvedores, 100</Text>
        <Text style={global.texto}><Text style={styles.rotulo}>Atendimento: </Text>seg a sex, 6h às 22h</Text>
      </View>

      <CustomButton title="Ligar" onPress={() => Linking.openURL('tel:11999999999')} />
      <CustomButton title="Enviar e-mail" onPress={() => Linking.openURL('mailto:contato@fitcode.com')} variant="secondary" />
      <CustomButton title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}