import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const testimonials = [
  {
    id: 1,
    name: 'Sana Malik',
    role: 'CEO, Digitronix',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'Their work was outstanding! The attention to detail and professionalism exceeded our expectations.',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Founder, TechHut',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'Amazing experience. They delivered the project ahead of schedule with flawless execution.',
  },
  {
    id: 3,
    name: 'Fatima Khan',
    role: 'Marketing Head, StyleHive',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    feedback:
      'The team understood our needs and brought our vision to life. Highly recommend working with them!',
  },
];

const TestimonialSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>What Our Clients Say</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {testimonials.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />

            <Text style={styles.feedback}>"{item.feedback}"</Text>

            <View style={styles.user}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TestimonialSection;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  scrollContainer: {
    paddingRight: 20,
  },
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginRight: 12,
    marginLeft:12,
    marginBottom:12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  feedback: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  user: {
    marginTop: 4,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111',
  },
  role: {
    fontSize: 13,
    color: '#666',
  },
});
