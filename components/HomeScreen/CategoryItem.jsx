import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryItem({ data, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(data)}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <Text style={{ marginTop: 5, fontSize: 13 }}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 5,
    alignItems: "center",
    fontFamily: "outfit-medium",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: "black",
  },
});
