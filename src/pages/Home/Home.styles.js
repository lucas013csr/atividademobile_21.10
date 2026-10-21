import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  banner: { backgroundColor: colors.primaria, borderRadius: 12, padding: 20, marginBottom: 16 },
  bannerTitulo: { color: colors.branco, fontSize: 22, fontWeight: 'bold' },
  bannerTexto: { color: colors.branco, marginTop: 6, fontSize: 15 },
  destaque: { color: colors.secundaria, fontWeight: 'bold', fontSize: 16 },
});