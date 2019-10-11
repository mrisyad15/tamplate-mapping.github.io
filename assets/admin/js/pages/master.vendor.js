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
                    property: 'code', //code product
                    sortable: true
                },

                {
                    label: 'ID Vendor',
                    property: 'name',
                    sortable: true
                },

                {
                    label: 'Nama',
                    property: 'alamat', //available
                    sortable: true
                },

                {
                    label: 'Type Vendor',
                    property: 'email', // priice
                    sortable: true
                },

                {
                    label: 'Status',
                    property: 'telp', //itemCondition
                    sortable: true
                },

                {
                    label: 'Aproval',
                    property: 'lat',
                    sortable: true
                },

                {
                    label: 'Action',
                    property: 'jen',
                    sortable: true
                }

                // {
                //     label: 'Contact',
                //     property: 'kontak',
                //     sortable: true
                // }
            ];
            var delays = ['300', '600', '900', '1200'];
            var products = [
                {
                    "code": "1",
                    "name": "01/Vl/2019",
                    "alamat": "PT Makmur Jaya",
                    "email": "Vendor Split",
                    "telp": "Waiting",
                    "lat": "<button class='btn btn-primary btn-md btn-expand no-margin rounded'>PROCESS</button>",
                    "jen": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    // "kontak": "",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": "1"
                },

                {
                    "code": "2",
                    "name": "02/Vll/2019",
                    "alamat": "PT Langgeng Abadi",
                    "email": "Vendor Pasir",
                    "telp": "Black List",
                    "lat": "<button class='btn btn-primary btn-md btn-expand no-margin rounded'>PROCESS</button>",
                    "jen": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    // "kontak": "",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": ""
                },

                {
                    "code": "3",
                    "name": "03/Vlll/2019",
                    "alamat": "PT Langgeng Abadi",
                    "email": "Vendor Pasir",
                    "telp": "Black List",
                    "lat": "<button class='btn btn-primary btn-md btn-expand no-margin rounded'>PROCESS</button>",
                    "jen": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    // "kontak": "",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": ""
                },

                {
                    "code": "4",
                    "name": "04/Vl/2019",
                    "alamat": "PT Langgeng Abadi",
                    "email": "Vendor Pasir",
                    "telp": "Aktif",
                    "lat": "<button class='btn btn-primary btn-md btn-expand no-margin rounded'>PROCESS</button>",
                    "jen": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    // "kontak": "",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": ""
                },

                {
                    "code": "5",
                    "name": "05/Vll/2019",
                    "alamat": "PT Langgeng Abadi",
                    "email": "Vendor Pasir",
                    "telp": "Aktif",
                    "lat": "<button class='btn btn-primary btn-md btn-expand no-margin rounded'>PROCESS</button>",
                    "jen": "<a href='' title='Update'><i class='fa fa-edit'></i></a>  <a href='' title='Delete'><i class='fa fa-trash'></i></a>",
                    // "kontak": "",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": ""
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
                                name: items[i].name,
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
                        (item.code.toLowerCase().search(options.search)>=0) ||
                        (item.name.toLowerCase().search(options.search)>=0) ||
                        (item.available.toLowerCase().search(options.search)>=0) ||
                        (item.price.toLowerCase().search(options.search)>=0) ||
                        (item.itemCondition.toLowerCase().search(options.search)>=0) ||
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
                thumbnail_template: '<div class="thumbnail repeater-thumbnail" style="background: {{color}};"><img height="75" src="{{src}}" width="65"><span>{{name}}</span></div>'
            });

        }

    };

}();

// Call main app init
BlankonTable.init();