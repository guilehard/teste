!function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=241)}({2:function(t,n){t.exports=jQuery},241:function(t,n,e){"use strict";e.r(n);var a=e(2),r=e.n(a);function l(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.addButtons(),this.editingEvents(),this.saveEvents()}var n,e;return n=t,(e=[{key:"addButtons",value:function(){var t=r()("#rank_math_seo_details, #rank_math_title, #rank_math_description, #rank_math_image_alt, #rank_math_image_title");t.each((function(){var t=r()(this);t.append(' <a href=#" class="dashicons dashicons-edit" title="'+rankMath.bulkEditTitle+'"></a>'),t.wrapInner("<span/>"),t.append(' <span><a href="#" class="button button-primary button-small rank-math-column-save-all">'+rankMath.buttonSaveAll+'</a> <a href="#" class="button-link button-link-delete rank-math-column-cancel-all">'+rankMath.buttonCancel+"</a></span>")})),t.on("click",".dashicons-edit, .rank-math-column-cancel-all",(function(n){n.preventDefault();var e=r()(this).closest("th");r()(this).hasClass("rank-math-column-cancel-all")?(t.removeClass("bulk-editing"),r()(".rank-math-column-cancel","td.bulk-editing.dirty").trigger("click"),r()("td.bulk-editing").removeClass("bulk-editing")):(e.toggleClass("bulk-editing"),r()("td.column-"+e.attr("id")).toggleClass("bulk-editing"))}))}},{key:"editingEvents",value:function(){r()(".rank-math-column-value").on("input",(function(){var t=r()(this),n=t.closest("td");t.text()!==t.prev().text()?n.addClass("dirty"):n.removeClass("dirty")})).on("keypress",(function(t){if(13===t.keyCode)return r()(this).parent().find(".rank-math-column-save").trigger("click"),!1})),r()(".rank-math-column-cancel").on("click",(function(t){t.preventDefault();var n=r()(this).closest("td");n.removeClass("dirty");var e=n.find(".rank-math-column-value").prev(".rank-math-column-display");e.find("span").length&&(e=e.find("span")),n.find(".rank-math-column-value").text(e.text())}))}},{key:"saveEvents",value:function(){var t=this;r()(".rank-math-column-save-all").on("click",(function(n){n.preventDefault();var e={},a=[];r()(".dirty.bulk-editing").each((function(){var t=r()(this),n=parseInt(t.closest("tr").attr("id").replace("post-","")),l=t.find(".rank-math-column-value");a.push(t),e[n]=e[n]||{},e[n][l.data("field")]=l.text()})),t.save(e).done((function(n){n.success&&(a.forEach((function(n){t.setColumn(n)})),r()(".rank-math-column-cancel-all","#rank_math_seo_details").trigger("click"))}))})),r()(".rank-math-column-save").on("click",(function(n){n.preventDefault();var e=r()(this).closest(".dirty"),a=parseInt(e.closest("tr").attr("id").replace("post-","")),l=e.find(".rank-math-column-value"),i={};i[a]={},i[a][l.data("field")]=l.text(),t.save(i).done((function(n){n.success&&t.setColumn(e)}))}))}},{key:"setColumn",value:function(t){t.removeClass("dirty bulk-editing");var n=t.find(".rank-math-column-value").prev(".rank-math-column-display");n.find("span").length&&(n=n.find("span"));var e=document.createElement("div");e.innerHTML=t.find(".rank-math-column-value").text(),n.text(e.innerText)}},{key:"save",value:function(t){return r.a.ajax({url:rankMath.endpoint+"/updateMetaBulk",method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",rankMath.restNonce)},data:{rows:t}})}}])&&l(n.prototype,e),t}();r()((function(){new i}))}});