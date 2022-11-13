import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullPhoto from "./FullPhoto";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "Gallery" }} />
                <Stack.Screen name="FullPhoto" component={FullPhoto} options={{ title: "Photo" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
