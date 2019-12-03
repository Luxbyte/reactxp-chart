'use strict';

var {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryBoxPlot,
  VictoryCandlestick,
  VictoryChart,
  VictoryErrorBar,
  VictoryGroup,
  VictoryLine,
  VictoryPie,
  VictoryPolarAxis,
  VictoryScatter,
  VictoryStack,
  VictoryVoronoi,
  VictoryContainer,
  VictoryBrushContainer,
  VictoryCursorContainer,
  VictorySelectionContainer,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
  VictoryAnimation,
  VictoryBrushLine,
  VictoryClipContainer,
  VictoryLabel,
  VictoryLegend,
  VictoryPortal,
  VictoryPrimitives,
  VictorySharedEvents,
  VictoryTheme,
  VictoryTooltip,
  VictoryTransition
} = require('victory-native');

// fix material theme for ios
import materialTheme from "./VictoryThemeMaterialIos";
VictoryTheme = {
  ...VictoryTheme,
  material: materialTheme
}

module.exports = {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryBoxPlot,
  VictoryCandlestick,
  VictoryChart,
  VictoryErrorBar,
  VictoryGroup,
  VictoryLine,
  VictoryPie,
  VictoryPolarAxis,
  VictoryScatter,
  VictoryStack,
  VictoryVoronoi,
  VictoryContainer,
  VictoryBrushContainer,
  VictoryCursorContainer,
  VictorySelectionContainer,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
  VictoryAnimation,
  VictoryBrushLine,
  VictoryClipContainer,
  VictoryLabel,
  VictoryLegend,
  VictoryPortal,
  VictoryPrimitives,
  VictorySharedEvents,
  VictoryTheme,
  VictoryTooltip,
  VictoryTransition
}
