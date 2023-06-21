
import React, {useContext,useState,} from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card,IconButton, MD3Colors,Dialog,Button} from 'react-native-paper';
import AppContext from '../../MiContext';
import Style from '../../styles/Style' 

const LeftContent = props => <Avatar.Icon  style={{backgroundColor: "tomato"}}  {...props} icon="bell"  />

export default function Cards(props) {
    const {tipo} = props;
    const navigation= useNavigation();
    const {data,removeElement,EditElement} = useContext(AppContext);
    const {ListaDatos,setListaDatos}= useState([]);
    const [elemento,setElement] = useState();
    const [elementEdit,setElementEdit] = useState();
    const [visible, setVisible] = useState(false);

    
    const hideDialog = () => setVisible(false);
   

    const showDialog= (item) => {
      setElement(item);
      setVisible(true);
      
    };

    const handleConfirm = () => {
      // Acción a realizar cuando se confirme
      removeElement(elemento);
      hideDialog();
    };
  
    const handleCancel = () => {
      // Acción a realizar cuando se cancele
      hideDialog();
    };
    const marcarCompletado=(item)=>{
      setElementEdit(item)
      if(item.estado === "Completado"){
        item.estado = "En progreso"
      }else{
        item.estado = "Completado"
      }
      EditElement(elementEdit,item)
    }


    const irA=()=>{
      if(tipo==="recordatorio"){
        navigation.navigate("StackHome")
      }
      if(tipo==="tarea"){
        navigation.navigate("StackTarea")
      }
      if(tipo==="actividad"){
        navigation.navigate("StackActividades")
      }
    }

  return (
    <View style={Style.containerHome}>
      <View style={Style.esquinaIzq} >
        <Button  icon="plus" mode="contained-tonal"  textColor='tomato' style={[Style.agregarButton,Style.identar,Style.mvertical]}   onPress={irA}>Agregar</Button>
      </View>
    <ScrollView>
    <View>     
     {data && data.length > 0 && (
       <>
          {data.map((item, index) => ( 
            item.tipo === tipo && (
                <View key={index}>
                <Card style={[Style.identar,Style.mvertical]}  theme={{ colors: { primary: 'green' } }}>
                    <Card.Title title={item.titulo} titleStyle={Style.titulosCard} subtitleStyle={Style.subtitulosCardC} subtitle={item.estado} left={LeftContent} />
                    <Card.Content>
                    <Text variant="titleLarge">{item.descripcion}</Text>
                    <Text variant="titleLarge">Tipo: {item.tipo}</Text>
                    {item.tipo !== "tarea" &&(
                      <Text variant="titleLarge">Fecha: {`${item.fecha.getDate()}/${item.fecha.getMonth() + 1}/${item.fecha.getFullYear()}`}</Text>
                    )}
                    </Card.Content>
                    <Card.Actions>
                    <IconButton icon="delete" iconColor={MD3Colors.error50} size={20} onPress={showDialog.bind(null,item)}/>
                    {item.estado === "Completado" ? (<IconButton icon="check"  style={{backgroundColor: "green"}}  iconColor="white" size={20} onPress={()=>marcarCompletado(item)}/>
                    ):(
                        <IconButton icon="check"  iconColor="green" size={20} onPress={()=>marcarCompletado(item)} />
                    )}  
                    </Card.Actions>
                </Card>
                </View>
            )
          ))}
        </>
      )}
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Desea eliminar este recordatorio?</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={handleCancel}>Cancelar</Button>
          <Button onPress={handleConfirm}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
    </ScrollView>
  </View>
  );
}


