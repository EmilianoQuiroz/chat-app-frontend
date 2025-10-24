import { ButtonProps } from "@/types";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Loading from "../Loading/Loading";
import styles from "./style";

const Button = ({ style, onPress, children, loading = false }: ButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
