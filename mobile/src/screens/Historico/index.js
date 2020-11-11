import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default function Historico() {
    return (
        <SafeAreaView style={{ backgroundColor: '#DD3A06', flex: 1 }}>
            <ScrollView>

                <View style={styles.containerView}>

                    <View style={styles.view1}>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' }} style={styles.image} />
                        </View>
                        <View style={styles.viewTexto}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Jandira Plaza Shopping</Text>
                            <Text style={{ fontSize: 13, color: "#858585", }}>Rua Maria Domitila, 72</Text>
                        </View>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.txtPadrao}>Tempo:
                            <Text style={styles.txtValor}> 2 horas e 30 minutos</Text>
                        </Text>
                        <Text style={styles.txtPadrao}>Valor:
                            <Text style={styles.txtValor}> R$: 47,00</Text>
                        </Text>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view4}>
                        <Text style={styles.txtDetalhes}>
                            Detalhes
                        </Text>
                    </View>

                </View>

                <View style={styles.containerView}>

                    <View style={styles.view1}>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' }} style={styles.image} />
                        </View>
                        <View style={styles.viewTexto}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Jandira Plaza Shopping</Text>
                            <Text style={{ fontSize: 13, color: "#858585", }}>Rua Maria Domitila, 72</Text>
                        </View>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.txtPadrao}>Tempo:
                            <Text style={styles.txtValor}> 2 horas e 30 minutos</Text>
                        </Text>
                        <Text style={styles.txtPadrao}>Valor:
                            <Text style={styles.txtValor}> R$: 47,00</Text>
                        </Text>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view4}>
                        <Text style={styles.txtDetalhes}>
                            Detalhes
                        </Text>
                    </View>

                </View>

                <View style={styles.containerView}>

                    <View style={styles.view1}>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' }} style={styles.image} />
                        </View>
                        <View style={styles.viewTexto}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Jandira Plaza Shopping</Text>
                            <Text style={{ fontSize: 13, color: "#858585", }}>Rua Maria Domitila, 72</Text>
                        </View>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.txtPadrao}>Tempo:
                            <Text style={styles.txtValor}> 2 horas e 30 minutos</Text>
                        </Text>
                        <Text style={styles.txtPadrao}>Valor:
                            <Text style={styles.txtValor}> R$: 47,00</Text>
                        </Text>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view4}>
                        <Text style={styles.txtDetalhes}>
                            Detalhes
                        </Text>
                    </View>

                </View>

                <View style={styles.containerView}>

                    <View style={styles.view1}>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' }} style={styles.image} />
                        </View>
                        <View style={styles.viewTexto}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Jandira Plaza Shopping</Text>
                            <Text style={{ fontSize: 13, color: "#858585", }}>Rua Maria Domitila, 72</Text>
                        </View>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.txtPadrao}>Tempo:
                            <Text style={styles.txtValor}> 2 horas e 30 minutos</Text>
                        </Text>
                        <Text style={styles.txtPadrao}>Valor:
                            <Text style={styles.txtValor}> R$: 47,00</Text>
                        </Text>
                    </View>

                    <View style={styles.view2}>
                        <View style={{ width: "95%", height: 1, backgroundColor: "#858585", alignSelf: "center" }} ></View>
                    </View>

                    <View style={styles.view4}>
                        <Text style={styles.txtDetalhes}>
                            Detalhes
                        </Text>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerView: {
        width: "95%",
        height: 170,
        backgroundColor: "#FFF",
        margin: 10,
        borderRadius: 10,
        elevation: 8
    },
    view1: {
        flex: 0.8,
        flexDirection: "row",
        //backgroundColor: "#000"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 200 / 2,
        margin: 5,

    },
    viewImage: {
        width: 70,

    },
    viewTexto: {

        marginLeft: 20,
        marginTop: 20,
        //justifyContent: "center",
        textAlign: "center",
    },
    view2: {


    },
    view3: {
        flex: 0.7,
        //backgroundColor: "blue"
    },
    view4: {
        flex: 0.4,
        //backgroundColor: "blue"
    },
    txtPadrao: {
        fontSize: 14,
        color: "#000",
        marginLeft: 5,
        marginTop: 5,
    },
    txtValor: {
        color: "#858585",
        marginLeft: 5,
        fontSize: 13,
    },
    txtDetalhes: {
        color: "#DD3A06",
        fontSize: 16,
        justifyContent: "center",
        textAlign: "center",
        margin: 5,

    }
});