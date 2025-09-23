import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Navegar() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Detalhes"
        onPress={() => router.push("/detalhes")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
