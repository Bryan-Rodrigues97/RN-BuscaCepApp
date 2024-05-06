import { View, Text } from "react-native";
import { styles } from "./style";

export type ZipCodeProps = {
    bairro: string,
    cep: string,
    complemento: string,
    ddd: string,
    gia: string,
    ibge: string,
    localidade: string, 
    logradouro: string,
    siafi: string, 
    uf: string
}

export default function ZipCode({zipCode}: { zipCode: ZipCodeProps }){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cep: {zipCode?.cep}</Text>
            <Text style={styles.text}>Cidade: {zipCode?.localidade}</Text>
            <Text style={styles.text}>Bairro: {zipCode?.bairro}</Text>
            <Text style={styles.text}>Rua: {zipCode?.logradouro}</Text>
            <Text style={styles.text}>UF: {zipCode?.uf}</Text>
        </View>
    )
}
