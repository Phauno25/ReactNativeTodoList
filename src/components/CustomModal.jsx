import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";

const CustomModal = ({ visible, onAndroidClose, item, callback }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onAndroidClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Editar Tarea:</Text>
          <Text style={styles.modalText}>{item ? item.task :""}</Text>
          <View style={styles.modalButtonPanel}>
            <Pressable
              style={[styles.modalButton, styles.buttonOnCourse]}
              onPress={() => callback("onCourse")}
            >
              <Text style={styles.textStyle}>En curso</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.buttonCompleted]}
              onPress={() => callback("completed")}
            >
              <Text style={styles.textStyle}>Completado</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle:{
    fontSize:14,
    fontWeight:700
  },
  modalButtonPanel: {
    flexDirection: "row",
  },
  modalButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 2,
  },
  buttonOnCourse: {
    backgroundColor: "#e3cf1f",
  },
  buttonCompleted: {
    backgroundColor: "#22b06c",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
