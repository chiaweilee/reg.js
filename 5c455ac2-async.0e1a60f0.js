(("undefined"!=typeof globalThis?globalThis:self).makoChunk_global=("undefined"!=typeof globalThis?globalThis:self).makoChunk_global||[]).push([["5c455ac2"],{"5c455ac2":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return t;}}),d("fed0eea6");let t=[{value:"import isMobileNo from 'iscorrect/mobileNo';\nisMobileNo('13333333333'); // { valid: true }\n",paraId:0,tocIndex:1},{value:"In loose mode, spaces and hyphens (-) are allowed as separators.",paraId:1,tocIndex:2},{value:"import isMobileNo from 'iscorrect/mobileNo';\nisMobileNo('133-3333-3333'); // { valid: true }\n",paraId:2,tocIndex:2},{value:"Data cleaning could be performed concurrently with validation.",paraId:3,tocIndex:3},{value:"import isMobileNo from 'iscorrect/mobileNo';\n\nfunction validateAndClean(mobileNo) {\n  const { valid, formatted } = isMobileNo(mobileNo;\n  if (valid) return formatted.local;\n}\n\nvalidateAndClean('133-3333-3333'); // '13333333333'\n",paraId:4,tocIndex:3},{value:"By default, all segments are validated, but you can adjust the scope of validation through parameters.",paraId:5,tocIndex:4},{value:'import isMobileNo from \'iscorrect/mobileNo\';\n\nisMobileNo(\'14000000000\', {\n  rules: {\n    dataCard: true, // specify whether to validate the "internet card" segment.\n    virtualOperator: true, // specify whether to validate the "virtual operator" segment.\n    satellite: true, // specify whether to validate the "satellite" segment.\n    internetOfThings: true, // specify whether to validate the "internet of things" segment.\n  },\n});\n',paraId:6,tocIndex:4},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u5FC5\u586B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"mobileNo",paraId:7,tocIndex:7},{value:"\u624B\u673A\u53F7\u5417",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"\u662F",paraId:7,tocIndex:7},{value:"options",paraId:7,tocIndex:7},{value:"\u6821\u9A8C\u9009\u9879",paraId:7,tocIndex:7},{value:"MobileNoOptions",paraId:7,tocIndex:7},{value:"\u5426",paraId:7,tocIndex:7},{value:"{}",paraId:7,tocIndex:7},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"\u5FC5\u586B",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:8},{value:"loose",paraId:8,tocIndex:8},{value:"\u5BBD\u677E\u6821\u9A8C",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"\u5426",paraId:8,tocIndex:8},{value:"false",paraId:8,tocIndex:8},{value:"rules",paraId:8,tocIndex:8},{value:"\u53F7\u6BB5\u6821\u9A8C\u89C4\u5219",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"\u5426",paraId:8,tocIndex:8},{value:"{dataCard:true,virtualOperator:true,satellite:true,internetOfThings:true}",paraId:8,tocIndex:8},{value:"\u53C2\u6570",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u5FC5\u5B9A\u8FD4\u56DE",paraId:9,tocIndex:9},{value:"target",paraId:9,tocIndex:9},{value:"\u6821\u9A8C\u5BF9\u8C61\u503C",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"\u662F",paraId:9,tocIndex:9},{value:"valid",paraId:9,tocIndex:9},{value:"\u6821\u9A8C\u7ED3\u679C",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"\u662F",paraId:9,tocIndex:9},{value:"msg",paraId:9,tocIndex:9},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"\u662F",paraId:9,tocIndex:9},{value:"CC",paraId:9,tocIndex:9},{value:"\u56FD\u5BB6\u7801",paraId:9,tocIndex:9},{value:"'86'",paraId:9,tocIndex:9},{value:"\u5426",paraId:9,tocIndex:9},{value:"MAC",paraId:9,tocIndex:9},{value:"\u624B\u673A\u53F7\u6BB5",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"\u5426",paraId:9,tocIndex:9},{value:"operator",paraId:9,tocIndex:9},{value:"\u8FD0\u8425\u5546\u540D\u79F0",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"\u5426",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"\u53F7\u6BB5\u7C7B\u578B",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"\u5426",paraId:9,tocIndex:9},{value:"formatted",paraId:9,tocIndex:9},{value:"\u53F7\u7801\u683C\u5F0F\u5316\u7ED3\u679C",paraId:9,tocIndex:9},{value:"{international:string,local:string}",paraId:9,tocIndex:9},{value:"\u5426",paraId:9,tocIndex:9},{value:"\u4E2D\u56FD\u7535\u4FE1\uFF1A133\u3001149\u3001153\u3001173\u3001177\u3001180\u3001181\u3001189\u3001190\u3001191\u3001193\u3001199",paraId:10,tocIndex:10},{value:"\n\u4E2D\u56FD\u8054\u901A\uFF1A130\u3001131\u3001132\u3001145\u3001155\u3001156\u3001166\u3001167\u3001171\u3001175\u3001176\u3001185\u3001186\u3001196",paraId:10,tocIndex:10},{value:"\n\u4E2D\u56FD\u79FB\u52A8\uFF1A134(0-8)\u3001135\u3001136\u3001137\u3001138\u3001139\u30011440\u3001147\u3001148\u3001150\u3001151\u3001152\u3001157\u3001158\u3001159\u3001172\u3001178\u3001182\u3001183\u3001184\u3001187\u3001188\u3001195\u3001197\u3001198",paraId:10,tocIndex:10},{value:"\n\u4E2D\u56FD\u5E7F\u7535\uFF1A192",paraId:10,tocIndex:10},{value:"\n\u4E0A\u7F51\u5361\u4E13\u5C5E\u53F7\u6BB5\uFF1A\u4E2D\u56FD\u8054\u901A 145\uFF0C\u4E2D\u56FD\u79FB\u52A8 147\uFF0C\u4E2D\u56FD\u7535\u4FE1 149",paraId:10,tocIndex:10},{value:"\n\u865A\u62DF\u8FD0\u8425\u5546\uFF1A\u7535\u4FE1\uFF1A1700\u30011701\u30011702\u3001162\uFF1B\u79FB\u52A8\uFF1A1703\u30011705\u30011706\u3001165\uFF1B\u8054\u901A\uFF1A1704\u30011707\u30011708\u30011709\u3001171\u3001167",paraId:10,tocIndex:10},{value:"\n\u536B\u661F\u901A\u4FE1\uFF1A1349\uFF08\u201C\u5168\u7403\u661F\u201D\u536B\u661F\u79FB\u52A8\u7535\u8BDD\uFF09\u3001174\uFF08\u4E2D\u56FD\u7535\u4FE1\u4EE3\u7406\u8FD0\u8425\u5929\u901A\u4E00\u53F7\u536B\u661F\u901A\u4FE1\uFF09",paraId:10,tocIndex:10},{value:"\n\u7269\u8054\u7F51\uFF1A140\u3001141\u3001144\u3001146\u3001148",paraId:10,tocIndex:10}];}}]);
//# sourceMappingURL=5c455ac2-async.0e1a60f0.js.map