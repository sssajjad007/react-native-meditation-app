export interface ITileComponentProps {
  title: string;
  poster: string;
  onPress: () => void;
  section: number;
}
export interface IMeditationCardProps {
  title: string;
  description?: string;
  onPress: () => void;
  duration: number;
  coursePremium: boolean;
}
