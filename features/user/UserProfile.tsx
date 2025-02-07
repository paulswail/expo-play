import { ThemedText } from "@/features/ui/ThemedText";
import { ThemedView } from "@/features/ui/ThemedView";
import { Image } from "react-native";

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
    <ThemedView className="flex-1 p-6 space-y-6">
      {/* Profile Info */}
      <ThemedView className="items-center space-y-4">
        <Image
          source={{ uri: user.avatar }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
          }}
        />
        <ThemedView className="space-y-2">
          <ThemedText className="text-2xl font-bold dark:text-white">
            {user.name}
          </ThemedText>
          <ThemedText className="text-gray-600 dark:text-gray-300">
            {user.email}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* About Section */}
      <ThemedView className="space-y-2">
        <ThemedText className="text-xl font-semibold dark:text-white">
          About
        </ThemedText>
        <ThemedText className="dark:text-gray-300">{user.bio}</ThemedText>
      </ThemedView>

      {/* Stats */}
      <ThemedView className="space-y-4">
        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold dark:text-white">
            Posts
          </ThemedText>
          <ThemedText className="dark:text-gray-300">24</ThemedText>
        </ThemedView>

        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold dark:text-white">
            Followers
          </ThemedText>
          <ThemedText className="dark:text-gray-300">1.2k</ThemedText>
        </ThemedView>

        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold dark:text-white">
            Following
          </ThemedText>
          <ThemedText className="dark:text-gray-300">843</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
