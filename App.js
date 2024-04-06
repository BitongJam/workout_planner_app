import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './app/screen/Main';
import BottomNav from './app/components/BottomNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <Main/>
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
