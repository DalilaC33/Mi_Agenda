
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { MiContext } from './src/MiContext';

export default function App() {

  
  return (
   <MiContext>
     <Navigation/>
   </MiContext> 
  );
}

