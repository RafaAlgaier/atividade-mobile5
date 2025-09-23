import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const randomId = Math.floor(Math.random() * 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Link href="/detalhes" style={styles.link}>
        Ir para Detalhes
      </Link>
      <Link href={`/${randomId}`} style={styles.link}>
        Ir para Tela com ID
      </Link>
      <Link href="/navigate-button" style={styles.link}>
        Ir para Botão
      </Link>
      <Link href="/tabs" style={styles.link}>
        Ir para Tabs
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 },
  link: { color: "blue", marginVertical: 6, fontSize: 18 },
});
