import { styled } from "nativewind";
import { Eye, EyeClosed } from "lucide-react-native";

export const StyledEye = styled(Eye, {
  className: {
    target: "style",
    nativeStyleMapping: {
      color: "color",
    },
  },
});

export const StyledEyeClosed = styled(EyeClosed, {
  className: {
    target: "style",
    nativeStyleMapping: {
      color: "color",
    },
  },
});
