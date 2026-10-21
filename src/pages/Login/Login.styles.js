import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.fundo, justifyContent: 'center', padding: 24 },
  logo: { fontSize: 36, fontWeight: 'bold', color: colors.primaria, textAlign: 'center' },
  slogan: { fontSize: 14, color: colors.texto, textAlign: 'center', marginBottom: 24 },
  titulo: { fontSize: 20, fontWeight: '600', color: colors.texto, marginBottom: 12 },
  input: { backgroundColor: colors.branco, borderRadius: 10, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: colors.borda, fontSize: 16 },
  linhaSenha: { flexDirection: 'row', alignItems: 'center' },
  mostrar: { color: colors.primaria, fontWeight: 'bold', marginLeft: 8, marginBottom: 12 },
  erro: { color: colors.erro, marginBottom: 4 },
  dica: { textAlign: 'center', color: colors.texto, marginTop: 20, fontSize: 12 },
});