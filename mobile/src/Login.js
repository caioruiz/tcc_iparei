import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard, AsyncStorage  } from 'react-native';
import { StackActions, NavigationActions, StackNavigator, createNavigator, Navigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native'

import api from './screens/services/api';
import chamaNavigation from './chamaNavigation'

export default function Login({ navigation }) {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 350, y: 230 }));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('index');
            }
        })
   }, []);

    useEffect(() => {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 1,
                bounciness: 10,
                useNativeDriver:true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver:true,
            })
        ]).start();
        
    }, []);

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 175,
                duration: 100,
                duration: 350,
                useNativeDriver:false,
            }),
            Animated.timing(logo.y, {
                toValue: 115,
                duration: 100,
                duration: 350,
                useNativeDriver:false,
            }),
        ]).start();
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 350,
                duration: 100,
                duration: 350,
                useNativeDriver:false,
            }),
            Animated.timing(logo.y, {
                toValue: 230,
                duration: 100,
                duration: 350,
                useNativeDriver:false,
            }),
        ]).start();
    }
    
    async function handleSubmit(){
        // email e senha.
        console.log(email);
        //console.log(password);
        const response = await api.get('/loginUsuario', {
            params: {
                email,
                //password,
            }
        });
        const {_id} = response.data[0];
        const retorno = response.data;
        const retorno2 = retorno;
        console.log(_id);
       //console.log(retorno2[0]._id);

        await AsyncStorage.setItem('user', _id);
        navigation.navigate('index');
    }

  return (
    <KeyboardAvoidingView style={styles.background} >
        <View style={styles.conteinerLogo}>
            <Animated.Image source={require('./images/logo.png')} style={{  width: logo.x, height: logo.y, }} /> 
        </View>

        <Animated.View style={[styles.conteiner, {
          opacity: opacity,
          transform: [
              { translateY: offset.y}
          ]  
        }]}>
            <TextInput style={styles.input}  placeholder="Email" autoCorrect={false} value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" autoCorrect={false} value={password} onChangeText={setPassword} />

            <TouchableOpacity style={styles.btnSubmit} onPress={ handleSubmit } >
                <Text style={styles.SubmitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCriarConta} onPress={() => navigation.navigate('Cadastrar')}  >
                <Text style={styles.criarContaText}>Criar conta</Text>
            </TouchableOpacity>

        </Animated.View>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DD3A06',
    },
    conteinerLogo:{
        flex:1,
        justifyContent: 'center',
    },
    conteiner:{
        flex:1,
        alignItems: 'center',
        justifyContent: "center",
        width: '90%',
        paddingBottom: 50,
    },
    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit:{
        // backgroundColor: '#00ff80',
        backgroundColor: '#0052cc',
        width: '90%',
        height: 45,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubmitText:{
        color: '#FFF',
        fontSize: 18,
    },
    btnCriarConta:{
        marginTop: 10,
    },
    criarContaText:{
        color: '#fff',
    },
})