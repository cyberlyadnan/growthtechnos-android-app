import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import { Navigator } from './src/navigation/navigator';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      {/* LinearGradient for the StatusBar */}
      <LinearGradient colors={['#06548B', '#0B2E56']} style={styles.statusBarGradient}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      </LinearGradient>

      {/* Main content area with the gradient applied */}
      <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.mainContent}>
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  statusBarGradient: {
    height: StatusBar.currentHeight, // Adjusts for the height of the status bar
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FFF6F0',
  },
});
