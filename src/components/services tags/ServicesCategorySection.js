import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ServiceCategoryCard from './ServiceCategoryCard';
import { servicesCardsData } from '../../data/data';
import { TextColorPrimary } from '../../styles/theme';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const ServicesCategorySection = () => {
  const navigation = useNavigation(); // ✅ hook
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Our Services</Text>
        <Pressable style={styles.seeAll} onPress={() => navigation.navigate('Service')}>
          <Text style={styles.seeAllText}>See All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {servicesCardsData.map((item) => (
          <ServiceCategoryCard key={item.id} icon={item.icon} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: TextColorPrimary,
  },
  seeAll: {
    fontSize: 12,
    color: '#284B71',
    fontWeight: '500',
  },
  scrollViewContent: {
    flexDirection: 'row', // Make sure the items are rendered horizontally
    // padding: 10,
    gap: 4, // Reduced the gap between the cards
  },
});

export default ServicesCategorySection;
