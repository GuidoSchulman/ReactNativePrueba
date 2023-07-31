import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import burga from './assets/burga.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.letra}>MC Donalds</Text>
      <Image source={burga} style={styles.hamburguesa} />
      <Button color='black' title='Comprar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    color:'yellow',
    title:'Comprar',
  },
  letra:{
    color:'yellow',
    fontSize: 50,
  },
  hamburguesa:{
    width: 300,
    height: 300,
  }
});
