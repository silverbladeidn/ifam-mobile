import { useAuth } from "@/contexts/AuthContext";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Truck } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
    "PlaywriteNZBasic-Variable": require("../assets/fonts/PlaywriteNZBasic-VariableFont_wght.ttf"),
  });

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Username dan password harus diisi!");
      return;
    }

    const success = await login(username, password);

    if (success) {
      router.replace("/(tabs)");
    } else {
      Alert.alert(
        "Login Gagal",
        "Username atau password salah!\n\nCoba:\n• driver1 / 123456\n• staff1 / 123456",
      );
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b5ed7",
      }}
    >
      <Truck size={64} color="white" />
      <Text
        style={{
          color: "white",
          fontSize: 27,
          lineHeight: 34,
          marginBottom: 20,
          fontFamily: "PlaywriteNZBasic-Variable",
          paddingVertical: 4,
        }}
      >
        IFAM
      </Text>

      {/* Info Dummy Account */}
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
          Demo Account:
        </Text>
        <Text style={{ color: "white", fontSize: 11, textAlign: "center" }}>
          driver1 / 123456 atau staff1 / 123456
        </Text>
      </View>

      <View
        style={{
          width: "85%",
          padding: 20,
          backgroundColor: "#d9d9d9",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          Username
        </Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#6c63ff",
            padding: 12,
            borderRadius: 25,
            alignItems: "center",
          }}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
