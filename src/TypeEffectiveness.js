import React from 'react';
import bem from 'bem-cn';
import './TypeEffectiveness.css';

const block = bem('type-effectiveness');

const title = (attackTypeLabel, defendTypeLabel, defendTypeTwoLabel, matchup) => {
  const defendLabel = defendTypeTwoLabel
    ? `${defendTypeLabel} + ${defendTypeTwoLabel}`
    : defendTypeLabel;

  const matchupLabel =
    matchup === 4 ? '4x super-effective' :
    matchup === 2 ? '2x super-effective' :
    matchup === 1 ? '1x neutral' :
    matchup === 0.5 ? '½x not very effective' :
    matchup === 0.25 ? '¼x not very effective' :
    matchup === 0 ? '0x no effect' : '????';

  return `${attackTypeLabel} => ${defendLabel} = ${matchupLabel}`;
};

const TypeEffectiveness = ({attackType, defendType, defendTypeTwo}) => {
  const matchup = attackType.matchups[defendType.key] * (
    defendTypeTwo ? attackType.matchups[defendTypeTwo.key] : 1
  );

  const defendTypeTwoLabel = defendTypeTwo ? defendTypeTwo.label : null;

  return (
    <div
      className={block({
        'double-strong': matchup === 4,
        strong: matchup === 2,
        weak: matchup === 0.5,
        'double-weak': matchup === 0.25,
        immune: matchup === 0
      })}
      title={title(attackType.label, defendType.label, defendTypeTwoLabel, matchup)}
    >
      {matchup === 0.5 ? '½' :
       matchup === 0.25 ? '¼' :
       matchup === 1 ? '' :
       matchup}
    </div>
  );
};

export default TypeEffectiveness;
