import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primaria },
          headerTintColor: colors.branco,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'FitCode · Home', headerBackVisible: false }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre' }} />
        <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}