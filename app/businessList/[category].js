import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import categoryDetailsJson from "./../../data/category-details.json";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });

    // Fetch data from API
    setProductList(
      categoryDetailsJson.filter((item) => item.category_name == category)
    );
  }, []);

  return (
    <View style={styles.container}>
      {productList.length ? (
        <FlatList
          data={productList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.card}>
                {item.image ? (
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                ) : (
                  <FontAwesome
                    name="image"
                    style={styles.image}
                    size={92}
                    color={Colors.PRIMARY}
                  />
                )}
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>⭐ {item.rating}</Text>
                    <Text
                      style={item.inStock ? styles.stockIn : styles.stockOut}
                    >
                      {item.inStock ? "Stock In" : "Stock Out"}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.no_data}>No Products found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  name: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  description: {
    fontFamily: "outfit-medium",
    color: "gray",
  },
  price: {
    fontFamily: "outfit-bold",
    marginVertical: 4,
  },
  stockIn: {
    color: "#fff",
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
  },
  stockOut: {
    color: "#fff",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  no_data: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
});
