import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskListItem = ({ item, deleteTask, openModal }) => (
  <View
    key={item.id}
    style={
      item.status === "completed"
        ? [styles.task, styles.taskCompleted]
        : item.status === "onCourse"
        ? [styles.task, styles.taskOnCourse]
        : [styles.task, styles.taskPending]
    }
  >
    <Text style={styles.taskStatus}>{item.status}</Text>
    <View style={styles.taskInfo}>
      <Text style={styles.taskText}>{item.task}</Text>
      <View style={styles.taskButtons}>
        {item.status !== "completed" ? (
          <Pressable onPress={() => openModal(item)}>
            <Text style={styles.taskPress}>Editar</Text>
          </Pressable>
        ) : (
          ""
        )}
        <Pressable onPress={() => deleteTask(item.id)}>
          <Text style={styles.taskPress}>Borrar</Text>
        </Pressable>
      </View>
    </View>
  </View>
);

export default TaskListItem;

const styles = StyleSheet.create({
  task: {
    marginBottom: 12,
    borderRadius: 10,
  },
  taskInfo: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskPending: {
    backgroundColor: "#99d4d0",
  },
  taskOnCourse: {
    backgroundColor: "#e3cf1f",
  },
  taskCompleted: {
    backgroundColor: "#22b06c",
  },
  taskText: {
    flex: 2,
  },
  taskStatus: {
    color: "#fafafa",
    paddingLeft: 12,
  },
  taskButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  taskPress: {
    backgroundColor: "#59c0be",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 2,
  },
});
