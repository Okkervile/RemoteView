// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: test1 
// ==========================================================================
m_require('app/views/tabs.js')
var RemoteViewUI;
RemoteViewUI = RemoteViewUI || {};


RemoteViewUI.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage: 'page1',

    page1: M.PageView.design({

        childViews: 'header webview bcont1 footer',

        events: {
            pageshow: {
                target: RemoteViewUI.ApplicationController,
                action: 'initApp'
            }
        },

        header: M.ToolbarView.design({
            anchorLocation: M.TOP,
            value: 'CAM LIVE VIEW'
        }),


        webview: M.WebView.design({
                    value: 'http://download.hrz.tu-darmstadt.de/media/HRZ/mmAG/webcam/s101-webcam02/current-popup.html',
                    cssClass: 'myWebView',
                    isScrollable: NO,
                    contentBinding: {
                        target: RemoteViewUI.ApplicationController,
                        property: 'url'
                    },
                    events: {
                        load: {
                            action: function (id) {
                                $('#' + id).animate({
                                    opacity: 1
                                }, 500);
                                M.LoaderView.hide();
                            }
                        }
                    }
                }),
            //}),



        bcont1: M.ContainerView.design({
            cssClass:   'greyBox',
            childViews: 'lb1 btnSS1 lb2 btnSS2 lb3 btnSS3 btnSS4 btnSS5',

            lb1: M.LabelView.design({
                value: 'Aperture',
                cssClass: 'ButtonLabel'
            }),
            btnSS1: M.SelectionListView.design({

                childViews: 'item1 item2 item3 item4',
                /* renders a selection view like radio buttons */
                selectionMode: M.SINGLE_SELECTION_DIALOG,

                item1: M.SelectionListItemView.design({
                    value: 'item1',
                    label: '1',
                    isSelected: YES
                }),
                item2: M.SelectionListItemView.design({
                    value: 'item2',
                    label: 'Item 2'
                }),
                item3: M.SelectionListItemView.design({
                    value: 'item3',
                    label: 'Item 3'
                }),
                item4: M.SelectionListItemView.design({
                    value: 'item4',
                    label: 'Item 4'
                })
            }),
            lb2: M.LabelView.design({
                value: 'Exposure',
                cssClass: 'ButtonLabel'
            }),
            btnSS2: M.SelectionListView.design({

                childViews: 'item1 item2 item3 item4',

                /* renders a selection view like radio buttons */
                selectionMode: M.SINGLE_SELECTION_DIALOG,

                item1: M.SelectionListItemView.design({
                    value: 'item1',
                    label: 'Aperture',
                    isSelected: YES
                }),
                item2: M.SelectionListItemView.design({
                    value: 'item2',
                    label: 'Item 2'
                }),
                item3: M.SelectionListItemView.design({
                    value: 'item3',
                    label: 'Item 3'
                }),
                item4: M.SelectionListItemView.design({
                    value: 'item4',
                    label: 'Item 4'
                })
            }),
            lb3: M.LabelView.design({
                value: 'ISO',
                cssClass: 'ButtonLabel'
            }),
            btnSS3: M.SelectionListView.design({

                childViews: 'item1 item2 item3 item4',
                /* renders a selection view like radio buttons */
                selectionMode: M.SINGLE_SELECTION_DIALOG,

                item1: M.SelectionListItemView.design({
                    value: 'item1',
                    label: 'Item 1',
                    isSelected: YES
                }),
                item2: M.SelectionListItemView.design({
                    value: 'item2',
                    label: 'Item 2'
                }),
                item3: M.SelectionListItemView.design({
                    value: 'item3',
                    label: 'Item 3'
                }),
                item4: M.SelectionListItemView.design({
                    value: 'item4',
                    label: 'Item 4'
                })
            }),
            btnSS4: M.ButtonView.design({
                value: 'Connect'
            }),



                btnSS5: M.ButtonView.design({
                cssClass:   'shotBox',
                value: 'SHOT'

            })



        }),

        footer: RemoteViewUI.tabs




    }),

    /* Page 2 */
    page2: M.PageView.design({
        childViews: 'header content footer',
        header: M.ToolbarView.design({
            value: 'Page 2',
            showBackButton: YES
        }),


        content: M.ScrollView.design({
            childViews: 'carousel',

            carousel: M.CarouselView.design({
                childViews: 'item1 item2 item3 item4 item5 item6 item7',

                showPaginator: YES,

                direction: M.HORIZONTAL,

                sizeCalculator: M.CAROUSEL_SIZE_SURROUNDING_ELEMENT,

                item1:M.CarouselItemView.design({
                    childViews:'img1',
                    img1:M.ImageView.design({
                        value:'theme/images/garda2.gif',
                        cssClass:'carouselImg'
                    })
                }),
                item2:M.CarouselItemView.design({
                    childViews:'img2',
                    img2:M.ImageView.design({
                        value:'theme/images/garda.gif',
                        cssClass:'carouselImg'
                    })
                }),
                item3:M.CarouselItemView.design({
                    childViews:'img3',
                    img3:M.ImageView.design({
                        value:'theme/images/garda2.gif',
                        cssClass:'carouselImg'
                    })
                }),
                item4:M.CarouselItemView.design({
                    childViews:'img4',
                    img4:M.ImageView.design({
                        value:'theme/images/4.jpg',
                        cssClass:'carouselImg'
                    })
                }),
                item5:M.CarouselItemView.design({
                    childViews:'img5',
                    img5:M.ImageView.design({
                        value:'theme/images/5.jpg',
                        cssClass:'carouselImg'
                    })
                }),
                item6:M.CarouselItemView.design({
                    childViews:'img6',
                    img6:M.ImageView.design({
                        value:'theme/images/6.jpg',
                        cssClass:'carouselImg'
                    })
                }),
                item7:M.CarouselItemView.design({
                    childViews:'img7',
                    img7:M.ImageView.design({
                        value:'theme/images/5.jpg',
                        cssClass:'carouselImg'
                    })
                })
            })
        }),

        footer: RemoteViewUI.tabs



    }),

    /* Page 2 */
    page3: M.PageView.design({
        childViews: 'header footer',
        header: M.ToolbarView.design({
            value: 'Page 3',
            showBackButton: YES
        }),

        footer: RemoteViewUI.tabs


    })

});

