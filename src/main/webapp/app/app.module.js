(function() {
    'use strict';

    angular
        .module('jhipsterElasticsearchSampleApplicationApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'ngAnimate',
            'fullPage.js'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
    //*******************VELOCITY START
    var $body = $('body');
    var loading = [
        { elements: $body, properties: { width: '20%'} },
        { elements: $body, properties: { width: '30%'} },
        { elements: $body, properties: { width: '50%'} },
        { elements: $body, properties: { width: '100%'} },
        { elements: $body, properties: { height: '100%' }, options: {
            complete: function () {
                var $wrap =$('.wrap');
                $wrap .velocity( 'transition.slideDownIn' );
                $('html').css({ background: '#fff' });
                $wrap.removeClass('wrap');
            }
        }
        }
    ];

    $.Velocity.RunSequence(loading, 0.5);


    //*******************VELOCITY END

})();
