import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './Login.styles';

const USUARIO_VALIDO = 'aluno';
const SENHA_VALIDA = '123456';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [verSenha, setVerSenha] = useState(false);

  function entrar() {
    if (usuario.trim() === '') {
      setErro('Informe o usuário.');
      return;
    }
    if (senha === '') {
      setErro('Informe a senha.');
      return;
    }
    if (usuario !== USUARIO_VALIDO || senha !== SENHA_VALIDA) {
      setErro('Usuário ou senha inválidos.');
      return;
    }
    setErro('');
    navigation.replace('Home');
  }

  function limpar() {
    setUsuario('');
    setSenha('');
    setErro('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FitCode</Text>
      
      <Text style={styles.titulo}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <View style={styles.linhaSenha}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!verSenha}
        />
        <TouchableOpacity onPress={() => setVerSenha(!verSenha)}>
          <Text style={styles.mostrar}>{verSenha ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <CustomButton title="Entrar" onPress={entrar} />
      <CustomButton title="Limpar campos" onPress={limpar} variant="secondary" />

      <Text style={styles.dica}>Protótipo acadêmico · login simulado</Text>
    </View>
  );
}