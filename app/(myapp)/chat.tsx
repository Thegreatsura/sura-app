import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const Chats = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View>
      <View
        //   entering={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </Pressable>
      </View>
      <Text>Chats</Text>
    </View>
  );
};

export default Chats;
