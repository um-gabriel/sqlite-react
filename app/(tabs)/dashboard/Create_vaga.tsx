//PÁGINA RESPONSÁVEL PELO 'INDEX DE DASHBOARD - TELA DE PERFIL'
import { Text, View, StyleSheet, Touchable, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { colors } from '../../../src/COMPONENTS/global';
import { InputWhite } from '../../../src/COMPONENTS/Input';
import { Botão } from '../../../src/COMPONENTS/Botão';
import { TextArea } from '../../../src/COMPONENTS/TextArea';


export default function Create_vaga() {

    const [vaga, setVaga] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [salario, setSalario] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [observacoes, setobservacoes] = useState('');
  
    const Save = () => {
      if (vaga === ''  || empresa === '' || salario === '' || requisitos === '' || localizacao === ''
      ) {  // Verifica se o e-mail não está vazio;
        alert("Por favor, Preencha todos os campos.")
      } else if (isNaN(Number(salario))) {
        return Alert.alert("Salario","O salario precisa ser um número!")
      } else {
        Alert.alert("Parabens!","Vaga publicada com sucesso")
        return router.replace('/dashboard')
      }
    }; 
  
      return(
      <View style={styles.container}>
  
          <View style={styles.box}>
            <Text style={styles.Title}>Criação de vagas</Text>
              <InputWhite
                  placeholder="Qual o nome da vaga?" 
                  placeholderTextColor={"#FFFFFF"}
                  value={vaga}
                  onChangeText={setVaga} // Atualiza o estado text1
              >
              </InputWhite>
  
              <InputWhite
                  placeholder="De qual empresa ou ordem faz parte?" 
                  placeholderTextColor={"#FFFFFF"}
                  value={empresa}
                  onChangeText={setEmpresa}
              >
              </InputWhite>
  
              <InputWhite
                  placeholder="Salario oferecido:" 
                  placeholderTextColor={"#FFFFFF"}
                  value={salario}
                  onChangeText={setSalario}
              >
              </InputWhite>
  
              <InputWhite
                  placeholder="Requisitos do cargo:" 
                  placeholderTextColor={"#FFFFFF"}
                  value={requisitos}
                  onChangeText={setRequisitos}
              >
              </InputWhite>
  
              <InputWhite
                  placeholder="Localização:" 
                  placeholderTextColor={"#FFFFFF"}
                  value={localizacao}
                  onChangeText={setLocalizacao}
              >
              </InputWhite>
  
              <TextArea
                  placeholder="Observações:" 
                  placeholderTextColor={"#FFFFFF"}
                  multiline={true} // Permite múltiplas linhas de texto
                  numberOfLines={5} // Define a altura inicial em número de linhas
                  value={observacoes}
                  onChangeText={setobservacoes}
              >
              </TextArea>
  
            
              <Botão onPress={Save}>
                <Text style={{color: "#fff", fontSize: 20}}>Salvar cargo</Text>
              </Botão>
  
          </View>
      </View>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.back,
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      box:{
          width: "100%",
          top: 10,
          height: "40%",
          alignItems: 'center',
      },
      Title:{
        fontSize: 45,
        color: colors.titleW,
        marginBottom: 10,
        paddingRight: 40,
      },
      SubTitle:{
        fontSize: 24,
        color: colors.Text,
        marginBottom: 10,
      },
  });