import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLink, faHeart as faHeartFilled, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {ProductStore} from '../store/product';
import {observer} from 'mobx-react';
import styles from '../styles';

const {width: screenWidth} = Dimensions.get('window');

export const Product = observer(() => {
  const {
    state: {product, wishlist},
    addToWishlist,
  } = ProductStore;

  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(wishlist.find(x => x.id === product.id));
  }, [wishlist]);

  const renderItem = ({item}) => (
    <Image
      style={{height: 400, borderBottomLeftRadius: 40}}
      source={{uri: item}}
      resizeMode="cover"
    />
  );

  const PaginationView = () => (
    <Pagination
      dotsLength={product.imgs.length}
      activeDotIndex={activeSlide}
      containerStyle={{marginTop: -50}}
      dotStyle={{
        width: 30,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
      }}
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <View style={{paddingBottom:50}}>
      <ScrollView>
        {/* Image Carousel */}
        <Carousel
          data={product.imgs}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={index => setActiveSlide(index)}
          layout={'default'}
        />
        <PaginationView />

        {/* Like Button */}
        <Pressable
  onPress={() => Linking.openURL('https://your-portfolio-website.com')}
  style={{
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
  <FontAwesomeIcon 
    icon={faExternalLinkAlt} // Using external link icon
    color="#06548B" // Changed to a more neutral color
    size={20} // Adjust size as needed
  />
</Pressable>

        {/* Content Section */}
        <View style={{padding: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#111'}}>
            {product.title}
          </Text>
          <Text style={{color: '#888', marginBottom: 6}}>
            {product.category} | Client: {product.client}
          </Text>

          {/* Project Date */}
          <Text style={{color: '#555', marginBottom: 10}}>
            📅 Project Date: {product.projectDate}
          </Text>

          {/* Technologies */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16}}>
            {product.technologies.map(tech => (
              <View
                key={tech}
                style={{
                  backgroundColor: '#f3f4f6',
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 20,
                  marginRight: 8,
                  marginBottom: 8,
                }}>
                <Text style={{fontSize: 12, color: '#333'}}>{tech}</Text>
              </View>
            ))}
          </View>

          {/* Description */}
          <Text style={{color: '#444', fontSize: 14, lineHeight: 22, marginBottom: 20}}>
            {product.description}
          </Text>

          {/* Features */}
          <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 8}}>Key Features:</Text>
          {product.features.map((feature, index) => (
            <Text key={index} style={{marginLeft: 10, marginBottom: 4}}>• {feature}</Text>
          ))}

          {/* Testimonial */}
          <View
            style={{
              backgroundColor: '#fef3c7',
              padding: 16,
              borderRadius: 12,
              marginTop: 20,
              marginBottom: 40,
            }}>
            <Text style={{fontStyle: 'italic', marginBottom: 6}}>
              “{product.testimonial}”
            </Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
              — {product.testimonialAuthor}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* CTA Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#111827',
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
        onPress={() => Linking.openURL(product.projectUrl)}>
        <FontAwesomeIcon icon={faLink} size={16} color="#fff" style={{marginRight: 8}} />
        <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>Visit Live Project</Text>
      </TouchableOpacity>
    </View>
  );
});
