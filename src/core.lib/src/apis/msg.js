const _0x4cb96a=_0xe7e0;(function(_0x21347d,_0x486a88){const _0x160427=_0xe7e0,_0x21abac=_0x21347d();while(!![]){try{const _0x21ebb4=parseInt(_0x160427(0xc3))/0x1+-parseInt(_0x160427(0xa9))/0x2*(-parseInt(_0x160427(0xb7))/0x3)+-parseInt(_0x160427(0x9a))/0x4*(-parseInt(_0x160427(0x94))/0x5)+-parseInt(_0x160427(0xa2))/0x6+-parseInt(_0x160427(0xc5))/0x7*(parseInt(_0x160427(0xb4))/0x8)+-parseInt(_0x160427(0x81))/0x9*(parseInt(_0x160427(0xbd))/0xa)+-parseInt(_0x160427(0x8d))/0xb;if(_0x21ebb4===_0x486a88)break;else _0x21abac['push'](_0x21abac['shift']());}catch(_0xef6740){_0x21abac['push'](_0x21abac['shift']());}}}(_0xbe84,0xc55f8));function _0xe7e0(_0x417906,_0x1714bd){const _0xbe8482=_0xbe84();return _0xe7e0=function(_0xe7e055,_0x2651c2){_0xe7e055=_0xe7e055-0x81;let _0x1efe5=_0xbe8482[_0xe7e055];return _0x1efe5;},_0xe7e0(_0x417906,_0x1714bd);}import{selfInfo}from'@/core/data';import{log,logError}from'@/common/utils/log';function _0xbe84(){const _0xee1c8e=['iMVfx','arkElement','sendMsg','sendStatus','60uCyLXk','then','setEmojiLike','OJVFo','delete','uid','nick','activateChatAndGetHistory','2028408asCQFo','addListener','getMsgsByMsgId','recallMsg','onLoginSuccess','IXzFA','biShs','748982POEqAd','chatType','setMsgRead','set','catch','WzYwG','forwardMsg','rMCQF','tADMd','map','owwgh','2746664DtCrxb','multiForwardMsg','forEach','6JVqHJe','length','getMsgService','yYyHU','IBYti','peerUid','2610tUQaxh','转发消息超时','bWEAm','hOZzJ','setMsgEmojiLikes','parse','1152700nHZUzN','DBwhm','14RYkaxs','getMsgsIncludeSelf','find','oSRNE','getMultiMsg','34461LqbJOH','qwmZs','session','kFsnv','gFmWV','onMsgInfoListUpdate','fetchRecentContact','getMsgsBySeqAndCount','activateChat','IiZJQ','DlcxW','BuJBQ','1329834YhotyP','JfgyW','getMsgHistory','gDQkX','Hsdrd','msgId','发送超时','350585qtntZf','senderUid'];_0xbe84=function(){return _0xee1c8e;};return _0xbe84();}import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener['onAddSendMsg']=_0x4c2084=>{const _0x305cdb=_0xe7e0,_0x3a81f7={'Hsdrd':function(_0x95399c,_0x355207){return _0x95399c(_0x355207);}};for(const [_0x16ca63,_0x1ad916]of sentMsgTasks){_0x3a81f7[_0x305cdb(0x91)](_0x1ad916,_0x4c2084),sentMsgTasks[_0x305cdb(0x9e)](_0x16ca63);}if(sendMessagePool[_0x4c2084['peerUid']]){const _0xc0c8b4=sendMessagePool[_0x4c2084['peerUid']]?.(_0x4c2084);_0xc0c8b4 instanceof Promise&&_0xc0c8b4[_0x305cdb(0x9b)]()[_0x305cdb(0xad)](logError);}},msgListener[_0x4cb96a(0x86)]=_0x8ab27=>{const _0x21c1eb=_0x4cb96a,_0x425e02={'tADMd':function(_0x515a79,_0x2f47ad){return _0x515a79(_0x2f47ad);},'BuJBQ':function(_0x5e2790,_0x1f8e22){return _0x5e2790 instanceof _0x1f8e22;}};_0x8ab27[_0x21c1eb(0xb6)](_0x230942=>{const _0xa34e15=_0x21c1eb,_0x5c6c6e={'yYyHU':function(_0x383dca,_0xa763ec){const _0x48ddf2=_0xe7e0;return _0x425e02[_0x48ddf2(0xb1)](_0x383dca,_0xa763ec);},'biShs':function(_0x899a04,_0x110d54){const _0x1d7d30=_0xe7e0;return _0x425e02[_0x1d7d30(0x8c)](_0x899a04,_0x110d54);},'IXzFA':function(_0x47850a,_0x7c9459){const _0xccadb7=_0xe7e0;return _0x425e02[_0xccadb7(0xb1)](_0x47850a,_0x7c9459);}};new Promise((_0xbea5f6,_0x32de5b)=>{const _0x4981ae=_0xe7e0;for(const _0x3653c1 in sendSuccessCBMap){const _0x30f4ab=sendSuccessCBMap[_0x3653c1],_0x5cc2a0=_0x5c6c6e[_0x4981ae(0xba)](_0x30f4ab,_0x230942),_0x1c1845=_0x16f89a=>{_0x16f89a&&delete sendSuccessCBMap[_0x3653c1];};_0x5c6c6e[_0x4981ae(0xa8)](_0x5cc2a0,Promise)?_0x5cc2a0[_0x4981ae(0x9b)](_0x1c1845):_0x5c6c6e[_0x4981ae(0xa7)](_0x1c1845,_0x5cc2a0);}})[_0xa34e15(0x9b)]()[_0xa34e15(0xad)](log);});},setTimeout(()=>{const _0x243056=_0x4cb96a;napCatCore[_0x243056(0xa6)](()=>{const _0x35817e=_0x243056;napCatCore[_0x35817e(0xa3)](msgListener);});},0x64);export class NTQQMsgApi{static async[_0x4cb96a(0x9c)](_0x118237,_0x1d91e7,_0x1ff673,_0x1141fe=!![]){const _0x117984=_0x4cb96a,_0x487e0e={'gFmWV':function(_0x3d89bc,_0x59d3a8){return _0x3d89bc>_0x59d3a8;}};return napCatCore[_0x117984(0x83)][_0x117984(0xb9)]()[_0x117984(0xc1)](_0x118237,_0x1d91e7,_0x1ff673,_0x487e0e[_0x117984(0x85)](_0x1ff673[_0x117984(0xb8)],0x3)?'2':'1',_0x1141fe);}static async[_0x4cb96a(0xc9)](_0x3fa483,_0x5b78b2,_0x236a32){const _0x241e3f=_0x4cb96a;return napCatCore[_0x241e3f(0x83)][_0x241e3f(0xb9)]()['getMultiMsg'](_0x3fa483,_0x5b78b2,_0x236a32);}static async[_0x4cb96a(0xa4)](_0x154750,_0x3a1384){const _0x1a5923=_0x4cb96a;return await napCatCore[_0x1a5923(0x83)][_0x1a5923(0xb9)]()[_0x1a5923(0xa4)](_0x154750,_0x3a1384);}static async[_0x4cb96a(0x88)](_0xee3927,_0x113717,_0xd42266,_0x14c082,_0x5e241e){const _0x942978=_0x4cb96a;return await napCatCore[_0x942978(0x83)]['getMsgService']()['getMsgsBySeqAndCount'](_0xee3927,_0x113717,_0xd42266,_0x14c082,_0x5e241e);}static async[_0x4cb96a(0x89)](_0x5ed0f6){}static async[_0x4cb96a(0xa1)](_0x2ca5d2){}static async[_0x4cb96a(0xab)](_0x5563ab){const _0x23c233=_0x4cb96a;return napCatCore['session']['getMsgService']()[_0x23c233(0xab)](_0x5563ab[_0x23c233(0xaa)],_0x5563ab[_0x23c233(0xbc)],_0x5563ab['guildId']);}static async[_0x4cb96a(0x8f)](_0x212dac,_0x242d28,_0x398f7b){const _0x1ebcf4=_0x4cb96a;return napCatCore[_0x1ebcf4(0x83)]['getMsgService']()[_0x1ebcf4(0xc6)](_0x212dac,_0x242d28,_0x398f7b,!![]);}static async[_0x4cb96a(0x87)](){}static async[_0x4cb96a(0xa5)](_0x1fe86e,_0x3b81c7){const _0x2b7513=_0x4cb96a;await napCatCore[_0x2b7513(0x83)][_0x2b7513(0xb9)]()['recallMsg']({'chatType':_0x1fe86e[_0x2b7513(0xaa)],'peerUid':_0x1fe86e[_0x2b7513(0xbc)]},_0x3b81c7);}static async[_0x4cb96a(0x98)](_0xb6dabe,_0x14eed1,_0x571730=!![],_0x330442=0x2710){const _0xb6d6fc=_0x4cb96a,_0x2cdffb={'ZIhgY':function(_0x2671d8,_0x2add65){return _0x2671d8>_0x2add65;},'kFsnv':function(_0x532faf,_0x265503){return _0x532faf(_0x265503);},'OJVFo':function(_0x3d4f2c){return _0x3d4f2c();},'mwxXf':function(_0x5cb3e4,_0x1b6688){return _0x5cb3e4===_0x1b6688;},'HrnSU':_0xb6d6fc(0x93),'bWEAm':function(_0x2087ea,_0x3b0c53,_0x4eaa6e){return _0x2087ea(_0x3b0c53,_0x4eaa6e);}},_0x57e74a=_0xb6dabe[_0xb6d6fc(0xbc)];let _0xf309=0x0;const _0x5346d5=async()=>{const _0x4eeae1=_0xb6d6fc;if(_0x2cdffb['ZIhgY'](_0xf309,_0x330442))throw _0x4eeae1(0x93);const _0xb673b5=sendMessagePool[_0xb6dabe[_0x4eeae1(0xbc)]];if(_0xb673b5)return await _0x2cdffb[_0x4eeae1(0x84)](sleep,0x1f4),_0xf309+=0x1f4,await _0x2cdffb[_0x4eeae1(0x9d)](_0x5346d5);else return;};return await _0x5346d5(),new Promise((_0x483421,_0x2f2bc8)=>{const _0x40fadc=_0xb6d6fc,_0x4cdc0c={'WzYwG':function(_0x5bb18d,_0x26a210){return _0x2cdffb['mwxXf'](_0x5bb18d,_0x26a210);},'qwmZs':function(_0x519499,_0x555327){return _0x519499(_0x555327);},'gDQkX':_0x2cdffb['HrnSU']};let _0xc635d7=![],_0x5a0082=null;const _0x1f0ea2=randomUUID();sendSuccessCBMap[_0x1f0ea2]=_0x4ebd3a=>{const _0x326495=_0xe7e0;if(_0x4ebd3a[_0x326495(0x92)]===_0x5a0082?.[_0x326495(0x92)]){if(_0x4cdc0c[_0x326495(0xae)](_0x4ebd3a[_0x326495(0x99)],0x2))return delete sendSuccessCBMap[_0x1f0ea2],_0xc635d7=!![],_0x4cdc0c[_0x326495(0x82)](_0x483421,_0x4ebd3a),!![];return![];}return![];},sendMessagePool[_0x57e74a]=async _0x53deca=>{delete sendMessagePool[_0x57e74a],_0x5a0082=_0x53deca;},_0x2cdffb[_0x40fadc(0xbf)](setTimeout,()=>{const _0x17dacf=_0x40fadc;if(_0xc635d7)return;delete sendMessagePool[_0x57e74a],delete sendSuccessCBMap[_0x1f0ea2],_0x4cdc0c['qwmZs'](_0x2f2bc8,_0x4cdc0c[_0x17dacf(0x90)]);},_0x330442);const _0x189a41=napCatCore[_0x40fadc(0x83)][_0x40fadc(0xb9)]()[_0x40fadc(0x98)]('0',_0xb6dabe,_0x14eed1,new Map());});}static async[_0x4cb96a(0xaf)](_0x2fc2c0,_0x58a3a9,_0x3628d6){}static async[_0x4cb96a(0xb5)](_0x2978fb,_0x5f249c,_0x55c0bf){const _0x237bdd=_0x4cb96a,_0x5de6a5={'iMVfx':function(_0xf0d64a,_0x30065a){return _0xf0d64a!=_0x30065a;},'DBwhm':'com.tencent.multimsg','oSRNE':function(_0x5d4c40,_0x149993){return _0x5d4c40==_0x149993;},'sGBLm':function(_0x5ed6ea,_0x57356a){return _0x5ed6ea==_0x57356a;},'rMCQF':function(_0x1adbb5,_0x297266){return _0x1adbb5(_0x297266);},'DlcxW':function(_0x58c943,_0x32cd00,_0x2be66f){return _0x58c943(_0x32cd00,_0x2be66f);}},_0x3a6f69=_0x55c0bf[_0x237bdd(0xb2)](_0x9fd9fc=>{const _0x4a599e=_0x237bdd;return{'msgId':_0x9fd9fc,'senderShowName':selfInfo[_0x4a599e(0xa0)]};});return new Promise((_0x3ca088,_0x24d4dd)=>{const _0x3d50d2=_0x237bdd,_0x240c9a={'owwgh':function(_0x4913d5,_0x2ccf23){const _0x4ac959=_0xe7e0;return _0x5de6a5[_0x4ac959(0x96)](_0x4913d5,_0x2ccf23);},'hOZzJ':_0x5de6a5[_0x3d50d2(0xc4)],'IiZJQ':function(_0x32d979,_0x4343d8){const _0x532256=_0x3d50d2;return _0x5de6a5[_0x532256(0xc8)](_0x32d979,_0x4343d8);},'JfgyW':function(_0x6ef6bb,_0x44e235){return _0x5de6a5['sGBLm'](_0x6ef6bb,_0x44e235);},'IBYti':function(_0x10aed2,_0x28dcc2){const _0x17ede1=_0x3d50d2;return _0x5de6a5[_0x17ede1(0xb0)](_0x10aed2,_0x28dcc2);}};let _0x5c6cd5=![];const _0x1f78bc=_0x194cee=>{const _0x53a7ec=_0x3d50d2,_0x1f8c03=_0x194cee['elements'][_0x53a7ec(0xc7)](_0x3c6443=>_0x3c6443[_0x53a7ec(0x97)]);if(!_0x1f8c03)return;const _0x4b9aa5=JSON[_0x53a7ec(0xc2)](_0x1f8c03[_0x53a7ec(0x97)]['bytesData']);if(_0x240c9a[_0x53a7ec(0xb3)](_0x4b9aa5['app'],_0x240c9a[_0x53a7ec(0xc0)]))return;_0x240c9a[_0x53a7ec(0x8a)](_0x194cee[_0x53a7ec(0xbc)],_0x5f249c[_0x53a7ec(0xbc)])&&_0x240c9a[_0x53a7ec(0x8e)](_0x194cee[_0x53a7ec(0x95)],selfInfo[_0x53a7ec(0x9f)])&&(_0x5c6cd5=!![],_0x240c9a[_0x53a7ec(0xbb)](_0x3ca088,_0x194cee));};sentMsgTasks[_0x3d50d2(0xac)](randomUUID(),_0x1f78bc),_0x5de6a5[_0x3d50d2(0x8b)](setTimeout,()=>{const _0x4b7725=_0x3d50d2;!_0x5c6cd5&&_0x24d4dd(_0x4b7725(0xbe));},0x1388),napCatCore[_0x3d50d2(0x83)]['getMsgService']()['multiForwardMsgWithComment'](_0x3a6f69,_0x2978fb,_0x5f249c,[],new Map());});}}