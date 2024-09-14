import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { Colors } from "@/constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Handle sign-in or sign-up flow here
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={style.container}>
      <View>
        <Image
          source={require("../assets/images/business-home-screen.png")}
          style={{
            width: 280,
            height: 500,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Your Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
            textAlign: "center",
            marginVertical: 15,
            color: Colors.GRAY,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          pariatur dolor sed aspernatur minima tempore?
        </Text>
      </View>
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text style={style.text}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 5,
    width: 200,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit-medium",
  },
});
