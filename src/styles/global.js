import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.fundo, padding: 24 },
    titulo: { fontSize: 26, fontWeight: 'bold', color: colors.primaria, marginBottom: 8 },
    subtitulo: { fontSize: 18, fontWeight: '600', color: colors.texto, marginTop: 16 },
    texto: { fontSize: 16, color: colors.texto, marginTop: 4, lineHeight: 22 },
    card: { backgroundColor: colors.branco, borderRadius: 12, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: colors.borda },
});