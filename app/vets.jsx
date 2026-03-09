import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const COLORS = { bg: '#0D1B2A', card: '#152232', accent: '#F4A261', accentGreen: '#52B788', accentBlue: '#4CC9F0', accentRed: '#E63946', text: '#EAF0FB', muted: '#7A91A8', border: '#243447' };

const VETS = [
  { id: '1', name: 'Dr. Ayşe Kaya', clinic: 'PetVet Kliniği', address: 'Kadıköy, İstanbul', phone: '02163456789', rating: 4.9, reviews: 128, speciality: 'Kedi & Köpek', distance: '1.2 km', avatar: '👩‍⚕️', available: true, slots: ['09:00','10:30','14:00','15:30'], color: '#F4A261' },
  { id: '2', name: 'Dr. Mehmet Demir', clinic: 'ZooSağlık Hastanesi', address: 'Üsküdar, İstanbul', phone: '02164218800', rating: 4.7, reviews: 94, speciality: 'Egzotik Hayvanlar', distance: '2.8 km', avatar: '👨‍⚕️', available: true, slots: ['11:00','13:00','16:00'], color: '#52B788' },
  { id: '3', name: 'Dr. Zeynep Arslan', clinic: 'HayvanSever Kliniği', address: 'Beşiktaş, İstanbul', phone: '02122593344', rating: 4.8, reviews: 211, speciality: 'Genel Veteriner', distance: '4.1 km', avatar: '👩‍⚕️', available: false, slots: [], color: '#4CC9F0' },
];

const PETS = ['Pamuk', 'Karamel', 'Boncuk'];

export default function VetsScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [booking, setBooking] = useState({ pet: null, slot: null, type: '' });

  const callVet = (phone) => Linking.openURL(`tel:${phone}`);

  const confirmBooking = () => {
    if (!booking.pet || !booking.slot) { Alert.alert('Eksik', 'Lütfen dost ve saat seçin.'); return; }
    Alert.alert('✅ Randevu Alındı!', `${booking.pet} için ${booking.slot} saatinde randevunuz oluşturuldu.`, [{ text: 'Tamam', onPress: () => { setSelected(null); setBooking({ pet: null, slot: null, type: '' }); router.push('/appointments'); } }]);
  };

  if (selected) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 16 }}>
            <TouchableOpacity onPress={() => setSelected(null)}><Text style={{ color: COLORS.accent, fontWeight: '800', fontSize: 14, marginBottom: 16 }}>← Geri</Text></TouchableOpacity>
            <View style={{ backgroundColor: COLORS.card, borderRadius: 20, padding: 16, marginBottom: 16, flexDirection: 'row', gap: 14, borderWidth: 1.5, borderColor: selected.color + '60​​​​​​​​​​​​​​​​
