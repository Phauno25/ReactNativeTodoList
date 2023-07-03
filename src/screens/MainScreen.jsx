import { StyleSheet, Text, View, Keyboard } from "react-native";
import React, { useState } from "react";
import InputBottomBar from "../components/InputBottomBar";
import CustomModal from "../components/CustomModal";
import TaskList from "../components/Tasks/TaskList";

const defaultList = [
  { id: 1688341312071, status: "pending", task: "Comprar Mate." },
  { id: 1688341321720, status: "pending", task: "Comprar Café" },
  { id: 1688341328101, status: "pending", task: "Comprar Harina" },
  { id: 1688341334222, status: "pending", task: "Comprar Palmitos" },
  { id: 1688341340255, status: "pending", task: "Comprar Yerba" },
  { id: 1688341346804, status: "pending", task: "Comprar Mermelada" },
  { id: 1688341352903, status: "pending", task: "Comprar Cacao" },
  { id: 1688341377936, status: "pending", task: "Comprar Picadillo" },
];

const MainScreen = () => {
  const [list, setList] = useState(defaultList);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({});

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), task: input, status: "pending" };
      setList([...list, newTask]);
      setInput("");
      Keyboard.dismiss();
    }
  };
  const editTask = (value) => {
    const taskIndex = list.findIndex((task) => task.id === taskActive.id);
    const listCopy = list;
    listCopy[taskIndex] = {
      id: taskActive.id,
      task: taskActive.task,
      status: value,
    };
    setList(listCopy);
    setModalVisible(!modalVisible);
  };
  const deleteTask = (id) => {
    const newList = list.filter((itemList) => itemList.id !== id);
    setList(newList);
  };
  const openModal = (task) => {
    console.log(task);
    setTaskActive(task);
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de tareas</Text>
        <TaskList data={list} deleteTask={deleteTask} openModal={openModal} />
        <InputBottomBar
          value={input}
          onchangeText={setInput}
          buttonText={"AGREGAR TAREA"}
          onPressButton={addTask}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        item={taskActive}
        onAndroidClose={() => setModalVisible(false)}
        callback={editTask}
      />
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efd4d4",
    paddingTop: 36,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 12,
  },
});
