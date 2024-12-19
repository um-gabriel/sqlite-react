import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { colors } from "./global"

export function Botão({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 60,
        backgroundColor: colors.yellow,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    />
    
  )
}
