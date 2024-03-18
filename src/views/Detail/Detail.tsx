import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () =>{

    const {params: {date, title, url, explanation}} = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

    return(
        <View style={style.container}>
            <Header />
            <ScrollView style={style.content}>
                <Image source={{uri: url}} style={style.image} />
                <Text style={style.title}>{title}</Text>
                <Text style={style.date}>{date}</Text>
                <ScrollView style={style.explanationContainer}>
                <Text style={style.explanation}>{explanation}</Text>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "rgba(7, 26, 93, 255)",
    },
    content:{
        backgroundColor: "#2c449d",
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
    },
    image:{
        width: "100%",
        height: "50%",
        borderColor: "#fff",
        borderRadius: 32,
        borderWidth: 2,
        marginBottom: 16,
    },
    title:{
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
    },
    date:{
        color: "#fff",
        fontSize: 16,
        marginBottom: 16,
    },
    explanationContainer:{
        marginVertical: 16,
    },
    explanation:{
        color: "#fff",
        fontSize: 16,
    },
});

export default Detail;