import * as React from 'react';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      mapType='satellite'
      initialRegion={{
        latitude: 55.7508,
        longitude: 37.6172,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 55.75,
          longitude: 37.61}}
          title={"Cidade: Moscou, Rússia"}
          description={"População: 11,92 milhões de habitantes"}
          />
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
