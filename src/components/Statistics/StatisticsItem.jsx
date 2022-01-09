import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistics.styled';

export default function StatisticsItem({ label, percentage }) {
  return (
    <ul>
      <Item>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </Item>
    </ul>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
