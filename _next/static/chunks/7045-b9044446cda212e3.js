(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7045],{826:(e,t)=>{let i,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return r[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');i=e},t.isKanjiModeEnabled=function(){return void 0!==i},t.toSJIS=function(e){return i(e)}},1418:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,r=0,n=0,a=null,o=null;for(let s=0;s<t;s++){r=n=0,a=o=null;for(let l=0;l<t;l++){let t=e.get(s,l);t===a?r++:(r>=5&&(i+=3+(r-5)),a=t,r=1),(t=e.get(l,s))===o?n++:(n>=5&&(i+=3+(n-5)),o=t,n=1)}r>=5&&(i+=3+(r-5)),n>=5&&(i+=3+(n-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return 3*i},t.getPenaltyN3=function(e){let t=e.size,i=0,r=0,n=0;for(let a=0;a<t;a++){r=n=0;for(let o=0;o<t;o++)r=r<<1&2047|e.get(a,o),o>=10&&(1488===r||93===r)&&i++,n=n<<1&2047|e.get(o,a),o>=10&&(1488===n||93===n)&&i++}return 40*i},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return 10*Math.abs(Math.ceil(100*t/i/5)-10)},t.applyMask=function(e,i){let r=i.size;for(let n=0;n<r;n++)for(let a=0;a<r;a++)i.isReserved(a,n)||i.xor(a,n,function(e,i,r){switch(e){case t.Patterns.PATTERN000:return(i+r)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(i+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return i*r%2+i*r%3==0;case t.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case t.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,n))},t.getBestMask=function(e,i){let r=Object.keys(t.Patterns).length,n=0,a=1/0;for(let o=0;o<r;o++){i(o),t.applyMask(o,e);let r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(o,e),r<a&&(a=r,n=o)}return n}},1861:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(92715),n=i(1163);function a(e,t,i,a,o){if(void 0===o&&(o=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(a.length<i.length)throw Error("ChaCha: destination is shorter than source");if(0===o){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=o}for(var s,l,c=new Uint8Array(64),u=0;u<i.length;u+=64){!function(e,t,i){for(var n=i[3]<<24|i[2]<<16|i[1]<<8|i[0],a=i[7]<<24|i[6]<<16|i[5]<<8|i[4],o=i[11]<<24|i[10]<<16|i[9]<<8|i[8],s=i[15]<<24|i[14]<<16|i[13]<<8|i[12],l=i[19]<<24|i[18]<<16|i[17]<<8|i[16],c=i[23]<<24|i[22]<<16|i[21]<<8|i[20],u=i[27]<<24|i[26]<<16|i[25]<<8|i[24],d=i[31]<<24|i[30]<<16|i[29]<<8|i[28],h=t[3]<<24|t[2]<<16|t[1]<<8|t[0],p=t[7]<<24|t[6]<<16|t[5]<<8|t[4],f=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],w=0x61707865,m=0x3320646e,b=0x79622d32,v=0x6b206574,y=n,x=a,C=o,E=s,_=l,S=c,A=u,$=d,k=h,P=p,I=f,R=g,T=0;T<20;T+=2)k^=w=w+y|0,y^=_=_+(k=k>>>16|k<<16)|0,y=y>>>20|y<<12,P^=m=m+x|0,x^=S=S+(P=P>>>16|P<<16)|0,x=x>>>20|x<<12,I^=b=b+C|0,C^=A=A+(I=I>>>16|I<<16)|0,C=C>>>20|C<<12,R^=v=v+E|0,E^=$=$+(R=R>>>16|R<<16)|0,E=E>>>20|E<<12,I^=b=b+C|0,C^=A=A+(I=I>>>24|I<<8)|0,C=C>>>25|C<<7,R^=v=v+E|0,E^=$=$+(R=R>>>24|R<<8)|0,E=E>>>25|E<<7,P^=m=m+x|0,x^=S=S+(P=P>>>24|P<<8)|0,x=x>>>25|x<<7,k^=w=w+y|0,y^=_=_+(k=k>>>24|k<<8)|0,y=y>>>25|y<<7,R^=w=w+x|0,x^=A=A+(R=R>>>16|R<<16)|0,x=x>>>20|x<<12,k^=m=m+C|0,C^=$=$+(k=k>>>16|k<<16)|0,C=C>>>20|C<<12,P^=b=b+E|0,E^=_=_+(P=P>>>16|P<<16)|0,E=E>>>20|E<<12,I^=v=v+y|0,y^=S=S+(I=I>>>16|I<<16)|0,y=y>>>20|y<<12,P^=b=b+E|0,E^=_=_+(P=P>>>24|P<<8)|0,E=E>>>25|E<<7,I^=v=v+y|0,y^=S=S+(I=I>>>24|I<<8)|0,y=y>>>25|y<<7,k^=m=m+C|0,C^=$=$+(k=k>>>24|k<<8)|0,C=C>>>25|C<<7,R^=w=w+x|0,x^=A=A+(R=R>>>24|R<<8)|0,x=x>>>25|x<<7;r.writeUint32LE(w+0x61707865|0,e,0),r.writeUint32LE(m+0x3320646e|0,e,4),r.writeUint32LE(b+0x79622d32|0,e,8),r.writeUint32LE(v+0x6b206574|0,e,12),r.writeUint32LE(y+n|0,e,16),r.writeUint32LE(x+a|0,e,20),r.writeUint32LE(C+o|0,e,24),r.writeUint32LE(E+s|0,e,28),r.writeUint32LE(_+l|0,e,32),r.writeUint32LE(S+c|0,e,36),r.writeUint32LE(A+u|0,e,40),r.writeUint32LE($+d|0,e,44),r.writeUint32LE(k+h|0,e,48),r.writeUint32LE(P+p|0,e,52),r.writeUint32LE(I+f|0,e,56),r.writeUint32LE(R+g|0,e,60)}(c,s,e);for(var d=u;d<u+64&&d<i.length;d++)a[d]=i[d]^c[d-u];for(var h=s,p=0,f=l,g=1;f--;)g=g+(255&h[p])|0,h[p]=255&g,g>>>=8,p++;if(g>0)throw Error("ChaCha: counter overflow")}return n.wipe(c),0===o&&n.wipe(s),a}t.streamXOR=a,t.stream=function(e,t,i,r){return void 0===r&&(r=0),n.wipe(i),a(e,t,i,i,r)}},3216:(e,t,i)=>{"use strict";i.d(t,{MZ:()=>a,wk:()=>o});var r=i(68566);let n={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec};function a(e){return(t,i)=>{let r;return"object"==typeof i?((e=n,t,i)=>{let{kind:r,metadata:a}=i,o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let n=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,n,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=i;return function(i){let n=this[r];t.call(this,i),this.requestUpdate(r,n,e,!0,i)}}throw Error("Unsupported decorator location: "+r)})(e,t,i):(r=t.hasOwnProperty(i),t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0)}}function o(e){return a({...e,state:!0,attribute:!1})}},3680:(e,t,i)=>{"use strict";let r;i.d(t,{U:()=>o});var n=i(51011);let a=256;function o(e){let{batch:t,cacheTime:i=e.pollingInterval??4e3,key:o="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,n.J)(e.account):void 0,{config:h,request:p,value:f}=e.transport({chain:u,pollingInterval:l}),g={account:d,batch:t,cacheTime:i,chain:u,key:o,name:s,pollingInterval:l,request:p,transport:{...h,...f},type:c,uid:function(e=11){if(!r||a+e>512){r="",a=0;for(let e=0;e<256;e++)r+=(256+256*Math.random()|0).toString(16).substring(1)}return r.substring(a,a+++e)}()};return Object.assign(g,{extend:function e(t){return i=>{let r=i(t);for(let e in g)delete r[e];let n={...t,...r};return Object.assign(n,{extend:e(n)})}}(g)})}},4174:(e,t,i)=>{"use strict";i.d(t,{A7:()=>a,BG:()=>o,Fo:()=>p,K0:()=>l,Oh:()=>c,RM:()=>w,jj:()=>s,k5:()=>d,lN:()=>g,lY:()=>h,uC:()=>f,vW:()=>u});var r=i(22160),n=i(23755);class a extends n.C{constructor({cause:e,message:t}={}){const i=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class o extends n.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.Q)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.C{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.Q)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.C{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.C{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends n.C{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends n.C{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.C{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:i}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.Q)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${(0,r.Q)(i)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class w extends n.C{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},4879:(e,t,i)=>{"use strict";i.d(t,{EH:()=>a,YE:()=>s,jF:()=>o,rj:()=>n});var r=i(23755);class n extends r.C{constructor({blockNumber:e,chain:t,contract:i}){super(`Chain "${t.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...e&&i.blockCreated&&i.blockCreated>e?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class a extends r.C{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class o extends r.C{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends r.C{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}r.C},6005:(e,t,i)=>{"use strict";i.d(t,{r:()=>n,v:()=>r});var r=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},n=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},6373:(e,t,i)=>{"use strict";t.Tc=t.TZ=t.wE=t.Xx=void 0;let r=i(62355),n=i(1163);function a(e){let t=new Float64Array(16);if(e)for(let i=0;i<e.length;i++)t[i]=e[i];return t}t.Xx=32,t.wE=32;let o=new Uint8Array(32);o[0]=9;let s=a([56129,1]);function l(e){let t=1;for(let i=0;i<16;i++){let r=e[i]+t+65535;t=Math.floor(r/65536),e[i]=r-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,i){let r=~(i-1);for(let i=0;i<16;i++){let n=r&(e[i]^t[i]);e[i]^=n,t[i]^=n}}function u(e,t,i){for(let r=0;r<16;r++)e[r]=t[r]+i[r]}function d(e,t,i){for(let r=0;r<16;r++)e[r]=t[r]-i[r]}function h(e,t,i){let r,n,a=0,o=0,s=0,l=0,c=0,u=0,d=0,h=0,p=0,f=0,g=0,w=0,m=0,b=0,v=0,y=0,x=0,C=0,E=0,_=0,S=0,A=0,$=0,k=0,P=0,I=0,R=0,T=0,O=0,N=0,M=0,j=i[0],U=i[1],D=i[2],L=i[3],z=i[4],W=i[5],B=i[6],F=i[7],q=i[8],H=i[9],K=i[10],G=i[11],V=i[12],Z=i[13],Y=i[14],Q=i[15];a+=(r=t[0])*j,o+=r*U,s+=r*D,l+=r*L,c+=r*z,u+=r*W,d+=r*B,h+=r*F,p+=r*q,f+=r*H,g+=r*K,w+=r*G,m+=r*V,b+=r*Z,v+=r*Y,y+=r*Q,o+=(r=t[1])*j,s+=r*U,l+=r*D,c+=r*L,u+=r*z,d+=r*W,h+=r*B,p+=r*F,f+=r*q,g+=r*H,w+=r*K,m+=r*G,b+=r*V,v+=r*Z,y+=r*Y,x+=r*Q,s+=(r=t[2])*j,l+=r*U,c+=r*D,u+=r*L,d+=r*z,h+=r*W,p+=r*B,f+=r*F,g+=r*q,w+=r*H,m+=r*K,b+=r*G,v+=r*V,y+=r*Z,x+=r*Y,C+=r*Q,l+=(r=t[3])*j,c+=r*U,u+=r*D,d+=r*L,h+=r*z,p+=r*W,f+=r*B,g+=r*F,w+=r*q,m+=r*H,b+=r*K,v+=r*G,y+=r*V,x+=r*Z,C+=r*Y,E+=r*Q,c+=(r=t[4])*j,u+=r*U,d+=r*D,h+=r*L,p+=r*z,f+=r*W,g+=r*B,w+=r*F,m+=r*q,b+=r*H,v+=r*K,y+=r*G,x+=r*V,C+=r*Z,E+=r*Y,_+=r*Q,u+=(r=t[5])*j,d+=r*U,h+=r*D,p+=r*L,f+=r*z,g+=r*W,w+=r*B,m+=r*F,b+=r*q,v+=r*H,y+=r*K,x+=r*G,C+=r*V,E+=r*Z,_+=r*Y,S+=r*Q,d+=(r=t[6])*j,h+=r*U,p+=r*D,f+=r*L,g+=r*z,w+=r*W,m+=r*B,b+=r*F,v+=r*q,y+=r*H,x+=r*K,C+=r*G,E+=r*V,_+=r*Z,S+=r*Y,A+=r*Q,h+=(r=t[7])*j,p+=r*U,f+=r*D,g+=r*L,w+=r*z,m+=r*W,b+=r*B,v+=r*F,y+=r*q,x+=r*H,C+=r*K,E+=r*G,_+=r*V,S+=r*Z,A+=r*Y,$+=r*Q,p+=(r=t[8])*j,f+=r*U,g+=r*D,w+=r*L,m+=r*z,b+=r*W,v+=r*B,y+=r*F,x+=r*q,C+=r*H,E+=r*K,_+=r*G,S+=r*V,A+=r*Z,$+=r*Y,k+=r*Q,f+=(r=t[9])*j,g+=r*U,w+=r*D,m+=r*L,b+=r*z,v+=r*W,y+=r*B,x+=r*F,C+=r*q,E+=r*H,_+=r*K,S+=r*G,A+=r*V,$+=r*Z,k+=r*Y,P+=r*Q,g+=(r=t[10])*j,w+=r*U,m+=r*D,b+=r*L,v+=r*z,y+=r*W,x+=r*B,C+=r*F,E+=r*q,_+=r*H,S+=r*K,A+=r*G,$+=r*V,k+=r*Z,P+=r*Y,I+=r*Q,w+=(r=t[11])*j,m+=r*U,b+=r*D,v+=r*L,y+=r*z,x+=r*W,C+=r*B,E+=r*F,_+=r*q,S+=r*H,A+=r*K,$+=r*G,k+=r*V,P+=r*Z,I+=r*Y,R+=r*Q,m+=(r=t[12])*j,b+=r*U,v+=r*D,y+=r*L,x+=r*z,C+=r*W,E+=r*B,_+=r*F,S+=r*q,A+=r*H,$+=r*K,k+=r*G,P+=r*V,I+=r*Z,R+=r*Y,T+=r*Q,b+=(r=t[13])*j,v+=r*U,y+=r*D,x+=r*L,C+=r*z,E+=r*W,_+=r*B,S+=r*F,A+=r*q,$+=r*H,k+=r*K,P+=r*G,I+=r*V,R+=r*Z,T+=r*Y,O+=r*Q,v+=(r=t[14])*j,y+=r*U,x+=r*D,C+=r*L,E+=r*z,_+=r*W,S+=r*B,A+=r*F,$+=r*q,k+=r*H,P+=r*K,I+=r*G,R+=r*V,T+=r*Z,O+=r*Y,N+=r*Q,y+=(r=t[15])*j,x+=r*U,C+=r*D,E+=r*L,_+=r*z,S+=r*W,A+=r*B,$+=r*F,k+=r*q,P+=r*H,I+=r*K,R+=r*G,T+=r*V,O+=r*Z,N+=r*Y,M+=r*Q,a+=38*x,o+=38*C,s+=38*E,l+=38*_,c+=38*S,u+=38*A,d+=38*$,h+=38*k,p+=38*P,f+=38*I,g+=38*R,w+=38*T,m+=38*O,b+=38*N,v+=38*M,n=Math.floor((r=a+(n=1)+65535)/65536),a=r-65536*n,n=Math.floor((r=o+n+65535)/65536),o=r-65536*n,n=Math.floor((r=s+n+65535)/65536),s=r-65536*n,n=Math.floor((r=l+n+65535)/65536),l=r-65536*n,n=Math.floor((r=c+n+65535)/65536),c=r-65536*n,n=Math.floor((r=u+n+65535)/65536),u=r-65536*n,n=Math.floor((r=d+n+65535)/65536),d=r-65536*n,n=Math.floor((r=h+n+65535)/65536),h=r-65536*n,n=Math.floor((r=p+n+65535)/65536),p=r-65536*n,n=Math.floor((r=f+n+65535)/65536),f=r-65536*n,n=Math.floor((r=g+n+65535)/65536),g=r-65536*n,n=Math.floor((r=w+n+65535)/65536),w=r-65536*n,n=Math.floor((r=m+n+65535)/65536),m=r-65536*n,n=Math.floor((r=b+n+65535)/65536),b=r-65536*n,n=Math.floor((r=v+n+65535)/65536),v=r-65536*n,n=Math.floor((r=y+n+65535)/65536),y=r-65536*n,a+=n-1+37*(n-1),n=Math.floor((r=a+(n=1)+65535)/65536),a=r-65536*n,n=Math.floor((r=o+n+65535)/65536),o=r-65536*n,n=Math.floor((r=s+n+65535)/65536),s=r-65536*n,n=Math.floor((r=l+n+65535)/65536),l=r-65536*n,n=Math.floor((r=c+n+65535)/65536),c=r-65536*n,n=Math.floor((r=u+n+65535)/65536),u=r-65536*n,n=Math.floor((r=d+n+65535)/65536),d=r-65536*n,n=Math.floor((r=h+n+65535)/65536),h=r-65536*n,n=Math.floor((r=p+n+65535)/65536),p=r-65536*n,n=Math.floor((r=f+n+65535)/65536),f=r-65536*n,n=Math.floor((r=g+n+65535)/65536),g=r-65536*n,n=Math.floor((r=w+n+65535)/65536),w=r-65536*n,n=Math.floor((r=m+n+65535)/65536),m=r-65536*n,n=Math.floor((r=b+n+65535)/65536),b=r-65536*n,n=Math.floor((r=v+n+65535)/65536),v=r-65536*n,n=Math.floor((r=y+n+65535)/65536),y=r-65536*n,a+=n-1+37*(n-1),e[0]=a,e[1]=o,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=h,e[8]=p,e[9]=f,e[10]=g,e[11]=w,e[12]=m,e[13]=b,e[14]=v,e[15]=y}function p(e,t){let i=new Uint8Array(32),r=new Float64Array(80),n=a(),o=a(),p=a(),f=a(),g=a(),w=a();for(let t=0;t<31;t++)i[t]=e[t];i[31]=127&e[31]|64,i[0]&=248;for(let e=0;e<16;e++)r[e]=t[2*e]+(t[2*e+1]<<8);r[15]&=32767;for(let e=0;e<16;e++)o[e]=r[e];n[0]=f[0]=1;for(let e=254;e>=0;--e){let t=i[e>>>3]>>>(7&e)&1;c(n,o,t),c(p,f,t),u(g,n,p),d(n,n,p),u(p,o,f),d(o,o,f),h(f,g,g),h(w,n,n),h(n,p,n),h(p,o,g),u(g,n,p),d(n,n,p),h(o,n,n),d(p,f,w),h(n,p,s),u(n,n,f),h(p,p,n),h(n,f,w),h(f,o,r),h(o,g,g),c(n,o,t),c(p,f,t)}for(let e=0;e<16;e++)r[e+16]=n[e],r[e+32]=p[e],r[e+48]=o[e],r[e+64]=f[e];let m=r.subarray(32),b=r.subarray(16);!function(e,t){let i=a();for(let e=0;e<16;e++)i[e]=t[e];for(let e=253;e>=0;e--)h(i,i,i),2!==e&&4!==e&&h(i,i,t);for(let t=0;t<16;t++)e[t]=i[t]}(m,m),h(b,b,m);let v=new Uint8Array(32);return!function(e,t){let i=a(),r=a();for(let e=0;e<16;e++)r[e]=t[e];l(r),l(r),l(r);for(let e=0;e<2;e++){i[0]=r[0]-65517;for(let e=1;e<15;e++)i[e]=r[e]-65535-(i[e-1]>>16&1),i[e-1]&=65535;i[15]=r[15]-32767-(i[14]>>16&1);let e=i[15]>>16&1;i[14]&=65535,c(r,i,1-e)}for(let t=0;t<16;t++)e[2*t]=255&r[t],e[2*t+1]=r[t]>>8}(v,b),v}t.TZ=function(e){let i=(0,r.randomBytes)(32,e),a=function(e){if(e.length!==t.wE)throw Error(`x25519: seed must be ${t.wE} bytes`);let i=new Uint8Array(e);return{publicKey:p(i,o),secretKey:i}}(i);return(0,n.wipe)(i),a},t.Tc=function(e,i,r=!1){if(e.length!==t.Xx)throw Error("X25519: incorrect secret key length");if(i.length!==t.Xx)throw Error("X25519: incorrect public key length");let n=p(e,i);if(r){let e=0;for(let t=0;t<n.length;t++)e|=n[t];if(0===e)throw Error("X25519: invalid shared key")}return n}},6593:(e,t,i)=>{"use strict";i.d(t,{T:()=>n});var r=i(23755);class n extends r.C{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},6809:(e,t,i)=>{"use strict";i.d(t,{n:()=>u});var r=i(80044),n=i(96685),a=i(45696),o=i(81693),s=i(12581),l=i(94747),c=i(44497);function u(e,t){if("0x"===t&&e.length>0)throw new r.O;if((0,a.E)(t)&&32>(0,a.E)(t))throw new r.Iy({data:t,params:e,size:(0,a.E)(t)});return function({data:e,params:t}){let i=[],u=0;for(let h=0;h<t.length;h++){if(u>=(0,a.E)(e))throw new r.Iy({data:e,params:t,size:(0,a.E)(e)});let{consumed:p,value:f}=function e({data:t,param:i,position:a}){var u,h;let p=(0,c.k)(i.type);if(p){let[r,n]=p;return function(t,{param:i,length:r,position:n}){if(!r){let r=(0,l.ME)((0,o.di)(t,n,n+32,{strict:!0})),a=(0,l.ME)((0,o.di)(t,r,r+32,{strict:!0})),s=0,c=[];for(let n=0;n<a;++n){let n=e({data:(0,o.di)(t,r+32),param:i,position:s});s+=n.consumed,c.push(n.value)}return{value:c,consumed:32}}if(d(i)){let a=(0,c.k)(i.type),s=!a?.[0],u=0,d=[];for(let a=0;a<r;++a){let r=(0,l.ME)((0,o.di)(t,n,n+32,{strict:!0})),c=e({data:(0,o.di)(t,r),param:i,position:s?u:32*a});u+=c.consumed,d.push(c.value)}return{value:d,consumed:32}}let a=0,s=[];for(let o=0;o<r;++o){let r=e({data:t,param:i,position:n+a});a+=r.consumed,s.push(r.value)}return{value:s,consumed:a}}(t,{length:r,param:{...i,type:n},position:a})}if("tuple"===i.type)return function(t,{param:i,position:r}){let n=0===i.components.length||i.components.some(({name:e})=>!e),a=n?[]:{},s=0;if(d(i)){let c=(0,l.ME)((0,o.di)(t,r,r+32,{strict:!0}));for(let r=0;r<i.components.length;++r){let l=i.components[r],u=e({data:(0,o.di)(t,c),param:l,position:s});s+=u.consumed,a[n?r:l?.name]=u.value}return{consumed:32,value:a}}for(let o=0;o<i.components.length;++o){let l=i.components[o],c=e({data:t,param:l,position:r+s});s+=c.consumed,a[n?o:l?.name]=c.value}return{consumed:s,value:a}}(t,{param:i,position:a});if("string"===i.type)return function(e,{position:t}){let i=(0,l.ME)((0,o.di)(e,t,t+32,{strict:!0})),r=(0,l.ME)((0,o.di)(e,i,i+32,{strict:!0}));return 0===r?{consumed:32,value:""}:{consumed:32,value:(0,l.IQ)((0,s.B)((0,o.di)(e,i+32,i+32+r,{strict:!0})))}}(t,{position:a});if(i.type.startsWith("bytes"))return function(e,{param:t,position:i}){let[r,n]=t.type.split("bytes");if(!n){let t=(0,l.ME)((0,o.di)(e,i,i+32,{strict:!0})),r=(0,l.ME)((0,o.di)(e,t,t+32,{strict:!0}));return 0===r?{consumed:32,value:"0x"}:{consumed:32,value:(0,o.di)(e,t+32,t+32+r,{strict:!0})}}return{consumed:32,value:(0,o.di)(e,i,i+parseInt(n),{strict:!0})}}(t,{param:i,position:a});let f=(0,o.di)(t,a,a+32,{strict:!0});if(i.type.startsWith("uint")||i.type.startsWith("int"))return function(e,{param:t}){let i=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,l.uU)(e,{signed:i}):(0,l.ME)(e,{signed:i})}}(f,{param:i});if("address"===i.type){return u=f,{consumed:32,value:(0,n.o)((0,o.di)(u,-20))}}if("bool"===i.type){return h=f,{consumed:32,value:(0,l.Nx)(h)}}throw new r.j(i.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:t[h],position:u});i.push(f),u+=p}return i}({data:t,params:e})}function d(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(d);let i=(0,c.k)(e.type);return!!(i&&d({...e,type:i[1]}))}},7241:(e,t,i)=>{"use strict";i.d(t,{H4:()=>d,$$:()=>u});var r=i(80044),n=i(71386),a=i(80339),o=i(45696),s=i(84428);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:i,types:d}){let h=(e,t)=>{for(let i of e){let{name:e,type:u}=i,p=t[e],f=u.match(c);if(f&&("number"==typeof p||"bigint"==typeof p)){let[e,t,i]=f;(0,s.cK)(p,{signed:"int"===t,size:parseInt(i)/8})}if("address"===u&&"string"==typeof p&&!(0,a.P)(p))throw new n.M({address:p});let g=u.match(l);if(g){let[e,t]=g;if(t&&(0,o.E)(p)!==parseInt(t))throw new r.BI({expectedSize:parseInt(t),givenSize:(0,o.E)(p)})}let w=d[u];w&&h(w,p)}};d.EIP712Domain&&e&&h(d.EIP712Domain,e),"EIP712Domain"!==i&&h(d[i],t)}function d({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},7528:(e,t,i)=>{"use strict";i.d(t,{b:()=>n});var r=i(46269);function n(e,{delay:t=100,retryCount:i=2,shouldRetry:a=()=>!0}={}){return new Promise((n,o)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let i="function"==typeof t?t({count:l,error:e}):t;i&&await (0,r.u)(i),s({count:l+1})};try{let t=await e();n(t)}catch(e){if(l<i&&await a({count:l,error:e}))return c({error:e});o(e)}};s()})}},8039:(e,t,i)=>{"use strict";e.exports=i(65538)},8532:function(e){e.exports=function(e,t,i){e=e||{};var r=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,i,n){return r.fromToBase(e,t,i,n)}i.en.relativeTime=n,r.fromToBase=function(t,r,a,o,s){for(var l,c,u,d=a.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(l=o?i(t).diff(a,g.d,!0):a.diff(t,g.d,!0));var w=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,w<=g.r||!g.r){w<=1&&f>0&&(g=h[f-1]);var m=d[g.l];s&&(w=s(""+w)),c="string"==typeof m?m.replace("%d",w):m(w,r,g.l,u);break}}if(r)return c;var b=u?d.future:d.past;return"function"==typeof b?b(c):b.replace("%s",c)},r.to=function(e,t){return a(e,t,this,!0)},r.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?i.utc():i()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}},9027:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},9467:(e,t,i)=>{let r=i(80570);function n(e){this.mode=r.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,i;for(t=0;t+3<=this.data.length;t+=3)i=parseInt(this.data.substr(t,3),10),e.put(i,10);let r=this.data.length-t;r>0&&(i=parseInt(this.data.substr(t),10),e.put(i,3*r+1))},e.exports=n},9471:(e,t,i)=>{"use strict";i.d(t,{l:()=>n});var r=i(23755);class n extends r.C{constructor({blockHash:e,blockNumber:t}){let i="Block";e&&(i=`Block at hash "${e}"`),t&&(i=`Block at number "${t}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}},10155:(e,t,i)=>{"use strict";i.d(t,{O:()=>c,_:()=>l});var r=i(50474),n=i(49586),a=i(14124),o=i(42073),s=i(94310);async function l(e,t){return c(e,t)}async function c(e,t){let{block:i,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},d=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:i,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(d<1)throw new r.sM;let h=d.toString().split(".")[1]?.length??0,p=10**h,f=e=>e*BigInt(Math.ceil(d*p))/BigInt(p),g=i||await (0,n.T)(e,o.g,"getBlock")({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:i,client:e,multiply:f,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof g.baseFeePerGas)throw new r.pw;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,a.N)(e,{block:g,chain:l,request:c}),i=f(g.baseFeePerGas);return{maxFeePerGas:c?.maxFeePerGas??i+t,maxPriorityFeePerGas:t}}return{gasPrice:c?.gasPrice??f(await (0,n.T)(e,s.L,"getGasPrice")({}))}}},11194:function(e){e.exports=function(e,t,i){i.updateLocale=function(e,t){var r=i.Ls[e];if(r)return(t?Object.keys(t):[]).forEach(function(e){r[e]=t[e]}),r}}},11789:(e,t,i)=>{"use strict";i.d(t,{m:()=>l,x:()=>s});var r=i(23755),n=i(93247),a=i(65261),o=i(7528);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof n.Ci&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:i=3}={}){return async l=>(0,o.b)(async()=>{try{return await e(l)}catch(e){switch(e.code){case a.XU.code:throw new a.XU(e);case a.CL.code:throw new a.CL(e);case a.Gi.code:throw new a.Gi(e);case a.D5.code:throw new a.D5(e);case a.bq.code:throw new a.bq(e);case a.Di.code:throw new a.Di(e);case a.hA.code:throw new a.hA(e);case a.qZ.code:throw new a.qZ(e);case a.YW.code:throw new a.YW(e);case a.ab.code:throw new a.ab(e);case a.s0.code:throw new a.s0(e);case a.xQ.code:throw new a.xQ(e);case a.vx.code:throw new a.vx(e);case a.sV.code:throw new a.sV(e);case a.Sf.code:throw new a.Sf(e);case a.RV.code:throw new a.RV(e);case a.xq.code:throw new a.xq(e);case a.ch.code:throw new a.ch(e);case 5e3:throw new a.vx(e);default:if(e instanceof r.C)throw e;throw new a.MI(e)}}},{delay:({count:e,error:i})=>{if(i&&i instanceof n.Ci){let e=i?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:i,shouldRetry:({error:e})=>!s(e)})}},14124:(e,t,i)=>{"use strict";i.d(t,{N:()=>c,b:()=>l});var r=i(50474),n=i(94747),a=i(49586),o=i(42073),s=i(94310);async function l(e,t){return c(e,t)}async function c(e,t){let{block:i,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=i||await (0,a.T)(e,o.g,"getBlock")({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,n.uU)(t)}catch{let[t,n]=await Promise.all([i?Promise.resolve(i):(0,a.T)(e,o.g,"getBlock")({}),(0,a.T)(e,s.L,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new r.pw;let l=n-t.baseFeePerGas;if(l<0n)return 0n;return l}}},15422:(e,t,i)=>{"use strict";i.d(t,{_:()=>s});var r=i(81693),n=i(22106),a=i(19911),o=i(10824);let s=e=>{let t;return(0,r.di)((t=(0,a.d)(e),(0,o.S)((0,n.ZJ)(t))),0,4)}},17078:e=>{"use strict";e.exports=function(e){for(var t=[],i=e.length,r=0;r<i;r++){var n=e.charCodeAt(r);if(n>=55296&&n<=56319&&i>r+1){var a=e.charCodeAt(r+1);a>=56320&&a<=57343&&(n=(n-55296)*1024+a-56320+65536,r+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},17517:(e,t,i)=>{let r=i(826),n=r.getBCHDigit(1335);t.getEncodedBits=function(e,t){let i=e.bit<<3|t,a=i<<10;for(;r.getBCHDigit(a)-n>=0;)a^=1335<<r.getBCHDigit(a)-n;return(i<<10|a)^21522}},18338:(e,t,i)=>{"use strict";i.d(t,{s:()=>h});var r,n=i(6005),a=i(21253),o=i(19492),s=i(96685),l=i(65261),c=i(43598),u=i(79829),d=i(84428),h=class extends o.Wi{constructor({chains:e,options:t}={}){const i={shimDisconnect:!0,getProvider(){if("u"<typeof window)return;let e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:i}),this.id="injected",(0,o.VK)(this,r,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.b)(e[0])})},this.onChainChanged=e=>{let t=(0,a.A)(e),i=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:i}})},this.onDisconnect=async e=>{!(1013===e.code&&await this.getProvider()&&await this.getAccount())&&(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};const n=i.getProvider();if("string"==typeof i.name)this.name=i.name;else if(n){const e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let i=new Set,r=1;for(let n of e.providers){let e=t(n);e||(e=`Unknown Wallet #${r}`,r+=1),i.add(e)}let n=[...i];return n.length?n:n[0]??"Injected"}return t(e)??"Injected"}(n);i.name?this.name=i.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new n.r;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let i=await t.request({method:"eth_requestAccounts"}),r=(0,s.b)(i[0]),a=await this.getChainId(),o=this.isChainUnsupported(a);return e&&a!==e&&(a=(await this.switchChain(e)).id,o=this.isChainUnsupported(a)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:r,chain:{id:a,unsupported:o}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.vx(e);if(-32002===e.code)throw new l.qZ(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new n.r;let t=await e.request({method:"eth_accounts"});return(0,s.b)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new n.r;return e.request({method:"eth_chainId"}).then(a.A)}async getProvider(){let e=this.options.getProvider();return e&&(0,o.OV)(this,r,e),(0,o.S7)(this,r)}async getWalletClient({chainId:e}={}){let[t,i]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.F)({account:i,chain:r,transport:(0,u.I)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new n.r;return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new n.r;let i=(0,d.cK)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),new Promise(t=>this.on("change",({chain:i})=>{i?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${i}`,network:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(a){let r=this.chains.find(t=>t.id===e);if(!r)throw new n.v({chainId:e,connectorId:this.id});if(4902===a.code||a?.data?.originalError?.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),await this.getChainId()!==e)throw new l.vx(Error("User rejected switch after adding network."));return r}catch(e){throw new l.vx(e)}if(this.isUserRejectedRequestError(a))throw new l.vx(a);throw new l.ch(a)}}async watchAsset({address:e,decimals:t=18,image:i,symbol:r}){let a=await this.getProvider();if(!a)throw new n.r;return a.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:i,symbol:r}}})}isUserRejectedRequestError(e){return 4001===e.code}};r=new WeakMap},18587:(e,t,i)=>{"use strict";i.d(t,{Ag:()=>a,Rm:()=>l,SJ:()=>s,_:()=>c,oX:()=>o,v2:()=>r});let r=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],a=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],o=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},19492:(e,t,i)=>{"use strict";i.d(t,{Wi:()=>d,VK:()=>l,S7:()=>s,jq:()=>u,OV:()=>c});var r=i(64411),n=i(91514);let a=(0,i(39606).x)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var o=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s=(e,t,i)=>(o(e,t,"read from private field"),i?i.call(e):t.get(e)),l=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},c=(e,t,i,r)=>(o(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),u=(e,t,i)=>(o(e,t,"access private method"),i),d=class extends r{constructor({chains:e=[n.r,a],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...i}=e.blockExplorers??{};if(t)return[t.url,...Object.values(i).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},19911:(e,t,i)=>{"use strict";i.d(t,{d:()=>o});let r=/^tuple(?<array>(\[(\d*)\])*)$/;function n(e){let t="",i=e.length;for(let n=0;n<i;n++)t+=function e(t){let i=t.type;if(r.test(t.type)&&"components"in t){var n;let a;i="(";let o=t.components.length;for(let r=0;r<o;r++)i+=e(t.components[r]),r<o-1&&(i+=", ");let s=(n=t.type,a=r.exec(n),a?.groups);return i+=`)${s?.array??""}`,e({...t,type:i})}return("indexed"in t&&t.indexed&&(i=`${i} indexed`),t.name)?`${i} ${t.name}`:i}(e[n]),n!==i-1&&(t+=", ");return t}var a=i(23755);let o=e=>(function(e){let t=!0,i="",r=0,n="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&r++,")"===s&&r--,t){if(0===r){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==i&&",("!==i&&(i="",t=!1);continue}n+=s,i+=s}}if(!o)throw new a.C("Unable to normalize signature.");return n})("string"==typeof e?e:"function"===e.type?`function ${e.name}(${n(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${n(e.outputs)})`:""}`:"event"===e.type?`event ${e.name}(${n(e.inputs)})`:"error"===e.type?`error ${e.name}(${n(e.inputs)})`:"constructor"===e.type?`constructor(${n(e.inputs)})${"payable"===e.stateMutability?" payable":""}`:"fallback"===e.type?"fallback()":"receive() external payable")},19995:e=>{"use strict";var t={single_source_shortest_paths:function(e,i,r){var n,a,o,s,l,c,u,d={},h={};h[i]=0;var p=t.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(o in a=(n=p.pop()).value,s=n.cost,l=e[a]||{})l.hasOwnProperty(o)&&(c=s+l[o],u=h[o],(void 0===h[o]||u>c)&&(h[o]=c,p.push(o,c),d[o]=a));if(void 0!==r&&void 0===h[r])throw Error(["Could not find a path from ",i," to ",r,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],r=t;r;)i.push(r),e[r],r=e[r];return i.reverse(),i},find_path:function(e,i,r){var n=t.single_source_shortest_paths(e,i,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(e){var i,r=t.PriorityQueue,n={};for(i in e=e||{},r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.queue=[],n.sorter=e.sorter||r.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},21253:(e,t,i)=>{"use strict";function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}i.d(t,{A:()=>r})},21770:(e,t,i)=>{let r=i(17078),n=i(80570);function a(e){this.mode=n.BYTE,"string"==typeof e&&(e=r(e)),this.data=new Uint8Array(e)}a.getBitsLength=function(e){return 8*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},e.exports=a},22160:(e,t,i)=>{"use strict";i.d(t,{Q:()=>a});var r=i(70378),n=i(49235);function a(e,t="wei"){return(0,n.J)(e,r.sz[t])}},22933:(e,t,i)=>{let r=i(55290);t.render=function(e,t,i){var n;let a=i,o=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=r.getOptions(a);let s=r.getImageWidth(e.modules.size,a),l=o.getContext("2d"),c=l.createImageData(s,s);return r.qrToImageData(c.data,e,a),n=o,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),o},t.renderToDataURL=function(e,i,r){let n=r;void 0!==n||i&&i.getContext||(n=i,i=void 0),n||(n={});let a=t.render(e,i,n),o=n.type||"image/png",s=n.rendererOpts||{};return a.toDataURL(o,s.quality)}},24029:(e,t,i)=>{"use strict";i.d(t,{A:()=>a,B:()=>n});var r=i(80044);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new r.d_(e.type);return`${e.name}(${a(e.inputs,{includeName:t})})`}function a(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${a(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},24642:(e,t,i)=>{"use strict";i.d(t,{m:()=>s});var r=i(80044),n=i(76429),a=i(44497);let o="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:i}){if(!t||0===t.length)return i;let l=e.find(e=>"type"in e&&"constructor"===e.type);if(!l)throw new r.YW({docsPath:o});if(!("inputs"in l)||!l.inputs||0===l.inputs.length)throw new r.YF({docsPath:o});let c=(0,a.h)(l.inputs,t);return(0,n.aP)([i,c])}},25285:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},26419:(e,t)=>{"use strict";function i(e,t){if(e.length!==t.length)return 0;for(var i=0,r=0;r<e.length;r++)i|=e[r]^t[r];return 1&i-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,i){return~(e-1)&t|e-1&i},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=i,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==i(e,t)}},26426:(e,t,i)=>{"use strict";i.r(t),i.d(t,{W3mModal:()=>u});var r=i(87985),n=i(86692),a=i(61174),o=i(3216);let s=(0,a.AH)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var l=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let c="scroll-lock",u=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.W3.state.open,this.caipAddress=r.Uj.state.address,this.isSiweEnabled=r.jF.state.isSiweEnabled,this.initializeTheming(),r.Np.prefetch(),this.unsubscribe.push(r.W3.subscribeKey("open",e=>e?this.onOpen():this.onClose()),r.jF.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),r.Uj.subscribe(e=>this.onNewAccountState(e))),r.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?(0,a.qy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==r.jF.state.status&&await r.x4.disconnect(),r.W3.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=r.Wn.state,i=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,i)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,r.Pt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:i}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=i),t&&i&&this.caipAddress!==i&&(await r.jF.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{let e=await r.jF.getSession();e&&!t?await r.jF.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?r.IN.push("ConnectingSiwe"):r.W3.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,o.wk)()],u.prototype,"open",void 0),l([(0,o.wk)()],u.prototype,"caipAddress",void 0),l([(0,o.wk)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},27866:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",i="minute",r="hour",n="week",a="month",o="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,i){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(i)+e},p="en",f={};f[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}};var g="$isDayjsObject",w=function(e){return e instanceof y||!(!e||!e[g])},m=function e(t,i,r){var n;if(!t)return p;if("string"==typeof t){var a=t.toLowerCase();f[a]&&(n=a),i&&(f[a]=i,n=a);var o=t.split("-");if(!n&&o.length>1)return e(o[0])}else{var s=t.name;f[s]=t,n=s}return!r&&n&&(p=n),n||!r&&p},b=function(e,t){if(w(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new y(i)},v={s:h,z:function(e){var t=-e.utcOffset(),i=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(i/60),2,"0")+":"+h(i%60,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var r=12*(i.year()-t.year())+(i.month()-t.month()),n=t.clone().add(r,a),o=i-n<0,s=t.clone().add(r+(o?-1:1),a);return+(-(r+(i-n)/(o?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:a,y:s,w:n,d:"day",D:l,h:r,m:i,s:t,ms:e,Q:o})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};v.l=m,v.i=w,v.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function h(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(u);if(r){var n=r[2]-1||0,a=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return v},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var i=b(e);return this.startOf(t)<=i&&i<=this.endOf(t)},p.isAfter=function(e,t){return b(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<b(e)},p.$g=function(e,t,i){return v.u(e)?this[t]:this.set(i,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,o){var c=this,u=!!v.u(o)||o,d=v.p(e),h=function(e,t){var i=v.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?i:i.endOf("day")},p=function(e,t){return v.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},f=this.$W,g=this.$M,w=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case a:return u?h(1,g):h(0,g+1);case n:var b=this.$locale().weekStart||0,y=(f<b?f+7:f)-b;return h(u?w-y:w+(6-y),g);case"day":case l:return p(m+"Hours",0);case r:return p(m+"Minutes",1);case i:return p(m+"Seconds",2);case t:return p(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(n,o){var c,u=v.p(n),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[a]=d+"Month",c[s]=d+"FullYear",c[r]=d+"Hours",c[i]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],p="day"===u?this.$D+(o-this.$W):o;if(u===a||u===s){var f=this.clone().set(l,1);f.$d[h](p),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[v.p(e)]()},p.add=function(e,o){var l,c=this;e=Number(e);var u=v.p(o),d=function(t){var i=b(c);return v.w(i.date(i.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((l={})[i]=6e4,l[r]=36e5,l[t]=1e3,l)[u]||1,p=this.$d.getTime()+e*h;return v.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),a=this.$H,o=this.$m,s=this.$M,l=i.weekdays,u=i.months,h=i.meridiem,p=function(e,i,n,a){return e&&(e[i]||e(t,r))||n[i].slice(0,a)},f=function(e){return v.s(a%12||12,e,"0")},g=h||function(e,t,i){var r=e<12?"AM":"PM";return i?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return s+1;case"MM":return v.s(s+1,2,"0");case"MMM":return p(i.monthsShort,s,u,3);case"MMMM":return p(u,s);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(i.weekdaysMin,t.$W,l,2);case"ddd":return p(i.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return v.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return v.s(o,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,l,c){var u,d=this,h=v.p(l),p=b(e),f=(p.utcOffset()-this.utcOffset())*6e4,g=this-p,w=function(){return v.m(d,p)};switch(h){case s:u=w()/12;break;case a:u=w();break;case o:u=w()/3;break;case n:u=(g-f)/6048e5;break;case"day":u=(g-f)/864e5;break;case r:u=g/36e5;break;case i:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:v.a(u)},p.daysInMonth=function(){return this.endOf(a).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),r=m(e,t,!0);return r&&(i.$L=r),i},p.clone=function(){return v.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),x=y.prototype;return b.prototype=x,[["$ms",e],["$s",t],["$m",i],["$H",r],["$W","day"],["$M",a],["$y",s],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,y,b),e.$i=!0),b},b.locale=m,b.isDayjs=w,b.unix=function(e){return b(1e3*e)},b.en=f[p],b.Ls=f,b.p={},b}()},28643:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},29612:e=>{"use strict";e.exports=function(e,t){for(var i={},r=Object.keys(e),n=Array.isArray(t),a=0;a<r.length;a++){var o=r[a],s=e[o];(n?-1!==t.indexOf(o):t(o,s,e))&&(i[o]=s)}return i}},31750:(e,t,i)=>{"use strict";i.d(t,{l:()=>a});var r=i(23755),n=i(4174);function a(e,t){let i=(e.details||"").toLowerCase(),a=e.walk(e=>e.code===n.A7.code);return a instanceof r.C?new n.A7({cause:e,message:a.details}):n.A7.nodeMessage.test(i)?new n.A7({cause:e,message:e.details}):n.BG.nodeMessage.test(i)?new n.BG({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.jj.nodeMessage.test(i)?new n.jj({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.K0.nodeMessage.test(i)?new n.K0({cause:e,nonce:t?.nonce}):n.Oh.nodeMessage.test(i)?new n.Oh({cause:e,nonce:t?.nonce}):n.vW.nodeMessage.test(i)?new n.vW({cause:e,nonce:t?.nonce}):n.k5.nodeMessage.test(i)?new n.k5({cause:e}):n.lY.nodeMessage.test(i)?new n.lY({cause:e,gas:t?.gas}):n.Fo.nodeMessage.test(i)?new n.Fo({cause:e,gas:t?.gas}):n.uC.nodeMessage.test(i)?new n.uC({cause:e}):n.lN.nodeMessage.test(i)?new n.lN({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.RM({cause:e})}},32757:(e,t,i)=>{let r=i(9027),n=i(39051),a=i(22933),o=i(44792);function s(e,t,i,a,o){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!r())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(o=i,i=t,t=a=void 0):3===l&&(t.getContext&&void 0===o?(o=a,a=void 0):(o=a,a=i,i=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(i=t,t=a=void 0):2!==l||t.getContext||(a=i,i=t,t=void 0),new Promise(function(r,o){try{let o=n.create(i,a);r(e(o,t,a))}catch(e){o(e)}})}try{let r=n.create(i,a);o(null,e(r,t,a))}catch(e){o(e)}}t.create=n.create,t.toCanvas=s.bind(null,a.render),t.toDataURL=s.bind(null,a.renderToDataURL),t.toString=s.bind(null,function(e,t,i){return o.render(e,i)})},33271:(e,t,i)=>{let r=i(69585);t.mul=function(e,t){let i=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let a=0;a<t.length;a++)i[n+a]^=r.mul(e[n],t[a]);return i},t.mod=function(e,t){let i=new Uint8Array(e);for(;i.length-t.length>=0;){let e=i[0];for(let n=0;n<t.length;n++)i[n]^=r.mul(t[n],e);let n=0;for(;n<i.length&&0===i[n];)n++;i=i.slice(n)}return i},t.generateECPolynomial=function(e){let i=new Uint8Array([1]);for(let n=0;n<e;n++)i=t.mul(i,new Uint8Array([1,r.exp(n)]));return i}},34155:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,i){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return i}}},35565:(e,t,i)=>{let r=i(80570),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function a(e){this.mode=r.ALPHANUMERIC,this.data=e}a.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=45*n.indexOf(this.data[t]);i+=n.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=a},36483:(e,t,i)=>{"use strict";var r=i(47163),n=i(1163);t.i=function(){function e(e,t,i,n){void 0===i&&(i=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var a=r.hmac(this._hash,i,t);this._hmac=new r.HMAC(e,a),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),i=0;i<t.length;i++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[i]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),n.wipe(this._buffer),n.wipe(this._counter),this._bufpos=0},e}()},37045:(e,t,i)=>{"use strict";let r,n,a;i.d(t,{Pg:()=>iQ,Bn:()=>iY,o1:()=>R,PJ:()=>T});var o,s,l,c,u,d,h,p,f,g,w,m,b,v,y,x,C,E,_,S,A,$,k,P,I=i(12115);function R(){if(!r)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await r?.open(e)},close:async function(){await r?.close()}}}function T(){if(!r)throw Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');let[e,t]=(0,I.useState)(r.getState());return(0,I.useEffect)(()=>{let e=r?.subscribeState(e=>{t({...e})});return()=>{e?.()}},[]),e}var O=i(62641),N=i(91514),M=i(87985),j=i(86692),U=i(61174),D=i(3216),L=i(95545),z=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let W=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=M.Uj.state.address,this.balanceVal=M.Uj.state.balance,this.balanceSymbol=M.Uj.state.balanceSymbol,this.profileName=M.Uj.state.profileName,this.profileImage=M.Uj.state.profileImage,this.network=M.p_.state.caipNetwork,this.unsubscribe.push(M.Uj.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),M.p_.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=M.$m.getNetworkImage(this.network),t="show"===this.balance;return(0,U.qy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${this.profileName??this.address??L.s6}
        ?isProfileName=${!!this.profileName}
        networkSrc=${e??L.s6}
        avatarSrc=${this.profileImage??L.s6}
        balance=${t?M.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){M.W3.open()}};z([(0,D.MZ)({type:Boolean})],W.prototype,"disabled",void 0),z([(0,D.MZ)()],W.prototype,"balance",void 0),z([(0,D.MZ)()],W.prototype,"charsStart",void 0),z([(0,D.MZ)()],W.prototype,"charsEnd",void 0),z([(0,D.wk)()],W.prototype,"address",void 0),z([(0,D.wk)()],W.prototype,"balanceVal",void 0),z([(0,D.wk)()],W.prototype,"balanceSymbol",void 0),z([(0,D.wk)()],W.prototype,"profileName",void 0),z([(0,D.wk)()],W.prototype,"profileImage",void 0),z([(0,D.wk)()],W.prototype,"network",void 0),W=z([(0,j.customElement)("w3m-account-button")],W);let B=(0,U.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var F=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let q=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=M.Uj.state.isConnected,this.unsubscribe.push(M.Uj.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?(0,U.qy)`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${this.balance??L.s6}
            .charsStart=${this.charsStart??L.s6}
            .charsEnd=${this.charsEnd??L.s6}
          >
          </w3m-account-button>
        `:(0,U.qy)`
          <w3m-connect-button
            size=${this.size??L.s6}
            label=${this.label??L.s6}
            loadingLabel=${this.loadingLabel??L.s6}
          ></w3m-connect-button>
        `}};q.styles=B,F([(0,D.MZ)({type:Boolean})],q.prototype,"disabled",void 0),F([(0,D.MZ)()],q.prototype,"balance",void 0),F([(0,D.MZ)()],q.prototype,"size",void 0),F([(0,D.MZ)()],q.prototype,"label",void 0),F([(0,D.MZ)()],q.prototype,"loadingLabel",void 0),F([(0,D.MZ)()],q.prototype,"charsStart",void 0),F([(0,D.MZ)()],q.prototype,"charsEnd",void 0),F([(0,D.wk)()],q.prototype,"isAccount",void 0),q=F([(0,j.customElement)("w3m-button")],q);var H=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let K=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=M.W3.state.open,this.loading=M.W3.state.loading,this.unsubscribe.push(M.W3.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return(0,U.qy)`
      <wui-connect-button
        size=${this.size??L.s6}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?M.W3.close():this.loading||M.W3.open()}};H([(0,D.MZ)()],K.prototype,"size",void 0),H([(0,D.MZ)()],K.prototype,"label",void 0),H([(0,D.MZ)()],K.prototype,"loadingLabel",void 0),H([(0,D.wk)()],K.prototype,"open",void 0),H([(0,D.wk)()],K.prototype,"loading",void 0),K=H([(0,j.customElement)("w3m-connect-button")],K),i(26426);let G=(0,U.AH)`
  :host {
    display: block;
    width: max-content;
  }
`;var V=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let Z=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=M.p_.state.caipNetwork,this.connected=M.Uj.state.isConnected,this.loading=M.W3.state.loading,this.unsubscribe.push(M.p_.subscribeKey("caipNetwork",e=>this.network=e),M.Uj.subscribeKey("isConnected",e=>this.connected=e),M.W3.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${M.$m.getNetworkImage(this.network)??L.s6}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||M.W3.open({view:"Networks"})}};Z.styles=G,V([(0,D.MZ)({type:Boolean})],Z.prototype,"disabled",void 0),V([(0,D.wk)()],Z.prototype,"network",void 0),V([(0,D.wk)()],Z.prototype,"connected",void 0),V([(0,D.wk)()],Z.prototype,"loading",void 0),Z=V([(0,j.customElement)("w3m-network-button")],Z);let Y=(0,U.AH)`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Q=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let J=class extends U.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=M.IN.state.view,this.unsubscribe.push(M.IN.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return(0,U.qy)`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,U.qy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return(0,U.qy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,U.qy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return(0,U.qy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return(0,U.qy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,U.qy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return(0,U.qy)`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return(0,U.qy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return(0,U.qy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return(0,U.qy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return(0,U.qy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return(0,U.qy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,U.qy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return(0,U.qy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return(0,U.qy)`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return(0,U.qy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,U.qy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return(0,U.qy)`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){let{history:t}=M.IN.state,i=-10,r=10;t.length<this.prevHistoryLength&&(i=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${i}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};J.styles=Y,Q([(0,D.wk)()],J.prototype,"view",void 0),J=Q([(0,j.customElement)("w3m-router")],J);let X=(0,U.AH)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var ee=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let et=class extends U.WF{constructor(){super(),this.usubscribe=[],this.address=M.Uj.state.address,this.profileImage=M.Uj.state.profileImage,this.profileName=M.Uj.state.profileName,this.balance=M.Uj.state.balance,this.balanceSymbol=M.Uj.state.balanceSymbol,this.network=M.p_.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(M.Uj.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):M.W3.close()}),M.p_.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=M.$m.getNetworkImage(this.network);return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(null===this.profileImage?void 0:this.profileImage)??L.s6}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?j.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):j.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${M.wE.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${e??L.s6}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){let e=M.iT.getConnectedConnector(),t=M.aK.getEmailConnector(),{origin:i}=location;return!t||"EMAIL"!==e||i.includes(M.oU.SECURE_SITE)?null:(0,U.qy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){let e=M.iT.getConnectedConnector(),t=M.aK.getEmailConnector();if(!t||"EMAIL"!==e)return null;let i=t.provider.getEmail()??"";return(0,U.qy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(i)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${i}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=M.Uj.state;return e?(0,U.qy)`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=M.p_.state,t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(M.wE.copyToClopboard(this.address),M.Pt.showSuccess("Address copied"))}catch{M.Pt.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&M.IN.push("Networks")}onTransactions(){M.En.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),M.IN.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await M.x4.disconnect(),M.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),M.W3.close()}catch{M.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),M.Pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=M.Uj.state;e&&M.wE.openHref(e,"_blank")}onGoToUpgradeView(){M.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),M.IN.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){M.IN.push("UpdateEmailWallet",{email:e})}};et.styles=X,ee([(0,D.wk)()],et.prototype,"address",void 0),ee([(0,D.wk)()],et.prototype,"profileImage",void 0),ee([(0,D.wk)()],et.prototype,"profileName",void 0),ee([(0,D.wk)()],et.prototype,"balance",void 0),ee([(0,D.wk)()],et.prototype,"balanceSymbol",void 0),ee([(0,D.wk)()],et.prototype,"network",void 0),ee([(0,D.wk)()],et.prototype,"disconecting",void 0),et=ee([(0,j.customElement)("w3m-account-view")],et);var ei=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let er=class extends U.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=M.wE.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,U.qy)`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?(0,U.qy)`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:(0,U.qy)`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return M.wE.isMobile()?(0,U.qy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){M.IN.push("ConnectingWalletConnect")}};ei([(0,D.wk)()],er.prototype,"search",void 0),er=ei([(0,j.customElement)("w3m-all-wallets-view")],er);let en=(0,U.AH)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ea=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let eo=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.connectors=M.aK.state.connectors,this.unsubscribe.push(M.aK.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(M.wE.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?(0,U.qy)`
      <wui-list-wallet
        imageSrc=${M.$m.getConnectorImage(e)??L.s6}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=M.Hd.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=M.Np.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return M.iT.getRecentWallets().map(e=>(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getConnectorImage(e)??L.s6}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&M.x4.checkInstalled()?(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getConnectorImage(t)??L.s6}
          .installed=${!!e}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){let e=M.aK.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(M.oU.CONNECTOR_RDNS_MAP[t.id])?null:(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getConnectorImage(t)??L.s6}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let e=M.Np.state.count+M.Np.state.featured.length,t=e<10?e:10*Math.floor(e/10),i=t<e?`${t}+`:`${t}`;return(0,U.qy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${i}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=M.Np.state,{customWallets:t,featuredWalletIds:i}=M.Hd.state,{connectors:r}=M.aK.state,n=M.iT.getRecentWallets(),a=r.filter(e=>"ANNOUNCED"===e.type);if(i||t||!e.length)return null;let o=Math.max(0,2-(a.length+n.length));return this.filterOutDuplicateWallets(e).slice(0,o).map(e=>(0,U.qy)`
        <wui-list-wallet
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?M.wE.isMobile()?M.IN.push("AllWallets"):M.IN.push("ConnectingWalletConnect"):M.IN.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=M.aK.state,i=M.iT.getRecentWallets().map(e=>e.id),r=t.map(e=>e.info?.rdns).filter(Boolean);return e.filter(e=>!i.includes(e.id)&&!r.includes(e.rdns??void 0))}onAllWallets(){M.En.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),M.IN.push("AllWallets")}onConnectWallet(e){M.IN.push("ConnectingWalletConnect",{wallet:e})}};eo.styles=en,ea([(0,D.wk)()],eo.prototype,"connectors",void 0),eo=ea([(0,j.customElement)("w3m-connect-view")],eo);let es=(0,U.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var el=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};class ec extends U.WF{constructor(){super(),this.wallet=M.IN.state.data?.wallet,this.connector=M.IN.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=M.$m.getWalletImage(this.wallet)??M.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=M.x4.state.wcUri,this.error=M.x4.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(M.x4.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),M.x4.subscribeKey("wcError",e=>this.error=e),M.x4.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),(0,U.qy)`
      <wui-flex
        data-error=${this.error??L.s6}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${this.imageSrc??L.s6}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?(0,U.qy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(M.x4.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=M.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,U.qy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(M.wE.copyToClopboard(this.uri),M.Pt.showSuccess("Link copied"))}catch{M.Pt.showError("Failed to copy")}}}ec.styles=es,el([(0,D.wk)()],ec.prototype,"uri",void 0),el([(0,D.wk)()],ec.prototype,"error",void 0),el([(0,D.wk)()],ec.prototype,"ready",void 0),el([(0,D.wk)()],ec.prototype,"showRetry",void 0),el([(0,D.wk)()],ec.prototype,"buffering",void 0),el([(0,D.MZ)({type:Boolean})],ec.prototype,"isMobile",void 0),el([(0,D.MZ)()],ec.prototype,"onRetry",void 0);let eu={INJECTED:"browser",ANNOUNCED:"browser"},ed=class extends ec{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eu[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&M.iT.setConnectedWalletImageUrl(this.connector.imageUrl),await M.x4.connectExternal(this.connector),M.jF.state.isSiweEnabled?M.IN.push("ConnectingSiwe"):M.W3.close(),M.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){M.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ed=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-external-view")],ed);var eh=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let ep=class extends U.WF{constructor(){super(...arguments),this.dappName=M.Hd.state.metadata?.name,this.isSigning=!1}render(){return(0,U.qy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,M.En.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{M.jF.setStatus("loading");let e=await M.jF.signIn();return M.jF.setStatus("success"),M.En.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return M.Pt.showError("Signature declined"),M.jF.setStatus("error"),M.En.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=M.Uj.state;e?(await M.x4.disconnect(),M.W3.close()):M.IN.push("Connect"),M.En.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};eh([(0,D.wk)()],ep.prototype,"isSigning",void 0),ep=eh([(0,j.customElement)("w3m-connecting-siwe-view")],ep);var ef=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let eg=class extends U.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=M.IN.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),M.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),(0,U.qy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):(0,U.qy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=M.x4.state;if(e||M.wE.isPairingExpired(t)){if(M.x4.connectWalletConnect(),this.wallet){let e=M.$m.getWalletImage(this.wallet);e&&M.iT.setConnectedWalletImageUrl(e)}else{let e=M.aK.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=M.$m.getConnectorImage(e);t&&M.iT.setConnectedWalletImageUrl(t)}await M.x4.state.wcPromise,this.finalizeConnection(),M.jF.state.isSiweEnabled?M.IN.push("ConnectingSiwe"):M.W3.close()}}catch(e){M.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),M.x4.setWcError(!0),M.wE.isAllowedRetry(this.lastRetry)&&(M.Pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=M.x4.state;e&&M.iT.setWalletConnectDeepLink(e),t&&M.iT.setWeb3ModalRecent(t),M.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:r,rdns:n}=this.wallet,a=r?.map(({injected_id:e})=>e).filter(Boolean),o=n?[n]:a??[],s=o.length,l=M.x4.checkInstalled(o),c=s&&l,u=t&&!M.wE.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(M.wE.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,U.qy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return(0,U.qy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return(0,U.qy)`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return(0,U.qy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,U.qy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,U.qy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,U.qy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ef([(0,D.wk)()],eg.prototype,"platform",void 0),ef([(0,D.wk)()],eg.prototype,"platforms",void 0),eg=ef([(0,j.customElement)("w3m-connecting-wc-view")],eg);let ew=class extends U.WF{constructor(){super(...arguments),this.wallet=M.IN.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,U.qy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,U.qy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,U.qy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,U.qy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,U.qy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&M.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&M.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&M.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&M.wE.openHref(this.wallet.homepage,"_blank")}};ew=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-downloads-view")],ew);let em=class extends U.WF{render(){return(0,U.qy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{M.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=M.Np.state,{customWallets:i}=M.Hd.state;return[...t,...i??[],...e].slice(0,4).map(e=>(0,U.qy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          @click=${()=>{M.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};em=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-get-wallet-view")],em);let eb=(0,U.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ev=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let ey=class extends U.WF{constructor(){super(),this.network=M.IN.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return(0,U.qy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${M.$m.getNetworkImage(this.network)??L.s6}
          ></wui-network-image>

          ${this.error?null:(0,U.qy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await M.p_.switchActiveNetwork(this.network),M.jF.state.isSiweEnabled||M.aS.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ey.styles=eb,ev([(0,D.wk)()],ey.prototype,"showRetry",void 0),ev([(0,D.wk)()],ey.prototype,"error",void 0),ey=ev([(0,j.customElement)("w3m-network-switch-view")],ey);let ex=(0,U.AH)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var eC=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let eE=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.caipNetwork=M.p_.state.caipNetwork,this.unsubscribe.push(M.p_.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){M.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),M.IN.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:i}=M.p_.state,r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let i=r[e.id],n=r[t.id];return void 0!==i&&void 0!==n?i-n:void 0!==i?-1:1*(void 0!==n)})),t?.map(t=>(0,U.qy)`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${M.$m.getNetworkImage(t)??L.s6}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!i&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=M.Uj.state,{approvedCaipNetworkIds:i,supportsAllNetworks:r,caipNetwork:n}=M.p_.state,{data:a}=M.IN.state;t&&n?.id!==e.id?i?.includes(e.id)?(await M.p_.switchActiveNetwork(e),M.aS.navigateAfterNetworkSwitch()):r&&M.IN.push("SwitchNetwork",{...a,network:e}):t||(M.p_.setCaipNetwork(e),M.IN.push("Connect"))}};eE.styles=ex,eC([(0,D.wk)()],eE.prototype,"caipNetwork",void 0),eE=eC([(0,j.customElement)("w3m-networks-view")],eE);var e_=i(53418);let eS=(0,U.AH)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var eA=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let e$="last-transaction",ek=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=M.Uj.state.address,this.transactions=M.WC.state.transactions,this.transactionsByYear=M.WC.state.transactionsByYear,this.loading=M.WC.state.loading,this.empty=M.WC.state.empty,this.next=M.WC.state.next,this.unsubscribe.push(M.Uj.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,M.WC.resetTransactions(),M.WC.fetchTransactions(e.address))}),M.WC.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){0===this.transactions.length&&M.WC.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,i)=>{let r=i===e.length-1,n=parseInt(t,10),a=j.TransactionUtil.getTransactionGroupTitle(n),o=this.transactionsByYear[n];return o?(0,U.qy)`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(o,r)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){let{date:i,descriptions:r,direction:n,isAllNFT:a,images:o,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||a?u?l.map((e,r)=>{let n=j.TransactionUtil.getTransferDescription(e),a=t&&r===l.length-1;return(0,U.qy)` <wui-transaction-list-item
          date=${i}
          direction=${e.direction}
          id=${a&&this.next?e$:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[o?.[r]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`}):(0,U.qy)`
      <wui-transaction-list-item
        date=${i}
        .direction=${n}
        id=${t&&this.next?e$:""}
        status=${s}
        type=${c}
        .images=${o}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `:(0,U.qy)`
        <wui-transaction-list-item
          date=${i}
          .direction=${n}
          id=${t&&this.next?e$:""}
          status=${s}
          type=${c}
          .images=${o}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((i,r)=>{let n=t&&r===e.length-1;return(0,U.qy)`${this.templateRenderTransaction(i,n)}`})}templateEmpty(){return(0,U.qy)`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill((0,U.qy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=M.Hd.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(M.WC.fetchTransactions(this.address),M.En.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${e$}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=e_.r.getRelativeDateFromNow(e?.metadata?.minedAt),i=j.TransactionUtil.getTransactionDescriptions(e),r=e?.transfers,n=e?.transfers?.[0],a=!!n&&e?.transfers?.every(e=>!!e.nft_info),o=j.TransactionUtil.getTransactionImages(r);return{date:t,direction:n?.direction,descriptions:i,isAllNFT:a,images:o,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};ek.styles=eS,eA([(0,D.wk)()],ek.prototype,"address",void 0),eA([(0,D.wk)()],ek.prototype,"transactions",void 0),eA([(0,D.wk)()],ek.prototype,"transactionsByYear",void 0),eA([(0,D.wk)()],ek.prototype,"loading",void 0),eA([(0,D.wk)()],ek.prototype,"empty",void 0),eA([(0,D.wk)()],ek.prototype,"next",void 0),ek=eA([(0,j.customElement)("w3m-transactions-view")],ek);let eP=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eI=class extends U.WF{render(){return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eP}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{M.wE.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eI=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-what-is-a-network-view")],eI);let eR=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eT=class extends U.WF{render(){return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eR}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){M.En.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),M.IN.push("GetWallet")}};eT=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-what-is-a-wallet-view")],eT);let eO=(0,U.AH)`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,eN={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};var eM=i(23696);let ej=eM.z.object({message:eM.z.string()});function eU(e){return eM.z.literal(eN[e])}eM.z.object({accessList:eM.z.array(eM.z.string()),blockHash:eM.z.string().nullable(),blockNumber:eM.z.string().nullable(),chainId:eM.z.string(),from:eM.z.string(),gas:eM.z.string(),hash:eM.z.string(),input:eM.z.string().nullable(),maxFeePerGas:eM.z.string(),maxPriorityFeePerGas:eM.z.string(),nonce:eM.z.string(),r:eM.z.string(),s:eM.z.string(),to:eM.z.string(),transactionIndex:eM.z.string().nullable(),type:eM.z.string(),v:eM.z.string(),value:eM.z.string()});let eD=eM.z.object({chainId:eM.z.number()}),eL=eM.z.object({email:eM.z.string().email()}),ez=eM.z.object({otp:eM.z.string()}),eW=eM.z.object({chainId:eM.z.optional(eM.z.number())}),eB=eM.z.object({email:eM.z.string().email()}),eF=eM.z.object({themeMode:eM.z.optional(eM.z.enum(["light","dark"])),themeVariables:eM.z.optional(eM.z.record(eM.z.string(),eM.z.string().or(eM.z.number())))}),eq=eM.z.object({metadata:eM.z.object({name:eM.z.string(),description:eM.z.string(),url:eM.z.string(),icons:eM.z.array(eM.z.string())}).optional(),sdkVersion:eM.z.string(),projectId:eM.z.string()}),eH=eM.z.object({action:eM.z.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),eK=eM.z.object({email:eM.z.string().email(),address:eM.z.string(),chainId:eM.z.number()}),eG=eM.z.object({isConnected:eM.z.boolean()}),eV=eM.z.object({chainId:eM.z.number()}),eZ=eM.z.object({chainId:eM.z.number()}),eY=eM.z.object({email:eM.z.string().email()}),eQ=eM.z.any(),eJ=eM.z.object({method:eM.z.literal("personal_sign"),params:eM.z.array(eM.z.any())}),eX=eM.z.object({method:eM.z.literal("eth_sendTransaction"),params:eM.z.array(eM.z.any())}),e0=eM.z.object({method:eM.z.literal("eth_accounts")}),e1=eM.z.object({method:eM.z.literal("eth_getBalance"),params:eM.z.array(eM.z.any())}),e2=eM.z.object({method:eM.z.literal("eth_estimateGas"),params:eM.z.array(eM.z.any())}),e5=eM.z.object({method:eM.z.literal("eth_gasPrice")}),e3=eM.z.object({method:eM.z.literal("eth_signTypedData_v4"),params:eM.z.array(eM.z.any())}),e4=eM.z.object({method:eM.z.literal("eth_getTransactionByHash"),params:eM.z.array(eM.z.any())}),e6=eM.z.object({method:eM.z.literal("eth_blockNumber")}),e8=eM.z.object({method:eM.z.literal("eth_chainId")}),e7=eM.z.object({token:eM.z.string()}),e9={appEvent:eM.z.object({type:eU("APP_SWITCH_NETWORK"),payload:eD}).or(eM.z.object({type:eU("APP_CONNECT_EMAIL"),payload:eL})).or(eM.z.object({type:eU("APP_CONNECT_DEVICE")})).or(eM.z.object({type:eU("APP_CONNECT_OTP"),payload:ez})).or(eM.z.object({type:eU("APP_GET_USER"),payload:eM.z.optional(eW)})).or(eM.z.object({type:eU("APP_SIGN_OUT")})).or(eM.z.object({type:eU("APP_IS_CONNECTED"),payload:eM.z.optional(e7)})).or(eM.z.object({type:eU("APP_GET_CHAIN_ID")})).or(eM.z.object({type:eU("APP_RPC_REQUEST"),payload:eJ.or(eX).or(e0).or(e1).or(e2).or(e5).or(e3).or(e6).or(e8).or(e4)})).or(eM.z.object({type:eU("APP_UPDATE_EMAIL"),payload:eB})).or(eM.z.object({type:eU("APP_AWAIT_UPDATE_EMAIL")})).or(eM.z.object({type:eU("APP_SYNC_THEME"),payload:eF})).or(eM.z.object({type:eU("APP_SYNC_DAPP_DATA"),payload:eq})),frameEvent:eM.z.object({type:eU("FRAME_SWITCH_NETWORK_ERROR"),payload:ej}).or(eM.z.object({type:eU("FRAME_SWITCH_NETWORK_SUCCESS"),payload:eZ})).or(eM.z.object({type:eU("FRAME_CONNECT_EMAIL_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_CONNECT_EMAIL_SUCCESS"),payload:eH})).or(eM.z.object({type:eU("FRAME_CONNECT_OTP_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_CONNECT_OTP_SUCCESS")})).or(eM.z.object({type:eU("FRAME_CONNECT_DEVICE_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_CONNECT_DEVICE_SUCCESS")})).or(eM.z.object({type:eU("FRAME_GET_USER_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_GET_USER_SUCCESS"),payload:eK})).or(eM.z.object({type:eU("FRAME_SIGN_OUT_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_SIGN_OUT_SUCCESS")})).or(eM.z.object({type:eU("FRAME_IS_CONNECTED_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_IS_CONNECTED_SUCCESS"),payload:eG})).or(eM.z.object({type:eU("FRAME_GET_CHAIN_ID_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_GET_CHAIN_ID_SUCCESS"),payload:eV})).or(eM.z.object({type:eU("FRAME_RPC_REQUEST_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_RPC_REQUEST_SUCCESS"),payload:eQ})).or(eM.z.object({type:eU("FRAME_SESSION_UPDATE"),payload:e7})).or(eM.z.object({type:eU("FRAME_UPDATE_EMAIL_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_UPDATE_EMAIL_SUCCESS")})).or(eM.z.object({type:eU("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:eY})).or(eM.z.object({type:eU("FRAME_SYNC_THEME_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_SYNC_THEME_SUCCESS")})).or(eM.z.object({type:eU("FRAME_SYNC_DAPP_DATA_ERROR"),payload:ej})).or(eM.z.object({type:eU("FRAME_SYNC_DAPP_DATA_SUCCESS")}))},te={set(e,t){localStorage.setItem(`${eN.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${eN.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${eN.STORAGE_KEY}${e}`)}},tt=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ti={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return tt.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=te.get(eN.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4){let e=Math.ceil((3e4-t)/1e3);throw Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){let e=te.get(eN.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0}};class tr{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=ti.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(eN.FRAME_EVENT_KEY)&&e(e9.frameEvent.parse(t))})},onAppEvent:e=>{window.addEventListener("message",({data:t})=>{t.type?.includes(eN.APP_EVENT_KEY)&&e(e9.appEvent.parse(t))})},postAppEvent:e=>{if(!this.iframe?.contentWindow)throw Error("W3mFrame: iframe is not set");e9.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")},postFrameEvent:e=>{if(!parent)throw Error("W3mFrame: parent is not set");e9.frameEvent.parse(e),parent.postMessage(e,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t){this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}});const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${eN.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){return Object.assign({},...[1,5,0xaa36a7,10,420,42161,421613,137,80001,42220,0x4e454152,0x4e454153,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})))}}class tn{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.w3mFrame=new tr(e,!0),this.w3mFrame.events.onFrameEvent(e=>{switch(console.log("\uD83D\uDCBB received",e),e.type){case eN.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case eN.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case eN.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case eN.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case eN.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case eN.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case eN.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case eN.FRAME_GET_USER_ERROR:return this.onConnectError(e);case eN.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case eN.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case eN.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case eN.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case eN.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case eN.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case eN.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case eN.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case eN.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case eN.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case eN.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case eN.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case eN.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case eN.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(e);case eN.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(e);case eN.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case eN.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case eN.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case eN.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);default:return null}})}getLoginEmailUsed(){return!!te.get(eN.EMAIL_LOGIN_USED_KEY)}getEmail(){return te.get(eN.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,ti.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:eN.APP_CONNECT_EMAIL,payload:e}),new Promise((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_CONNECT_OTP,payload:e}),new Promise((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,ti.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:eN.APP_UPDATE_EMAIL,payload:e}),new Promise((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,t)=>{this.awaitUpdateEmailResolver={resolve:e,reject:t}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_SYNC_THEME,payload:e}),new Promise((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_SYNC_DAPP_DATA,payload:e}),new Promise((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}})}async connect(e){let t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_GET_USER,payload:{chainId:t}}),new Promise((e,t)=>{this.connectResolver={resolve:e,reject:t}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((e,t)=>{this.switchChainResolver={resolve:e,reject:t}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:eN.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return(await this.w3mFrame.frameLoadPromise,"eth_chainId"===e.method)?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:eN.APP_RPC_REQUEST,payload:e}),new Promise((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(eN.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(eN.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===eN.FRAME_GET_USER_SUCCESS&&e()})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteEmailLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){let{payload:t}=e}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){te.set(eN.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){te.set(eN.EMAIL,e),te.set(eN.EMAIL_LOGIN_USED_KEY,"true"),te.delete(eN.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){te.delete(eN.EMAIL_LOGIN_USED_KEY),te.delete(eN.EMAIL),te.delete(eN.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){te.set(eN.LAST_USED_CHAIN_KEY,`${e}`)}getLastUsedChainId(){return Number(te.get(eN.LAST_USED_CHAIN_KEY))}}var ta=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let to=class extends U.WF{constructor(){super(...arguments),this.email=M.IN.state.data?.email,this.emailConnector=M.aK.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=ti.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw Error("w3m-email-verify-otp-view: No email provided");let e=!!this.timeoutTimeLeft;return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,U.qy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,U.qy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,U.qy)`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=ti.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=ti.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),M.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await M.x4.connectExternal(this.emailConnector),M.W3.close(),M.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(e){M.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=M.wE.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";let e=M.aK.getEmailConnector();if(!e||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),M.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),M.Pt.showSuccess("Code email resent")}}catch(e){M.Pt.showError(e)}finally{this.loading=!1}}};to.styles=eO,ta([(0,D.wk)()],to.prototype,"loading",void 0),ta([(0,D.wk)()],to.prototype,"timeoutTimeLeft",void 0),ta([(0,D.wk)()],to.prototype,"error",void 0),to=ta([(0,j.customElement)("w3m-email-verify-otp-view")],to);let ts=(0,U.AH)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var tl=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tc=class extends U.WF{constructor(){super(),this.email=M.IN.state.data?.email,this.emailConnector=M.aK.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),M.En.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),M.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),M.IN.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),M.Pt.showSuccess("Code email resent")}}catch(e){M.Pt.showError(e)}finally{this.loading=!1}}};tc.styles=ts,tl([(0,D.wk)()],tc.prototype,"loading",void 0),tc=tl([(0,j.customElement)("w3m-email-verify-device-view")],tc);let tu=(0,U.AH)`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var td=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let th=class extends U.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(M.W3.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),(0,U.qy)`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};th.styles=tu,td([(0,D.wk)()],th.prototype,"ready",void 0),th=td([(0,j.customElement)("w3m-approve-transaction-view")],th);let tp=class extends U.WF{render(){return(0,U.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${M.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${M.oU.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};tp=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-upgrade-wallet-view")],tp);let{I:tf}=L.ge;class tg{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let tw=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),tw(e,t);return!0},tm=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},tb=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),tx(t)}};function tv(e){void 0!==this._$AN?(tm(this),this._$AM=e,tb(this)):this._$AM=e}function ty(e,t=!1,i=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)tw(r[e],!1),tm(r[e]);else null!=r&&(tw(r,!1),tm(r));else tw(this,e)}let tx=e=>{2==e.type&&(e._$AP??=ty,e._$AQ??=tv)};class tC extends tg{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),tb(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tw(this,e),tm(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let tE=()=>new t_;class t_{}let tS=new WeakMap,tA=(n=class extends tC{render(e){return L.s6}update(e,[t]){let i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),L.s6}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=tS.get(t);void 0===i&&(i=new WeakMap,tS.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?tS.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...e)=>({_$litDirective$:n,values:e})),t$=(0,U.AH)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var tk=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tP=class extends U.WF{constructor(){super(...arguments),this.formRef=tE(),this.initialValue=M.IN.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return(0,U.qy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${tA(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${M.IN.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=M.aK.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),M.En.sendEvent({type:"track",event:"EMAIL_EDIT"}),M.IN.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(e){M.Pt.showError(e),this.loading=!1}}};tP.styles=t$,tk([(0,D.wk)()],tP.prototype,"email",void 0),tk([(0,D.wk)()],tP.prototype,"loading",void 0),tP=tk([(0,j.customElement)("w3m-update-email-wallet-view")],tP);let tI=(0,U.AH)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var tR=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tT=class extends U.WF{constructor(){super(),this.email=M.IN.state.data?.email,this.emailConnector=M.aK.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw Error("w3m-update-email-wallet-waiting-view: No email connector provided");return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),M.IN.replace("Account"),M.Pt.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),M.Pt.showSuccess("Code email resent")}}catch(e){M.Pt.showError(e)}finally{this.loading=!1}}};tT.styles=tI,tR([(0,D.wk)()],tT.prototype,"loading",void 0),tT=tR([(0,j.customElement)("w3m-update-email-wallet-waiting-view")],tT);let tO=(0,U.AH)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function tN(e){let{connectors:t}=M.aK.state,i=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!i[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var tM=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tj="local-paginator",tU=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!M.Np.state.wallets.length,this.wallets=M.Np.state.wallets,this.recommended=M.Np.state.recommended,this.featured=M.Np.state.featured,this.unsubscribe.push(M.Np.subscribeKey("wallets",e=>this.wallets=e),M.Np.subscribeKey("recommended",e=>this.recommended=e),M.Np.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,U.qy)`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await M.Np.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,U.qy)`
        <wui-card-select-loader type="wallet" id=${t??L.s6}></wui-card-select-loader>
      `)}walletsTemplate(){return tN([...this.featured,...this.recommended,...this.wallets]).map(e=>(0,U.qy)`
        <wui-card-select
          imageSrc=${M.$m.getWalletImage(e)??L.s6}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:r}=M.Np.state,n=window.innerWidth<352?3:4,a=e.length+t.length,o=Math.ceil(a/n)*n-a+n;return(o-=e.length?i.length%n:0,0===r&&i.length>0)?null:0===r||[...i,...e,...t].length<r?this.shimmerTemplate(o,tj):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tj}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:i}=M.Np.state;i.length<t&&M.Np.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=M.aK.state,i=t.find(({explorerId:t})=>t===e.id);i?M.IN.push("ConnectingExternal",{connector:i}):M.IN.push("ConnectingWalletConnect",{wallet:e})}};tU.styles=tO,tM([(0,D.wk)()],tU.prototype,"initial",void 0),tM([(0,D.wk)()],tU.prototype,"wallets",void 0),tM([(0,D.wk)()],tU.prototype,"recommended",void 0),tM([(0,D.wk)()],tU.prototype,"featured",void 0),tU=tM([(0,j.customElement)("w3m-all-wallets-list")],tU);let tD=(0,U.AH)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var tL=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tz=class extends U.WF{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,U.qy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await M.Np.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=M.Np.state,t=tN(e);return e.length?(0,U.qy)`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>(0,U.qy)`
            <wui-card-select
              imageSrc=${M.$m.getWalletImage(e)??L.s6}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:(0,U.qy)`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=M.aK.state,i=t.find(({explorerId:t})=>t===e.id);i?M.IN.push("ConnectingExternal",{connector:i}):M.IN.push("ConnectingWalletConnect",{wallet:e})}};tz.styles=tD,tL([(0,D.wk)()],tz.prototype,"loading",void 0),tL([(0,D.MZ)()],tz.prototype,"query",void 0),tz=tL([(0,j.customElement)("w3m-all-wallets-search")],tz);var tW=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tB=class extends U.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(M.x4.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,U.qy)`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};tW([(0,D.MZ)({type:Array})],tB.prototype,"platforms",void 0),tW([(0,D.MZ)()],tB.prototype,"onSelectPlatfrom",void 0),tW([(0,D.wk)()],tB.prototype,"buffering",void 0),tB=tW([(0,j.customElement)("w3m-connecting-header")],tB);let tF=class extends ec{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=M.aK.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),i=e.find(e=>"INJECTED"===e.type);t?await M.x4.connectExternal(t):i&&await M.x4.connectExternal(i),M.W3.close(),M.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){M.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};tF=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-browser")],tF);let tq=class extends ec{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:r}=M.wE.formatNativeUrl(e,this.uri);M.x4.setWcLinking({name:t,href:r}),M.x4.setRecentWallet(this.wallet),M.wE.openHref(i,"_blank")}catch{this.error=!0}}};tq=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-desktop")],tq);let tH=class extends ec{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:i,href:r}=M.wE.formatNativeUrl(e,this.uri);M.x4.setWcLinking({name:t,href:r}),M.x4.setRecentWallet(this.wallet),M.wE.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){let e=M.wE.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(M.x4.setBuffering(!0),setTimeout(()=>{M.x4.setBuffering(!1)},5e3))}};tH=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-mobile")],tH);let tK=(0,U.AH)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,tG=class extends ec{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,U.qy)`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return M.x4.setWcLinking(void 0),M.x4.setRecentWallet(this.wallet),(0,U.qy)` <wui-qr-code
      size=${e}
      theme=${M.Wn.state.themeMode}
      uri=${this.uri}
      imageSrc=${M.$m.getWalletImage(this.wallet)??L.s6}
      alt=${t??L.s6}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,U.qy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};tG.styles=tK,tG=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-qrcode")],tG);let tV=(0,U.AH)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,tZ=class extends U.WF{constructor(){super(...arguments),this.dappImageUrl=M.Hd.state.metadata?.icons,this.walletImageUrl=M.iT.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,U.qy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};tZ.styles=tV,tZ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-siwe")],tZ);let tY=class extends U.WF{constructor(){if(super(),this.wallet=M.IN.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,U.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${M.$m.getWalletImage(this.wallet)??L.s6}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};tY=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-unsupported")],tY);let tQ=class extends ec{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",M.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:r}=M.wE.formatUniversalUrl(e,this.uri);M.x4.setWcLinking({name:t,href:r}),M.x4.setRecentWallet(this.wallet),M.wE.openHref(i,"_blank")}catch{this.error=!0}}};tQ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-connecting-wc-web")],tQ);let tJ=(0,U.AH)`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var tX=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};function t0(){let e=M.IN.state.data?.connector?.name,t=M.IN.state.data?.wallet?.name,i=M.IN.state.data?.network?.name,r=t??e,n=M.aK.getConnectors(),a=1===n.length&&n[0]?.id==="w3m-email";return{Connect:`Connect ${a?"Email":""} Wallet`,Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:i??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let t1=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.heading=t0()[M.IN.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(M.IN.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),M.x4.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,U.qy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){M.En.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),M.IN.push("WhatIsAWallet")}async onClose(){M.jF.state.isSiweEnabled&&"success"!==M.jF.state.status&&await M.x4.disconnect(),M.W3.close()}titleTemplate(){return(0,U.qy)`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=M.IN.state;return this.showBack&&"ApproveTransaction"!==e?(0,U.qy)`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,U.qy)`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?(0,U.qy)`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let i=t0()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=M.IN.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===M.IN.state.view?M.IN.push("Connect"):M.IN.goBack()}};t1.styles=[tJ],tX([(0,D.wk)()],t1.prototype,"heading",void 0),tX([(0,D.wk)()],t1.prototype,"buffering",void 0),tX([(0,D.wk)()],t1.prototype,"showBack",void 0),t1=tX([(0,j.customElement)("w3m-header")],t1);var t2=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t5=class extends U.WF{constructor(){super(...arguments),this.data=[]}render(){return(0,U.qy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,U.qy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,U.qy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};t2([(0,D.MZ)({type:Array})],t5.prototype,"data",void 0),t5=t2([(0,j.customElement)("w3m-help-widget")],t5);let t3=(0,U.AH)`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`,t4=class extends U.WF{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=M.Hd.state;return e||t?(0,U.qy)`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=M.Hd.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=M.Hd.state;return e?(0,U.qy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=M.Hd.state;return e?(0,U.qy)`<a href=${e}>Privacy Policy</a>`:null}};t4.styles=[t3],t4=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,j.customElement)("w3m-legal-footer")],t4);let t6=(0,U.AH)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var t8=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t7=class extends U.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:r,homepage:n}=this.wallet,a=M.wE.isMobile(),o=M.wE.isIos(),s=M.wE.isAndroid(),l=[t,i,n,r].filter(Boolean).length>1,c=j.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?(0,U.qy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>M.IN.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?(0,U.qy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?(0,U.qy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&s?(0,U.qy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&M.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&M.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&M.wE.openHref(this.wallet.homepage,"_blank")}};t7.styles=[t6],t8([(0,D.MZ)({type:Object})],t7.prototype,"wallet",void 0),t7=t8([(0,j.customElement)("w3m-mobile-download-links")],t7);let t9=(0,U.AH)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ie=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let it={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},ii=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=M.Pt.state.open,this.unsubscribe.push(M.Pt.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=M.Pt.state,i=it[t];return(0,U.qy)`
      <wui-snackbar
        message=${e}
        backgroundColor=${i.backgroundColor}
        iconColor=${i.iconColor}
        icon=${i.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>M.Pt.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ii.styles=t9,ie([(0,D.wk)()],ii.prototype,"open",void 0),ii=ie([(0,j.customElement)("w3m-snackbar")],ii);let ir=(0,U.AH)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var ia=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let io=class extends U.WF{constructor(){super(),this.unsubscribe=[],this.formRef=tE(),this.connectors=M.aK.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(M.aK.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1;return this.connectors.find(e=>"EMAIL"===e.type)?(0,U.qy)`
      ${this.alphaWarningTemplate()}
      <form ${tA(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?(0,U.qy)`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return(0,U.qy)`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,U.qy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,U.qy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=M.aK.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});M.En.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(M.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),M.IN.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i&&M.IN.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=M.wE.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":M.Pt.showError(t)}finally{this.loading=!1}}onFocusEvent(){M.En.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};io.styles=ir,ia([(0,D.wk)()],io.prototype,"connectors",void 0),ia([(0,D.wk)()],io.prototype,"email",void 0),ia([(0,D.wk)()],io.prototype,"loading",void 0),ia([(0,D.wk)()],io.prototype,"error",void 0),io=ia([(0,j.customElement)("w3m-email-login-widget")],io);let is=!1;class il{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{M.Uj.setIsConnected(e)},this.setCaipAddress=e=>{M.Uj.setCaipAddress(e)},this.setBalance=(e,t)=>{M.Uj.setBalance(e,t)},this.setProfileName=e=>{M.Uj.setProfileName(e)},this.setProfileImage=e=>{M.Uj.setProfileImage(e)},this.resetAccount=()=>{M.Uj.resetAccount()},this.setCaipNetwork=e=>{M.p_.setCaipNetwork(e)},this.getCaipNetwork=()=>M.p_.state.caipNetwork,this.setRequestedCaipNetworks=e=>{M.p_.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>M.p_.getApprovedCaipNetworksData(),this.resetNetwork=()=>{M.p_.resetNetwork()},this.setConnectors=e=>{M.aK.setConnectors(e)},this.addConnector=e=>{M.aK.addConnector(e)},this.getConnectors=()=>M.aK.getConnectors(),this.resetWcConnection=()=>{M.x4.resetWcConnection()},this.fetchIdentity=e=>M.TP.fetchIdentity(e),this.setAddressExplorerUrl=e=>{M.Uj.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{M.jF.setNonce(e)},this.setSIWESession=e=>{M.jF.setSession(e)},this.setSIWEStatus=e=>{M.jF.setStatus(e)},this.setSIWEMessage=e=>{M.jF.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),M.W3.open(e)}async close(){await this.initOrContinue(),M.W3.close()}setLoading(e){M.W3.setLoading(e)}getThemeMode(){return M.Wn.state.themeMode}getThemeVariables(){return M.Wn.state.themeVariables}setThemeMode(e){M.Wn.setThemeMode(e),(0,j.setColorTheme)(M.Wn.state.themeMode);try{let e=M.aK.getEmailConnector();e&&e.provider.syncTheme({themeMode:M.Wn.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){M.Wn.setThemeVariables(e),(0,j.setThemeVariables)(M.Wn.state.themeVariables);try{let e=M.aK.getEmailConnector();e&&e.provider.syncTheme({themeVariables:M.Wn.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return M.Wn.subscribe(e)}getState(){return{...M.z3.state}}subscribeState(e){return M.z3.subscribe(e)}getEvent(){return{...M.En.state}}subscribeEvents(e){return M.En.subscribe(e)}subscribeSIWEState(e){return M.jF.subscribe(e)}initControllers(e){if(M.p_.setClient(e.networkControllerClient),M.p_.setDefaultCaipNetwork(e.defaultChain),M.Hd.setProjectId(e.projectId),M.Hd.setIncludeWalletIds(e.includeWalletIds),M.Hd.setExcludeWalletIds(e.excludeWalletIds),M.Hd.setFeaturedWalletIds(e.featuredWalletIds),M.Hd.setTokens(e.tokens),M.Hd.setTermsConditionsUrl(e.termsConditionsUrl),M.Hd.setPrivacyPolicyUrl(e.privacyPolicyUrl),M.Hd.setCustomWallets(e.customWallets),M.Hd.setEnableAnalytics(e.enableAnalytics),M.Hd.setSdkVersion(e._sdkVersion),M.x4.setClient(e.connectionControllerClient),e.siweControllerClient){let t=e.siweControllerClient;M.jF.setSIWEClient(t)}e.metadata&&M.Hd.setMetadata(e.metadata),e.themeMode&&M.Wn.setThemeMode(e.themeMode),e.themeVariables&&M.Wn.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!is&&M.wE.isClient()&&(is=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(i.bind(i,86692)),Promise.resolve().then(i.bind(i,26426))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let ic="walletConnect",iu="injected",id="coinbaseWallet",ih="safe",ip="ledger",ig="eip6963",iw="w3mEmail",im="eip155",ib="3.5.7",iv={[id]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ih]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ip]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},iy={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",0x4e454152:"3ff73439-a619-4894-9262-4470c773a100"},ix={[id]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ih]:"461db637-8616-43ce-035a-d89b8a1d5800",[ip]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ic]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[iu]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},iC={[iu]:"Browser Wallet",[ic]:"WalletConnect",[id]:"Coinbase",[ip]:"Ledger",[ih]:"Safe"},iE={[iu]:"INJECTED",[ic]:"WALLET_CONNECT",[ig]:"ANNOUNCED",[iw]:"EMAIL"},i_=[1,5,0xaa36a7,10,420,42161,421613,137,80001,42220,0x4e454152,0x4e454153,56,97,43114,43113,100,8453,84531,7777777,999,324,280],iS={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,i])=>{t[`${im}:${e}`]=i}),t}};class iA extends il{constructor(e){const{wagmiConfig:t,siweConfig:i,chains:r,defaultChain:n,tokens:a,_sdkVersion:o,...s}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=iS.caipNetworkIdToNumber(e?.id);t&&await (0,O.F_)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(iw))return{supportsAllNetworks:!1,approvedCaipNetworkIds:i_.map(e=>`${im}:${e}`)};if(e?.includes(ic)){let e=t.connectors.find(e=>e.id===ic);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let i=await e.getProvider(),r=i.signer?.session?.namespaces,n=r?.[im]?.methods,a=r?.[im]?.chains;return{supportsAllNetworks:n?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:a}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async e=>{let i=t.connectors.find(e=>e.id===ic);if(!i)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");i.on("message",t=>{"display_uri"===t.type&&(e(t.data),i.removeAllListeners())});let r=iS.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,O.Ng)({connector:i,chainId:r})},connectExternal:async({id:e,provider:i,info:r})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");i&&r&&n.id===ig&&n.setEip6963Wallet?.({provider:i,info:r});let a=iS.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,O.Ng)({connector:n,chainId:a})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),i=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!(t.length&&e.some(e=>t.some(t=>t.info?.rdns===e)))||!!i&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await (0,O.Zf)(),i?.options?.signOutOnDisconnect&&await i.signOut()},signMessage:async e=>(0,O.lT)({message:e})},siweControllerClient:i,defaultChain:function(e){if(e)return{id:`${im}:${e.id}`,name:e.name,imageId:iy[e.id]}}(n),tokens:iS.getCaipTokens(a),_sdkVersion:o??`html-wagmi-${ib}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(t),this.syncEmailConnector(t),this.listenEIP6963Connector(t),this.listenEmailConnector(t),(0,O.F5)(()=>this.syncAccount()),(0,O.Us)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:iS.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:iS.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${im}:${e.id}`,name:e.name,imageId:iy[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,O.sU)(),{chain:i}=(0,O.Nj)();if(this.resetAccount(),t&&e&&i){let r=`${im}:${i.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(r),await Promise.all([this.syncProfile(e,i),this.syncBalance(e,i),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,O.sU)(),{chain:i}=(0,O.Nj)();if(i){let r=String(i.id),n=`${im}:${r}`;if(this.setCaipNetwork({id:n,name:i.name,imageId:iy[i.id],imageUrl:this.options?.chainImages?.[i.id]}),t&&e){let t=`${im}:${i.id}:${e}`;if(this.setCaipAddress(t),i.blockExplorers?.default?.url){let t=`${i.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,i),await this.syncBalance(e,i))}}}async syncProfile(e,t){if(t.id!==N.r.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:i,avatar:r}=await this.fetchIdentity({caipChainId:`${im}:${t.id}`,address:e});this.setProfileName(i),this.setProfileImage(r)}catch{let i=await (0,O.Gd)({address:e,chainId:t.id});if(i){this.setProfileName(i);let e=await (0,O.y2)({name:i,chainId:t.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let i=await (0,O.vL)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(i.formatted,i.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:i})=>{[ig,iw].includes(e)||t.push({id:e,explorerId:iv[e],imageId:ix[e],imageUrl:this.options?.connectorImages?.[e],name:iC[e]??i,type:iE[e]??"EXTERNAL"})}),this.setConnectors(t)}async syncEmailConnector(e){let t=e.connectors.find(({id:e})=>"w3mEmail"===e);if(t){let e=await t.getProvider();this.addConnector({id:iw,type:"EMAIL",name:"Email",provider:e})}}eip6963EventHandler(e,t){if(t.detail){let{info:i,provider:r}=t.detail;this.getConnectors().find(e=>e.name===i.name)||(this.addConnector({id:ig,type:"ANNOUNCED",imageUrl:i.icon??this.options?.connectorImages?.[ig],name:i.name,provider:r,info:i}),e.isAuthorized({info:i,provider:r}))}}listenEIP6963Connector(e){let t=e.connectors.find(e=>e.id===ig);if("u">typeof window&&t){let e=this.eip6963EventHandler.bind(this,t);window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new Event("eip6963:requestProvider"))}}async listenEmailConnector(e){let t=e.connectors.find(e=>e.id===iw);if("u">typeof window&&t){super.setLoading(!0);let e=await t.getProvider(),i=e.getLoginEmailUsed();super.setLoading(i),e.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),e.onRpcResponse(()=>{super.close()}),e.onIsConnected(()=>{super.setLoading(!1)})}}}var i$=i(18338),ik=i(96685),iP=function(e,t,i,r,n){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!n)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?n.call(e,i):n?n.value=i:t.set(e,i),i},iI=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let iR="connectedRdns";class iT extends i$.s{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",o.set(this,void 0),s.set(this,void 0),this.onAccountsChanged=e=>{0===e.length?(this.storage?.removeItem(iR),this.emit("disconnect")):e[0]&&this.emit("change",{account:(0,ik.b)(e[0])})},iP(this,o,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return iI(this,s,"f")&&this.storage?.setItem(iR,iI(this,s,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(iR),iP(this,s,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(iR);if(t){if(iI(this,s,"f")&&t===iI(this,s,"f").info.rdns){let e=iI(this,s,"f").provider;if((await e.request({method:"eth_accounts"})).length)return!0}e&&iP(this,s,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(iI(this,s,"f")?.provider??iI(this,o,"f"))}setEip6963Wallet(e){iP(this,s,e,"f")}}o=new WeakMap,s=new WeakMap;var iO=i(49304);"u">typeof window&&(window.Buffer||(window.Buffer=iO.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var iN=i(54371),iM=i(6005),ij=i(21253),iU=i(19492),iD=i(65261),iL=i(43598),iz=i(79829),iW=i(84428),iB=class extends iU.Wi{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,iU.VK)(this,l,void 0),(0,iU.VK)(this,c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,ik.b)(e[0])})},this.onChainChanged=e=>{let t=(0,ij.A)(e),i=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let i=await t.enable(),r=(0,ik.b)(i[0]),n=await this.getChainId(),a=this.isChainUnsupported(n);return e&&n!==e&&(n=(await this.switchChain(e)).id,a=this.isChainUnsupported(n)),{account:r,chain:{id:n,unsupported:a}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new iD.vx(e);throw e}}async disconnect(){if(!(0,iU.S7)(this,c))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,ik.b)(t[0])}async getChainId(){let e=await this.getProvider();return(0,ij.A)(e.chainId)}async getProvider(){if(!(0,iU.S7)(this,c)){let e=(await Promise.all([i.e(6805),i.e(2806),i.e(7446)]).then(i.t.bind(i,92806,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,iU.OV)(this,l,new e(this.options));let t=(0,iU.S7)(this,l).walletExtension?.getChainId(),r=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],n=this.options.chainId||r?.id,a=this.options.jsonRpcUrl||r?.rpcUrls.default.http[0];(0,iU.OV)(this,c,(0,iU.S7)(this,l).makeWeb3Provider(a,n))}return(0,iU.S7)(this,c)}async getWalletClient({chainId:e}={}){let[t,i]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,iL.F)({account:i,chain:r,transport:(0,iz.I)(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider(),i=(0,iW.cK)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${i}`,network:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){let r=this.chains.find(t=>t.id===e);if(!r)throw new iM.v({chainId:e,connectorId:this.id});if(4902===n.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),r}catch(e){throw new iD.vx(e)}throw new iD.ch(n)}}async watchAsset({address:e,decimals:t=18,image:i,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:i,symbol:r}}})}};l=new WeakMap,c=new WeakMap;var iF=i(73049),iq="eip155",iH="requestedChains",iK="wallet_addEthereumChain",iG=class extends iU.Wi{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,iU.VK)(this,h),(0,iU.VK)(this,f),(0,iU.VK)(this,w),(0,iU.VK)(this,b),(0,iU.VK)(this,y),(0,iU.VK)(this,C),(0,iU.VK)(this,_),(0,iU.VK)(this,A),(0,iU.VK)(this,k),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,iU.VK)(this,u,void 0),(0,iU.VK)(this,d,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,ik.b)(e[0])})},this.onChainChanged=e=>{let t=Number(e),i=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:i}})},this.onDisconnect=()=>{(0,iU.jq)(this,C,E).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,iU.jq)(this,h,p).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let i=e;if(!i){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;i=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!i)throw Error("No chains found on connector.");let r=await this.getProvider();(0,iU.jq)(this,b,v).call(this);let n=(0,iU.jq)(this,w,m).call(this);if(r.session&&n&&await r.disconnect(),!r.session||n){let e=this.chains.filter(e=>e.id!==i).map(e=>e.id);this.emit("message",{type:"connecting"}),await r.connect({pairingTopic:t,optionalChains:[i,...e]}),(0,iU.jq)(this,C,E).call(this,this.chains.map(({id:e})=>e))}let a=await r.enable(),o=(0,ik.b)(a[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:o,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new iD.vx(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,iU.jq)(this,y,x).call(this),(0,iU.jq)(this,C,E).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,ik.b)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,iU.S7)(this,u)||await (0,iU.jq)(this,h,p).call(this),e&&await this.switchChain(e),(0,iU.S7)(this,u)}async getWalletClient({chainId:e}={}){let[t,i]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,iL.F)({account:i,chain:r,transport:(0,iz.I)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),i=(0,iU.jq)(this,w,m).call(this);if(!e)return!1;if(i&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new iD.ch(Error("chain not found on connector."));try{let i=await this.getProvider(),r=(0,iU.jq)(this,A,$).call(this),n=(0,iU.jq)(this,k,P).call(this);if(!r.includes(e)&&n.includes(iK)){await i.request({method:iK,params:[{chainId:(0,iW.cK)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let r=(0,iU.jq)(this,_,S).call(this);r.push(e),(0,iU.jq)(this,C,E).call(this,r)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,iW.cK)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new iD.vx(t);throw new iD.ch(t)}}};u=new WeakMap,d=new WeakMap,h=new WeakSet,p=async function(){return!(0,iU.S7)(this,d)&&"u">typeof window&&(0,iU.OV)(this,d,(0,iU.jq)(this,f,g).call(this)),(0,iU.S7)(this,d)},f=new WeakSet,g=async function(){let{EthereumProvider:e}=await Promise.all([i.e(3039),i.e(4116),i.e(7593)]).then(i.bind(i,57593)),t=this.chains.map(({id:e})=>e);if(t.length){let{projectId:i,showQrModal:r=!0,qrModalOptions:n,metadata:a,relayUrl:o}=this.options;(0,iU.OV)(this,u,await e.init({showQrModal:r,qrModalOptions:n,projectId:i,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:a,relayUrl:o}))}},w=new WeakSet,m=function(){if((0,iU.jq)(this,k,P).call(this).includes(iK)||!this.options.isNewChainsStale)return!1;let e=(0,iU.jq)(this,_,S).call(this),t=this.chains.map(({id:e})=>e),i=(0,iU.jq)(this,A,$).call(this);return(!i.length||!!i.some(e=>t.includes(e)))&&!t.every(t=>e.includes(t))},b=new WeakSet,v=function(){(0,iU.S7)(this,u)&&((0,iU.jq)(this,y,x).call(this),(0,iU.S7)(this,u).on("accountsChanged",this.onAccountsChanged),(0,iU.S7)(this,u).on("chainChanged",this.onChainChanged),(0,iU.S7)(this,u).on("disconnect",this.onDisconnect),(0,iU.S7)(this,u).on("session_delete",this.onDisconnect),(0,iU.S7)(this,u).on("display_uri",this.onDisplayUri),(0,iU.S7)(this,u).on("connect",this.onConnect))},y=new WeakSet,x=function(){(0,iU.S7)(this,u)&&((0,iU.S7)(this,u).removeListener("accountsChanged",this.onAccountsChanged),(0,iU.S7)(this,u).removeListener("chainChanged",this.onChainChanged),(0,iU.S7)(this,u).removeListener("disconnect",this.onDisconnect),(0,iU.S7)(this,u).removeListener("session_delete",this.onDisconnect),(0,iU.S7)(this,u).removeListener("display_uri",this.onDisplayUri),(0,iU.S7)(this,u).removeListener("connect",this.onConnect))},C=new WeakSet,E=function(e){this.storage?.setItem(iH,e)},_=new WeakSet,S=function(){return this.storage?.getItem(iH)??[]},A=new WeakSet,$=function(){if(!(0,iU.S7)(this,u))return[];let e=(0,iU.S7)(this,u).session?.namespaces;if(!e)return[];let t=(0,iF.bR)(e);return t[iq]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]},k=new WeakSet,P=function(){if(!(0,iU.S7)(this,u))return[];let e=(0,iU.S7)(this,u).session?.namespaces;if(!e)return[];let t=(0,iF.bR)(e);return t[iq]?.methods??[]};class iV extends iU.Wi{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},"u">typeof window&&(this.provider=new tn(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){let{address:t,chainId:i}=await this.provider.connect({chainId:e.chainId});return{account:t,chain:{id:i,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{let t=this.chains.find(t=>t.id===e);if(!t)throw new iD.ch(Error("chain not found on connector."));await this.provider.switchNetwork(e);let i=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:i}}),t}catch(e){if(e instanceof Error)throw new iD.ch(e);throw e}}async disconnect(){await this.provider.disconnect()}async getAccount(){let{address:e}=await this.provider.connect();return e}async getChainId(){let{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){let{address:e,chainId:t}=await this.provider.connect();return Promise.resolve((0,iL.F)({account:e,chain:{id:t},transport:(0,iz.I)(this.provider)}))}async isAuthorized(){let{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}let iZ=M.wE.getBlockchainApiUrl();function iY({projectId:e,chains:t,metadata:i,enableInjected:r,enableCoinbase:n,enableEIP6963:a,enableEmail:o,enableWalletConnect:s}){let{publicClient:l}=(0,O.te)(t,[function({projectId:e}){return function(t){if(!i_.includes(t.id))return null;let i=`${iZ}/v1/?chainId=${im}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),c=[];return!1!==s&&c.push(new iG({chains:t,options:{projectId:e,showQrModal:!1,metadata:i}})),!1!==r&&c.push(new i$.s({chains:t,options:{shimDisconnect:!0}})),!1!==a&&c.push(new iT({chains:t})),!1!==n&&c.push(new iB({chains:t,options:{appName:i?.name??"Unknown"}})),!0===o&&c.push(new iV({chains:t,options:{projectId:e}})),(0,iN.Z3)({autoConnect:!0,connectors:c,publicClient:l})}function iQ(e){!a&&(r=a=new iA({...e,_sdkVersion:`react-wagmi-${ib}`}));return a}},37295:(e,t,i)=>{"use strict";i.d(t,{u:()=>n});let r=new Map;function n({fn:e,id:t,shouldSplitBatch:i,wait:a=0,sort:o}){let s=async()=>{let t=c();l();let i=t.map(({args:e})=>e);0!==i.length&&e(i).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let i=0;i<t.length;i++){let{pendingPromise:r}=t[i];r.resolve?.([e[i],e])}}).catch(e=>{for(let i=0;i<t.length;i++){let{pendingPromise:r}=t[i];r.reject?.(e)}})},l=()=>r.delete(t),c=()=>r.get(t)||[],u=e=>r.set(t,[...c(),e]);return{flush:l,async schedule(e){let t={},r=new Promise((e,i)=>{t.resolve=e,t.reject=i});return(i?.([...c().map(({args:e})=>e),e])&&s(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(s,a)),r}}}},39051:(e,t,i)=>{let r=i(826),n=i(34155),a=i(25285),o=i(80918),s=i(74361),l=i(65386),c=i(1418),u=i(39294),d=i(78818),h=i(78999),p=i(17517),f=i(80570),g=i(40263);function w(e,t,i){let r,n,a=e.size,o=p.getEncodedBits(t,i);for(r=0;r<15;r++)n=(o>>r&1)==1,r<6?e.set(r,8,n,!0):r<8?e.set(r+1,8,n,!0):e.set(a-15+r,8,n,!0),r<8?e.set(8,a-r-1,n,!0):r<9?e.set(8,15-r-1+1,n,!0):e.set(8,15-r-1,n,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let i,p;if(void 0===e||""===e)throw Error("No input text");let m=n.M;return void 0!==t&&(m=n.from(t.errorCorrectionLevel,n.M),i=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&r.setToSJISFunction(t.toSJISFunc)),function(e,t,i,n){let p;if(Array.isArray(e))p=g.fromArray(e);else if("string"==typeof e){let r=t;if(!r){let t=g.rawSplit(e);r=h.getBestVersionForData(t,i)}p=g.fromString(e,r||40)}else throw Error("Invalid data");let m=h.getBestVersionForData(p,i);if(!m)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;let b=function(e,t,i){let n=new a;i.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)});let o=(r.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(o-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,i){let n,a,o=r.getSymbolTotalCodewords(t),s=o-u.getTotalCodewordsCount(t,i),l=u.getBlocksCount(t,i),c=o%l,h=l-c,p=Math.floor(o/l),f=Math.floor(s/l),g=f+1,w=p-f,m=new d(w),b=0,v=Array(l),y=Array(l),x=0,C=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:g;v[e]=C.slice(b,b+t),y[e]=m.encode(v[e]),b+=t,x=Math.max(x,t)}let E=new Uint8Array(o),_=0;for(n=0;n<x;n++)for(a=0;a<l;a++)n<v[a].length&&(E[_++]=v[a][n]);for(n=0;n<w;n++)for(a=0;a<l;a++)E[_++]=y[a][n];return E}(n,e,t)}(t,i,p),v=new o(r.getSymbolSize(t));!function(e,t){let i=e.size,r=l.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(i<=n+t))for(let r=-1;r<=7;r++)a+r<=-1||i<=a+r||(t>=0&&t<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===t||6===t)||t>=2&&t<=4&&r>=2&&r<=4?e.set(n+t,a+r,!0,!0):e.set(n+t,a+r,!1,!0))}}(v,t);let y=v.size;for(let e=8;e<y-8;e++){let t=e%2==0;v.set(e,6,t,!0),v.set(6,e,t,!0)}return!function(e,t){let i=s.getPositions(t);for(let t=0;t<i.length;t++){let r=i[t][0],n=i[t][1];for(let t=-2;t<=2;t++)for(let i=-2;i<=2;i++)-2===t||2===t||-2===i||2===i||0===t&&0===i?e.set(r+t,n+i,!0,!0):e.set(r+t,n+i,!1,!0)}}(v,t),w(v,i,0),t>=7&&function(e,t){let i,r,n,a=e.size,o=h.getEncodedBits(t);for(let t=0;t<18;t++)i=Math.floor(t/3),r=t%3+a-8-3,n=(o>>t&1)==1,e.set(i,r,n,!0),e.set(r,i,n,!0)}(v,t),!function(e,t){let i=e.size,r=-1,n=i-1,a=7,o=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!e.isReserved(n,s-i)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(n,s-i,r),-1==--a&&(o++,a=7)}if((n+=r)<0||i<=n){n-=r,r=-r;break}}}(v,b),isNaN(n)&&(n=c.getBestMask(v,w.bind(null,v,i))),c.applyMask(n,v),w(v,i,n),{modules:v,version:t,errorCorrectionLevel:i,maskPattern:n,segments:p}}(e,i,m,p)}},39294:(e,t,i)=>{let r=i(34155),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case r.L:return n[(e-1)*4+0];case r.M:return n[(e-1)*4+1];case r.Q:return n[(e-1)*4+2];case r.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case r.L:return a[(e-1)*4+0];case r.M:return a[(e-1)*4+1];case r.Q:return a[(e-1)*4+2];case r.H:return a[(e-1)*4+3];default:return}}},39495:(e,t,i)=>{let r=i(80570),n=i(826);function a(e){this.mode=r.KANJI,this.data=e}a.getBitsLength=function(e){return 13*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=n.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i=(i>>>8&255)*192+(255&i),e.put(i,13)}},e.exports=a},39606:(e,t,i)=>{"use strict";function r(e,t={}){let{fees:i=e.fees,formatters:n=e.formatters,serializers:a=e.serializers}=t;return{...e,fees:i,formatters:n,serializers:a}}i.d(t,{x:()=>r})},40263:(e,t,i)=>{let r=i(80570),n=i(9467),a=i(35565),o=i(21770),s=i(39495),l=i(54028),c=i(826),u=i(19995);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,i){let r,n=[];for(;null!==(r=e.exec(i));)n.push({data:r[0],index:r.index,mode:t,length:r[0].length});return n}function p(e){let t,i,n=h(l.NUMERIC,r.NUMERIC,e),a=h(l.ALPHANUMERIC,r.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,r.BYTE,e),i=h(l.KANJI,r.KANJI,e)):(t=h(l.BYTE_KANJI,r.BYTE,e),i=[]),n.concat(a,t,i).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case r.NUMERIC:return n.getBitsLength(e);case r.ALPHANUMERIC:return a.getBitsLength(e);case r.KANJI:return s.getBitsLength(e);case r.BYTE:return o.getBitsLength(e)}}function g(e,t){let i,l=r.getBestModeForData(e);if((i=r.from(t,l))!==r.BYTE&&i.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+r.toString(i)+".\n Suggested mode is: "+r.toString(l));switch(i===r.KANJI&&!c.isKanjiModeEnabled()&&(i=r.BYTE),i){case r.NUMERIC:return new n(e);case r.ALPHANUMERIC:return new a(e);case r.KANJI:return new s(e);case r.BYTE:return new o(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,i){let n=function(e,t){let i={},n={start:{}},a=["start"];for(let o=0;o<e.length;o++){let s=e[o],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+o+e;l.push(u),i[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<a.length;e++){let o=a[e];i[o]&&i[o].node.mode===c.mode?(n[o][u]=f(i[o].lastCount+c.length,c.mode)-f(i[o].lastCount,c.mode),i[o].lastCount+=c.length):(i[o]&&(i[o].lastCount=c.length),n[o][u]=f(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,t))}}a=l}for(let e=0;e<a.length;e++)n[a[e]].end=0;return{map:n,table:i}}(function(e){let t=[];for(let i=0;i<e.length;i++){let n=e[i];switch(n.mode){case r.NUMERIC:t.push([n,{data:n.data,mode:r.ALPHANUMERIC,length:n.length},{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.ALPHANUMERIC:t.push([n,{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.KANJI:t.push([n,{data:n.data,mode:r.BYTE,length:d(n.data)}]);break;case r.BYTE:t.push([{data:n.data,mode:r.BYTE,length:d(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),i),a=u.find_path(n.map,"start","end"),o=[];for(let e=1;e<a.length-1;e++)o.push(n.table[a[e]].node);return t.fromArray(o.reduce(function(e,t){let i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},42073:(e,t,i)=>{"use strict";i.d(t,{g:()=>o});var r=i(9471),n=i(84428),a=i(89529);async function o(e,{blockHash:t,blockNumber:i,blockTag:s,includeTransactions:l}={}){let c=l??!1,u=void 0!==i?(0,n.cK)(i):void 0,d=null;if(!(d=t?await e.request({method:"eth_getBlockByHash",params:[t,c]}):await e.request({method:"eth_getBlockByNumber",params:[u||(s??"latest"),c]})))throw new r.l({blockHash:t,blockNumber:i});return(e.chain?.formatters?.block?.format||a.$)(d)}},42330:(e,t,i)=>{"use strict";i.d(t,{iY:()=>l});var r=i(80044),n=i(89762),a=i(73672),o=i(15422),s=i(80339);function l({abi:e,args:t=[],name:i}){let c,u=(0,n.q)(i,{strict:!1}),d=e.filter(e=>u?"function"===e.type?(0,o._)(e)===i:"event"===e.type&&(0,a.c)(e)===i:"name"in e&&e.name===i);if(0!==d.length){if(1===d.length)return d[0];for(let e of d){if("inputs"in e){if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every((t,i)=>{let r="inputs"in e&&e.inputs[i];return!!r&&function e(t,i){let r=typeof t,n=i.type;switch(n){case"address":return(0,s.P)(t);case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:if("tuple"===n&&"components"in i)return Object.values(i.components).every((i,r)=>e(Object.values(t)[r],i));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===r||"bigint"===r;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===r||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...i,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,r)})){if(c&&"inputs"in c&&c.inputs){let i=function e(t,i,r){for(let n in t){let a=t[n],o=i[n];if("tuple"===a.type&&"tuple"===o.type&&"components"in a&&"components"in o)return e(a.components,o.components,r[n]);let l=[a.type,o.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,s.P)(r[n]))return l}}(e.inputs,c.inputs,t);if(i)throw new r.nM({abiItem:e,type:i[0]},{abiItem:c,type:i[1]})}c=e}}}return c||d[0]}}},43598:(e,t,i)=>{"use strict";i.d(t,{F:()=>D});var r=i(3680),n=i(69960),a=i(84428);async function o(e,{chain:t}){let{id:i,name:r,nativeCurrency:n,rpcUrls:s,blockExplorers:l}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,a.cK)(i),chainName:r,nativeCurrency:n,rpcUrls:s.default.http,blockExplorerUrls:l?Object.values(l).map(({url:e})=>e):void 0}]})}var s=i(24642),l=i(51011),c=i(6593),u=i(4879);function d({chain:e,currentChainId:t}){if(!e)throw new u.jF;if(t!==e.id)throw new u.EH({chain:e,currentChainId:t})}var h=i(4174),p=i(96002),f=i(31750),g=i(89649),w=i(58637),m=i(49586),b=i(97948),v=i(52546),y=i(45312);async function x(e,t){let{account:i=e.account,chain:r=e.chain,accessList:a,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S,...A}=t;if(!i)throw new c.T({docsPath:"/docs/actions/wallet/sendTransaction"});let $=(0,l.J)(i);try{let i;if((0,b.c)(t),null!==r&&(i=await (0,m.T)(e,n.T,"getChainId")({}),d({currentChainId:i,chain:r})),"local"===$.type){let t=await (0,m.T)(e,v.f,"prepareTransactionRequest")({account:$,accessList:a,chain:r,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S,...A});i||(i=await (0,m.T)(e,n.T,"getChainId")({}));let l=r?.serializers?.transaction,c=await $.signTransaction({...t,chainId:i},{serializer:l});return await (0,m.T)(e,y.L,"sendRawTransaction")({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=(l||w.Bv)({...(0,g.o)(A,{format:l}),accessList:a,data:o,from:$.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S});return await e.request({method:"eth_sendTransaction",params:[c]})}catch(e){throw function(e,{docsPath:t,...i}){let r,n=(r=(0,f.l)(e,i))instanceof h.RM?e:r;return new p.$s(n,{docsPath:t,...i})}(e,{...t,account:$,chain:t.chain||void 0})}}var C=i(96685);async function E(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(e=>(0,C.o)(e))}async function _(e){return await e.request({method:"wallet_getPermissions"})}async function S(e){return(await e.request({method:"eth_requestAccounts"})).map(e=>(0,C.b)(e))}async function A(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function $(e,{account:t=e.account,message:i}){if(!t)throw new c.T({docsPath:"/docs/actions/wallet/signMessage"});let r=(0,l.J)(t);if("local"===r.type)return r.signMessage({message:i});let n="string"==typeof i?(0,a.i3)(i):i.raw instanceof Uint8Array?(0,a.nj)(i.raw):i.raw;return e.request({method:"personal_sign",params:[n,r.address]})}async function k(e,t){let{account:i=e.account,chain:r=e.chain,...o}=t;if(!i)throw new c.T({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.J)(i);(0,b.c)({account:s,...t});let u=await (0,m.T)(e,n.T,"getChainId")({});null!==r&&d({currentChainId:u,chain:r});let h=r?.formatters||e.chain?.formatters,p=h?.transactionRequest?.format||w.Bv;return"local"===s.type?s.signTransaction({...o,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...p(o),chainId:(0,a.cK)(u),from:s.address}]})}var P=i(89762),I=i(91497),R=i(7241);async function T(e,{account:t=e.account,domain:i,message:r,primaryType:n,types:a}){if(!t)throw new c.T({docsPath:"/docs/actions/wallet/signTypedData"});let o=(0,l.J)(t),s={EIP712Domain:(0,R.H4)({domain:i}),...a};if((0,R.$$)({domain:i,message:r,primaryType:n,types:s}),"local"===o.type)return o.signTypedData({domain:i,primaryType:n,types:s,message:r});let u=(0,I.A)({domain:i??{},primaryType:n,types:s,message:r},(e,t)=>(0,P.q)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[o.address,u]})}async function O(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,a.cK)(t)}]})}async function N(e,t){return await e.request({method:"wallet_watchAsset",params:t})}var M=i(96565);async function j(e,{abi:t,address:i,args:r,dataSuffix:n,functionName:a,...o}){let s=(0,M.p)({abi:t,args:r,functionName:a});return await (0,m.T)(e,x,"sendTransaction")({data:`${s}${n?n.replace("0x",""):""}`,to:i,...o})}function U(e){return{addChain:t=>o(e,t),deployContract:t=>(function(e,{abi:t,args:i,bytecode:r,...n}){let a=(0,s.m)({abi:t,args:i,bytecode:r});return x(e,{...n,data:a})})(e,t),getAddresses:()=>E(e),getChainId:()=>(0,n.T)(e),getPermissions:()=>_(e),prepareTransactionRequest:t=>(0,v.f)(e,t),requestAddresses:()=>S(e),requestPermissions:t=>A(e,t),sendRawTransaction:t=>(0,y.L)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>$(e,t),signTransaction:t=>k(e,t),signTypedData:t=>T(e,t),switchChain:t=>O(e,t),watchAsset:t=>N(e,t),writeContract:t=>j(e,t)}}function D(e){let{key:t="wallet",name:i="Wallet Client",transport:n}=e;return(0,r.U)({...e,key:t,name:i,transport:e=>n({...e,retryCount:0}),type:"walletClient"}).extend(U)}},43748:(e,t,i)=>{"use strict";i.d(t,{b4:()=>n,uP:()=>a});var r=i(94747);let n={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function a(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,r.ME)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,r.ME)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?n[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return+(t.v%2n===0n)}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},44497:(e,t,i)=>{"use strict";i.d(t,{h:()=>d,k:()=>p});var r=i(80044),n=i(71386),a=i(80339),o=i(76429),s=i(89950),l=i(45696),c=i(81693),u=i(84428);function d(e,t){if(e.length!==t.length)throw new r.YE({expectedLength:e.length,givenLength:t.length});let i=h(function({params:e,values:t}){let i=[];for(let d=0;d<e.length;d++)i.push(function e({param:t,value:i}){let d=p(t.type);if(d){let[n,a]=d;return function(t,{length:i,param:n}){let a=null===i;if(!Array.isArray(t))throw new r.dm(t);if(!a&&t.length!==i)throw new r.Nc({expectedLength:i,givenLength:t.length,type:`${n.type}[${i}]`});let s=!1,l=[];for(let i=0;i<t.length;i++){let r=e({param:n,value:t[i]});r.dynamic&&(s=!0),l.push(r)}if(a||s){let e=h(l);if(a){let t=(0,u.cK)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,o.xW)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,o.xW)(l.map(({encoded:e})=>e))}}(i,{length:n,param:{...t,type:a}})}if("tuple"===t.type)return function(t,{param:i}){let r=!1,n=[];for(let a=0;a<i.components.length;a++){let o=i.components[a],s=Array.isArray(t)?a:o.name,l=e({param:o,value:t[s]});n.push(l),l.dynamic&&(r=!0)}return{dynamic:r,encoded:r?h(n):(0,o.xW)(n.map(({encoded:e})=>e))}}(i,{param:t});if("address"===t.type){var f,g=i;if(!(0,a.P)(g))throw new n.M({address:g});return{dynamic:!1,encoded:(0,s.db)(g.toLowerCase())}}if("bool"===t.type){return f=i,{dynamic:!1,encoded:(0,s.db)((0,u.$P)(f))}}if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.cK)(e,{size:32,signed:t})}}(i,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,i]=t.type.split("bytes"),n=(0,l.E)(e);if(!i){let t=e;return n%32!=0&&(t=(0,s.db)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,o.xW)([(0,s.db)((0,u.cK)(n,{size:32})),t])}}if(n!==parseInt(i))throw new r.gH({expectedSize:parseInt(i),value:e});return{dynamic:!1,encoded:(0,s.db)(e,{dir:"right"})}}(i,{param:t});if("string"===t.type){var w=i;let e=(0,u.i3)(w),t=Math.ceil((0,l.E)(e)/32),r=[];for(let i=0;i<t;i++)r.push((0,s.db)((0,c.di)(e,32*i,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,o.xW)([(0,s.db)((0,u.cK)((0,l.E)(e),{size:32})),...r])}}throw new r.nK(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return i}({params:e,values:t}));return 0===i.length?"0x":i}function h(e){let t=0;for(let i=0;i<e.length;i++){let{dynamic:r,encoded:n}=e[i];r?t+=32:t+=(0,l.E)(n)}let i=[],r=[],n=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(i.push((0,u.cK)(t+n,{size:32})),r.push(s),n+=(0,l.E)(s)):i.push(s)}return(0,o.xW)([...i,...r])}function p(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},44792:(e,t,i)=>{let r=i(55290);function n(e,t){let i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function a(e,t,i){let r=e+t;return void 0!==i&&(r+=" "+i),r}t.render=function(e,t,i){let o=r.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*o.margin,u=o.color.light.a?"<path "+n(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+n(o.color.dark,"stroke")+' d="'+function(e,t,i){let r="",n=0,o=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||o||(o=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(r+=o?a("M",c+i,.5+u+i):a("m",n,0),n=0,o=!1),c+1<t&&e[l+1]||(r+=a("h",s),s=0)):n++}return r}(l,s,o.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+('viewBox="0 0 '+c+" ")+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof i&&i(null,h),h}},45312:(e,t,i)=>{"use strict";async function r(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}i.d(t,{L:()=>r})},46269:(e,t,i)=>{"use strict";async function r(e){return new Promise(t=>setTimeout(t,e))}i.d(t,{u:()=>r})},47011:(e,t,i)=>{"use strict";var r=i(92715),n=i(1163);t.On=32,t.cS=64;var a=function(){function e(){this.digestLength=t.On,this.blockSize=t.cS,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=0x6a09e667,this._state[1]=0xbb67ae85,this._state[2]=0x3c6ef372,this._state[3]=0xa54ff53a,this._state[4]=0x510e527f,this._state[5]=0x9b05688c,this._state[6]=0x1f83d9ab,this._state[7]=0x5be0cd19},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var i=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[i++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(i=s(this._temp,this._state,e,i,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[i++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,i=this._bufferLength,n=t%64<56?64:128;this._buffer[i]=128;for(var a=i+1;a<n-8;a++)this._buffer[a]=0;r.writeUint32BE(t/0x20000000|0,this._buffer,n-8),r.writeUint32BE(t<<3,this._buffer,n-4),s(this._temp,this._state,this._buffer,0,n),this._finished=!0}for(var a=0;a<this.digestLength/4;a++)r.writeUint32BE(this._state[a],e,4*a);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.state),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.aD=a;var o=new Int32Array([0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2]);function s(e,t,i,n,a){for(;a>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],d=t[4],h=t[5],p=t[6],f=t[7],g=0;g<16;g++){var w=n+4*g;e[g]=r.readUint32BE(i,w)}for(var g=16;g<64;g++){var m=e[g-2],b=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,v=((m=e[g-15])>>>7|m<<25)^(m>>>18|m<<14)^m>>>3;e[g]=(b+e[g-7]|0)+(v+e[g-16]|0)}for(var g=0;g<64;g++){var b=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&p)|0)+(f+(o[g]+e[g]|0)|0)|0,v=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;f=p,p=h,h=d,d=u+b|0,u=c,c=l,l=s,s=b+v|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=p,t[7]+=f,n+=64,a-=64}return n}t.tW=function(e){var t=new a;t.update(e);var i=t.digest();return t.clean(),i}},47131:(e,t,i)=>{"use strict";var r=i(1861),n=i(47927),a=i(1163),o=i(92715),s=i(26419);t.J4=32,t.PX=12,t.iW=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.PX,this.tagLength=t.iW,e.length!==t.J4)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,i,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var o,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);r.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(n){if(n.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");o=n}else o=new Uint8Array(c);return r.streamXOR(this._key,s,t,o,4),this._authenticate(o.subarray(o.length-this.tagLength,o.length),l,o.subarray(0,o.length-this.tagLength),i),a.wipe(s),o},e.prototype.open=function(e,t,i,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var o,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);r.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),i),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var d=t.length-this.tagLength;if(n){if(n.length!==d)throw Error("ChaCha20Poly1305: incorrect destination length");o=n}else o=new Uint8Array(d);return r.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),o,4),a.wipe(l),o},e.prototype.clean=function(){return a.wipe(this._key),this},e.prototype._authenticate=function(e,t,i,r){var s=new n.Poly1305(t);r&&(s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16))),s.update(i),i.length%16>0&&s.update(l.subarray(i.length%16));var c=new Uint8Array(8);r&&o.writeUint64LE(r.length,c),s.update(c),o.writeUint64LE(i.length,c),s.update(c);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),a.wipe(u),a.wipe(c)},e}();t.g6=c},47163:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(71781),n=i(26419),a=i(1163),o=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var i=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(i).clean():i.set(t);for(var n=0;n<i.length;n++)i[n]^=54;this._inner.update(i);for(var n=0;n<i.length;n++)i[n]^=106;this._outer.update(i),r.isSerializableHash(this._inner)&&r.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),a.wipe(i)}return e.prototype.reset=function(){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){r.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),r.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!r.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!r.isSerializableHash(this._inner)||!r.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!r.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=o,t.hmac=function(e,t,i){var r=new o(e,t);r.update(i);var n=r.digest();return r.clean(),n},t.equal=n.equal},47927:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(26419),n=i(1163);t.DIGEST_LENGTH=16;var a=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var i=e[0]|e[1]<<8;this._r[0]=8191&i;var r=e[2]|e[3]<<8;this._r[1]=(i>>>13|r<<3)&8191;var n=e[4]|e[5]<<8;this._r[2]=(r>>>10|n<<6)&7939;var a=e[6]|e[7]<<8;this._r[3]=(n>>>7|a<<9)&8191;var o=e[8]|e[9]<<8;this._r[4]=(a>>>4|o<<12)&255,this._r[5]=o>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(o>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,i){for(var r=2048*!this._fin,n=this._h[0],a=this._h[1],o=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],p=this._h[9],f=this._r[0],g=this._r[1],w=this._r[2],m=this._r[3],b=this._r[4],v=this._r[5],y=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];i>=16;){var _,S=e[t+0]|e[t+1]<<8;n+=8191&S;var A=e[t+2]|e[t+3]<<8;a+=(S>>>13|A<<3)&8191;var $=e[t+4]|e[t+5]<<8;o+=(A>>>10|$<<6)&8191;var k=e[t+6]|e[t+7]<<8;s+=($>>>7|k<<9)&8191;var P=e[t+8]|e[t+9]<<8;l+=(k>>>4|P<<12)&8191,c+=P>>>1&8191;var I=e[t+10]|e[t+11]<<8;u+=(P>>>14|I<<2)&8191;var R=e[t+12]|e[t+13]<<8;d+=(I>>>11|R<<5)&8191;var T=e[t+14]|e[t+15]<<8;h+=(R>>>8|T<<8)&8191,p+=T>>>5|r;var O=0;O=(_=0+n*f+5*E*a+5*C*o+5*x*s+5*y*l)>>>13,_&=8191,_+=5*v*c,_+=5*b*u,_+=5*m*d,_+=5*w*h,_+=5*g*p,O+=_>>>13,_&=8191;var N=O;N+=n*g,N+=a*f,N+=5*E*o,N+=5*C*s,N+=5*x*l,O=N>>>13,N&=8191,N+=5*y*c,N+=5*v*u,N+=5*b*d,N+=5*m*h,N+=5*w*p,O+=N>>>13,N&=8191;var M=O;M+=n*w,M+=a*g,M+=o*f,M+=5*E*s,M+=5*C*l,O=M>>>13,M&=8191,M+=5*x*c,M+=5*y*u,M+=5*v*d,M+=5*b*h,M+=5*m*p,O+=M>>>13,M&=8191;var j=O;j+=n*m,j+=a*w,j+=o*g,j+=s*f,j+=5*E*l,O=j>>>13,j&=8191,j+=5*C*c,j+=5*x*u,j+=5*y*d,j+=5*v*h,j+=5*b*p,O+=j>>>13,j&=8191;var U=O;U+=n*b,U+=a*m,U+=o*w,U+=s*g,U+=l*f,O=U>>>13,U&=8191,U+=5*E*c,U+=5*C*u,U+=5*x*d,U+=5*y*h,U+=5*v*p,O+=U>>>13,U&=8191;var D=O;D+=n*v,D+=a*b,D+=o*m,D+=s*w,D+=l*g,O=D>>>13,D&=8191,D+=c*f,D+=5*E*u,D+=5*C*d,D+=5*x*h,D+=5*y*p,O+=D>>>13,D&=8191;var L=O;L+=n*y,L+=a*v,L+=o*b,L+=s*m,L+=l*w,O=L>>>13,L&=8191,L+=c*g,L+=u*f,L+=5*E*d,L+=5*C*h,L+=5*x*p,O+=L>>>13,L&=8191;var z=O;z+=n*x,z+=a*y,z+=o*v,z+=s*b,z+=l*m,O=z>>>13,z&=8191,z+=c*w,z+=u*g,z+=d*f,z+=5*E*h,z+=5*C*p,O+=z>>>13,z&=8191;var W=O;W+=n*C,W+=a*x,W+=o*y,W+=s*v,W+=l*b,O=W>>>13,W&=8191,W+=c*m,W+=u*w,W+=d*g,W+=h*f,W+=5*E*p,O+=W>>>13,W&=8191;var B=O;B+=n*E,B+=a*C,B+=o*x,B+=s*y,B+=l*v,O=B>>>13,B&=8191,B+=c*b,B+=u*m,B+=d*w,B+=h*g,B+=p*f,O+=B>>>13,B&=8191,_=8191&(O=(O=(O<<2)+O|0)+_|0),O>>>=13,N+=O,n=_,a=N,o=M,s=j,l=U,c=D,u=L,d=z,h=W,p=B,t+=16,i-=16}this._h[0]=n,this._h[1]=a,this._h[2]=o,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=p},e.prototype.finish=function(e,t){void 0===t&&(t=0);var i,r,n,a,o=new Uint16Array(10);if(this._leftover){for(a=this._leftover,this._buffer[a++]=1;a<16;a++)this._buffer[a]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(i=this._h[1]>>>13,this._h[1]&=8191,a=2;a<10;a++)this._h[a]+=i,i=this._h[a]>>>13,this._h[a]&=8191;for(this._h[0]+=5*i,i=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=i,i=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=i,o[0]=this._h[0]+5,i=o[0]>>>13,o[0]&=8191,a=1;a<10;a++)o[a]=this._h[a]+i,i=o[a]>>>13,o[a]&=8191;for(o[9]-=8192,r=(1^i)-1,a=0;a<10;a++)o[a]&=r;for(a=0,r=~r;a<10;a++)this._h[a]=this._h[a]&r|o[a];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,n=this._h[0]+this._pad[0],this._h[0]=65535&n,a=1;a<8;a++)n=(this._h[a]+this._pad[a]|0)+(n>>>16)|0,this._h[a]=65535&n;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,i=0,r=e.length;if(this._leftover){(t=16-this._leftover)>r&&(t=r);for(var n=0;n<t;n++)this._buffer[this._leftover+n]=e[i+n];if(r-=t,i+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(r>=16&&(t=r-r%16,this._blocks(e,i,t),i+=t,r-=t),r){for(var n=0;n<r;n++)this._buffer[this._leftover+n]=e[i+n];this._leftover+=r}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=a,t.oneTimeAuth=function(e,t){var i=new a(e);i.update(t);var r=i.digest();return i.clean(),r},t.equal=function(e,i){return e.length===t.DIGEST_LENGTH&&i.length===t.DIGEST_LENGTH&&r.equal(e,i)}},48803:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let i=e.indexOf(t);return -1===i?[e]:[e.slice(0,i),e.slice(i+t.length)]}},49235:(e,t,i)=>{"use strict";function r(e,t){let i=e.toString(),r=i.startsWith("-");r&&(i=i.slice(1));let[n,a]=[(i=i.padStart(t,"0")).slice(0,i.length-t),i.slice(i.length-t)];return a=a.replace(/(0+)$/,""),`${r?"-":""}${n||"0"}${a?`.${a}`:""}`}i.d(t,{J:()=>r})},49586:(e,t,i)=>{"use strict";function r(e,t,i){return r=>e[t.name||i]?.(r)??t(e,r)}i.d(t,{T:()=>r})},50474:(e,t,i)=>{"use strict";i.d(t,{RR:()=>s,pw:()=>o,sM:()=>a});var r=i(22160),n=i(23755);class a extends n.C{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class o extends n.C{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends n.C{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,r.Q)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},51011:(e,t,i)=>{"use strict";function r(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}i.d(t,{J:()=>r})},51578:(e,t,i)=>{"use strict";i.d(t,{T:()=>b});var r=i(51011),n=i(18587),a=i(23755),o=i(4879),s=i(56187),l=i(73320),c=i(96565),u=i(75411),d=i(84428),h=i(4174),p=i(31750),f=i(89649),g=i(58637),w=i(37295),m=i(97948);async function b(e,t){let{account:n=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:w,data:b,gas:y,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:S,value:A,...$}=t,k=n?(0,r.J)(n):void 0;try{(0,m.c)(t);let i=(c?(0,d.cK)(c):void 0)||u,r=e.chain?.formatters?.transactionRequest?.format,n=(r||g.Bv)({...(0,f.o)($,{format:r}),from:k?.address,accessList:w,data:b,gas:y,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:S,value:A});if(l&&function({request:e}){let{data:t,to:i,...r}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!i&&!(Object.values(r).filter(e=>void 0!==e).length>0)}({request:n}))try{return await v(e,{...n,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof o.YE)&&!(e instanceof o.rj))throw e}let a=await e.request({method:"eth_call",params:i?[n,i]:[n]});if("0x"===a)return{data:void 0};return{data:a}}catch(l){let r=function(e){if(!(e instanceof a.C))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:n,offchainLookupSignature:o}=await i.e(5789).then(i.bind(i,95789));if(r?.slice(0,10)===o&&S)return{data:await n(e,{data:r,to:S})};throw function(e,{docsPath:t,...i}){let r,n=(r=(0,p.l)(e,i))instanceof h.RM?e:r;return new s.zX(n,{docsPath:t,...i})}(l,{...t,account:k,chain:e.chain})}}async function v(e,t){let{batchSize:i=1024,wait:r=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:a,blockTag:h="latest",data:p,multicallAddress:f,to:g}=t,m=f;if(!m){if(!e.chain)throw new o.YE;m=(0,u.M)({blockNumber:a,chain:e.chain,contract:"multicall3"})}let b=(a?(0,d.cK)(a):void 0)||h,{schedule:v}=(0,w.u)({id:`${e.uid}.${b}`,wait:r,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*i,fn:async t=>{let i=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),r=(0,c.p)({abi:n.v2,args:[i],functionName:"aggregate3"}),a=await e.request({method:"eth_call",params:[{data:r,to:m},b]});return(0,l.e)({abi:n.v2,args:[i],functionName:"aggregate3",data:a||"0x"})}}),[{returnData:y,success:x}]=await v({data:p,to:g});if(!x)throw new s.$S({data:y});return"0x"===y?{data:void 0}:{data:y}}},52546:(e,t,i)=>{"use strict";i.d(t,{f:()=>p});var r=i(51011),n=i(10155),a=i(73062),o=i(42073),s=i(80771),l=i(6593),c=i(50474),u=i(49586),d=i(97948),h=i(96002);async function p(e,t){let{account:i=e.account,chain:p,gas:f,nonce:g,type:w}=t;if(!i)throw new l.T;let m=(0,r.J)(i),b=await (0,u.T)(e,o.g,"getBlock")({blockTag:"latest"}),v={...t,from:m.address};if(void 0===g&&(v.nonce=await (0,u.T)(e,s.y,"getTransactionCount")({address:m.address,blockTag:"pending"})),void 0===w)try{v.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new h.Vg({transaction:e})}(v)}catch{v.type="bigint"==typeof b.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===v.type){let{maxFeePerGas:i,maxPriorityFeePerGas:r}=await (0,n.O)(e,{block:b,chain:p,request:v});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<r)throw new c.RR({maxPriorityFeePerGas:r});v.maxPriorityFeePerGas=r,v.maxFeePerGas=i}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.pw;let{gasPrice:i}=await (0,n.O)(e,{block:b,chain:p,request:v,type:"legacy"});v.gasPrice=i}return void 0===f&&(v.gas=await (0,u.T)(e,a.Q,"estimateGas")({...v,account:{address:m.address,type:"json-rpc"}})),(0,d.c)(v),v}},52856:(e,t,i)=>{"use strict";i.d(t,{W:()=>c});var r=i(95889),n=i(80044),a=i(81693),o=i(15422),s=i(6809),l=i(24029);function c({abi:e,data:t}){let i=(0,a.di)(t,0,4);if("0x"===i)throw new n.O;let u=[...e||[],r.Mc,r.J9].find(e=>"error"===e.type&&i===(0,o._)((0,l.B)(e)));if(!u)throw new n.Wq(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.n)(u.inputs,(0,a.di)(t,4)):void 0,errorName:u.name}}},53418:(e,t,i)=>{"use strict";i.d(t,{r:()=>o});var r=i(27866),n=i(11194),a=i(8532);r.extend(a),r.extend(n),r.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let o={getYear:(e=new Date().toISOString())=>r(e).year(),getRelativeDateFromNow:e=>r(e).fromNow(!0)}},54028:(e,t)=>{let i="[0-9]+",r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(r,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(i,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+r+"$"),o=RegExp("^"+i+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return o.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},54057:e=>{"use strict";var t="%[a-f0-9]{2}",i=RegExp("("+t+")|([^%]+?)","gi"),r=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var a=function(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(i)||[],r=1;r<t.length;r++)t=(e=(function e(t,i){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;i=i||1;var r=t.slice(0,i),n=t.slice(i);return Array.prototype.concat.call([],e(r),e(n))})(t,r).join("")).match(i)||[];return e}}(n[0]);a!==n[0]&&(t[n[0]]=a)}n=r.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var l=o[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},54371:(e,t,i)=>{"use strict";let r,n,a,o,s,l;function c(){}i.d(t,{qZ:()=>ep,Z3:()=>eu,F7:()=>eg,WH:()=>ev,uP:()=>eb});let u="u"<typeof window||"Deno"in window;function d(){}function h(e,t,i){return E(e)?"function"==typeof t?{...i,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function p(e,t,i){return E(e)?"function"==typeof t?{...i,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function f(e,t,i){return E(e)?[{...t,queryKey:e},i]:[e||{},t]}function g(e,t){let{type:i="all",exact:r,fetchStatus:n,predicate:a,queryKey:o,stale:s}=e;if(E(o))if(r){if(t.queryHash!==m(o,t.options))return!1}else{var l;if(l=t.queryKey,!v(l,o))return!1}if("all"!==i){let e=t.isActive();if("active"===i&&!e||"inactive"===i&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===n||n===t.state.fetchStatus)&&(!a||!!a(t))}function w(e,t){let{exact:i,fetching:r,predicate:n,mutationKey:a}=e;if(E(a)){if(!t.options.mutationKey)return!1;if(i){if(b(t.options.mutationKey)!==b(a))return!1}else{var o;if(o=t.options.mutationKey,!v(o,a))return!1}}return("boolean"!=typeof r||"loading"===t.state.status===r)&&(!n||!!n(t))}function m(e,t){return((null==t?void 0:t.queryKeyHashFn)||b)(e)}function b(e){return JSON.stringify(e,(e,t)=>x(t)?Object.keys(t).sort().reduce((e,i)=>(e[i]=t[i],e),{}):t)}function v(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(i=>!v(e[i],t[i]))}function y(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function x(e){if(!C(e))return!1;let t=e.constructor;if(void 0===t)return!0;let i=t.prototype;return!!C(i)&&!!i.hasOwnProperty("isPrototypeOf")}function C(e){return"[object Object]"===Object.prototype.toString.call(e)}function E(e){return Array.isArray(e)}function _(e){return new Promise(t=>{setTimeout(t,e)})}function S(e){_(0).then(e)}let A=console,$=(r=[],n=0,a=e=>{e()},o=e=>{e()},s=e=>{n?r.push(e):S(()=>{a(e)})},l=()=>{let e=r;r=[],e.length&&S(()=>{o(()=>{e.forEach(e=>{a(e)})})})},{batch:e=>{let t;n++;try{t=e()}finally{--n||l()}return t},batchCalls:e=>(...t)=>{s(()=>{e(...t)})},schedule:s,setNotifyFunction:e=>{a=e},setBatchNotifyFunction:e=>{o=e}});class k{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}class P extends k{constructor(){super(),this.setup=e=>{if(!u&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"u"<typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let I=new P,R=["online","offline"];class T extends k{constructor(){super(),this.setup=e=>{if(!u&&window.addEventListener){let t=()=>e();return R.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{R.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"u"<typeof navigator||void 0===navigator.onLine||navigator.onLine}}let O=new T;function N(e){return Math.min(1e3*2**e,3e4)}function M(e){return(null!=e?e:"online")!=="online"||O.isOnline()}class j{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function U(e){return e instanceof j}function D(e){let t,i,r,n=!1,a=0,o=!1,s=new Promise((e,t)=>{i=e,r=t}),l=()=>!I.isFocused()||"always"!==e.networkMode&&!O.isOnline(),c=r=>{o||(o=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),i(r))},u=i=>{o||(o=!0,null==e.onError||e.onError(i),null==t||t(),r(i))},d=()=>new Promise(i=>{t=e=>{let t=o||!l();return t&&i(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,o||null==e.onContinue||e.onContinue()}),h=()=>{let t;if(!o){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(c).catch(t=>{var i,r;if(o)return;let s=null!=(i=e.retry)?i:3,c=null!=(r=e.retryDelay)?r:N,p="function"==typeof c?c(a,t):c,f=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,t);n||!f?u(t):(a++,null==e.onFail||e.onFail(a,t),_(p).then(()=>{if(l())return d()}).then(()=>{n?u(t):h()}))})}};return M(e.networkMode)?h():d().then(h),{promise:s,cancel:t=>{o||(u(new j(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?s:Promise.resolve(),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1}}}class L{destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"==typeof(e=this.cacheTime)&&e>=0&&e!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:u?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class z extends L{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||A,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,i=void 0!==t,r=i?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:i?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){var i,r,n;let a=(i=this.state.data,r=e,null!=(n=this.options).isDataEqual&&n.isDataEqual(i,r)?i:"function"==typeof n.structuralSharing?n.structuralSharing(i,r):!1!==n.structuralSharing?function e(t,i,r=0){if(t===i)return t;if(r>500)return i;let n=y(t)&&y(i);if(n||x(t)&&x(i)){let a=n?t.length:Object.keys(t).length,o=n?i:Object.keys(i),s=o.length,l=n?[]:{},c=0;for(let a=0;a<s;a++){let s=n?a:o[a];l[s]=e(t[s],i[s],r+1),l[s]===t[s]&&c++}return a===s&&c===a?t:l}return i}(i,r):r);return this.dispatch({data:a,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),a}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let i=this.promise;return null==(t=this.retryer)||t.cancel(e),i?i.then(d).catch(d):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(e||0)-Date.now(),0)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var i,r,n,a;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let o=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(s);let c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};l(u),null==(i=this.options.behavior)||i.onFetch(u),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(r=u.fetchOptions)?void 0:r.meta))&&this.dispatch({type:"fetch",meta:null==(a=u.fetchOptions)?void 0:a.meta});let d=e=>{if(U(e)&&e.silent||this.dispatch({type:"error",error:e}),!U(e)){var t,i,r,n;null==(t=(i=this.cache.config).onError)||t.call(i,e,this),null==(r=(n=this.cache.config).onSettled)||r.call(n,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=D({fn:u.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:e=>{var t,i,r,n;void 0===e?d(Error(this.queryHash+" data is undefined")):(this.setData(e),null==(t=(i=this.cache.config).onSuccess)||t.call(i,e,this),null==(r=(n=this.cache.config).onSettled)||r.call(n,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1)},onError:d,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){let t=t=>{var i,r;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=e.meta)?i:null,fetchStatus:M(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(r=e.dataUpdatedAt)?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=e.error;if(U(n)&&n.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}};this.state=t(this.state),$.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class W extends k{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,i){var r;let n=t.queryKey,a=null!=(r=t.queryHash)?r:m(n,t),o=this.get(a);return o||(o=new z({cache:this,logger:e.getLogger(),queryKey:n,queryHash:a,options:e.defaultQueryOptions(t),state:i,defaultOptions:e.getQueryDefaults(n)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){$.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[i]=f(e,t);return void 0===i.exact&&(i.exact=!0),this.queries.find(e=>g(i,e))}findAll(e,t){let[i]=f(e,t);return Object.keys(i).length>0?this.queries.filter(e=>g(i,e)):this.queries}notify(e){$.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){$.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){$.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class B extends L{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||A,this.observers=[],this.state=e.state||F(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,i,r,n,a,o,s,l,c,u,d,h,p,f,g,w,m,b,v;let y=()=>{var e;return this.retryer=D({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},x="loading"===this.state.status;try{if(!x){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(d=this.options).onMutate)?void 0:u.call(d,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let h=await y();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,h,this.state.variables,this.state.context,this)),await (null==(i=(r=this.options).onSuccess)?void 0:i.call(r,h,this.state.variables,this.state.context)),await (null==(n=(a=this.mutationCache.config).onSettled)?void 0:n.call(a,h,null,this.state.variables,this.state.context,this)),await (null==(o=(s=this.options).onSettled)?void 0:o.call(s,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(e){try{throw await (null==(h=(p=this.mutationCache.config).onError)?void 0:h.call(p,e,this.state.variables,this.state.context,this)),await (null==(f=(g=this.options).onError)?void 0:f.call(g,e,this.state.variables,this.state.context)),await (null==(w=(m=this.mutationCache.config).onSettled)?void 0:w.call(m,void 0,e,this.state.variables,this.state.context,this)),await (null==(b=(v=this.options).onSettled)?void 0:b.call(v,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){let t=t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!M(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}};this.state=t(this.state),$.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function F(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class q extends k{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,i){let r=new B({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:i,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(r),r}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){$.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>w(e,t))}findAll(e){return this.mutations.filter(t=>w(e,t))}notify(e){$.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return $.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(d)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function H(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class K{constructor(e={}){this.queryCache=e.queryCache||new W,this.mutationCache=e.mutationCache||new q,this.logger=e.logger||A,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=I.subscribe(()=>{I.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=O.subscribe(()=>{O.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[i]=f(e,t);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var i;return null==(i=this.queryCache.find(e,t))?void 0:i.state.data}ensureQueryData(e,t,i){let r=h(e,t,i),n=this.getQueryData(r.queryKey);return n?Promise.resolve(n):this.fetchQuery(r)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,i){let r=this.queryCache.find(e),n=null==r?void 0:r.state.data,a="function"==typeof t?t(n):t;if(void 0===a)return;let o=h(e),s=this.defaultQueryOptions(o);return this.queryCache.build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,t,i){return $.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,i)]))}getQueryState(e,t){var i;return null==(i=this.queryCache.find(e,t))?void 0:i.state}removeQueries(e,t){let[i]=f(e,t),r=this.queryCache;$.batch(()=>{r.findAll(i).forEach(e=>{r.remove(e)})})}resetQueries(e,t,i){let[r,n]=f(e,t,i),a=this.queryCache,o={type:"active",...r};return $.batch(()=>(a.findAll(r).forEach(e=>{e.reset()}),this.refetchQueries(o,n)))}cancelQueries(e,t,i){let[r,n={}]=f(e,t,i);return void 0===n.revert&&(n.revert=!0),Promise.all($.batch(()=>this.queryCache.findAll(r).map(e=>e.cancel(n)))).then(d).catch(d)}invalidateQueries(e,t,i){let[r,n]=f(e,t,i);return $.batch(()=>{var e,t;if(this.queryCache.findAll(r).forEach(e=>{e.invalidate()}),"none"===r.refetchType)return Promise.resolve();let i={...r,type:null!=(e=null!=(t=r.refetchType)?t:r.type)?e:"active"};return this.refetchQueries(i,n)})}refetchQueries(e,t,i){let[r,n]=f(e,t,i),a=Promise.all($.batch(()=>this.queryCache.findAll(r).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...n,cancelRefetch:null==(t=null==n?void 0:n.cancelRefetch)||t,meta:{refetchPage:r.refetchPage}})}))).then(d);return null!=n&&n.throwOnError||(a=a.catch(d)),a}fetchQuery(e,t,i){let r=h(e,t,i),n=this.defaultQueryOptions(r);void 0===n.retry&&(n.retry=!1);let a=this.queryCache.build(this,n);return a.isStaleByTime(n.staleTime)?a.fetch(n):Promise.resolve(a.state.data)}prefetchQuery(e,t,i){return this.fetchQuery(e,t,i).then(d).catch(d)}fetchInfiniteQuery(e,t,i){let r=h(e,t,i);return r.behavior={onFetch:e=>{e.fetchFn=()=>{var t,i,r,n,a,o,s,l;let c,u=null==(t=e.fetchOptions)||null==(i=t.meta)?void 0:i.refetchPage,d=null==(r=e.fetchOptions)||null==(n=r.meta)?void 0:n.fetchMore,h=null==d?void 0:d.pageParam,p=(null==d?void 0:d.direction)==="forward",f=(null==d?void 0:d.direction)==="backward",g=(null==(a=e.state.data)?void 0:a.pages)||[],w=(null==(o=e.state.data)?void 0:o.pageParams)||[],m=w,b=!1,v=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),y=(e,t,i,r)=>(m=r?[t,...m]:[...m,t],r?[i,...e]:[...e,i]),x=(t,i,r,n)=>{if(b)return Promise.reject("Cancelled");if(void 0===r&&!i&&t.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:r,meta:e.options.meta};return Object.defineProperty(a,"signal",{enumerable:!0,get:()=>{var t,i;return null!=(t=e.signal)&&t.aborted?b=!0:null==(i=e.signal)||i.addEventListener("abort",()=>{b=!0}),e.signal}}),Promise.resolve(v(a)).then(e=>y(t,r,e,n))};if(g.length)if(p){let t=void 0!==h,i=t?h:H(e.options,g);c=x(g,t,i)}else if(f){let t=void 0!==h,i=t?h:(s=e.options,l=g,null==s.getPreviousPageParam?void 0:s.getPreviousPageParam(l[0],l));c=x(g,t,i,!0)}else{m=[];let t=void 0===e.options.getNextPageParam;c=!u||!g[0]||u(g[0],0,g)?x([],t,w[0]):Promise.resolve(y([],w[0],g[0]));for(let i=1;i<g.length;i++)c=c.then(r=>{if(!u||!g[i]||u(g[i],i,g)){let n=t?w[i]:H(e.options,r);return x(r,t,n)}return Promise.resolve(y(r,w[i],g[i]))})}else c=x([]);return c.then(e=>({pages:e,pageParams:m}))}}},this.fetchQuery(r)}prefetchInfiniteQuery(e,t,i){return this.fetchInfiniteQuery(e,t,i).then(d).catch(d)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let i=this.queryDefaults.find(t=>b(e)===b(t.queryKey));i?i.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>v(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let i=this.mutationDefaults.find(t=>b(e)===b(t.mutationKey));i?i.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>v(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=m(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function G(e){return e.state.isPaused}function V(e){return"success"===e.state.status}let Z=["added","removed","updated"];function Y(e){return Z.includes(e)}async function Q({queryClient:e,persister:t,maxAge:i=864e5,buster:r="",hydrateOptions:n}){try{let a=await t.restoreClient();if(a)if(a.timestamp){let o=Date.now()-a.timestamp>i,s=a.buster!==r;o||s?t.removeClient():function(e,t,i){if("object"!=typeof t||null===t)return;let r=e.getMutationCache(),n=e.getQueryCache(),a=t.mutations||[],o=t.queries||[];a.forEach(t=>{var n;r.build(e,{...null==i||null==(n=i.defaultOptions)?void 0:n.mutations,mutationKey:t.mutationKey},t.state)}),o.forEach(({queryKey:t,state:r,queryHash:a})=>{var o;let s=n.get(a);if(s){if(s.state.dataUpdatedAt<r.dataUpdatedAt){let{fetchStatus:e,...t}=r;s.setState(t)}return}n.build(e,{...null==i||null==(o=i.defaultOptions)?void 0:o.queries,queryKey:t,queryHash:a},{...r,fetchStatus:"idle"})})}(e,a.clientState,n)}else t.removeClient()}catch(e){t.removeClient()}}async function J({queryClient:e,persister:t,buster:i="",dehydrateOptions:r}){let n={buster:i,timestamp:Date.now(),clientState:function(e,t={}){let i=[],r=[];if(!1!==t.dehydrateMutations){let r=t.shouldDehydrateMutation||G;e.getMutationCache().getAll().forEach(e=>{r(e)&&i.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let i=t.shouldDehydrateQuery||V;e.getQueryCache().getAll().forEach(e=>{i(e)&&r.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:i,queries:r}}(e,r)};await t.persistClient(n)}var X=i(62641),ee=i(12115);let et=ee.createContext(void 0),ei=ee.createContext(!1);function er(e,t){return e||(t&&"u">typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=et),window.ReactQueryClientContext):et)}let en=({client:e,children:t,context:i,contextSharing:r=!1})=>{ee.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let n=er(i,r);return ee.createElement(ei.Provider,{value:!i&&r},ee.createElement(n.Provider,{value:e},t))};var ea=i(8039);class eo extends k{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let i=this.options;this.options=this.client.defaultMutationOptions(e),!function(e,t){if(e&&!t||t&&!e)return!1;for(let i in e)if(e[i]!==t[i])return!1;return!0}(i,this.options)&&this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:F(),t="loading"===e.status,i={...e,isLoading:t,isPending:t,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=i}notify(e){$.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,i,r,n,a,o,s,l;e.onSuccess?(null==(t=(i=this.mutateOptions).onSuccess)||t.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(n=this.mutateOptions).onSettled)||r.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(a=(o=this.mutateOptions).onError)||a.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let es=ea.useSyncExternalStore;function el(){}var ec=i(94577);function eu({queryClient:e=new K({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,X.wE)({storage:"u">typeof window&&window.localStorage?window.localStorage:X.Qy}),persister:i="u">typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:i=1e3,serialize:r=JSON.stringify,deserialize:n=JSON.parse,retry:a}){if(e){let o=i=>{try{e.setItem(t,r(i));return}catch(e){return e}};return{persistClient:function(e,t=100){let i,r=null;return function(...n){i=n,null===r&&(r=setTimeout(()=>{e(...i),r=null},t))}}(e=>{let t=e,i=o(t),r=0;for(;i&&t;)r++,(t=null==a?void 0:a({persistedClient:t,error:i,errorCount:r}))&&(i=o(t))},i),restoreClient:()=>{let i=e.getItem(t);if(i)return n(i)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:c,restoreClient:()=>void 0,removeClient:c}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...r}){var n;let a=(0,X.Z3)({...r,storage:t});return i&&Q(n={queryClient:e,persister:i,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}).then(()=>{let e,t;e=n.queryClient.getQueryCache().subscribe(e=>{Y(e.type)&&J(n)}),t=n.queryClient.getMutationCache().subscribe(e=>{Y(e.type)&&J(n)})}),Object.assign(a,{queryClient:e})}var ed=ee.createContext(void 0),eh=ee.createContext(void 0);function ep({children:e,config:t}){return ee.createElement(ed.Provider,{children:ee.createElement(en,{children:e,client:t.queryClient,context:eh}),value:t})}ea.useSyncExternalStore;var ef=e=>"object"==typeof e&&!Array.isArray(e);function eg({onConnect:e,onDisconnect:t}={}){let i=function(){let e=ee.useContext(ed);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}(),r=function(e,t,i=t,r=X.bD){let n=ee.useRef([]),a=(0,ec.useSyncExternalStoreWithSelector)(e,t,i,e=>e,(e,t)=>{if(ef(e)&&ef(t)&&n.current.length){for(let i of n.current)if(!r(e[i],t[i]))return!1;return!0}return r(e,t)});if(ef(a)){let e={...a};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,i])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(n.current.includes(t)||n.current.push(t),i)}}),{})),e}return a}(ee.useCallback(e=>(0,X.F5)(e),[i]),X.sU),n=ee.useRef(),a=n.current;return ee.useEffect(()=>{a?.status!=="connected"&&"connected"===r.status&&e?.({address:r.address,connector:r.connector,isReconnected:a?.status==="reconnecting"||a?.status===void 0}),a?.status==="connected"&&"disconnected"===r.status&&t?.(),n.current=r},[e,t,a,r]),r}var ew=[{entity:"disconnect"}],em=()=>(0,X.Zf)();function eb({onError:e,onMutate:t,onSettled:i,onSuccess:r}={}){let{error:n,isError:a,isIdle:o,isLoading:s,isSuccess:l,mutate:c,mutateAsync:u,reset:d,status:h}=function(e){var t,i;let r=p(e,void 0,void 0),n=(({context:e}={})=>{let t=ee.useContext(er(e,ee.useContext(ei)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t})({context:r.context}),[a]=ee.useState(()=>new eo(n,r));ee.useEffect(()=>{a.setOptions(r)},[a,r]);let o=es(ee.useCallback(e=>a.subscribe($.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),s=ee.useCallback((e,t)=>{a.mutate(e,t).catch(el)},[a]);if(o.error&&(t=a.options.useErrorBoundary,i=[o.error],"function"==typeof t?t(...i):!!t))throw o.error;return{...o,mutate:s,mutateAsync:o.mutate}}({context:eh,...p(ew,em,{...e?{onError(t,i,r){e(t,r)}}:{},onMutate:t,...i?{onSettled(e,t,r,n){i(t,n)}}:{},...r?{onSuccess(e,t,i){r(i)}}:{}})});return{disconnect:c,disconnectAsync:u,error:n,isError:a,isIdle:o,isLoading:s,isSuccess:l,reset:d,status:h}}function ev({address:e,chainId:t,abi:i,listener:r,eventName:n}={}){let a=function({chainId:e}={}){return(0,ec.useSyncExternalStoreWithSelector)(t=>(0,X.Mq)({chainId:e},t),()=>(0,X.Bm)({chainId:e}),()=>(0,X.Bm)({chainId:e}),e=>e,(e,t)=>e.uid===t.uid)}({chainId:t}),o=function({chainId:e}={}){return(0,ec.useSyncExternalStoreWithSelector)(t=>(0,X.rp)({chainId:e},t),()=>(0,X.Af)({chainId:e}),()=>(0,X.Af)({chainId:e}),e=>e,(e,t)=>e?.uid===t?.uid)}({chainId:t}),s=ee.useRef();return ee.useEffect(()=>{if(i&&e&&n)return s.current=(o||a).watchContractEvent({abi:i,address:e,eventName:n,onLogs:r}),s.current},[i,e,n,a.uid,o?.uid]),s.current}},55290:(e,t)=>{function i(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:r,scale:r?4:n,margin:t,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,i){let r=t.getScale(e,i);return Math.floor((e+2*i.margin)*r)},t.qrToImageData=function(e,i,r){let n=i.modules.size,a=i.modules.data,o=t.getScale(n,r),s=Math.floor((n+2*r.margin)*o),l=r.margin*o,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let i=0;i<s;i++){let u=(t*s+i)*4,d=r.color.light;t>=l&&i>=l&&t<s-l&&i<s-l&&(d=c[+!!a[Math.floor((t-l)/o)*n+Math.floor((i-l)/o)]]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},56187:(e,t,i)=>{"use strict";i.d(t,{zX:()=>w,bG:()=>m,M:()=>b,rR:()=>v,$S:()=>y});var r=i(51011),n=i(95889),a=i(52856),o=i(24029),s=i(91497);function l({abiItem:e,args:t,includeFunctionName:i=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${i?e.name:""}(${e.inputs.map((e,i)=>`${r&&e.name?`${e.name}: `:""}${"object"==typeof t[i]?(0,s.A)(t[i]):t[i]}`).join(", ")})`}var c=i(42330),u=i(70536),d=i(22160),h=i(80044),p=i(23755),f=i(96002),g=i(78552);class w extends p.C{constructor(e,{account:t,docsPath:i,chain:n,data:a,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:p,value:g}){const w=t?(0,r.J)(t):void 0,m=(0,f.aO)({from:w?.address,to:p,value:void 0!==g&&`${(0,u.c)(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:a,gas:o,gasPrice:void 0!==s&&`${(0,d.Q)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.Q)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.Q)(c)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class m extends p.C{constructor(e,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:a,sender:s}){const u=(0,c.iY)({abi:t,args:i,name:a}),d=u?l({abiItem:u,args:i,includeFunctionName:!1,includeName:!1}):void 0,h=u?(0,o.B)(u,{includeName:!0}):void 0,p=(0,f.aO)({address:r&&(0,g.RZ)(r),function:h,args:d&&"()"!==d&&`${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=i,this.cause=e,this.contractAddress=r,this.functionName=a,this.sender=s}}class b extends p.C{constructor({abi:e,data:t,functionName:i,message:r}){let s,c,u,d,p;if(t&&"0x"!==t)try{const{abiItem:i,errorName:r,args:s}=p=(0,a.W)({abi:e,data:t});if("Error"===r)u=s[0];else if("Panic"===r){const[e]=s;u=n.fD[e]}else{const e=i?(0,o.B)(i,{includeName:!0}):void 0,t=i&&s?l({abiItem:i,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(r?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else r&&(u=r);s instanceof h.Wq&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${i}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${i}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.reason=u,this.signature=d}}class v extends p.C{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class y extends p.C{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},58637:(e,t,i)=>{"use strict";i.d(t,{Bv:()=>a});var r=i(84428);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function a(e){return{...e,gas:void 0!==e.gas?(0,r.cK)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,r.cK)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,r.cK)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,r.cK)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,r.cK)(e.nonce):void 0,type:void 0!==e.type?n[e.type]:void 0,value:void 0!==e.value?(0,r.cK)(e.value):void 0}}},61174:(e,t,i)=>{"use strict";i.d(t,{WF:()=>o,AH:()=>r.AH,qy:()=>n.qy});var r=i(68566),n=i(95545);let a=globalThis;class o extends r.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}o._$litElement$=!0,o.finalized=!0,a.litElementHydrateSupport?.({LitElement:o});let s=a.litElementPolyfillSupport;s?.({LitElement:o}),(a.litElementVersions??=[]).push("4.2.2")},62641:(e,t,i)=>{"use strict";i.d(t,{te:()=>tT,Ng:()=>tY,Z3:()=>tV,wE:()=>tH,bD:()=>function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){let r,n;if(t.constructor!==i.constructor)return!1;if(Array.isArray(t)&&Array.isArray(i)){if((r=t.length)!=i.length)return!1;for(n=r;0!=n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();let a=Object.keys(t);if((r=a.length)!==Object.keys(i).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(i,a[n]))return!1;for(n=r;0!=n--;){let r=a[n];if(r&&!e(t[r],i[r]))return!1}return!0}return t!=t&&i!=i},Zf:()=>tQ,vL:()=>ie,y2:()=>ic,Gd:()=>iu,sU:()=>it,Nj:()=>ii,Bm:()=>t0,Af:()=>t2,Qy:()=>tq,Tl:()=>t4,Jz:()=>t8,lT:()=>ir,Co:()=>ia,F_:()=>io,F5:()=>is,Us:()=>il,Mq:()=>t5,rp:()=>t3,Ek:()=>t9});var r,n,a,o,s,l=i(18338),c=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u=(e,t,i)=>(c(e,t,"read from private field"),i?i.call(e):t.get(e)),d=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},h=(e,t,i,r)=>(c(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),p=i(3680),f=i(18587),g=i(73320),w=i(96565),m=i(75411),b=i(12581),v=i(84428),y=i(95889),x=i(23755),C=i(56187);function E(e,t){if(!(e instanceof x.C))return!1;let i=e.walk(e=>e instanceof C.M);return i instanceof C.M&&(!!(i.data?.errorName==="ResolverNotFound"||i.data?.errorName==="ResolverWildcardNotSupported"||i.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&i.reason===y.fD[50])}var _=i(76429),S=i(22106),A=i(10824),$=i(89762);function k(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,$.q)(t)?t:null}function P(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,v.My)(t);let i=e.split(".");for(let e=i.length-1;e>=0;e-=1){let r=k(i[e]),n=r?(0,S.ZJ)(r):(0,A.S)((0,S.Af)(i[e]),"bytes");t=(0,A.S)((0,_.xW)([t,n]),"bytes")}return(0,v.My)(t)}function I(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let i=new Uint8Array((0,S.Af)(t).byteLength+2),r=0,n=t.split(".");for(let e=0;e<n.length;e++){var a;let t=(0,S.Af)(n[e]);t.byteLength>255&&(t=(0,S.Af)((a=function(e){let t=new Uint8Array(32).fill(0);return e?k(e)||(0,A.S)((0,S.Af)(e)):(0,v.My)(t)}(n[e]),`[${a.slice(2)}]`))),i[r]=t.length,i.set(t,r+1),r+=t.length+1}return i.byteLength!==r+1?i.slice(0,r+1):i}var R=i(49586),T=i(80044),O=i(65261);function N(e,{abi:t,address:i,args:r,docsPath:n,functionName:a,sender:o}){let{code:s,data:l,message:c,shortMessage:u}=e instanceof C.$S?e:e instanceof x.C?e.walk(e=>"data"in e)||e.walk():{},d=e instanceof T.O?new C.rR({functionName:a}):[3,O.bq.code].includes(s)&&(l||c||u)?new C.M({abi:t,data:"object"==typeof l?l.data:l,functionName:a,message:u??c}):e;return new C.bG(d,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:a,sender:o})}var M=i(51578);async function j(e,{abi:t,address:i,args:r,functionName:n,...a}){let o=(0,w.p)({abi:t,args:r,functionName:n});try{let{data:s}=await (0,R.T)(e,M.T,"call")({data:o,to:i,...a});return(0,g.e)({abi:t,args:r,functionName:n,data:s||"0x"})}catch(e){throw N(e,{abi:t,address:i,args:r,docsPath:"/docs/contract/readContract",functionName:n})}}async function U(e,{blockNumber:t,blockTag:i,coinType:r,name:n,universalResolverAddress:a}){let o=a;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,m.M)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=(0,w.p)({abi:f.Rm,functionName:"addr",...null!=r?{args:[P(n),BigInt(r)]}:{args:[P(n)]}}),s=await (0,R.T)(e,j,"readContract")({address:o,abi:f.Ag,functionName:"resolve",args:[(0,v.nj)(I(n)),a],blockNumber:t,blockTag:i});if("0x"===s[0])return null;let l=(0,g.e)({abi:f.Rm,args:null!=r?[P(n),BigInt(r)]:void 0,functionName:"addr",data:s[0]});if("0x"===l||"0x00"===(0,b.B)(l))return null;return l}catch(e){if(E(e,"resolve"))return null;throw e}}class D extends x.C{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class L extends x.C{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class z extends x.C{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class W extends x.C{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let B=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,F=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,q=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,H=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function K(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let i=new Image;i.onload=()=>{t(!0)},i.onerror=()=>{t(!1)},i.src=e})}}function G(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function V({uri:e,gatewayUrls:t}){let i=q.test(e);if(i)return{uri:e,isOnChain:!0,isEncoded:i};let r=G(t?.ipfs,"https://ipfs.io"),n=G(t?.arweave,"https://arweave.net"),a=e.match(B),{protocol:o,subpath:s,target:l,subtarget:c=""}=a?.groups||{},u="ipns:/"===o||"ipns/"===s,d="ipfs:/"===o||"ipfs/"===s||F.test(e);if(e.startsWith("http")&&!u&&!d){let i=e;return t?.arweave&&(i=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:i,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===o&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(H,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new z({uri:e})}function Z(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new D({data:e});return e.image||e.image_url||e.image_data}async function Y({gatewayUrls:e,uri:t}){try{let i=await fetch(t).then(e=>e.json());return await Q({gatewayUrls:e,uri:Z(i)})}catch{throw new z({uri:t})}}async function Q({gatewayUrls:e,uri:t}){let{uri:i,isOnChain:r}=V({uri:t,gatewayUrls:e});if(r||await K(i))return i;throw new z({uri:t})}async function J(e,{nft:t}){if("erc721"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new W({namespace:t.namespace})}async function X(e,{gatewayUrls:t,record:i}){return/eip155:/i.test(i)?ee(e,{gatewayUrls:t,record:i}):Q({uri:i,gatewayUrls:t})}async function ee(e,{gatewayUrls:t,record:i}){let r=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[i,r,n]=t.split("/"),[a,o]=i.split(":"),[s,l]=r.split(":");if(!a||"eip155"!==a.toLowerCase())throw new L({reason:"Only EIP-155 supported"});if(!o)throw new L({reason:"Chain ID not found"});if(!l)throw new L({reason:"Contract address not found"});if(!n)throw new L({reason:"Token ID not found"});if(!s)throw new L({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(i),{uri:n,isOnChain:a,isEncoded:o}=V({uri:await J(e,{nft:r}),gatewayUrls:t});if(a&&(n.includes("data:application/json;base64,")||n.startsWith("{")))return Q({uri:Z(JSON.parse(o?atob(n.replace("data:application/json;base64,","")):n)),gatewayUrls:t});let s=r.tokenID;return"erc1155"===r.namespace&&(s=s.replace("0x","").padStart(64,"0")),Y({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,s)})}async function et(e,{blockNumber:t,blockTag:i,name:r,key:n,universalResolverAddress:a}){let o=a;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,m.M)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=await (0,R.T)(e,j,"readContract")({address:o,abi:f.Ag,functionName:"resolve",args:[(0,v.nj)(I(r)),(0,w.p)({abi:f.SJ,functionName:"text",args:[P(r),n]})],blockNumber:t,blockTag:i});if("0x"===a[0])return null;let s=(0,g.e)({abi:f.SJ,functionName:"text",data:a[0]});return""===s?null:s}catch(e){if(E(e,"resolve"))return null;throw e}}async function ei(e,{blockNumber:t,blockTag:i,gatewayUrls:r,name:n,universalResolverAddress:a}){let o=await (0,R.T)(e,et,"getEnsText")({blockNumber:t,blockTag:i,key:"avatar",name:n,universalResolverAddress:a});if(!o)return null;try{return await X(e,{record:o,gatewayUrls:r})}catch{return null}}async function er(e,{address:t,blockNumber:i,blockTag:r,universalResolverAddress:n}){let a=n;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,m.M)({blockNumber:i,chain:e.chain,contract:"ensUniversalResolver"})}let o=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let[n,s]=await (0,R.T)(e,j,"readContract")({address:a,abi:f.oX,functionName:"reverse",args:[(0,v.nj)(I(o))],blockNumber:i,blockTag:r});if(t.toLowerCase()!==s.toLowerCase())return null;return n}catch(e){if(E(e,"reverse"))return null;throw e}}async function en(e,{blockNumber:t,blockTag:i,name:r,universalResolverAddress:n}){let a=n;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,m.M)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[o]=await (0,R.T)(e,j,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,v.nj)(I(r))],blockNumber:t,blockTag:i});return o}function ea(e,{method:t}){let i={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:r,status:n,transport:a})=>{"success"===n&&t===e&&(i[r]=a.request)}),t=>i[t]||e.request}async function eo(e){let t=ea(e,{method:"eth_newBlockFilter"}),i=await e.request({method:"eth_newBlockFilter"});return{id:i,request:t(i),type:"block"}}class es extends x.C{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var el=i(73672),ec=i(44497),eu=i(24029),ed=i(42330);function eh({abi:e,eventName:t,args:i}){let r=e[0];if(t&&!(r=(0,ed.iY)({abi:e,args:i,name:t})))throw new T.M_(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==r.type)throw new T.M_(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let n=(0,eu.B)(r),a=(0,el.c)(n),o=[];if(i&&"inputs"in r){let e=r.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(i)?i:Object.values(i).length>0?e?.map(e=>i[e.name])??[]:[];t.length>0&&(o=e?.map((e,i)=>Array.isArray(t[i])?t[i].map((r,n)=>ep({param:e,value:t[i][n]})):t[i]?ep({param:e,value:t[i]}):null)??[])}return[a,...o]}function ep({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,A.S)((0,S.ZJ)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new es(e.type);return(0,ec.h)([e],[t])}async function ef(e,{address:t,abi:i,args:r,eventName:n,fromBlock:a,strict:o,toBlock:s}){let l=ea(e,{method:"eth_newFilter"}),c=n?eh({abi:i,args:r,eventName:n}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,v.cK)(a):a,toBlock:"bigint"==typeof s?(0,v.cK)(s):s,topics:c}]});return{abi:i,args:r,eventName:n,id:u,request:l(u),strict:o,type:"event"}}async function eg(e,{address:t,args:i,event:r,events:n,fromBlock:a,strict:o,toBlock:s}={}){let l=n??(r?[r]:void 0),c=ea(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>eh({abi:[e],eventName:e.name,args:i}))],r&&(u=u[0]));let d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,v.cK)(a):a,toBlock:"bigint"==typeof s?(0,v.cK)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:i,eventName:r?r.name:void 0,fromBlock:a,id:d,request:c(d),strict:o,toBlock:s,type:"event"}}async function ew(e){let t=ea(e,{method:"eth_newPendingTransactionFilter"}),i=await e.request({method:"eth_newPendingTransactionFilter"});return{id:i,request:t(i),type:"transaction"}}var em=i(51011),eb=i(73062);async function ev(e,{abi:t,address:i,args:r,functionName:n,...a}){let o=(0,w.p)({abi:t,args:r,functionName:n});try{return await (0,R.T)(e,eb.Q,"estimateGas")({data:o,to:i,...a})}catch(o){let e=a.account?(0,em.J)(a.account):void 0;throw N(o,{abi:t,address:i,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:e?.address})}}var ey=i(10155),ex=i(14124);async function eC(e,{address:t,blockNumber:i,blockTag:r="latest"}){let n=i?(0,v.cK)(i):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,n||r]}))}var eE=i(42073);let e_=new Map,eS=new Map;async function eA(e,{cacheKey:t,cacheTime:i=1/0}){let r,n,a,o=(n=(r=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:i=>t.set(e,i)}))(t,e_),{clear:()=>{n.clear(),a.clear()},promise:n,response:a=r(t,eS)}),s=o.response.get();if(s&&i>0&&new Date().getTime()-s.created.getTime()<i)return s.data;let l=o.promise.get();l||(l=e(),o.promise.set(l));try{let e=await l;return o.response.set({created:new Date,data:e}),e}finally{o.promise.clear()}}async function e$(e,{cacheTime:t=e.cacheTime,maxAge:i}={}){let r;return BigInt(await eA(()=>e.request({method:"eth_blockNumber"}),{cacheKey:(r=e.uid,`blockNumber.${r}`),cacheTime:i??t}))}var ek=i(94747);async function eP(e,{blockHash:t,blockNumber:i,blockTag:r="latest"}={}){let n,a=void 0!==i?(0,v.cK)(i):void 0;return n=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[a||r]}),(0,ek.ME)(n)}async function eI(e,{address:t,blockNumber:i,blockTag:r="latest"}){let n=void 0!==i?(0,v.cK)(i):void 0,a=await e.request({method:"eth_getCode",params:[t,n||r]});if("0x"!==a)return a}var eR=i(69960),eT=i(6809);let eO="/docs/contract/decodeEventLog";function eN({abi:e,data:t,strict:i,topics:r}){let n=i??!0,[a,...o]=r;if(!a)throw new T._z({docsPath:eO});let s=e.find(e=>"event"===e.type&&a===(0,el.c)((0,eu.B)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new T.kE(a,{docsPath:eO});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),d=u?[]:{},h=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<h.length;e++){let t=h[e],i=o[e];if(!i)throw new T.l3({abiItem:s,param:t});d[t.name||e]=function({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,eT.n)([e],t)||[])[0]}({param:t,value:i})}let p=c.filter(e=>!("indexed"in e&&e.indexed));if(p.length>0){if(t&&"0x"!==t)try{let e=(0,eT.n)(p,t);if(e)if(u)d=[...d,...e];else for(let t=0;t<p.length;t++)d[p[t].name]=e[t]}catch(e){if(n){if(e instanceof T.Iy)throw new T.fo({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(n)throw new T.fo({abiItem:s,data:"0x",params:p,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function eM(e,{args:t,eventName:i}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...i?{args:t,eventName:i}:{}}}async function ej(e,{address:t,blockHash:i,fromBlock:r,toBlock:n,event:a,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(a?[a]:void 0),d=[];return u&&(d=[u.flatMap(e=>eh({abi:[e],eventName:e.name,args:s}))],a&&(d=d[0])),(i?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:i}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof r?(0,v.cK)(r):r,toBlock:"bigint"==typeof n?(0,v.cK)(n):n}]})).map(e=>{try{let{eventName:t,args:i}=u?eN({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return eM(e,{args:i,eventName:t})}catch(r){let t,i;if(r instanceof T.fo||r instanceof T.l3){if(c)return;t=r.abiItem.name,i=r.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:i?[]:{},eventName:t})}}).filter(Boolean)}async function eU(e,{abi:t,address:i,args:r,blockHash:n,eventName:a,fromBlock:o,toBlock:s,strict:l}){let c=a?(0,ed.iY)({abi:t,name:a}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,R.T)(e,ej,"getLogs")({address:i,args:r,blockHash:n,event:c,events:u,fromBlock:o,toBlock:s,strict:l})}async function eD(e,{blockCount:t,blockNumber:i,blockTag:r="latest",rewardPercentiles:n}){var a;let o=i?(0,v.cK)(i):void 0;return{baseFeePerGas:(a=await e.request({method:"eth_feeHistory",params:[(0,v.cK)(t),o||r,n]})).baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}async function eL(e,{filter:t}){let i="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(e=>{if("string"==typeof e)return e;try{let{eventName:r,args:n}="abi"in t&&t.abi?eN({abi:t.abi,data:e.data,topics:e.topics,strict:i}):{eventName:void 0,args:void 0};return eM(e,{args:n,eventName:r})}catch(n){let i,r;if(n instanceof T.fo||n instanceof T.l3){if("strict"in t&&t.strict)return;i=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:r?[]:{},eventName:i})}}).filter(Boolean)}async function ez(e,{filter:t}){let i=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(e=>{try{let{eventName:r,args:n}="abi"in t&&t.abi?eN({abi:t.abi,data:e.data,topics:e.topics,strict:i}):{eventName:void 0,args:void 0};return eM(e,{args:n,eventName:r})}catch(n){let i,r;if(n instanceof T.fo||n instanceof T.l3){if("strict"in t&&t.strict)return;i=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return eM(e,{args:r?[]:{},eventName:i})}}).filter(Boolean)}var eW=i(94310);async function eB(e,{address:t,blockNumber:i,blockTag:r,storageKeys:n}){let a=void 0!==i?(0,v.cK)(i):void 0;var o=await e.request({method:"eth_getProof",params:[t,n,a||(r??"latest")]});return{...o,balance:o.balance?BigInt(o.balance):void 0,nonce:o.nonce?(0,ek.ME)(o.nonce):void 0,storageProof:o.storageProof?o.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function eF(e,{address:t,blockNumber:i,blockTag:r="latest",slot:n}){let a=void 0!==i?(0,v.cK)(i):void 0;return await e.request({method:"eth_getStorageAt",params:[t,n,a||r]})}var eq=i(96002),eH=i(43748);async function eK(e,{blockHash:t,blockNumber:i,blockTag:r,hash:n,index:a}){let o=r||"latest",s=void 0!==i?(0,v.cK)(i):void 0,l=null;if(n?l=await e.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,v.cK)(a)]}):(s||o)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,(0,v.cK)(a)]})),!l)throw new eq.Kz({blockHash:t,blockNumber:i,blockTag:o,hash:n,index:a});return(e.chain?.formatters?.transaction?.format||eH.uP)(l)}async function eG(e,{hash:t,transactionReceipt:i}){let[r,n]=await Promise.all([(0,R.T)(e,e$,"getBlockNumber")({}),t?(0,R.T)(e,eK,"getBlockNumber")({hash:t}):void 0]),a=i?.blockNumber||n?.blockNumber;return a?r-a+1n:0n}var eV=i(80771);let eZ={"0x0":"reverted","0x1":"success"};async function eY(e,{hash:t}){let i=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!i)throw new eq.Kc({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||function(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>eM(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,ek.ME)(e.transactionIndex):null,status:e.status?eZ[e.status]:null,type:e.type?eH.b4[e.type]||e.type:null}})(i)}async function eQ(e,t){let{allowFailure:i=!0,batchSize:r,blockNumber:n,blockTag:a,contracts:o,multicallAddress:s}=t,l=r??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,m.M)({blockNumber:n,chain:e.chain,contract:"multicall3"})}let u=[[]],d=0,h=0;for(let e=0;e<o.length;e++){let{abi:t,address:r,args:n,functionName:a}=o[e];try{let e=(0,w.p)({abi:t,args:n,functionName:a});h+=(e.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(e.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:e,target:r}]}catch(o){let e=N(o,{abi:t,address:r,args:n,docsPath:"/docs/contract/multicall",functionName:a});if(!i)throw e;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:r}]}}let p=await Promise.allSettled(u.map(t=>(0,R.T)(e,j,"readContract")({abi:f.v2,address:c,args:[t],blockNumber:n,blockTag:a,functionName:"aggregate3"}))),b=[];for(let e=0;e<p.length;e++){let t=p[e];if("rejected"===t.status){if(!i)throw t.reason;for(let i=0;i<u[e].length;i++)b.push({status:"failure",error:t.reason,result:void 0});continue}let r=t.value;for(let t=0;t<r.length;t++){let{returnData:n,success:a}=r[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:d,args:h}=o[b.length];try{if("0x"===s)throw new T.O;if(!a)throw new C.$S({data:n});let e=(0,g.e)({abi:l,args:h,data:n,functionName:d});b.push(i?{result:e,status:"success"}:e)}catch(t){let e=N(t,{abi:l,address:c,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!i)throw e;b.push({error:e,result:void 0,status:"failure"})}}}if(b.length!==o.length)throw new x.C("multicall results mismatch");return b}async function eJ(e,{abi:t,address:i,args:r,dataSuffix:n,functionName:a,...o}){let s=o.account?(0,em.J)(o.account):void 0,l=(0,w.p)({abi:t,args:r,functionName:a});try{let{data:s}=await (0,R.T)(e,M.T,"call")({batch:!1,data:`${l}${n?n.replace("0x",""):""}`,to:i,...o});return{result:(0,g.e)({abi:t,args:r,functionName:a,data:s||"0x"}),request:{abi:t,address:i,args:r,dataSuffix:n,functionName:a,...o}}}catch(e){throw N(e,{abi:t,address:i,args:r,docsPath:"/docs/contract/simulateContract",functionName:a,sender:s?.address})}}async function eX(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2);var e0=i(24642);async function e1(e,{address:t,hash:i,signature:r,...n}){let a=(0,$.q)(r)?r:(0,v.nj)(r);try{let{data:r}=await (0,R.T)(e,M.T,"call")({data:(0,e0.m)({abi:f._,args:[t,i,a],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...n});return function(e){let t=(0,$.q)(e)?(0,S.ZJ)(e):e,i=(0,$.q)("0x1")?(0,S.ZJ)("0x1"):"0x1";if(t.length!==i.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==i[e])return!1;return!0}(r??"0x0")}catch(e){if(e instanceof C.zX)return!1;throw e}}async function e2(e,{address:t,message:i,signature:r,...n}){let a,o;return e1(e,{address:t,hash:(a="string"==typeof i?(0,S.Af)(i):i.raw instanceof Uint8Array?i.raw:(0,S.ZJ)(i.raw),o=(0,S.Af)(`\x19Ethereum Signed Message:
${a.length}`),(0,A.S)((0,_.xW)([o,a]),void 0)),signature:r,...n})}var e5=i(7241);function e3({data:e,primaryType:t,types:i}){let r=function e({data:t,primaryType:i,types:r}){let n=[{type:"bytes32"}],a=[function({primaryType:e,types:t}){let i=(0,v.nj)(function({primaryType:e,types:t}){let i="",r=function e({primaryType:t,types:i},r=new Set){let n=t.match(/^\w*/u),a=n?.[0];if(r.has(a)||void 0===i[a])return r;for(let t of(r.add(a),i[a]))e({primaryType:t.type,types:i},r);return r}({primaryType:e,types:t});for(let n of(r.delete(e),[e,...Array.from(r).sort()]))i+=`${n}(${t[n].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return i}({primaryType:e,types:t}));return(0,A.S)(i)}({primaryType:i,types:r})];for(let o of r[i]){let[i,s]=function t({types:i,name:r,type:n,value:a}){if(void 0!==i[n])return[{type:"bytes32"},(0,A.S)(e({data:a,primaryType:n,types:i}))];if("bytes"===n){let e=a.length%2?"0":"";return a=`0x${e+a.slice(2)}`,[{type:"bytes32"},(0,A.S)(a)]}if("string"===n)return[{type:"bytes32"},(0,A.S)((0,v.nj)(a))];if(n.lastIndexOf("]")===n.length-1){let e=n.slice(0,n.lastIndexOf("[")),o=a.map(n=>t({name:r,type:e,types:i,value:n}));return[{type:"bytes32"},(0,A.S)((0,ec.h)(o.map(([e])=>e),o.map(([,e])=>e)))]}return[{type:n},a]}({types:r,name:o.name,type:o.type,value:t[o.name]});n.push(i),a.push(s)}return(0,ec.h)(n,a)}({data:e,primaryType:t,types:i});return(0,A.S)(r)}async function e4(e,{address:t,signature:i,message:r,primaryType:n,types:a,domain:o,...s}){return e1(e,{address:t,hash:function({domain:e,message:t,primaryType:i,types:r}){let n=void 0===e?{}:e,a={EIP712Domain:(0,e5.H4)({domain:n}),...r};(0,e5.$$)({domain:n,message:t,primaryType:i,types:a});let o=["0x1901"];return n&&o.push(function({domain:e,types:t}){return e3({data:e,primaryType:"EIP712Domain",types:t})}({domain:n,types:a})),"EIP712Domain"!==i&&o.push(e3({data:t,primaryType:i,types:a})),(0,A.S)((0,_.xW)(o))}({message:r,primaryType:n,types:a,domain:o}),signature:i,...s})}var e6=i(9471);let e8=new Map,e7=new Map,e9=0;function te(e,t,i){let r=++e9,n=()=>e8.get(e)||[],a=()=>{let t,i=e7.get(e);1===n().length&&i&&i(),t=n(),e8.set(e,t.filter(e=>e.id!==r))},o=n();if(e8.set(e,[...o,{id:r,fns:t}]),o&&o.length>0)return a;let s={};for(let e in t)s[e]=(...t)=>{let i=n();if(0!==i.length)for(let r of i)r.fns[e]?.(...t)};let l=i(s);return"function"==typeof l&&e7.set(e,l),a}var tt=i(7528),ti=i(91497),tr=i(46269);function tn(e,{emitOnBegin:t,initialWaitTime:i,interval:r}){let n=!0,a=()=>n=!1;return(async()=>{let o;t&&(o=await e({unpoll:a}));let s=await i?.(o)??r;await (0,tr.u)(s);let l=async()=>{n&&(await e({unpoll:a}),await (0,tr.u)(r),l())};l()})(),a}function ta(e,{emitOnBegin:t=!1,emitMissed:i=!1,onBlockNumber:r,onError:n,poll:a,pollingInterval:o=e.pollingInterval}){let s,l,c;return(void 0!==a?a:"webSocket"!==e.transport.type)?te((0,ti.A)(["watchBlockNumber",e.uid,t,i,o]),{onBlockNumber:r,onError:n},r=>tn(async()=>{try{let t=await (0,R.T)(e,e$,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&i)for(let e=s+1n;e<t;e++)r.onBlockNumber(e,s),s=e}(!s||t>s)&&(r.onBlockNumber(t,s),s=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,ek.uU)(e.result?.number);r(t,s),s=t},onError(e){n?.(e)}});c=t,l||c()}catch(e){n?.(e)}})(),c)}async function to(e,{confirmations:t=1,hash:i,onReplaced:r,pollingInterval:n=e.pollingInterval,timeout:a}){let o,s,l,c=(0,ti.A)(["waitForTransactionReceipt",e.uid,i]),u=!1;return new Promise((d,h)=>{a&&setTimeout(()=>h(new eq.WA({hash:i})),a);let p=te(c,{onReplaced:r,resolve:d,reject:h},r=>{let a=(0,R.T)(e,ta,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(n){if(u)return;let c=n,d=e=>{a(),e(),p()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>r.resolve(l));return}if(o||(u=!0,await (0,tt.b)(async()=>{(o=await (0,R.T)(e,eK,"getTransaction")({hash:i})).blockNumber&&(c=o.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,R.T)(e,eY,"getTransactionReceipt")({hash:i}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>r.resolve(l))}catch(i){if(o&&(i instanceof eq.Kz||i instanceof eq.Kc))try{s=o,u=!0;let i=await (0,tt.b)(()=>(0,R.T)(e,eE.g,"getBlock")({blockNumber:c,includeTransactions:!0}),{delay:({count:e})=>200*~~(1<<e),retryCount:6,shouldRetry:({error:e})=>e instanceof e6.l});u=!1;let n=i.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!n||(l=await (0,R.T)(e,eY,"getTransactionReceipt")({hash:n.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let a="replaced";n.to===s.to&&n.value===s.value?a="repriced":n.from===n.to&&0n===n.value&&(a="cancelled"),d(()=>{r.onReplaced?.({reason:a,replacedTransaction:s,transaction:n,transactionReceipt:l}),r.resolve(l)})}catch(e){d(()=>r.reject(e))}else d(()=>r.reject(i))}}})})})}var ts=i(89529),tl=i(52546),tc=i(45312);function tu(e){return{call:t=>(0,M.T)(e,t),createBlockFilter:()=>eo(e),createContractEventFilter:t=>ef(e,t),createEventFilter:t=>eg(e,t),createPendingTransactionFilter:()=>ew(e),estimateContractGas:t=>ev(e,t),estimateGas:t=>(0,eb.Q)(e,t),getBalance:t=>eC(e,t),getBlock:t=>(0,eE.g)(e,t),getBlockNumber:t=>e$(e,t),getBlockTransactionCount:t=>eP(e,t),getBytecode:t=>eI(e,t),getChainId:()=>(0,eR.T)(e),getContractEvents:t=>eU(e,t),getEnsAddress:t=>U(e,t),getEnsAvatar:t=>ei(e,t),getEnsName:t=>er(e,t),getEnsResolver:t=>en(e,t),getEnsText:t=>et(e,t),getFeeHistory:t=>eD(e,t),estimateFeesPerGas:t=>(0,ey._)(e,t),getFilterChanges:t=>eL(e,t),getFilterLogs:t=>ez(e,t),getGasPrice:()=>(0,eW.L)(e),getLogs:t=>ej(e,t),getProof:t=>eB(e,t),estimateMaxPriorityFeePerGas:t=>(0,ex.b)(e,t),getStorageAt:t=>eF(e,t),getTransaction:t=>eK(e,t),getTransactionConfirmations:t=>eG(e,t),getTransactionCount:t=>(0,eV.y)(e,t),getTransactionReceipt:t=>eY(e,t),multicall:t=>eQ(e,t),prepareTransactionRequest:t=>(0,tl.f)(e,t),readContract:t=>j(e,t),sendRawTransaction:t=>(0,tc.L)(e,t),simulateContract:t=>eJ(e,t),verifyMessage:t=>e2(e,t),verifyTypedData:t=>e4(e,t),uninstallFilter:t=>eX(e,t),waitForTransactionReceipt:t=>to(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:i=!1,emitOnBegin:r=!1,onBlock:n,onError:a,includeTransactions:o,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,d,h=void 0!==s?s:"webSocket"!==e.transport.type,p=o??!1;return h?te((0,ti.A)(["watchBlocks",e.uid,i,r,p,l]),{onBlock:n,onError:a},n=>tn(async()=>{try{let r=await (0,R.T)(e,eE.g,"getBlock")({blockTag:t,includeTransactions:p});if(r.number&&c?.number){if(r.number===c.number)return;if(r.number-c.number>1&&i)for(let t=c?.number+1n;t<r.number;t++){let i=await (0,R.T)(e,eE.g,"getBlock")({blockNumber:t,includeTransactions:p});n.onBlock(i,c),c=i}}(!c?.number||"pending"===t&&!r?.number||r.number&&r.number>c.number)&&(n.onBlock(r,c),c=r)}catch(e){n.onError?.(e)}},{emitOnBegin:r,interval:l})):(u=!0,d=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let i=(e.chain?.formatters?.block?.format||ts.$)(t.result);n(i,c),c=i},onError(e){a?.(e)}});d=t,u||d()}catch(e){a?.(e)}})(),d)})(e,t),watchBlockNumber:t=>ta(e,t),watchContractEvent:t=>(function(e,{abi:t,address:i,args:r,batch:n=!0,eventName:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h,p,f;return(void 0!==l?l:"webSocket"!==e.transport.type)?(d=(0,ti.A)(["watchContractEvent",i,r,n,e.uid,a,c]),h=u??!1,te(d,{onLogs:s,onError:o},o=>{let s,l,u=!1,d=tn(async()=>{if(!u){try{l=await (0,R.T)(e,ef,"createContractEventFilter")({abi:t,address:i,args:r,eventName:a,strict:h})}catch{}u=!0;return}try{let c;if(l)c=await (0,R.T)(e,eL,"getFilterChanges")({filter:l});else{let n=await (0,R.T)(e,e$,"getBlockNumber")({});c=s&&s!==n?await (0,R.T)(e,eU,"getContractEvents")({abi:t,address:i,args:r,eventName:a,fromBlock:s+1n,toBlock:n,strict:h}):[],s=n}if(0===c.length)return;if(n)o.onLogs(c);else for(let e of c)o.onLogs([e])}catch(e){l&&e instanceof O.Di&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,R.T)(e,eX,"uninstallFilter")({filter:l}),d()}})):(p=!0,f=()=>p=!1,(async()=>{try{let n=a?eh({abi:t,eventName:a,args:r}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:i,topics:n}],onData(e){if(!p)return;let i=e.result;try{let{eventName:e,args:r}=eN({abi:t,data:i.data,topics:i.topics,strict:u}),n=eM(i,{args:r,eventName:e});s([n])}catch(n){let e,t;if(n instanceof T.fo||n instanceof T.l3){if(u)return;e=n.abiItem.name,t=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let r=eM(i,{args:t?[]:{},eventName:e});s([r])}},onError(e){o?.(e)}});f=l,p||f()}catch(e){o?.(e)}})(),f)})(e,t),watchEvent:t=>(function(e,{address:t,args:i,batch:r=!0,event:n,events:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h,p=void 0!==l?l:"webSocket"!==e.transport.type,f=u??!1;return p?te((0,ti.A)(["watchEvent",t,i,r,e.uid,n,c]),{onLogs:s,onError:o},o=>{let s,l,u=!1,d=tn(async()=>{if(!u){try{l=await (0,R.T)(e,eg,"createEventFilter")({address:t,args:i,event:n,events:a,strict:f})}catch{}u=!0;return}try{let c;if(l)c=await (0,R.T)(e,eL,"getFilterChanges")({filter:l});else{let r=await (0,R.T)(e,e$,"getBlockNumber")({});c=s&&s!==r?await (0,R.T)(e,ej,"getLogs")({address:t,args:i,event:n,events:a,fromBlock:s+1n,toBlock:r}):[],s=r}if(0===c.length)return;if(r)o.onLogs(c);else for(let e of c)o.onLogs([e])}catch(e){l&&e instanceof O.Di&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,R.T)(e,eX,"uninstallFilter")({filter:l}),d()}}):(d=!0,h=()=>d=!1,(async()=>{try{let r=a??(n?[n]:void 0),l=[];r&&(l=[r.flatMap(e=>eh({abi:[e],eventName:e.name,args:i}))],n&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!d)return;let t=e.result;try{let{eventName:e,args:i}=eN({abi:r,data:t.data,topics:t.topics,strict:f}),n=eM(t,{args:i,eventName:e});s([n])}catch(n){let e,i;if(n instanceof T.fo||n instanceof T.l3){if(u)return;e=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let r=eM(t,{args:i?[]:{},eventName:e});s([r])}},onError(e){o?.(e)}});h=c,d||h()}catch(e){o?.(e)}})(),h)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:i,onTransactions:r,poll:n,pollingInterval:a=e.pollingInterval}){let o,s;return(void 0!==n?n:"webSocket"!==e.transport.type)?te((0,ti.A)(["watchPendingTransactions",e.uid,t,a]),{onTransactions:r,onError:i},i=>{let r,n=tn(async()=>{try{if(!r)try{r=await (0,R.T)(e,ew,"createPendingTransactionFilter")({});return}catch(e){throw n(),e}let a=await (0,R.T)(e,eL,"getFilterChanges")({filter:r});if(0===a.length)return;if(t)i.onTransactions(a);else for(let e of a)i.onTransactions([e])}catch(e){i.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await (0,R.T)(e,eX,"uninstallFilter")({filter:r}),n()}}):(o=!0,s=()=>o=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!o)return;let t=e.result;r([t])},onError(e){i?.(e)}});s=t,o||s()}catch(e){i?.(e)}})(),s)})(e,t)}}function td(e){let{key:t="public",name:i="Public Client"}=e;return(0,p.U)({...e,key:t,name:i,type:"publicClient"}).extend(tu)}var th=i(11789),tp=i(74767);function tf(e,t={}){let{key:i="fallback",name:r="Fallback",rank:n=!1,retryCount:a,retryDelay:o}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},d=(0,tp.o)({key:i,name:r,async request({method:e,params:i}){let r=async(n=0)=>{let a=c[n]({chain:t,retryCount:0,timeout:l});try{let t=await a.request({method:e,params:i});return u({method:e,params:i,response:t,transport:a,status:"success"}),t}catch(t){if(u({error:t,method:e,params:i,transport:a,status:"error"}),(0,th.x)(t)||n===c.length-1)throw t;return r(n+1)}};return r()},retryCount:a,retryDelay:o,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(n){let e="object"==typeof n?n:{};!function({chain:e,interval:t=4e3,onTransports:i,sampleCount:r=10,timeout:n=1e3,transports:a,weights:o={}}){let{stability:s=.7,latency:l=.3}=o,c=[],u=async()=>{let o=await Promise.all(a.map(async t=>{let i,r,a=t({chain:e,retryCount:0,timeout:n}),o=Date.now();try{await a.request({method:"net_listening"}),r=1}catch{r=0}finally{i=Date.now()}return{latency:i-o,success:r}}));c.push(o),c.length>r&&c.shift();let d=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e))));i(a.map((e,t)=>{let i=c.map(e=>e[t].latency),r=i.reduce((e,t)=>e+t,0)/i.length,n=c.map(e=>e[t].success),a=n.reduce((e,t)=>e+t,0)/n.length;return 0===a?[0,t]:[l*(1-r/d)+s*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>a[e])),await (0,tr.u)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return d}}var tg=i(93247);class tw extends x.C{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var tm=i(37295);let tb=function(){if("u">typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function tv(e,{errorInstance:t=Error("timed out"),timeout:i,signal:r}){return new Promise((n,a)=>{(async()=>{let o;try{let s=new AbortController;i>0&&(o=setTimeout(()=>{r?s.abort():a(t)},i)),n(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&a(t),a(e)}finally{clearTimeout(o)}})()})}let ty=0;async function tx(e,{body:t,fetchOptions:i={},timeout:r=1e4}){let{headers:n,method:a,signal:o}=i;try{let s,l=await tv(async({signal:s})=>await fetch(e,{...i,body:Array.isArray(t)?(0,ti.A)(t.map(e=>({jsonrpc:"2.0",id:e.id??ty++,...e}))):(0,ti.A)({jsonrpc:"2.0",id:t.id??ty++,...t}),headers:{...n,"Content-Type":"application/json"},method:a||"POST",signal:o||(r>0?s:void 0)}),{errorInstance:new tg.MU({body:t,url:e}),timeout:r,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new tg.Ci({body:t,details:(0,ti.A)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(i){if(i instanceof tg.Ci||i instanceof tg.MU)throw i;throw new tg.Ci({body:t,details:i.message,url:e})}}let tC=new Map;async function tE(e){let t=tC.get(e);if(t)return t;let{schedule:i}=(0,tm.u)({id:e,fn:async()=>{let i=new tb(e),r=new Map,n=new Map,a=({data:e})=>{let t=JSON.parse(e),i="eth_subscription"===t.method,a=i?t.params.subscription:t.id,o=i?n:r,s=o.get(a);s&&s({data:e}),i||o.delete(a)},o=()=>{tC.delete(e),i.removeEventListener("close",o),i.removeEventListener("message",a)};return i.addEventListener("close",o),i.addEventListener("message",a),i.readyState===tb.CONNECTING&&await new Promise((e,t)=>{i&&(i.onopen=e,i.onerror=t)}),t=Object.assign(i,{requests:r,subscriptions:n}),tC.set(e,t),[t]}}),[r,[n]]=await i();return n}let t_={http:tx,webSocket:function(e,{body:t,onResponse:i}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new tg.Pr({body:t,url:e.url,details:"Socket is closed."});let r=ty++,n=({data:a})=>{let o=JSON.parse(a);("number"!=typeof o.id||r===o.id)&&(i?.(o),"eth_subscribe"===t.method&&"string"==typeof o.result&&e.subscriptions.set(o.result,n),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(r,n),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e},webSocketAsync:async function(e,{body:t,timeout:i=1e4}){return tv(()=>new Promise(i=>t_.webSocket(e,{body:t,onResponse:i})),{errorInstance:new tg.MU({body:t,url:e.url}),timeout:i})}};var tS=i(6005),tA=i(70378);let t$=e=>t=>{try{let i=e(t);if(i instanceof Promise)return i;return{then:e=>t$(e)(i),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>t$(t)(e)}}},tk=e=>{let t,i=new Set,r=(e,r)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=r?r:"object"!=typeof n||null===n)?n:Object.assign({},t,n),i.forEach(i=>i(t,e))}},n=()=>t,a={setState:r,getState:n,getInitialState:()=>o,subscribe:e=>(i.add(e),()=>i.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),i.clear()}},o=t=e(r,n,a);return a};var tP=i(49235);function tI(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[i,r]of e)if(!Object.is(r,t.get(i)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let i of e)if(!t.has(i))return!1;return!0}let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!1;for(let r of i)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}var tR=i(96685);function tT(e,t,{batch:i={multicall:{wait:32}},pollingInterval:r=4e3,rank:n,retryCount:a,retryDelay:o,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let i of e){let e=!1;for(let r of t){let t=r(i);t&&(e=!0,l.some(({id:e})=>e===i.id)||(l=[...l,t.chain]),c[i.id]=[...c[i.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[i.id]=[...u[i.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${i.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],d=c[u.id];if(!d||!d[0])throw Error(`No providers configured for chain "${u.id}"`);return Object.assign(td({batch:i,chain:u,transport:tf(d.map(e=>(function(e,t={}){let{batch:i,fetchOptions:r,key:n="http",name:a="HTTP JSON-RPC",retryDelay:o}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof i?i:{},h=t.retryCount??l,p=c??t.timeout??1e4,f=e||s?.rpcUrls.default.http[0];if(!f)throw new tw;return(0,tp.o)({key:n,name:a,async request({method:t,params:n}){let a={method:t,params:n},{schedule:o}=(0,tm.u)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>t_.http(f,{body:e,fetchOptions:r,timeout:p}),sort:(e,t)=>e.id-t.id}),s=async e=>i?o(e):[await t_.http(f,{body:e,fetchOptions:r,timeout:p})],[{error:l,result:c}]=await s(a);if(l)throw new tg.J8({body:a,error:l,url:f});return c},retryCount:h,retryDelay:o,timeout:p,type:"http"},{fetchOptions:r,url:e})}})(e,{timeout:s})),{rank:n,retryCount:a,retryDelay:o}),pollingInterval:r}),{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],d=u[c.id];if(d&&d[0])return Object.assign(td({batch:i,chain:c,transport:tf(d.map(e=>(function(e,t={}){let{key:i="webSocket",name:r="WebSocket JSON-RPC",retryDelay:n}=t;return({chain:a,retryCount:o,timeout:s})=>{let l=t.retryCount??o,c=s??t.timeout??1e4,u=e||a?.rpcUrls.default.webSocket?.[0];if(!u)throw new tw;return(0,tp.o)({key:i,name:r,async request({method:e,params:t}){let i={method:e,params:t},r=await tE(u),{error:n,result:a}=await t_.webSocketAsync(r,{body:i,timeout:c});if(n)throw new tg.J8({body:i,error:n,url:u});return a},retryCount:l,retryDelay:n,timeout:c,type:"webSocket"},{getSocket:()=>tE(u),async subscribe({params:e,onData:t,onError:i}){let r=await tE(u),{result:n}=await new Promise((n,a)=>t_.webSocket(r,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){a(e.error),i?.(e.error);return}"number"==typeof e.id?n(e):"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:n,unsubscribe:async()=>new Promise(e=>t_.webSocket(r,{body:{method:"eth_unsubscribe",params:[n]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:n,retryCount:a,retryDelay:o}),pollingInterval:r}),{chains:l})}}}var tO=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},tN=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},tM=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tj=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tU=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tD=(e,{find:t,replace:i})=>e&&t(e)?i(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tD(e,{find:t,replace:i})):e instanceof Object?Object.entries(e).reduce((e,[r,n])=>({...e,[r]:tD(n,{find:t,replace:i})}),{}):e;function tL(e){return tD(JSON.parse(e),{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))})}function tz(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(tA.pj[e])}function tW(e,t){return e.slice(0,t).join(".")||"."}function tB(e,t){let{length:i}=e;for(let r=0;r<i;++r)if(e[r]===t)return r+1;return 0}function tF(e,t,i,r){var n;let a,o,s,l;return JSON.stringify(e,(n=(e,i)=>{let r="bigint"==typeof i?`#bigint.${i.toString()}`:i;return t?.(e,r)||r},a=true,o="function"==typeof r,s=[],l=[],function(e,t){if("object"==typeof t)if(s.length){let i=tB(s,this);0===i?s[s.length]=this:(s.splice(i),l.splice(i)),l[l.length]=e;let n=tB(s,t);if(0!==n)return o?r.call(this,e,t,tW(l,n)):`[ref=${tW(l,n)}]`}else s[0]=t,l[0]=e;return a?n.call(this,e,t):t}),i??void 0)}var tq={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function tH({deserialize:e=tL,key:t="wagmi",serialize:i=tF,storage:r}){return{...r,getItem:(i,n=null)=>{let a=r.getItem(`${t}.${i}`);try{return a?e(a):n}catch(e){return console.warn(e),n}},setItem:(e,n)=>{if(null===n)r.removeItem(`${t}.${e}`);else try{r.setItem(`${t}.${e}`,i(n))}catch(e){console.error(e)}},removeItem:e=>r.removeItem(`${t}.${e}`)}}var tK="store",tG=class{constructor({autoConnect:e=!1,connectors:t=[new l.s],publicClient:i,storage:s=tH({storage:"u">typeof window?window.localStorage:tq}),logger:u={warn:console.warn},webSocketPublicClient:p}){let f;d(this,a),this.publicClients=new Map,this.webSocketPublicClients=new Map,d(this,r,void 0),d(this,n,void 0),this.args={autoConnect:e,connectors:t,logger:u,publicClient:i,storage:s,webSocketPublicClient:p};let g="disconnected";if(e)try{const e=s.getItem(tK),t=e?.state?.data;g=t?.account?"reconnecting":"connecting",f=t?.chain?.id}catch(e){}const w="function"==typeof t?t():t;w.forEach(e=>e.setStorage(s)),this.store=(e=>e?tk(e):tk)((e=>(t,i,r)=>{let n=r.subscribe;return r.subscribe=(e,t,i)=>{let a=e;if(t){let n=(null==i?void 0:i.equalityFn)||Object.is,o=e(r.getState());a=i=>{let r=e(i);if(!n(o,r)){let e=o;t(o=r,e)}},(null==i?void 0:i.fireImmediately)&&t(o,o)}return n(a)},e(t,i,r)})(((e,t)=>{if("getStorage"in t||"serialize"in t||"deserialize"in t)return console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),(i,r,n)=>{let a,o,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{a=s.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),i(...e)},r,n);let d=t$(s.serialize),h=()=>{let e,t=d({state:s.partialize({...r()}),version:s.version}).then(e=>a.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=n.setState;n.setState=(e,t)=>{p(e,t),h()};let f=e((...e)=>{i(...e),h()},r,n),g=()=>{var e;if(!a)return;l=!1,c.forEach(e=>e(r()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,r()))||void 0;return t$(a.getItem.bind(a))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e)if("number"!=typeof e.version||e.version===s.version)return e.state;else{if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return i(o=s.merge(e,null!=(t=r())?t:f),!0),h()}).then(()=>{null==t||t(o,void 0),l=!0,u.forEach(e=>e(o))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},g(),o||f};return(i,r,n)=>{let a,o={storage:function(e){let t;try{t=e()}catch(e){return}return{getItem:e=>{var i;let r=e=>null===e?null:JSON.parse(e,void 0),n=null!=(i=t.getItem(e))?i:null;return n instanceof Promise?n.then(r):r(n)},setItem:(e,i)=>t.setItem(e,JSON.stringify(i,void 0)),removeItem:e=>t.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=o.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),i(...e)},r,n);let d=()=>{let e=o.partialize({...r()});return u.setItem(o.name,{state:e,version:o.version})},h=n.setState;n.setState=(e,t)=>{h(e,t),d()};let p=e((...e)=>{i(...e),d()},r,n);n.getInitialState=()=>p;let f=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=r())?t:p)});let n=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:p))||void 0;return t$(u.getItem.bind(u))(o.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===o.version)return[!1,e.state];else{if(o.migrate)return[!0,o.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[n,s]=e;if(i(a=o.merge(s,null!=(t=r())?t:p),!0),n)return d()}).then(()=>{null==n||n(a,void 0),a=r(),s=!0,c.forEach(e=>e(a))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{o={...o,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||f(),a||p}})(()=>({connectors:w,publicClient:this.getPublicClient({chainId:f}),status:g,webSocketPublicClient:this.getWebSocketPublicClient({chainId:f})}),{name:tK,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,h(this,n,s?.getItem("wallet")),((e,t,i)=>(c(e,t,"access private method"),i))(this,a,o).call(this),e&&"u">typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),h(this,r,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,r))return;h(this,r,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,n)?[...this.connectors].sort(e=>e.id===u(this,n)?-1:1):this.connectors,t=!1;for(let i of e){if(!i.ready||!i.isAuthorized||!await i.isAuthorized())continue;let e=await i.connect();this.setState(t=>({...t,connector:i,chains:i?.chains,data:e,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),h(this,r,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:i}=this.args;return t="function"==typeof i?i({chainId:e}):i,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:i}=this.args;return(t="function"==typeof i?i({chainId:e}):i)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function tV(e){let t=new tG(e);return s=t,t}function tZ(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function tY({chainId:e,connector:t}){let i=tZ(),r=i.connector;if(r&&t.id===r.id)throw new tM;try{i.setState(e=>({...e,status:"connecting"}));let r=await t.connect({chainId:e});return i.setLastUsedConnector(t.id),i.setState(e=>({...e,connector:t,chains:t?.chains,data:r,status:"connected"})),i.storage.setItem("connected",!0),{...r,connector:t}}catch(e){throw i.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function tQ(){let e=tZ();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}r=new WeakMap,n=new WeakMap,a=new WeakSet,o=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},i=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(r,n)=>{n?.off?.("change",e),n?.off?.("disconnect",t),n?.off?.("error",i),r&&(r.on?.("change",e),r.on?.("disconnect",t),r.on?.("error",i))});let{publicClient:r,webSocketPublicClient:n}=this.args;("function"==typeof r||"function"==typeof n)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var tJ=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],tX=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function t0({chainId:e}={}){let t=tZ();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function t1({chainId:e}={}){let t=tZ();return await t.connector?.getWalletClient?.({chainId:e})||null}function t2({chainId:e}={}){let t=tZ();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function t5(e,t){let i=tZ(),r=async()=>t(t0(e));return i.subscribe(({publicClient:e})=>e,r)}function t3(e,t){let i=tZ(),r=async()=>t(t2(e));return i.subscribe(({webSocketPublicClient:e})=>e,r)}async function t4({abi:e,address:t,args:i,chainId:r,dataSuffix:n,functionName:a,walletClient:o,...s}){let l=t0({chainId:r}),c=o??await t1({chainId:r});if(!c)throw new tS.r;r&&id({chainId:r});let{account:u,accessList:d,blockNumber:h,blockTag:p,gas:f,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:m,nonce:b,value:v}={accessList:s.accessList,account:s.account,blockNumber:s.blockNumber,blockTag:s.blockTag,data:s.data,gas:s.gas,gasPrice:s.gasPrice,maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas,nonce:s.nonce,to:s.to,value:s.value},{result:y,request:x}=await l.simulateContract({abi:e,address:t,functionName:a,args:i,account:u||c.account,accessList:d,blockNumber:h,blockTag:p,dataSuffix:n,gas:f,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:m,nonce:b,value:v}),C=e.filter(e=>"name"in e&&e.name===a);return{mode:"prepared",request:{...x,abi:C,chainId:r},result:y}}async function t6({chainId:e,contracts:t,blockNumber:i,blockTag:r,...n}){let a=t0({chainId:e});if(!a.chains)throw new tj;if(e&&a.chain.id!==e)throw new tN({chainId:e});return a.multicall({allowFailure:n.allowFailure??!0,blockNumber:i,blockTag:r,contracts:t})}async function t8({address:e,account:t,chainId:i,abi:r,args:n,functionName:a,blockNumber:o,blockTag:s}){return t0({chainId:i}).readContract({abi:r,address:e,account:t,functionName:a,args:n,blockNumber:o,blockTag:s})}async function t7({contracts:e,blockNumber:t,blockTag:i,...r}){let{allowFailure:n=!0}=r;try{let r=t0(),a=e.reduce((e,t,i)=>{let n=t.chainId??r.chain.id;return{...e,[n]:[...e[n]||[],{contract:t,index:i}]}},{}),o=(await Promise.all(Object.entries(a).map(([e,r])=>t6({allowFailure:n,chainId:parseInt(e),contracts:r.map(({contract:e})=>e),blockNumber:t,blockTag:i})))).flat(),s=Object.values(a).flatMap(e=>e.map(({index:e})=>e));return o.reduce((e,t,i)=>(e&&(e[s[i]]=t),e),[])}catch(a){if(a instanceof C.bG)throw a;let r=()=>e.map(e=>t8({...e,blockNumber:t,blockTag:i}));if(n)return(await Promise.allSettled(r())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(r())}}async function t9(e){let t,i=await t1({chainId:e.chainId});if(!i)throw new tS.r;if(e.chainId&&id({chainId:e.chainId}),"prepared"===e.mode)t=e.request;else{let{chainId:i,mode:r,...n}=e;t=(await t4(n)).request}return{hash:await i.writeContract({...t,chain:e.chainId?{id:e.chainId}:null})}}async function ie({address:e,chainId:t,formatUnits:i,token:r}){let n=tZ(),a=t0({chainId:t});if(r){let n=async({abi:n})=>{let a={abi:n,address:r,chainId:t},[o,s,l]=await t7({allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[e]},{...a,functionName:"decimals"},{...a,functionName:"symbol"}]});return{decimals:s,formatted:(0,tP.J)(o??"0",tz(i??s)),symbol:l,value:o}};try{return await n({abi:tJ})}catch(e){if(e instanceof C.bG){let{symbol:e,...t}=await n({abi:tX});return{symbol:(0,ek.IQ)((0,b.B)(e,{dir:"right"})),...t}}throw e}}let o=[...n.publicClient.chains||[],...n.chains??[]],s=await a.getBalance({address:e}),l=o.find(e=>e.id===a.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tP.J)(s??"0",tz(i??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function it(){let{data:e,connector:t,status:i}=tZ();switch(i){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:i};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:i};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:i};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:i}}}function ii(){let e=tZ(),t=e.data?.chain?.id,i=e.chains??[],r=[...e.publicClient?.chains||[],...i].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...e.data?.chain,id:t}:void 0,chains:i}}async function ir(e){let t=await t1();if(!t)throw new tS.r;return await t.signMessage({message:e.message})}async function ia({domain:e,message:t,primaryType:i,types:r}){let n=await t1();if(!n)throw new tS.r;let{chainId:a}=e;return a&&id({chainId:a}),n.signTypedData({message:t,primaryType:i,types:r,domain:e})}async function io({chainId:e}){let{connector:t}=tZ();if(!t)throw new tS.r;if(!t.switchChain)throw new tU({connector:t});return t.switchChain(e)}function is(e,{selector:t=e=>e}={}){return tZ().subscribe(({data:e,connector:i,status:r})=>t({address:e?.account,connector:i,status:r}),()=>e(it()),{equalityFn:tI})}function il(e,{selector:t=e=>e}={}){return tZ().subscribe(({data:e,chains:i})=>t({chainId:e?.chain?.id,chains:i}),()=>e(ii()),{equalityFn:tI})}async function ic({name:e,chainId:t}){let{normalize:r}=await Promise.all([i.e(7602),i.e(5953)]).then(i.bind(i,45953)),n=t0({chainId:t});return await n.getEnsAvatar({name:r(e)})}async function iu({address:e,chainId:t}){return t0({chainId:t}).getEnsName({address:(0,tR.b)(e)})}function id({chainId:e}){let{chain:t,chains:i}=ii(),r=t?.id;if(r&&e!==r)throw new tO({activeChain:i.find(e=>e.id===r)?.name??`Chain ${r}`,targetChain:i.find(t=>t.id===e)?.name??`Chain ${e}`})}},64411:e=>{"use strict";var t=Object.prototype.hasOwnProperty,i="~";function r(){}function n(e,t,i){this.fn=e,this.context=t,this.once=i||!1}function a(e,t,r,a,o){if("function"!=typeof r)throw TypeError("The listener must be a function");var s=new n(r,a||e,o),l=i?i+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(i=!1)),s.prototype.eventNames=function(){var e,r,n=[];if(0===this._eventsCount)return n;for(r in e=this._events)t.call(e,r)&&n.push(i?r.slice(1):r);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=i?i+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var n=0,a=r.length,o=Array(a);n<a;n++)o[n]=r[n].fn;return o},s.prototype.listenerCount=function(e){var t=i?i+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,n,a,o){var s=i?i+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,n),!0;case 5:return u.fn.call(u.context,t,r,n,a),!0;case 6:return u.fn.call(u.context,t,r,n,a,o),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,r);break;case 4:u[c].fn.call(u[c].context,t,r,n);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,i){return a(this,e,t,i,!1)},s.prototype.once=function(e,t,i){return a(this,e,t,i,!0)},s.prototype.removeListener=function(e,t,r,n){var a=i?i+e:e;if(!this._events[a])return this;if(!t)return o(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||n&&!s.once||r&&s.context!==r||o(this,a);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||r&&s[l].context!==r)&&c.push(s[l]);c.length?this._events[a]=1===c.length?c[0]:c:o(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=i?i+e:e,this._events[t]&&o(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=i,s.EventEmitter=s,e.exports=s},65261:(e,t,i)=>{"use strict";i.d(t,{CL:()=>l,D5:()=>u,Di:()=>h,Gi:()=>c,MI:()=>S,RV:()=>C,Sf:()=>x,XU:()=>s,YW:()=>g,ab:()=>w,bq:()=>d,ch:()=>_,hA:()=>p,qZ:()=>f,s0:()=>m,sV:()=>y,vx:()=>v,xQ:()=>b,xq:()=>E});var r=i(23755),n=i(93247);class a extends r.C{constructor(e,{code:t,docsPath:i,metaMessages:r,shortMessage:a}){super(a,{cause:e,docsPath:i,metaMessages:r||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.J8?e.code:t??-1}}class o extends a{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends a{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends a{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends a{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends a{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends a{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends a{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends a{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends a{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends a{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends a{constructor(e){super(e,{code:w.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends a{constructor(e){super(e,{code:m.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class b extends a{constructor(e){super(e,{code:b.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class v extends o{constructor(e){super(e,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends o{constructor(e){super(e,{code:y.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends o{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends o{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends o{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class _ extends o{constructor(e){super(e,{code:_.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends a{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},65386:(e,t,i)=>{let r=i(826).getSymbolSize;t.getPositions=function(e){let t=r(e);return[[0,0],[t-7,0],[0,t-7]]}},65538:(e,t,i)=>{"use strict";var r=i(12115),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,o=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!n(e,i)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),r=a({inst:{value:i,getSnapshot:t}}),n=r[0].inst,u=r[1];return s(function(){n.value=i,n.getSnapshot=t,c(n)&&u({inst:n})},[e,i,t]),o(function(){return c(n)&&u({inst:n}),e(function(){c(n)&&u({inst:n})})},[e]),l(i),i};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},66220:(e,t,i)=>{"use strict";let r=i(28643),n=i(54057),a=i(48803),o=i(29612),s=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function u(e,t){return t.decode?n(e):e}function d(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function h(e){let t=(e=d(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function f(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let i=function(e){let t;switch(e.arrayFormat){case"index":return(e,i,r)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){r[e]=i;return}void 0===r[e]&&(r[e]={}),r[e][t[1]]=i};case"bracket":return(e,i,r)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){r[e]=i;return}if(void 0===r[e]){r[e]=[i];return}r[e]=[].concat(r[e],i)};case"colon-list-separator":return(e,i,r)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){r[e]=i;return}if(void 0===r[e]){r[e]=[i];return}r[e]=[].concat(r[e],i)};case"comma":case"separator":return(t,i,r)=>{let n="string"==typeof i&&i.includes(e.arrayFormatSeparator),a="string"==typeof i&&!n&&u(i,e).includes(e.arrayFormatSeparator);i=a?u(i,e):i;let o=n||a?i.split(e.arrayFormatSeparator).map(t=>u(t,e)):null===i?i:u(i,e);r[t]=o};case"bracket-separator":return(t,i,r)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){r[t]=i?u(i,e):i;return}let a=null===i?[]:i.split(e.arrayFormatSeparator).map(t=>u(t,e));if(void 0===r[t]){r[t]=a;return}r[t]=[].concat(r[t],a)};default:return(e,t,i)=>{if(void 0===i[e]){i[e]=t;return}i[e]=[].concat(i[e],t)}}}(t),r=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return r;for(let n of e.split("&")){if(""===n)continue;let[e,o]=a(t.decode?n.replace(/\+/g," "):n,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:u(o,t),i(u(e,t),o,r)}for(let e of Object.keys(r)){let i=r[e];if("object"==typeof i&&null!==i)for(let e of Object.keys(i))i[e]=p(i[e],t);else r[e]=p(i,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{let i=r[t];return i&&"object"==typeof i&&!Array.isArray(i)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(i):e[t]=i,e},Object.create(null))}t.extract=h,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let i=i=>t.skipNull&&null==e[i]||t.skipEmptyString&&""===e[i],r=function(e){switch(e.arrayFormat){case"index":return t=>(i,r)=>{let n=i.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[c(t,e),"[",n,"]"].join("")]:[...i,[c(t,e),"[",c(n,e),"]=",c(r,e)].join("")]};case"bracket":return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[c(t,e),"[]"].join("")]:[...i,[c(t,e),"[]=",c(r,e)].join("")];case"colon-list-separator":return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,[c(t,e),":list="].join("")]:[...i,[c(t,e),":list=",c(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return i=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:(n=null===n?"":n,0===r.length)?[[c(i,e),t,c(n,e)].join("")]:[[r,c(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(i,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?i:null===r?[...i,c(t,e)]:[...i,[c(t,e),"=",c(r,e)].join("")]}}(t),n={};for(let t of Object.keys(e))i(t)||(n[t]=e[t]);let a=Object.keys(n);return!1!==t.sort&&a.sort(t.sort),a.map(i=>{let n=e[i];return void 0===n?"":null===n?c(i,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?c(i,t)+"[]":n.reduce(r(i),[]).join("&"):c(i,t)+"="+c(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[i,r]=a(e,"#");return Object.assign({url:i.split("?")[0]||"",query:f(h(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:u(r,t)}:{})},t.stringifyUrl=(e,i)=>{var r;let n,a;i=Object.assign({encode:!0,strict:!0,[s]:!0},i);let o=d(e.url).split("?")[0]||"",l=t.extract(e.url),u=Object.assign(t.parse(l,{sort:!1}),e.query),h=t.stringify(u,i);h&&(h=`?${h}`);let p=(r=e.url,n="",-1!==(a=r.indexOf("#"))&&(n=r.slice(a)),n);return e.fragmentIdentifier&&(p=`#${i[s]?c(e.fragmentIdentifier,i):e.fragmentIdentifier}`),`${o}${h}${p}`},t.pick=(e,i,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[s]:!1},r);let{url:n,query:a,fragmentIdentifier:l}=t.parseUrl(e,r);return t.stringifyUrl({url:n,query:o(a,i),fragmentIdentifier:l},r)},t.exclude=(e,i,r)=>{let n=Array.isArray(i)?e=>!i.includes(e):(e,t)=>!i(e,t);return t.pick(e,n,r)}},68566:(e,t,i)=>{"use strict";i.d(t,{mN:()=>E,AH:()=>l,W3:()=>y,Ec:()=>x});let r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}let l=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,a),c=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,i="";for(let t of e.cssRules)i+=t.cssText;return new s("string"==typeof(t=i)?t:t+"",void 0,a)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,w=globalThis,m=w.trustedTypes,b=m?m.emptyScript:"",v=w.reactiveElementPolyfillSupport,y={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!u(e,t),C={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...p(e),...f(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(c(i));else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),n=r.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=r;let a=n.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){let a=this.constructor;if(!1===r&&(n=this[e]),!(((i??=a.getPropertyOptions(e)).hasChanged??x)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E.elementProperties=new Map,E.finalized=new Map,v?.({ReactiveElement:E}),(w.reactiveElementVersions??=[]).push("2.1.2")},69585:(e,t)=>{let i=new Uint8Array(512),r=new Uint8Array(256),n=1;for(let e=0;e<255;e++)i[e]=n,r[n]=e,256&(n<<=1)&&(n^=285);for(let e=255;e<512;e++)i[e]=i[e-255];t.log=function(e){if(e<1)throw Error("log("+e+")");return r[e]},t.exp=function(e){return i[e]},t.mul=function(e,t){return 0===e||0===t?0:i[r[e]+r[t]]}},69960:(e,t,i)=>{"use strict";i.d(t,{T:()=>n});var r=i(94747);async function n(e){let t=await e.request({method:"eth_chainId"});return(0,r.ME)(t)}},70378:(e,t,i)=>{"use strict";i.d(t,{eL:()=>r,pj:()=>a,sz:()=>n});let r={gwei:9,wei:18},n={ether:-9,wei:9},a={ether:-18,gwei:-9}},70536:(e,t,i)=>{"use strict";i.d(t,{c:()=>a});var r=i(70378),n=i(49235);function a(e,t="wei"){return(0,n.J)(e,r.eL[t])}},71781:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},73049:(e,t,i)=>{"use strict";i.d(t,{bE:()=>eG,ny:()=>ik,Lp:()=>eY,Xw:()=>t_,Wx:()=>tb,K3:()=>tv,x0:()=>e2,Yc:()=>e3,ov:()=>eX,iu:()=>e4,w:()=>e5,hE:()=>tA,gO:()=>tC,jU:()=>tf,AD:()=>tx,QJ:()=>tD,TZ:()=>eQ,tw:()=>eJ,Zz:()=>eq,lF:()=>tp,w4:()=>th,jT:()=>tP,Gu:()=>t1,a:()=>tR,n6:()=>tI,aZ:()=>tZ,Hj:()=>t2,n3:()=>tk,EN:()=>e0,AL:()=>e1,Bd:()=>tu,nW:()=>tY,Xq:()=>ix,_d:()=>tS,Ll:()=>tl,sc:()=>i_,CT:()=>it,lV:()=>tc,HN:()=>t7,mr:()=>ii,V7:()=>e7,b0:()=>t4,OP:()=>t5,tk:()=>ir,X3:()=>ip,FR:()=>im,Al:()=>id,Fi:()=>il,tL:()=>ib,z2:()=>iy,oK:()=>iv,aF:()=>t3,Te:()=>ih,ku:()=>ic,V9:()=>iu,iV:()=>ig,Hb:()=>iE,es:()=>is,M8:()=>iw,Qh:()=>t6,AY:()=>ie,h0:()=>tw,TR:()=>t$,bR:()=>tJ,PU:()=>tm,_Y:()=>eF,c8:()=>tE,ko:()=>tQ,wY:()=>tU,bb:()=>iA,C5:()=>e6,Aw:()=>e8});var r={};i.r(r),i.d(r,{identity:()=>M});var n={};i.r(n),i.d(n,{base2:()=>j});var a={};i.r(a),i.d(a,{base8:()=>U});var o={};i.r(o),i.d(o,{base10:()=>D});var s={};i.r(s),i.d(s,{base16:()=>L,base16upper:()=>z});var l={};i.r(l),i.d(l,{base32:()=>W,base32hex:()=>H,base32hexpad:()=>G,base32hexpadupper:()=>V,base32hexupper:()=>K,base32pad:()=>F,base32padupper:()=>q,base32upper:()=>B,base32z:()=>Z});var c={};i.r(c),i.d(c,{base36:()=>Y,base36upper:()=>Q});var u={};i.r(u),i.d(u,{base58btc:()=>J,base58flickr:()=>X});var d={};i.r(d),i.d(d,{base64:()=>ee,base64pad:()=>et,base64url:()=>ei,base64urlpad:()=>er});var h={};i.r(h),i.d(h,{base256emoji:()=>es});var p={};i.r(p),i.d(p,{sha256:()=>ew,sha512:()=>em});var f={};i.r(f),i.d(f,{identity:()=>eb});var g={};i.r(g),i.d(g,{code:()=>ey,decode:()=>eC,encode:()=>ex,name:()=>ev});var w={};i.r(w),i.d(w,{code:()=>eA,decode:()=>ek,encode:()=>e$,name:()=>eS});var m=i(47131),b=i(36483),v=i(62355),y=i(47011),x=i(6373);function C(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function E(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?C(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function _(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let i=E(t),r=0;for(let t of e)i.set(t,r),r+=t.length;return C(i)}let S=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var i=new Uint8Array(256),r=0;r<i.length;r++)i[r]=255;for(var n=0;n<e.length;n++){var a=e.charAt(n),o=a.charCodeAt(0);if(255!==i[o])throw TypeError(a+" is ambiguous");i[o]=n}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var r=0,n=0;e[t]===l;)r++,t++;for(var a=(e.length-t)*c+1>>>0,o=new Uint8Array(a);e[t];){var u=i[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=a-1;(0!==u||d<n)&&-1!==h;h--,d++)u+=s*o[h]>>>0,o[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");n=d,t++}if(" "!==e[t]){for(var p=a-n;p!==a&&0===o[p];)p++;for(var f=new Uint8Array(r+(a-p)),g=r;p!==a;)f[g++]=o[p++];return f}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var i=0,r=0,n=0,a=t.length;n!==a&&0===t[n];)n++,i++;for(var o=(a-n)*u+1>>>0,c=new Uint8Array(o);n!==a;){for(var d=t[n],h=0,p=o-1;(0!==d||h<r)&&-1!==p;p--,h++)d+=256*c[p]>>>0,c[p]=d%s>>>0,d=d/s>>>0;if(0!==d)throw Error("Non-zero carry");r=h,n++}for(var f=o-r;f!==o&&0===c[f];)f++;for(var g=l.repeat(i);f<o;++f)g+=e.charAt(c[f]);return g},decodeUnsafe:d,decode:function(e){var i=d(e);if(i)return i;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let A=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")};class ${constructor(e,t,i){this.name=e,this.prefix=t,this.baseEncode=i}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class k{constructor(e,t,i){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=i}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return I(this,e)}}class P{constructor(e){this.decoders=e}or(e){return I(this,e)}decode(e){let t=e[0],i=this.decoders[t];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let I=(e,t)=>new P({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class R{constructor(e,t,i,r){this.name=e,this.prefix=t,this.baseEncode=i,this.baseDecode=r,this.encoder=new $(e,t,i),this.decoder=new k(e,t,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let T=({name:e,prefix:t,encode:i,decode:r})=>new R(e,t,i,r),O=({prefix:e,name:t,alphabet:i})=>{let{encode:r,decode:n}=S(i,t);return T({prefix:e,name:t,encode:r,decode:e=>A(n(e))})},N=({name:e,prefix:t,bitsPerChar:i,alphabet:r})=>T({prefix:t,name:e,encode:e=>((e,t,i)=>{let r="="===t[t.length-1],n=(1<<i)-1,a="",o=0,s=0;for(let r=0;r<e.length;++r)for(s=s<<8|e[r],o+=8;o>i;)o-=i,a+=t[n&s>>o];if(o&&(a+=t[n&s<<i-o]),r)for(;a.length*i&7;)a+="=";return a})(e,r,i),decode:t=>((e,t,i,r)=>{let n={};for(let e=0;e<t.length;++e)n[t[e]]=e;let a=e.length;for(;"="===e[a-1];)--a;let o=new Uint8Array(a*i/8|0),s=0,l=0,c=0;for(let t=0;t<a;++t){let a=n[e[t]];if(void 0===a)throw SyntaxError(`Non-${r} character`);l=l<<i|a,(s+=i)>=8&&(s-=8,o[c++]=255&l>>s)}if(s>=i||255&l<<8-s)throw SyntaxError("Unexpected end of data");return o})(t,r,i,e)}),M=T({prefix:"\0",name:"identity",encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)}),j=N({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),U=N({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),D=O({prefix:"9",name:"base10",alphabet:"0123456789"}),L=N({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),z=N({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),W=N({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),B=N({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),F=N({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),q=N({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),H=N({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),K=N({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),G=N({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),V=N({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Z=N({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),Y=O({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Q=O({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),J=O({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),X=O({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ee=N({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),et=N({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),ei=N({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),er=N({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),en=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),ea=en.reduce((e,t,i)=>(e[i]=t,e),[]),eo=en.reduce((e,t,i)=>(e[t.codePointAt(0)]=i,e),[]),es=T({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=ea[t],"")},decode:function(e){let t=[];for(let i of e){let e=eo[i.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${i}`);t.push(e)}return new Uint8Array(t)}});function el(e,t,i){t=t||[];for(var r=i=i||0;e>=0x80000000;)t[i++]=255&e|128,e/=128;for(;-128&e;)t[i++]=255&e|128,e>>>=7;return t[i]=0|e,el.bytes=i-r+1,t}let ec=function(e){return e<128?1:e<16384?2:e<2097152?3:e<0x10000000?4:e<0x800000000?5:e<0x40000000000?6:e<0x2000000000000?7:e<0x100000000000000?8:e<0x8000000000000000?9:10},eu=(e,t,i=0)=>(el(e,t,i),t),ed=(e,t)=>{let i=t.byteLength,r=ec(e),n=r+ec(i),a=new Uint8Array(n+i);return eu(e,a,0),eu(i,a,r),a.set(t,n),new eh(e,i,t,a)};class eh{constructor(e,t,i,r){this.code=e,this.size=t,this.digest=i,this.bytes=r}}let ep=({name:e,code:t,encode:i})=>new ef(e,t,i);class ef{constructor(e,t,i){this.name=e,this.code=t,this.encode=i}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?ed(this.code,t):t.then(e=>ed(this.code,e))}throw Error("Unknown type, must be binary type")}}let eg=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),ew=ep({name:"sha2-256",code:18,encode:eg("SHA-256")}),em=ep({name:"sha2-512",code:19,encode:eg("SHA-512")}),eb={code:0,name:"identity",encode:A,digest:e=>ed(0,A(e))},ev="raw",ey=85,ex=e=>A(e),eC=e=>A(e),eE=new TextEncoder,e_=new TextDecoder,eS="json",eA=512,e$=e=>eE.encode(JSON.stringify(e)),ek=e=>JSON.parse(e_.decode(e));Symbol.for("nodejs.util.inspect.custom"),Symbol.for("@ipld/js-cid/CID");let eP={...r,...n,...a,...o,...s,...l,...c,...u,...d,...h};function eI(e,t,i,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:i},decoder:{decode:r}}}({...p,...f});let eR=eI("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),eT=eI("ascii","a",e=>{let t="a";for(let i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return t},e=>{let t=E((e=e.substring(1)).length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}),eO={utf8:eR,"utf-8":eR,hex:eP.base16,latin1:eT,ascii:eT,binary:eT,...eP};function eN(e,t="utf8"){let i=eO[t];if(!i)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?C(globalThis.Buffer.from(e,"utf-8")):i.decoder.decode(`${i.prefix}${e}`)}function eM(e,t="utf8"){let i=eO[t];if(!i)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):i.encoder.encode(e).substring(1)}var ej=i(87391),eU=i(68939),eD=i(57247),eL=i(3536),ez=i(66220),eW=i(11167),eB=i(87358);function eF(e){let[t,i]=e.split(":");return{namespace:t,reference:i}}function eq(e,t=[]){let i=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;let n=e[r];i.push(...n.accounts)}),i}function eH(e,t){return e.includes(":")?[e]:t.chains||[]}let eK="base10",eG="base16",eV="base64pad",eZ="utf8",eY=1;function eQ(){let e=x.TZ();return{privateKey:eM(e.secretKey,eG),publicKey:eM(e.publicKey,eG)}}function eJ(){return eM((0,v.randomBytes)(32),eG)}function eX(e,t){let i=x.Tc(eN(e,eG),eN(t,eG),!0);return eM(new b.i(y.aD,i).expand(32),eG)}function e0(e){return eM((0,y.tW)(eN(e,eG)),eG)}function e1(e){return eM((0,y.tW)(eN(e,eZ)),eG)}function e2(e){return Number(eM(e,eK))}function e5(e){let t=(n="u">typeof e.type?e.type:0,eN(`${n}`,eK));if(e2(t)===eY&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let i="u">typeof e.senderPublicKey?eN(e.senderPublicKey,eG):void 0,r="u">typeof e.iv?eN(e.iv,eG):(0,v.randomBytes)(12);var n,a={type:t,sealed:new m.g6(eN(e.symKey,eG)).seal(r,eN(e.message,eZ)),iv:r,senderPublicKey:i};if(e2(a.type)===eY){if(typeof a.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return eM(_([a.type,a.senderPublicKey,a.iv,a.sealed]),eV)}return eM(_([a.type,a.iv,a.sealed]),eV)}function e3(e){let t=new m.g6(eN(e.symKey,eG)),{sealed:i,iv:r}=e4(e.encoded),n=t.open(r,i);if(null===n)throw Error("Failed to decrypt");return eM(n,eZ)}function e4(e){let t=eN(e,eV),i=t.slice(0,1);if(e2(i)===eY){let e=t.slice(1,33),r=t.slice(33,45);return{type:i,sealed:t.slice(45),iv:r,senderPublicKey:e}}let r=t.slice(1,13);return{type:i,sealed:t.slice(13),iv:r}}function e6(e,t){let i=e4(e);return e8({type:e2(i.type),senderPublicKey:"u">typeof i.senderPublicKey?eM(i.senderPublicKey,eG):void 0,receiverPublicKey:t?.receiverPublicKey})}function e8(e){let t=e?.type||0;if(t===eY){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function e7(e){return e.type===eY&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var e9=Object.defineProperty,te=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable,tr=(e,t,i)=>t in e?e9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,tn=(e,t)=>{for(var i in t||(t={}))tt.call(t,i)&&tr(e,i,t[i]);if(te)for(var i of te(t))ti.call(t,i)&&tr(e,i,t[i]);return e};let ta="react-native",to="node",ts="browser";function tl(){return"u">typeof eB&&"u">typeof eB.versions&&"u">typeof eB.versions.node}function tc(){return!(0,eD.getDocument)()&&!!(0,eD.getNavigator)()&&"ReactNative"===navigator.product}function tu(){return!tl()&&!!(0,eD.getNavigator)()&&!!(0,eD.getDocument)()}function td(){return tc()?ta:tl()?to:tu()?ts:"unknown"}function th(){var e;try{return tc()&&"u">typeof i.g&&"u">typeof(null==i.g?void 0:i.g.Application)?null==(e=i.g.Application)?void 0:e.applicationId:void 0}catch{return}}function tp(){return(0,eL.g)()||{name:"",description:"",url:"",icons:[""]}}function tf({protocol:e,version:t,relayUrl:r,sdkVersion:n,auth:a,projectId:o,useOnCloseEvent:s,bundleId:l}){var c,u,d;let h,p,f,g,w=r.split("?"),m=(p=function(){if(td()===ta&&"u">typeof i.g&&"u">typeof(null==i.g?void 0:i.g.Platform)){let{OS:e,Version:t}=i.g.Platform;return[e,t].join("-")}let e=(0,ej.o0)();if(null===e)return"unknown";let t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[t,e.name,e.version].join("-"):[t,e.version].join("-")}(),f=(h=td())===ts?[h,(null==(c=(0,eD.getLocation)())?void 0:c.host)||"unknown"].join(":"):h,[[e,t].join("-"),["js",n].join("-"),p,f].join("/")),b=(u=w[1]||"",d={auth:a,ua:m,projectId:o,useOnCloseEvent:s||void 0,origin:l||void 0},g=tn(tn({},g=ez.parse(u)),d),u=ez.stringify(g));return w[0]+"?"+b}function tg(e,t){return e.filter(e=>t.includes(e)).length===e.length}function tw(e){return Object.fromEntries(e.entries())}function tm(e){return new Map(Object.entries(e))}function tb(e=eU.FIVE_MINUTES,t){let i,r,n,a=(0,eU.toMiliseconds)(e||eU.FIVE_MINUTES);return{resolve:e=>{n&&i&&(clearTimeout(n),i(e))},reject:e=>{n&&r&&(clearTimeout(n),r(e))},done:()=>new Promise((e,o)=>{n=setTimeout(()=>{o(Error(t))},a),i=e,r=o})}}function tv(e,t,i){return new Promise(async(r,n)=>{let a=setTimeout(()=>n(Error(i)),t);try{let t=await e;r(t)}catch(e){n(e)}clearTimeout(a)})}function ty(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function tx(e){return ty("topic",e)}function tC(e){return ty("id",e)}function tE(e){let[t,i]=e.split(":"),r={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof i)r.topic=i;else if("id"===t&&Number.isInteger(Number(i)))r.id=Number(i);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);return r}function t_(e,t){return(0,eU.fromMiliseconds)((t||Date.now())+(0,eU.toMiliseconds)(e))}function tS(e){return Date.now()>=(0,eU.toMiliseconds)(e)}function tA(e,t){return`${e}${t?`:${t}`:""}`}function t$(e=[],t=[]){return[...new Set([...e,...t])]}async function tk({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;let n="string"==typeof r?JSON.parse(r):r,a=n?.href;if("string"!=typeof a)return;a.endsWith("/")&&(a=a.slice(0,-1));let o=`${a}/wc?requestId=${e}&sessionTopic=${t}`,s=td();s===ts?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===ta&&"u">typeof(null==i.g?void 0:i.g.Linking)&&await i.g.Linking.openURL(o)}catch(e){console.error(e)}}async function tP(e,t){try{return await e.getItem(t)||(tu()?localStorage.getItem(t):void 0)}catch(e){console.error(e)}}function tI(e){return e?.relay||{protocol:"irn"}}function tR(e){let t=eW.CG[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var tT=Object.defineProperty,tO=Object.getOwnPropertySymbols,tN=Object.prototype.hasOwnProperty,tM=Object.prototype.propertyIsEnumerable,tj=(e,t,i)=>t in e?tT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;function tU(e){var t;let i=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),r=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,i),a=e.substring(i+1,r).split("@"),o="u">typeof r?e.substring(r):"",s=ez.parse(o);return{protocol:n,topic:(t=a[0]).startsWith("//")?t.substring(2):t,version:parseInt(a[1],10),symKey:s.symKey,relay:function(e,t="-"){let i={},r="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(r)){let n=t.replace(r,""),a=e[t];i[n]=a}}),i}(s)}}function tD(e){return`${e.protocol}:${e.topic}@${e.version}?`+ez.stringify(((e,t)=>{for(var i in t||(t={}))tN.call(t,i)&&tj(e,i,t[i]);if(tO)for(var i of tO(t))tM.call(t,i)&&tj(e,i,t[i]);return e})({symKey:e.symKey},function(e,t="-"){let i={};return Object.keys(e).forEach(r=>{e[r]&&(i["relay"+t+r]=e[r])}),i}(e.relay)))}var tL=Object.defineProperty,tz=Object.defineProperties,tW=Object.getOwnPropertyDescriptors,tB=Object.getOwnPropertySymbols,tF=Object.prototype.hasOwnProperty,tq=Object.prototype.propertyIsEnumerable,tH=(e,t,i)=>t in e?tL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,tK=(e,t)=>{for(var i in t||(t={}))tF.call(t,i)&&tH(e,i,t[i]);if(tB)for(var i of tB(t))tq.call(t,i)&&tH(e,i,t[i]);return e},tG=(e,t)=>tz(e,tW(t));function tV(e){let t=[];return e.forEach(e=>{let[i,r]=e.split(":");t.push(`${i}:${r}`)}),t}function tZ(e,t){let i=il(e,t);if(i)throw Error(i.message);let r={};for(let[t,i]of Object.entries(e))r[t]={methods:i.methods,events:i.events,chains:i.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return r}function tY(e){return e.includes(":")}function tQ(e){return tY(e)?e.split(":")[0]:e}function tJ(e){var t,i,r;let n={};if(!t3(e))return n;for(let[a,o]of Object.entries(e)){let e=tY(a)?[a]:o.chains,s=o.methods||[],l=o.events||[],c=tQ(a);n[c]=tG(tK({},n[c]),{chains:t$(e,null==(t=n[c])?void 0:t.chains),methods:t$(s,null==(i=n[c])?void 0:i.methods),events:t$(l,null==(r=n[c])?void 0:r.events)})}return n}let tX={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},t0={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function t1(e,t){let{message:i,code:r}=t0[e];return{message:t?`${i} ${t}`:i,code:r}}function t2(e,t){let{message:i,code:r}=tX[e];return{message:t?`${i} ${t}`:i,code:r}}function t5(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function t3(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function t4(e){return typeof e>"u"}function t6(e,t){return!!(t&&t4(e))||"string"==typeof e&&!!e.trim().length}function t8(e,t){return!!(t&&t4(e))||"number"==typeof e&&!isNaN(e)}function t7(e,t){let{requiredNamespaces:i}=t,r=Object.keys(e.namespaces),n=Object.keys(i),a=!0;return!!tg(n,r)&&(r.forEach(t=>{let{accounts:r,methods:n,events:o}=e.namespaces[t],s=tV(r),l=i[t];tg(eH(t,l),s)&&tg(l.methods,n)&&tg(l.events,o)||(a=!1)}),a)}function t9(e){return!!(t6(e,!1)&&e.includes(":"))&&2===e.split(":").length}function ie(e){if(t6(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function it(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function ii(e){return e?.topic}function ir(e,t){let i=null;return t6(e?.publicKey,!1)||(i=t1("MISSING_OR_INVALID",`${t} controller public key should be a string`)),i}function ia(e){let t=!0;return t5(e)?e.length&&(t=e.every(e=>t6(e,!1))):t=!1,t}function io(e,t){let i=null;return Object.values(e).forEach(e=>{var r;let n;if(i)return;let a=(r=`${t}, namespace`,n=null,ia(e?.methods)?ia(e?.events)||(n=t2("UNSUPPORTED_EVENTS",`${r}, events should be an array of strings or empty array for no events`)):n=t2("UNSUPPORTED_METHODS",`${r}, methods should be an array of strings or empty array for no methods`),n);a&&(i=a)}),i}function is(e,t,i){let r=null;if(e&&t3(e)){let n,a=io(e,t);a&&(r=a);let o=(n=null,Object.entries(e).forEach(([e,r])=>{var a,o;let s;if(n)return;let l=(a=eH(e,r),o=`${t} ${i}`,s=null,t5(a)&&a.length?a.forEach(e=>{s||t9(e)||(s=t2("UNSUPPORTED_CHAINS",`${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):t9(e)||(s=t2("UNSUPPORTED_CHAINS",`${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(n=l)}),n);o&&(r=o)}else r=t1("MISSING_OR_INVALID",`${t}, ${i} should be an object with data`);return r}function il(e,t){let i=null;if(e&&t3(e)){let r,n=io(e,t);n&&(i=n);let a=(r=null,Object.values(e).forEach(e=>{var i,n;let a;if(r)return;let o=(i=e?.accounts,n=`${t} namespace`,a=null,t5(i)?i.forEach(e=>{a||function(e){if(t6(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&t9(e)}}return!1}(e)||(a=t2("UNSUPPORTED_ACCOUNTS",`${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):a=t2("UNSUPPORTED_ACCOUNTS",`${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),a);o&&(r=o)}),r);a&&(i=a)}else i=t1("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return i}function ic(e){return t6(e.protocol,!0)}function iu(e,t){let i=!1;return t&&!e?i=!0:e&&t5(e)&&e.length&&e.forEach(e=>{i=ic(e)}),i}function id(e){return"number"==typeof e}function ih(e){return"u">typeof e}function ip(e){return!(!e||"object"!=typeof e||!e.code||!t8(e.code,!1)||!e.message||!t6(e.message,!1))}function ig(e){return!(t4(e)||!t6(e.method,!1))}function iw(e){return!(t4(e)||t4(e.result)&&t4(e.error)||!t8(e.id,!1)||!t6(e.jsonrpc,!1))}function im(e){return!(t4(e)||!t6(e.name,!1))}function ib(e,t){let i;return!(!t9(t)||!(i=[],Object.values(e).forEach(e=>{i.push(...tV(e.accounts))}),i).includes(t))}function iv(e,t,i){let r;return!!t6(i,!1)&&(r=[],Object.values(e).forEach(e=>{tV(e.accounts).includes(t)&&r.push(...e.methods)}),r).includes(i)}function iy(e,t,i){let r;return!!t6(i,!1)&&(r=[],Object.values(e).forEach(e=>{tV(e.accounts).includes(t)&&r.push(...e.events)}),r).includes(i)}function ix(e,t,i){var r,n;let a,o,s=null,l=(a={},Object.keys(r=e).forEach(e=>{var t;e.includes(":")?a[e]=r[e]:null==(t=r[e].chains)||t.forEach(t=>{a[t]={methods:r[e].methods,events:r[e].events}})}),a),c=(o={},Object.keys(n=t).forEach(e=>{if(e.includes(":"))o[e]=n[e];else{let t=tV(n[e].accounts);t?.forEach(t=>{o[t]={accounts:n[e].accounts.filter(e=>e.includes(`${t}:`)),methods:n[e].methods,events:n[e].events}})}}),o),u=Object.keys(l),d=Object.keys(c),h=iC(Object.keys(e)),p=iC(Object.keys(t)),f=h.filter(e=>!p.includes(e));return f.length&&(s=t1("NON_CONFORMING_NAMESPACES",`${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(t).toString()}`)),tg(u,d)||(s=t1("NON_CONFORMING_NAMESPACES",`${i} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${d.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||s)return;let r=tV(t[e].accounts);r.includes(e)||(s=t1("NON_CONFORMING_NAMESPACES",`${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${r.toString()}`))}),u.forEach(e=>{s||(tg(l[e].methods,c[e].methods)?tg(l[e].events,c[e].events)||(s=t1("NON_CONFORMING_NAMESPACES",`${i} namespaces events don't satisfy namespace events for ${e}`)):s=t1("NON_CONFORMING_NAMESPACES",`${i} namespaces methods don't satisfy namespace methods for ${e}`))}),s}function iC(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function iE(e,t){return t8(e,!1)&&e<=t.max&&e>=t.min}function i_(){let e=td();return new Promise(t=>{switch(e){case ts:t(tu()&&navigator?.onLine);break;case ta:t(iS());break;default:t(!0)}})}async function iS(){if(tc()&&"u">typeof i.g&&null!=i.g&&i.g.NetInfo){let e=await (null==i.g?void 0:i.g.NetInfo.fetch());return e?.isConnected}return!0}function iA(e){var t,r;switch(td()){case ts:t=e,!tc()&&tu()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)));break;case ta:r=e,tc()&&"u">typeof i.g&&null!=i.g&&i.g.NetInfo&&i.g?.NetInfo.addEventListener(e=>r(e?.isConnected))}}let i$={};class ik{static get(e){return i$[e]}static set(e,t){i$[e]=t}static delete(e){delete i$[e]}}},73062:(e,t,i)=>{"use strict";i.d(t,{Q:()=>m});var r=i(51011),n=i(6593),a=i(84428),o=i(70536),s=i(22160),l=i(23755),c=i(96002);class u extends l.C{constructor(e,{account:t,docsPath:i,chain:r,data:n,gas:a,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){const g=(0,c.aO)({from:t?.address,to:p,value:void 0!==f&&`${(0,o.c)(f)} ${r?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:a,gasPrice:void 0!==l&&`${(0,s.Q)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.Q)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,s.Q)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var d=i(4174),h=i(31750),p=i(89649),f=i(58637),g=i(97948),w=i(52546);async function m(e,t){let i=t.account??e.account;if(!i)throw new n.T({docsPath:"/docs/actions/public/estimateGas"});let o=(0,r.J)(i);try{let{accessList:i,blockNumber:r,blockTag:n,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:m,value:b,...v}="local"===o.type?await (0,w.f)(e,t):t,y=(r?(0,a.cK)(r):void 0)||n;(0,g.c)(t);let x=e.chain?.formatters?.transactionRequest?.format,C=(x||f.Bv)({...(0,p.o)(v,{format:x}),from:o.address,accessList:i,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:m,value:b}),E=await e.request({method:"eth_estimateGas",params:y?[C,y]:[C]});return BigInt(E)}catch(i){throw function(e,{docsPath:t,...i}){let r;return new u((r=(0,h.l)(e,i))instanceof d.RM?e:r,{docsPath:t,...i})}(i,{...t,account:o,chain:e.chain})}}},73320:(e,t,i)=>{"use strict";i.d(t,{e:()=>s});var r=i(80044),n=i(6809),a=i(42330);let o="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:i,data:l}){let c=e[0];if(i&&!(c=(0,a.iY)({abi:e,args:t,name:i})))throw new r.Iz(i,{docsPath:o});if("function"!==c.type)throw new r.Iz(void 0,{docsPath:o});if(!c.outputs)throw new r.MR(c.name,{docsPath:o});let u=(0,n.n)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},73672:(e,t,i)=>{"use strict";i.d(t,{c:()=>o});var r=i(22106),n=i(19911),a=i(10824);let o=e=>{let t;return t=(0,n.d)(e),(0,a.S)((0,r.ZJ)(t))}},74361:(e,t,i)=>{let r=i(826).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,i=r(e),n=145===i?26:2*Math.ceil((i-13)/(2*t-2)),a=[i-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-n;return a.push(6),a.reverse()},t.getPositions=function(e){let i=[],r=t.getRowColCoords(e),n=r.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&i.push([r[e],r[t]]);return i}},74767:(e,t,i)=>{"use strict";i.d(t,{o:()=>n});var r=i(11789);function n({key:e,name:t,request:i,retryCount:a=3,retryDelay:o=150,timeout:s,type:l},c){return{config:{key:e,name:t,request:i,retryCount:a,retryDelay:o,timeout:s,type:l},request:(0,r.m)(i,{retryCount:a,retryDelay:o}),value:c}}},75411:(e,t,i)=>{"use strict";i.d(t,{M:()=>n});var r=i(4879);function n({blockNumber:e,chain:t,contract:i}){let a=t?.contracts?.[i];if(!a)throw new r.rj({chain:t,contract:{name:i}});if(e&&a.blockCreated&&a.blockCreated>e)throw new r.rj({blockNumber:e,chain:t,contract:{name:i,blockCreated:a.blockCreated}});return a.address}},76429:(e,t,i)=>{"use strict";function r(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let i of e)t+=i.length;let i=new Uint8Array(t),r=0;for(let t of e)i.set(t,r),r+=t.length;return i}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}i.d(t,{aP:()=>n,xW:()=>r})},78568:(e,t,i)=>{"use strict";i.d(t,{BX:()=>h,KR:()=>g,P9:()=>f,B1:()=>p}),Symbol();let r=Symbol(),n=Object.getPrototypeOf,a=new WeakMap,o=e=>{let t;return(t=e)&&(a.has(t)?a.get(t):n(t)===Object.prototype||n(t)===Array.prototype)&&e[r]||null},s=(e,t=!0)=>{a.set(e,t)},l=e=>"object"==typeof e&&null!==e,c=new WeakMap,u=new WeakSet,[d]=((e=Object.is,t=(e,t)=>new Proxy(e,t),i=e=>l(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,a=(e,t,i=r)=>{let o=n.get(e);if((null==o?void 0:o[0])===t)return o[1];let l=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return s(l,!0),n.set(e,[t,l]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(l,t))return;let r=Reflect.get(e,t),n={value:r,enumerable:!0,configurable:!0};if(u.has(r))s(r,!1);else if(r instanceof Promise)delete n.value,n.get=()=>i(r);else if(c.has(r)){let[e,t]=c.get(r);n.value=a(e,t(),i)}Object.defineProperty(l,t,n)}),Object.preventExtensions(l)},d=new WeakMap,h=[1,1],p=r=>{if(!l(r))throw Error("object required");let n=d.get(r);if(n)return n;let s=h[0],f=new Set,g=(e,t=++h[0])=>{s!==t&&(s=t,f.forEach(i=>i(e,t)))},w=h[1],m=(e=++h[1])=>(w===e||f.size||(w=e,v.forEach(([t])=>{let i=t[1](e);i>s&&(s=i)})),s),b=e=>(t,i)=>{let r=[...t];r[1]=[e,...r[1]],g(r,i)},v=new Map,y=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(f.size){let i=t[3](b(e));v.set(e,[t,i])}else v.set(e,[t])},x=e=>{var t;let i=v.get(e);i&&(v.delete(e),null==(t=i[1])||t.call(i))},C=e=>{f.add(e),1===f.size&&v.forEach(([e,t],i)=>{if(t)throw Error("remove already exists");let r=e[3](b(i));v.set(i,[e,r])});let t=()=>{f.delete(e),0===f.size&&v.forEach(([e,t],i)=>{t&&(t(),v.set(i,[e]))})};return t},E=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),_={deleteProperty(e,t){let i=Reflect.get(e,t);x(t);let r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],i]),r},set(t,r,n,a){let s=Reflect.has(t,r),h=Reflect.get(t,r,a);if(s&&(e(h,n)||d.has(n)&&e(h,d.get(n))))return!0;x(r),l(n)&&(n=o(n)||n);let f=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[r],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[r],e])});else{!c.has(n)&&i(n)&&(f=p(n));let e=!u.has(f)&&c.get(f);e&&y(r,e)}return Reflect.set(t,r,f,a),g(["set",[r],n,h]),!0}},S=t(E,_);d.set(r,S);let A=[E,m,a,C];return c.set(S,A),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(S[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),S})=>[p,c,u,e,t,i,r,n,a,d,h])();function h(e={}){return d(e)}function p(e,t,i){let r,n=c.get(e);n||console.warn("Please use proxy object");let a=[],o=n[3],s=!1,l=o(e=>{(a.push(e),i)?t(a.splice(0)):r||(r=Promise.resolve().then(()=>{r=void 0,s&&t(a.splice(0))}))});return s=!0,()=>{s=!1,l()}}function f(e,t){let i=c.get(e);i||console.warn("Please use proxy object");let[r,n,a]=i;return a(r,n(),t)}function g(e){return u.add(e),e}},78818:(e,t,i)=>{let r=i(33271);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let i=r.mod(t,this.genPoly),n=this.degree-i.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(i,n),e}return i},e.exports=n},78999:(e,t,i)=>{let r=i(826),n=i(39294),a=i(34155),o=i(80570),s=i(81982),l=r.getBCHDigit(7973);function c(e,t){return o.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,i){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===i&&(i=o.BYTE);let a=(r.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(i===o.MIXED)return a;let l=a-c(i,e);switch(i){case o.NUMERIC:return Math.floor(l/10*3);case o.ALPHANUMERIC:return Math.floor(l/11*2);case o.KANJI:return Math.floor(l/13);case o.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,i){let r,n=a.from(i,a.M);if(Array.isArray(e)){if(e.length>1){for(let i=1;i<=40;i++)if(function(e,t){let i=0;return e.forEach(function(e){let r=c(e.mode,t);i+=r+e.getBitsLength()}),i}(e,i)<=t.getCapacity(i,n,o.MIXED))return i;return}if(0===e.length)return 1;r=e[0]}else r=e;return function(e,i,r){for(let n=1;n<=40;n++)if(i<=t.getCapacity(n,r,e))return n}(r.mode,r.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;r.getBCHDigit(t)-l>=0;)t^=7973<<r.getBCHDigit(t)-l;return e<<12|t}},79829:(e,t,i)=>{"use strict";i.d(t,{I:()=>n});var r=i(74767);function n(e,t={}){let{key:i="custom",name:a="Custom Provider",retryDelay:o}=t;return({retryCount:n})=>(0,r.o)({key:i,name:a,request:e.request.bind(e),retryCount:t.retryCount??n,retryDelay:o,type:"custom"})}},80044:(e,t,i)=>{"use strict";i.d(t,{BI:()=>y,Iy:()=>l,Iz:()=>m,MR:()=>b,M_:()=>w,Nc:()=>u,O:()=>c,Wq:()=>p,YE:()=>h,YF:()=>s,YW:()=>o,_z:()=>f,d_:()=>A,dm:()=>S,fo:()=>x,gH:()=>d,j:()=>_,kE:()=>g,l3:()=>C,nK:()=>E,nM:()=>v});var r=i(24029),n=i(45696),a=i(23755);class o extends a.C{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends a.C{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}a.C;class l extends a.C{constructor({data:e,params:t,size:i}){super(`Data size of ${i} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,r.A)(t,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=i}}class c extends a.C{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends a.C{constructor({expectedLength:e,givenLength:t,type:i}){super(`ABI encoding array length mismatch for type ${i}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends a.C{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.E)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends a.C{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}a.C,a.C;class p extends a.C{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class f extends a.C{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends a.C{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class w extends a.C{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class m extends a.C{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class b extends a.C{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}a.C;class v extends a.C{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,r.B)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,r.B)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class y extends a.C{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class x extends a.C{constructor({abiItem:e,data:t,params:i,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,r.A)(i,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=i,this.size=n}}class C extends a.C{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.B)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class E extends a.C{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class _ extends a.C{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class S extends a.C{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class A extends a.C{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}a.C},80570:(e,t,i)=>{let r=i(81982),n=i(54028);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!r.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return i}}},80771:(e,t,i)=>{"use strict";i.d(t,{y:()=>a});var r=i(94747),n=i(84428);async function a(e,{address:t,blockTag:i="latest",blockNumber:o}){let s=await e.request({method:"eth_getTransactionCount",params:[t,o?(0,n.cK)(o):i]});return(0,r.ME)(s)}},80918:e=>{function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,i,r){let n=e*this.size+t;this.data[n]=i,r&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},81693:(e,t,i)=>{"use strict";i.d(t,{di:()=>o});var r=i(44546),n=i(89762),a=i(45696);function o(e,t,i,{strict:r}={}){return(0,n.q)(e,{strict:!1})?function(e,t,i,{strict:r}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(i??e.length)*2)}`;return r&&l(n,t,i),n}(e,t,i,{strict:r}):function(e,t,i,{strict:r}={}){s(e,t);let n=e.slice(t,i);return r&&l(n,t,i),n}(e,t,i,{strict:r})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,a.E)(e)-1)throw new r.i({offset:t,position:"start",size:(0,a.E)(e)})}function l(e,t,i){if("number"==typeof t&&"number"==typeof i&&(0,a.E)(e)!==i-t)throw new r.i({offset:i,position:"end",size:(0,a.E)(e)})}},81982:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},86692:(e,t,i)=>{"use strict";let r,n,a;i.r(t),i.d(t,{TransactionUtil:()=>ni,UiHelperUtil:()=>tY,WuiAccountButton:()=>t7,WuiAllWalletsImage:()=>ia,WuiAvatar:()=>t2,WuiButton:()=>il,WuiCard:()=>eA,WuiCardSelect:()=>iy,WuiCardSelectLoader:()=>ih,WuiChip:()=>iE,WuiConnectButton:()=>iA,WuiCtaButton:()=>iP,WuiEmailInput:()=>iG,WuiFlex:()=>tX,WuiGrid:()=>r4,WuiIcon:()=>tS,WuiIconBox:()=>t4,WuiIconLink:()=>iY,WuiImage:()=>tk,WuiInputElement:()=>iX,WuiInputNumeric:()=>i2,WuiInputText:()=>iq,WuiLink:()=>i4,WuiListAccordion:()=>rY,WuiListContent:()=>rX,WuiListItem:()=>i7,WuiListWallet:()=>rh,WuiListWalletTransaction:()=>r2,WuiLoadingHexagon:()=>tI,WuiLoadingSpinner:()=>tO,WuiLoadingThumbnail:()=>tj,WuiLogo:()=>rg,WuiLogoSelect:()=>rb,WuiNetworkButton:()=>rx,WuiNetworkImage:()=>im,WuiNoticeCard:()=>rG,WuiOtp:()=>r_,WuiQrCode:()=>rI,WuiSearchBar:()=>rT,WuiSeparator:()=>r7,WuiShimmer:()=>tL,WuiSnackbar:()=>rM,WuiTabs:()=>rD,WuiTag:()=>rc,WuiText:()=>tH,WuiTooltip:()=>rW,WuiTransactionListItem:()=>rn,WuiTransactionListItemLoader:()=>ro,WuiTransactionVisual:()=>rt,WuiVisual:()=>tZ,WuiVisualThumbnail:()=>rq,WuiWalletImage:()=>it,customElement:()=>e_,initializeTheming:()=>em,setColorTheme:()=>eb,setThemeVariables:()=>ev});let o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(t,e))}return e}toString(){return this.cssText}}let d=e=>new u("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>new u(1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,l),p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return d(t)})(e):e,{is:f,defineProperty:g,getOwnPropertyDescriptor:w,getOwnPropertyNames:m,getOwnPropertySymbols:b,getPrototypeOf:v}=Object,y=globalThis,x=y.trustedTypes,C=x?x.emptyScript:"",E=y.reactiveElementPolyfillSupport,_={toAttribute(e,t){switch(t){case Boolean:e=e?C:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},S=(e,t)=>!f(e,t),A={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=A){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&g(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:n}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??A}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...m(e),...b(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(p(i));else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),r=o.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=r;let a=n.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(void 0!==e){let a=this.constructor;if(!1===r&&(n=this[e]),!(((i??=a.getPropertyOptions(e)).hasChanged??S)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,E?.({ReactiveElement:$}),(y.reactiveElementVersions??=[]).push("2.1.2");let k=globalThis,P=e=>e,I=k.trustedTypes,R=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+O,M=`<${N}>`,j=document,U=()=>j.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,z=e=>L(e)||"function"==typeof e?.[Symbol.iterator],W="[ 	\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,q=/>/g,H=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,G=/"/g,V=/^(?:script|style|textarea|title)$/i,Z=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Y=Z(1),Q=Z(2),J=(Z(3),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),ee=new WeakMap,et=j.createTreeWalker(j,129);function ei(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}let er=(e,t)=>{let i=e.length-1,r=[],n,a=2===t?"<svg>":3===t?"<math>":"",o=B;for(let t=0;t<i;t++){let i=e[t],s,l,c=-1,u=0;for(;u<i.length&&(o.lastIndex=u,null!==(l=o.exec(i)));)u=o.lastIndex,o===B?"!--"===l[1]?o=F:void 0!==l[1]?o=q:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=n??B,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?H:'"'===l[3]?G:K):o===G||o===K?o=H:o===F||o===q?o=B:(o=H,n=void 0);let d=o===H&&e[t+1].startsWith("/>")?" ":"";a+=o===B?i+M:c>=0?(r.push(s),i.slice(0,c)+T+i.slice(c)+O+d):i+O+(-2===c?t:d)}return[ei(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class en{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const o=e.length-1,s=this.parts,[l,c]=er(e,t);if(this.el=en.createElement(l,i),et.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=et.nextNode())&&s.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(T)){const t=c[a++],i=r.getAttribute(e).split(O),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?ec:"?"===o[1]?eu:"@"===o[1]?ed:el}),r.removeAttribute(e)}else e.startsWith(O)&&(s.push({type:6,index:n}),r.removeAttribute(e));if(V.test(r.tagName)){const e=r.textContent.split(O),t=e.length-1;if(t>0){r.textContent=I?I.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],U()),et.nextNode(),s.push({type:2,index:++n});r.append(e[t],U())}}}else if(8===r.nodeType)if(r.data===N)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(O,e+1));)s.push({type:7,index:n}),e+=O.length-1}n++}}static createElement(e,t){let i=j.createElement("template");return i.innerHTML=e,i}}function ea(e,t,i=e,r){if(t===J)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl,a=D(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,i,r),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=ea(e,n._$AS(e,t.values),n,r)),t}class eo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??j).importNode(t,!0);et.currentNode=r;let n=et.nextNode(),a=0,o=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new es(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new eh(n,this,e)),this._$AV.push(t),s=i[++o]}a!==s?.index&&(n=et.nextNode(),a++)}return et.currentNode=j,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class es{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){D(e=ea(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):z(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==X&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=en.createElement(ei(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new eo(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ee.get(e.strings);return void 0===t&&ee.set(e.strings,t=new en(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let n of e)r===t.length?t.push(i=new es(this.O(U()),this.O(U()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=P(e).nextSibling;P(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class el{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(e,t=this,i,r){let n=this.strings,a=!1;if(void 0===n)(a=!D(e=ea(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let r,o,s=e;for(e=n[0],r=0;r<n.length-1;r++)(o=ea(this,s[i+r],t,r))===J&&(o=this._$AH[r]),a||=!D(o)||o!==this._$AH[r],o===X?e=X:e!==X&&(e+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!r&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ec extends el{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class eu extends el{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ed extends el{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??X)===J)return;let i=this._$AH,r=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==X&&(i===X||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eh{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}}let ep=k.litHtmlPolyfillSupport;ep?.(en,es),(k.litHtmlVersions??=[]).push("3.3.3");let ef=globalThis;class eg extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let r=i?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=i?.renderBefore??null;r._$litPart$=n=new es(t.insertBefore(U(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}eg._$litElement$=!0,eg.finalized=!0,ef.litElementHydrateSupport?.({LitElement:eg});let ew=ef.litElementPolyfillSupport;function em(e,t){r=document.createElement("style"),n=document.createElement("style"),a=document.createElement("style"),r.textContent=ey(e).core.cssText,n.textContent=ey(e).dark.cssText,a.textContent=ey(e).light.cssText,document.head.appendChild(r),document.head.appendChild(n),document.head.appendChild(a),eb(t)}function eb(e){n&&a&&("light"===e?(n.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),n.media="enabled"))}function ev(e){r&&n&&a&&(r.textContent=ey(e).core.cssText,n.textContent=ey(e).dark.cssText,a.textContent=ey(e).light.cssText)}function ey(e){return{core:h`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${d(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${d(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${d(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${d(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${d(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}ew?.({LitElement:eg}),(ef.litElementVersions??=[]).push("4.2.2");let ex=h`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,eC=h`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eE=h`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function e_(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}let eS=h`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,eA=class extends eg{render(){return Y`<slot></slot>`}};eA.styles=[ex,eS],eA=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e_("wui-card")],eA);let e$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:S};function ek(e){return(t,i)=>{let r;return"object"==typeof i?((e=e$,t,i)=>{let{kind:r,metadata:n}=i,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let n=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,n,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=i;return function(i){let n=this[r];t.call(this,i),this.requestUpdate(r,n,e,!0,i)}}throw Error("Unsupported decorator location: "+r)})(e,t,i):(r=t.hasOwnProperty(i),t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eP(e){return ek({...e,state:!0,attribute:!1})}let eI=h`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,eR=Q`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eT=Q`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eO=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eN=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eM=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ej=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eU=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eD=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,eL=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,ez=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eW=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eB=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eF=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eq=Q`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eH=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eK=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eG=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eV=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,eY=Q` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,eQ=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,eJ=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eX=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e0=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e1=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,e2=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e5=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e3=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e4=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e6=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e8=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,e7=Q`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,e9=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,te=Q`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tt=Q`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ti=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,tr=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,tn=Q` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ta=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,to=Q`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ts=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tl=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tc=Q`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,tu=Q`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,td=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,th=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tp=Q`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tf=Q`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tg=Q`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,tw=Q`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,tm=Q`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tb=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tv=Q`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,ty=Q`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var tx,tC,tE=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t_={allWallets:eR,alpha:Q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`,appStore:eT,chromeStore:eq,apple:eO,arrowBottom:eN,arrowLeft:eM,arrowRight:ej,arrowTop:eU,browser:eD,checkmark:eL,chevronBottom:ez,chevronLeft:eW,chevronRight:eB,chevronTop:eF,clock:eH,close:eK,compass:eV,coinPlaceholder:eG,copy:eZ,cursor:eY,desktop:eQ,disconnect:eJ,discord:eX,etherscan:e0,extension:e1,externalLink:e2,facebook:e5,filters:e3,github:e4,google:e6,helpCircle:e8,infoCircle:e7,mail:e9,mobile:te,networkPlaceholder:tt,nftPlaceholder:ti,off:tr,playStore:tn,qrCode:ta,refresh:to,search:ts,swapHorizontal:tl,swapHorizontalBold:tc,swapVertical:tu,telegram:td,twitch:th,twitter:tp,twitterIcon:tf,verify:tg,verifyFilled:tw,wallet:tb,walletConnect:tv,walletPlaceholder:tm,warningCircle:ty},tS=class extends eg{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,Y`${t_[this.name]}`}};tS.styles=[ex,eE,eI],tE([ek()],tS.prototype,"size",void 0),tE([ek()],tS.prototype,"name",void 0),tE([ek()],tS.prototype,"color",void 0),tS=tE([e_("wui-icon")],tS);let tA=h`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var t$=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tk=class extends eg{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Y`<img src=${this.src} alt=${this.alt} />`}};tk.styles=[ex,eE,tA],t$([ek()],tk.prototype,"src",void 0),t$([ek()],tk.prototype,"alt",void 0),tk=t$([e_("wui-image")],tk);let tP=h`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,tI=class extends eg{render(){return Y`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tI.styles=[ex,tP],tI=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e_("wui-loading-hexagon")],tI);let tR=h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var tT=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tO=class extends eg{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,Y`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tO.styles=[ex,tR],tT([ek()],tO.prototype,"color",void 0),tT([ek()],tO.prototype,"size",void 0),tO=tT([e_("wui-loading-spinner")],tO);let tN=h`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var tM=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tj=class extends eg{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return Y`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};tj.styles=[ex,tN],tM([ek({type:Number})],tj.prototype,"radius",void 0),tj=tM([e_("wui-loading-thumbnail")],tj);let tU=h`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var tD=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tL=class extends eg{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,Y`<slot></slot>`}};tL.styles=[tU],tD([ek()],tL.prototype,"width",void 0),tD([ek()],tL.prototype,"height",void 0),tD([ek()],tL.prototype,"borderRadius",void 0),tL=tD([e_("wui-shimmer")],tL);let tz=e=>(...t)=>({_$litDirective$:e,values:t});class tW{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let tB=tz(class extends tW{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return J}}),tF=h`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var tq=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tH=class extends eg{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,Y`<slot class=${tB(e)}></slot>`}};tH.styles=[ex,tF],tq([ek()],tH.prototype,"variant",void 0),tq([ek()],tH.prototype,"color",void 0),tq([ek()],tH.prototype,"align",void 0),tH=tq([e_("wui-text")],tH);let tK=h`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var tG=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tV={browser:Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,dao:Q`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,defi:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,defiAlt:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eth:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,layers:Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,lock:Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,login:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,network:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,nft:Q`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,noun:Q`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,profile:Q`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,system:Q`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `},tZ=class extends eg{constructor(){super(...arguments),this.name="browser"}render(){return Y`${tV[this.name]}`}};tZ.styles=[ex,tK],tG([ek()],tZ.prototype,"name",void 0),tZ=tG([e_("wui-visual")],tZ);let tY={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:i,truncate:r})=>e.length<=t+i?e:"end"===r?`${e.substring(0,t)}...`:"start"===r?`...${e.substring(e.length-i)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(i))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),i=this.hexToRgb(t),r=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(r?.replace("px","")),a=`${n}% ${n}% at 65% 40%`,o=[];for(let e=0;e<5;e+=1){let t=this.tintColor(i,.15*e);o.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[i,r,n]=e;return[Math.round(i+(255-i)*t),Math.round(r+(255-r)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e?e:"u">typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"},tQ=h`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var tJ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let tX=class extends eg{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tY.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tY.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tY.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tY.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tY.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tY.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tY.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tY.getSpacingStyles(this.margin,3)};
    `,Y`<slot></slot>`}};tX.styles=[ex,tQ],tJ([ek()],tX.prototype,"flexDirection",void 0),tJ([ek()],tX.prototype,"flexWrap",void 0),tJ([ek()],tX.prototype,"flexBasis",void 0),tJ([ek()],tX.prototype,"flexGrow",void 0),tJ([ek()],tX.prototype,"flexShrink",void 0),tJ([ek()],tX.prototype,"alignItems",void 0),tJ([ek()],tX.prototype,"justifyContent",void 0),tJ([ek()],tX.prototype,"columnGap",void 0),tJ([ek()],tX.prototype,"rowGap",void 0),tJ([ek()],tX.prototype,"gap",void 0),tJ([ek()],tX.prototype,"padding",void 0),tJ([ek()],tX.prototype,"margin",void 0),tX=tJ([e_("wui-flex")],tX);let t0=h`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var t1=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t2=class extends eg{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Y`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Y`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=tY.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};t2.styles=[ex,t0],t1([ek()],t2.prototype,"imageSrc",void 0),t1([ek()],t2.prototype,"alt",void 0),t1([ek()],t2.prototype,"address",void 0),t2=t1([e_("wui-avatar")],t2);let t5=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var t3=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t4=class extends eg{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,r="gray"===this.background,n="opaque"===this.background,a="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,o=`var(--wui-color-${this.backgroundColor})`;return a?o=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(o=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${o};
       --local-bg-mix: ${a||r?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":i?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,Y` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};t4.styles=[ex,eC,t5],t3([ek()],t4.prototype,"size",void 0),t3([ek()],t4.prototype,"backgroundColor",void 0),t3([ek()],t4.prototype,"iconColor",void 0),t3([ek()],t4.prototype,"iconSize",void 0),t3([ek()],t4.prototype,"background",void 0),t3([ek({type:Boolean})],t4.prototype,"border",void 0),t3([ek()],t4.prototype,"borderColor",void 0),t3([ek()],t4.prototype,"icon",void 0),t4=t3([e_("wui-icon-box")],t4);let t6=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var t8=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let t7=class extends eg{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return Y`
      <button
        ?disabled=${this.disabled}
        class=${(this.balance?void 0:"local-no-balance")??X}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${tY.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?Y`<wui-image src=${this.networkSrc}></wui-image>`:Y`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Y`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};t7.styles=[ex,eC,t6],t8([ek()],t7.prototype,"networkSrc",void 0),t8([ek()],t7.prototype,"avatarSrc",void 0),t8([ek()],t7.prototype,"balance",void 0),t8([ek({type:Boolean})],t7.prototype,"disabled",void 0),t8([ek({type:Boolean})],t7.prototype,"isProfileName",void 0),t8([ek()],t7.prototype,"address",void 0),t8([ek()],t7.prototype,"charsStart",void 0),t8([ek()],t7.prototype,"charsEnd",void 0),t7=t8([e_("wui-account-button")],t7);let t9=h`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var ie=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let it=class extends eg{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Y`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Y`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Y`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};it.styles=[ex,t9],ie([ek()],it.prototype,"size",void 0),ie([ek()],it.prototype,"name",void 0),ie([ek()],it.prototype,"imageSrc",void 0),ie([ek()],it.prototype,"walletIcon",void 0),ie([ek({type:Boolean})],it.prototype,"installed",void 0),ie([ek()],it.prototype,"badgeSize",void 0),it=ie([e_("wui-wallet-image")],it);let ii=h`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var ir=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let ia=class extends eg{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return Y`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>Y`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${t??X}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>Y` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ia.styles=[ex,ii],ir([ek({type:Array})],ia.prototype,"walletImages",void 0),ia=ir([e_("wui-all-wallets-image")],ia);let io=h`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var is=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let il=class extends eg{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${+!this.loading};
    --local-opacity-000: ${+!!this.loading};`;let e="md"===this.size?"paragraph-600":"small-600";return Y`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?Y`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Y``}};il.styles=[ex,eC,io],is([ek()],il.prototype,"size",void 0),is([ek({type:Boolean})],il.prototype,"disabled",void 0),is([ek({type:Boolean})],il.prototype,"fullWidth",void 0),is([ek({type:Boolean})],il.prototype,"loading",void 0),is([ek()],il.prototype,"variant",void 0),is([ek({type:Boolean})],il.prototype,"hasIconLeft",void 0),is([ek({type:Boolean})],il.prototype,"hasIconRight",void 0),il=is([e_("wui-button")],il);let ic=Q`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,iu=h`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var id=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let ih=class extends eg{constructor(){super(...arguments),this.type="wallet"}render(){return Y`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?Y` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ic}`:Y`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ih.styles=[ex,eC,iu],id([ek()],ih.prototype,"type",void 0),ih=id([e_("wui-card-select-loader")],ih);let ip=Q`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,ig=h`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var iw=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let im=class extends eg{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,Y`${this.templateVisual()} ${e?ip:ic}`}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Y`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};im.styles=[ex,ig],iw([ek()],im.prototype,"size",void 0),iw([ek()],im.prototype,"name",void 0),iw([ek()],im.prototype,"imageSrc",void 0),iw([ek({type:Boolean})],im.prototype,"selected",void 0),im=iw([e_("wui-network-image")],im);let ib=h`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var iv=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iy=class extends eg{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return Y`
      <button data-selected=${this.selected??X} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?Y`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${this.imageSrc??X}
          name=${this.name}
        >
        </wui-network-image>
      `:Y`
      <wui-wallet-image
        size="md"
        imageSrc=${this.imageSrc??X}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};iy.styles=[ex,eC,ib],iv([ek()],iy.prototype,"name",void 0),iv([ek()],iy.prototype,"type",void 0),iv([ek()],iy.prototype,"imageSrc",void 0),iv([ek({type:Boolean})],iy.prototype,"disabled",void 0),iv([ek({type:Boolean})],iy.prototype,"selected",void 0),iv([ek({type:Boolean})],iy.prototype,"installed",void 0),iy=iv([e_("wui-card-select")],iy);let ix=h`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var iC=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iE=class extends eg{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return Y`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:tY.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Y`<wui-image src=${this.imageSrc}></wui-image>`:null}};iE.styles=[ex,eC,ix],iC([ek()],iE.prototype,"variant",void 0),iC([ek()],iE.prototype,"imageSrc",void 0),iC([ek({type:Boolean})],iE.prototype,"disabled",void 0),iC([ek()],iE.prototype,"icon",void 0),iC([ek()],iE.prototype,"href",void 0),iC([ek()],iE.prototype,"text",void 0),iE=iC([e_("wui-chip")],iE);let i_=h`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var iS=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iA=class extends eg{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return Y`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Y`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};iA.styles=[ex,eC,i_],iS([ek()],iA.prototype,"size",void 0),iS([ek({type:Boolean})],iA.prototype,"loading",void 0),iA=iS([e_("wui-connect-button")],iA);let i$=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ik=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iP=class extends eg{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Y`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};iP.styles=[ex,eC,i$],ik([ek({type:Boolean})],iP.prototype,"disabled",void 0),ik([ek()],iP.prototype,"label",void 0),ik([ek()],iP.prototype,"buttonLabel",void 0),iP=ik([e_("wui-cta-button")],iP);let{I:iI}={M:T,P:O,A:N,C:1,L:er,R:eo,D:z,V:ea,I:es,H:el,N:eu,U:ed,B:ec,F:eh},iR=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),iR(e,t);return!0},iT=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},iO=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),ij(t)}};function iN(e){void 0!==this._$AN?(iT(this),this._$AM=e,iO(this)):this._$AM=e}function iM(e,t=!1,i=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)iR(r[e],!1),iT(r[e]);else null!=r&&(iR(r,!1),iT(r));else iR(this,e)}let ij=e=>{2==e.type&&(e._$AP??=iM,e._$AQ??=iN)};class iU extends tW{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),iO(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(iR(this,e),iT(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let iD=()=>new iL;class iL{}let iz=new WeakMap,iW=tz(class extends iU{render(e){return X}update(e,[t]){let i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),X}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=iz.get(t);void 0===i&&(i=new WeakMap,iz.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?iz.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),iB=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var iF=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iq=class extends eg{constructor(){super(...arguments),this.inputElementRef=iD(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return Y` ${this.templateIcon()}
      <input
        ${iW(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${this.enterKeyHint??X}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${this.value??X}
      />
      <slot></slot>`}templateIcon(){return this.icon?Y`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};iq.styles=[ex,eC,iB],iF([ek()],iq.prototype,"size",void 0),iF([ek()],iq.prototype,"icon",void 0),iF([ek({type:Boolean})],iq.prototype,"disabled",void 0),iF([ek()],iq.prototype,"placeholder",void 0),iF([ek()],iq.prototype,"type",void 0),iF([ek()],iq.prototype,"keyHint",void 0),iF([ek()],iq.prototype,"value",void 0),iq=iF([e_("wui-input-text")],iq);let iH=h`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var iK=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iG=class extends eg{constructor(){super(...arguments),this.disabled=!1}render(){return Y`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Y`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};iG.styles=[ex,iH],iK([ek()],iG.prototype,"errorMessage",void 0),iK([ek({type:Boolean})],iG.prototype,"disabled",void 0),iK([ek()],iG.prototype,"value",void 0),iG=iK([e_("wui-email-input")],iG);let iV=h`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var iZ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iY=class extends eg{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};iY.styles=[ex,eC,eE,iV],iZ([ek()],iY.prototype,"size",void 0),iZ([ek({type:Boolean})],iY.prototype,"disabled",void 0),iZ([ek()],iY.prototype,"icon",void 0),iZ([ek()],iY.prototype,"iconColor",void 0),iY=iZ([e_("wui-icon-link")],iY);let iQ=h`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var iJ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let iX=class extends eg{constructor(){super(...arguments),this.icon="copy"}render(){return Y`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};iX.styles=[ex,eC,iQ],iJ([ek()],iX.prototype,"icon",void 0),iX=iJ([e_("wui-input-element")],iX);let i0=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var i1=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let i2=class extends eg{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return Y`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};i2.styles=[ex,eC,i0],i1([ek({type:Boolean})],i2.prototype,"disabled",void 0),i1([ek({type:String})],i2.prototype,"value",void 0),i2=i1([e_("wui-input-numeric")],i2);let i5=h`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var i3=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let i4=class extends eg{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};i4.styles=[ex,eC,i5],i3([ek({type:Boolean})],i4.prototype,"disabled",void 0),i3([ek()],i4.prototype,"color",void 0),i4=i3([e_("wui-link")],i4);let i6=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var i8=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let i7=class extends eg{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Y`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${this.iconVariant??X}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return Y`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return Y`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:t;return Y`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Y`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Y``}chevronTemplate(){return this.chevron?Y`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};i7.styles=[ex,eC,i6],i8([ek()],i7.prototype,"icon",void 0),i8([ek()],i7.prototype,"iconSize",void 0),i8([ek()],i7.prototype,"variant",void 0),i8([ek()],i7.prototype,"iconVariant",void 0),i8([ek({type:Boolean})],i7.prototype,"disabled",void 0),i8([ek()],i7.prototype,"imageSrc",void 0),i8([ek()],i7.prototype,"alt",void 0),i8([ek({type:Boolean})],i7.prototype,"chevron",void 0),i8([ek({type:Boolean})],i7.prototype,"loading",void 0),i7=i8([e_("wui-list-item")],i7),(tC=tx||(tx={})).approve="approved",tC.bought="bought",tC.borrow="borrowed",tC.burn="burnt",tC.cancel="canceled",tC.claim="claimed",tC.deploy="deployed",tC.deposit="deposited",tC.execute="executed",tC.mint="minted",tC.receive="received",tC.repay="repaid",tC.send="sent",tC.sell="sold",tC.stake="staked",tC.trade="swapped",tC.unstake="unstaked",tC.withdraw="withdrawn";let i9=h`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var re=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rt=class extends eg{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,i=e?.type==="NFT",r=t?.url?"NFT"===t.type:i;return this.style.cssText=`
    --local-left-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,Y`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,i=e?.type;return 2===this.images.length&&(e?.url||t?.url)?Y`<div class="swap-images-container">
        ${e?.url?Y`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?Y`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?Y`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===i?Y`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Y`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?Y`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};rt.styles=[i9],re([ek()],rt.prototype,"type",void 0),re([ek()],rt.prototype,"status",void 0),re([ek()],rt.prototype,"direction",void 0),re([ek({type:Boolean})],rt.prototype,"onlyDirectionIcon",void 0),re([ek({type:Array})],rt.prototype,"images",void 0),re([ek({type:Object})],rt.prototype,"secondImage",void 0),rt=re([e_("wui-transaction-visual")],rt);let ri=h`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var rr=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rn=class extends eg{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return Y`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${this.direction??X}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon??X}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${tx[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?Y`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?Y`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};rn.styles=[ex,ri],rr([ek()],rn.prototype,"type",void 0),rr([ek({type:Array})],rn.prototype,"descriptions",void 0),rr([ek()],rn.prototype,"date",void 0),rr([ek({type:Boolean})],rn.prototype,"onlyDirectionIcon",void 0),rr([ek()],rn.prototype,"status",void 0),rr([ek()],rn.prototype,"direction",void 0),rr([ek({type:Array})],rn.prototype,"images",void 0),rn=rr([e_("wui-transaction-list-item")],rn);let ra=h`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,ro=class extends eg{render(){return Y`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ro.styles=[ex,ra],ro=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e_("wui-transaction-list-item-loader")],ro);let rs=h`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var rl=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rc=class extends eg{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Y`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rc.styles=[ex,rs],rl([ek()],rc.prototype,"variant",void 0),rc=rl([e_("wui-tag")],rc);let ru=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var rd=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rh=class extends eg{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Y` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Y` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Y`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:Y`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?Y`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Y`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rh.styles=[ex,eC,ru],rd([ek({type:Array})],rh.prototype,"walletImages",void 0),rd([ek()],rh.prototype,"imageSrc",void 0),rd([ek()],rh.prototype,"name",void 0),rd([ek()],rh.prototype,"tagLabel",void 0),rd([ek()],rh.prototype,"tagVariant",void 0),rd([ek()],rh.prototype,"icon",void 0),rd([ek()],rh.prototype,"walletIcon",void 0),rd([ek({type:Boolean})],rh.prototype,"installed",void 0),rd([ek({type:Boolean})],rh.prototype,"disabled",void 0),rd([ek({type:Boolean})],rh.prototype,"showAllWallets",void 0),rh=rd([e_("wui-list-wallet")],rh);let rp=h`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var rf=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rg=class extends eg{constructor(){super(...arguments),this.logo="google"}render(){return Y`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rg.styles=[ex,rp],rf([ek()],rg.prototype,"logo",void 0),rg=rf([e_("wui-logo")],rg);let rw=h`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var rm=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rb=class extends eg{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Y`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rb.styles=[ex,eC,rw],rm([ek()],rb.prototype,"logo",void 0),rm([ek({type:Boolean})],rb.prototype,"disabled",void 0),rb=rm([e_("wui-logo-select")],rb);let rv=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var ry=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rx=class extends eg{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Y`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Y`<wui-image src=${this.imageSrc}></wui-image>`:Y`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rx.styles=[ex,eC,rv],ry([ek()],rx.prototype,"imageSrc",void 0),ry([ek({type:Boolean})],rx.prototype,"disabled",void 0),rx=ry([e_("wui-network-button")],rx);let rC=h`
  :host {
    position: relative;
    display: block;
  }
`;var rE=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let r_=class extends eg{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let i=e.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=r.selectionStart;switch(e.key){case"ArrowLeft":n&&r.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):this.updateInput(r,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let i=this.numerics[e<this.length?e:t],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===e){let e=t-1,i=this.numerics[e>-1?e:t],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return Y`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>Y`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){let r=this.numerics[t],n=e||(r?this.getInputElement(r):void 0);n&&(n.value=i,this.values=this.values.map((e,r)=>r===t?i:e))}handleInput(e,t){let i=e.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===e.inputType?this.handlePaste(r,i,t):tY.isNumber(i)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,i){let r=t[0];if(r&&tY.isNumber(r)){this.updateInput(e,i,r);let n=t.substring(1);if(i+1<this.length&&n.length){let e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};r_.styles=[ex,rC],rE([ek({type:Number})],r_.prototype,"length",void 0),rE([ek({type:String})],r_.prototype,"otp",void 0),rE([eP()],r_.prototype,"values",void 0),r_=rE([e_("wui-otp")],r_);var rS=i(32757);function rA(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let r$={generate(e,t,i){let r,n,a="#141414",o=[],s=(n=Math.sqrt((r=Array.prototype.slice.call(rS.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),r.reduce((e,t,i)=>(i%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])),l=t/s.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:e,y:t})=>{let i=(s.length-7)*l*e,r=(s.length-7)*l*t;for(let e=0;e<c.length;e+=1){let t=l*(7-2*e);o.push(Q`
            <rect
              fill=${2===e?a:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${a}
              stroke-width=${5*(0===e)}
              height=${0===e?t-5:t}
              x= ${0===e?r+l*e+2.5:r+l*e}
              y= ${0===e?i+l*e+2.5:i+l*e}
            />
          `)}});let u=Math.floor((i+25)/l),d=s.length/2-u/2,h=s.length/2+u/2-1,p=[];s.forEach((e,t)=>{e.forEach((e,i)=>{!s[t][i]||t<7&&i<7||t>s.length-8&&i<7||t<7&&i>s.length-8||t>d&&t<h&&i>d&&i<h||p.push([t*l+l/2,i*l+l/2])})});let f={};return p.forEach(([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]}),Object.entries(f).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!rA(e,t,l)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{o.push(Q`<circle cx=${e} cy=${t} fill=${a} r=${l/2.5} />`)})}),Object.entries(f).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>rA(e,t,l)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>rA(e,t,l)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{o.push(Q`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${a}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),o}},rk=h`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var rP=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rI=class extends eg{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,Y`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return Q`
      <svg height=${e} width=${e}>
        ${r$.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Y`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rI.styles=[ex,rk],rP([ek()],rI.prototype,"uri",void 0),rP([ek({type:Number})],rI.prototype,"size",void 0),rP([ek()],rI.prototype,"theme",void 0),rP([ek()],rI.prototype,"imageSrc",void 0),rP([ek()],rI.prototype,"alt",void 0),rI=rP([e_("wui-qr-code")],rI);let rR=h`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,rT=class extends eg{constructor(){super(...arguments),this.inputComponentRef=iD()}render(){return Y`
      <wui-input-text
        ${iW(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};rT.styles=[ex,rR],rT=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([e_("wui-search-bar")],rT);let rO=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var rN=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rM=class extends eg{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Y`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rM.styles=[ex,rO],rN([ek()],rM.prototype,"backgroundColor",void 0),rN([ek()],rM.prototype,"iconColor",void 0),rN([ek()],rM.prototype,"icon",void 0),rN([ek()],rM.prototype,"message",void 0),rM=rN([e_("wui-snackbar")],rM);let rj=h`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var rU=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rD=class extends eg{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let i=t===this.activeTab;return Y`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],r=this.buttons[e],n=i?.querySelector("wui-text"),a=r?.querySelector("wui-text"),o=r?.getBoundingClientRect(),s=a?.getBoundingClientRect();i&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,r.animate([{width:`${o.width+s.width}px`}],{duration:500*!t,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:125*!t,delay:200*!t,fill:"forwards",easing:"ease"}))}};rD.styles=[ex,eC,rj],rU([ek({type:Array})],rD.prototype,"tabs",void 0),rU([ek()],rD.prototype,"onTabChange",void 0),rU([ek({type:Array})],rD.prototype,"buttons",void 0),rU([ek({type:Boolean})],rD.prototype,"disabled",void 0),rU([eP()],rD.prototype,"activeTab",void 0),rU([eP()],rD.prototype,"localTabWidth",void 0),rU([eP()],rD.prototype,"isDense",void 0),rD=rU([e_("wui-tabs")],rD);let rL=h`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var rz=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rW=class extends eg{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Y`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rW.styles=[ex,eC,rL],rz([ek()],rW.prototype,"placement",void 0),rz([ek()],rW.prototype,"message",void 0),rW=rz([e_("wui-tooltip")],rW);let rB=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var rF=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rq=class extends eg{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,Y`${this.templateVisual()}`}templateVisual(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:Y`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rq.styles=[ex,rB],rF([ek()],rq.prototype,"imageSrc",void 0),rF([ek()],rq.prototype,"alt",void 0),rF([ek({type:Boolean})],rq.prototype,"borderRadiusFull",void 0),rq=rF([e_("wui-visual-thumbnail")],rq);let rH=h`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var rK=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rG=class extends eg{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return Y`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};rG.styles=[ex,eC,rH],rK([ek()],rG.prototype,"label",void 0),rK([ek()],rG.prototype,"description",void 0),rK([ek()],rG.prototype,"icon",void 0),rG=rK([e_("wui-notice-card")],rG);let rV=h`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var rZ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rY=class extends eg{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{let e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;let t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}},0)}render(){return Y`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?Y` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};rY.styles=[ex,eC,rV],rZ([ek()],rY.prototype,"textTitle",void 0),rZ([ek()],rY.prototype,"overflowedContent",void 0),rY=rZ([e_("wui-list-accordion")],rY);let rQ=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var rJ=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let rX=class extends eg{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return Y`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?Y`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?Y` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:Y`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rX.styles=[ex,eC,rQ],rJ([ek()],rX.prototype,"imageSrc",void 0),rJ([ek()],rX.prototype,"textTitle",void 0),rJ([ek()],rX.prototype,"textValue",void 0),rX=rJ([e_("wui-list-content")],rX);let r0=h`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var r1=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let r2=class extends eg{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return Y`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?Y`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:Y`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r2.styles=[ex,eC,r0],r1([ek()],r2.prototype,"amount",void 0),r1([ek()],r2.prototype,"networkCurreny",void 0),r1([ek()],r2.prototype,"networkImageUrl",void 0),r1([ek()],r2.prototype,"receiverAddress",void 0),r2=r1([e_("wui-list-wallet-transaction")],r2);let r5=h`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var r3=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let r4=class extends eg{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tY.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tY.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tY.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tY.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tY.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tY.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tY.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tY.getSpacingStyles(this.margin,3)};
    `,Y`<slot></slot>`}};r4.styles=[ex,r5],r3([ek()],r4.prototype,"gridTemplateRows",void 0),r3([ek()],r4.prototype,"gridTemplateColumns",void 0),r3([ek()],r4.prototype,"justifyItems",void 0),r3([ek()],r4.prototype,"alignItems",void 0),r3([ek()],r4.prototype,"justifyContent",void 0),r3([ek()],r4.prototype,"alignContent",void 0),r3([ek()],r4.prototype,"columnGap",void 0),r3([ek()],r4.prototype,"rowGap",void 0),r3([ek()],r4.prototype,"gap",void 0),r3([ek()],r4.prototype,"padding",void 0),r3([ek()],r4.prototype,"margin",void 0),r4=r3([e_("wui-grid")],r4);let r6=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var r8=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let r7=class extends eg{constructor(){super(...arguments),this.text=""}render(){return Y`${this.template()}`}template(){return this.text?Y`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};r7.styles=[ex,r6],r8([ek()],r7.prototype,"text",void 0),r7=r8([e_("wui-separator")],r7);var r9=i(53418);let ne=["receive","deposit","borrow","claim"],nt=["withdraw","repay","burn"],ni={getTransactionGroupTitle:e=>e===r9.r.getYear()?"This Year":e,getTransactionImages(e){let[t,i]=e,r=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||r?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(i)]},getTransactionImage:e=>({type:ni.getTransactionTransferTokenType(e),url:ni.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,i=!!e?.nft_info,r=!!e?.fungible_info;return e&&i?t=e?.nft_info?.content?.preview?.url:e&&r&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,i=e.transfers,r=e.transfers?.length>0,n=e.transfers?.length>1,a=r&&i?.every(e=>!!e.fungible_info),[o,s]=i,l=this.getTransferDescription(o),c=this.getTransferDescription(s);if(!r)return("send"===t||"receive"===t)&&a?[l=tY.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),tY.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return i.map(e=>this.getTransferDescription(e));let u="";return ne.includes(t)?u="+":nt.includes(t)&&(u="-"),[l=u.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},87985:(e,t,i)=>{"use strict";i.d(t,{Uj:()=>c,Np:()=>k,$m:()=>Z,TP:()=>D,x4:()=>q,aK:()=>x,oU:()=>o,wE:()=>s,En:()=>T,W3:()=>j,p_:()=>S,Hd:()=>v,z3:()=>E,IN:()=>N,aS:()=>Y,jF:()=>K,Pt:()=>z,iT:()=>g,Wn:()=>V,WC:()=>B});var r=i(78568);function n(e,t,i,n){let a=e[t];return(0,r.B1)(e,()=>{let r=e[t];Object.is(a,r)||i(a=r)},n)}Symbol();let a="https://secure.web3modal.com",o={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:a,SECURE_SITE_DASHBOARD:`${a}/dashboard`,SECURE_SITE_FAVICON:`${a}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"u">typeof window,isPairingExpired:e=>!e||e-Date.now()<=o.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=o.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+o.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let i;return(...r)=>{i&&clearTimeout(i),i=setTimeout(function(){e(...r)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let i=e;i.includes("://")||(i=e.replaceAll("/","").replaceAll(":",""),i=`${i}://`),i.endsWith("/")||(i=`${i}/`);let r=encodeURIComponent(t);return{redirect:`${i}wc?uri=${r}`,href:i}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let i=e;i.endsWith("/")||(i=`${i}/`);let r=encodeURIComponent(t);return{redirect:`${i}wc?uri=${r}`,href:i}},openHref(e,t){window.open(e,t,"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,i)=>{let r=new Image;r.onload=t,r.onerror=i,r.crossOrigin="anonymous",r.src=e}),s.wait(2e3)]),formatBalance(e,t){let i;if("0"===e)i="0.000";else if("string"==typeof e){let t=Number(e);t&&(i=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return i?`${i} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return o.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},l=(0,r.BX)({isConnected:!1}),c={state:l,subscribe:e=>(0,r.B1)(l,()=>e(l)),subscribeKey:(e,t)=>n(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let i=this.createUrl(t);return(await fetch(i,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){let i=this.createUrl(t);return(await fetch(i,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...i}){let r=this.createUrl(i);return(await fetch(r,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...i}){let r=this.createUrl(i);return(await fetch(r,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...i}){let r=this.createUrl(i);return(await fetch(r,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){let i=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&i.searchParams.append(e,t)}),i}}let d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",p="@w3m/connected_wallet_image_url",f="@w3m/connected_connector",g={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(d,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=g.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(p)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(f)}catch{console.info("Unable to get Connected Connector")}}},w=(0,r.BX)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),m={state:w,subscribeNetworkImages:e=>(0,r.B1)(w.networkImages,()=>e(w.networkImages)),subscribeKey:(e,t)=>n(w,e,t),setWalletImage(e,t){w.walletImages[e]=t},setNetworkImage(e,t){w.networkImages[e]=t},setConnectorImage(e,t){w.connectorImages[e]=t},setTokenImage(e,t){w.tokenImages[e]=t}},b=(0,r.BX)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),v={state:b,subscribeKey:(e,t)=>n(b,e,t),setProjectId(e){b.projectId=e},setIncludeWalletIds(e){b.includeWalletIds=e},setExcludeWalletIds(e){b.excludeWalletIds=e},setFeaturedWalletIds(e){b.featuredWalletIds=e},setTokens(e){b.tokens=e},setTermsConditionsUrl(e){b.termsConditionsUrl=e},setPrivacyPolicyUrl(e){b.privacyPolicyUrl=e},setCustomWallets(e){b.customWallets=e},setEnableAnalytics(e){b.enableAnalytics=e},setSdkVersion(e){b.sdkVersion=e},setMetadata(e){b.metadata=e}},y=(0,r.BX)({connectors:[]}),x={state:y,subscribeKey:(e,t)=>n(y,e,t),setConnectors(e){y.connectors=e.map(e=>(0,r.KR)(e))},addConnector(e){if(y.connectors.push((0,r.KR)(e)),"w3mEmail"===e.id){let t=(0,r.P9)(v.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId})}},getEmailConnector:()=>y.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>y.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>y.connectors},C=(0,r.BX)({open:!1,selectedNetworkId:void 0}),E={state:C,subscribe:e=>(0,r.B1)(C,()=>e(C)),set(e){Object.assign(C,{...C,...e})}},_=(0,r.BX)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),S={state:_,subscribeKey:(e,t)=>n(_,e,t),_getClient(){if(!_._client)throw Error("NetworkController client not set");return _._client},setClient(e){_._client=(0,r.KR)(e)},setCaipNetwork(e){_.caipNetwork=e,E.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){_.caipNetwork=e,E.set({selectedNetworkId:e?.id}),_.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){_.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();_.supportsAllNetworks=e.supportsAllNetworks,_.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),_.caipNetwork=e},resetNetwork(){_.isDefaultCaipNetwork||(_.caipNetwork=void 0),_.approvedCaipNetworkIds=void 0,_.supportsAllNetworks=!0}},A=new u({baseUrl:s.getApiUrl()}),$=(0,r.BX)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),k={state:$,subscribeKey:(e,t)=>n($,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:i}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":i}},async _fetchWalletImage(e){let t=`${A.baseUrl}/getWalletImage/${e}`,i=await A.getBlob({path:t,headers:k._getApiHeaders()});m.setWalletImage(e,URL.createObjectURL(i))},async _fetchNetworkImage(e){let t=`${A.baseUrl}/public/getAssetImage/${e}`,i=await A.getBlob({path:t,headers:k._getApiHeaders()});m.setNetworkImage(e,URL.createObjectURL(i))},async _fetchConnectorImage(e){let t=`${A.baseUrl}/public/getAssetImage/${e}`,i=await A.getBlob({path:t,headers:k._getApiHeaders()});m.setConnectorImage(e,URL.createObjectURL(i))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=S.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>k._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=x.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>k._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=v.state;if(e?.length){let{data:t}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,i)=>e.indexOf(t.id)-e.indexOf(i.id));let i=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(i.map(e=>k._fetchWalletImage(e))),$.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:i}=v.state,r=[...t??[],...i??[]].filter(Boolean),{data:n,count:a}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:r?.join(",")}}),o=g.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>k._fetchWalletImage(e))),$.recommended=n,$.count=a??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:i,featuredWalletIds:r}=v.state,n=[...$.recommended.map(({id:e})=>e),...i??[],...r??[]].filter(Boolean),{data:a,count:o}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:n.join(",")}}),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>k._fetchWalletImage(e)),s.wait(300)]),$.wallets=[...$.wallets,...a],$.count=o>$.count?o:$.count,$.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:i}=v.state;$.search=[];let{data:r}=await A.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:i?.join(",")}}),n=r.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>k._fetchWalletImage(e)),s.wait(300)]),$.search=r},prefetch(){$.prefetchPromise=Promise.race([Promise.allSettled([k.fetchFeaturedWallets(),k.fetchRecommendedWallets(),k.fetchNetworkImages(),k.fetchConnectorImages()]),s.wait(3e3)])}},P=new u({baseUrl:s.getAnalyticsUrl()}),I=["MODAL_CREATED"],R=(0,r.BX)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),T={state:R,subscribe:e=>(0,r.B1)(R,()=>e(R)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:i}=v.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":i}},async _sendAnalyticsEvent(e){try{if(I.includes(e.data.event)||"u"<typeof window)return;await P.post({path:"/e",headers:T._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){R.timestamp=Date.now(),R.data=e,v.state.enableAnalytics&&T._sendAnalyticsEvent(R)}},O=(0,r.BX)({view:"Connect",history:["Connect"]}),N={state:O,subscribeKey:(e,t)=>n(O,e,t),push(e,t){e!==O.view&&(O.view=e,O.history.push(e),O.data=t)},reset(e){O.view=e,O.history=[e]},replace(e,t){O.history.length>1&&O.history.at(-1)!==e&&(O.view=e,O.history[O.history.length-1]=e,O.data=t)},goBack(){if(O.history.length>1){O.history.pop();let[e]=O.history.slice(-1);e&&(O.view=e)}},goBackToIndex(e){if(O.history.length>1){O.history=O.history.slice(0,e+1);let[t]=O.history.slice(-1);t&&(O.view=t)}}},M=(0,r.BX)({loading:!1,open:!1}),j={state:M,subscribe:e=>(0,r.B1)(M,()=>e(M)),subscribeKey:(e,t)=>n(M,e,t),async open(e){await k.state.prefetchPromise,e?.view?N.reset(e.view):c.state.isConnected?N.reset("Account"):N.reset("Connect"),M.open=!0,E.set({open:!0}),T.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){M.open=!1,E.set({open:!1}),T.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){M.loading=e}},U=new u({baseUrl:s.getBlockchainApiUrl()}),D={fetchIdentity:({caipChainId:e,address:t})=>U.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:v.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:i})=>U.get({path:`/v1/account/${e}/history?projectId=${t}`,params:i?{cursor:i}:{}})},L=(0,r.BX)({message:"",variant:"success",open:!1}),z={state:L,subscribeKey:(e,t)=>n(L,e,t),showSuccess(e){L.message=e,L.variant="success",L.open=!0},showError(e){L.message=s.parseError(e),L.variant="error",L.open=!0},hide(){L.open=!1}},W=(0,r.BX)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),B={state:W,subscribe:e=>(0,r.B1)(W,()=>e(W)),async fetchTransactions(e){let{projectId:t}=v.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");W.loading=!0;try{let i=await D.fetchTransactions({account:e,projectId:t,cursor:W.next}),r=this.filterSpamTransactions(i.data),n=[...W.transactions,...r];W.loading=!1,W.transactions=n,W.transactionsByYear=this.groupTransactionsByYear(W.transactionsByYear,r),W.empty=0===n.length,W.next=i.next?i.next:void 0}catch(i){T.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:W.next}}),z.showError("Failed to fetch transactions"),W.loading=!1,W.empty=!0}},groupTransactionsByYear:(e={},t=[])=>(t.forEach(t=>{let i=new Date(t.metadata.minedAt).getFullYear();e[i]||(e[i]=[]),e[i]?.push(t)}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),resetTransactions(){W.transactions=[],W.transactionsByYear={},W.loading=!1,W.empty=!1,W.next=void 0}},F=(0,r.BX)({wcError:!1,buffering:!1}),q={state:F,subscribeKey:(e,t)=>n(F,e,t),_getClient(){if(!F._client)throw Error("ConnectionController client not set");return F._client},setClient(e){F._client=(0,r.KR)(e)},connectWalletConnect(){F.wcPromise=this._getClient().connectWalletConnect(e=>{F.wcUri=e,F.wcPairingExpiry=s.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e),g.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){F.wcUri=void 0,F.wcPairingExpiry=void 0,F.wcPromise=void 0,F.wcLinking=void 0,F.recentWallet=void 0,B.resetTransactions(),g.deleteWalletConnectDeepLink()},setWcLinking(e){F.wcLinking=e},setWcError(e){F.wcError=e,F.buffering=!1},setRecentWallet(e){F.recentWallet=e},setBuffering(e){F.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},H=(0,r.BX)({status:"uninitialized",isSiweEnabled:!1}),K={state:H,subscribeKey:(e,t)=>n(H,e,t),subscribe:e=>(0,r.B1)(H,()=>e(H)),_getClient(){if(!H._client)throw Error("SIWEController client not set");return H._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){H._client=(0,r.KR)(e),H.status="ready",H.isSiweEnabled=e.options.enabled},setNonce(e){H.nonce=e},setStatus(e){H.status=e},setMessage(e){H.message=e},setSession(e){H.session=e}},G=(0,r.BX)({themeMode:"dark",themeVariables:{}}),V={state:G,subscribe:e=>(0,r.B1)(G,()=>e(G)),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}},getSnapshot:()=>(0,r.P9)(G)},Z={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?m.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?m.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?m.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){N.state.history.length>1?N.goBack():j.close()},navigateAfterNetworkSwitch(){let{history:e}=N.state,t=e.findIndex(e=>"Networks"===e);t>=1?N.goBackToIndex(t-1):j.close()}}},89529:(e,t,i)=>{"use strict";i.d(t,{$:()=>n});var r=i(43748);function n(e){let t=e.transactions?.map(e=>"string"==typeof e?e:(0,r.uP)(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},89649:(e,t,i)=>{"use strict";function r(e,{format:t}){if(!t)return{};let i={};return!function t(r){for(let n of Object.keys(r))n in e&&(i[n]=e[n]),r[n]&&"object"==typeof r[n]&&!Array.isArray(r[n])&&t(r[n])}(t(e||{})),i}i.d(t,{o:()=>r})},91497:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=(e,t,i)=>JSON.stringify(e,(e,i)=>{let r="bigint"==typeof i?i.toString():i;return"function"==typeof t?t(e,r):r},i)},91514:(e,t,i)=>{"use strict";i.d(t,{r:()=>r});let r=(0,i(39606).x)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:0x102e3b9},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0xdb04c1}}})},93247:(e,t,i)=>{"use strict";i.d(t,{Ci:()=>o,J8:()=>l,MU:()=>c,Pr:()=>s});var r=i(91497),n=i(23755),a=i(78552);class o extends n.C{constructor({body:e,details:t,headers:i,status:n,url:o}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,a.ID)(o)}`,e&&`Request body: ${(0,r.A)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=n,this.url=o}}class s extends n.C{constructor({body:e,details:t,url:i}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,a.ID)(i)}`,`Request body: ${(0,r.A)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends n.C{constructor({body:e,error:t,url:i}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,a.ID)(i)}`,`Request body: ${(0,r.A)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.C{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,a.ID)(t)}`,`Request body: ${(0,r.A)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},94310:(e,t,i)=>{"use strict";async function r(e){return BigInt(await e.request({method:"eth_gasPrice"}))}i.d(t,{L:()=>r})},94577:(e,t,i)=>{"use strict";e.exports=i(99617)},95545:(e,t,i)=>{"use strict";i.d(t,{XX:()=>F,c0:()=>A,ge:()=>W,qy:()=>S,s6:()=>$});let r=globalThis,n=e=>e,a=r.trustedTypes,o=a?a.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",l=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+l,u=`<${c}>`,d=document,h=()=>d.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,g=e=>f(e)||"function"==typeof e?.[Symbol.iterator],w="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,v=/>/g,y=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,C=/"/g,E=/^(?:script|style|textarea|title)$/i,_=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),S=_(1),A=(_(2),_(3),Symbol.for("lit-noChange")),$=Symbol.for("lit-nothing"),k=new WeakMap,P=d.createTreeWalker(d,129);function I(e,t){if(!f(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let R=(e,t)=>{let i=e.length-1,r=[],n,a=2===t?"<svg>":3===t?"<math>":"",o=m;for(let t=0;t<i;t++){let i=e[t],c,d,h=-1,p=0;for(;p<i.length&&(o.lastIndex=p,null!==(d=o.exec(i)));)p=o.lastIndex,o===m?"!--"===d[1]?o=b:void 0!==d[1]?o=v:void 0!==d[2]?(E.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=y):void 0!==d[3]&&(o=y):o===y?">"===d[0]?(o=n??m,h=-1):void 0===d[1]?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?y:'"'===d[3]?C:x):o===C||o===x?o=y:o===b||o===v?o=m:(o=y,n=void 0);let f=o===y&&e[t+1].startsWith("/>")?" ":"";a+=o===m?i+u:h>=0?(r.push(c),i.slice(0,h)+s+i.slice(h)+l+f):i+l+(-2===h?t:f)}return[I(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class T{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const u=e.length-1,d=this.parts,[p,f]=R(e,t);if(this.el=T.createElement(p,i),P.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(s)){const t=f[o++],i=r.getAttribute(e).split(l),a=/([.?@])?(.*)/.exec(t);d.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?U:"?"===a[1]?D:"@"===a[1]?L:j}),r.removeAttribute(e)}else e.startsWith(l)&&(d.push({type:6,index:n}),r.removeAttribute(e));if(E.test(r.tagName)){const e=r.textContent.split(l),t=e.length-1;if(t>0){r.textContent=a?a.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],h()),P.nextNode(),d.push({type:2,index:++n});r.append(e[t],h())}}}else if(8===r.nodeType)if(r.data===c)d.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(l,e+1));)d.push({type:7,index:n}),e+=l.length-1}n++}}static createElement(e,t){let i=d.createElement("template");return i.innerHTML=e,i}}function O(e,t,i=e,r){if(t===A)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl,a=p(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,i,r),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=O(e,n._$AS(e,t.values),n,r)),t}class N{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??d).importNode(t,!0);P.currentNode=r;let n=P.nextNode(),a=0,o=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new M(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new z(n,this,e)),this._$AV.push(t),s=i[++o]}a!==s?.index&&(n=P.nextNode(),a++)}return P.currentNode=d,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){p(e=O(this,e,t))?e===$||null==e||""===e?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==A&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&p(this._$AH)?this._$AA.nextSibling.data=e:this.T(d.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=T.createElement(I(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new N(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=k.get(e.strings);return void 0===t&&k.set(e.strings,t=new T(e)),t}k(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let n of e)r===t.length?t.push(i=new M(this.O(h()),this.O(h()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=n(e).nextSibling;n(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,r){let n=this.strings,a=!1;if(void 0===n)(a=!p(e=O(this,e,t,0))||e!==this._$AH&&e!==A)&&(this._$AH=e);else{let r,o,s=e;for(e=n[0],r=0;r<n.length-1;r++)(o=O(this,s[i+r],t,r))===A&&(o=this._$AH[r]),a||=!p(o)||o!==this._$AH[r],o===$?e=$:e!==$&&(e+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class D extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class L extends j{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??$)===A)return;let i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}let W={M:s,P:l,A:c,C:1,L:R,R:N,D:g,V:O,I:M,H:j,N:D,U:L,B:U,F:z},B=r.litHtmlPolyfillSupport;B?.(T,M),(r.litHtmlVersions??=[]).push("3.3.3");let F=(e,t,i)=>{let r=i?.renderBefore??t,n=r._$litPart$;if(void 0===n){let e=i?.renderBefore??null;r._$litPart$=n=new M(t.insertBefore(h(),e),e,void 0,i??{})}return n._$AI(e),n}},95889:(e,t,i)=>{"use strict";i.d(t,{J9:()=>a,Mc:()=>n,fD:()=>r});let r={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},a={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},96002:(e,t,i)=>{"use strict";i.d(t,{$s:()=>c,Kc:()=>d,Kz:()=>u,Vg:()=>l,WA:()=>h,aO:()=>o,n3:()=>s});var r=i(70536),n=i(22160),a=i(23755);function o(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),i=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(i+1)}  ${t}`).join("\n")}class s extends a.C{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}a.C;class l extends a.C{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",o(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}a.C,a.C,a.C;class c extends a.C{constructor(e,{account:t,docsPath:i,chain:a,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){const g=o({chain:a&&`${a?.name} (id: ${a?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,r.c)(f)} ${a?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.Q)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.Q)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.Q)(d)} gwei`,nonce:h});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends a.C{constructor({blockHash:e,blockNumber:t,blockTag:i,hash:r,index:n}){let a="Transaction";i&&void 0!==n&&(a=`Transaction at block time "${i}" at index "${n}"`),e&&void 0!==n&&(a=`Transaction at block hash "${e}" at index "${n}"`),t&&void 0!==n&&(a=`Transaction at block number "${t}" at index "${n}"`),r&&(a=`Transaction with hash "${r}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends a.C{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends a.C{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},96565:(e,t,i)=>{"use strict";i.d(t,{p:()=>c});var r=i(80044),n=i(76429),a=i(15422),o=i(44497),s=i(24029),l=i(42330);function c({abi:e,args:t,functionName:i}){let u=e[0];if(i&&!(u=(0,l.iY)({abi:e,args:t,name:i})))throw new r.Iz(i,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==u.type)throw new r.Iz(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let d=(0,s.B)(u),h=(0,a._)(d),p="inputs"in u&&u.inputs?(0,o.h)(u.inputs,t??[]):void 0;return(0,n.aP)([h,p??"0x"])}},97948:(e,t,i)=>{"use strict";i.d(t,{c:()=>l});var r=i(51011),n=i(71386),a=i(4174),o=i(96002),s=i(80339);function l(e){let{account:t,gasPrice:i,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,r.J)(t):void 0;if(d&&!(0,s.P)(d.address))throw new n.M({address:d.address});if(u&&!(0,s.P)(u))throw new n.M({address:u});if(void 0!==i&&(void 0!==l||void 0!==c))throw new o.n3;if(l&&l>2n**256n-1n)throw new a.BG({maxFeePerGas:l});if(c&&l&&c>l)throw new a.lN({maxFeePerGas:l,maxPriorityFeePerGas:c})}},99617:(e,t,i)=>{"use strict";var r=i(12115),n=i(8039),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,i,r,n){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var p=o(e,(d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==n&&h.hasValue){var t=h.value;if(n(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var i=r(e);return void 0!==n&&n(t,i)?(o=e,t):(o=e,s=i)}var o,s,l=!1,c=void 0===i?null:i;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,i,r,n]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=p},[p]),u(p),p}}}]);