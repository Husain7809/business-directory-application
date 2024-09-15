import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../components/HomeScreen/Header";
import Slider from "../../components/HomeScreen/Slider";
import Category from "../../components/HomeScreen/Category";
import PopularBusiness from "../../components/HomeScreen/PopularBusiness";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Slider />
        <Category />
        <PopularBusiness />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
