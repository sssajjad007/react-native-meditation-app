import * as ImagePicker from "expo-image-picker";
import { THEME } from "../theme";

function optGen(isProfile: boolean) {
  //   const opt: Options = {
  //     mediaType: "photo",
  //     cropping: true,
  //     width: isProfile ? 320 : 1024,
  //     height: isProfile ? 320 : 1720,
  //     includeExif: true,
  //     includeBase64: false,
  //     cropperTintColor: THEME.COLORS.PRIMARY.NORMAL,
  //     cropperActiveWidgetColor: THEME.COLORS.PRIMARY.NORMAL,
  //     cropperStatusBarColor: THEME.COLORS.PRIMARY.NORMAL,
  //     cropperToolbarColor: THEME.COLORS.PRIMARY.NORMAL,
  //     cropperToolbarWidgetColor: "white",
  //     freeStyleCropEnabled: !isProfile,
  //     cropperToolbarTitle: "ویرایش عکس",
  //     cropperCircleOverlay: isProfile,
  //     loadingLabelText: "در حال پردازش",
  //     forceJpg: true,
  //     cropperChooseText: "انتخاب کنید",
  //     cropperCancelText: "لغو",
  //     hideBottomControls: false,
  //     maxFiles: 20,
  //     minFiles: 1,
  //     showsSelectedCount: true,
  //     smartAlbums: [
  //       "UserLibrary",
  //       "PhotoStream",
  //       "Panoramas",
  //       "Videos",
  //       "Bursts",
  //     ],
  //     sortOrder: "desc",
  //     useFrontCamera: false,
  //     waitAnimationEnd: true,
  //     writeTempFile: true,
  //   };
  //   return opt;
}

export async function openCamera() {
  //   const isProfile = mode === "profile";
  //   const image = await ImagePicker.openCamera(optGen(isProfile));
  //   return image;
}

export async function openGallery() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
   
  });
  
  if (result.cancelled) {
    throw new Error("user cancelled picking image");
  }
  return result.uri;
}

export async function openCropper(path: string) {
  //   const isProfile = mode === "profile";
  //   const cropped = await ImagePicker.openCropper({ ...optGen(isProfile), path });
  //   return cropped;
}
