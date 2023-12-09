import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/search/Header";
import SearchBox from "../components/search/SearchBox";
import SearchContent from "../components/search/SearchContent";

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#ff6d6ddd" }}>
            <Header navigation={navigation} />
            <ScrollView>
                <SearchBox />
                <SearchContent />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;
