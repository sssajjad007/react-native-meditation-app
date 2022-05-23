export interface IImmeditateMeditationProps {
  title: string;
  duration: number;
  poster: string;
  onPress: () => void;
}
export interface IIntroductionMeditationProps {
  loading: boolean;
}
export interface IDailyMeditationProps {
  loading: boolean;
}
export interface IExitSheetProps {
  onExitPress: () => void;
  onCancelPress: () => void;
}
export interface IIosAddToHomeProps {
  CloseModal: () => void;
}
