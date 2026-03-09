import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const COLORS = {
  bg: '#0D1B2A', card: '#152232', accent: '#F4A261',
  muted: '#7A91A8', border: '#243447', text: '#EAF0FB',
};

function TabIcon({ emoji, label, focused }) {
  return (
    <View style={{ alignItems: 'center', paddingTop: 6 }}>
      <Text style={{ fontSize: focused ? 26 : 22, opacity: focused ? 1 : 0.45 }}>{emoji}</Text>
      <Text style={{ fontSize: 10, color: focused ? COLORS.accent : COLORS.muted, fontWeight: focused ? '800' : '600', marginTop: 3 }}>{label}</Text>
      {focused && <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: COLORS.accent, marginTop: 2 }} />}
    </View>
  );
}

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'rgba(13,27,42,0.97)', borderTopColor: COLORS.border, borderTopWidth: 1, height: 80, paddingBottom: 10 }, tabBarShowLabel: false }}>
      <Tabs.Screen name="index" options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" label="Ana Sayfa" focused={focused} /> }} />
      <Tabs.Screen name="pets" options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🐾" label="Dostlarım" focused={focused} /> }} />
      <Tabs.Screen name="vets" options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="🏥" label="Veteriner" focused={focused} /> }} />
      <Tabs.Screen name="appointments" options={{ tabBarIcon: ({ focused }) => <TabIcon emoji="📅" label="Randevu" focused={focused} /> }} />
    </Tabs>
  );
}
