import React, { Component } from 'react';
import bem from 'bem-cn';
import PikachuLogo from './PikachuLogo';
import TypeButton from './TypeButton';
import TypeChartAttackHeader from './TypeChartAttackHeader';
import TypeEffectiveness from './TypeEffectiveness';
import './TypeChart.css';

const block = bem('type-chart');

class TypeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defendType: null
    };

    this.onClickTypeButton = this.onClickTypeButton.bind(this);
  }

  onClickTypeButton(defendType) {
    this.setState(prevState => ({
      defendType: prevState.defendType && defendType.key === prevState.defendType.key ? null : defendType
    }));
  }

  render() {
    return (
      <div className={block()}>
        <table>
          <thead className={block('defend')}>
            <tr>
              <th rowSpan="2">
              </th>
              <th colSpan={this.props.types.length + 1}>
                Defending
                {this.state.defendType ? ` ${this.state.defendType.label} ` : ' '}
                Pokémon
              </th>
            </tr>
            <tr>
              <th>
                <PikachuLogo />
              </th>
              {this.props.types.map((defendType, i) => (
                <th
                  className={block('defend')('selector')}
                  key={i}
                >
                  {this.state.defendType && this.state.defendType.key !== defendType.key &&
                    <TypeButton
                      type={this.state.defendType}
                    />
                  }
                  <TypeButton
                    type={defendType}
                    onClick={() => this.onClickTypeButton(defendType)}
                    selected={this.state.defendType && this.state.defendType.key === defendType.key}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.types.map((attackType, i) => (
              <tr key={i}>
                {i === 0 &&
                  <TypeChartAttackHeader
                    rowSpan={this.props.types.length}
                  />
                }
                <th>
                  <TypeButton
                    type={attackType}
                    onClick={() => this.onClickTypeButton(attackType)}
                  />
                </th>
                {this.props.types.map((defendType, i) => (
                  <td key={i}>
                    <TypeEffectiveness
                      attackType={attackType}
                      defendType={defendType}
                      defendTypeTwo={this.state.defendType === defendType ? null : this.state.defendType}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TypeChart;
