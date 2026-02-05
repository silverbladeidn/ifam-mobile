import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Apakah Anda yakin ingin keluar?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Ya, Keluar",
        style: "destructive",
        onPress: () => {
          logout();
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarLarge}>
          <Ionicons name="person" size={60} color="#666" />
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.role}>
          {user?.role === "driver" ? "Driver" : "Staff"}
        </Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Ionicons name="car" size={20} color="#6b7280" />
          <Text style={styles.infoLabel}>Kendaraan:</Text>
          <Text style={styles.infoValue}>{user?.vehicle}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="card" size={20} color="#6b7280" />
          <Text style={styles.infoLabel}>Plat:</Text>
          <Text style={styles.infoValue}>{user?.plate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="person-circle" size={20} color="#6b7280" />
          <Text style={styles.infoLabel}>Username:</Text>
          <Text style={styles.infoValue}>{user?.username}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: "#6b7280",
  },
  infoCard: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  infoLabel: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 10,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: "#1f2937",
    fontWeight: "600",
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#ef4444",
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
