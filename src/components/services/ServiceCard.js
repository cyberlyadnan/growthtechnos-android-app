import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ServiceCard = ({ item }) => {
  return (
    <LinearGradient
      colors={item.isHighlighted ? ['#284B71', '#0B2E56'] : ['#ffffff', '#f2f2f2']}
      style={[styles.card, item.isHighlighted && styles.highlightedCard]}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={item.icon}
          style={{ width: 28, height: 28, tintColor: item.isHighlighted ? '#fff' : '#284B71' }}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.date, item.isHighlighted && styles.lightText]}>{item.date}</Text>
      <Text style={[styles.title, item.isHighlighted && styles.lightText]}>{item.title}</Text>
      <Text style={[styles.subtitle, item.isHighlighted && styles.lightText]}>{item.subtitle}</Text>
      <Text style={[styles.progressText, item.isHighlighted && styles.lightText]}>Progress</Text>
    </LinearGradient>
  );
};




const styles = StyleSheet.create({
    card: {
      borderRadius: 16,
      padding: 16,
      width: '48%',
      marginBottom: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
    },
    highlightedCard: {
      elevation: 6,
    },
    iconWrapper: {
      marginBottom: 10,
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: 8,
      borderRadius: 12,
      alignSelf: 'flex-start',
    },
    date: {
      fontSize: 12,
      color: '#999',
      marginBottom: 4,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#222',
    },
    subtitle: {
      fontSize: 12,
      color: '#666',
      marginBottom: 10,
    },
    progressText: {
      fontSize: 12,
      color: '#666',
    },
    lightText: {
      color: '#fff',
    },
  });
  