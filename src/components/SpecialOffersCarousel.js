import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel-v4';

const { width } = Dimensions.get('window');

const offerData = [
  {
    id: '1',
    title: 'Get Special Offer',
    subtitle: 'Offers on Accessories',
    discount: 'Up to 20%',
    image: 'https://testting.growthtechnos.com/wp-content/uploads/2025/04/delightfull_corbett__nainital_escape_1726330567657243965-600x450.webp',
  },
  {
    id: '2',
    title: 'Buy 1 Get 1 Free',
    subtitle: 'Exclusive Treats',
    discount: 'Today Only!',
    image: 'https://testting.growthtechnos.com/wp-content/uploads/2025/04/delightfull_corbett__nainital_escape_1726330567657243965-600x450.webp',
  },
  {
    id: '2',
    title: 'Buy 1 Get 1 Free',
    subtitle: 'Exclusive Treats',
    discount: 'Today Only!',
    image: 'https://testting.growthtechnos.com/wp-content/uploads/2025/04/delightfull_corbett__nainital_escape_1726330567657243965-600x450.webp',
  },
  {
    id: '2',
    title: 'Buy 1 Get 1 Free',
    subtitle: 'Exclusive Treats',
    discount: 'Today Only!',
    image: 'https://testting.growthtechnos.com/wp-content/uploads/2025/04/delightfull_corbett__nainital_escape_1726330567657243965-600x450.webp',
  },
];

export const SpecialOffersCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.heading}>Special Offers</Text>
        {/* <Text style={styles.seeAll}>See All</Text> */}
      </View>

      <Carousel
        ref={carouselRef}
        data={offerData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.9}
        loop={true}
        inactiveSlideOpacity={0.8}
        inactiveSlideScale={0.95}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={offerData.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        containerStyle={{ marginTop: -12 }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 0,
    paddingHorizontal: 8,
    // paddingVertical:16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingLeft:8,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#00A884',
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF6F0',
    borderRadius: 16,
    padding: 16,
    marginTop:6,
    marginBottom:6,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 4,
    color: '#222',
  },
  discount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  button: {
    backgroundColor: '#06548B',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderRadius: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#06548B',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
