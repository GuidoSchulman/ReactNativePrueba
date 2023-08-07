import React from "react";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";

import burga from "./assets/burga.png";
import fondo from "./assets/fondo.png";


export default function App() {
  const [hamburguesa, handleHamburguesaFav] = React.useState("");


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={fondo}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.letra}>MC Donalds</Text>
        <Image source={burga} style={styles.hamburguesa} />
        <Pressable style={styles.button} onPress={()=>Alert.alert('Compra realizada')}>
        <Text style={styles.text}>Comprar</Text>
        </Pressable>
      </ImageBackground>
      <StatusBar style="auto" />
      <SafeAreaView style={[styles.container, styles.container2]}>
      <SafeAreaView  style={{backgroundColor: 'lightblue', flex: 5}}>
      <Text>Ingrese condimentos</Text>
        <TextInput
          style={styles.input}
          placeholder="ingrese..."
          onChangeText={handleHamburguesaFav}
          value={hamburguesa}
        />
        <Text > Tu hamburguesa tiene: {hamburguesa}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  container2: {
    margin: 5,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  letra: {
    color: "yellow",
    fontSize: 50,
    backgroundColor: "#FF000090",
    width: "80%",
    textAlign: "center",
    margin: "auto",
  },
  input: { height: 40, borderWidth: 2, padding: 1 },
  hamburguesa: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
