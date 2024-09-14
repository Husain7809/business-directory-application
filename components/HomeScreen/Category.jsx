import { View, Text, FlatList, Image } from "react-native";
import { Colors } from "./../../constants/Colors";
import { useEffect, useState } from "react";
import categoryListData from "./../../data/category-data.json";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(categoryListData);
  }, []);

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-medium",
            marginRight: 10,
          }}
        >
          View All
        </Text>
      </View>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem
            data={item}
            key={index}
            onCategoryPress={(category) => {
              console.log("🚀 ~ Category ~ category:", category);
            }}
          />
        )}
      />
    </View>
  );
}
