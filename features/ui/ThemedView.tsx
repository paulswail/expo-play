import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  className,
  ...otherProps
}: ThemedViewProps) {
  return (
    <View
      className={`bg-light-background dark:bg-dark-background ${className}`}
      style={style}
      {...otherProps}
    />
  );
}
