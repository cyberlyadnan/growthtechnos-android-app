import React from 'react';
import { Image, Dimensions, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const { width } = Dimensions.get('window');

const Tutorial = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('login')}
      onDone={() => navigation.navigate('login')}
      containerStyles={{
        paddingHorizontal: 24,
        backgroundColor: '#F8FAFC',
      }}
      titleStyles={{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 26,
        color: '#284B71',
        marginBottom: 12,
        textAlign: 'center',
      }}
      subTitleStyles={{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        lineHeight: 24,
      }}
      bottomBarColor="#fff"
      imageContainerStyles={{
        paddingBottom: 20,
        marginTop: 20,
      }}
      pageIndexCallback={(index) => console.log('Page:', index)}
      controlStatusBar={false}
      dotStyle={{
        backgroundColor: '#D0D7DE',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
      }}
      activeDotStyle={{
        backgroundColor: '#284B71',
        width: 20,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 3,
      }}
      pages={[
        {
          backgroundColor: '#F8FAFC',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/add_your_info.png')}
                style={{
                  width: width * 0.65,
                  height: width * 0.65,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Create an Account',
          subtitle: 'Sign up and tailor your web experience in just a few taps.',
        },
        {
          backgroundColor: '#F8FAFC',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/add_to_cart.png')}
                style={{
                  width: width * 0.65,
                  height: width * 0.65,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Add Services',
          subtitle: 'Explore our solutions and bookmark what fits your vision.',
        },
        {
          backgroundColor: '#F8FAFC',
          image: (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/icons/payment.png')}
                style={{
                  width: width * 0.65,
                  height: width * 0.65,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          title: 'Let’s Build Together',
          subtitle: 'Confirm your project and collaborate with our expert team.',
        },
      ]}
    />
  );
};

export default Tutorial;
