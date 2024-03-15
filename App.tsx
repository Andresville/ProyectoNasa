import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Routes from './src/routes';



function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        //paddingHorizontal:15, 
        paddingTop: Platform.OS==="android"&& 70,
        }}>
      <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)", 
  },

});

export default App;
