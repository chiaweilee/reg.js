(("undefined"!=typeof globalThis?globalThis:self).makoChunk_global=("undefined"!=typeof globalThis?globalThis:self).makoChunk_global||[]).push([["9ba74567"],{"9ba74567":function(e,n,o){"use strict";o.d(n,"__esModule",{value:!0}),o.d(n,"default",{enumerable:!0,get:function(){return a;}});var t=o("dedd6f44"),r=o("386b7292"),u=o("186b2346"),a=function(){var e=(0,t.useParams)().id,n=(0,t.useDemo)(e),o=(0,u.useRenderer)({id:e,component:n.component,renderOpts:n.renderOpts}).canvasRef,a=n||{},s=a.component,d=a.renderOpts,i=(0,t.useLiveDemo)(e),l=i.node,f=i.setSource,c=i.error,m=i.loading,v=l||(null!=d&&d.renderer?(0,r.createElement)("div",{ref:o}):s&&(0,r.createElement)(s));return(0,r.useEffect)(function(){var e=function(e){"dumi.liveDemo.setSource"===e.data.type&&f(e.data.value);};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e);};},[f]),(0,r.useEffect)(function(){!m&&(c||l)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:c}});},[c,l,m]),v;};}}]);
//# sourceMappingURL=9ba74567-async.5eb608ff.js.map