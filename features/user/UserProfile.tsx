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
    <ThemedView className="flex-1 p-4">
      <ThemedView className="items-center mb-6">
        <Image
          source={{ uri: user.avatar }}
          className="w-24 h-24 rounded-full mb-4"
        />
        <ThemedText type="title" className="mb-1">
          {user.name}
        </ThemedText>
        <ThemedText className="text-light-icon dark:text-dark-icon">
          {user.email}
        </ThemedText>
      </ThemedView>

      <ThemedView className="p-4 rounded-lg bg-light-background dark:bg-dark-background">
        <ThemedText type="subtitle" className="mb-2">
          Bio
        </ThemedText>
        <ThemedText>{user.bio}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
