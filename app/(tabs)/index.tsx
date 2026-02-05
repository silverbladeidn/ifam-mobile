import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();
  const [isGPSActive, setIsGPSActive] = useState(false);

  const toggleGPS = () => {
    setIsGPSActive(!isGPSActive);
    // Implementasi GPS tracking nanti di sini
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Greeting */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Selamat Datang, {user?.name || "Nama Driver"}
        </Text>
      </View>

      {/* Driver Info Card */}
      <View style={styles.card}>
        <View style={styles.driverInfo}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={40} color="#666" />
          </View>
          <View style={styles.driverDetails}>
            <Text style={styles.driverName}>{user?.name || "Nama Driver"}</Text>
            <Text style={styles.vehicleInfo}>
              {user?.vehicle || "Mobil"} - {user?.plate || "Plat"}
            </Text>
            <View style={styles.statusContainer}>
              <View style={[styles.statusDot, styles.statusOnline]} />
              <Text style={styles.statusText}>Online</Text>
            </View>
          </View>
        </View>
      </View>

      {/* GPS Card */}
      <View style={styles.card}>
        <View style={styles.gpsContainer}>
          <View style={styles.gpsIcon}>
            <Ionicons name="location" size={30} color="#FF0000" />
          </View>
          <View style={styles.gpsInfo}>
            <Text style={styles.gpsTitle}>Aktifkan GPS</Text>
            <TouchableOpacity style={styles.gpsButton} onPress={toggleGPS}>
              <Text style={styles.gpsButtonText}>
                {isGPSActive ? "GPS Aktif" : "Bagikan Lokasi"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gpsToggle}>
            <TouchableOpacity
              style={[styles.toggleSwitch, isGPSActive && styles.toggleActive]}
              onPress={toggleGPS}
            >
              <View
                style={[
                  styles.toggleCircle,
                  isGPSActive && styles.toggleCircleActive,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Today's Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ringkasan Hari Ini</Text>
        <View style={styles.summaryGrid}>
          <View style={styles.summaryItem}>
            <Ionicons name="time-outline" size={24} color="#2563eb" />
            <Text style={styles.summaryValue}>8.5 Jam</Text>
            <Text style={styles.summaryLabel}>Jam Kerja</Text>
          </View>
          <View style={styles.summaryItem}>
            <Ionicons name="speedometer-outline" size={24} color="#2563eb" />
            <Text style={styles.summaryValue}>245 Km</Text>
            <Text style={styles.summaryLabel}>Jarak</Text>
          </View>
          <View style={styles.summaryItem}>
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color="#2563eb"
            />
            <Text style={styles.summaryValue}>3 Trip</Text>
            <Text style={styles.summaryLabel}>Selesai</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Menu Cepat</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="play-circle" size={32} color="#2563eb" />
            <Text style={styles.actionText}>Mulai{"\n"}Perjalanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="cash-outline" size={32} color="#2563eb" />
            <Text style={styles.actionText}>Lapor{"\n"}Biaya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="construct-outline" size={32} color="#2563eb" />
            <Text style={styles.actionText}>Jadwal{"\n"}Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="document-text-outline" size={32} color="#2563eb" />
            <Text style={styles.actionText}>Lihat{"\n"}Rules</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activities */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Aktivitas Terakhir</Text>
        <View style={styles.activityList}>
          <View style={styles.activityItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10b981" />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>
                Perjalanan Jakarta - Bandung
              </Text>
              <Text style={styles.activityTime}>2 jam yang lalu</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="cash" size={20} color="#f59e0b" />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Biaya BBM Rp 500.000</Text>
              <Text style={styles.activityTime}>5 jam yang lalu</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="construct" size={20} color="#8b5cf6" />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Service rutin selesai</Text>
              <Text style={styles.activityTime}>1 hari yang lalu</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 50,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#d1d5db",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  vehicleInfo: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 6,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#9ca3af",
    marginRight: 6,
  },
  statusOnline: {
    backgroundColor: "#10b981",
  },
  statusText: {
    fontSize: 14,
    color: "#1f2937",
    fontWeight: "500",
  },
  gpsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gpsIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  gpsInfo: {
    flex: 1,
  },
  gpsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  gpsButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  gpsButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  gpsToggle: {
    marginLeft: 8,
  },
  toggleSwitch: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#d1d5db",
    justifyContent: "center",
    padding: 2,
  },
  toggleActive: {
    backgroundColor: "#10b981",
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  toggleCircleActive: {
    alignSelf: "flex-end",
  },
  summaryGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
    marginTop: 8,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#eff6ff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  actionText: {
    fontSize: 12,
    color: "#1f2937",
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityContent: {
    marginLeft: 12,
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    color: "#1f2937",
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
    color: "#9ca3af",
  },
});
