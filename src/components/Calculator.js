import React, { PureComponent } from 'react';

export class Calculator extends PureComponent {
  render() {
    return (
      <>
        <div className="calculator">
          <div className="calculator__display">
            <div className="calculator__display-value">0</div>
          </div>
          <div className="calculator__keypad">
            <div className="calculator__keypad-row">
              <div className="calculator__keypad-key">AC</div>
              <div className="calculator__keypad-key">+/-</div>
              <div className="calculator__keypad-key">%</div>
              <div className="calculator__keypad-key sign">:</div>
            </div>
            <div className="calculator__keypad-row">
              <div className="calculator__keypad-key">7</div>
              <div className="calculator__keypad-key">8</div>
              <div className="calculator__keypad-key">9</div>
              <div className="calculator__keypad-key sign">x</div>
            </div>
            <div className="calculator__keypad-row">
              <div className="calculator__keypad-key">4</div>
              <div className="calculator__keypad-key">5</div>
              <div className="calculator__keypad-key">6</div>
              <div className="calculator__keypad-key sign">-</div>
            </div>
            <div className="calculator__keypad-row">
              <div className="calculator__keypad-key">1</div>
              <div className="calculator__keypad-key">2</div>
              <div className="calculator__keypad-key">3</div>
              <div className="calculator__keypad-key sign">+</div>
            </div>
            <div className="calculator__keypad-row">
              <div className="calculator__keypad-key">0</div>
              <div className="calculator__keypad-key">.</div>
              <div className="calculator__keypad-key">=</div>
              <div className="calculator__keypad-key sign">=</div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Calculator;
