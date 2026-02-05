import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login"); // atau /(tabs)
  }, [router]);

  return <View />;
}
