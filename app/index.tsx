// 'PAGINA INICIAL'
import React, { useState } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO

import { colors } from '../src/COMPONENTS/global';

export default function Index() {
  const router = useRouter(); // Hook para navegação

  return (
    <View style={Start.container}>

      <View style={Start.card}>

          <View style={Start.Card}>

            <Text style={Start.Title}>Seja Bem-Vindo</Text>
            <Text style={Start.SubTitle}>Go 2 Work, onde poderemos te ajudar a encontrar o seu lugar desejado</Text>

          <TouchableOpacity
            activeOpacity={.80}
            style={Start.btn}
            onPress={() => {router.replace('Login')}} >
              <Text style={Start.btnText}>Entrar em uma conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
            activeOpacity={.80}
            style={Start.btn}
            onPress={() => {router.replace('Create')}} >
              <Text style={Start.btnText}>Criar uma conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Start.btn}
            onPress={() => {router.replace('/dashboard')}}
            >
              <Text>Entrada Gratuita</Text>
            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const Start = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242424"
  },
  card:{
    width: "90%",
    height: "45%",
    alignItems: "center",
    backgroundColor: "#FFF",
    top: 60,
    borderRadius: 20,
  },
  Card:{
    width: "90%",
    height: 190,
    alignItems: "center",
    justifyContent: "center",
    top: 40,
  },
  Title:{
    fontSize: 44,
    color: colors.black,
    marginTop: 80,
  },
  SubTitle: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 18,
  },
  btn:{
    width: "100%",
    height: 60,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    color: "#000",
    fontSize: 18,
  }
})