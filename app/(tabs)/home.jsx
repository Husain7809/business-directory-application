import { ScrollView, Text, View } from "react-native";
import React from "react";
import Header from "../../components/HomeScreen/Header";
import Slider from "../../components/HomeScreen/Slider";
import Category from "../../components/HomeScreen/Category";
import PopularBusiness from "../../components/HomeScreen/PopularBusiness";

export default function home() {
  return (
    <ScrollView>
      <Header />
      <Slider />
      <Category />
      <PopularBusiness />
    </ScrollView>
  );
}
