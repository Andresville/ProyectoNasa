import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainers}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainers}>
                <Image source={require("../../assets/LogoNasa.png")} style={styles.image}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    leftContainers: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightContainers: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        fontSize: 20,
        color: "#fff",
    },
    image: {
        width: 60,
        height: 60,
    },
});

export default Header;