import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    width: "100%",
    height: "100%",
});

export default function FullPhoto({ route }) {
    const { photoURL } = route.params;

    return <Image style={styles} source={{ uri: photoURL }} />;
}
