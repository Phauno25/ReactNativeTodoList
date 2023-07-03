import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ data, deleteTask, openModal }) => {
  return (
    <View style={styles.taskArea}>
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => TaskListItem({ item, deleteTask, openModal })}
      ></FlatList>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskArea: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  flatList: {
    width: "80%",
  },
});
