import { useClerk, useUser } from "@clerk/clerk-expo";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Colors } from "./../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Header() {
  const { user } = useUser();
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const { signOut } = useClerk();

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "space-evenly",
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
        <TouchableOpacity onPress={() => signOut({ redirectUrl: "/" })}>
          <MaterialIcons name="logout" style={styles.logoutBtn} size={24} />
        </TouchableOpacity>
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
  logoutBtn: {
    color: "#fff",
    fontFamily: "outfit-bold",
    padding: 10,
    borderRadius: 8,
  },
});
