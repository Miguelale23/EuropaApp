import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerShown:false }}>
       <Tabs.Screen
        name="eventos_tab"
        options = {{
            title: "Eventos",
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-book" color={color}/>,
        }}
      /> 
      <Tabs.Screen
        name="main_tab"
        options={{
          title: 'Novedades',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="decanatos_tab"
        options={{
          title: 'Decanatos',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}