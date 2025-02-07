import { Image, Text, View } from "react-native";

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
    <View className="flex-1 p-6 space-y-6">
      {/* Profile Info */}
      <View className="space-y-2">
        <Text className="text-2xl font-bold">{user.name}</Text>
        <Text className="text-gray-600">{user.email}</Text>
      </View>

      {/* About Section */}
      <View className="space-y-2">
        <Text className="text-xl font-semibold">About</Text>
        <Text>{user.bio}</Text>
      </View>

      {/* Stats */}
      <View className="space-y-4">
        <View className="space-y-2">
          <Text className="text-xl font-semibold">Posts</Text>
          <Text>24</Text>
        </View>

        <View className="space-y-2">
          <Text className="text-xl font-semibold">Followers</Text>
          <Text>1.2k</Text>
        </View>

        <View className="space-y-2">
          <Text className="text-xl font-semibold">Following</Text>
          <Text>843</Text>
        </View>
      </View>
    </View>
  );
}
