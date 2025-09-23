import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
      <Stack.Screen name="[id]" options={{ title: "Com Parâmetro" }} />
      <Stack.Screen
        name="navigate-button"
        options={{ title: "Botão Navegação" }}
      />
    </Stack>
  );
}
