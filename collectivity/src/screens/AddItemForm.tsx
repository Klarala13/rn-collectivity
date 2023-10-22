import Container from "../components/Container";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "../hooks";
import { Input, Button } from "../components";
import { View } from "react-native";

const AddItemForm = () => {
  const { assets, colors, sizes } = useTheme();
  //Should make call to backend to add that item to DB
  //If you want to share the item, you should be able to choose if it´s for one day, one week or one month.

  const postItem = () => {
    console.log("post item");
  };

  return (
    <Container>
      <Input
        autoCapitalize="none"
        marginBottom={sizes.m}
        label="Item name"
        placeholder="Item name"
      />
      <Input
        autoCapitalize="none"
        marginBottom={sizes.m}
        label="Description"
        placeholder="Description"
      />
      <Input
        autoCapitalize="none"
        marginBottom={sizes.m}
        label="Location"
        placeholder="Location"
      />
      <Input
        autoCapitalize="none"
        marginBottom={sizes.m}
        label="Category"
        placeholder="Category"
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Button
          bgColor="#7925C7"
          color="#fff"
          hoverBgColor="#CCCCCC"
          onPress={() => postItem()}
          title="Share item"
        />
      </View>
    </Container>
  );
};

export default AddItemForm;
