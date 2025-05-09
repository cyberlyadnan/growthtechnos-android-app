// ServiceCategoryCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ServiceCategoryCard = ({ icon, title }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: '#fff',
    boxShadow:2,
    borderRadius: 40,
    padding: 14,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#284B71',
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});

export default ServiceCategoryCard;
