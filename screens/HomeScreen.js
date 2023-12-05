import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Items from "../components/home/Items";
import Product from "../components/home/Product";
import MostPopular from "../components/home/MostPopular";

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: "#ff6d6ddd" }}>
                <Header />
                <Items />
                <Product />
                <MostPopular />
            </SafeAreaView>
        </ScrollView>
    );
};

export default HomeScreen;
