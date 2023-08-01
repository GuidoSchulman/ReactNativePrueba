import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,ImageBackground } from 'react-native';
import burga from './assets/burga.png';
import fondo from './assets/fondo.png'
export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={fondo} resizeMode='cover' style={styles.background}>
        <Text style={styles.letra}>MC Donalds</Text>
        <Image source={burga} style={styles.hamburguesa} />
        <Button color='black' title='Comprar'></Button>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    justifyContent: 'center',
  },
  boton:{
    color:'yellow',
    title:'Comprar',
  },
  letra:{
    color:'yellow',
    fontSize: 50,
    backgroundColor: '#FF000090',
    width: "80%",
    textAlign:'center',
    margin: 'auto'
    
  },
  hamburguesa:{
    width: 300,
    height: 300,
    alignSelf:'center'
  },
  background:{
    flex:1,
    justifyContent:'center',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  }
});
