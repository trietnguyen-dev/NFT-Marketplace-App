import { Dimensions, StyleSheet } from "react-native";

function getWidth() {
    let width = Dimensions.get('window').width;
    width = width - 260;
    return width / 5;
}

const styles = StyleSheet.create({

    //Tabbar
    tabOffset: {
        width: getWidth(),
        height: 2,
        backgroundColor: "tomato",
        position: "absolute",
        bottom: 20,
        marginHorizontal: 40,
        left: 28,
        borderRadius: 50,

    },


    //phan cart
    cartItem: {
        justifyContent: "center",
        // position: "relative",
        marginTop: 10,

    },
    cartItem1: {
        width: 153,
        height: 160,
        backgroundColor: "purple",
        right: -4,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
        borderRadius: 10,
    },
    cartItem2: {
        width: 225,
        height: 141,
        backgroundColor: "#FFFFFF",
        position: "absolute",
        right: 6,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
        borderRadius: 10,
    },
    bgETHCart: {
        borderRadius: 11,
        width: 50,
        height: 15,
    },



    // phan search
    headerSearch: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",

    },
    bodySearch: {
        flex: 0.30,
        borderBottomWidth: 1,
        borderColor: "#DEDEDE",

    },
    footerSearch: {
        flex: 0.53,
    },
    footerBarSearch: {

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: 15,
        width: 330,
        height: 64,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: "#D8D8D8",
        backgroundColor: "#FFF",

    },


    search: {
        flexDirection: "row",
        width: 330,
        height: 50,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
        borderRadius: 30,
    },


    // phần detail
    logoDetail: {
        flex: 0.07,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    body: {
        flex: 0.82,
        // backgroundColor: "red",
        marginBottom: 10,
    },
    footer: {
        flex: 0.09,
        marginTop: 10,
    },
    bgimgDetail: {
        position: "relative",
        width: "100%",
        height: 378,

    },
    imgDetail: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#FFF",
    },
    tabDetail: {
        position: "relative",
        alignSelf: "center",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderTopColor: "#FFF",
        borderLeftColor: "#FFF",
        borderRightColor: "#FFF",
        bottom: 60,
        backgroundColor: "#F8F7FF",
        width: 173,
        height: 60,
    },
    tabDetail2: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
        bottom: 50,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        width: 160,
        height: 60,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
    },
    bgBothAuthor: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",

    },
    bgAuthor: {
        marginTop: 10,
        width: 165,
        height: 80,
        // backgroundColor: "red"
    },
    bgAuthor1: {
        position: "absolute",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        bottom: 0,
        borderRadius: 10,
        borderColor: "#EEEEEE",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
    },
    hideBgAuthor1: {
        top: -2,
        position: "absolute",
        backgroundColor: "#F8F7FF",
        width: 50,
        height: 30,
        left: 10,
        borderBottomEndRadius: 300,
        borderBottomStartRadius: 300,
        borderColor: "#EEEEEE",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    imgBgAuthor1: {
        position: "relative",
        backgroundColor: "black",
        width: 40,
        height: 40,
        borderRadius: 300,
        borderColor: "#EEEEEE",
        borderWidth: 1,
        top: -15,
        left: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.19,
        shadowRadius: 2.3,
        elevation: 5,
    },
    bgAllTopbidby: {
        flexDirection: "row",
    },
    bgTopbidby: {
        backgroundColor: "#EAE6E6",
        width: 130,
        height: 20,
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",

    },



    // phần Home
    footerBar: {
        flex: 1,
        marginHorizontal: 40,
        position: "absolute",
        height: 64,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: "#D8D8D8",
        backgroundColor: "#FFF",

        bottom: 10,
    },
    itemContainer: {
        position: "relative",
        flexDirection: "row",
        width: 165,
        height: 160,
        borderRadius: 10,
        borderColor: "red",
    },
    item: {
        flex: 1,
        borderWidth: 2,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: "lightblue",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        elevation: 10,
        marginBottom: 10,
    },
    bgColor: { backgroundColor: "#F8F7FF", flex: 1 },
    container: {
        marginHorizontal: 29,
        flex: 1,

    },
    containerLogo: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowLogo: {
        flexDirection: "row",
    },
    sizeText: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 5,
    },
    containerFullMainImage: {
        marginTop: 49,
    },
    containerMainImage: {
        width: 243,
        height: 316,
        marginRight: 11,
        // borderColor: "black",
        // borderWidth: 2,
    },
    mainImage: {
        boxSizing: "border-box",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 22,
        width: 203.34,
        height: 266.72,
        position: "relative",
    },

    mainImage2: {
        position: "absolute",
        backgroundColor: "#F8F7FF",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 18,
        width: 78,
        height: 150,
        right: 34,
        bottom: -30,
        transform: [{ rotate: "90deg" }],
    },

    mainImage3: {
        position: "absolute",
        backgroundColor: "white",
        borderColor: "#D8D8D8",
        borderWidth: 1,
        borderRadius: 18,
        width: 180,
        height: 115,
        right: 0,
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.3,
        marginBottom: 10,
        elevation: 10,
    },
    image: {
        width: 200,
        height: 260,
        resizeMode: "cover",
        borderRadius: 22,
    },
    containerTextMainImage: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },

    bgETH: {
        borderRadius: 11,
        width: 50,
    },
    bgETH2: {
        borderRadius: 11,
    },
    bgETH3: {
        position: "absolute",
        borderRadius: 11,
        bottom: 10,
        left: -2,
    },
    textETH: {
        marginTop: 2.5,
        marginLeft: 8.3,
        fontSize: 8,
        color: "white",
        fontWeight: "bold",
    },
    textETH2: {
        marginTop: 2.2,
        marginLeft: 7,
        fontSize: 8,
        color: "white",
        fontWeight: "bold",
    },
    textETH3: {
        marginTop: 2.2,
        marginLeft: 7,
        fontSize: 8,
        color: "white",
        fontWeight: "bold",
    },
    bgPlaceBid: {
        borderRadius: 10,
    },
    bgLike: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
        borderRadius: 100,
        height: 24.07,
        width: 24.07,
    },
    shadowImage: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
    },
});

export default styles;
