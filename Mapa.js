import * as React from 'react';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      mapType='satellite'
      initialRegion={{
        latitude: -31.33111,
        longitude: - 54.10111,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapView.Marker
        coordinate={{
          latitude: -31.33,
          longitude: -54.07}}
          title={"Cidade: Bagé, Brasil"}
          description={"População: 121.335 habitantes"}
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
