import React from 'react';
import bem from 'bem-cn';
import './TypeChartAttackHeader.css';

const block = bem('type-chart__attack-header');

const TypeChartAttackHeader = ({...props}) => (
  <th {...props} className={block()}>
    <div className={block('label')}>
      Attacking move
    </div>
  </th>
);

export default TypeChartAttackHeader;
