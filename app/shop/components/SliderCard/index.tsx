import React from "react";
import { THEME, Typography } from "../../../library";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { View } from "react-native";
import { styles } from "./styles";
import { ISliderCardProps } from "../../types/components";

export function CardComponent(props: ISliderCardProps) {
  const { sku, period, price, pricePerMonth, isFeatured } = props;
  // const discountAvailable = new Date(2022, 3, 5).getTime() > Date.now();
  const toman = price / 10000;
  function featuredCard() {
    // if (discountAvailable) {
    //   return (
    //     <View style={styles.specialCard}>
    //       <View style={styles.body}>
    //         <View style={styles.cardTitleContainer}>
    //           <Typography mode={"regularSub12"} style={styles.cardTitle}>
    //             {"تا ۱۳ فروردین"}
    //           </Typography>
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: "row-reverse",
    //             alignItems: "flex-end",
    //             justifyContent: "space-between",
    //           }}
    //         >
    //           <Typography mode={"boldSubhead20"} style={styles.textStyle}>
    //             {"یکساله  "}

    //             {/* {period} */}
    //           </Typography>
    //           <Typography mode={"boldSub12"} style={{ color: "#76BEB1" }}>
    //             {"۵۰٪ تخفیف ویژه نوروز "}
    //           </Typography>
    //         </View>
    //         <Image
    //           source={assets.Eydgrass}
    //           style={{
    //             position: "absolute",
    //             width: 50,
    //             height: 43,
    //             top: 48,
    //             left: 20,
    //           }}
    //         />

    //         <Typography
    //           mode={"mediumBody14"}
    //           style={{ color: THEME.COLORS.LABEL.SECONDARY }}
    //         >
    //           {"به جای "}
    //           <Typography
    //             mode={"regularSub12"}
    //             style={{
    //               color: THEME.COLORS.LABEL.SECONDARY,
    //               textDecorationLine: "line-through",
    //             }}
    //           >
    //             {`هرماه ۱۳ هزار تومان  `}
    //           </Typography>{" "}
    //           <Typography
    //             mode={"mediumBody14"}
    //             style={{ color: THEME.COLORS.LABEL.SECONDARY }}
    //           >
    //             {"هر ماه "}
    //           </Typography>
    //           <Typography
    //             mode={"boldBody18"}
    //             style={{ color: "#76BEB1", textDecorationLine: "underline" }}
    //           >
    //             {`${digitsEnToFa(pricePerMonth)} `}
    //           </Typography>
    //           <Typography mode={"boldSub12"} style={{ color: "#76BEB1" }}>
    //             {"هزار تومان"}
    //           </Typography>
    //         </Typography>
    //       </View>
    //     </View>
    //   );
    // } else {
    return (
      <View style={styles.specialCard}>
        <View style={styles.cardTitleContainerAbsoulte}>
          <Typography mode={"regularSub12"} style={styles.cardTitle}>
            {"اشتراک پیشنهادی"}
          </Typography>
        </View>
        <View style={styles.body}>
          <View style={styles.periodContainer}>
            <Typography mode={"boldSubhead20"} style={styles.textStyle}>
              {period}
            </Typography>
            <Typography
              mode={"boldSub12"}
              style={{
                color: THEME.COLORS.LABEL.PRIMARY_ACCENT,
                paddingRight: 6,
              }}
            >
              {"(به صرفه و اقتصادی )"}
            </Typography>
          </View>
          <View style={styles.perMonthContainer}>
            <Typography
              mode={"mediumBody14"}
              style={styles.price}
            >{` برای هر ماه `}</Typography>
            <Typography
              style={{ color: "#76BEB1", textDecorationLine: "underline" }}
              mode={"boldBody18"}
            >{`${digitsEnToFa(pricePerMonth)}`}</Typography>
            <Typography
              mode={"boldSub12"}
              style={{ color: "#76BEB1" }}
            >{`هزار تومان`}</Typography>
          </View>
          <Typography
            mode={"regularSub12"}
            style={{
              color: THEME.COLORS.LABEL.SECONDARY,
            }}
          >
            {`قیمت کل: ${digitsEnToFa(toman)} هزار تومان `}
          </Typography>
        </View>
      </View>
    );
  }
  return isFeatured ? (
    featuredCard()
  ) : (
    <View style={styles.card}>
      <View style={styles.body}>
        <Typography mode={"boldSubhead20"} style={styles.descriptionStyle}>
          {period}
        </Typography>
        <View style={styles.perMonthContainer}>
          <Typography
            mode={"mediumBody14"}
            style={styles.price}
          >{` برای هر ماه `}</Typography>
          <Typography
            style={{ color: "#76BEB1", textDecorationLine: "underline" }}
            mode={"boldBody18"}
          >{`${digitsEnToFa(pricePerMonth)}`}</Typography>
          <Typography
            mode={"boldSub12"}
            style={{ color: "#76BEB1" }}
          >{`هزار تومان`}</Typography>
        </View>
        <View>
          <Typography
            mode={"regularSub12"}
            style={{ color: THEME.COLORS.LABEL.SECONDARY }}
          >{`قیمت کل: ${digitsEnToFa(toman)} هزار تومان `}</Typography>
        </View>
      </View>
    </View>
  );
}
