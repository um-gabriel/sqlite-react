// 'INDEX DE LOGIN'
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useRouter, Link } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO

import AntDesign from '@expo/vector-icons/AntDesign';
import { TxtInput } from '../src/COMPONENTS/Input';
import { Botão } from '../src/COMPONENTS/Botão';


export default function Login() {
  const router = useRouter(); // Hook para navegação

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignIn() {
    if (email === "12345678" && nome === "leonardo@email.com") {  // Verifica se o e-mail não está vazio
        router.replace('/dashboard');
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
}
  return (
    <View style={Style.container}>

      <View style={Style.cardTop}>
        <TouchableOpacity
        onPress={() => { router.replace('Create')}} //não pega ainda
        >
          <AntDesign name="caretleft" size={35} color="white"style={Style.icon}/>
        </TouchableOpacity>
      </View>

      <View style={Style.cardBottom}>

      <Text style={Style.Title}>Tela de Login</Text>
          <View style={Style.Card}>

          <Text style={Style.text}>Digite seu email:</Text>
            <TxtInput
                placeholder="Email"
                value={nome}
                onChangeText={setNome} // Atualiza o estado text1
          />

          <Text style={Style.text}>Digite sua senha:</Text>
            <TxtInput
                placeholder="Senha"
                value={email}
                onChangeText={setEmail} // Atualiza o estado text1
          />

            <Botão
            activeOpacity={.80}
            onPress={handleSignIn} >
              
              <Text style={{fontSize: 18}}>Entrar</Text>
            </Botão>

        </View>
        <TouchableOpacity 
        onPress={() => { router.replace('/index') }}
        >
        <Text style={Style.textBottom} >Não tem conta? <Link href={"/Create"} style={Style.links}>crie aqui agora!</Link></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242424"
  },
  cardTop:{
    width: "100%",
    height: "30%",
  },
  icon:{
    top: 70,
    left: 40,
  },
  cardBottom:{
    width: "100%",
    height: "70%",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 130,
    padding: 20
  },
  Card:{
    width: "90%",
    height: 200,
    alignItems: "center",
    marginTop: 60,
  },
  Title: {
    fontSize: 35,
    marginTop: 20,
    color: "#000"
  },
  text:{
    fontSize: 17,
    paddingRight: 170,
    marginTop: 10,
  },
  textBottom:{
    fontSize: 17,
    top: 180,
  },

  links:{
    color: "#ACA465",
  },
})
