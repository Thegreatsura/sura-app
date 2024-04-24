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

const image = {
  uri: "https://utfs.io/f/f0f92843-4d89-44df-b0c6-bbe77b890d55-r9smp.png",
};

const Index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const onNavigation = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
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
