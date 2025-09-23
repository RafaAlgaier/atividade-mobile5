import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Feed() {
  const router = useRouter();
  const posts = [1, 2, 3]; // Exemplo de posts

  return (
    <View style={styles.container}>
      {posts.map((id) => (
        <TouchableOpacity
          key={id}
          onPress={() => router.push(`/tabs/feed/${id}`)}
        >
          <Text style={styles.post}>Post {id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  post: { fontSize: 18, marginVertical: 10, color: "blue" },
});
