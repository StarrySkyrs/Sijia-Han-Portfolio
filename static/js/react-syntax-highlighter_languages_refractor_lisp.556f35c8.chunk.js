"use strict";(self.webpackChunksijia_han=self.webpackChunksijia_han||[]).push([[3520],{3807:e=>{function a(e){!function(e){function a(e){return RegExp(/(\()/.source+"(?:"+e+")"+/(?=[\s\)])/.source)}function n(e){return RegExp(/([\s([])/.source+"(?:"+e+")"+/(?=[\s)])/.source)}var s=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,r="&"+s,t="(\\()",o="(?=\\s)",i=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,l={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+s+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+s),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+s),alias:"property"},splice:{pattern:RegExp(",@?"+s),alias:["symbol","variable"]},keyword:[{pattern:RegExp(t+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+o),lookbehind:!0},{pattern:RegExp(t+"(?:append|by|collect|concat|do|finally|for|in|return)"+o),lookbehind:!0}],declare:{pattern:a(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:a(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:n(/nil|t/.source),lookbehind:!0},number:{pattern:n(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(t+"def(?:const|custom|group|var)\\s+"+s),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(s)}},defun:{pattern:RegExp(t+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+s+/\s+\(/.source+i+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+s),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(t+"lambda\\s+\\(\\s*(?:&?"+s+"(?:\\s+&?"+s+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(t+s),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},p={"lisp-marker":RegExp(r),varform:{pattern:RegExp(/\(/.source+s+/\s+(?=\S)/.source+i+/\)/.source),inside:l},argument:{pattern:RegExp(/(^|[\s(])/.source+s),lookbehind:!0,alias:"variable"},rest:l},u="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(t+i+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+u),inside:p},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+u),inside:p},keys:{pattern:RegExp("&key\\s+"+u+"(?:\\s+&allow-other-keys)?"),inside:p},argument:{pattern:RegExp(s),alias:"variable"},punctuation:/[()]/}};l.lambda.inside.arguments=d,l.defun.inside.arguments=e.util.clone(d),l.defun.inside.arguments.inside.sublist=d,e.languages.lisp=l,e.languages.elisp=l,e.languages.emacs=l,e.languages["emacs-lisp"]=l}(e)}e.exports=a,a.displayName="lisp",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp.556f35c8.chunk.js.map