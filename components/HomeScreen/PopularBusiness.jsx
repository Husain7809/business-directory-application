import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import businessJsonData from "../../data/business.json";
import { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import BusinessCard from "./BusinessCard";

export default function PopularBusiness() {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    setBusinessData(businessJsonData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Popular Business</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <FlatList
        data={businessData}
        horizontal={true}
        style={{ paddingLeft: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <BusinessCard
            data={item}
            key={index}
            onPress={(business) => {
              Alert.alert("Business clicked", business.name);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    fontFamily: "outfit-medium",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  viewAllText: {
    color: Colors.PRIMARY,
    fontFamily: "outfit-medium",
    marginRight: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "outfit-bold",
  },
});
