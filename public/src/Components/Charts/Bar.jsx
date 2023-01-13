import React, { Component } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Bar extends Component {
    componentDidMount() {

        let root = am5.Root.new("chartdiv");

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
            category: "1 PM",
            value1: 100,
            
        }, {
            category: "2 PM",
            value1: 120,
            
        }, {
            category: "3 PM",
            value1: 130,
            
        },{
            category: "4 PM",
            value1: 400,
            
        },{
            category: "5 PM",
            value1: 230,
            
        },{
            category: "6 PM",
            value1: 300,
            
        },{
            category: "7 PM",
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
            am5xy.ColumnSeries.new(root, {
                name: "Miles Statistic",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category"
            })
        );
        series1.data.setAll(data);

        /* let series2 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value2",
                categoryXField: "category"
            })
        );
        series2.data.setAll(data); */

        // Add legend
        /* let legend = chart.children.push(am5.Legend.new(root, {}));
        legend.data.setAll(chart.series.values);
 */
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

                <div id="chartdiv" style={{ width: "550px", height: "260px" , marginLeft:5 , marginTop:0 }}></div>
                
            </>
        )
    }
}

export default Bar;