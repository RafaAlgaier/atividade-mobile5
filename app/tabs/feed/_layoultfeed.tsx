import { Stack } from "expo-router";

export default function FeedLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
      <Stack.Screen name="[postId]" options={{ title: "Detalhes do Post" }} />
    </Stack>
  );
}
