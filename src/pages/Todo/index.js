import React, { useEffect, useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  AsyncStorage,
} from "react-native";

import styles from "./style";

import TaskList from "../../components/TaskList";

const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);

export default function TodoList() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAdd() {
    if (input === "") return;

    setTasks([...tasks, input]);
    setOpen(false);
    setInput("");
  }

  useEffect(() => {
    async function loadTasks() {
      const tasksStorage = await AsyncStorage.getItem("tasks");

      if (tasksStorage) {
        setTasks(JSON.parse(tasksStorage));
      }
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function updateTaks() {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    }

    updateTaks();
  }, [tasks]);

  const handleDelete = useCallback(
    (currentTask) => {
      const newTasks = tasks.filter((item) => item !== currentTask);

      setTasks(newTasks);
    },
    [tasks]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#171d31" />

      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tasks}
        keyExtractor={(tasks) => tasks}
        renderItem={({ item }) => (
          <TaskList task={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity>
              <Ionicons
                onPress={() => setOpen(false)}
                style={{ marginHorizontal: 5 }}
                name="md-arrow-back"
                size={40}
                color="#FFF"
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nova tarefa</Text>
          </View>

          <Animatable.View animation="fadeInUp" useNativeDriver>
            <TextInput
              autoComplete={false}
              multiline={true}
              placeholderTextColor="#747474"
              placeholder="O que preciso fazer hoje?"
              style={styles.input}
              value={input}
              onChangeText={(text) => setInput(text)}
            />

            <TouchableOpacity style={styles.handleTask} onPress={handleAdd}>
              <Text style={styles.handleTaskText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>

      <AnimatedButton
        onPress={() => setOpen(true)}
        animatio
        n="bounceInUp"
        duration={1500}
        useNativeDriver
        style={styles.button}
      >
        <Ionicons name="ios-add" size={30} color="#fff" />
      </AnimatedButton>
    </SafeAreaView>
  );
}
