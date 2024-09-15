import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

export default function BusinessCard({ data, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(data)}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.address}>{data.address}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.rating}>⭐ {data.rating}</Text>
            <TouchableOpacity>
              <Text style={styles.button}>More detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 5,
    fontFamily: "outfit-medium",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    textAlign: "center",
    padding: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 20,
  },
  name: {
    fontFamily: "outfit-bold",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10,
  },
  address: {
    color: Colors.GRAY,
    marginLeft: 10,
    marginVertical: 5,
  },
  rating: {
    fontFamily: "outfit-medium",
    marginLeft: 10,
  },
  button: {
    color: "#fff",
    backgroundColor: Colors.PRIMARY,
    fontFamily: "outfit-medium",
    padding: 5,
    borderRadius: 5,
  },
});
