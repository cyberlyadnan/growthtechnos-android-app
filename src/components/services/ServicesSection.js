import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ServiceCard } from './ServiceCard';
import { servicesData } from '../../data/data';

export const ServicesSection = () => {
  return (
    <View style={{ margin: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ongoing Projects</Text>
        <TouchableOpacity>
          <Text style={{ color: '#284B71' }}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ServiceCard item={item} />}
      />
    </View>
  );
};


