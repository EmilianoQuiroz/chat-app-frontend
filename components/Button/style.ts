import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    borderCurve: "continuous",
    height: verticalScale(56),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
