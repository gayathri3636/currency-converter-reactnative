import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeperator } from "../components/RowItem";
import colors from "../constants/colors";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry something went wrong", "please try again later");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeperator />

        <RowItem
          text="React native basics"
          onPress={() =>
            openUrl(
              "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeperator />

        <RowItem
          text="React native by Example"
          onPress={() => openUrl("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
