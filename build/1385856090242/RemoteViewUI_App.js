
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: WebViewSample
// Controller: ApplicationController
// ==========================================================================


RemoteViewUI.ApplicationController = M.Controller.extend({

    url: null,

    initApp: function() {
        var width = M.Environment.getTotalWidth();
        var itemSize = width - 30;
        var factor = itemSize / 960;
        $('.myWebView').css('height', (itemSize/16*9) * 1/factor);
        $('.myWebView').css('width', itemSize * (1/factor));
        $('.myWebView').css('-webkit-transform', 'scale(' + factor + ')');
        $('.container').css('height', (itemSize/16*9));
        $('.container').css('width', itemSize);
        $('.ui-page').css('width', width);
    },

    updateURL: function(url) {
        var that = this;
        M.LoaderView.show('Loading...');
        $('#' + M.ViewManager.getView('page1', 'webview').id).animate({
            opacity: 0
        }, 500, function(){
            that.set('url', url);
        });
    },

    startStream: function() {
        M.Request.init({
            url: 'http://mypostservice.com/',
            method: 'POST',
            isJSON: YES,
            data: { foo:'bar', bla: 'blub' },
            onSuccess: function(data, msg, xhr) {
                console.log('Request succesful');
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    }

});
