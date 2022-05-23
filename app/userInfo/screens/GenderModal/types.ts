export interface IGenderModalProps {
  onPress: () => any;
  gender: "male" | "female" | null;
  setGender: (value: "male" | "female" | null) => void;
}
