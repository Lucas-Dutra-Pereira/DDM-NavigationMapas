import * as React from 'react';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      mapType='satellite'
      initialRegion={{
        latitude: 45.5088,
        longitude: -73.5616,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 45.50,
          longitude: -73.56}}
          title={"Cidade: Montreal, Canadá"}
          description={"População: 1,78 milhão de habitantes"}
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
