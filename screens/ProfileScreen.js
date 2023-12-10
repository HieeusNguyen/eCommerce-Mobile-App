import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    Dimensions,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    backgroundColor: "#FF6D6DB2",
                    height: 0.3 * windowHeight,
                    position: "relative",
                    paddingTop: 20,
                }}
            >
                <View
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../assets/icon/back.png")}
                            style={{ width: 36, height: 36 }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/profile/maihailan.jpeg")}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 999,
                            }}
                        />
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 24,
                                fontWeight: "700",
                                marginTop: 10,
                            }}
                        >
                            Mai Hải Lân
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                            @YeuHanh
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/icon/view-all.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        paddingVertical: 30,
                        width: 0.85 * windowWidth,
                        position: "absolute",
                        bottom: -55,
                        alignSelf: "center",
                        borderRadius: 10,
                    }}
                >
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/bag-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/heart-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/address-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/icon/voucher-pink.png")}
                            style={{ width: 40, height: 40 }}
                        />
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 100, alignItems: "center" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "74%",
                        marginTop: 35,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                        }}
                    >
                        <Image source={require("../assets/icon/user.png")} />
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            My Account
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/icon/arrow-right.png")}
                        style={{ width: 26, height: 26 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
