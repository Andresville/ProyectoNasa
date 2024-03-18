import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";


const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([]);

    //Llamada a la API
    useEffect(() =>{    
        //Llamado a la API para que muestre la imagen del dia
        const loadTodaysImage = async () =>{
            try{
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
                setTodaysImage({});
            }
            
        };

        //Llamado a la API para que muestre las ultimas 5 imagen del dia
        const loadLast5DaysImages = async () =>{
            try{
                const date = new Date();
                const todayDate = format(date, "yyyy-MM-dd");
                const fiveDaysAgoDate = format(sub(date, {days: 5}), "yyyy-MM-dd");

                const lastFiveDaysImageResponse = await fetchApi(
                    `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`);

                setLastFiveDaysImage(lastFiveDaysImageResponse);
            } catch (error) {
                console.error(error);
            }
        };

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImage} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "rgba(7, 26, 93, 255)",
    },
});

export default Home;