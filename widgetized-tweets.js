!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["hashtag"]=a(function(a,e,t,n,s){function l(a,e){var n,s,l="";return l+='\n  <li>\n    <a href="https://twitter.com/'+i((n=a.user,n=null==n||n===!1?n:n.screen_name,typeof n===p?n.apply(a):n))+'">@'+i((n=a.user,n=null==n||n===!1?n:n.screen_name,typeof n===p?n.apply(a):n))+'</a>:\n    <div class="tweet">',(s=t.text)?s=s.call(a,{hash:{},data:e}):(s=a.text,s=typeof s===p?s.apply(a):s),l+=i(s)+"</div>\n  </li>\n  "}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,a.helpers),s=s||{};var h,r="",p="function",i=this.escapeExpression,o=this;return r+="<h3>#",(h=t.hashtag)?h=h.call(e,{hash:{},data:s}):(h=e.hashtag,h=typeof h===p?h.apply(e):h),r+=i(h)+"</h3>\n<ul>\n  ",h=t.each.call(e,e.tweets,{hash:{},inverse:o.noop,fn:o.program(1,l,s),data:s}),(h||0===h)&&(r+=h),r+="\n</ul>\n"})}();
!function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["screenName"]=e(function(e,a,n,t,s){function l(e,a){var t,s,l="";return l+='\n  <li>\n    <a href="https://twitter.com/'+h((t=e.user,t=null==t||t===!1?t:t.screen_name,typeof t===c?t.apply(e):t))+'">@'+h((t=e.user,t=null==t||t===!1?t:t.screen_name,typeof t===c?t.apply(e):t))+'</a>:\n    <div class="tweet">',(s=n.text)?s=s.call(e,{hash:{},data:a}):(s=e.text,s=typeof s===c?s.apply(e):s),l+=h(s)+"</div>\n  </li>\n  "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),s=s||{};var r,p="",c="function",h=this.escapeExpression,i=this;return p+='<h3>\n  <a href="https://twitter.com/',(r=n.screen_name)?r=r.call(a,{hash:{},data:s}):(r=a.screen_name,r=typeof r===c?r.apply(a):r),p+=h(r)+'">@',(r=n.screen_name)?r=r.call(a,{hash:{},data:s}):(r=a.screen_name,r=typeof r===c?r.apply(a):r),p+=h(r)+"</a>\n</h3>\n<ul>\n  ",r=n.each.call(a,a.tweets,{hash:{},inverse:i.noop,fn:i.program(1,l,s),data:s}),(r||0===r)&&(p+=r),p+="\n</ul>\n"})}();

window.WidgetizedTweets = {
  hashtag: function(tag, domId, server) {
    var data = { hashtag: tag, tweets: [] };

    // renders received data into DOM
    var render = function(response) {
      $.each(JSON.parse(response), function(index, value) {
        data.tweets.push(value.value);
      });
      var el = Handlebars.templates.hashtag(data);
      $('#' + domId).append(el);
    };

    var url = server + '/hashtag/' + tag.toLowerCase();
    $.get(url, function(response) {
      render(response);
    });
  },

  screenName: function(screen_name, domId, server) {
    var data = { screen_name: screen_name, tweets: [] };

    // renders received data into DOM
    var render = function(response) {
      $.each(JSON.parse(response), function(index, value) {
        data.tweets.push(value.value);
      });
      var el = Handlebars.templates.screenName(data);
      $('#' + domId).append(el);
    };

    var url = server + '/screen_name/' + screen_name.toLowerCase();
    $.get(url, function(response) {
      render(response);
    });
  }
};
