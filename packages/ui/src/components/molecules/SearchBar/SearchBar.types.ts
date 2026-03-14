export interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch: (value: string) => void;
  isLoading?: boolean;
  defaultValue?: string;
}
