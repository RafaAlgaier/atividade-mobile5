import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function DetalhePost() {
  const { postId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post #{postId}</Text>
      <Text>Conteúdo do post {postId}...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 8 },
});
