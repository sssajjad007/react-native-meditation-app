import { Platform } from "react-native";
import ImagePicker, { Options } from "react-native-image-crop-picker";
import { THEME } from "../theme";

function optGen() {
  const opt: Options = {
    mediaType: "photo",
    cropping: true,
    width: 640,
    height: 640,
    includeExif: true,
    includeBase64: false,
    cropperTintColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperActiveWidgetColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperStatusBarColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperToolbarColor: THEME.COLORS.PRIMARY.NORMAL,
    cropperToolbarWidgetColor: "white",
    freeStyleCropEnabled: false,
    cropperToolbarTitle: "ویرایش عکس",
    cropperCircleOverlay: true,
    loadingLabelText: "در حال پردازش",
    forceJpg: true,
    cropperChooseText: "انتخاب کنید",
    cropperCancelText: "لغو",
    hideBottomControls: false,
    maxFiles: 20,
    minFiles: 1,
    showsSelectedCount: true,
    smartAlbums: [
      "UserLibrary",
      "PhotoStream",
      "Panoramas",
      "Videos",
      "Bursts",
    ],
    sortOrder: "desc",
    useFrontCamera: false,
    waitAnimationEnd: true,
    writeTempFile: true,
  };
  return opt;
}
const isAndroid = Platform.OS === "android";
export async function openCamera() {
  const image = await ImagePicker.openCamera(optGen());
  return isAndroid ? image.path : image.sourceURL || ""
}

export async function openGallery() {
  const image = await ImagePicker.openPicker(optGen());
  return isAndroid ? image.path : image.sourceURL || ""

}

export async function openCropper(path: string) {
  const cropped = await ImagePicker.openCropper({ ...optGen(), path });
  return isAndroid ? cropped.path : cropped.sourceURL || ""
}
