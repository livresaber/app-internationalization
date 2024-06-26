import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/components/ThemedText";
import { useTranslation } from "react-i18next";
import Brasil from "./flags/Brasil";
import USA from "./flags/USA";
import Russian from "./flags/Russian";
import China from "./flags/China";
import Spain from "./flags/Spain";

const flags = [
  { component: Brasil, lang: "pt-BR", name: "Brasil" },
  { component: USA, lang: "en-US", name: "USA" },
  { component: Russian, lang: "ru-RU", name: "Russia" },
  { component: China, lang: "zh-CN", name: "China" },
  { component: Spain, lang: "es-ES", name: "Spain" },
];

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
      <ThemedText style={styles.text}>Language</ThemedText>
      <View style={styles.flags}>
        {flags.map(({ component: Flag, lang, name }) => (
          <TouchableOpacity key={name} onPress={() => changeLanguage(lang)} style={styles.flag}>
            <Flag width={50} height={50} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  flags: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  flag: {
    paddingRight: 20,
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
