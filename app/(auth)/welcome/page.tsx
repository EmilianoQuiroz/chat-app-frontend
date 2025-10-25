import Button from "@/components/Button/Button";
import ScreenWrapper from "@/components/ScreenWrapper/ScreenWrapper";
import Typo from "@/components/Typo/Typo";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import styles from "./style";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper showPattern={true} bgOpacity={0.5}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Typo size={43} fontWeight={"700"} color={colors.white}>
            ChatApp
          </Typo>
        </View>
        <Animated.Image
          entering={FadeIn.duration(700).springify()}
          source={require("../../../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode={"contain"}
        />
        <View>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            Stay Connected
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            with your friends
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            and family
          </Typo>
        </View>
        <Button
          onPress={() => router.push("/(auth)/register/page")}
          style={{ backgroundColor: colors.white }}
        >
          <Typo size={23} fontWeight={"bold"}>
            Get started
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
