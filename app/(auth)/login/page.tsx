import BackButton from "@/components/BackButton/BackButton";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import ScreenWrapper from "@/components/ScreenWrapper/ScreenWrapper";
import Typo from "@/components/Typo/Typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useRef, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import styles from "./style";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Please fill in all fields.");
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      onTouchStart={Keyboard.dismiss}
    >
      <ScreenWrapper showPattern={true} bgOpacity={0.5}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton iconSize={28} />
            <Typo size={17} color={colors.white}>
              Need some help?
            </Typo>
          </View>
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.form}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ gap: spacingY._10, marginBottom: spacingY._15 }}>
                <Typo size={28} fontWeight={"600"}>
                  Welcome back!
                </Typo>
                <Typo color={colors.neutral600}>
                  Please log in to your account.
                </Typo>
              </View>

              <Input
                placeholder="Enter your email"
                onChangeText={(value: string) => (emailRef.current = value)}
                icon={
                  <Icons.Envelope
                    size={verticalScale(16)}
                    color={colors.neutral600}
                  />
                }
              />
              <Input
                placeholder="Enter your password"
                secureTextEntry={true}
                onChangeText={(value: string) => (passwordRef.current = value)}
                icon={
                  <Icons.Lock
                    size={verticalScale(16)}
                    color={colors.neutral600}
                  />
                }
              />
              <View style={{ marginTop: spacingY._25, gap: spacingY._15 }}>
                <Button loading={isLoading} onPress={handleSubmit}>
                  <Typo size={20} color={colors.white} fontWeight={"bold"}>
                    Log In
                  </Typo>
                </Button>
              </View>
              <View style={styles.footer}>
                <Typo size={14} color={colors.neutral600}>
                  Don't have an account?{" "}
                </Typo>
                <Pressable onPress={() => router.push("/(auth)/register/page")}>
                  <Typo size={14} color={colors.primary} fontWeight={"600"}>
                    Register
                  </Typo>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Login;
