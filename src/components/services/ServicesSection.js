import { View, Text, TouchableOpacity } from 'react-native';
import { ServiceCard } from './ServiceCard';
import { servicesData } from '../../data/data';

export const ServicesSection = () => {
  return (
    <View style={{ margin: 16,marginTop:30, backgroundColor: '#F5F5F5' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom:8 }}>Ongoing Projects</Text>
        <TouchableOpacity>
          <Text style={{ color: '#284B71' }}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {servicesData.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
