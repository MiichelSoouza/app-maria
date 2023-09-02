
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', header: () => <></> }}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{title: 'Cadastro', header: () => <></> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
