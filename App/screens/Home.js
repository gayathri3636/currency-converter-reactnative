import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  // Keyboard,
} from "react-native";
import { format } from "date-fns";
import colors from "../constants/colors";
import { ConversionInput } from "../components/conversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    // justifyContent: "center",
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // useEffect(() => {
  //   const showListener = Keyboard.addListener("keyboardDidShow", () => {
  //     setScrollEnabled(true);
  //   });
  //   const hideListener = Keyboard.addListener("keyboardDidHide", () => {
  //     setScrollEnabled(false);
  //   });
  //   return () => {
  //     showListener.remove();
  //     hideListener.remove();
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={Colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                activeCurrency: baseCurrency,
              })
            }
            keyboardType="numeric"
            onChangeText={(text) => console.log("text", text)}
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            editable={false}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                activeCurrency: quoteCurrency,
              })
            }
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate}${quoteCurrency} as of ${format(
              new Date(date),
              "MMM do, yyyy"
            )}`}
          </Text>
          <Button text="Reverse currencies" onPress={() => alert("todo")} />
          {/* <View style={{ height: screen.height }} /> */}
          <KeyboardSpacer
            onToggle={(KeyboardIsVisible) =>
              setScrollEnabled(KeyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
