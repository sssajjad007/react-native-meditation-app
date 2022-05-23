import React from "react";
import { View } from "react-native";
import { Button, SelectButton, THEME, Typography } from "../../../library";
import { styles } from "./styles";
import { IGenderModalProps } from "./types";
export function GenderModal(props: IGenderModalProps) {
  const { onPress, gender, setGender } = props;
  return (
    <View style={styles.container}>
      <View style={styles.gender}>
        <View style={styles.titleContainer}>
          <Typography mode={"mediumBody14"} style={styles.toTop}>
            {"انتخاب جنسیت"}
          </Typography>
          <View style={styles.line} />
        </View>
        <View style={styles.radioContainer}>
          <SelectButton
            mode={"radio"}
            selected={gender === "female" ? true : false}
            size={20}
            onPress={() => {
              setGender("female");
            }}
          >
            <Typography
              mode={"mediumBody14"}
              style={{ color: THEME.COLORS.GREY.ICON }}
            >
              {"زن"}
            </Typography>
          </SelectButton>
          <SelectButton
            mode={"radio"}
            selected={gender === "male" ? true : false}
            size={20}
            onPress={() => {
              setGender("male");
            }}
          >
            <Typography
              mode={"mediumBody14"}
              style={{ color: THEME.COLORS.GREY.ICON }}
            >
              {"مرد"}
            </Typography>
          </SelectButton>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"big"}
            onPress={onPress}
          >
            {"تایید"}
          </Button>
        </View>
      </View>
    </View>
  );
}
