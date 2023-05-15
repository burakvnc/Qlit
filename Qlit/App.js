import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import logo from "./assets/CustomIcons/logo.jpg";
import settings from "./assets/CustomIcons/settings.png";
import lock from "./assets/CustomIcons/lock.png";
import unlock from "./assets/CustomIcons/unlock.png";
import WifiList from "./WifiList";

export default function App() {
  const [isLocked, setIsLocked] = useState(true);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => console.log("prsessed")}
          style={{
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={settings} style={{ width: 50, height: 50 }} />
          <Text>AYARLAR</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 80,
            width: 120,
            paddingLeft: 15,
          }}
        >
          <Image source={logo} style={{ width: 130, height: 80 }} />
        </View>
      </View>
      <View style={styles.wifiContainer}>
        <WifiList/>
    </View>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLocked ? (
            <Text style={{ color: "white" }}>KILITLI</Text>
          ) : (
            <Text style={{ color: "white" }}>KILIT ACILDI</Text>
          )}
          <TextInput
            placeholder="KILIT PIN"
            placeholderTextColor="white"
            style={{
              width: "100%",
              borderBottomWidth: 2,
              borderColor: "white",
            }}
            placeholderStyle={{ marginLeft: 15 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsLocked(!isLocked);
          }}
        >
          {isLocked ? (
            <Image source={lock} style={{ width: 50, height: 50 }} />
          ) : (
            <Image source={unlock} style={{ width: 50, height: 50 }} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A7FC0",
    flex: 1,
    position: "relative",
  },
  navbar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    width: "100%",
    display: "flex",
    position: "absolute",
    gap: 30,
    top: 25,
  },
  wifiContainer: {
    width: "100%",
    height: 150,
    marginTop: 115,
    flexGrow: 0,
    borderColor: "black",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  inputContainer: {
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
});
