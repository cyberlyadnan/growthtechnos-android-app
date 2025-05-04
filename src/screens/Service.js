import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const services = [
  {
    title: 'Web Design',
    description: 'Modern, clean, and responsive designs tailored to your brand.',
    image: 'https://img.icons8.com/external-flat-juicy-fish/344/external-web-design-web-design-and-development-flat-flat-juicy-fish.png'
  },
  {
    title: 'UI/UX Design',
    description: 'User-first approach to create intuitive and delightful experiences.',
    image: 'https://img.icons8.com/color/344/design--v1.png'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Build your online store and reach more customers globally.',
    image: 'https://img.icons8.com/color/344/shopping-cart--v1.png'
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines with effective SEO.',
    image: 'https://img.icons8.com/color/344/seo.png'
  },
  {
    title: 'Web Development',
    description: 'Full-stack development services using the latest technologies.',
    image: 'https://img.icons8.com/color/344/source-code.png'
  },
];

const ServiceScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Our Services</Text>
      {services.map((service, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: service.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#284B71',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#284B71',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default ServiceScreen;
