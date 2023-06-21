import React, {useContext,useState} from 'react';
import { View, Text } from 'react-native';
import { TextInput,Button  } from 'react-native-paper';
import { Formik } from 'formik';
import Style from '../../styles/Style';
import * as yup from 'yup';
import AppContext from '../../MiContext';
import {useNavigation} from '@react-navigation/native';
import RNDateTimePicker from '@react-native-community/datetimepicker';


const validationSchema = yup.object().shape({
  titulo: yup.string().required('El nombre es requerido'),
  descripcion: yup.string().required('La descripcion es requerido'),
  fecha: yup.string().required('La fecha es requerido'),

});

const FormRecor = (props) => {
  const {tipo} = props;
  const {AddElement} = useContext(AppContext);
  const [date, setDate] = useState(new Date());
  const navigation= useNavigation();

  const handleDateChange = (event, selectedDate) => { 
    setDate(selectedDate);
  };
  
  const handleSubmit = (values) => {
    values.estado="En progreso"
    values.fecha = date
    if(tipo==="recordatorio"){
      values.tipo = "recordatorio"
      AddElement(values)
      navigation.navigate("Mis recordatorios");    
    }
    if(tipo==="tarea"){
      values.tipo = "tarea"
      AddElement(values)
      navigation.navigate("Mis tareas");
    }
    if(tipo==="actividad"){
      values.tipo = "actividad"
      AddElement(values)
      navigation.navigate("Mis actividades");
    }

  };

  return (
    <View>
      <Formik
        initialValues={{ 
          id: 0,
          titulo : '',
          descripcion: '',
          fecha: Date,
          tipo: '',
          estado: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View> 
            <Text style={[Style.titulos,Style.centrar]}>Agregue un {tipo}</Text>  
            <TextInput
              mode="outlined"
              activeOutlineColor='tomato'
              underlineColor='gray'
              multiline={true} 
              style={[Style.Inputsform,Style.identar]}
              onChangeText={handleChange('titulo')}
              value={values.titulo}
              placeholder="Nombre"
            />
            {errors.titulo && <Text>{errors.titulo}</Text>}
            <TextInput
              mode="outlined"
              activeOutlineColor='tomato'
              underlineColor='gray'
              multiline={true} 
              style={[Style.Inputsform,Style.identar]}
              onChangeText={handleChange('descripcion')}
              value={values.descripcion}
              placeholder="Descripcion"
            />
             {errors.descripcion && <Text>{errors.descripcion}</Text>}

             <View style={Style.containerRow}>
                <Text style={[Style.identar,Style.texto]}>Fecha:</Text>
                <View style={Style.pickerContainer}>
                  <RNDateTimePicker   textColor="tomato" value={date} style={Style.dateTimePicker} timeZoneOffsetInSeconds={3600} onChange={handleDateChange}/>
                </View>
             </View>
            <Button style={[Style.botonEnviar,Style.identar]} mode="elevated" textColor='tomato' onPress={handleSubmit}>Guardar</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormRecor;
