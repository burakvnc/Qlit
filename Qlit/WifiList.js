import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import { request, PERMISSIONS } from 'react-native-permissions';

const WifiList = () => {
  const [wifiList, setWifiList] = useState([]);

  useEffect(() => {
    const getWifiList = async () => {
      try {
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        await WifiManager.setEnabled(true);
        const wifiList = await WifiManager.loadWifiList();
        console.log('Wi-Fi network list:', wifiList);
        setWifiList(wifiList);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    getWifiList();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Name: {item.SSID}</Text>
      <Text>BSSID: {item.BSSID}</Text>
      <Text>Signal Strength: {item.level}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={wifiList}
        renderItem={renderItem}
        keyExtractor={(item) => item.BSSID}
      />
    </View>
  );
};

export default WifiList;
