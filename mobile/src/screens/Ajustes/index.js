import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';



export default function Ajustes() {
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: "#DD3A06"}}>
            <ScrollView>

            <View style={styles.viewImage}>
                <Image source={{ uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' }} style={styles.image} />
                <Text style={styles.textImage}>Caio Ruiz</Text>
            </View>

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewTitulo }>
                    <Text style={ styles.textTitulo }>Minha conta</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Nome: Caio Ruiz</Text>
                </View>
                
                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>CPF: 410.860.168-82</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Telefone: (11) 97721-0000)</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>E-mail: caioruiz23@gmail.com</Text>
                </View>
            </View>

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewTitulo }>
                    <Text style={ styles.textTitulo }>Geral</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Precisa de ajuda?</Text>
                </View>
                
                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Sobre o IParei</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Desativar conta</Text>
                </View>

                
            </View>

            <View style={{ backgroundColor: '#DD3A06', height: 20 }} />

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewPadrao }>
                    <Text style={ styles.textSair }>Sair</Text>
                </View>

            </View>
            

            
        
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewImage: {
        //flex: 1,
        height: 230,
        //justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#DD3A06',
    },

    image: {
        width: 150, 
        height: 150, 
        borderRadius: 200 / 2,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 30,
    },

    textImage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },

    viewTitulo: {
        height: 30,
        backgroundColor: '#DD3A06',
        borderBottomWidth: 1,
        borderColor: '#DD3A06'
    }, 
    
    textTitulo: {
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    }, 

    viewPadrao: {
        height: 50,
        //backgroundColor: '#009900',
        borderBottomWidth: 1,
        borderColor: '#DD3A06'
    }, 

    textPadrao: {
        fontSize: 15,
        color: '#000',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingLeft: 5,
    }, 

    textSair: {
        fontSize: 15,
        color: '#DD3A06',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingLeft: 5,
    }, 



});