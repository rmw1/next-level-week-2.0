import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing';

import { AppLoading }  from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts}  from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold }  from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

//view = div h name secton footer
//text = textos negrito titulo paragrafo


export default function App() {
  let [fontsLoaded] = useFonts ({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading></AppLoading>
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}


// análogo as classes de style. 
//Obs: não há herança de estilos no RN.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color:'#000',
    fontWeight: 'bold'
  }
});
