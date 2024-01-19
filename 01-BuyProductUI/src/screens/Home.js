import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>New Scooter</Text>
      <Text style={styles.detail}>
        Fully electric new powerful engine automatic solar charge with new red
        color
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detail: {
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    paddingHorizontal: 20,
    marginTop: 30,
    lineHeight: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
    color: "#fff",
  },
});
