import PropTypes from 'prop-types';
import StatisticsItem from './StaticsItem';
// import RandomColor from './RandomColor';
import { StatisticsSection, Title, StatList } from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
        ;
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;
