import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";


const hemocentros = [
    { id: 1, latitude: -23.55052, longitude: -46.633308, nome: "Hemocentro SP" },
    { id: 2, latitude: -22.906847, longitude: -43.172897, nome: "Hemocentro RJ" },
    { id: 3, latitude: -19.916681, longitude: -43.934493, nome: "Hemocentro BH" },
  ];
  

const Hemocenter = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>
        Banco de Sangue
      </Text>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Compartilhe o aplicativo, e incentive outros doadores!
      </Text>
      
      {[
        { name: "Facebook", icon: "facebook" },
        { name: "Twitter", icon: "twitter" },
        { name: "LinkedIn", icon: "linkedin" },
        { name: "Email", icon: "envelope" },
      ].map((social, index) => (
        <TouchableOpacity
          key={index}
          style={{ flexDirection: "row", alignItems: "center", padding: 15, borderWidth: 1, borderRadius: 5, margin: 5 }}
        >
          <FontAwesome name={social.icon} size={20} style={{ marginRight: 10 }} />
          <Text>{social.name}</Text>
        </TouchableOpacity>
      ))}
      
      <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>
        Encontre o Hemocentro mais próximo de você
      </Text>
      
      <MapView
        style={{ height: 400, marginHorizontal: 10, borderRadius: 10 }}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {hemocentros.map((hemocentro) => (
          <Marker
            key={hemocentro.id}
            coordinate={{ latitude: hemocentro.latitude, longitude: hemocentro.longitude }}
            title={hemocentro.nome}
          />
        ))}
      </MapView>
    </ScrollView>
    )
}
export default Hemocenter;