import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { Colors } from "./../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Dimensions } from "react-native"; // Import Dimensions to get screen width

export default function Header() {
  const { user } = useUser();
  const screenWidth = Dimensions.get("window").width; // Get the screen width

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ color: "#fff" }}>Welcome,</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 19,
              fontFamily: "outfit-medium",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>

      {/* search bar */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginVertical: 10,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 8,
          gap: 10,
        }}
      >
        <Feather name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{
            fontFamily: "outfit",
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
