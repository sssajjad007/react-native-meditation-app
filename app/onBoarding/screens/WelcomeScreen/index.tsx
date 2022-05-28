import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { AuthImage } from "../../../authentication/assets";
import { Button, Subheading, Title } from "../../../library";
import { styles } from "./styles";

export function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={AuthImage}
          resizeMode={"center"}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Subheading
          style={styles.color}
        >{`${name}به دنج خوش اومدی `}</Subheading>
        <Title style={styles.justify}>{"بیا با هم مدیتیشن کنیم!"}</Title>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"big"}
          rippleColor={"lightGrey"}
          onPress={() => {
            navigation.push("StartMeditation");
          }}
        >
          {"شروع کنیم"}
        </Button>
      </View>
    </View>
  );
}
