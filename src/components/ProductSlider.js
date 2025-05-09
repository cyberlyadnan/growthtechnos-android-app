import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles';
import { ProductStore } from '../store/product';

export const ProductSlider = ({ navigation }) => {
  const { setProduct, getRandomProducts } = ProductStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    const items = getRandomProducts();
    const itemss = setProduct()
    console.log('Fetched products:', itemss); // Debug
    setData(items);
  }, []);

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.sliderHeading}>Featured Projects</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productSlider}>
        {data.length === 0 ? (
          <Text style={{ color: 'gray', padding: 10 }}>No products found.</Text>
        ) : (
          data.map((item, index) => (
            <Pressable
              key={index}
              style={styles.sliderItem}
              onPress={() => {
                setProduct(item);
                navigation.navigate('Product');
              }}
            >
              <Image source={{ uri: item.imgs?.[0] }} style={styles.sliderImg} />
              <View style={styles.sliderTextWrapper}>
                <Text style={styles.sliderTitle}>{item.title}</Text>
                <Text style={styles.sliderCategory}>{item.category}</Text>
              </View>
            </Pressable>
          ))
        )}
      </ScrollView>
    </View>
  );
};
