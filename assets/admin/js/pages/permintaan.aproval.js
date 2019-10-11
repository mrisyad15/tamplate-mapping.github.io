'use strict';
var BlankonTable = function () {

    // =========================================================================
    // SETTINGS APP
    // =========================================================================
    var globalPluginsPath = BlankonApp.handleBaseURL()+'/assets/global/plugins/bower_components';

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonTable.datatable();
        },

        // =========================================================================
        // DATATABLE
        // =========================================================================
        datatable: function () {
            var responsiveHelperAjax = undefined;
            var responsiveHelperDom = undefined;
            var breakpointDefinition = {
                tablet: 1024,
                phone : 480
            };

            var tableAjax = $('#datatable-ajax');
            var tableDom = $('#datatable-dom');

            // Using AJAX
            tableAjax.dataTable({
                autoWidth      : false,
                ajax           : globalPluginsPath+'/datatables/datatable-sample.json',
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperAjax) {
                        responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperAjax.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperAjax.respond();
                }
            });

            // Using DOM
            // Remove arrow datatable
            $.extend( true, $.fn.dataTable.defaults, {
                "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 0, 1, 2, 5 ] } ]
            } );
            tableDom.dataTable({
                autoWidth        : false,
                preDrawCallback: function () {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelperDom) {
                        responsiveHelperDom = new ResponsiveDatatablesHelper(tableDom, breakpointDefinition);
                    }
                },
                rowCallback    : function (nRow) {
                    responsiveHelperDom.createExpandIcon(nRow);
                },
                drawCallback   : function (oSettings) {
                    responsiveHelperDom.respond();
                }
            });

            // Repeater
            var columns = [
                {
                    label: 'No',
                    property: 'time',
                    sortable: true
                },

                {
                    label: 'Nomor Permintaan',
                    property: 'username',
                    sortable: true
                },

                {
                    label: 'Tanggal',
                    property: 'group',
                    sortable: true
                },

                {
                    label: 'Permintaan Dari',
                    property: 'email',
                    sortable: true
                },

                {
                    label: 'Jenis Material',
                    property: 'ipaddress',
                    sortable: true
                },

                {
                    label: 'Vendor',
                    property: 'browser',
                    sortable: true
                },

                {
                    label: 'Status',
                    property: 'status',
                    sortable: true
                },

                {
                    label: 'Aprove',
                    property: 'aprove',
                    sortable: true
                }

            //     {
            //         label: 'Action',
            //         property: 'sold',
            //         sortable: true
            //     }
            ];


            var delays = ['300', '600', '900', '1200'];
            var products = [
                {
                    "time": "1",
                    "username": "01/VII/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Followed Up",
                    "aprove": "<button id='myImg' alt='Trolltunga, Norway' width='300' height='200'>asd</button>" +
                              "<div id='myModal' class='modal'>" +
                              "<span class='close'>×</span>" +
                              "<img class='modal-content' id='img01'>" +
                              "<div id='caption'></div>" +
                              "</div>",
                    // "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": "Admin",
                },

                {
                    "time": "2",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Langgeng",
                    "ipaddress": "Pasir",
                    "browser": "ini vendor",
                    "status": "Testing Proses",
                    "aprove": "",
                    // "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Samsung Galaxy S III",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/2.jpg",
                    "type": "User"
                },

                {
                    "time": "3",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Batu",
                    "browser": "ini vendor",
                    "status": "Waiting List",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Samsung 32' LED",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/3.jpg",
                    "type": "User"
                },

                {
                    "time": "4",
                    "username": "01/VII/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Semen",
                    "browser": "ini vendor",
                    "status": "Waiting List",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "IOTA - Love Come Wicked",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/4.jpg",
                    "type": "Admin"
                },

                {
                    "time": "5",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Waiting List",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Jimmy Van Eaton",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/5.jpg",
                    "type": "User"
                },

                {
                    "time": "6",
                    "username": "01/VII/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Waiting List",
                    "aprove": "",
                   "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Sexy Fashion Women's",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/6.jpg",
                    "type": "Admin"
                },

                {
                    "time": "7",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Report Uploaded",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Korean Fashion Women's",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/7.jpg",
                    "type": "User"
                },

                {
                    "time": "8",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Testing Proses",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Fashion Women Loose",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/8.jpg",
                    "type": "User"
                },

                {
                    "time": "9",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Sampling Proses",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "10 Seeds Miracle Fruits",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/9.jpg",
                    "type": "User"
                },

                {
                    "time": "10",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Not Followed Up",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "10 Seeds Triphasia",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/10.jpg",
                    "type": "User"
                },

                {
                    "time": "11",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Follwed Up",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "Nike Men's Mercurial",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/11.jpg",
                    "type": "User"
                },

                {
                    "time": "12",
                    "username": "02/VI/2019",
                    "group": "05-08-2019",
                    // "price": "Ini First username",
                    "email": "PT Abdi Jaya",
                    "ipaddress": "Split",
                    "browser": "ini vendor",
                    "status": "Waiting List",
                    "aprove": "",
                    "sold": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    "ThumbnailAltText": "CR7 Jersey Real Madrid",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/12.jpg",
                    "type": "User"
                }
            ];

                   

            var dataSource, filtering;

            dataSource = function(options, callback){
                var items = filtering(options);
                var resp = {
                    count: items.length,
                    items: [],
                    page: options.pageIndex,
                    pages: Math.ceil(items.length/(options.pageSize || 50))
                };
                var i, items, l;

                i = options.pageIndex * (options.pageSize || 50);
                l = i + (options.pageSize || 50);
                l = (l <= resp.count) ? l : resp.count;
                resp.start = i + 1;
                resp.end = l;

                if(options.view==='list' || options.view==='thumbnail'){
                    if(options.view==='list'){
                        resp.columns = columns;
                        for(i; i<l; i++){
                            resp.items.push(items[i]);
                        }
                    }else{
                        for(i; i<l; i++){
                            resp.items.push({
                                username: items[i].username,
                                src: items[i].ThumbnailImage
                            });
                        }
                    }

                    setTimeout(function(){
                        callback(resp);
                    }, delays[Math.floor(Math.random() * 4)]);
                }
            };

            filtering = function(options){
                var items = $.extend([], products);
                var search;
                if(options.filter.value!=='all'){
                    items = $.grep(items, function(item){
                        return (item.type.search(options.filter.value)>=0);
                    });
                }
                if(options.search){
                    search = options.search.toLowerCase();
                    items = $.grep(items, function(item){
                        return (
                        (item.time.toLowerCase().search(options.search)>=0) ||
                        (item.username.toLowerCase().search(options.search)>=0) ||
                        (item.group.toLowerCase().search(options.search)>=0) ||
                        (item.email.toLowerCase().search(options.search)>=0) ||
                        (item.ipaddress.toLowerCase().search(options.search)>=0) ||
                        (item.browser.toLowerCase().search(options.search)>=0) ||
                        (item.version.toLowerCase().search(options.search)>=0) ||
                        (item.platform.toLowerCase().search(options.search)>=0) ||
                        (item.sold.toLowerCase().search(options.search)>=0) 
                        );
                    });
                }
                if(options.sortProperty){
                    items = $.grep(items, function(item){
                        if(options.sortProperty==='id' || options.sortProperty==='height' || options.sortProperty==='weight'){
                            return parseFloat(item[options.sortProperty]);
                        }else{
                            return item[options.sortProperty];
                        }
                    });
                    if(options.sortDirection==='desc'){
                        items.reverse();
                    }
                }

                return items;
            };



            // REPEATER
            $('#repeaterIllustration').repeater({
                dataSource: dataSource
            });

            $('#myRepeater').repeater({
                dataSource: dataSource
            });

            $('#myRepeaterList').repeater({
                dataSource: dataSource
            });

            $('#myRepeaterThumbnail').repeater({
                dataSource: dataSource,
                thumbnail_template: '<div class="thumbnail repeater-thumbnail" style="background: {{color}};"><img height="75" src="{{src}}" width="65"><span>{{username}}</span></div>'
            });

        }

    };

}();

// Call main app init
BlankonTable.init();