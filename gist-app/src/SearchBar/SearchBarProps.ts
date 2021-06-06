export interface SearchBarProps {
  value: string;
  onValueChange: (changedValue: string) => void;
  onClick: () => void;
}