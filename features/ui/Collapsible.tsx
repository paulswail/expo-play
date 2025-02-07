import { type PropsWithChildren, useState } from "react";
import { TouchableOpacity } from "react-native";

import { IconSymbol } from "@/features/ui/IconSymbol";
import { ThemedText } from "@/features/ui/ThemedText";
import { ThemedView } from "@/features/ui/ThemedView";
import { useColorScheme } from "@/lib/styles/useColorScheme";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <TouchableOpacity
        className="flex-row items-center space-x-1.5"
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === "light" ? "#687076" : "#9BA1A6"}
          style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView className="mt-1.5 ml-6">{children}</ThemedView>}
    </ThemedView>
  );
}
