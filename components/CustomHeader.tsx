import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={80} tint={"extraLight"} style={{ paddingTop: top }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: "transparent",
          },
        ]}
      >
        
        <View style={styles.circle}>
          <Ionicons name={"card"} size={20} color="#FF4F18" />
        </View>
        
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#FF4F18"
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#FF4F18"
          />
        </View>
        <Link href={"/(myapp)/account"} asChild>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#FF4F18",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}>
              SG
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 10,
    backgroundColor: "#FF4F18",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4F18",
    borderRadius: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#FF4F18",
    color: "#FF4F18",
    borderRadius: 30,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#FF4F18",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
