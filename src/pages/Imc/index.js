import React, { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function CalculateIMC() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  async function handleSubmit() {
    const formatHeight = height / 100;

    const imc = weight / (formatHeight * formatHeight);

    if (imc < 18.6) {
      alert("Você está abaixo do peso! " + imc.toFixed(2));
    } else if (imc > 24.9) {
      alert("Levemente acima do peso! " + imc.toFixed(2));
    } else {
      alert("Peso ideal " + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={weight}
        placeholderTextColor="#FFF"
        placeholder="Peso (kg)"
        onChangeText={(newWeight) => setWeight(newWeight)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={height}
        placeholderTextColor="#FFF"
        placeholder="Altura (cm)"
        onChangeText={(newHeight) => setHeight(newHeight)}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
