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
                    property: 'no', //time
                    sortable: true
                },

                {
                    label: 'Nama Modul', //username
                    property: 'modul',
                    sortable: true
                },

                {
                    label: 'Baca', //group
                    property: 'baca',
                    sortable: true
                },

                {
                    label: 'Tambah',     //email
                    property: 'tambah',
                    sortable: true
                },

                {
                    label: 'Edit',    //ipaddress
                    property: 'edit',
                    sortable: true
                },

                {
                    label: 'Hapus',   //hapus
                    property: 'hapus',
                    sortable: true
                },

                {
                    label: 'Eksekusi',   //eksekusi
                    property: 'eksekusi',
                    sortable: true
                },

                {
                    label: 'Download',  //download
                    property: 'download',
                    sortable: true
                },

                {
                    label: 'Upload',
                    property: 'upload',
                    sortable: true
                },

                {
                    label:'Print',
                    property: 'print',
                    sortable: true
                }
            ];
            var delays = ['300', '600', '900', '1200'];
            var products = [
                {
                    "no": "1",
                    "modul": "ini modul 1",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle1' type='checkbox'><label for='checkbox-type-circle1'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle2' type='checkbox'><label for='checkbox-type-circle2'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle3' type='checkbox'><label for='checkbox-type-circle3'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle4' type='checkbox'><label for='checkbox-type-circle4'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle5' type='checkbox'><label for='checkbox-type-circle5'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle6' type='checkbox'><label for='checkbox-type-circle6'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle7' type='checkbox'><label for='checkbox-type-circle7'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle8' type='checkbox'><label for='checkbox-type-circle8'></label></div>",
                    "ThumbnailAltText": "Canon EOS Rebel",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/1.jpg",
                    "type": "modul1",
                },
                {
                    "no": "2",
                    "modul": "ini modul 2",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle9' type='checkbox'><label for='checkbox-type-circle9'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle10' type='checkbox'><label for='checkbox-type-circle10'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle11' type='checkbox'><label for='checkbox-type-circle11'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle12' type='checkbox'><label for='checkbox-type-circle12'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle13' type='checkbox'><label for='checkbox-type-circle13'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle14' type='checkbox'><label for='checkbox-type-circle14'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle15' type='checkbox'><label for='checkbox-type-circle15'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle16' type='checkbox'><label for='checkbox-type-circle16'></label></div>",
                    "ThumbnailAltText": "Samsung Galaxy S III",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/2.jpg",
                    "type": "modul2"
                },
                {
                    "no": "3",
                    "modul": "ini modul 3",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle17' type='checkbox'><label for='checkbox-type-circle17'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle18' type='checkbox'><label for='checkbox-type-circle18'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle19' type='checkbox'><label for='checkbox-type-circle19'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle20' type='checkbox'><label for='checkbox-type-circle20'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle21' type='checkbox'><label for='checkbox-type-circle21'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle22' type='checkbox'><label for='checkbox-type-circle22'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle23' type='checkbox'><label for='checkbox-type-circle23'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle24' type='checkbox'><label for='checkbox-type-circle24'></label></div>",
                    "ThumbnailAltText": "Samsung 32' LED",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/3.jpg",
                    "type": "modul3"
                },
                {
                    "no": "4",
                    "modul": "ini modul 1",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle25' type='checkbox'><label for='checkbox-type-circle25'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle26' type='checkbox'><label for='checkbox-type-circle26'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle27' type='checkbox'><label for='checkbox-type-circle27'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle28' type='checkbox'><label for='checkbox-type-circle28'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle29' type='checkbox'><label for='checkbox-type-circle29'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle30' type='checkbox'><label for='checkbox-type-circle30'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle31' type='checkbox'><label for='checkbox-type-circle31'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle32' type='checkbox'><label for='checkbox-type-circle32'></label></div>",
                    "ThumbnailAltText": "IOTA - Love Come Wicked",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/4.jpg",
                    "type": "modul1"
                },
                {
                    "no": "5",
                    "modul": "ini modul 2",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle33' type='checkbox'><label for='checkbox-type-circle33'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle34' type='checkbox'><label for='checkbox-type-circle2'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle35' type='checkbox'><label for='checkbox-type-circle35'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle36' type='checkbox'><label for='checkbox-type-circle36'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle37' type='checkbox'><label for='checkbox-type-circle37'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle38' type='checkbox'><label for='checkbox-type-circle38'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle39' type='checkbox'><label for='checkbox-type-circle39'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle40' type='checkbox'><label for='checkbox-type-circle40'></label></div>",
                    "ThumbnailAltText": "Jimmy Van Eaton",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/5.jpg",
                    "type": "modul2"
                },
                {
                    "no": "6",
                    "modul": "ini modul 3",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle41' type='checkbox'><label for='checkbox-type-circle41'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle42' type='checkbox'><label for='checkbox-type-circle42'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle43' type='checkbox'><label for='checkbox-type-circle43'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle44' type='checkbox'><label for='checkbox-type-circle44'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle45' type='checkbox'><label for='checkbox-type-circle45'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle46' type='checkbox'><label for='checkbox-type-circle46'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle47' type='checkbox'><label for='checkbox-type-circle47'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle48' type='checkbox'><label for='checkbox-type-circle48'></label></div>",
                    "ThumbnailAltText": "Sexy Fashion Women's",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/6.jpg",
                    "type": "modul3"
                },
                {
                    "no": "7",
                    "modul": "ini modul 1",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle49' type='checkbox'><label for='checkbox-type-circle49'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle50' type='checkbox'><label for='checkbox-type-circle50'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle51' type='checkbox'><label for='checkbox-type-circle51'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle52' type='checkbox'><label for='checkbox-type-circle52'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle53' type='checkbox'><label for='checkbox-type-circle53'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle54' type='checkbox'><label for='checkbox-type-circle54'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle55' type='checkbox'><label for='checkbox-type-circle55'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle56' type='checkbox'><label for='checkbox-type-circle56'></label></div>",
                    "ThumbnailAltText": "Korean Fashion Women's",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/7.jpg",
                    "type": "modul1"
                },
                {
                    "no": "8",
                    "modul": "ini modul 2",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle57' type='checkbox'><label for='checkbox-type-circle57'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle58' type='checkbox'><label for='checkbox-type-circle58'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle59' type='checkbox'><label for='checkbox-type-circle59'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle60' type='checkbox'><label for='checkbox-type-circle60'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle61' type='checkbox'><label for='checkbox-type-circle61'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle62' type='checkbox'><label for='checkbox-type-circle62'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle63' type='checkbox'><label for='checkbox-type-circle63'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle64' type='checkbox'><label for='checkbox-type-circle64'></label></div>",
                    "ThumbnailAltText": "Fashion Women Loose",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/8.jpg",
                    "type": "modul2"
                },
                {
                    "no": "9",
                    "modul": "ini modul 3",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle65' type='checkbox'><label for='checkbox-type-circle65'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle66' type='checkbox'><label for='checkbox-type-circle66'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle67' type='checkbox'><label for='checkbox-type-circle67'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle68' type='checkbox'><label for='checkbox-type-circle68'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle69' type='checkbox'><label for='checkbox-type-circle69'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle70' type='checkbox'><label for='checkbox-type-circle70'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle71' type='checkbox'><label for='checkbox-type-circle71'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle72' type='checkbox'><label for='checkbox-type-circle72'></label></div>",
                    "ThumbnailAltText": "10 Seeds Miracle Fruits",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/9.jpg",
                    "type": "modul3"
                },
                {
                    "no": "10",
                    "modul": "ini modul 1",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle73' type='checkbox'><label for='checkbox-type-circle73'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle74' type='checkbox'><label for='checkbox-type-circle74'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle741' type='checkbox'><label for='checkbox-type-circle741'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle75' type='checkbox'><label for='checkbox-type-circle75'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle76' type='checkbox'><label for='checkbox-type-circle76'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle77' type='checkbox'><label for='checkbox-type-circle77'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle78' type='checkbox'><label for='checkbox-type-circle78'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle79' type='checkbox'><label for='checkbox-type-circle79'></label></div>",
                    "ThumbnailAltText": "10 Seeds Triphasia",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/10.jpg",
                    "type": "modul1"
                },
                {
                    "no": "11",
                    "modul": "ini modul 2",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle80' type='checkbox'><label for='checkbox-type-circle80'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle81' type='checkbox'><label for='checkbox-type-circle81'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle82' type='checkbox'><label for='checkbox-type-circle82'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle83' type='checkbox'><label for='checkbox-type-circle83'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle84' type='checkbox'><label for='checkbox-type-circle84'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle85' type='checkbox'><label for='checkbox-type-circle85'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle86' type='checkbox'><label for='checkbox-type-circle86'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle87' type='checkbox'><label for='checkbox-type-circle87'></label></div>",
                    "ThumbnailAltText": "Nike Men's Mercurial",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/11.jpg",
                    "type": "modul2"
                },
                {
                    "no": "12",
                    "modul": "ini modul 3",
                    "baca": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle88' type='checkbox'><label for='checkbox-type-circle88'></label></div>",
                    // "price": "Ini First username",
                    "tambah": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle89' type='checkbox'><label for='checkbox-type-circle89'></label></div>",
                    "edit": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle90' type='checkbox'><label for='checkbox-type-circle90'></label></div>",
                    "hapus": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle91' type='checkbox'><label for='checkbox-type-circle91'></label></div>",
                    "eksekusi": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle92' type='checkbox'><label for='checkbox-type-circle92'></label></div>",
                    "download": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle93' type='checkbox'><label for='checkbox-type-circle93'></label></div>",
                    "upload": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle94' type='checkbox'><label for='checkbox-type-circle94'></label></div>",
                    "print": "<div class='ckbox ckbox-theme circle'><input id='checkbox-type-circle95' type='checkbox'><label for='checkbox-type-circle95'></label></div>",
                    "ThumbnailAltText": "CR7 Jersey Real Madrid",
                    "ThumbnailImage": "/blankon-fullpack-admin-theme/img/media/shop/12.jpg",
                    "type": "modul3"
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
                        (item.no.toLowerCase().search(options.search)>=0) ||
                        (item.modul.toLowerCase().search(options.search)>=0) ||
                        (item.baca.toLowerCase().search(options.search)>=0) ||
                        (item.tambah.toLowerCase().search(options.search)>=0) ||
                        (item.edit.toLowerCase().search(options.search)>=0) ||
                        (item.hapus.toLowerCase().search(options.search)>=0) ||
                        (item.eksekusi.toLowerCase().search(options.search)>=0) ||
                        (item.download.toLowerCase().search(options.search)>=0) ||
                        (item.upload.toLowerCase().search(options.search)>=0) 
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