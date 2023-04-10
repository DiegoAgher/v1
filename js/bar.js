var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "Proficiencies"
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Proficiency"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                { Level: "Python", visitors: 90 },
                { Level: "Sklearn", visitors: 90 },
                { Level: "Pytorch", visitors: 90 },
                { Level: "AWS", visitors: 80 }
            ],
            xName: "Proficiencies",
            yName: "Proficiency"
        }
    ]
});
chart.appendTo("#container");