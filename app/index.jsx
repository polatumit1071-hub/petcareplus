import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const COLORS = { bg: '#0D1B2A', card: '#152232', accent: '#F4A261', accentGreen: '#52B788', accentBlue: '#4CC9F0', accentRed: '#E63946', text: '#EAF0FB', muted: '#7A91A8', border: '#243447' };

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={{ padding: 20, backgroundColor: COLORS.card, borderBottomColor: COLORS.border, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 11, color: COLORS.muted, fontWeight: '700', letterSpacing: 2 }}>🐾 PetCare+</Text>
        <Text style={{ fontSize: 24, fontWeight: '900', color: COLORS.text }}>Ana Sayfa</Text>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
            {[{ label: 'Dostum', value: '3', icon: '🐾', color: COLORS.accent }, { label: 'Gecikmiş', value: '2', icon: '⚠️', color: COLORS.accentRed }, { label: 'Randevu', value: '2', icon: '📅', color: COLORS.accentGreen }].map((s, i) => (
              <View key={i} style={{ flex: 1, backgroundColor: COLORS.card, borderRadius: 16, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border }}>
                <Text style={{ fontSize: 22 }}>{s.icon}</Text>
                <Text style={{ fontWeight: '900', fontSize: 22, color: s.color }}>{s.value}</Text>
                <Text style={{ fontSize: 10, color: COLORS.muted, fontWeight: '700' }}>{s.label}</Text>
              </View>
            ))}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {[{ icon: '🏥', label: 'Veteriner Bul', color: COLORS.accentGreen, route: '/vets' }, { icon: '📅', label: 'Randevu Al', color: COLORS.accentBlue, route: '/vets' }, { icon: '🐾', label: 'Dostlarım', color: COLORS.accent, route: '/pets' }, { icon: '💉', label: 'Aşı Takibi', color: '#C77DFF', route: '/pets' }].map((item, i) => (
              <TouchableOpacity key={i} style={{ width: '47%', backgroundColor: COLORS.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: COLORS.border }} onPress={() => router.push(item.route)} activeOpacity={0.8}>
                <Text style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</Text>
                <Text style={{ fontWeight: '800', fontSize: 13, color: item.color }}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
