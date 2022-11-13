import { useEffect } from "react";
import {
    FlatList,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPhotos } from "../redux/selector";
import { getPhotos } from "../redux/operations";

const windowWidth = Dimensions.get("window").width;
const imageSize = (windowWidth - 30) / 2;
const gap = 10;

const styles = StyleSheet.create({
    container: {
        marginVertical: -(gap / 2),
        marginHorizontal: -(gap / 2),
        alignSelf: "center",
    },
    photo: {
        width: imageSize,
        height: imageSize,
        marginVertical: gap / 2,
        marginHorizontal: gap / 2,
        backgroundColor: "#52B596",
    },
    title: {
        position: "absolute",
        bottom: 5,
        width: imageSize,
        height: 22,
        marginHorizontal: gap / 2,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
});

export default function Home({ navigation }) {
    const isLoading = useSelector(selectIsLoading);
    const photos = useSelector(selectPhotos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    if (isLoading) {
        return <ActivityIndicator size="large" style={{ flex: 1, alignSelf: "center" }} />;
    }

    return (
        <FlatList
            data={photos}
            horizontal={false}
            numColumns={2}
            contentContainerStyle={styles.container}
            refreshControl={<RefreshControl onRefresh={() => dispatch(getPhotos())} />}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("FullPhoto", { photoURL: item.urls.regular })}>
                    <Image style={styles.photo} source={{ uri: item.urls.small }} key={item.id} />
                    <Text style={styles.title}>{item.user.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
