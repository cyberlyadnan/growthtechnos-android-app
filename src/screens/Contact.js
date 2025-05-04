import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Please fill all fields');
      return;
    }
    Alert.alert('Message Sent!', 'We will contact you shortly.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <FontAwesomeIcon icon={faPhone} size={18} color="#284B71" />
          <Text style={styles.infoText} onPress={() => Linking.openURL('tel:+919999999999')}>+91 99999 99999</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesomeIcon icon={faEnvelope} size={18} color="#284B71" />
          <Text style={styles.infoText} onPress={() => Linking.openURL('mailto:info@webagency.com')}>info@webagency.com</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={18} color="#284B71" />
          <Text style={styles.infoText}>Saharanpur, Uttar Pradesh, India</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          placeholder="Enter name"
          value={form.name}
          onChangeText={(val) => handleChange('name', val)}
          style={styles.input}
        />
        <Text style={styles.label}>Your Email</Text>
        <TextInput
          placeholder="Enter email"
          value={form.email}
          onChangeText={(val) => handleChange('email', val)}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Your Message</Text>
        <TextInput
          placeholder="Type your message"
          value={form.message}
          onChangeText={(val) => handleChange('message', val)}
          style={[styles.input, { height: 100 }]}
          multiline
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <FontAwesomeIcon icon={faPaperPlane} color="#fff" size={16} />
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#284B71',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 24,
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 12,
    fontSize: 15,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#284B71',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
