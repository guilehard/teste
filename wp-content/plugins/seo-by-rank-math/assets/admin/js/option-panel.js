!function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=240)}({2:function(t,e){t.exports=jQuery},240:function(t,e,a){"use strict";a.r(e);var n,o=a(2),r=a.n(o),i=a(52),s=a(39);(n=r.a)((function(){window.rankMathOptions={init:function(){this.misc(),this.preview(),this.scCache(),rankMathAdmin.variableInserter(),this.searchEngine.init(),this.addressFormat(),this.siteMap()},searchEngine:{init:function(){this.form=n(".rank-math-search-options"),this.wrap=this.form.closest(".rank-math-wrap-settings"),this.input=this.form.find("input"),this.select=this.form.find("select"),this.tabs=this.wrap.find(".rank-math-tabs"),this.panels=this.wrap.find(".rank-math-tab"),this.indexes={},this.buildIndex(),this.events()},events:function(){var t=this,e=t.tabs.find(">.rank-math-tabs-navigation"),a=n('<div class="rank-math-search-dropdown"></div>'),o=!0;t.tabs.find(">.rank-math-tabs-content").prepend('<div class="rank-math-setting-search-empty hidden">No results found.</div>'),t.form.append(a),t.select.val(rankMath.optionPage),a.hide().empty();var r=_.debounce((function(e){t.wrap.addClass("searching"),t.panels.show(),t.searchOptions(e,t.wrap)}),300),i=_.debounce((function(e){t.wrap.addClass("searching"),t.searchIndexes(e,a)}),300);t.form.on("click",".clear-search",(function(a){a.preventDefault(),t.input.val(""),t.clearSearch(e)})),t.select.on("change",(function(){o=t.select.val()===rankMath.optionPage,a.hide().empty(),o||(t.clearSearch(e),a.append(t.indexes[t.select.val()])),t.input.trigger("input")})),t.input.on("input",(function(){if(""===t.input.val())return t.clearSearch(e,!o&&a),!1;(o?r:i)(t.input.val().toLowerCase())})),a.on("click",".cmb-row",(function(){var e=n(this);window.location=window.location.pathname+"?page=rank-math-options-"+t.select.val()+"#"+e.closest(".dropdown-tab").attr("id")}));var s=n(".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *");n("body").on("click",(function(t){n(t.target).is(s)||a.hide()}))},searchIndexes:function(t,e){if(1<=t.trim().length){var a=e.find(".cmb-row"),o=0;a.hide().each((function(){var e=n(this);e.text().trim().toLowerCase().includes(t)&&(e.show(),++o)})),e.show(),e.toggleClass("empty",0===o)}},searchOptions:function(t,e){if(1<=t.trim().length){n(".cmb-row").hide().each((function(){var e=n(this);e.hasClass("cmb-type-title")?e.hide():e.text().trim().toLowerCase().includes(t)&&e.show()}));var a=n(".cmb-row:visible");0===a.length?e.addClass("search-no-results"):(e.removeClass("search-no-results"),a.each((function(){n(this).find("input, select").each((function(){n('span[data-field="'+n(this).attr("name")+'"]').each((function(){rankMathAdmin.loopDependencies(n(this).closest(".rank-math-cmb-dependency"))}))}))})))}},clearSearch:function(t,e){e=e||!1,this.wrap.removeClass("searching search-no-results"),n(">a.active",t).trigger("click"),e?e.hide():(n(".cmb-row").show(),n(".rank-math-cmb-dependency",".cmb-form, .rank-math-metabox-wrap").each((function(){rankMathAdmin.loopDependencies(n(this))})))},buildIndex:function(){var t=window.localStorage.getItem("rank-math-option-search-index"),e=void 0===t||t!==rankMath.version;["general","titles","sitemap"].forEach((function(t){this.getIndex(t,e)}),this),e&&window.localStorage.setItem("rank-math-option-search-index",rankMath.version)},getIndex:function(t,e){var a=this;e?n("<div/>").load(rankMath.adminurl+"?page=rank-math-options-"+t,(function(e,o){if("error"!==o){var r=n(e).find(".rank-math-tabs-content");r.find(".rank-math-tab").removeClass().addClass("dropdown-tab"),r.find(".cmb-row").each((function(){var t=n(this);(t.hasClass("cmb-type-title")||t.hasClass("cmb-type-notice"))&&t.remove(),t.find(".cmb-td").children(":not(.cmb2-metabox-description)").remove(),t.find("label,.cmb2-metabox-description").unwrap(),t.removeAttr("data-fieldtype")})),r=r.html().replace(/(\r\n\t|\n|\r\t)/gm,""),a.indexes[t]=n(r),window.localStorage.setItem("rank-math-option-"+t+"-index",r)}})):a.indexes[t]=n(window.localStorage.getItem("rank-math-option-"+t+"-index"))}},scCache:function(){n(".console-cache-delete").on("click",(function(t){t.preventDefault();var e=n(this),a=e.data("days");window.confirm((-1===a?"You are about to delete your whole Cache. Every dataset older than 90 days is lost forever!":"You are about to delete your 90 days Cache?")+" Are you sure you want to continue?")&&(e.prop("disabled",!0),Object(i.a)("search_console_delete_cache",{days:a},"GET").always((function(){e.prop("disabled",!1)})).done((function(t){t&&t.success&&(Object(s.a)("Cache deleted.","success",n("h1",".rank-math-wrap-settings")),n(".rank-math-console-db-info").remove(),n("#console-updating-manually-progress").before(t.message))})))})),n(".console-cache-update-manually").on("click",(function(t){t.preventDefault();var e=n(this),a=n("#console_caching_control").val();e.prop("disabled",!0),Object(i.a)("search_console_get_cache",{days:a},"GET").done((function(t){t&&t.success?Object(s.a)(t.message,"success",n("h1.page-title")):Object(s.a)("Unable to update cache due to: "+t.error,"error",n("h1.page-title"))}))}))},addressFormat:function(){var t=n("input[type=text], textarea",".rank-math-address-format");if(t.length){t.attr("autocomplete","off"),t.wrap('<div class="rank-math-variables-wrap"/>');var e=n("body"),a=t.parent(".rank-math-variables-wrap");a.append('<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>');var o=n("<ul/>"),r=n('<div class="rank-math-variables-dropdown"></div>');n.each({"{address} {locality}, {region} {postalcode}":"(New York, NY 12345)","{address} {postalcode}, {locality} {region}":"(New York 12345, NY)","{address} {locality} {postalcode}":"(New York NY 12345)","{postalcode} {region} {locality} {address}":"(12345 NY New York)","{address} {locality}":"(New York NY)"},(function(t,e){o.append('<li data-var="'+e+'"><strong>'+t+"</strong></li>")})),r.append(o),n("rank-math-variables-wrap:eq(0)").append(r);var i=n(".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *");e.on("click",(function(t){n(t.target).is(i)||r.hide()}));var s=r.find("input"),c=r.find("li");n(a).on("click",".rank-math-variables-button",(function(t){t.preventDefault(),n(this).after(r),c.show(),r.show(),s.val("").focus()})),r.on("click","li",(function(t){t.preventDefault();var e=n(this);e.closest(".rank-math-variables-wrap").find("textarea").val(e.find("strong").text())}))}},misc:function(){void 0!==r.a.fn.select2&&n("[data-s2-pages]").select2({ajax:{url:rankMath.ajaxurl+"?action=rank_math_search_pages",dataType:"json",delay:250},width:"100%",minimumInputLength:3}),n("#htaccess_accept_changes").on("change",(function(){n("#htaccess_content").prop("readonly",!this.checked)})),n(".reset-options").on("click",(function(){return!!window.confirm("Are you sure? You want to reset settings.")&&(n(window).off("beforeunload"),!0)}));var t=n(".rank-math-tabs");setTimeout((function(){window.localStorage.removeItem(t.attr("id"))}),1e3),n(".save-options").on("click",(function(){var e=n("> .rank-math-tabs-navigation > a.active",t);return window.localStorage.setItem(t.attr("id"),e.attr("href")),n(window).off("beforeunload"),!0}));var e=!1;n(window).on("load",(function(){n(".cmb-form").on("change","input, textarea, select",(function(){e=!0}))})),n(window).on("beforeunload",(function(){if(e)return"Are you sure? You didn't finish the form!"})),n(".custom-sep").on("keyup",(function(){var t=n(this);t.closest("li").find("input.cmb2-option").val(t.text()).trigger("change")}))},preview:function(){n("[data-preview]").on("change",(function(){var t=n(this),e=null,a="";if(t.is(":radio")&&(e=t.closest(".cmb-td")),null!==e)if(e.hasClass("done"))t.is(":checked")&&(a=e.find("h5")).text(a.data("title").format(t.val()));else if(e.addClass("done"),"title"===t.data("preview")){var o="";o+='<div class="rank-math-preview-title" data-title="Preview"><div>',o+='<h5 data-title="'+rankMath.postTitle+" {0} "+rankMath.blogName+'"></h5>',o+="<span>"+rankMath.postUri+"</span>",e.append(o+="</div></div>"),(a=e.find("h5")).text(a.data("title").format(t.val()))}})).trigger("change")},siteMap:function(){var t=n(".sitemap-nginx-notice");t.length&&t.on("click","a span",(function(e){return e.preventDefault(),t.toggleClass("active"),!1}))}},window.rankMathOptions.init()}))},39:function(t,e,a){"use strict";var n=a(2),o=a.n(n);e.a=function(t,e,a,n){e=e||"error",n=n||!1;var r=o()('<div class="notice notice-'+e+' is-dismissible"><p>'+t+"</p></div>").hide();a.next(".notice").remove(),a.after(r),r.slideDown(),o()(document).trigger("wp-updates-notice-added"),n&&setTimeout((function(){r.fadeOut((function(){r.remove()}))}),n)}},52:function(t,e,a){"use strict";var n=a(2),o=a.n(n);e.a=function(t,e,a){return o.a.ajax({url:rankMath.ajaxurl,type:a||"POST",dataType:"json",data:o.a.extend(!0,{action:"rank_math_"+t,security:rankMath.security},e)})}}});