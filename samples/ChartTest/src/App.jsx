/*
 * This file demonstrates basic usage of the Chart component
 */

let React, RX;
React = RX = require('reactxp');

let {
  VictoryChart,
  VictoryBar,
  VictoryScatter,
  VictoryTheme,
  VictoryPie,
  VictoryContainer,
  VictoryAxis,
  VictoryArea,
  VictoryLine
} = require('reactxp-chart');

const _styles = {
  container: RX.Styles.createViewStyle({
    backgroundColor: "#eee",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row"
  }),
  grid: RX.Styles.createViewStyle({
    maxWidth: 1024,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eee"
  }),
  chart: RX.Styles.createViewStyle({
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#333"
  })
};

const sampleData = [
  { x: 15, y: 20, label: 1, fill: "red" },
  { x: 25, y: 30, label: 2, fill: "orange" },
  { x: 35, y: 65, label: 3, fill: "gold" },
  { x: 40, y: 50, label: 4, fill: "blue" },
  { x: 45, y: 40, label: 5, fill: "cyan" },
  { x: 50, y: 30, label: 6, fill: "green" }
]

const sampleData2 = [
  { x: 15, y: 20 },
  { x: 25, y: 30 },
  { x: 35, y: 65 },
  { x: 40, y: 50 },
  { x: 45, y: 40 },
  { x: 50, y: 30 }
]

class App extends RX.Component {
  render() {
    let {width, height} = RX.UserInterface.measureWindow();
    let chartsPerRow = 2;
    let chartSize = Math.min(width, 1024) / chartsPerRow;

    let chartStyle = [_styles.chart, {width: chartSize, height: chartSize}];

    return (
      <RX.ScrollView >
        <RX.View style={_styles.container}>
          <RX.View style={_styles.grid}>
            <RX.View style={chartStyle}>
              <VictoryChart theme={VictoryTheme.material} domainPadding={10} height={chartSize} width={chartSize} containerComponent={<VictoryContainer responsive={false}/>}>
                <VictoryBar
                  style={{ data: { fill: "tomato", opacity: 0.5 } }}
                  data={sampleData}
                />
              </VictoryChart>
            </RX.View>
            <RX.View style={chartStyle}>
              <VictoryChart theme={VictoryTheme.material} height={chartSize} width={chartSize} containerComponent={<VictoryContainer responsive={false}/>}>
                <VictoryArea data={sampleData}/>
                <VictoryAxis/>
              </VictoryChart>
            </RX.View>
            <RX.View style={chartStyle}>
              <VictoryChart theme={VictoryTheme.material} height={chartSize} width={chartSize} containerComponent={<VictoryContainer responsive={false}/>}>
                <VictoryLine
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                  }}
                  data={sampleData2}
                />
              </VictoryChart>
            </RX.View>
            <RX.View style={chartStyle}>
              <VictoryChart polar theme={VictoryTheme.material} height={chartSize} width={chartSize} containerComponent={<VictoryContainer responsive={false}/>}>
                <VictoryBar
                  style={{ data: { fill: "tomato", opacity: 0.5 } }}
                  data={sampleData}
                />
                <VictoryScatter
                  style={{ data: { fill: "black" } }}
                  data={sampleData2}
                />
              </VictoryChart>
            </RX.View>
          </RX.View>
        </RX.View>
      </RX.ScrollView>
    );
  }
};

module.exports = App;
