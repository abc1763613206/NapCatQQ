const _0x475a34=_0x5dae;function _0x5dae(_0x7a2a3a,_0x24a2b3){const _0x1f247b=_0x1f24();return _0x5dae=function(_0x5dae9e,_0x4d9970){_0x5dae9e=_0x5dae9e-0x10b;let _0x519bd6=_0x1f247b[_0x5dae9e];return _0x519bd6;},_0x5dae(_0x7a2a3a,_0x24a2b3);}(function(_0x2725d4,_0x184a2){const _0x246316=_0x5dae,_0x4cd17b=_0x2725d4();while(!![]){try{const _0x389cdb=parseInt(_0x246316(0x11f))/0x1+parseInt(_0x246316(0x10f))/0x2+parseInt(_0x246316(0x113))/0x3*(parseInt(_0x246316(0x118))/0x4)+-parseInt(_0x246316(0x112))/0x5*(parseInt(_0x246316(0x110))/0x6)+parseInt(_0x246316(0x12b))/0x7*(-parseInt(_0x246316(0x115))/0x8)+-parseInt(_0x246316(0x10e))/0x9*(parseInt(_0x246316(0x125))/0xa)+-parseInt(_0x246316(0x114))/0xb*(-parseInt(_0x246316(0x126))/0xc);if(_0x389cdb===_0x184a2)break;else _0x4cd17b['push'](_0x4cd17b['shift']());}catch(_0x190f77){_0x4cd17b['push'](_0x4cd17b['shift']());}}}(_0x1f24,0x4ec91));import{BuddyListener,napCatCore}from'@/core';import{logDebug}from'@/common/utils/log';import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x475a34(0x128)]=_0x3f8d17=>{const _0x2ef167=_0x475a34;for(const [_0x55621d,_0x40e7d1]of buddyChangeTasks){_0x40e7d1(_0x3f8d17),buddyChangeTasks[_0x2ef167(0x11b)](_0x55621d);}},setTimeout(()=>{const _0xe71b1b=_0x475a34;napCatCore[_0xe71b1b(0x10b)](()=>{const _0x4ec780=_0xe71b1b;napCatCore[_0x4ec780(0x12d)](buddyListener);});},0x64);export class NTQQFriendApi{static async['getFriends'](_0x3114e5=![]){const _0x2aac59=_0x475a34,_0x35c45c={'nCdmS':function(_0x1ecde6,_0x2682e8,_0x18b3ef){return _0x1ecde6(_0x2682e8,_0x18b3ef);},'NZIoq':_0x2aac59(0x120),'PVWKI':function(_0x4671b5,_0x5ece2a){return _0x4671b5(_0x5ece2a);},'QYoNb':_0x2aac59(0x11e),'ckbhz':function(_0x4711f1,_0xb3fb1,_0x21daf3){return _0x4711f1(_0xb3fb1,_0x21daf3);},'Qmnnj':function(_0x4ad4f0){return _0x4ad4f0();}};return new Promise((_0x334987,_0xa8b17d)=>{const _0x1beb52=_0x2aac59,_0x197529={'WaDOB':function(_0x28e60f,_0x310bf5){const _0x452548=_0x5dae;return _0x35c45c[_0x452548(0x117)](_0x28e60f,_0x310bf5);},'hzAWF':_0x35c45c[_0x1beb52(0x121)],'hbpqo':function(_0x2555d0,_0x33c7ad,_0x5c06d2){const _0x314931=_0x1beb52;return _0x35c45c[_0x314931(0x10d)](_0x2555d0,_0x33c7ad,_0x5c06d2);}};let _0x18ce61=![];_0x35c45c[_0x1beb52(0x10d)](setTimeout,()=>{const _0x25a776=_0x1beb52;!_0x18ce61&&(_0x197529[_0x25a776(0x123)](logDebug,_0x197529[_0x25a776(0x11a)]),_0x197529[_0x25a776(0x123)](_0xa8b17d,_0x197529['hzAWF']));},0x1388);const _0x206ceb=[],_0x2ddd67=_0x27aacd=>{const _0x3e3863=_0x1beb52;for(const _0x2d9302 of _0x27aacd){for(const _0x3136e0 of _0x2d9302[_0x3e3863(0x124)]){_0x206ceb[_0x3e3863(0x11d)](_0x3136e0),uid2UinMap[_0x3136e0[_0x3e3863(0x127)]]=_0x3136e0['uin'];}}_0x18ce61=!![],_0x197529['hbpqo'](logDebug,'获取好友列表完成',_0x206ceb),_0x197529[_0x3e3863(0x123)](_0x334987,_0x206ceb);};buddyChangeTasks[_0x1beb52(0x12c)](_0x35c45c['Qmnnj'](randomUUID),_0x2ddd67),napCatCore[_0x1beb52(0x10c)][_0x1beb52(0x12a)]()[_0x1beb52(0x11c)](_0x3114e5)[_0x1beb52(0x111)](_0x598c96=>{const _0x881b17=_0x1beb52;_0x35c45c[_0x881b17(0x129)](logDebug,_0x35c45c[_0x881b17(0x119)],_0x598c96);});});}static async['handleFriendRequest'](_0x1230a0,_0x29c91a){const _0x75c2b8=_0x475a34;napCatCore[_0x75c2b8(0x10c)][_0x75c2b8(0x12a)]()?.['approvalFriendRequest']({'friendUid':_0x1230a0[_0x75c2b8(0x116)],'reqTime':_0x1230a0[_0x75c2b8(0x122)],'accept':_0x29c91a});}}function _0x1f24(){const _0x296d49=['getBuddyList','push','获取好友列表超时','118911Xxkmyt','开始获取好友列表','QYoNb','reqTime','WaDOB','buddyList','671890HKledG','36IaYDZp','uid','onBuddyListChange','nCdmS','getBuddyService','259JbBcAw','set','addListener','onLoginSuccess','session','ckbhz','36FaKRok','1278782WtbvPZ','492GpInxW','then','24985mquEuA','204VcnYqb','611281WRNlia','7872USwXsQ','friendUid','PVWKI','6624GErDKm','NZIoq','hzAWF','delete'];_0x1f24=function(){return _0x296d49;};return _0x1f24();}