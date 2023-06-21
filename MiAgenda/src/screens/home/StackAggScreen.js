
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRecor from './FormularioAgregar.jsx';

export default function StackAggScreen({route}) {
  const { parametro } = route.params;
  const param = parametro

  return (
    <View> 
        <FormRecor tipo={param}/> 
    </View>
    
  );
}


