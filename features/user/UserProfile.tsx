import { Image } from "react-native";

import { ThemedText } from "@/features/ui/ThemedText";
import { ThemedView } from "@/features/ui/ThemedView";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
}

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <ThemedView className="flex-1 p-4 space-y-6">
      {/* Profile Header Section */}
      <ThemedView className="items-center">
        <Image
          source={{ uri: user.avatar }}
          className="w-32 h-32 rounded-full mb-4 border-2 border-light-tint dark:border-dark-tint"
        />
        <ThemedText type="title" className="mb-1">
          {user.name}
        </ThemedText>
        <ThemedText className="text-light-icon dark:text-dark-icon text-sm">
          {user.email}
        </ThemedText>
      </ThemedView>

      {/* Bio Section */}
      <ThemedView className="p-4 rounded-2xl bg-light-background/50 dark:bg-dark-background/50 shadow-sm">
        <ThemedText type="subtitle" className="mb-2">
          About
        </ThemedText>
        <ThemedText className="leading-relaxed">{user.bio}</ThemedText>
      </ThemedView>

      {/* Stats Section */}
      <ThemedView className="flex-row justify-around p-4 rounded-2xl bg-light-background/50 dark:bg-dark-background/50">
        <ThemedView className="items-center">
          <ThemedText type="defaultSemiBold">Posts</ThemedText>
          <ThemedText className="text-light-icon dark:text-dark-icon">
            24
          </ThemedText>
        </ThemedView>
        <ThemedView className="items-center">
          <ThemedText type="defaultSemiBold">Followers</ThemedText>
          <ThemedText className="text-light-icon dark:text-dark-icon">
            1.2k
          </ThemedText>
        </ThemedView>
        <ThemedView className="items-center">
          <ThemedText type="defaultSemiBold">Following</ThemedText>
          <ThemedText className="text-light-icon dark:text-dark-icon">
            843
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
