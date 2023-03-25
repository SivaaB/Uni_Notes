!function(){"use strict";var t,e,o,n={667:function(t,e){e.q=void 0,e.q="3.2.2"},78:function(t,e,o){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MhchemConfiguration=void 0;var a=o(251),r=o(871),i=n(o(402)),p=n(o(360)),c=o(939),u=o(652),s={};s.Macro=p.default.Macro,s.xArrow=c.AmsMethods.xArrow,s.Machine=function(t,e,o){var n,a=t.GetArgument(e);try{n=u.mhchemParser.toTex(a,o)}catch(t){throw new i.default(t[0],t[1])}t.string=n+t.string.substr(t.i),t.i=0},new r.CommandMap("mhchem",{ce:["Machine","ce"],pu:["Machine","pu"],longrightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longRightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}"],longLeftrightharpoons:["Macro","\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longleftrightarrows:["Macro","\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}"],tripledash:["Macro","\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}"],xleftrightarrow:["xArrow",8596,6,6],xrightleftharpoons:["xArrow",8652,5,7],xRightleftharpoons:["xArrow",8652,5,7],xLeftrightharpoons:["xArrow",8652,5,7]},s),e.MhchemConfiguration=a.Configuration.create("mhchem",{handler:{macro:["mhchem"]}})},955:function(t,e){MathJax._.components.global.isObject,MathJax._.components.global.combineConfig,MathJax._.components.global.combineDefaults,e.r8=MathJax._.components.global.combineWithMathJax,MathJax._.components.global.MathJax},251:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Configuration=MathJax._.input.tex.Configuration.Configuration,e.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,e.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},871:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parseResult=MathJax._.input.tex.SymbolMap.parseResult,e.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,e.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,e.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,e.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,e.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,e.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,e.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,e.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},402:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.TexError.default},360:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=MathJax._.input.tex.base.BaseMethods.default},939:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.AmsMethods=MathJax._.input.tex.ams.AmsMethods.AmsMethods,e.NEW_OPS=MathJax._.input.tex.ams.AmsMethods.NEW_OPS},652:function(t,e){
/*!
 *************************************************************************
 *
 *  mhchemParser.ts
 *  4.1.1
 *
 *  Parser for the \ce command and \pu command for MathJax and Co.
 *
 *  mhchem's \ce is a tool for writing beautiful chemical equations easily.
 *  mhchem's \pu is a tool for writing physical units easily.
 *
 *  ----------------------------------------------------------------------
 *
 *  Copyright (c) 2015-2021 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  ----------------------------------------------------------------------
 *
 *  https://github.com/mhchem/mhchemParser
 *
 */
Object.defineProperty(e,"__esModule",{value:!0}),e.mhchemParser=void 0;var o=function(){function t(){}return t.toTex=function(t,e){return r.go(a.go(t,e),"tex"!==e)},t}();function n(t){var e,o,n={};for(e in t)for(o in t[e]){var a=o.split("|");t[e][o].stateArray=a;for(var r=0;r<a.length;r++)n[a[r]]=[]}for(e in t)for(o in t[e])for(a=t[e][o].stateArray||[],r=0;r<a.length;r++){var i=t[e][o];i.action_=[].concat(i.action_);for(var p=0;p<i.action_.length;p++)"string"==typeof i.action_[p]&&(i.action_[p]={type_:i.action_[p]});for(var c=e.split("|"),u=0;u<c.length;u++)if("*"===a[r]){var s=void 0;for(s in n)n[s].push({pattern:c[u],task:i})}else n[a[r]].push({pattern:c[u],task:i})}return n}e.mhchemParser=o;var a={go:function(t,e){if(!t)return[];void 0===e&&(e="ce");var o,n="0",r={};r.parenthesisLevel=0,t=(t=(t=t.replace(/\n/g," ")).replace(/[\u2212\u2013\u2014\u2010]/g,"-")).replace(/[\u2026]/g,"...");for(var i=10,p=[];;){o!==t?(i=10,o=t):i--;var c=a.stateMachines[e],u=c.transitions[n]||c.transitions["*"];t:for(var s=0;s<u.length;s++){var _=a.patterns.match_(u[s].pattern,t);if(_){for(var d=u[s].task,m=0;m<d.action_.length;m++){var h=void 0;if(c.actions[d.action_[m].type_])h=c.actions[d.action_[m].type_](r,_.match_,d.action_[m].option);else{if(!a.actions[d.action_[m].type_])throw["MhchemBugA","mhchem bug A. Please report. ("+d.action_[m].type_+")"];h=a.actions[d.action_[m].type_](r,_.match_,d.action_[m].option)}a.concatArray(p,h)}if(n=d.nextState||n,!(t.length>0))return p;if(d.revisit||(t=_.remainder),!d.toContinue)break t}}if(i<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(var o=0;o<e.length;o++)t.push(e[o]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.slice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/,"state of aggregation $":function(t){var e=a.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;var o=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return o?{match_:o[0],remainder:t.substr(o[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". __* ":/^([.\u22C5\u00B7\u2022]|[*])\s*/,"...":/^\.\.\.(?=$|[^.])/,"^{(...)}":function(t){return a.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return a.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return a.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return a.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return a.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return a.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return a.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return a.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}^":/^\{\}(?=\^)/,"{}":/^\{\}/,"{...}":function(t){return a.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return a.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return a.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$__$(...)$":function(t){return a.patterns.findObserveGroups(t,"${","","","}$")||a.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return a.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return a.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return a.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")||a.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\ce{","","","}")},"\\pu{(...)}":function(t){return a.patterns.findObserveGroups(t,"\\pu{","","","}")},oxidation$:/^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"d-oxidation$":/^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"roman numeral":/^[IVX]+/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){var e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/))return{match_:e[0],remainder:t.substr(e[0].length)};var o=a.patterns.findObserveGroups(t,"","$","$","");return o&&(e=o.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/))?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;var e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,o,n,a,r,i,p,c,u){var s=function(t,e){if("string"==typeof e)return 0!==t.indexOf(e)?null:e;var o=t.match(e);return o?o[0]:null},_=s(t,e);if(null===_)return null;if(t=t.substr(_.length),null===(_=s(t,o)))return null;var d=function(t,e,o){for(var n=0;e<t.length;){var a=t.charAt(e),r=s(t.substr(e),o);if(null!==r&&0===n)return{endMatchBegin:e,endMatchEnd:e+r.length};if("{"===a)n++;else if("}"===a){if(0===n)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];n--}e++}return null}(t,_.length,n||a);if(null===d)return null;var m=t.substring(0,n?d.endMatchEnd:d.endMatchBegin);if(r||i){var h=this.findObserveGroups(t.substr(d.endMatchEnd),r,i,p,c);if(null===h)return null;var l=[m,h.match_];return{match_:u?l.join(""):l,remainder:h.remainder}}return{match_:m,remainder:t.substr(d.endMatchEnd)}},match_:function(t,e){var o=a.patterns.patterns[t];if(void 0===o)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if("function"==typeof o)return a.patterns.patterns[t](e);var n=e.match(o);return n?n.length>2?{match_:n.slice(1),remainder:e.substr(n[0].length)}:{match_:n[1]||n[0],remainder:e.substr(n[0].length)}:null}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,o){return{type_:o}},"insert+p1":function(t,e,o){return{type_:o,p1:e}},"insert+p1+p2":function(t,e,o){return{type_:o,p1:e[0],p2:e[1]}},copy:function(t,e){return e},write:function(t,e,o){return o},rm:function(t,e){return{type_:"rm",p1:e}},text:function(t,e){return a.go(e,"text")},"tex-math":function(t,e){return a.go(e,"tex-math")},"tex-math tight":function(t,e){return a.go(e,"tex-math tight")},bond:function(t,e,o){return{type_:"bond",kind_:o||e}},"color0-output":function(t,e){return{type_:"color0",color:e}},ce:function(t,e){return a.go(e,"ce")},pu:function(t,e){return a.go(e,"pu")},"1/2":function(t,e){var o=[];e.match(/^[+\-]/)&&(o.push(e.substr(0,1)),e=e.substr(1));var n=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return n[1]=n[1].replace(/\$/g,""),o.push({type_:"frac",p1:n[1],p2:n[2]}),n[3]&&(n[3]=n[3].replace(/\$/g,""),o.push({type_:"tex-math",p1:n[3]})),o},"9,9":function(t,e){return a.go(e,"9,9")}},stateMachines:{tex:{transitions:n({empty:{0:{action_:"copy"}},"\\ce{(...)}":{0:{action_:[{type_:"write",option:"{"},"ce",{type_:"write",option:"}"}]}},"\\pu{(...)}":{0:{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},else:{0:{action_:"copy"}}}),actions:{}},ce:{transitions:n({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond{ loading=lazy }