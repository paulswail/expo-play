import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  return (
    <View
      className="bg-light-background dark:bg-dark-background"
      style={style}
      {...otherProps}
    />
  );
}
