// PÁGINA RESPONSÁVEL PELO LAYOUT DA ANIMAÇÃO DE STACK E TOPBAR DO 'INDEX DE DASHBOARD' E 'SETTINGS'
import { Stack } from "expo-router";

export default function Layout() {

    return (
        <Stack>
            <Stack.Screen 
            name="dashboard" 
            options={{
                headerShown: false,
            }}
        />
        </Stack>
    )
}