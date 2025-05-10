import React, { useRef } from 'react';
import { Image, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { PrimaryBgColor } from '../styles/theme';

const { width } = Dimensions.get('window');

const OrangeButton = ({ title, onPress,top, bgColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: bgColor,
      paddingVertical: 16,
      paddingHorizontal: 52,
      borderRadius: 16,
      top: top,
      position:'absolute',
      alignSelf: 'center',
    }}
  >
    <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
  </TouchableOpacity>
);

const Tutorial = ({ navigation }) => {
  const swiperRef = useRef(null);

  return (
    <Onboarding
      ref={swiperRef}
      showSkip={false}
      showNext={false}
      showDone={false}
      bottomBarHeight={0} // removes the extra white padding at bottom
      onSkip={() => navigation.navigate('Main')}
      onDone={() => navigation.navigate('Main')}
      dotStyle={{
        backgroundColor: "#fff",
        width: 8,
        height: 8,
        borderRadius: 4,
      }}
      activeDotStyle={{
        backgroundColor: '#fff',
        width: 20,
        height: 8,
        borderRadius: 5,
      }}
      pages={[
        {
          backgroundColor: PrimaryBgColor,
          image: (
            <View style={{ alignItems: 'center', marginTop: 0 }}>
              {/* <Image
                source={require('../../assets/icons/software.png')}
                style={{ width: 80, height: 80, marginBottom: 20 }}
              /> */}
              <Text style={{fontFamily: 'Poppins-Bold', color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
              Welcome to Growth Technos
              </Text>
              <Text style={{ color: 'white',lineHeight: 24,width:380 ,marginTop:12, fontSize: 16, fontWeight: 'semibold', textAlign: 'center' }}>
              We’re not just developers—we’re your digital growth partners. Crafting beautiful, high-performance websites and apps tailored to your brand’s success.
              </Text>
              <OrangeButton bgColor={"#fff"} textColor={PrimaryBgColor} top={220} title="Continue" onPress={() => swiperRef.current.goToPage(1, true)} />
            </View>
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#ffffff',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/software.png')}
                style={{ width: width * 0.75, height: width * 0.75, resizeMode: 'contain' }}
              />
              <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
              End-to-End Web & App Solutions
              </Text>
              <Text style={{
                textAlign: 'center',
                color: '#555',
                paddingHorizontal: 30,
                marginTop: 10,
                lineHeight:20,
              }}>
                From modern websites to mobile apps, e-commerce to SEO—our expert team builds everything your business needs to thrive online, using the latest technologies and industry standards.
              </Text>
              <OrangeButton bgColor={PrimaryBgColor} textColor={"#fff"} top={480} title="Continue" onPress={() => swiperRef.current.goToPage(2, true)} />
            </View>
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#ffffff',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/dev.png')} // replace with screenshot
                style={{ width: width * 0.9, height: width * 1.1, resizeMode: 'contain' }}
              />
              <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 1 }}>
              Let’s Build Together
              </Text>
              <Text style={{
                textAlign: 'center',
                color: '#555',
                paddingHorizontal: 30,
                marginTop: 10,
                lineHeight:16
              }}>
                Join hundreds of businesses who trust us for their digital transformation. Get started today and turn your vision into a scalable, high-performing reality.
              </Text>
              <OrangeButton bgColor={PrimaryBgColor} textColor={"#fff"} top={560} title="Get Started" onPress={() => navigation.navigate('Main')} />
            </View>
          ),
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

export default Tutorial;
