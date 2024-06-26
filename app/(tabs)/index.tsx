import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { Language } from "@/components/Language";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTranslation } from "react-i18next";
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
      <ThemedView>
        <Language />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Welcome to the i18n Example App!
        </ThemedText>
        <ThemedText>
          This is an example React Native application that demonstrates how to
          implement internationalization (i18n) using react-i18next. The app
          allows users to switch between different languages for a more
          localized experience.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Exploring Languages</ThemedText>
        <ThemedText>
          Click on the country flags to explore the app's content in different
          languages.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Want to Learn More?</ThemedText>
        <ThemedText>
          The project repository on GitHub:{" "}
          <ExternalLink
            style={styles.link}
            href="https://github.com/livresaber/app-internationalization"
          >
            livresaber/app-internationalization
          </ExternalLink>
        </ThemedText>
        <ThemedText>
          More articles:{" "}
          <ExternalLink
            style={styles.link}
            href="https://dev.to/lucasferreiralimax"
          >
            dev.to/lucasferreiralimax
          </ExternalLink>
        </ThemedText>
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
    position: 'absolute',
  },
  link: {
    textDecorationLine: "underline",
    backgroundColor: "red",
  },
});
