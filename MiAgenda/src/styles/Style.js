import react from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    containerHome:{
      flexDirection: 'column',
    },
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerRow:{
      marginVertical: 10,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    centrar: {
      textAlign: 'center',
    },
    mvertical:{
      marginVertical:10
    },
    botonEnviar:{
      marginVertical:10,
      with: 30
    },
    identar:{
      marginHorizontal: 5,
    },
    titulos:{
      fontSize: 20, 
      fontWeight: 'bold',
      marginVertical:5,
      color:'tomato'
    },
    titulosCard:{
      fontSize: 20, 
      fontWeight: 'bold',
    },
    subtitulosCardC:{ 
      color: "gray"
    },
    texto:{
      fontSize:17,
      marginVertical:5
    },
    esquinaIzq: {
        position: 'relative',
    },
    Inputsform: {
        marginHorizontal: 5,
        backgroundColor: 'white', // Color de fondo
         // Radio de borde
    },

    pickerContainer: {
      position: 'absolute',
      left: 0,
    },
    dateTimePicker: {
      width: 200, // Ajusta el ancho del selector según tus necesidades
      alignSelf: 'flex-start',
    },
    agregarButton:{
      width: 140 , 
      height: 40,
     // backgroundColor: "tomato",
      color:"tomato"
    }
    

})

export default Style
