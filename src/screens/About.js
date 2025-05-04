import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Who We Are</Text>
      <Text style={styles.paragraph}>
        At <Text style={styles.highlight}>Web Agency</Text>, we are more than just a team of developers — we are your digital partners. Founded with the mission to create beautiful, functional, and high-performing websites and apps, our agency is rooted in craftsmanship, integrity, and innovation.
      </Text>

      <Image source={require('../../assets/icons/add_your_info.png')} style={styles.image} />

      <Text style={styles.subheading}>Our Mission</Text>
      <Text style={styles.paragraph}>
        We aim to empower startups, businesses, and enterprises with modern digital solutions that solve real-world problems. From small landing pages to full-scale SaaS platforms, our work is guided by usability, scalability, and design excellence.
      </Text>

      <Text style={styles.subheading}>What We Do</Text>
      <Text style={styles.paragraph}>
        - 💡 Custom Website Development{'\n'}
        - 📱 Mobile App Development (React Native){'\n'}
        - 🧠 UI/UX Design & Brand Strategy{'\n'}
        - 🚀 SEO, Performance Optimization & Web Hosting{'\n'}
        - 🔒 Secure Payments, Authentication & Admin Panels
      </Text>

      <Text style={styles.subheading}>Our Story</Text>
      <Text style={styles.paragraph}>
        Starting from a small room in Saharanpur, <Text style={styles.highlight}>Web Agency</Text> was born out of passion. We began with freelance projects, built a loyal client base, and grew into a full-fledged development agency. Over the years, we’ve served clients across industries — from education and travel to furniture and finance.
      </Text>

      <Text style={styles.subheading}>Meet the Founder</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.highlight}>Adnan Ahmad</Text>, a Frontend Engineer by profession, leads the agency with a vision to make world-class web design accessible to everyone. With experience in Next.js, React Native, and scalable architecture, he ensures every project reflects the agency’s commitment to excellence.
      </Text>

      <Image source={require('../../assets/icons/add_your_info.png')} style={styles.image} />

      <Text style={styles.subheading}>Why Clients Trust Us</Text>
      <Text style={styles.paragraph}>
        ✅ Clean & Scalable Code{'\n'}
        ✅ Timely Delivery & Clear Communication{'\n'}
        ✅ Responsive Support & Maintenance{'\n'}
        ✅ SEO & Speed Optimized Deployments
      </Text>

      <Text style={styles.subheading}>Our Vision</Text>
      <Text style={styles.paragraph}>
        To be recognized globally for building human-centric digital products that inspire, perform, and deliver results. We want to contribute to a future where every idea, no matter how small, gets the digital foundation it deserves.
      </Text>

      <Text style={styles.footer}>Thank you for trusting Web Agency — let’s build something amazing together.</Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: '#284B71',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#284B71',
    marginTop: 28,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333',
  },
  highlight: {
    fontWeight: '700',
    color: '#284B71',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginVertical: 20,
  },
  footer: {
    fontSize: 16,
    color: '#284B71',
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 80,
    textAlign: 'center',
  },
});
