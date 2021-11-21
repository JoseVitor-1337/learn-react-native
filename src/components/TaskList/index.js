import React, { memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./style";

function TaskList({ task, handleDelete }) {
  return (
    <Animatable.View
      animation="bounceIn"
      useNativeDriver
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => handleDelete(task)}
        style={styles.button}
      >
        <Ionicons name="md-checkmark-circle" size={30} color="#121212" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{task}</Text>
      </View>
    </Animatable.View>
  );
}

export default memo(TaskList);
