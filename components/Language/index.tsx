import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/components/ThemedText";
import { useTranslation } from "react-i18next";
import Brasil from "./flags/Brasil";
import USA from "./flags/USA";

export function Language() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>Language 👋</ThemedText>
      <TouchableOpacity onPress={() => changeLanguage("pt-BR")}>
        <Brasil width={100} height={100} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage("en-US")}>
        <USA width={100} height={100} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
