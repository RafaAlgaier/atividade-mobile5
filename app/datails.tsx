import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Link href="/" style={styles.link}>
        Voltar
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 },
  link: { color: "blue" },
});
