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
    <ThemedView className="flex-1 p-6 space-y-6">
      {/* Profile Info */}
      <ThemedView className="space-y-2">
        <ThemedText className="text-2xl font-bold">{user.name}</ThemedText>
        <ThemedText className="text-gray-600">{user.email}</ThemedText>
      </ThemedView>

      {/* About Section */}
      <ThemedView className="space-y-2">
        <ThemedText className="text-xl font-semibold">About</ThemedText>
        <ThemedText>{user.bio}</ThemedText>
      </ThemedView>

      {/* Stats */}
      <ThemedView className="space-y-4">
        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold">Posts</ThemedText>
          <ThemedText>24</ThemedText>
        </ThemedView>

        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold">Followers</ThemedText>
          <ThemedText>1.2k</ThemedText>
        </ThemedView>

        <ThemedView className="space-y-2">
          <ThemedText className="text-xl font-semibold">Following</ThemedText>
          <ThemedText>843</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
