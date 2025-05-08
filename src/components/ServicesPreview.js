import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const services = [
  {
    id: '1',
    title: 'Web Development',
    image: require('../../assets/images/hero-bg.webp'),
  },
  {
    id: '2',
    title: 'Mobile Apps',
    image: require('../../assets/images/hero-bg.webp'),
  },
  {
    id: '3',
    title: 'UI/UX Design',
    image: require('../../assets/images/hero-bg.webp'),
  },
  {
    id: '4',
    title: 'Digital Marketing',
    image: require('../../assets/images/hero-bg.webp'),
  },
];

const ServiceCard = ({title, image}) => (
  <View style={styles.card}>
    <Image source={image} style={styles.icon} resizeMode="contain" />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Learn More</Text>
    </TouchableOpacity>
  </View>
);

const ServicesPreview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Our Services</Text>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        renderItem={({item}) => (
          <ServiceCard title={item.title} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    // backgroundColor: '#F9FAFB',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 10,
    color: '#1F2937',
  },
  cardContainer: {
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    width: 180,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#06548B',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default ServicesPreview;
