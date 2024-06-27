import React from "react";
import { Image, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { HelloWave } from "@/components/HelloWave";
import { Language } from "@/components/Language";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ExternalLink } from "@/components/ExternalLink";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("home.welcome")}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home.subtitle")}</ThemedText>
        <ThemedText>{t("home.description")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home.exploringLanguages")}</ThemedText>
        <ThemedText>{t("home.exploringLanguagesDescription")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home.learnMore")}</ThemedText>
        <ThemedText>
          {t("home.repositoryLinkText")}:{" "}
          <ExternalLink
            style={styles.link}
            href="https://github.com/livresaber/app-internationalization"
          >
            livresaber/app-internationalization
          </ExternalLink>
        </ThemedText>
        <ThemedText>
          {t("home.articlesLinkText")}:{" "}
          <ExternalLink
            style={styles.link}
            href="https://dev.to/lucasferreiralimax"
          >
            dev.to/lucasferreiralimax
          </ExternalLink>
        </ThemedText>
        <ThemedText>
          <ExternalLink
            style={styles.link}
            href="https://www.linkedin.com/in/lucasferreiralimax"
          >
            linkedin.com/in/lucasferreiralimax
          </ExternalLink>
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <Language />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  link: {
    textDecorationLine: "underline",
  },
});
