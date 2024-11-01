import { Pencil1Icon, TrashIcon, PlusIcon } from '@radix-ui/react-icons';
import { Button, ButtonProps } from './button';

export const CreateButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="hover:bg-lime-400 hover:text-white hover:scale-105"
    >
      <PlusIcon />
      <p>Add New Data</p>
    </Button>
  );
};

export const UpdateButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="hover:bg-orange-300">
      <Pencil1Icon />
    </Button>
  );
};

export const DeleteButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="hover:bg-red-400">
      <TrashIcon />
    </Button>
  );
};
