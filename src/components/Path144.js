import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Path144(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 22" style={styles.path31}>
        <Path
          strokeWidth={0}
          fill="rgba(69,75,105,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.13 3.11 C2.04 4.14 1.08 4.75 0.76 5.70 C0.63 6.21 0.57 6.75 0.60 7.28 C0.57 8.80 0.27 10.25 0.11 11.74 C-0.05 13.23 -0.09 14.78 0.38 16.18 C0.66 17.01 1.11 17.76 1.31 18.63 C1.44 19.20 1.45 19.83 1.68 20.36 C2.18 21.50 3.47 21.80 4.57 21.94 C4.98 22.01 5.39 22.02 5.79 21.96 C6.31 21.82 6.80 21.57 7.24 21.22 C8.98 19.99 10.66 18.65 12.26 17.18 C13.75 15.82 15.19 14.32 16.08 12.37 C16.44 11.59 16.70 10.69 16.52 9.83 C16.41 9.50 16.37 9.15 16.41 8.81 C16.61 8.05 17.75 8.13 18.00 7.37 C17.44 7.02 17.12 6.31 16.84 5.64 L14.46 0.00 C13.94 0.55 13.28 1.01 12.77 1.56 C12.70 1.64 12.62 1.70 12.52 1.72 C12.23 1.74 12.17 1.17 11.89 1.08 C11.79 1.06 11.69 1.08 11.60 1.14 C10.32 1.79 9.80 3.65 8.62 4.51 C7.93 5.01 6.99 5.22 6.66 6.08 C6.58 6.31 6.55 6.56 6.44 6.78 C6.37 7.02 6.16 7.18 5.94 7.16 C6.30 5.70 6.39 4.16 6.20 2.66 C4.81 2.79 3.51 2.97 2.13 3.11 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0
  },
  path31: {
    height: 22,
    width: 18
  }
});

export default Path144;
