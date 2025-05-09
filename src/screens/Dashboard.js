import React, { useEffect, useState } from 'react';
import { View, BackHandler, StyleSheet, ScrollView } from 'react-native';

import HeroSection from '../components/HeroSection';
import ServicesPreview from '../components/ServicesPreview';
import { SpecialOffersCarousel } from '../components/SpecialOffersCarousel';
import { ServicesSection } from '../components/services/ServicesSection';
import ServicesCategorySection from '../components/services tags/ServicesCategorySection';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import { ProductCarousel } from '../components/ProductCarousel';
import { ProductSlider } from '../components/ProductSlider';
import { Product } from './Product';
import TestimonialSection from '../components/TestimonialSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Dashboard = ({ navigation }) => {
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
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      <View style={styles.topSection}>
        <SpecialOffersCarousel />
      </View>

      {/* ✅ Wrap in colored container */}
      <View style={styles.coloredSection}>
        <ServicesCategorySection />
        <ServicesSection />
      </View>

      {/* <View style={styles.section}>
        <HeroSection />
      </View> */}


      <View style={styles.courosel}>
      <ProductCarousel navigation={navigation}/>
      </View>

      <WhyChooseUs />
      {/* <ProductSlider /> */}
      <TestimonialSection />
      {/* <Product/> */}
      

      {/* <View style={styles.section}>
        <ServicesPreview />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection:{
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:"#0B2E56"
  },
  courosel:{
    paddingTop:20,
    paddingBottom:20
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom:60,
  },
  scrollContent: {
    paddingBottom: 70,
  },
  section: {
    marginBottom: -20,
  },
  coloredSection: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderTopRightRadius:26,
    borderTopLeftRadius:26
  },
});

export default Dashboard;
