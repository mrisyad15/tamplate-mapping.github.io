var BlankonDashboardEcommerce = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalImgPath = BlankonApp.handleBaseURL()+'/img';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonDashboardEcommerce.counterOverview();
            BlankonDashboardEcommerce.gritterNotification();
            BlankonDashboardEcommerce.sessionTimeout();
            BlankonDashboardEcommerce.marketChartWidget();
            BlankonDashboardEcommerce.marketStatus();
            BlankonDashboardEcommerce.salesChart();
            BlankonDashboardEcommerce.mapOrderLocations();
        },

        // =========================================================================
        // COUNTER OVERVIEW
        // =========================================================================
        counterOverview: function () {
            if($('.counter').length){
                $('.counter').counterUp({
                    delay: 10,
                    time: 4000
                });
            }
        },

        // =========================================================================
        // GRITTER NOTIFICATION
        // =========================================================================
        gritterNotification: function () {
            // display marketing alert only once
            if($('#wrapper').css('opacity')) {
                if (!$.cookie('intro')) {

                    // Gritter notification intro 1
                    setTimeout(function () {
                        
                    }, 5000);

                    // Gritter notification intro 2
                    setTimeout(function () {

                    }, 8000);

                    // Set cookie intro
                    $.cookie('intro',1, {expires: 1});
                }
            }
        },

        // =========================================================================
        // SESSION TIMEOUT
        // =========================================================================
        sessionTimeout: function () {
        },

        // =========================================================================
        // MARKET CHART
        // =========================================================================
        marketChartWidget: function () {
            $(window).resize(function() {
                window.bar.redraw();
            });
            function marketChart(){
                Window.bar = Morris.Bar({
                    element: 'market-chart',
                    data: [
                        { month: 'January', a: 80, b: 70, c: 60, d: 50, e: 40, f: 30, g: 20, h: 10 },
                        { month: 'February', a: 20, b: 50, c: 67, d: 77, e: 87, f: 97, g: 77, h: 97 },
                        { month: 'March', a: 25, b: 40, c: 32, d: 60, e: 40, f: 30, g: 20, h: 10 },
                        { month: 'April', a: 27, b: 60, c: 78, d: 70, e: 50, f: 30, g: 20, h: 10 },
                        { month: 'May', a: 34, b: 50, c: 12, d: 80, e: 77, f: 30, g: 20, h: 10 },
                        { month: 'June', a: 40, b: 70, c: 78, d: 85, e: 80, f: 30, g: 20, h: 10 },
                        { month: 'July', a: 41, b: 60, c: 52, d: 90, e: 40, f: 30, g: 20, h: 10 },
                        { month: 'August', a: 80, b: 70, c: 60, d: 50, e: 40, f: 30, g: 20, h: 10 },
                        { month: 'September', a: 20, b: 50, c: 67, d: 77, e: 87, f: 97, g: 77, h: 97 },
                        { month: 'October', a: 25, b: 40, c: 32, d: 60, e: 40, f: 30, g: 20, h: 10 },
                        { month: 'November', a: 27, b: 60, c: 78, d: 70, e: 50, f: 30, g: 20, h: 10 },
                        { month: 'December', a: 34, b: 50, c: 12, d: 80, e: 77, f: 30, g: 20, h: 10 }
                    ],
                    xkey: 'month',
                    ykeys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                    labels: ['1. Waiting List', '2. Followed Up', '3. Not Followed Up', '4. Sampling Process', '5. Testing Process', '6. Report Uploaded', '7. On Review', '8. Done Review'],
                    lineColors: ['#63d3e9', '#8CC152', '#E9573F', '#00B1E1', '#00B1E1', '#63D3E9', '#E9573F', '#8CC152'],
                    pointFillColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointStrokeColors: ['#FFFFFF'],
                    lineWidth: '5px',
                    hideHover: true,
                    grid: false,
                    gridTextColor: '#FFFFFF',
                    resize: true,
                    redraw: true
                });
            }
            marketChart();
        },

        // =========================================================================
        // MARKET STATUS
        // =========================================================================
        marketStatus: function () {
            var piedata = [
                { label: "Apple", data: [[1,40]], color: '#906094'},
                { label: "Android", data: [[1,20]], color: '#8CC152'},
                { label: "Windows Phone", data: [[1,50]], color: '#F6BB42'}
            ];

            function labelFormatter(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            $.plot('#market-status-chart', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 500,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        },

        // =========================================================================
        // SALES CHART
        // =========================================================================
        salesChart: function () {
            $('#market-today-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-average-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-total-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
        },

        // =========================================================================
        // ORDER LOCATIONS
        // =========================================================================
        mapOrderLocations: function () {
            if($('#map-order-locations').length){
                $('#map-order-locations').gmap3({
                    map:{
                        options:{
                            center:[46.578498,2.457275],
                            zoom: 5
                        }
                    },
                    marker:{
                        values:[
                            {latLng:[48.8620722, 2.352047], data:"Windows phone sold 45"},
                            {address:"86000 Poitiers, France", data:"Apple sold 453"},
                            {address:"66000 Perpignan, France", data:"Android sold 344", options:{icon: "http://maps.google.com/mapfiles/marker_green.png"}}
                        ],
                        options:{
                            draggable: false
                        },
                        events:{
                            mouseover: function(marker, event, context){
                                var map = $(this).gmap3("get"),
                                    infowindow = $(this).gmap3({get:{name:"infowindow"}});
                                if (infowindow){
                                    infowindow.open(map, marker);
                                    infowindow.setContent(context.data);
                                } else {
                                    $(this).gmap3({
                                        infowindow:{
                                            anchor:marker,
                                            options:{content: context.data}
                                        }
                                    });
                                }
                            },
                            mouseout: function(){
                                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                                if (infowindow){
                                    infowindow.close();
                                }
                            }
                        }
                    }
                });
            }
        },

    };

}();

// Call main app init
BlankonDashboardEcommerce.init();
