import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-360';
import img from './static_assets/aquaponics.png'

export default class hello_vr extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Image
          style={styles.image}
          source={img}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 1000,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 600,
    paddingBottom: 70
  },
  image: {
    bottom: 0,
    width: 220,
    height: 275,
  }
});

AppRegistry.registerComponent('hello_vr', () => hello_vr);
