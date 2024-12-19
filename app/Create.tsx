// 'INDEX DE LOGIN'
// 'PAGINA DE CRIAR CONTA'
import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity , Alert} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter, Link } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO

import { StyleSheet } from 'react-native';
import { Botão } from '../src/COMPONENTS/Botão';
import { colors } from '../src/COMPONENTS/global';


export default function Create() {
  const router = useRouter(); // Hook para navegação

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');
  const [empresa, setEmpresa] = useState('');

  if (isNaN(Number(numero))) {
    return Alert.alert("Numero", "A numero precisa ser um número!")
  }

  async function handleSignIn() {
    if (nome === '' || email === '' ||numero === '' || password === '' || empresa === '' 
    ) {  // Verifica se o e-mail não está vazio;
      alert("Por favor, Preencha todos os campos.");
    } else {
      router.replace('/dashboard')
    }
  }

  const Out = () => {
    
  }
  return (
    <View style={styles.container}>

      <View style={styles.cardTop}>

        <TouchableOpacity 
          onPress={() => {router.replace('tabs')}} >
          <AntDesign onPress={Out} name="caretleft" size={30} color="white" style={styles.icon}/>
        </TouchableOpacity>

      </View>

      <View style={styles.cardBottom}>

      <Text style={styles.Title}>Criar conta</Text>
          <View style={styles.Card}>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome} // Atualiza o estado text1
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail} // Atualiza o estado text1
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu numero"
                value={numero}
                onChangeText={setNumero} // Atualiza o estado text1
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword} // Atualiza o estado text1
            />

            <TextInput
                style={styles.input} 
                placeholder="voçe busca representar uma empresa?"
                value={empresa}
                onChangeText={setEmpresa} // Atualiza o estado text1
            />

            <Botão
            activeOpacity={.80}
            onPress={handleSignIn} >
              <Text style={styles.btnText}>Entrar</Text>
            </Botão>

        </View>

        <Text style={styles.textBottom}>Ja tem uma conta? <Link href={"/Login"} style={styles.links}>Entre aqui!</Link></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242424"
  },
  cardTop:{
    width: "100%",
    height: "10%",
  },
  icon:{
    top: 70,
    left: 40,
  },
  cardBottom:{
    width: "100%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 130,
    padding: 20
  },
  Card:{
    width: "90%",
    height: 200,
    alignItems: "center",
    marginTop: 40,
  },
  Title: {
    fontSize: 45,
    marginTop: 20,
    color: "#000"
  },
  input: {
    width: 330,
    marginTop: 20,
    height: 50,
    paddingLeft: 20,
    color: "#000",
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0,
    marginBottom: 15,
    fontSize: 16,
  },
  botao:{
    width: 330,
    height: 60,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    color: "#000",
    fontSize: 18,
  },
  textBottom:{
    fontSize: 17,
    top: "50%",
  },

  links:{
    color: "#ACA465",
  },
}) 