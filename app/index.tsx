import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { useColorScheme } from "@/components/useColorScheme";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";

const image = require("@/assets/images/home.png")


const Index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const onNavigation = () => {
    router.push("/screen01");
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.below} />
        <PrimaryButton
          onPress={onNavigation}
          label="Get started"
          style={styles.button}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    color: "dark",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
  },
  below: {
    flex: 1,
  },
});
export default Index;
