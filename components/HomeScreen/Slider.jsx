import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import sliderJson from "./../../data/slider-data.json";
import Loader from "./../../components/Loader/Loader";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setSliderData(sliderJson);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>#Special for you</Text>
      <FlatList
        data={sliderData}
        horizontal={true}
        style={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    padding: 20,
  },
  image: {
    width: 250,
    height: 160,
    borderRadius: 15,
    marginRight: 20,
    shadowColor: "#000",
  },
});
