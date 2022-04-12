import { DateRange } from 'react-date-range';
import { Component } from 'react';
import {ko} from "date-fns/esm/locale"
class CalendarComponent extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    };
  };
  onRangeChange = (ranges) => {
    console.log(ranges); // native Date object
    this.setState({
      startDate:ranges['selection'].startDate,
      endDate:ranges['selection'].endDate,
      key:ranges['selection'].key,
    });
  }
  render(){
    return (
      <div>
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={this.onRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={[this.state]}
          minDate={new Date()}
          popperPlacement="auto"
          months={2}
          direction="horizontal"
          />
      </div>
    )
  }
}
export default CalendarComponent;