import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import results from '../../app/ListHome/results';

export function ActionModal({ fecharModal }) {

  const user = results.find(item => item.id === 1);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={fecharModal}>
        <Text></Text>
      </TouchableOpacity>

      <View style={styles.card}>
        {/* Contêiner para o ícone, alinha à direita */}
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={fecharModal}>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text>Olá Mundo {}</Text>

        {/* Exibindo os dados da pessoa com id: 1 */}
        <Text style={styles.greetingText}>Olá {user?.name}</Text>
        
        {/* Exibindo nome, email e avatar da pessoa com id 1 */}
        <View style={styles.userInfo}>
          <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          <Text style={styles.nameText}>{user?.name}</Text>
          <Text style={styles.emailText}>{user?.email}</Text>
          <Text style={styles.titulo}>Sobre Mim:</Text>
          <Text style={styles.descricao}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

          <TouchableOpacity style={styles.contatarButton}>
              <Text style={styles.contatarTexto}>Contatar</Text>
          </TouchableOpacity>

          {/* Botão "Contatar" posicionado na parte inferior */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '85%',
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'white',
    zIndex: 90,
    elevation: 5,
  },
  iconWrapper: {
    flexDirection: 'row',  // Organiza os itens na horizontal
    justifyContent: 'flex-end',  // Alinha o ícone à direita
    marginBottom: 10,      // Adiciona um pequeno espaço abaixo do ícone
  },

  greetingText: {
    fontSize: 22,           // Tamanho da fonte para a saudação
    fontWeight: 'bold',
    marginBottom: 20,       // Adiciona espaço abaixo da saudação
  },
  userInfo: {
    alignItems: 'center',   // Centraliza os elementos dentro do contêiner
  },
  avatar: {
    width: 100,             // Tamanho da foto do avatar
    height: 100,
    borderRadius: 50,       // Torna a imagem redonda
    marginBottom: 10,       // Adiciona um espaço entre a imagem e o nome
  },
  nameText: {
    fontSize: 18,           // Tamanho da fonte para o nome
    fontWeight: 'bold',     // Deixa o nome em negrito
    marginBottom: 5,        // Adiciona um pequeno espaço abaixo do nome
  },
  emailText: {
    fontSize: 16,           // Tamanho da fonte para o e-mail
    color: 'gray',          // Cor do texto do e-mail
  },

  titulo: {
    fontWeight:'bold',
    marginTop: 15,
    marginBottom: 10,
  },

  descricao: {
    padding: 15,
    textAlign: 'justify',
  },

  contatarButton: {
    backgroundColor: 'black', // Cor de fundo do botão
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 20, // Adiciona um espaçamento de 20px abaixo do botão
    alignSelf: 'center', // Garante que o botão esteja centralizado
    marginTop: 100,
    width: '95%',
  },

  contatarTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
});
