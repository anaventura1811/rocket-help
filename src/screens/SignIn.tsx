import { View, Text, VStack, Heading, Icon, useTheme } from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe email e senha');
    }
  }

  return (
    <VStack flex={1} alignItems={"center"} bg={"gray.600"} px={8} pt={24}>
      <Logo />
      <Heading color={"gray.100"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder="Email"
        onChangeText={(userEmail) => setEmail(userEmail)}
        mb={4}
        InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]} />} />}
      />
      <Input
        mb={8}
        onChangeText={(pass) => setPassword(pass)}
        placeholder="Senha"
        secureTextEntry
        InputLeftElement={<Icon ml={4} as={<Key  color={colors.gray[300]} />}/>}
      />
      <Button title={"Entrar"} w={"full"} onPress={handleSignIn} />
    </VStack>
  )
}
