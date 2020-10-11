import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      
      <View style={styles.item}>
      <MaterialIcons name="delete" size={18} color="black"/>
      <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: "#fff1",
    padding: 20,
    marginTop: 24,
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    marginLeft: 10
  }
});
