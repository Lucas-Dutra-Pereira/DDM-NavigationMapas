import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Maps from './Mapa'
import Maps1 from './Mapa1'
import Maps2 from './Mapa2'
import Maps3 from './Mapa3'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Mapa 0')}
        title="Ir para Mapa 0"
      />
      <Button
        onPress={() => navigation.navigate('Mapa 1')}
        title="Ir para Mapa 1"
      />
      <Button
        onPress={() => navigation.navigate('Mapa 2')}
        title="Ir para Mapa 2"
      />
      <Button
        onPress={() => navigation.navigate('Mapa 3')}
        title="Ir para Mapa 3"
      />
    </View>
  );
}

function TelaMapaZero({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ir para a home" />
      <Maps></Maps>
    </View>
  );
}

function TelaMapaOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ir para a home" />
      <Maps1></Maps1>
    </View>
  );
}

function TelaMapaToo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ir para a home" />
      <Maps2></Maps2>
    </View>
  );
}

function TelaMapaThree({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ir para a home" />
      <Maps3></Maps3>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Mapa 0" component={TelaMapaZero} />
        <Drawer.Screen name="Mapa 1" component={TelaMapaOne} />
        <Drawer.Screen name="Mapa 2" component={TelaMapaToo} />
        <Drawer.Screen name="Mapa 3" component={TelaMapaThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
