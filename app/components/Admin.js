var React = require('react');
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
  render: function(){
    var opps = ["Bucs", "Giants", "Titans", "49ers", "Lions", "Packers", "Redskins", "Vikings"];
      return (
        <div>
        {opps.map(function(item, index) {
          return (
          <div key={index}>
            <h2>Week {index + 10}</h2>
            <div className="team bears">
              <div className="label">Bears</div>
              <div className="array"><BearsArray /></div>
            </div>
            <div className="team opponent">
              <div className="label">{item}</div>
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
