import { TriggerButton } from './Filter.styled';

export const Filter = ({ isOpen = false }) => {
  return (
    <div>
      <TriggerButton type="button">Выбрано: 0</TriggerButton>
      {isOpen && <div>Popover</div>}
    </div>
  );
};
