import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  type = "default",
  className = "",
  ...otherProps
}: ThemedTextProps) {
  const typeStyles = {
    default: "text-gray-900 dark:text-gray-100",
    title: "text-2xl font-bold text-gray-900 dark:text-white",
    defaultSemiBold: "text-gray-900 dark:text-white font-semibold",
    subtitle: "text-xl font-semibold text-gray-900 dark:text-white",
    link: "text-blue-600 dark:text-blue-400 underline",
  }[type];

  return (
    <Text
      className={`${typeStyles} ${className}`}
      style={style}
      {...otherProps}
    />
  );
}
