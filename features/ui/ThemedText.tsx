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
    default: "text-default text-light-text dark:text-dark-text",
    title: "text-title font-bold text-light-text dark:text-dark-text",
    defaultSemiBold:
      "text-default font-semibold text-light-text dark:text-dark-text",
    subtitle: "text-subtitle font-semibold text-light-text dark:text-dark-text",
    link: "text-default text-light-tint dark:text-dark-tint underline",
  }[type];

  return (
    <Text
      className={`${typeStyles} ${className}`}
      style={style}
      {...otherProps}
    />
  );
}
