import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={{ marginHorizontal: 10, flexDirection:'row', justifyContent:'space-between'}}>
            <Image
                source={require("../../assets/icon/menu.png")}
                style={{ width: 36, height: 36 }}
            />
            <View style={{flexDirection:'row', gap:10}}>
                <Image
                    source={require("../../assets/icon/search.png")}
                    style={{ width: 36, height: 36 }}
                />
                <Image
                    source={require("../../assets/icon/bag.png")}
                    style={{ width: 36, height: 36 }}
                />
            </View>
        </View>
    );
};

export default Header;
