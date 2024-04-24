
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import React from "react";
// import { RootStackScreenProps } from "../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../PrimaryButton";
import ScreenIndicators from "../ScreenIndicators";
import { INTRO_SCREEN_02 } from "../../utils/constants";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
// import Artwork02 from "../components/artworks/Artwork02";

const IntroScreen02 = () => {
  const theme = useTheme();
  const router = useRouter()
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <View
        // entering={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      <View
        // entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        {/* <Artwork02 width={300} height={300} /> */}
      </View>
      <View style={{ padding: 24 }}>
        <Text
          // entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: "800", color: theme.colors.text }}
        >
          {INTRO_SCREEN_02.title}
        </Text>

        <Text
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_02.description}
        </Text>
        <View
          // entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={1} />
        </View>

        <View
          // entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          <PrimaryButton
            label="Next"
            onPress={() => router.push("/login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen02;
