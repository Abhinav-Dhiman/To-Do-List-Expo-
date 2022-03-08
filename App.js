import React, { useState } from "react";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Tasks from "./components/Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handlePress = () => {
    //console.log("test");
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
    //console.log(itemCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Tasks text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/*Write a Task Section */}
      <KeyboardAvoidingView
        behavior={
          Platform.OS === "android" || Platform.OS === "ios"
            ? "height"
            : "padding"
        }
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a Task"
          value={task}
          onChangeText={(value) => setTask(value)}
        />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EBED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 40,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 1,
    width: 250,
    marginLeft: 8,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#123",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  addText: {
    color: "white",
  },
});
