import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const COLORS = { bg: '#0D1B2A', card: '#152232', accent: '#F4A261', accentGreen: '#52B788', accentBlue: '#4CC9F0', accentRed: '#E63946', text: '#EAF0FB', muted: '#7A91A8', border: '#243447' };

const INITIAL = [
  { id: '1', vetName: 'Dr. Ayşe Kaya', clinic: 'PetVet Kliniği', petName: 'Pamuk', petAvatar: '🐱', displayDate: '12 Mart 2026', time: '10:30', type: 'Kuduz Aşısı', status: 'confirmed', phone: '02163456789' },
  { id: '2', vetName: 'Dr. Mehmet Demir', clinic: 'ZooSağlık Hastanesi', petName: 'Boncuk', petAvatar: '🐰', displayDate: '20 Mart 2026', time: '13:00', type: 'VHD Aşısı', status: 'pending', phone: '02164218800' },
];

export default function AppointmentsScreen() {
  const router = useRouter();
  const [appointments, setAppointments] = useState(INITIAL);

  const cancel = (id) => {
    Alert.alert('Randevu İptal', 'İptal etmek istediğinizden emin misiniz?', [
      { text: 'Hayır', style: 'cancel' },
      { text: 'Evet', style: 'destructive', onPress: () => setAppointments(prev => prev.filter(a => a.id !== id)) },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={{ padding: 20, backgroundColor: COLORS.card, borderBottomColor: COLORS.border, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: '900', color: COLORS.text }}>Randevularım</Text>
        <Text style={{ fontSize: 12, color: COLORS.muted }}>{appointments.length} aktif randevu</Text>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          {appointments.length === 0 ? (
            <View style={{ backgroundColor: COLORS.card, borderRadius: 24, padding: 36, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border }}>
              <Text style={{ fontSize: 60, marginBottom: 16 }}>📅</Text>
              <Text style={{ fontWeight: '900', fontSize: 18, color: COLORS.text }}>Henüz randevunuz yok</Text>
              <TouchableOpacity style={{ marginTop: 16, backgroundColor: COLORS.accent, borderRadius: 14, paddingHorizontal: 24, paddingVertical: 12 }} onPress={() => router.push('/vets')}>
                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 14 }}>Veteriner Bul 🏥</Text>
              </TouchableOpacity>
            </View>
          ) : (
            appointments.map((appt) => (
              <View key={appt.id} style={{ backgroundColor: COLORS.card, borderRadius: 20, padding: 16, marginBottom: 14, borderWidth: 1.5, borderColor: appt.status === 'confirmed' ? 'rgba(82,183,136,0.4)' : 'rgba(244,162,97,0.3)' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <View>
                    <Text style={{ fontWeight: '900', fontSize: 17, color: COLORS.text }}>{appt.petAvatar} {appt.petName}</Text>
                    <Text style={{ color: COLORS.accent, fontWeight: '700', fontSize: 13, marginTop: 2 }}>{appt.type}</Text>
                  </View>
                  <View style={{ backgroundColor: appt.status === 'confirmed' ? 'rgba(82,183,136,0.15)' : 'rgba(244,162,97,0.15)', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 6 }}>
                    <Text style={{ color: appt.status === 'confirmed' ? COLORS.accentGreen : COLORS.accent, fontSize: 11, fontWeight: '800' }}>
                      {appt.status === 'confirmed' ? '✅ Onaylı' : '⏳ Bekliyor'}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 12 }}>
                  <View style={{ flex: 1, backgroundColor: '#1C2E42', borderRadius: 12, padding: 10 }}>
                    <Text style={{ fontSize: 9, color: COLORS.muted, fontWeight: '700' }}>VETERİNER</Text>
                    <Text style={{ fontSize: 13, fontWeight: '800', color: COLORS.text, marginTop: 3 }}>{appt.vetName}</Text>
                    <Text style={{ fontSize: 11, color: COLORS.muted }}>{appt.clinic}</Text>
                  </View>
                  <View style={{ flex: 1, backgroundColor: '#1C2E42', borderRadius: 12, padding: 10 }}>
                    <Text style={{ fontSize: 9, color: COLORS.muted, fontWeight: '700' }}>TARİH & SAAT</Text>
                    <Text style={{ fontSize: 13, fontWeight: '800', color: COLORS.text, marginTop: 3 }}>{appt.displayDate}</Text>
                    <Text style={{ fontSize: 11, color: COLORS.accentBlue, fontWeight: '700' }}>{appt.time}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(230,57,70,0.1)', borderRadius: 12, padding: 10, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(230,57,70,0.3)' }} onPress={() => cancel(appt.id)}>
                    <Text style={{ color: COLORS.accentRed, fontWeight: '800', fontSize: 12 }}>İptal Et</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 2, backgroundColor: '#1C2E42', borderRadius: 12, padding: 10, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(76,201,240,0.3)' }} onPress={() => Linking.openURL(`tel:${appt.phone}`)}>
                    <Text style={{ color: COLORS.accentBlue, fontWeight: '800', fontSize: 12 }}>📞 Kliniği Ara</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
