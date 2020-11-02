import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import { connect, disconnect, subscribeToNewEsta } from '../services/socket';

function Main({ navigation }) {
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [idEstabelecimento, setIdEstabelecimento] = useState('');
    const [endereco, setEndereco] = useState('');

    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHightAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                })
            }

        }

        loadInitialPosition();
        
    }, []);

    useEffect(() => {
        subscribeToNewEsta(esta => setEstabelecimentos([...estabelecimentos, esta]));
        
    }, 
    [estabelecimentos])

    function setupWebsocket() {
        disconnect();

        const { latitude, longitude } = currentRegion;

        connect(
            latitude, 
            longitude,
            endereco,
        );
    };

    async function loadEstabelecimentos() {
        const {latitude, longitude} = currentRegion;

        const response = await api.get('/search' , {
            params: {
                latitude,
                longitude,
                endereco,
            }
        });
        //console.log(response.data.estas);
        setEstabelecimentos(response.data.estas);
        setupWebsocket();
    }

    
    function handleRegionChange(region){
        console.log(region);
        setCurrentRegion(region);
        loadEstabelecimentos();
    }

    if(!currentRegion){
        return null;
    }


    return (
        <>
        <MapView onRegionChangeComplete={handleRegionChange} initialRegion={currentRegion} style={styles.map}>
            {estabelecimentos.map(estabelecimento => (
                <Marker
                    key={estabelecimento._id} 
                    coordinate={{ 
                        longitude: estabelecimento.location.coordinates[0],
                        latitude: estabelecimento.location.coordinates[1], 
                    }} >
                    <Image style={styles.avatar} source={{ uri: estabelecimento.foto }}  />

                    <Callout onPress={() => {
                        // navegação
                        navigation.navigate('Profile', { _id: estabelecimento._id });
                    }} >
                        <View style={styles.callout}>
                            <Text style={styles.estaName} >{estabelecimento.nome}</Text>
                            <Text style={styles.estaEndereco}>{estabelecimento.endereco}</Text>
                            <Text style={styles.estaObs}>{estabelecimento.obs.join(', ')}</Text>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView> 

        <View style={styles.searchForm} >
            <TextInput 
                style={styles.searchInput} 
                placeholder="Buscar por Endereço..."
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={endereco}
                onChangeText={text => setEndereco(text)}
                onSubmitEditing={Keyboard.dismiss}
                onKeyPress={loadEstabelecimentos}
              
            />
            
            <TouchableOpacity onPress={loadEstabelecimentos} style={styles.loadButton} >
                <MaterialIcons 
                    name="my-location" 
                    size={20} 
                    color="#FFF"
                />

                
            </TouchableOpacity>

        </View>
        
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },

    callout: {
        width: 260,
    },

    estaName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    estaEndereco: {
        color: '#666',
        fontSize: 16,
    },

    estaObs: {
        marginTop: 5
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
        height: 50,
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#009900',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },


});

export default Main;