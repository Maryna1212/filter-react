import { useState } from 'react';
import PropTypes from 'prop-types';
import { StatList, Item } from './Statistics.styled';

const RandomColor = ({ id }) => {
  const [color, setColor] = useState('#000');

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <StatList style={{ backgroundColor: color }}>
      <Item onClick={handleGenerate} key={id}></Item>
    </StatList>
  );
};

RandomColor.propTypes = {
  id: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // percentage: PropTypes.number.isRequired,
};

export default RandomColor;
