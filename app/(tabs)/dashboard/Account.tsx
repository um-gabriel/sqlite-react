//PÁGINA RESPONSÁVEL PELO 'INDEX DE DASHBOARD - TELA DE PERFIL'
import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, Pressable, Modal } from 'react-native';
import { Botão } from '../../../src/COMPONENTS/Botão';
import { colors } from '../../../src/COMPONENTS/global';
import { ActionModal } from '../../../src/COMPONENTS/actionModal'

import { router, useRouter } from 'expo-router'; //TENTANDO FAZER A NAVEGAÇÃO

export default function Account() {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
            <Botão 
            // onPress={() => {router.replace('index')}}
            >
                <Text style={{color: "#fff", fontSize: 20}}>Sair da conta</Text>
            </Botão>

            <Button
                title='Um botão'
                onPress={() => setModalVisible(true)}
            />
            <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={ () => setModalVisible(false)}
            animationType='slide'
            >
                <ActionModal
                    fecharModal={ () => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'center',
    }
});