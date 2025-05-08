import React, {useEffect, useState} from 'react';
import {
  View,
  BackHandler,
  StyleSheet,
} from 'react-native';

import HeroSection from '../components/HeroSection';
import { ScrollView } from 'react-native-gesture-handler';
import ServicesPreview from '../components/ServicesPreview';
import { SpecialOffersCarousel } from '../components/SpecialOffersCarousel';
import { ServicesSection } from '../components/services/ServicesSection';

const Dashboard = ({navigation}) => {
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  const handleBackButtonClick = () => {
    setSearching(false);
    setSearchText('');
    setSearched(false);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeroSection />
      <SpecialOffersCarousel/>
      <ServicesSection />
      <ServicesPreview />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // or any suitable background
    flex: 1,
  },
});

export default Dashboard;
