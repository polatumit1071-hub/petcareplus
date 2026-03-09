import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const COLORS = { bg: '#0D1B2A', card: '#152232', accent: '#F4A261', accentGreen: '#52B788', accentRed: '#E63946', text: '#EAF0FB', muted: '#7A91A8', border: '#243447' };

const PETS = [
  { id: '1', name: 'Pamuk', type: 'Kedi', breed: 'Van Kedisi', age: '3 yaş', avatar: '🐱', color: '#F4A261', vaccines: [{ name: 'Kuduz', nextDate: '2025-03-10', status: 'overdue' }, { name: 'Karma Aşı', nextDate: '2025-06-15', status: 'upcoming' }] },
  { id: '2', name: 'Karamel', type: 'Köpek', breed: 'Golden Retriever', age: '2 yaş', avatar: '🐶', color: '#52B788', vaccines: [{ name: 'Kuduz', nextDate: '2026-01-15', status: 'ok' }] },
  { id: '3', name: 'Boncuk', type: 'Tavşan', breed: 'Holland Lop', age: '1 yaş', avatar: '🐰', color: '#4CC9F0', vaccines: [{ name: 'Myxomatosis', nextDate: '2025-09-01', status: 'upcoming' }] },
];

const STATUS = { overdue: { label: 'Gecikti', color: '#E63946' }, upcoming: { label: 'Yaklaşıyor', color: '#F4A261' }, ok: { label: 'Güncel', color: '#52B788' } };

export default function PetsScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
        <ScrollView>
          <View style={{ padding: 20, backgroundColor: selected.color + '18' }}>
            <TouchableOpacity onPress={() => setSelected(null)}>
              <Text style={{ color: COLORS.accent, fontWeight: '800', fontSize: 14, marginBottom: 16 }}>← Geri</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <View style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: selected.color + '25', borderWidth: 3, borderColor: selected.color, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>{selected.avatar}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: '900', fontSize: 22, color: COLORS.text }}>{selected.name}</Text>
                <Text style={{ color: selected.color, fontWeight: '700' }}>{selected.type} • {selected.breed}</Text>
                <Text style={{ color: COLORS.muted, fontSize: 12 }}>{selected.age}</Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: '800', fontSize: 16, color: COLORS.text, marginBottom: 12 }}>💉 Aşı Takvimi</Text>
            {selected.vaccines.map((v, i) => {
              const cfg = STATUS[v.status];
              return (
                <View key={i} style={{ backgroundColor: COLORS.card, borderRadius: 16, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.border }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '800', fontSize: 14, color: COLORS.text }}>{v.name}</Text>
                    <Text style={{ fontSize: 11, color: COLORS.muted, marginTop: 4 }}>Sonraki: <Text style={{ color: cfg.color, fontWeight: '700' }}>{v.nextDate}</Text></Text>
                  </View>
                  <View style={{ backgroundColor: cfg.color + '25', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 }}>
                    <Text style={{ color: cfg.color, fontSize: 11, fontWeight: '800' }}>{cfg.label}</Text>
                  </View>
                </View>
              );
            })}
            <TouchableOpacity style={{ marginTop: 16, backgroundColor: COLORS.accentGreen, borderRadius: 14, padding: 16, alignItems: 'center' }} onPress={() => router.push('/vets')}>
              <Text style={{ color: '#fff', fontWeight: '900', fontSize: 15 }}>🏥 Veteriner Randevusu Al</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={{ padding: 20, backgroundColor: COLORS.card, borderBottomColor: COLORS.border, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: '900', color: COLORS.text }}>Dost​​​​​​​​​​​​​​​​
