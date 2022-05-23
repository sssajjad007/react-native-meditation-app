import React from "react";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { THEME } from "../../../library";
import { styles } from "./styles";

import { CardComponent } from "../SliderCard";
import { ICarouselProps } from "../../types/components";

export function CarouselComponent(props: ICarouselProps) {
  const { data, setActiveItem, dataLoaded } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  function renderItem({ item }: any) {
    return (
      <View
        style={{
          width: 294,
          height: 180,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
  function PaginationComponent() {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainerStyles}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
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
    <View style={styles.sliderContainer}>
      <View style={styles.carouselContainer}>
        <Carousel
          activeSlideAlignment={"start"}
          layout={"default"}
          data={data}
          sliderWidth={widthPercentageToDP(100)}
          itemWidth={294}
          renderItem={renderItem}
          sliderHeight={320}
          itemHeight={180}
          useScrollView
          onSnapToItem={(index) => {
            setActiveIndex(index);
            setActiveItem(data[index]);
          }}
        />
      </View>
      <View style={styles.paginationContainer}>{PaginationComponent()}</View>
    </View>
  );
}
