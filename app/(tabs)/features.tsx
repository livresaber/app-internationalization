import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Language } from "@/components/Language";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Features</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <Collapsible title="Internationalization with i18next">
        <ThemedText>
          Leverages react-i18next for seamless language management, allowing the
          app to be localized for different languages.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Persistent Language Selection">
        <ThemedText>
          Uses AsyncStorage to persistently store the user's preferred language,
          providing a consistent experience across app restarts.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Locale Fallback">
        <ThemedText>
          Defaults to the device's locale if no language preference is saved.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Easy Language Switching">
        <ThemedText>
          Users can switch languages by tapping on country flags.
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
