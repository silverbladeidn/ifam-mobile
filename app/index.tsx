import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Truck } from "lucide-react-native";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("./login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  const [fontsLoaded] = useFonts({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
    "PlaywriteNZBasic-Variable": require("../assets/fonts/PlaywriteNZBasic-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B5ED7",
      }}
    >
      {/* {Logo} */}
      <Truck size={64} color="white" />
      <Text
        style={{
          color: "white",
          fontSize: 48,
          lineHeight: 60,
          fontFamily: "PlaywriteNZBasic-Variable",
          includeFontPadding: false,
        }}
      >
        IFAM
      </Text>
    </View>
  );
}
