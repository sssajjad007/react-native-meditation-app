import React from "react";
import { View } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { BoldExclamationIcon, Button, Typography } from "../../../library";

import { styles } from "./styles";
import { IExitSheetProps } from "../../types/components";
export function ExitSheetComponent(props: IExitSheetProps) {
  const { onCancelPress, onExitPress } = props;
  return (
    <BottomSheetView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={styles.bottomSheetHeader}>
        <View style={styles.bottomSheetTitle}>
          <BoldExclamationIcon size={32} />
          <Typography mode={"mediumBody18"} style={{ paddingRight: 8 }}>
            {"پیام"}
          </Typography>
        </View>
        <View style={styles.lineHorizontal} />
      </View>
      <View
        style={{
          width: "90%",
        }}
      >
        <Typography mode={"mediumBody18"} style={{ paddingVertical: 14 }}>
          {"آیا میخواهید از برنامه خارج شوید ؟"}
        </Typography>
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            size={"xMedium"}
            rippleColor={"lightGrey"}
            onPress={onCancelPress}
          >
            {"خیر"}
          </Button>
          <Button
            mode={"outlined"}
            size={"xSmall"}
            rippleColor={"lightGrey"}
            onPress={onExitPress}
          >
            {"بله"}
          </Button>
        </View>
      </View>
    </BottomSheetView>
  );
}
