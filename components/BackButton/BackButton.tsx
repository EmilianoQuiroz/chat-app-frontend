import { colors } from "@/constants/theme";
import { BackButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import { CaretLeftIcon } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

const BackButton = ({
  style,
  iconSize = 24,
  color = colors.white,
}: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <CaretLeftIcon
        size={verticalScale(iconSize)}
        color={color}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
