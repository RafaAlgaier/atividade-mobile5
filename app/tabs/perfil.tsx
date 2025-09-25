import { View, Text, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Text>Nome: Rafael</Text>
      <Text>Bio: Amante de tecnologia e futebol.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 8 },
});
