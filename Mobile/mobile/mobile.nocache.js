function mobile(){
  var $intern_23 = '', $intern_32 = '" for "gwt:onLoadErrorFn"', $intern_30 = '" for "gwt:onPropertyErrorFn"', $intern_33 = '#', $intern_45 = '.cache.js', $intern_35 = '/', $intern_44 = ':', $intern_24 = '::', $intern_11 = '<html><head><\/head><body><\/body><\/html>', $intern_27 = '=', $intern_34 = '?', $intern_29 = 'Bad handler "', $intern_43 = 'CE25BECECFA986CAD8CEEB26FB7623AF', $intern_16 = 'DOMContentLoaded', $intern_6 = 'DUMMY', $intern_40 = 'base', $intern_38 = 'baseUrl', $intern_1 = 'begin', $intern_7 = 'body', $intern_0 = 'bootstrap', $intern_37 = 'clear.cache.gif', $intern_26 = 'content', $intern_47 = 'end', $intern_2 = 'gwt.codesvr.mobile=', $intern_3 = 'gwt.codesvr=', $intern_31 = 'gwt:onLoadErrorFn', $intern_28 = 'gwt:onPropertyErrorFn', $intern_25 = 'gwt:property', $intern_19 = 'head', $intern_8 = 'iframe', $intern_36 = 'img', $intern_13 = 'javascript', $intern_9 = 'javascript:""', $intern_46 = 'loadExternalRefs', $intern_20 = 'meta', $intern_4 = 'mobile', $intern_42 = 'mobile.devmode.js', $intern_39 = 'mobile.nocache.js', $intern_22 = 'mobile::', $intern_18 = 'moduleRequested', $intern_17 = 'moduleStartup', $intern_21 = 'name', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px; top: -1000px; !important', $intern_12 = 'script', $intern_41 = 'selectingPermutation', $intern_5 = 'startup', $intern_15 = 'undefined', $intern_14 = 'var $wnd = window.parent;';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  mobile.__sendStats = sendStats;
  mobile.__moduleName = $intern_4;
  mobile.__errFn = null;
  mobile.__moduleBase = $intern_6;
  mobile.__softPermutationId = 0;
  mobile.__computePropValue = null;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  function installScript(filename){
    var frameDoc;
    function getInstallLocationDoc(){
      setupInstallLocation();
      return frameDoc;
    }

    function getInstallLocation(){
      setupInstallLocation();
      return frameDoc.getElementsByTagName($intern_7)[0];
    }

    function setupInstallLocation(){
      if (frameDoc) {
        return;
      }
      var scriptFrame = $doc.createElement($intern_8);
      scriptFrame.src = $intern_9;
      scriptFrame.id = $intern_4;
      scriptFrame.style.cssText = $intern_10;
      scriptFrame.tabIndex = -1;
      $doc.body.appendChild(scriptFrame);
      frameDoc = scriptFrame.contentDocument;
      if (!frameDoc) {
        frameDoc = scriptFrame.contentWindow.document;
      }
      frameDoc.open();
      frameDoc.write($intern_11);
      frameDoc.close();
      var frameDocbody = frameDoc.getElementsByTagName($intern_7)[0];
      var script = frameDoc.createElement($intern_12);
      script.language = $intern_13;
      var temp = $intern_14;
      script.text = temp;
      frameDocbody.appendChild(script);
    }

    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_15) {
          return typeof $doc.body != $intern_15 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = false;
      if (isBodyLoaded()) {
        bodyDone = true;
        callback();
      }
      var onBodyDoneTimerId;
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_16, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_16, function(){
          onBodyDone();
        }
        , false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code){
      var docbody = getInstallLocation();
      var script = getInstallLocationDoc().createElement($intern_12);
      script.language = $intern_13;
      script.text = code;
      docbody.appendChild(script);
    }

    mobile.onScriptDownloaded = function(code){
      setupWaitForBodyLoad(function(){
        installCode(code);
      }
      );
    }
    ;
    sendStats($intern_17, $intern_18);
    var script = $doc.createElement($intern_12);
    script.src = filename;
    $doc.getElementsByTagName($intern_19)[0].appendChild(script);
  }

  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_20);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_21), content;
      if (name) {
        name = name.replace($intern_22, $intern_23);
        if (name.indexOf($intern_24) >= 0) {
          continue;
        }
        if (name == $intern_25) {
          content = meta.getAttribute($intern_26);
          if (content) {
            var value, eq = content.indexOf($intern_27);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_23;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_28) {
          content = meta.getAttribute($intern_26);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_29 + content + $intern_30);
            }
          }
        }
         else if (name == $intern_31) {
          content = meta.getAttribute($intern_26);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_29 + content + $intern_32);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name){
      var value = metaProps[name];
      return value == null?null:value;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    mobile.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_33);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_34);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_35, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_23;
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_36);
        img.src = url + $intern_37;
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_38);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_23;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_12);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_39) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_23;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_40);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_23;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_23) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_23) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_23) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return mobile.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value = providers[propName](), allowedValuesMap = values[propName];
      if (value in allowedValuesMap) {
        return value;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value);
      }
      throw null;
    }

    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    mobile.__computePropValue = computePropValue;
    sendStats($intern_0, $intern_41);
    if (isHostedMode()) {
      return computeUrlForResource($intern_42);
    }
    var strongName;
    try {
      strongName = $intern_43;
      var idx = strongName.indexOf($intern_44);
      if (idx != -1) {
        softPermutationId = strongName.substring(idx + 1);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    mobile.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_45);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    sendStats($intern_46, $intern_1);
    sendStats($intern_46, $intern_47);
  }

  processMetas();
  mobile.__moduleBase = computeScriptBase();
  var filename = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats($intern_0, $intern_47);
  installScript(filename);
}

mobile();
