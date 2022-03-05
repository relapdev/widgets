const getCode = ({ widgetId, url, token }) => {
    return `<div class="js-relap-adhoc-anchor" data-relap-id="${widgetId}"></div>
<script>
    (function () {
      var widgetId = '${widgetId}';

      var w = window;
      var d = w.document;
      var url = '${url.includes('://') ? url : `https://${url}`}';

      try {
          url = window.top.location.href;
      } catch (e) {}

      w.relapTasks = w.relapTasks || [];
      w.relapTasks.push(function (api) {
        function addWidget() {
          var anchorEl = d.querySelector(
            '.js-relap-adhoc-anchor[data-relap-id="'+ widgetId +'"]'
          );
          if (!anchorEl) {
            console.log("no anchor el found, exit");
            return;
          }
          anchorEl.className = "";
          api.addWidget({
            cfgId: widgetId,
            anchorEl: anchorEl,
            events: {
              onNoContent: function (obj) {
                anchorEl.remove();
              },
              onReady: function (obj) {
                // срабатывает при готовности виджета
              },
              onFolow: function (obj) {
                // срабатывает при клике на плитку
              },
            },
          });
        }

        if (api.isReady) return addWidget();

        api
          .init({
            token: token,
            url: url,
          })
          .then(addWidget);
      });

      if (!d.querySelector(".relap-runtime-iframe")) {
        var iframe = d.createElement("iframe");
        iframe.className = "relap-runtime-iframe";
        iframe.style =
          "position:absolute;top:-9999px;left:-9999px;visibility:hidden;";
        iframe.srcdoc =
          '<script data-relap-token="${token}" src="https://relap.io/v7/relap.js"><' + "/script>";
        d.body.appendChild(iframe);
      }
    })();
</${'script>'}`
}