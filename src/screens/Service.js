import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ServiceScreen = () => {
  const injectedJS = `
  function hideElements() {
    // Hide elements by ID
    var header = document.getElementById('masthead');
    if (header) header.style.display = 'none';

    const element = document.querySelector('[data-id="989c1a5"]');
    if (element) {
        element.style.display = 'none';
    }

    var footer = document.getElementById('hide_nav_bar_android_app');
    if (footer) {
      footer.style.display = 'none';
      console.log('Footer hidden successfully');
    } else {
      console.log('Footer element not found');
    }

    // Hide elements by class
    var navElements = document.getElementsByClassName('ctc_s_3 ctc_nb');
    if (navElements.length > 0) {
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].style.display = 'none';
      }
    }

    var banner = document.querySelector('.page-banner');
    if (banner) banner.style.display = 'none';

    // Optional: remove padding/margins
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }

  // Try immediately
  hideElements();

  // Also try on load in case elements aren't ready yet
  document.addEventListener('DOMContentLoaded', hideElements);
  window.addEventListener('load', hideElements);

  // For single page apps that might load content later
  setInterval(hideElements, 1000);

  true;
`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://growthtechnos.com/services/' }}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        injectedJavaScript={injectedJS}
      />
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    // borderRadius: 16,
    elevation: 6,
    paddingBottom:60
  },
  webview: {
    flex: 1,
    borderRadius: 16,
  },
});
