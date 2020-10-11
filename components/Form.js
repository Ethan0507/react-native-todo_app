import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Form({ submitHandler }) {
  const [input, setInput] = useState("");

  const changeHandler = (val) => {
    setInput(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add todo..."
        onChangeText={changeHandler}
        style={styles.input}
        defaultValue={input}
      />
     <Button
        title="add todo"
        color='coral'
        onPress={() => submitHandler(input)}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
  },
});
