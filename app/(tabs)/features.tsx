import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Language } from "@/components/Language";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("features.title")}</ThemedText>
      </ThemedView>
      <Collapsible title={t("features.collapsibles.i18n.title")}>
        <ThemedText>
          {t("features.collapsibles.i18n.description")}
        </ThemedText>
      </Collapsible>
      <Collapsible title={t("features.collapsibles.persistent.title")}>
        <ThemedText>
          {t("features.collapsibles.persistent.description")}
        </ThemedText>
      </Collapsible>
      <Collapsible title={t("features.collapsibles.fallback.title")}>
        <ThemedText>
          {t("features.collapsibles.fallback.description")}
        </ThemedText>
      </Collapsible>
      <Collapsible title={t("features.collapsibles.switching.title")}>
        <ThemedText>
          {t("features.collapsibles.switching.description")}
        </ThemedText>
      </Collapsible>
      <ThemedView>
        <Language />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
