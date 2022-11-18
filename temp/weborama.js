var adperfobj = {
    account_id : 7
    ,tracking_element_id : 14065
    ,width : 240
    ,height : 400
    ,fullhost : 'wcm-ru.frontend.weborama.fr'
    ,random : '[RANDOM]'
    ,burst : 'auto'
    ,imptrackers : []
    ,customparameter : []
    ,clicktrackers : []
    ,publisherclick : '[PUBLISHER_TRACKING_URL]'
};

var weboramaAdvertiserScript = document.createElement('script');
weboramaAdvertiserScript.async = true;
weboramaAdvertiserScript.src = 'https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js';
document.head.append(weboramaAdvertiserScript);