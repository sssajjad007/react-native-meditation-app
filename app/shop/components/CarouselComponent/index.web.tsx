import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { THEME } from "../../../library";
import { styles } from "./styles";

import { CardComponent } from "../SliderCard";
import { ICarouselProps } from "../../types/components";
import Swiper from "react-native-web-swiper";

export function CarouselComponent(props: ICarouselProps) {
  const { data, setActiveItem, dataLoaded } = props;
  // const [activeIndex, setActiveIndex] = useState(0);

  function renderCard() {
    const result: JSX.Element[] = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[3 - index]; // reverse index
      result.push(renderItem(element));
    }
    return result;
  }

  function renderItem(item: any) {
    return (
      <View style={styles.cardContainer}>
        <CardComponent
          sku={item?.sku}
          period={item?.name}
          price={item?.price}
          pricePerMonth={item?.pricePerMonth}
          isFeatured={item?.isFeatured}
        />
      </View>
    );
  }
  if (!dataLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={THEME.COLORS.PRIMARY.NORMAL} />
      </View>
    );
  }
  return (
    <View style={styles.carouselContainer}>
      {/* <Carousel
          // style={{transform: [{ scaleX: -1 }]}}
          width={widthPercentageToDP(100)}
          height={200}
          loop
          data={data}
          snapEnabled
          pagingEnabled
          // mode={"horizontal-stack"}
          // sliderWidth={widthPercentageToDP(100)}
          // itemWidth={294}
          renderItem={renderItem}
          // sliderHeight={320}
          // itemHeight={180}
          // useScrollView

          onSnapToItem={(index) => {
            setActiveIndex(index);
            setActiveItem(data[index]);
          }}
        /> */}
      <Swiper
        onIndexChanged={(index) => {
          setActiveItem(data[3 - index]); //reverse index
        }}
        springConfig={{ speed: 11 }}
        minDistanceForAction={0.15}
        from={3}
        controlsProps={{
          prevPos: "left",
          nextPos: "right",
          nextTitle: "",
          dotsWrapperStyle: { marginTop: 32 },
          dotProps: {
            containerStyle: { width: 18 },
            badgeStyle: { backgroundColor: THEME.COLORS.GREY.DIVIDER },
          },

          dotActiveStyle: {
            transform: [{ scaleX: 2.2 }],
            width: 9,
            height: 6,
            borderRadius: 2,
            backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
          },
          //@ts-ignore
          PrevComponent: () => <Text>{""}</Text>,
        }}
      >
        {renderCard()}
      </Swiper>
    </View>
  );
}
