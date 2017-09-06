var React = require('react');
var dateformat = require('dateformat');
var shuffle = require('shuffle-array');

// var bearsArr = shuffle([1,2,3,4,5,6,7,8,9,0]).map((i) => {
//   return <div>{i}</div>;
// });


var myArr = [1,2,3,4,5,6,7,8,9,0];

var BearsArray = React.createClass({
  render: function(){
    return (
      <div>{shuffle(myArr)}</div>
    )
  }
});

var OppArray = React.createClass({
  render: function(){
    return (
      <div>{shuffle(myArr)}</div>
    )
  }
});

var Admin = React.createClass({

  getInitialState: function() {
    return {
      dataArr: this.props.data
    }
  },

  render: function(){
      return (
        <div>
        {this.state.dataArr.map(function(item, index) {
          return (
          <div key={item.week} className="week">
            <h2>Week {item.week}</h2>
            <div className="day-date">{item.day}, {item.date}</div>
            <div className="time">{item.time}</div>
            <div className="team bears">
              <div className="label">Bears</div>
              <div className="array"><BearsArray /></div>
            </div>
            <div className="team opponent">
              <div className="label">{item.opponent}</div>
              <div className="array"><OppArray /></div>
            </div>
          </div>
        )
          })}
        </div>
      )
  }
});

module.exports = Admin;
