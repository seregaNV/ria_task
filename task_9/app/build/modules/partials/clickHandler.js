define("clickHandler",["jquery","checkStorage"],function(e,t){e("ul.container").on("click","li",function(){var i=e(this).find("span"),n=i.attr("id"),c=i.text();if(t){var r=window.localStorage;r.getItem(n)>=0&&(c=r.getItem(n),r.setItem(n,Number(c)+1))}i.text(Number(c)+1)})});