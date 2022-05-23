export interface IFavCardProps {
  title: string;
  description: string;
  onPress?: (objectId: string, title: string, url: string) => void;
  url: string;
  objectId: string;
  unLikePress: (value: string) => any;
}
