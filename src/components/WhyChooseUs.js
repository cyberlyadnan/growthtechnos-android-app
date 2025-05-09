import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: 1,
    icon: 'people-outline',
    title: 'Expert Team',
    color: '#facc15',
  },
  {
    id: 2,
    icon: 'rocket-outline',
    title: 'Fast Delivery',
    color: '#facc15',
  },
  {
    id: 3,
    icon: 'bulb-outline',
    title: 'Creative Solutions',
    color: '#facc15',
  },
  {
    id: 4,
    icon: 'shield-checkmark-outline',
    title: 'Reliable Support',
    color: '#facc15',
  },
];

const WhyChooseUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Choose Us</Text>
      <Text style={styles.subtext}>
        We’re committed to delivering great service with professionalism, creativity, and care.
      </Text>

      <View style={styles.grid}>
        {data.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <View style={[styles.iconWrapper, { backgroundColor: item.color + '33' }]}>
              <Icon name={item.icon} size={24} color={item.color} />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WhyChooseUs;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#0B2E56',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
});
