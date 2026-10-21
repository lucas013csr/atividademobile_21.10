import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default function CustomButton({ title, onPress, variant = 'primary' }) {
  const fundo = variant === 'secondary' ? colors.secundaria : colors.primaria;
  return (
    <TouchableOpacity style={[styles.botao, { backgroundColor: fundo }]} onPress={onPress}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: { borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 10 },
  texto: { color: colors.branco, fontWeight: 'bold', fontSize: 16 },
});