import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const projects = [
  {
    id: '1',
    title: 'The Heritage Global',
    image: require('../../assets/icons/add_your_info.png'),
    description: 'Multi-operational manufacturing, export, and retail website built with Next.js.',
    tech: ['Next.js', 'TailwindCSS', 'SEO', 'Firebase'],
  },
  {
    id: '2',
    title: 'The Seerah Library',
    image: require('../../assets/icons/add_your_info.png'),
    description: 'Islamic digital library with AI-powered chatbot and Firestore integration.',
    tech: ['Next.js', 'Firebase', 'OpenAI API'],
  },
  {
    id: '3',
    title: 'Travel Booking App',
    image: require('../../assets/icons/add_your_info.png'),
    description: 'React Native app with Razorpay payments and WordPress backend.',
    tech: ['React Native', 'WordPress API', 'Razorpay'],
  },
];

const Portfolio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Work & Projects</Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.card}>
          <Image source={project.image} style={styles.image} />
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.techTitle}>Technologies:</Text>
          <View style={styles.techStack}>
            {project.tech.map((item, index) => (
              <View key={index} style={styles.techBadge}>
                <Text style={styles.techText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#284B71',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f5f8fb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#284B71',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 10,
  },
  techTitle: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
    marginBottom: 6,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: '#284B71',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
  },
  techText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});
