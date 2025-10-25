import { TextInput, View } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { InputProps } from "@/types";
import { colors } from "@/constants/theme";

const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        props.containerStyle && props.containerStyle,
        isFocused && styles.primaryBorder,
      ]}
    >
      {props.icon && props.icon}
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={colors.neutral400}
        ref={props.inputRef && props.inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

export default Input;
