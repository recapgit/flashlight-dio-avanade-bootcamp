import React, { useState, useEffect } from "react"
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';


const App = () => {
  const [toggle, setToggle] = useState(false); //true false

  const handleToggleChange = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  }, []);

  return <View style={toggle ? style.containerLight : style.containerDark}>
    <TouchableOpacity onPress={handleToggleChange}>
      <Image
        style={toggle ? style.lightningOn : style.lightningOff}
        source={
          toggle
            ? require('./assets/icon/eco-light.png')
            : require('./assets/icon/eco-light-off.png')
        }
      />
      <Image
        style={style.logoDio}
        source={
          toggle
            ? require('./assets/icon/logo-dio.png')
            : require('./assets/icon/logo-dio-white.png')
        }
      />
    </TouchableOpacity>
  </View>;
};

export default App;

const style = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightningOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
});