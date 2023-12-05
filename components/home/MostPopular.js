import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { PRODUCTS } from "../../data/products";
import { TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get("window").width;
const MostPopular = () => {
    return (
        <View style={{ marginHorizontal: 20, marginTop: 45 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{ fontSize: 30, fontWeight: "700", color: "#fff" }}
                >
                    Most Popular
                </Text>
                <Text style={{ fontSize: 20 }}>See all</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    marginTop: 10,
                    gap: 10,
                }}
            >
                {PRODUCTS.map((product, index) => (
                    <TouchableOpacity key={index}
                        style={{ width: windowWidth * 0.44, height: 300 }}
                    >
                        <Image
                            source={product.image}
                            style={{
                                width: windowWidth * 0.44,
                                height: 300,
                                borderRadius: 8,
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default MostPopular;
