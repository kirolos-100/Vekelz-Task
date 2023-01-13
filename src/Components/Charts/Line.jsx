import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Line extends Component {
    componentDidMount() {

        let root = am5.Root.new("chartdiv1");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout
            })
        );

        // Define data
        let data = [{
            category: "7 AM",
            value1: 70,

        }, {
            category: "8 AM",
            value1: 80,

        }, {
            category: "9 AM",
            value1: 100,

        }, {
            category: "10 AM",
            value1: 120,

        }, {
            category: "11 AM",
            value1: 112,

        }, {
            category: "12 AM",
            value1: 120,

        }, {
            category: "1 PM",
            value1: 130,

        }, {
            category: "2 PM",
            value1: 150,

        }, {
            category: "3 PM",
            value1: 180,

        }, {
            category: "4 PM",
            value1: 200,

        }, {
            category: "5 PM",
            value1: 180,

        }, {
            category: "6 PM",
            value1: 110,

        }, {
            category: "7 PM",
            value1: 100,

        }, {
            category: "8 PM",
            value1: 80,

        }, {
            category: "9 PM",
            value1: 100,

        }

        ];

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {})
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                categoryField: "category"
            })
        );
        xAxis.data.setAll(data);

        // Create series
        let series1 = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category",
                fill: am5.color(0xfbe0cd),
                stroke: am5.color(0xfd9474)
            })
        );
        series1.data.setAll(data);
        series1.strokes.template.setAll({
            strokeWidth: 3,

        });
        series1.fills.template.setAll({
            fillOpacity: 0.5,
            visible: true
        });



        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));

        this.root = root;
    }

    componentWillUnmount() {
        if (this.root) {
            this.root.dispose();
        }
    }

    render() {
        return (

            <>

                <div id="chartdiv1" style={{ width: "550px", height: "260px" , marginLeft:3 , marginTop:0 }}></div>

            </>
        )
    }
}

export default Line;