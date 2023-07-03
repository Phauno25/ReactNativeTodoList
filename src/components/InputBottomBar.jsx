import { View, Text ,StyleSheet,TextInput,Pressable} from "react-native";
import React from "react";

const InputBottomBar = ({value,onchangeText,buttonText,onPressButton}) => {
  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.textInput}
        onChangeText={onchangeText}
        value={value}
        placeholder="Nueva tarea..."
      />
      <Pressable style={styles.pressable} onPress={onPressButton}>
        <Text style={styles.pressableText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    backgroundColor: "#D6BFBF",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 3,
    borderTopColor: "#dbb99a",
  },
  textInput: {
    borderBottomColor: "#39157d",
    borderBottomWidth: 3,
    marginVertical: 12,
    width: "80%",
  },
  pressable: {
    width: "80%",
    backgroundColor: "#39157d",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
  },
  pressableText: {
    color: "white",
    textAlign: "center",
  },
});
export default InputBottomBar;
