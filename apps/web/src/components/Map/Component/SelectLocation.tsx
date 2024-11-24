import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FC } from 'react';

interface LocationOption {
  value: string;
  label: string;
}

interface LocationSelectProps {
  options: LocationOption[];
  placeholder: string;
  onValueChange: (value: string) => void;
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export const LocationSelect: FC<LocationSelectProps> = ({
  options,
  placeholder,
  onValueChange,
  name,
  disabled = false,
  defaultValue,
}) => {
  return (
    <Select onValueChange={onValueChange} name={name} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            value={option.value}
            onClick={() => onValueChange(option.value)}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocationSelect;
