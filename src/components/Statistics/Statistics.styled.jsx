import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: #9eebc0;
  padding: 30px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  width: 300px;
  background-color: #fff;
  padding: 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  width: 300px;
  margin: 0 auto;
  /* padding: 0; */
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 20px 0;
  border: 1px solid rgb(139, 179, 212);
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 20px;
  text-align: center;
`;
