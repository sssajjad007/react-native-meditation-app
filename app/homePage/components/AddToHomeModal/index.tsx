import { View, Text } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { styles } from "./styles";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomBackdrop } from "../../../library";
import { IosAddToHome } from "../IosAddToHome";

export function AddToHomeModal() {
  const snapPointsModal = useMemo(() => [150, 180], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const closeModal = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPointsModal}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={250}
        style={styles.modal}
        index={1}
        enablePanDownToClose
      >
        <IosAddToHome CloseModal={closeModal} />
      </BottomSheetModal>
    </View>
  );
}
