export interface ICardProps {
  objectId: string;
  title: string;
  session: string;
  onPress?: (
    objectId: string,
    title: string,
    url: string,
    courseId: string | undefined
  ) => void;
  url: string;
  courseId: string | undefined;
  coursePremium: boolean;
}
