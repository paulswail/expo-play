import { Stack } from "expo-router";
import { UserProfile } from "../../features/user/UserProfile";

// Mock data - in real app, this would come from an API
const mockUserData = {
  id: "123",
  name: "Jane Doe",
  email: "jane@example.com",
  avatar: "https://ui-avatars.com/api/?name=Jane+Doe&size=200",
  bio: "Software developer and cat enthusiast",
};

export default function ProfileScreen() {
  // In a real app, you might use React Query, SWR, or similar:
  // const { data: userData, isLoading } = useQuery('userData', fetchUserData);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Profile",
          headerShown: true,
        }}
      />
      <UserProfile user={mockUserData} />
    </>
  );
}
