import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Pressable,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import ListItem from '../../ListHome/components/ListItem';
import results from '../../ListHome/results';
import { ActionModal } from '../../../src/COMPONENTS/actionModal';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Adicionando estado para o item selecionado
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  const CreateVaga = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um curso"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            setSelectedItem(item);  // Define o item selecionado
            setModalVisible(true);   // Abre o modal
          }}>
            <ListItem data={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        animationType='slide'
      >
        {/* Passando o item selecionado para o ActionModal */}
        <ActionModal
          fecharModal={() => setModalVisible(false)}
          item={selectedItem}  // Passando o item selecionado para o modal
        />
      </Modal>

      {/* Botão flutuante para criação */}
      <TouchableOpacity>
        <AntDesign
          name="pluscircle"
          size={43}
          color="#ACA446"
          style={styles.floatingButton}
        />
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242425',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#363636',
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  floatingButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: '87%',
    padding: 20,
  },
});

export default App;
