import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./style";

type ButtonPropos = TouchableOpacityProps & {
    title: string, 
    isLoading?: boolean,
    color?:string
}

export default function Button({title, isLoading, color, ...rest}: ButtonPropos){
    return(
        <TouchableOpacity
        style={[styles.container,{backgroundColor: color ? color : "red"}]}
        disabled={isLoading}
        activeOpacity={0.7}
        {...rest}
        >
            {
                isLoading? <ActivityIndicator/> :
                <Text style={styles.title}>{title}</Text>
            }
        </TouchableOpacity>
    )
}