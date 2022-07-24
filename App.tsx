import React from 'react';
import {SignIn} from './src/screens/SignIn';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
import { Register } from './src/screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  
  );
}