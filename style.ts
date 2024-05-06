import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#EEE"
    },
    title:{
        marginTop: 60,
        fontSize:24,
        fontWeight:"bold"
    },
    inputZipCode:{
        height:40,
        marginVertical:20,
        backgroundColor:"#FFF",
        width:"90%",
        borderRadius:5,
        color:"#000",
        fontSize: 16,
        padding:10,
        borderColor:"#DDD",
        borderWidth: 1,
        elevation:2
    },
    buttonArea:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})