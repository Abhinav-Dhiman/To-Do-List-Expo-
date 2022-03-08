import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tasks = (props) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var random_color = "#" + randomColor;
  return (
    <View style={[styles.item, { backgroundColor: random_color }]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    color: "white",
    fontStyle: "normal",
    fontWeight: "900",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tasks;
