import { digitsEnToFa } from "@persian-tools/persian-tools";
import React from "react";
import { View, Image } from "react-native";
import { LogoImage } from "../../../authentication/assets";
import { Caption, Subheading, THEME, Typography } from "../../../library";
import { ArrowLeftIcon } from "../../../library/Icon";
import { IImprovementCardProps } from "../../types";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";

export function ImprovementCard(props: IImprovementCardProps) {
  const { title, totalMeditationDone, totalMeditaions, poster } = props;
  function ProgressBarPercent() {
    return (totalMeditationDone / totalMeditaions) * 100;
  }
  return (
    <View style={styles.tiles}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: poster }}
          resizeMode={"contain"}
          style={styles.imageSize}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Typography
            mode={"mediumBody16"}
            style={{ color: THEME.COLORS.LABEL.PRIMARY }}
          >
            {title}
          </Typography>
          <Typography mode={"regularSub12"} style={styles.bottom}>{`${digitsEnToFa(
            totalMeditationDone
          )} درس از ${digitsEnToFa(totalMeditaions)} درس`}</Typography>
          <ProgressBar
            style={styles.bottom}
            leftPercent={ProgressBarPercent()}
          />
        </View>
        {/* <View style={styles.iconContainer}>
          <ArrowLeftIcon size={24}/>
        </View> */}
      </View>
    </View>
  );
}
