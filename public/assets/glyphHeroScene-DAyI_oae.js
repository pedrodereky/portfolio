import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,k as g,m as _,n as v,o as y,p as b,r as ee,s as x,t as te,u as ne,v as re,w as S,x as C}from"./three.module-B-CQE7DZ.js";var w={ink:[1,.125,.004],hot:[1,.5,.06],glow:[1,.16,.008],red:[1,.004,.006],white:[1,1,1],green:[.05,1,.14],redHot:[1,.06,.04],fringeWarm:[1,.7,.05],fringeCool:[0,.32,.3],floor:[.002,5e-4,1e-4]},T={letters:`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,digits:`0123456789`,symbols:`.,:;'"\`!?-_+=*/\\|<>()[]{}#%&@$^~`,digitShare:.14,wallRampStart:.1,fontFamily:`ui-monospace, "Cascadia Mono", Consolas, "SF Mono", Menlo, "Roboto Mono", "Courier New", monospace`,fontWeight:500,fontScale:.8,labelLetters:`ÁÀÂÃÄÅÆÇÉÈÊËÍÌÎÏÐÑÓÒÔÕÖØŒÚÙÛÜÝÞŸ`,cellAspect:.5},E={cellsPerShortSide:56,minCellPx:11,maxCellPx:20,maxCells:27e3,overscan:1.48},D={fov:38,near:.1,far:20,driftYaw:.075,driftPitch:.04,driftYawSpeed:.31,driftPitchSpeed:.23,pointerYaw:.0935,pointerPitch:.0595,pointerSmoothing:4},O={fontFamily:`"Science Gothic", ui-monospace, "Cascadia Mono", Consolas, "SF Mono", Menlo, monospace`,fontWeight:500,loadWaitSeconds:2.5},k={header:[`JP BIOS v6.66`,`(C) 2026 JOÃO PEDRO`,``],checks:[`CPU DAEMON-8`,`MEMORY 666K`,`VIDEO ADAPTER`,`GLYPH BUFFER`,`FACE.SYS`,`SOUND DEVICE`,`VOICE DRIVER`,`NETWORK LINK`],footer:[``,`SYSTEM READY`,``],button:`START`,buttonCentre:.79,buttonPadX:1.1,buttonHeight:2.3,buttonScale:1.1,buttonSeconds:.25,alert:[`ERROR 0x666: VIRUS DETECTED`,`DEMON.EXE HAS ROOT ACCESS`,`SYSTEM COMPROMISED`],checkWidth:30,checkFillTo:.77,checkFillToNarrow:.88,checkDone:`OK`,checkTail:3,loadCheck:`VOICE DRIVER`,startDelay:.3,typeRate:150,linePause:.1,blinkRate:1.6,level:1.7,size:.022,lineHeight:1.6,margin:.17,marginNarrow:.12,charWidth:.62,top:.14,maxTextureSize:2048,clearSeconds:.35,buttonLevel:.26,buttonRest:.55,buttonPulse:3.2,buttonHot:2.4,buttonRingGap:.18,buttonRingWidth:.07,buttonWeight:800,buttonBold:.08,alertSeconds:2,alertDelay:.15,alertPause:.18,alarmRiseSeconds:.12,alarmRate:16,alarmBands:28,alarmShift:.035,alarmSparsity:.78,alarmSplit:.004,alarmFlicker:.35,alarmGlow:.5,alarmPulse:14},A={duration:3.4,rowDuration:.3,rowSpeedSpread:.4,rowJitter:.1,headDecay:28,headGain:1.6,cursorHold:.004,catchUpRate:2.5,maxWaitSeconds:14},j={brightness:.95,brightnessSpread:.4,churnBaseRate:.02,churnRate:5,churnSparsity:60,churnFlash:1.1,churnFlashDecay:6,dimWhenFaceOut:.4},M={delay:.5,riseDuration:1.8,fitHeight:.81,fitWidth:1.12,fitWidthNarrow:1.25,fitHeightNarrow:.7,fitHeightMiddle:[.55,.64],offsetY:.015,sink:.67,depth:.26,shadeDepth:.6,light:[-.15,.4,.9],ambient:.1,inkDarken:.95,inkBrighten:.9,shadeGamma:1.8,cavityScale:.012,cavityStrength:.6,shadeGain:.82,heightGlow:.25,edgeSoftness:.3,dissolve:.3,shadeToRamp:.6,rampJitter:.3,shimmerRate:2.2,shimmerAmount:.35,hitThreshold:.06,breatheAmount:.035,breatheSpeed:.9},N={glow:3.6,coreThreshold:.55,redThreshold:.12,travel:[1,1],pulseAmount:.12,pulseSpeed:2.3,followSmoothing:7,fullDeflectionDistance:.9,touchReleaseSeconds:1.5,wanderSpeedX:.43,wanderSpeedY:.29,wanderPhase:1.3,wanderReachX:.8,wanderReachY:.3},ie={openDrop:.14,openWidth:.85,cavity:.06,edgeSoftness:.02,jawHold:.2,jawEnd:.42,attack:32,release:14},P={max:12,radius:.55,reachRows:2.6,bevel:.62,depth:.07,steepness:1.5,coreStart:.5,coreEnd:.95,ragged:.25,rimAmbient:1.15,rimGain:1.1,moatRows:1.3,levelPx:6,stackRows:2,stackPitch:1.4,moatDarken:.88,under:.015,underHot:.17,churnRate:1.5,hotGain:.9,riseSeconds:.8,popSeconds:.22,dim:.72,dimSeconds:.3,heatSeconds:.15,labelLevel:2.4,labelStep:2,labelScale:1.7,labelPad:2,wordMax:16,sparkReach:5,sparkDensity:.3,sparkSpeed:.8,sparkDuty:.35,sparkLevel:1.1,flareLevel:2.4,flareBoost:1.2,pressSink:.65,pressFlash:.7,pressShrink:.12,pressInSeconds:.06,pressOutSeconds:.25,pressHoldSeconds:.12,iconSize:.4,iconBlank:[.62,.62],iconStroke:1.6,joltSeconds:.4,joltPx:5,joltRate:12},F={samples:16,spacing:.1,radius:.05,ragged:.45,hold:.22,revert:.5,restSeconds:.2,level:1.15,red:1,white:0},I={seed:7919,seedStride:104729,max:5,firstDelay:[3.5,4.5],interval:[1.2,3],speed:18,turnChance:.05,turnRows:3,pauseChance:.03,pauseSeconds:[.3,.8],rowBand:[.15,.85],edgeMargin:4,level:2.4,wakeCells:7,wakeRed:.7,hitRadius:.17,wakeReach:12,burstSeconds:1.1,restoreSeconds:.3,burstScale:1.8,debrisRampStart:.45,burstSpeed:1,burstDrag:3,burstGravity:.4,burstSpin:9,burstLift:.12,flashGain:4,flashDecay:4,flashRadius:.22,emberDecay:2.5},L={cap:16,levels:[{scale:1,cracks:6,crackLength:1,bold:0,hold:.7,life:2.3},{scale:3.2,cracks:18,crackLength:.75,bold:.7,hold:3.4,life:7}],shatterHits:2,mergeRadius:.09,bugKillScale:2,boldGain:1.3,boldReach:.6,glintWidth:1.6,glintLevel:1.5,coreRows:1.1,crackJitter:.7,crackLength:[2,5.5],crackWobble:.16,crackGrowSeconds:.14,crackHeal:.8,coreHeal:.45,refill:1.6,darken:.97,rimGain:.9,rimPush:.5,rimLift:.03,flashGain:3,flashDecay:9},R={speed:1.3,reach:1.1,rowSpread:2.6,rowShortest:.2,crackSpread:2.6,rowCost:2.5,dropout:.12,coolSeconds:1,frontSeconds:.14,frontGain:2.6,gain:2.2,redHold:.4,settledAge:60},z={seed:20261012,intervalMin:2.2,intervalMax:5.5,durationMin:.3,durationMax:.75,strengthMin:.45,strengthMax:1,stepRate:18,firstStart:1.3,faceBurstDuration:.9,maxPatches:8,patchCount:[3,5],facePatchCount:8,stripChance:.45,stripWidth:[.25,.8],stripHeight:[.014,.04],blockWidth:[.08,.26],blockHeight:[.07,.2],patchShift:.035,patchSplit:.012,patchDropout:.25,patchFlicker:.5,scrambleChance:.6,scrambleGain:1.3},B={barrel:.4,barrelNarrow:.2,narrowAspect:.6,wideAspect:1.25,aberration:.005,focusBlurPx:.9,edgeBlurPx:2.2,glowBlurPx:7,glowWideBlurPx:34,glowStrength:.18,glowWideStrength:.07,hotGain:.3,redHotGain:.15,fringeGain:.4,exposure:1.6,sepia:.015,saturation:1.25,vignette:.62,scanlineStrength:.07,scanlinePeriodPx:3,rollSpeed:.045,rollWidth:.09,rollGain:.2,rollLines:2,rollLineSpeed:.07,rollLineWidth:.007,rollLineGain:.42,rollLineShift:.0022,grain:.035,spellEdge:.22,grainSpellPeriod:6,grainSpellShare:.45,grainSpellChance:.8,grainSpell:.24,grainSpellDensity:.35,grainSpellPx:1.5,grainSpellSnow:.04,intensityRange:4},ae={maxPixelRatio:2,minPixelRatio:1,pixelRatioStep:.25,slowFrameSeconds:1/42,sampleFrames:50,warmupFrames:40,maxDeltaSeconds:.1,pauseSeconds:.5},V={zoomSeconds:1.8,fillHeight:.75,fillWidth:.75,focusShift:-.05,stallSeconds:1,chunkCells:[6,3],orderCluster:.55,orderCell:.3,orderHeight:.15,releaseSpread:1.3,faceDelay:.25,eyesRelease:1.5,eyesJitter:.15,gravity:4.5,kick:.5,drift:.35,spin:7,pop:.25,releaseFlash:1.2,flashDecay:8,fadeStart:.55,fadeEnd:1.2,monitorStart:1.2,rebootSeconds:.9,signalRise:.35,signalRate:14,signalCalm:.25,signalSurgeChance:.3,tearBands:34,tearShift:.07,tearSparsity:.6,roll:.22,split:.012,flicker:.45,snowPx:2,snowGain:.32,snowSharpness:4,snowWhite:.25,barSpeed:.45,barWidth:.07,barGain:2.2,errors:[`FATAL 0x0000DEAD: core halted`,`glyph buffer underrun @7FFE12A4`,`face.sys: segmentation fault`,`demon.exe: process terminated`,`NO SIGNAL`,`> boot site`],errorStart:.25,errorStagger:.14,errorTypeRate:110,errorSize:.026,errorLineHeight:1.7,errorMargin:.17,errorMarginNarrow:.12,errorCharWidth:.62,errorLevel:2.6,errorBlinkRate:3,errorMaxTextureSize:2048,offStart:1.85,offSagSeconds:.2,offLineSeconds:.3,offDotSeconds:.32,offFadeSeconds:.55,offSag:.8,offOverscan:.07,offWobble:.03,offWobbleWaves:13,offWobbleRate:34,offSkew:.22,offJitterRate:38,offBulge:2.4,offTremble:.7,offSplit:.018,offNoise:.85,offGhost:.3,offGhostDecay:4.5,offGhostLod:2.5,offHalo:1.1,offHaloSize:.075,offLineSize:.006,offDotSize:.012,offGain:3,offBeam:2.5,offGlowSize:.01},H={wallLevel:0,sparkShare:.012,sparkRate:1.1,sparkFlipRate:16,sparkLevel:.75,jamLevel:.9,jamShare:0,windowScale:3,windowWobble:.08,windowRagged:2.2,windowSoft:2.5,windowLevel:.8,coreFaint:.14,auraShape:[1,.85],auraStart:.62,auraEnd:1.08,auraRagged:.3,auraLevel:.24,faceDelay:1.4,faceScale:.9,faceLift:.03,faceLiftNarrow:.24},oe=512,U=160,se=4,ce=100,le=.75,ue=.6,de=.2,fe=`ui-monospace, Consolas, Menlo, monospace`;function pe(e,t,n,r){let i=U*P.iconSize*r/t.box;e.translate((n-t.box*i)/2,(U-t.box*i)/2),e.scale(i,i),e.lineWidth=P.iconStroke,e.lineCap=`square`,e.lineJoin=`miter`;for(let n of t.paths)e.stroke(new Path2D(n))}function W(e,t,n,r){let i=U*P.iconSize*r,a=i*le/t.box,o=t.box*a,s=i*ue,c=(U-o-i*de-s)/2;e.save(),e.translate((n-o)/2,c),e.scale(a,a),e.lineWidth=P.iconStroke,e.lineCap=`square`,e.lineJoin=`miter`;for(let n of t.paths)e.stroke(new Path2D(n));e.restore(),e.fillStyle=`#fff`,e.font=`700 ${s}px ${fe}`,e.textAlign=`center`,e.textBaseline=`top`,e.fillText(t.text,n/2,c+o+i*de)}function me(){let e=document.createElement(`canvas`);e.width=oe,e.height=U*P.max;let t=e.getContext(`2d`),n=new c(e);n.colorSpace=``,n.magFilter=b,n.minFilter=b,n.generateMipmaps=!1;let r=new Float32Array(P.max*se),i=``;return{texture:n,rects:r,set(a){let o=Array.from({length:P.max},(e,t)=>{let n=a[t],r=n?.icon?Math.round(n.width/n.height*ce)/ce:0;return{icon:n?.icon??null,width:Math.min(U*r,oe),size:n?.iconScale||1}}),s=JSON.stringify(o);o.some(e=>e.width>0)&&s!==i&&(i=s,t.fillStyle=`#000`,t.fillRect(0,0,e.width,e.height),t.strokeStyle=`#fff`,r.fill(0),o.forEach((e,n)=>{e.width<=0||(t.save(),t.translate(0,U*n),(e.icon.text===void 0?pe:W)(t,e.icon,e.width,e.size),t.restore(),r.set([0,1-(n+1)/P.max,e.width/oe,1/P.max],n*se))}),n.needsUpdate=!0)},dispose(){n.dispose(),e.width=0,e.height=0}}}var G=`
float hash11(float p) {
	p = fract(p * 0.1031);
	p *= p + 33.33;
	p *= p + p;

	return fract(p);
}

float hash21(vec2 p) {
	vec3 p3 = fract(vec3(p.xyx) * 0.1031);
	p3 += dot(p3, p3.yzx + 33.33);

	return fract((p3.x + p3.y) * p3.z);
}
`;function K(e){return Number.isInteger(e)?e.toFixed(1):String(e)}function q(e){return`vec${e.length}(${e.map(K).join(`, `)})`}var he=[-1,-1,0,3,-1,0,-1,3,0],ge=.18,_e=-1,ve=1e6,ye=[1,1,0,0],be=`.`,xe=1.6,Se=100,Ce={text:``,centre:0,padX:0,height:0,scale:1,seconds:1,level:1,rest:1,pulse:0,hot:1,weight:500,bold:0,ringGap:0,ringWidth:0},we=`
varying vec2 vUv;

void main() {
	vUv = position.xy * 0.5 + 0.5;
	gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Te=`
uniform sampler2D tText;
uniform vec4 uLayout;
uniform float uClock;
uniform float uLevel;
uniform vec2 uButton;
uniform vec4 uButtonBox;
uniform float uButtonStart;
uniform float uAspect;
uniform float uLengths[LINE_COUNT];
uniform float uWidths[LINE_COUNT];
uniform float uStarts[LINE_COUNT];
uniform float uAlerts[LINE_COUNT];

varying vec2 vUv;

void main() {
	float across = (vUv.x - uLayout.x) / uLayout.w;
	float down = (1.0 - vUv.y - uLayout.y) / uLayout.z;
	float line = floor(down);
	float listed = step(0.0, down) * step(line, float(LINE_COUNT) - 0.5);
	int index = int(clamp(line, 0.0, float(LINE_COUNT) - 1.0));
	float lineWidth = uWidths[index];
	float born = uClock - uStarts[index];
	float head = min(floor(max(born, 0.0) * TYPE_RATE) / max(uLengths[index], 1.0), 1.0) * lineWidth;
	float typed = listed * step(0.0, born) * step(0.0, across) * step(across, head);
	float glyph = texture2D(tText, vUv).r;

	vec2 place = vec2(vUv.x, 1.0 - vUv.y) - uButtonBox.xy;
	vec2 inButton = place / max(uButtonBox.zw, vec2(0.000001));
	vec2 outside = max(-place, place - uButtonBox.zw) * vec2(uAspect, 1.0) / max(uButtonBox.w, 0.000001);
	float away = max(outside.x, outside.y);
	float buttonBorn = (uClock - uButtonStart) / BUTTON_SECONDS;
	float inPlate = step(0.0, buttonBorn) * step(0.0, inButton.x) * step(inButton.x, min(buttonBorn, 1.0)) * step(0.0, inButton.y) * step(inButton.y, 1.0);
	float lit = max(uButton.x, uButton.y);
	float pulse = BUTTON_REST + (1.0 - BUTTON_REST) * (0.5 + 0.5 * sin(uClock * BUTTON_PULSE));
	vec2 thicken = vec2(uLayout.w * BUTTON_BOLD, 0.0);
	float bold = max(glyph, max(texture2D(tText, vUv + thicken).r, texture2D(tText, vUv - thicken).r));
	float plate = inPlate * (1.0 - bold) * BUTTON_LEVEL * mix(pulse, BUTTON_HOT, lit);
	float ring = step(1.0, buttonBorn) * lit * step(BUTTON_RING_GAP, away) * step(away, BUTTON_RING_GAP + BUTTON_RING_WIDTH) * BUTTON_LEVEL * BUTTON_HOT;

	float last = step(float(LINE_COUNT) - 1.5, line);
	float blink = last * step(0.5, fract(uClock * BLINK_RATE));
	float typing = step(head, lineWidth - 0.01);
	float inBlock = step(head, across) * step(across, head + 1.0) * step(CURSOR_INSET, fract(down)) * step(fract(down), 1.0 - CURSOR_INSET);
	float cursor = listed * step(0.0, born) * step(0.0, across) * inBlock * max(typing, blink);

	float light = max(mix(max(glyph * typed, cursor), plate, inPlate), ring) * TEXT_LEVEL * uLevel / INTENSITY_RANGE;
	gl_FragColor = light * mix(TEXT_TINT, ALERT_TINT, uAlerts[index] * listed * (1.0 - inPlate) * (1.0 - ring));
}
`;function Ee({lines:e,starts:t,tint:r,typeRate:i,blinkRate:a,level:o,size:s,lineHeight:l,margin:u,charWidth:d,maxTextureSize:f,top:m=null,alerts:_=[],button:y=Ce,columns:x=0,fillTo:te=0,marginNarrow:ne=u,fillToNarrow:re=te}){let C=e.map(e=>typeof e==`string`?{text:e,tail:``}:e),w=C.map(e=>e.tail?x:e.text.length),T=Math.max(...C.map((e,t)=>te>0?e.text.length+e.tail.length:w[t])),E=document.createElement(`canvas`),D=E.getContext(`2d`),k=new c(E);k.colorSpace=``,k.magFilter=b,k.minFilter=b,k.generateMipmaps=!1;let A={tText:{value:k},uLayout:{value:new g(0,0,1,1)},uClock:{value:_e},uLevel:{value:1},uButton:{value:new n(0,0)},uButtonBox:{value:new g(0,0,0,0)},uButtonStart:{value:ve},uAspect:{value:1},uLengths:{value:Float32Array.from(w)},uWidths:{value:Float32Array.from(w)},uStarts:{value:Float32Array.from(t)},uAlerts:{value:Float32Array.from(e,(e,t)=>+!!_.includes(t))}},j=new ee;j.setAttribute(`position`,new v(new Float32Array(he),3));let M=new S({uniforms:A,vertexShader:we,fragmentShader:Te,defines:{LINE_COUNT:e.length,TYPE_RATE:K(i),BLINK_RATE:K(a),TEXT_LEVEL:K(o),TEXT_TINT:q(r),ALERT_TINT:q(ye),BUTTON_SECONDS:K(y.seconds),BUTTON_LEVEL:K(y.level),BUTTON_BOLD:K(y.bold*y.scale),BUTTON_REST:K(y.rest),BUTTON_PULSE:K(y.pulse),BUTTON_HOT:K(y.hot),BUTTON_RING_GAP:K(y.ringGap),BUTTON_RING_WIDTH:K(y.ringWidth),INTENSITY_RANGE:K(B.intensityRange),CURSOR_INSET:K(ge)},blending:5,blendEquation:100,blendSrc:201,blendDst:201,depthTest:!1,depthWrite:!1,toneMapped:!1}),N=new p(j,M);N.frustumCulled=!1;let ie=new h,P=e=>{if(!y.text)return;let t=e*y.scale;D.font=`${y.weight} ${t}px ${O.fontFamily}`,D.textBaseline=`alphabetic`;let n=D.measureText(y.text),r=n.width+t*y.padX*2,i=t*y.height,a=E.height*y.centre,o=a+(n.actualBoundingBoxAscent-n.actualBoundingBoxDescent)/2;D.fillText(y.text,(E.width-n.width)/2,o),A.uButtonBox.value.set((E.width-r)/2/E.width,(a-i/2)/E.height,r/E.width,i/E.height)};return{uniforms:A,setSize(t,n,r=0){k.dispose();let i=Math.min(1,f/Math.max(t,n));E.width=Math.max(1,Math.round(t*i)),E.height=Math.max(1,Math.round(n*i));let a=u+(ne-u)*r,o=te+(re-te)*r,c=E.width*(1-a*2);D.font=`${O.fontWeight} ${Se}px ${O.fontFamily}`;let p=Math.max(0,...C.filter(e=>!e.tail).map(e=>D.measureText(e.text).width))/Se,h=Math.min(E.height*s,c/Math.max(T*d,p)),g=h*l,_=E.width*a,v=m===null?(E.height-g*e.length)/2:E.height*m;D.fillStyle=`#000`,D.fillRect(0,0,E.width,E.height),D.fillStyle=`#fff`,D.font=`${O.fontWeight} ${h}px ${O.fontFamily}`,D.textBaseline=`middle`;let y=h*d,b=e=>D.measureText(e).width,ee=b(be)*xe,S=o>0?(E.width*o-_)/y:x;C.forEach((e,t)=>{let n=v+g*(t+.5),r=_+y*S;D.fillText(e.text,_,n);for(let t=_+b(e.text)+ee;e.tail&&t+ee*2<r-b(e.tail);t+=ee)D.fillText(be,t,n);D.fillText(e.tail,r-b(e.tail),n),A.uWidths.value[t]=e.tail?S:b(e.text)/y}),P(h),A.uAspect.value=E.width/E.height,A.uLayout.value.set(_/E.width,v/E.height,g/E.height,y/E.width),k.needsUpdate=!0},setStart(e,t){A.uStarts.value[e]=t},setButtonStart(e){A.uButtonStart.value=e},buttonBox(){let e=A.uButtonBox.value;return{left:e.x,top:e.y,width:e.z,height:e.w}},render(e){let{autoClear:t}=e;e.autoClear=!1,e.render(N,ie),e.autoClear=t},dispose(){j.dispose(),M.dispose(),k.dispose(),E.width=0,E.height=0}}}var De=[1,0,0,0],Oe=1e6;function ke(){let e=k.checks.map(e=>({text:e,tail:k.checkDone})),t=e=>typeof e==`string`?e.length:k.checkWidth,n=[...k.header,...e,...k.footer],r=[...n,...k.alert],i=[],a=k.startDelay;for(let e of n)i.push(a),a+=t(e)/k.typeRate+k.linePause;let o=k.header.length+k.checks.indexOf(k.loadCheck),s=(k.checkWidth-k.checkTail)/k.typeRate,c=Ee({lines:r,starts:[...i,...k.alert.map(()=>Oe)],tint:De,typeRate:k.typeRate,blinkRate:k.blinkRate,level:k.level,size:k.size,lineHeight:k.lineHeight,margin:k.margin,marginNarrow:k.marginNarrow,charWidth:k.charWidth,maxTextureSize:k.maxTextureSize,top:k.top,columns:k.checkWidth,fillTo:k.checkFillTo,fillToNarrow:k.checkFillToNarrow,alerts:k.alert.map((e,t)=>n.length+t),button:{text:k.button,centre:k.buttonCentre,padX:k.buttonPadX,height:k.buttonHeight,scale:k.buttonScale,seconds:k.buttonSeconds,level:k.buttonLevel,rest:k.buttonRest,pulse:k.buttonPulse,hot:k.buttonHot,weight:k.buttonWeight,bold:k.buttonBold,ringGap:k.buttonRingGap,ringWidth:k.buttonRingWidth}});return c.setButtonStart(a),{...c,duration:a+k.buttonSeconds,reach:e=>i[o]+s*e,setButton(e,t){c.uniforms.uButton.value.set(+!!e,+!!t)},alarm(e){let t=e+k.alertDelay;k.alert.forEach((e,r)=>{c.setStart(n.length+r,t),t+=e.length/k.typeRate+k.alertPause})}}}var Ae=4,je=Math.PI*2,Me=255,Ne=1,Pe=2,Fe=3;function Ie(){return{shown:!1,hot:!1,accent:!1,alarmed:!1,bare:!1,calm:!1,front:!1,swift:!1,follows:!1,jolting:!1,pressed:!1,presence:0,heat:0,alarm:0,jolt:0,press:0,pressHold:0,centerX:0,centerY:0,halfWidth:0,halfHeight:0,worldPerPixel:0,clientX:0,clientY:0}}function Le(e){let t=new x(e,P.wordMax,P.max,a,r);return t.colorSpace=``,t.wrapS=y,t.wrapT=y,t.magFilter=s,t.minFilter=s,t.generateMipmaps=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function Re(e){let t=new Float32Array(P.max*Ae),n=new Float32Array(P.max*Ae),r=new Float32Array(P.max*Ae),i=new Float32Array(P.max*Ae),a=Float32Array.from({length:P.max*Pe},(e,t)=>t%Pe===0?1:P.labelStep),o=new Uint8Array(P.max*P.wordMax).fill(Me),s=Le(o),c=Array.from({length:P.max},Ie),l={columns:1,rows:1,cellWidth:1,cellHeight:1},u=[],d=0,f=(e,t,n,r)=>{let i=r/n;return t>e?Math.min(e+i,t):Math.max(e-i,t)},p=e=>{let t=P.joltSeconds-e.jolt;return e.jolt>0?Math.sign(Math.sin(t*P.joltRate*je))*P.joltPx*(e.jolt/P.joltSeconds):0},m=()=>+!!u.some(e=>e?.front),h=e=>e.top+e.height/2,g=(e,t)=>Math.abs(t(e.left+e.width/2,h(e)).x),_=(e,t)=>{let n=e.left+e.width/2;return(t(n,e.top).y+t(n,e.top+e.height).y)/2},v=(e,t)=>Math.round(l.rows/2-.5-_(e,t)/l.cellHeight),y=(e,t)=>Math.abs(e.width-t.width)<=Ne&&Math.abs(e.height-t.height)<=Ne,b=(e,t)=>e.reduce((e,n)=>g(n,t)<g(e,t)?n:e),ee=(e,t)=>{let n=e.left+e.width/2;return t(n,e.top).y-t(n,e.top+e.height).y},x=(t,n,r,{row:c,lift:u,model:d},f,p)=>{let{columns:m,rows:g,cellWidth:_,cellHeight:v}=l,y=r.left+r.width/2,b=f(r.left,h(r)).x*p,x=f(r.left+r.width,h(r)).x*p,te=[...(r.text??``).toLocaleUpperCase()].slice(0,P.wordMax),ne=r.labelStep||P.labelStep,re=Math.max((te.length-1)*ne+1,1),S=(x-b)/_,C=Math.max(Math.round((S-re)/2),1),w=ee(d,f)/v,T=r.anyRows?Math.max(Math.round(w),Fe):Math.max(Math.round(w/2-.5),1)*2+1,E=T%2==0?.5:0,D=T*v/ee(r,f),O=r.keepShape?Math.max(Math.round(S*D),1):re+C*2,k=Math.round((b+x)/2/_+m/2-O/2);t.centerX=(k+O/2-m/2)*_,t.centerY=(g/2-c-.5+E)*v,t.halfWidth=O/2*_,t.halfHeight=T/2*v,t.worldPerPixel=(x-b)/r.width,t.clientX=y,t.clientY=h(r),t.accent=!!r.accent,t.bare=!!r.bare,t.calm=!!r.calm,t.front=!!r.front,t.swift=!!r.swift,t.follows=!!r.follow,i.set([k+(O-re)/2,c,u+E,te.length],n*Ae),a.set([r.labelScale||1,ne],n*Pe),o.fill(Me,n*P.wordMax,(n+1)*P.wordMax),te.forEach((t,r)=>{o[n*P.wordMax+r]=e.rankOf(t)??Me}),s.needsUpdate=!0},te=(e,t)=>{let n=u.filter(e=>e&&e.width>0&&e.height>0),r=[],i=[];c.forEach((a,o)=>{let s=u[o];if(!n.includes(s))return;let c=n.filter(e=>Math.abs(h(e)-h(s))<=P.levelPx),l=!!s.stack&&r[o-1]!==void 0;r[o]=l?r[o-1]+P.stackRows:v(b(c,e),e),i[o]=l?i[o-1]+P.stackRows-P.stackPitch*(s.labelScale||1):0;let d=b(c.filter(e=>y(e,s)),e);x(a,o,s,{row:r[o],lift:i[o],model:d},e,t)})};return{rects:t,effects:n,moods:r,words:i,labels:a,wordTexture:s,count:P.max,setLayout(e){Object.assign(l,e)},refresh:te,set(e,t,n){u=e,c.forEach((t,n)=>{let r=e[n],i=!!r?.jolt;i&&!t.jolting&&(t.jolt=P.joltSeconds),t.jolting=i;let a=!!r?.pressed;a&&!t.pressed&&(t.pressHold=P.pressHoldSeconds),t.pressed=a,t.shown=!!r,t.hot=!!r?.hot,t.alarmed=!!r?.alarm}),te(t,n)},update(e){d=f(d,m(),P.dimSeconds,e);for(let t of c){t.presence=f(t.presence,+!!t.shown,t.swift||!t.shown?P.popSeconds:P.riseSeconds,e),t.heat=f(t.heat,+!!t.hot,P.heatSeconds,e),t.alarm=f(t.alarm,+!!t.alarmed,P.heatSeconds,e),t.jolt=Math.max(t.jolt-e,0),t.pressHold=Math.max(t.pressHold-e,0);let n=t.pressed||t.pressHold>0;t.press=f(t.press,+!!n,n?P.pressInSeconds:P.pressOutSeconds,e)}},settle(){d=m();for(let e of c)e.presence=+!!e.shown,e.heat=+!!e.hot,e.alarm=+!!e.alarmed,e.press=+!!e.pressed,e.pressHold=0,e.jolt=0},publish(){return c.forEach((e,i)=>{t.set([e.centerX+p(e)*e.worldPerPixel,e.centerY,e.halfWidth,e.halfHeight],i*Ae),n.set([+!!e.accent,e.presence,e.heat,e.press],i*Ae),r.set([e.alarm,+!!e.bare,+!!e.front,+!!e.calm],i*Ae)}),d},eachFollowed(e){c.forEach((t,n)=>{t.shown&&t.follows&&e(n,t)})},dispose(){s.dispose()}}}var ze=1831565813,Be=4294967296;function J(e){let t=e|0;return()=>{t=t+ze|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/Be}}var Ve=7,He=3,Ue=2,We=4,Ge=255,Ke=`#`,qe=-1,Je=.5,Ye=2,Xe=4,Ze={right:0,left:1,up:2,down:3},Qe=[[` \\\\ // `,`~(###@>`,` // \\\\ `],[` // \\\\ `,`~(###@>`,` \\\\ // `]],$e=[[`  \\@/  `,`  >#<  `,`  /~\\  `],[`  /@\\  `,`  <#>  `,`  \\~/  `]],et={"/":`\\`,"\\":`/`,"(":`)`,")":`(`,"<":`>`,">":`<`},tt={"/":`\\`,"\\":`/`};function nt(e){return e.map(e=>[...e].reverse().map(e=>et[e]??e).join(``))}function rt(e){return[...e].reverse().map(e=>[...e].map(e=>tt[e]??e).join(``))}function it(e){let t=[Qe,Qe.map(nt),$e,$e.map(rt)],n=14*t.length,i=new Uint8Array(n*He).fill(Ge);t.forEach((t,r)=>{t.forEach((t,a)=>{t.forEach((t,o)=>{[...t].forEach((t,s)=>{let c=o*n+(r*Ue+a)*Ve+s;t!==` `&&(i[c]=t===Ke?e.cursorIndex:e.rankOf(t))})})})});let o=new x(i,n,He,a,r);return o.colorSpace=``,o.wrapS=y,o.wrapT=y,o.magFilter=s,o.minFilter=s,o.generateMipmaps=!1,o.unpackAlignment=1,o.needsUpdate=!0,o}function at(e){return{slot:e,random:J(I.seed+(e+1)*I.seedStride),alive:!1,column:0,row:0,direction:1,frame:0,turn:0,turnTicks:0,pauseTicks:0,stepClock:0}}function ot(e){let t=J(I.seed),n=(e,[t,n])=>t+(n-t)*e(),r=it(e),i=new Float32Array(I.max*We),a=new Float32Array(I.max*We),o=new Float32Array(I.max*We).fill(qe),s=Array.from({length:I.max},(e,t)=>at(t)),c={columns:1,rows:1,cellWidth:1,cellHeight:1,firstColumn:0,firstRow:0,visibleColumns:1,visibleRows:1},l={x:0,y:0},u=1/I.speed,d=n(t,I.firstDelay),f=0,p=!1,m=e=>{let t=e.slot*We,n=e.turnTicks>0,r=n?e.turn<0?Ze.up:Ze.down:e.direction>0?Ze.right:Ze.left;i[t]=e.column,i[t+1]=e.row,i[t+2]=r*Ue+e.frame,i[t+3]=+!!e.alive,a[t]=n?0:e.direction,a[t+1]=n?e.turn:0,a[t+2]=n?He/2:Ve/2,a[t+3]=n?I.wakeCells/3:I.wakeCells},h=(e,t)=>s.some(n=>n!==e&&n.alive&&Math.abs(n.row-t)<=He),g=e=>{let{random:t}=e;e.direction=t()<Je?1:-1,e.column=Math.round(e.direction>0?c.firstColumn-Ve-I.edgeMargin:c.firstColumn+c.visibleColumns+I.edgeMargin);for(let r=0;r<Xe&&(e.row=Math.round(c.firstRow+c.visibleRows*n(t,I.rowBand)),h(e,e.row));r++);e.frame=0,e.turnTicks=0,e.pauseTicks=0,e.stepClock=0,e.alive=!0},_=e=>{let t=c.firstRow+c.visibleRows*I.rowBand[0],n=c.firstRow+c.visibleRows*I.rowBand[1],r=1+Math.floor(e.random()*I.turnRows);e.turn=e.random()<Je?-1:1,(e.row+e.turn*r<t||e.row+e.turn*r>n)&&(e.turn=-e.turn),e.turnTicks=r*Ye},v=e=>{if(e.pauseTicks>0){--e.pauseTicks;return}if(e.frame=1-e.frame,e.turnTicks>0){--e.turnTicks,e.turnTicks%Ye===0&&(e.row+=e.turn);return}if(e.column+=e.direction,e.direction>0?e.column>c.firstColumn+c.visibleColumns+I.edgeMargin:e.column+Ve<c.firstColumn-I.edgeMargin){e.alive=!1;return}let t=e.random();t<I.turnChance?_(e):t<I.turnChance+I.pauseChance&&(e.pauseTicks=Math.ceil(n(e.random,I.pauseSeconds)*I.speed))},y=e=>{for(let t=0;t<I.max;t++){let n=t*We+2;o[n]!==qe&&(o[n]+=e,o[n]>I.burstSeconds+I.restoreSeconds&&(o[n]=qe))}};return{sprite:r,bodies:i,headings:a,bursts:o,count:I.max,columns:Ve,rows:He,setLayout(e){Object.assign(c,e)},update(e,r){if(y(e),!p&&r>=d){let e=s.find(e=>!e.alive);e&&g(e),d=r+n(t,I.interval)}for(let t of s)if(t.alive){for(t.stepClock+=e;t.alive&&t.stepClock>=u;)t.stepClock-=u,v(t);m(t)}},tryKill(e,t){let n=null,r=I.hitRadius;for(let i of s){if(!i.alive)continue;let a=(i.column+Ve/2-c.columns/2)*c.cellWidth,o=(c.rows/2-i.row-He/2)*c.cellHeight,s=Math.hypot(e-a,t-o);s<=r&&(r=s,n=i,l.x=a,l.y=o)}if(!n)return null;let a=f*We;return f=(f+1)%I.max,o[a]=n.column,o[a+1]=n.row,o[a+2]=0,o[a+3]=i[n.slot*We+2],n.alive=!1,m(n),l},halt(){p=!0;for(let e of s)e.alive=!1,m(e)},hide(){for(let e=0;e<I.max;e++)i[e*We+3]=0,o[e*We+2]=qe},dispose(){r.dispose()}}}var st=[1,1,0,0];function ct(){let e=V.errors.map((e,t)=>V.errorStart+t*V.errorStagger),t=Ee({lines:V.errors,starts:e,tint:st,typeRate:V.errorTypeRate,blinkRate:V.errorBlinkRate,level:V.errorLevel,size:V.errorSize,lineHeight:V.errorLineHeight,margin:V.errorMargin,marginNarrow:V.errorMarginNarrow,charWidth:V.errorCharWidth,maxTextureSize:V.errorMaxTextureSize});return Object.assign(t,{typing:t=>V.errors.some((n,r)=>t>=e[r]&&t<e[r]+n.length/V.errorTypeRate)})}var lt=1e-4;function ut(e){let t={x:0,y:e.left[1]},n=new Float32Array(4),r=(r,i)=>{let a=t.x-r[0],o=t.y-r[1],s=Math.max(Math.hypot(a,o),lt),c=Math.min(s/N.fullDeflectionDistance,1)/s;n[i]=a*c*e.gazeRange[0]*N.travel[0],n[i+1]=o*c*e.gazeRange[1]*N.travel[1]};return{offsets:n,rest(){n.fill(0)},relax(e){let t=Math.exp(-N.followSmoothing*e);for(let e=0;e<n.length;e++)n[e]*=t},update(n,i,a){let o=a?a.x:Math.sin(i*N.wanderSpeedX)*N.wanderReachX,s=a?a.y:e.left[1]+Math.sin(i*N.wanderSpeedY+N.wanderPhase)*N.wanderReachY,c=1-Math.exp(-N.followSmoothing*n);t.x+=(o-t.x)*c,t.y+=(s-t.y)*c,r(e.left,0),r(e.right,2)}}}var Y=256,dt=2,ft=9,pt=.76,mt=-.25,X={centerY:.22,radiusX:.6,radiusTop:.66,radiusBottom:1.06,jawTaper:.4,jawTaperPower:1.5,profilePower:2.5,heightPower:.52,skirtStart:.86,skirtEnd:1.14},ht=1.4,gt=1,_t=.6,Z={top:.17,bottom:-.27,widthTop:.055,widthBottom:.08,heightTop:.075,heightBottom:.2,heightPower:1.2,edge:.05},vt=[[0,.5,.34,.2,.04,0],[0,.2,.1,.07,.06,0],[0,-.215,.075,.065,.1,0],[0,-.34,.07,.035,-.04,0],[0,-.5,.3,.17,.06,0],[0,-.665,.13,.036,-.04,0],[0,-.77,.13,.1,.1,0]],yt=[[.26,.225,.2,.05,.11,.3],[.27,.085,.15,.07,-.16,.26],[.52,.26,.1,.2,-.04,0],[.38,-.06,.17,.095,.09,.35],[.095,-.25,.05,.04,.06,0],[.33,-.36,.1,.18,-.03,-.2]],Q={y:-.5,halfWidth:.24,curve:.55,tilt:.1,endSoftness:.06,creaseWidth:.036,creaseDepth:.12,lipOffset:.062,lipWidth:.045,lipGain:.06,lipReach:.7,cornerRadius:.05,cornerDepth:.05,inkWidth:.04,inkStrength:1,lipInkOffset:.085,lipInkWidth:.045,lipInkStrength:.4},bt={edgeRatio:.6,jointOverlap:.5,rootFade:.16,light:[-.35,.94],litInk:.6,shadeInk:-.35,ridgeInk:1,ridgeWidth:.045,seamInk:.85,seamWidth:.07,blend:.2},xt=[{points:[[.34,.6],[.66,.86],[.56,1.16],[.74,1.58]],widths:[.21,.16,.11,.012],crests:[.66,.8,.68,.5],skews:[.35,-.4,.3],breakAt:-1,breakGap:0,chip:0},{points:[[-.36,.6],[-.66,.96],[-.5,1.17],[-.63,1.4]],widths:[.21,.17,.12,.085],crests:[.66,.78,.7,.58],skews:[-.3,.45,-.25],breakAt:2,breakGap:.085,chip:.9}],St={center:[.27,.08],halfWidth:.2,halfHeight:.135,slant:.3,lidSoftness:[.7,1.1],irisRadius:.07,gazeRange:[.11,.075]};function Ct(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}function wt(e,t,n){let r=Math.max(n-Math.abs(e-t),0)/n;return Math.max(e,t)+r*r*n*.25}function Tt(e,t){let n=t-X.centerY,r=n>=0?X.radiusTop:X.radiusBottom,i=n>=0?0:Math.min(-n/X.radiusBottom,1),a=X.radiusX*(1-X.jawTaper*i**+X.jawTaperPower);return Math.hypot(e/a,n/r)}function Et(e){return(1-e**+X.profilePower)**X.heightPower}function Dt(e){if(e<X.skirtStart)return Et(e);if(e>=X.skirtEnd)return 0;let t=X.skirtStart,n=X.skirtEnd-t,r=Et(t),i=X.heightPower*(1-t**+X.profilePower)**(X.heightPower-1)*-X.profilePower*t**(X.profilePower-1),a=(e-t)/n;return Math.max((2*a**3-3*a**2+1)*r+(a**3-2*a**2+a)*i*n,0)}function Ot([e,t,n,r,i,a],o){return{centerX:e*o,centerY:t,gain:i,alongX:Math.cos(a)/n,alongY:Math.sin(a)*o/n,acrossX:-Math.sin(a)*o/r,acrossY:Math.cos(a)/r}}var kt=[...vt.map(e=>Ot(e,1)),...yt.flatMap(e=>[Ot(e,1),Ot(e,-1)])];function At(e,t){let n=0;for(let r of kt){let i=e-r.centerX,a=t-r.centerY,o=i*r.alongX+a*r.alongY,s=i*r.acrossX+a*r.acrossY,c=o*o+s*s;c<ft&&(n+=r.gain*Math.exp(-c))}return n}function jt(e,t){let n=(Z.top-t)/(Z.top-Z.bottom);if(n<=-Z.edge||n>=1+Z.edge)return 0;let r=Math.min(Math.max(n,0),1),i=Z.widthTop+(Z.widthBottom-Z.widthTop)*r;return(Z.heightTop+(Z.heightBottom-Z.heightTop)*r**+Z.heightPower)*(Ct(-Z.edge,Z.edge,n)*(1-Ct(1-Z.edge,1+Z.edge,n)))*Math.exp(-((e/i)**2))}function Mt(e){return Q.y+Q.curve*e*e+Q.tilt*e}function Nt(e,t){let n=Math.abs(e)/Q.halfWidth,r=t-Mt(e),i=-Q.creaseDepth*Math.exp(-((r/Q.creaseWidth)**2))*Pt(e),a=1-Ct(Q.lipReach*.6,Q.lipReach,n),o=Q.lipGain*a*(Math.exp(-(((r-Q.lipOffset)/Q.lipWidth)**2))+Math.exp(-(((r+Q.lipOffset)/Q.lipWidth)**2))),s=0;for(let n of[-1,1]){let r=n*Q.halfWidth,i=(e-r)/Q.cornerRadius,a=(t-Mt(r))/Q.cornerRadius;s-=Q.cornerDepth*Math.exp(-(i*i+a*a))}return i+o+s}function Pt(e){let t=Math.abs(e)/Q.halfWidth,n=Q.endSoftness/Q.halfWidth;return 1-Ct(1-n,1+n,t)}function Ft(e,t){let n=Math.abs(e)-St.center[0],r=t-St.center[1]-St.slant*n,i=n/St.halfWidth;if(Math.abs(i)>=1)return 0;let a=Math.abs(r)/(St.halfHeight*(1-i*i));return 1-Ct(St.lidSoftness[0],St.lidSoftness[1],a)}function It(e,t){let n=t-Mt(e),r=Pt(e),i=Q.inkStrength*Math.exp(-((n/Q.inkWidth)**2))*r;return Q.lipInkStrength*r*(Math.exp(-(((n-Q.lipInkOffset)/Q.lipInkWidth)**2))+Math.exp(-(((n+Q.lipInkOffset)/Q.lipInkWidth)**2)))-Math.max(Ft(e,t),i)}function Lt({points:e,widths:t,crests:n,skews:r,breakAt:i,breakGap:a,chip:o}){let s=e.slice(1).map(([s,c],l)=>{let[u,d]=e[l],f=Math.hypot(s-u,c-d),p=l===e.length-2;return{startX:u,startY:d,length:f,directionX:(s-u)/f,directionY:(c-d)/f,widthStart:t[l],widthEnd:t[l+1],crestStart:n[l],crestEnd:n[l+1],skew:r[l],litSide:Math.sign(((c-d)*bt.light[0]-(s-u)*bt.light[1])/f),from:l===i?a:0,seam:l>0&&l!==i,root:l===0,capSlope:p?o:0,overlap:p?0:bt.jointOverlap}}),c=Math.max(...t)*(1+bt.jointOverlap);return{segments:s,minX:Math.min(...e.map(([e])=>e))-c,maxX:Math.max(...e.map(([e])=>e))+c,minY:Math.min(...e.map(([,e])=>e))-c,maxY:Math.max(...e.map(([,e])=>e))+c}}var Rt=xt.map(Lt),zt={height:0,ink:0};function Bt(e,t){zt.height=0,zt.ink=0;for(let n of Rt)if(!(e<n.minX||e>n.maxX||t<n.minY||t>n.maxY))for(let r of n.segments){let n=e-r.startX,i=t-r.startY,a=n*r.directionX+i*r.directionY,o=n*r.directionY-i*r.directionX,s=Math.min(Math.max(a/r.length,0),1),c=r.widthStart+(r.widthEnd-r.widthStart)*s,l=o-r.skew*c,u=l>=0?c*(1-r.skew):c*(1+r.skew),d=Math.abs(l)/u,f=r.length+c*r.overlap+r.capSlope*o;if(d>=1||a<r.from||a>f)continue;let p=r.crestStart+(r.crestEnd-r.crestStart)*s,m=r.root?Ct(0,bt.rootFade,a):1,h=p*(1-(1-bt.edgeRatio)*d)*m;if(h<=zt.height)continue;let g=r.seam&&a<bt.seamWidth,_=Math.abs(l)<bt.ridgeWidth/2;zt.height=h;let v=l*r.litSide>=0?bt.litInk:bt.shadeInk;zt.ink=g?-bt.seamInk:(_?bt.ridgeInk:v)*m}return zt}var Vt={height:0,ink:0};function Ht(e,t){let n=Tt(e,t),r=Bt(e,t);if(Vt.height=r.height,Vt.ink=r.ink,n>=X.skirtEnd)return Vt;let i=jt(e,t)+Nt(e,t)+At(e,t),a=Ct(gt,_t,n),o=Math.max(Dt(n)+ht*i*a,0);return Vt.height=wt(o,r.height,bt.blend),Vt.ink=r.height>o?r.ink:It(e,t),Vt}function Ut(){let e=mt+St.center[1]*pt,t=St.center[0]*pt;return{left:[-t,e],right:[t,e],irisRadius:St.irisRadius*pt,gazeRange:[St.gazeRange[0]*pt,St.gazeRange[1]*pt]}}function Wt(){let e=X.centerY+X.radiusTop,t=X.centerY-X.radiusBottom;return{centerY:mt+(e+t)/2*pt,height:(e-t)*pt,width:X.radiusX*2*pt}}function Gt(){return{line:[Q.y,Q.curve,Q.tilt,Q.halfWidth],frame:[mt,pt]}}function Kt(){let e=new Float32Array(Y*Y),t=new Uint16Array(Y*Y*dt),n=0;for(let r=0;r<Y;r++){let i=((r+.5)/Y*2-1-mt)/pt;for(let a=0;a<Y;a++){let o=((a+.5)/Y*2-1)/pt,s=r*Y+a,c=Ht(o,i);e[s]=c.height,t[s*dt+1]=u.toHalfFloat(c.ink),n=Math.max(n,c.height)}}let r=new Uint8Array(Y*Y);for(let i=0;i<e.length;i++)t[i*dt]=u.toHalfFloat(e[i]/n),r[i]=+(e[i]/n>M.hitThreshold);let i=(e,t)=>e<0||e>=1||t<0||t>=1?!1:r[Math.floor(t*Y)*Y+Math.floor(e*Y)]===1,a=new x(t,Y,Y,C,ne);return a.colorSpace=``,a.wrapS=y,a.wrapT=y,a.magFilter=b,a.minFilter=b,a.generateMipmaps=!1,a.needsUpdate=!0,{texture:a,covers:i,eyes:Ut(),mouth:Gt(),head:Wt()}}var qt=4,Jt=3,Yt=1,Xt=127.1,Zt=311.7,Qt=43758.5453,$t=.5,en=.5;function tn(e,t){let n=Math.sin(e*Xt+t*Zt)*Qt;return n-Math.floor(n)}function nn(e){let t=J(z.seed),n=J(z.seed+Yt),r=(e,n)=>e+(n-e)*t(),i=([e,t])=>e+(t-e)*n(),a={start:e,end:0,strength:0,count:0},o=new Float32Array(z.maxPatches*qt),s=new Float32Array(z.maxPatches),c=new Float32Array(z.maxPatches*qt),l=new Float32Array(z.maxPatches*Jt),u=e=>{a.count=Math.min(e,z.maxPatches);for(let e=0;e<a.count;e++){let t=n()<z.stripChance,r=i(t?z.stripWidth:z.blockWidth),a=i(t?z.stripHeight:z.blockHeight),c=n()*(1-r),l=n()*(1-a);o.set([c,l,c+r,l+a],e*qt),s[e]=n()<en?-1:1}},d=e=>{a.start=e,a.end=e+r(z.durationMin,z.durationMax),a.strength=r(z.strengthMin,z.strengthMax),u(Math.round(i(z.patchCount)))};return d(e),{rects:c,effects:l,trigger(e,t){a.start=e,a.end=e+t,a.strength=z.strengthMax,u(z.facePatchCount)},sample(e){if(e>=a.end&&d(a.end+r(z.intervalMin,z.intervalMax)),c.fill(0),l.fill(0),e<a.start)return;let t=Math.floor(e*z.stepRate);for(let e=0;e<a.count;e++){if(tn(t,e)<z.patchDropout)continue;let n=a.strength*(1-z.patchFlicker*tn(t+$t,e));c.set(o.subarray(e*qt,(e+1)*qt),e*qt),l[e*Jt]=s[e]*z.patchShift*n,l[e*Jt+1]=z.patchSplit*n,l[e*Jt+2]=t+e}},clear(){c.fill(0),l.fill(0)}}}var rn=80,an=16,on=`0`,sn=4,cn=.12,ln=.14;function un(e,t,n,r,i){let a=document.createElement(`canvas`);a.width=n*r,a.height=rn*i;let o=a.getContext(`2d`,{willReadFrequently:!0});o.fillStyle=`#000`,o.fillRect(0,0,a.width,a.height),o.fillStyle=`#fff`,o.font=`${T.fontWeight} ${Math.round(rn*T.fontScale)}px ${T.fontFamily}`,o.textAlign=`center`,o.textBaseline=`alphabetic`;let s=o.measureText(on),c=(rn+s.actualBoundingBoxAscent-s.actualBoundingBoxDescent)/2,l=(e,t)=>{let i=t%r*n,a=Math.floor(t/r)*rn;o.save(),o.beginPath(),o.rect(i,a,n,rn),o.clip(),o.fillText(e,i+n/2,a+c),o.restore()};e.forEach(l),t.forEach((t,n)=>l(t,e.length+1+n));let u=e.length%r*n,d=Math.floor(e.length/r)*rn;o.fillRect(u+n*cn,d+rn*ln,n*(1-cn*2),rn*(1-ln*2));let f=o.getImageData(0,0,a.width,a.height).data;return a.width=0,a.height=0,f}function dn(e,t,n,r){let i=t%r*n,a=Math.floor(t/r)*rn,o=n*r*sn,s=0;for(let t=0;t<rn;t++){let r=(a+t)*o+i*sn;for(let t=0;t<n;t++)s+=e[r+t*sn]}return s}function fn(e,t,n,r,i,a,o){let s=i*a,c=n%a*i,l=Math.floor(n/a)*rn,u=r%a*i,d=Math.floor(r/a)*rn;for(let n=0;n<rn;n++){let r=((l+n)*s+c)*sn,a=(o*rn-1-d-n)*s+u;for(let n=0;n<i;n++)t[a+n]=e[r+n*sn]}}function pn(){let e=[...new Set(T.letters+T.digits+T.symbols)],t=Math.round(rn*T.cellAspect),n=an,i=[...new Set(T.labelLetters)].filter(t=>!e.includes(t)),o=e.length+1,s=Math.ceil((o+i.length)/n),c=un(e,i,t,n,s),l=e.map((e,r)=>({glyph:e,tile:r,coverage:dn(c,r,t,n)})).sort((e,t)=>e.coverage-t.coverage),u=new Uint8Array(t*n*rn*s);l.forEach((e,r)=>fn(c,u,e.tile,r,t,n,s)),fn(c,u,e.length,e.length,t,n,s),i.forEach((e,r)=>fn(c,u,o+r,o+r,t,n,s));let d=new x(u,t*n,rn*s,a,r);d.colorSpace=``,d.wrapS=y,d.wrapT=y,d.magFilter=b,d.minFilter=_,d.generateMipmaps=!0,d.needsUpdate=!0;let f=new Float32Array(T.digits.length);l.forEach((e,t)=>{let n=T.digits.indexOf(e.glyph);n>=0&&(f[n]=t)});let p=new Map(l.map((e,t)=>[e.glyph,t]));return i.forEach((e,t)=>p.set(e,o+t)),{texture:d,rankOf:e=>p.get(e),columns:n,rows:s,rampCount:e.length,digitRanks:f,cursorIndex:e.length}}var mn=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],hn=[0,0,1,0,1,1,0,1],gn=[0,1,2,0,2,3],_n=3,vn=2654435769,yn=2,bn=`
attribute vec3 aCell;

uniform sampler2D tFace;
uniform vec2 uGrid;
uniform vec2 uCellSize;
uniform vec2 uFaceCenter;
uniform float uFaceScale;
uniform float uFaceDepth;
uniform float uShadeDepth;
uniform float uFace;
uniform float uTime;
uniform float uPrint;
uniform vec4 uPrintWindow;
uniform vec4 uMouthLine;
uniform vec2 uHeadFrame;
uniform float uMouth;
uniform float uCrumble;
uniform float uDark;
uniform vec4 uEyes;
uniform float uIrisRadius;
uniform vec4 uGaze;
uniform float uEyeGlow;
uniform vec4 uPatches[GLITCH_PATCH_COUNT];
uniform vec3 uPatchFx[GLITCH_PATCH_COUNT];
uniform vec4 uPaintSegments[PAINT_SAMPLE_COUNT];
uniform float uPaintAges[PAINT_SAMPLE_COUNT];
uniform sampler2D tSprite;
uniform vec4 uBugs[BUG_COUNT];
uniform vec4 uBugHeadings[BUG_COUNT];
uniform vec4 uBursts[BUG_COUNT];
uniform vec4 uHoles[HOLE_SLOT_COUNT];
uniform vec4 uHoleForms[HOLE_SLOT_COUNT];
uniform float uDigits[DIGIT_COUNT];
uniform vec4 uButtons[BUTTON_COUNT];
uniform vec4 uButtonFx[BUTTON_COUNT];
uniform vec4 uButtonWords[BUTTON_COUNT];
uniform vec2 uButtonLabels[BUTTON_COUNT];
uniform vec4 uButtonMood[BUTTON_COUNT];
uniform vec4 uLabelRects[BUTTON_COUNT];
uniform sampler2D tWords;
uniform float uDim;

varying vec2 vUv;
varying vec2 vPlane;
varying float vLight;
varying float vRed;
varying float vWhite;
varying float vGreen;

const float SPRITE_SOLID_MAX = 253.5;
const float HALF_TURN = 3.14159265;
const float FULL_TURN = 6.2831853;

${G}

vec2 reliefAt(vec2 world) {
	vec2 point = (world - uFaceCenter) * uFaceScale * 2.0;
	vec2 head = (point - vec2(0.0, uHeadFrame.x)) / uHeadFrame.y;
	float below = uMouthLine.x + (uMouthLine.y * head.x + uMouthLine.z) * head.x - head.y;
	float across = head.x / (uMouthLine.w * MOUTH_OPEN_WIDTH);
	float gap = uMouth * MOUTH_OPEN_DROP * max(1.0 - across * across, 0.0);
	float jaw = 1.0 - smoothstep(MOUTH_JAW_HOLD, MOUTH_JAW_END, below);
	float drop = gap * smoothstep(0.0, max(gap, 0.0001), below) * jaw;
	vec2 sampled = vec2(point.x, point.y + drop * uHeadFrame.y);
	vec2 relief = texture2D(tFace, sampled * 0.5 + 0.5).rg * step(max(abs(sampled.x), abs(sampled.y)), 1.0);
	float inside = smoothstep(0.0, MOUTH_EDGE_SOFTNESS, below) * (1.0 - smoothstep(gap - MOUTH_EDGE_SOFTNESS, gap, below));

	return vec2(max(relief.r - MOUTH_CAVITY * inside, 0.0), mix(relief.g, -1.0, inside));
}

float faceHeight(vec2 world) {
	return reliefAt(world).r;
}


float plateInset(vec2 point, vec4 box, float radius) {
	vec2 corner = abs(point - box.xy) - box.zw + radius;

	return radius - length(max(corner, 0.0)) - min(max(corner.x, corner.y), 0.0);
}


float plateHeight(vec2 point) {
	float height = 0.0;
	for (int index = 0; index < BUTTON_COUNT; index++) {
		vec4 fx = uButtonFx[index];
		if (fx.y <= 0.0 || uButtonMood[index].y > 0.5) {
			continue;
		}
		vec4 box = uButtons[index];
		float reach = min(min(box.z, box.w), uCellSize.y * BUTTON_REACH_ROWS);
		float depth = clamp(plateInset(point, box, reach * BUTTON_RADIUS) / (reach * BUTTON_BEVEL), 0.0, 1.0);
		height = max(height, sqrt(depth * (2.0 - depth)) * fx.y * (1.0 - BUTTON_PRESS_SINK * fx.w));
	}

	return height;
}

float irisGlow(vec2 point, vec2 eye, vec2 gaze) {
	vec2 local = (point - eye - gaze) / uIrisRadius;

	return exp(-dot(local, local));
}

float paintAt(vec2 point, vec2 cell) {
	float pair = floor(cell.x * 0.5);
	float unit = mix(cell.x, pair * 2.0 + 0.5, step(0.5, hash21(vec2(pair, cell.y) + 5.3)));
	float radius = PAINT_RADIUS * (1.0 - PAINT_RAGGED * hash21(cell + 9.1));
	float painted = 0.0;
	for (int index = 0; index < PAINT_SAMPLE_COUNT; index++) {
		float age = uPaintAges[index];
		vec4 segment = uPaintSegments[index];
		vec2 along = segment.zw - segment.xy;
		vec2 offset = point - segment.xy;
		float t = clamp(dot(offset, along) / max(dot(along, along), 0.000001), 0.0, 1.0);
		float keep = PAINT_HOLD + PAINT_REVERT * hash21(vec2(unit, cell.y) + float(index) * 3.7);
		painted = max(painted, step(0.0, age) * step(age, keep) * step(length(offset - along * t), radius));
	}

	return painted;
}

float spriteAt(vec2 local, float variant) {
	return texelFetch(tSprite, ivec2(int(variant) * BUG_COLUMNS + int(local.x), int(local.y)), 0).r * 255.0;
}

float inBox(vec2 local) {
	return step(0.0, local.x) * step(local.x, float(BUG_COLUMNS) - 0.5) * step(0.0, local.y) * step(local.y, float(BUG_ROWS) - 0.5);
}

void main() {
	vec2 cell = aCell.xy;
	float seed = aCell.z;
	vec2 center = vec2(cell.x + 0.5 - uGrid.x * 0.5, uGrid.y * 0.5 - cell.y - 0.5) * uCellSize;
	vec2 corner = center + position.xy * uCellSize;

	vec2 relief = reliefAt(center);
	float height = relief.r;
	float ink = clamp(-relief.g, 0.0, 1.0);
	float highlight = clamp(relief.g, 0.0, 1.0);
	vec2 ahead = vec2(faceHeight(center + vec2(uCellSize.x, 0.0)), faceHeight(center + vec2(0.0, uCellSize.y)));
	vec2 behind = vec2(faceHeight(center - vec2(uCellSize.x, 0.0)), faceHeight(center - vec2(0.0, uCellSize.y)));
	vec2 slope = (ahead - behind) * uShadeDepth * uFace / (2.0 * uCellSize);
	vec2 fieldStep = uCellSize * uFaceScale * 2.0;
	vec2 bend = (ahead + behind - 2.0 * height) / (fieldStep * fieldStep);
	float cavity = clamp((bend.x + bend.y) * FACE_CAVITY_SCALE, -1.0, 1.0) * uFace;
	vec3 light = normalize(FACE_LIGHT);
	float lambert = max(dot(normalize(vec3(-slope, 1.0)), light), 0.0) / light.z;
	float shade = mix(FACE_AMBIENT, 1.0, pow(lambert, FACE_SHADE_GAMMA) * light.z) / light.z * (1.0 - FACE_CAVITY_STRENGTH * cavity);

	float rise = uFaceDepth * uFace;
	vec4 anchor = projectionMatrix * modelViewMatrix * vec4(center, height * rise, 1.0);
	float plateCover = 0.0;
	float lettered = 0.0;
	float letterGlyph = 0.0;
	float letterTone = 0.0;
	float letterFront = 0.0;
	float letterLift = 0.0;
	float plateDepth = 0.0;
	float plateHeat = 0.0;
	float plateBevel = 1.0;
	float plateTone = 0.0;
	float platePress = 0.0;
	float plateAlarm = 0.0;
	float plateFront = 0.0;
	float plateBlank = 0.0;
	float plateScale = 1.0;
	float hollow = 0.0;
	float sparkle = 0.0;
	float flare = 0.0;
	float moat = 0.0;
	for (int index = 0; index < BUTTON_COUNT; index++) {
		vec4 fx = uButtonFx[index];
		if (fx.y <= 0.0) {
			continue;
		}
		vec4 mood = uButtonMood[index];

		vec4 word = uButtonWords[index];
		vec2 label = uButtonLabels[index];
		float place = floor((cell.x - word.x) / label.y + 0.5);
		float onWord = step(abs(cell.y - word.y), 0.5) * step(abs(cell.x - word.x - place * label.y), 0.25) * step(-0.5, place) * step(place, word.w - 0.5);
		float code = texelFetch(tWords, ivec2(int(clamp(place, 0.0, float(WORD_MAX) - 1.0)), index), 0).r * 255.0;
		float wordEnd = word.x + (word.w - 1.0) * label.y;
		float letterReach = 0.5 + BUTTON_LABEL_SCALE * label.x * 0.5;
		float clearedRow = max(step(abs(cell.y - word.y), 1.5), step(abs(cell.y - word.y + word.z), letterReach));
		float cleared = step(0.5, word.w) * clearedRow * step(word.x - BUTTON_LABEL_PAD - 0.5, cell.x) * step(cell.x, wordEnd + BUTTON_LABEL_PAD + 0.5);
		hollow = max(hollow, cleared * fx.y);
		if (onWord > 0.5 && code < WORD_NONE) {
			lettered = fx.y;
			letterGlyph = code;
			letterTone = fx.x;
			letterFront = mood.z;
			letterLift = word.z * fx.y;
			plateScale = mix(1.0, BUTTON_LABEL_SCALE * label.x * (1.0 - BUTTON_PRESS_SHRINK * fx.w), fx.y);
		}
		if (mood.y > 0.5) {
			continue;
		}

		vec4 box = uButtons[index];
		float reach = min(min(box.z, box.w), uCellSize.y * BUTTON_REACH_ROWS);
		float inset = plateInset(center, box, reach * BUTTON_RADIUS);
		float away = -inset / (uCellSize.y * BUTTON_SPARK_REACH);
		if (inset < 0.0 && away < 1.0) {
			float drift = uTime * BUTTON_SPARK_SPEED - away + hash11(cell.y * 3.1 + float(index) * 5.7);
			float chance = BUTTON_SPARK_DENSITY * (1.0 - away) * (1.0 - away) * (1.0 + fx.z + 2.0 * fx.w) * (1.0 + BUTTON_FLARE_BOOST * mood.x);
			float lit = step(fract(drift), BUTTON_SPARK_DUTY) * step(hash21(cell + floor(drift) * 7.3), chance);
			float spark = lit * sin(HALF_TURN * fract(drift) / BUTTON_SPARK_DUTY) * fx.y * (1.0 - mood.w);
			sparkle = max(sparkle, spark * fx.x);
			flare = max(flare, spark * mood.x);
		}
		if (inset < 0.0) {
			moat = max(moat, fx.y * (1.0 - smoothstep(0.0, uCellSize.y * BUTTON_MOAT_ROWS, -inset)));
		}
		if (inset <= 0.0) {
			continue;
		}
		plateCover = fx.y;
		plateBevel = reach * BUTTON_BEVEL;
		plateDepth = clamp(inset / plateBevel, 0.0, 1.0);
		plateHeat = fx.z;
		plateTone = fx.x;
		platePress = fx.w;
		plateAlarm = mood.x;
		plateFront = mood.z;
		vec2 within = abs(center - box.xy) / box.zw;
		plateBlank = step(0.0001, uLabelRects[index].z) * step(within.x, BUTTON_ICON_BLANK.x) * step(within.y, BUTTON_ICON_BLANK.y);
	}
	vec2 plateAhead = vec2(plateHeight(center + vec2(uCellSize.x, 0.0)), plateHeight(center + vec2(0.0, uCellSize.y)));
	vec2 plateBehind = vec2(plateHeight(center - vec2(uCellSize.x, 0.0)), plateHeight(center - vec2(0.0, uCellSize.y)));
	vec2 plateSlope = (plateAhead - plateBehind) * BUTTON_STEEPNESS * plateBevel / (2.0 * uCellSize);
	float plateLambert = max(dot(normalize(vec3(-plateSlope, 1.0)), light), 0.0) / light.z;
	float plateShade = mix(FACE_AMBIENT, 1.0, pow(plateLambert, FACE_SHADE_GAMMA) * light.z) / light.z;
	float plateCore = smoothstep(BUTTON_CORE_START, BUTTON_CORE_END, plateDepth + (hash11(seed * 9.7 + 1.3) - 0.5) * BUTTON_RAGGED);
	hollow *= step(0.5, plateCore) * (1.0 - step(0.001, lettered));
	plateScale *= 1.0 - hollow;

	vec2 facePoint = (center - uFaceCenter) * uFaceScale * 2.0;
	float iris = smoothstep(0.15, 0.6, ink) * max(irisGlow(facePoint, uEyes.xy, uGaze.xy), irisGlow(facePoint, uEyes.zw, uGaze.zw));
	shade *= (1.0 - FACE_INK_DARKEN * ink) * (1.0 + FACE_INK_BRIGHTEN * highlight);

	float faceClock = uTime * FACE_SHIMMER_RATE * (0.4 + hash11(seed * 7.7 + 4.1)) + seed * 53.0;
	float facePick = hash21(vec2(seed * 173.1, floor(faceClock)));
	float mask = smoothstep(0.0, FACE_EDGE_SOFTNESS, height * (1.0 + (facePick - 0.5) * FACE_DISSOLVE)) * uFace;

	vec2 typed = clamp((cell + 0.5 - uPrintWindow.xy) / uPrintWindow.zw, 0.0, 1.0);
	float rowStart = typed.y * (PRINT_DURATION - PRINT_ROW_DURATION) + (hash11(cell.y + 3.7) - 0.5) * PRINT_ROW_JITTER * step(0.001, typed.y);
	float rowSpeed = 1.0 - PRINT_ROW_SPEED_SPREAD * hash11(cell.y * 1.37 + 11.1);
	float age = uPrint - rowStart - typed.x * PRINT_ROW_DURATION * rowSpeed;
	float printed = step(0.0, age);
	float head = printed * exp(-age * PRINT_HEAD_DECAY);
	float cursor = printed * step(age, PRINT_CURSOR_HOLD);

	float churnSpeed = WALL_CHURN_BASE_RATE + WALL_CHURN_RATE * pow(hash11(seed * 91.7 + 0.3), WALL_CHURN_SPARSITY);
	churnSpeed = mix(churnSpeed, BUTTON_CHURN_RATE * (0.4 + hash11(seed * 3.3 + 0.9)), step(0.5, plateCover * plateCore));
	float churnClock = uTime * churnSpeed + seed * 37.0;
	float tick = floor(churnClock);
	float flash = WALL_CHURN_FLASH * exp(-fract(churnClock) / churnSpeed * WALL_CHURN_FLASH_DECAY);
	float pick = hash21(vec2(seed * 251.3, tick));

	float wallGlyph = floor(mix(WALL_RAMP_START, 1.0, pick) * RAMP_COUNT);
	float numeric = step(hash21(vec2(tick, seed * 77.7)), WALL_DIGIT_SHARE);
	wallGlyph = mix(wallGlyph, uDigits[int(pick * float(DIGIT_COUNT))], numeric);
	float variance = 1.0 - WALL_BRIGHTNESS_SPREAD * hash11(seed * 13.3 + 0.7);
	float wallLevel = WALL_BRIGHTNESS * variance * mix(1.0, WALL_DIM_WHEN_FACE_OUT, uFace) * (1.0 + flash);
	float litWall = WALL_BRIGHTNESS * variance;
	float sparkClock = uTime * DARK_SPARK_RATE + hash11(seed * 4.9 + 0.2) * 97.0;
	float sparked = step(hash21(vec2(seed * 61.3, floor(sparkClock))), DARK_SPARK_SHARE) * (1.0 - fract(sparkClock));
	wallGlyph = mix(wallGlyph, floor(hash21(cell + floor(uTime * DARK_SPARK_FLIP_RATE)) * RAMP_COUNT), step(0.001, sparked) * uDark);
	wallLevel = mix(wallLevel, litWall * (DARK_WALL_LEVEL + DARK_SPARK_LEVEL * sparked), uDark);
	float aura = (1.0 - smoothstep(DARK_AURA_START, DARK_AURA_END, length(facePoint * DARK_AURA_SHAPE) + (hash21(cell * 3.1 + 1.7) - 0.5) * DARK_AURA_RAGGED)) * uFace * uDark;
	wallLevel = max(wallLevel, litWall * DARK_AURA_LEVEL * aura * (1.0 + flash));

	float rampLevel = clamp(shade * FACE_SHADE_TO_RAMP + (facePick - 0.5) * FACE_RAMP_JITTER + iris, 0.0, 0.999);
	float rampGlyph = floor(rampLevel * RAMP_COUNT);
	float shimmer = 1.0 + FACE_SHIMMER_AMOUNT * (facePick - 0.5);
	float faceLevel = WALL_BRIGHTNESS * FACE_SHADE_GAIN * shade * (1.0 + FACE_HEIGHT_GLOW * height) * mix(1.0, variance, 0.5) * shimmer;
	faceLevel += uEyeGlow * iris;

	float glyph = mix(wallGlyph, rampGlyph, step(hash11(seed * 5.1 + 2.0), mask));
	float level = mix(wallLevel, faceLevel, mask);
	float red = smoothstep(EYE_RED_THRESHOLD, EYE_RED_THRESHOLD * 3.0, iris * mask);

	float row = uCellSize.y;
	float fracture = 0.0;
	float glint = 0.0;
	float heat = 0.0;
	float front = 0.0;
	float rimLight = 0.0;
	float window = 0.0;
	float coreFaint = 0.0;
	vec3 shard = vec3(0.0);
	for (int index = 0; index < HOLE_SLOT_COUNT; index++) {
		vec4 hole = uHoles[index];
		vec4 form = uHoleForms[index];
		vec2 away = center - hole.xy;
		float coreRadius = HOLE_CORE_ROWS * row * form.x;
		float crackReach = coreRadius * HOLE_CRACK_MAX * form.z;
		float rowSpread = row * TRAIL_ROW_SPREAD * sqrt(form.x);
		if (hole.w <= 0.0 || abs(away.x) > max(TRAIL_REACH, crackReach) || abs(away.y) > crackReach + rowSpread * TRAIL_ROW_CUTOFF) {
			continue;
		}
		float sector = FULL_TURN / form.y;
		float span = length(away);
		float key = hash21(hole.xy * 91.7);
		float coreNow = coreRadius * max(smoothstep(0.0, HOLE_CORE_HEAL, hole.w), 0.001);
		float core = 1.0 - smoothstep(coreNow * 0.7, coreNow, span);
		float rimOffset = (span - coreNow * 1.3) / (coreRadius * 0.4);
		float rim = exp(-rimOffset * rimOffset) * hole.w;

		float angle = atan(away.y, away.x) + HALF_TURN;
		float ray = floor(angle / sector);
		float rayAngle = (ray + 0.5 + (hash11(key * 57.0 + ray) - 0.5) * HOLE_CRACK_JITTER) * sector;
		float turn = angle - rayAngle + HOLE_CRACK_WOBBLE * sin(span / row * 1.7 + ray * 2.3 + key * 6.0);
		float along = span * cos(turn);
		float across = abs(span * sin(turn));
		float reach = coreRadius * form.z * mix(HOLE_CRACK_MIN, HOLE_CRACK_MAX, hash11(key * 31.0 + ray * 1.7)) * smoothstep(0.0, HOLE_CRACK_GROW_SECONDS, hole.z) * smoothstep(0.0, HOLE_CRACK_HEAL, hole.w);
		float onRay = step(0.0, along) * step(along, reach);
		float taper = 1.0 - smoothstep(0.0, HOLE_BOLD_REACH, along / max(reach, 0.0001));
		float hair = 0.5 * (row * abs(cos(rayAngle)) + uCellSize.x * abs(sin(rayAngle)));
		float thickness = hair * (1.0 + form.w * HOLE_BOLD_GAIN * taper);
		float open = step(hash21(cell * 1.3 + key * 7.0), hole.w * HOLE_REFILL);
		float broken = max(core, step(across, thickness) * onRay) * open;
		float wobble = 1.0 + DARK_WINDOW_WOBBLE * (0.6 * sin(angle * 3.0 + key * 6.0) + 0.4 * sin(angle * 7.0 + key * 11.0));
		float windowEdge = coreRadius * DARK_WINDOW_SCALE * wobble * sqrt(hole.w) * smoothstep(0.0, HOLE_CRACK_GROW_SECONDS, hole.z);
		float ragged = (hash21(cell * 2.3 + key * 5.0) - 0.5) * row * DARK_WINDOW_RAGGED;
		float inWindow = 1.0 - smoothstep(windowEdge - row * DARK_WINDOW_SOFT, windowEdge, span + ragged);
		window = max(window, inWindow);
		coreFaint = max(coreFaint, core * open);
		float inDark = mix(1.0, inWindow, uDark);

		float rowsAway = away.y / rowSpread;
		float rowReach = TRAIL_REACH * mix(TRAIL_ROW_SHORTEST, 1.0, hash21(vec2(cell.y, key * 71.0))) * exp(-rowsAway * rowsAway);
		float inRow = step(abs(away.x), rowReach) * step(TRAIL_DROPOUT, hash21(cell + key * 13.0));
		float rowLag = hole.z - (abs(away.x) + abs(away.y) * TRAIL_ROW_COST) / TRAIL_SPEED;
		float rowLit = inRow * step(0.0, rowLag);
		float rowHeat = rowLit * exp(-rowLag / TRAIL_COOL_SECONDS) * (1.0 - 0.6 * abs(away.x) / max(rowReach, 0.0001)) * inDark;
		float crackLag = hole.z - span / TRAIL_SPEED;
		float crackHeat = step(across, thickness * TRAIL_CRACK_SPREAD) * onRay * step(0.0, crackLag) * exp(-crackLag / TRAIL_COOL_SECONDS);

		float edge = onRay * step(thickness, across) * step(across, thickness + hair * HOLE_GLINT_WIDTH) * step(coreNow, span);
		glint = max(glint, edge * form.w * smoothstep(0.0, HOLE_CRACK_HEAL, hole.w) * (1.0 - broken));
		fracture = max(fracture, broken);
		heat = max(heat, max(rowHeat, crackHeat) * (1.0 - broken) * hole.w);
		front += rowLit * exp(-rowLag / TRAIL_FRONT_SECONDS) * hole.w * inDark;
		rimLight += rim * (HOLE_RIM_GAIN + HOLE_FLASH_GAIN * exp(-hole.z * HOLE_FLASH_DECAY));
		shard += vec3(away / max(span, 0.0001) * HOLE_RIM_PUSH * row, HOLE_RIM_LIFT) * rim;
	}
	glyph = mix(glyph, floor(hash21(cell + floor(uTime * 24.0)) * RAMP_COUNT), step(0.35, front));
	level = mix(level, max(level, litWall * DARK_WINDOW_LEVEL), window * uDark * (1.0 - mask));
	level = mix(level, max(level, WALL_BRIGHTNESS), heat);
	level *= (1.0 - HOLE_DARKEN * fracture) * (1.0 + TRAIL_GAIN * heat + TRAIL_FRONT_GAIN * front + rimLight);
	red = max(red, smoothstep(0.0, TRAIL_RED_HOLD, heat));
	level = mix(level, max(level, WALL_BRIGHTNESS * HOLE_GLINT_LEVEL), glint);
	level = mix(level, max(level, litWall * DARK_CORE_FAINT), coreFaint * uDark * (1.0 - mask));

	vec2 screen = anchor.xy / anchor.w * 0.5 + 0.5;
	float scramble = 0.0;
	for (int index = 0; index < GLITCH_PATCH_COUNT; index++) {
		vec2 hit = step(uPatches[index].xy, screen) * step(screen, uPatches[index].zw);
		scramble = max(scramble, hit.x * hit.y * uPatchFx[index].z);
	}
	float jammed = step(0.5, scramble) * step(hash21(cell + scramble), GLITCH_SCRAMBLE_CHANCE);
	glyph = mix(glyph, floor(hash21(cell.yx + scramble) * RAMP_COUNT), jammed);
	level *= 1.0 + jammed * GLITCH_SCRAMBLE_GAIN;
	level = mix(level, max(level, litWall * DARK_JAM_LEVEL), jammed * step(hash21(cell * 2.7 + 7.7), DARK_JAM_SHARE) * uDark * (1.0 - mask));

	float painted = paintAt(center, cell);
	level = mix(level, max(level, WALL_BRIGHTNESS * PAINT_LEVEL), painted);
	red = max(red, painted * PAINT_RED);
	red = max(red, glint);
	float white = painted * PAINT_WHITE;
	red *= 1.0 - white;

	float plateRim = plateCover * (1.0 - plateCore);
	float rimGlyph = floor(clamp(plateShade * FACE_SHADE_TO_RAMP + (facePick - 0.5) * FACE_RAMP_JITTER, 0.0, 0.999) * RAMP_COUNT);
	float rimLevel = WALL_BRIGHTNESS * (BUTTON_RIM_AMBIENT + BUTTON_RIM_GAIN * plateShade) * (1.0 + BUTTON_HOT_GAIN * plateHeat) * shimmer;
	glyph = mix(glyph, rimGlyph, step(0.5, plateRim));
	level = mix(level, mix(level * mix(BUTTON_UNDER, BUTTON_UNDER_HOT, max(plateHeat, platePress)), rimLevel, 1.0 - plateCore), plateCover);
	level *= 1.0 - plateBlank * plateCover * step(0.5, plateCore);
	glyph = mix(glyph, letterGlyph, step(0.001, lettered));
	level = mix(level, BUTTON_LABEL_LEVEL * (1.0 + BUTTON_PRESS_FLASH * platePress), lettered);
	level *= 1.0 - BUTTON_MOAT_DARKEN * moat * (1.0 - plateCover) * (1.0 - mask);
	sparkle *= 1.0 - mask;
	flare *= 1.0 - mask;
	float sparkLevel = mix(BUTTON_SPARK_LEVEL, BUTTON_FLARE_LEVEL, step(sparkle + 0.0001, flare));
	level = mix(level, max(level, WALL_BRIGHTNESS * sparkLevel), max(sparkle, flare));
	level *= 1.0 - BUTTON_DIM * uDim * (1.0 - max(plateCover * plateFront, lettered * letterFront));
	red = max(red * (1.0 - plateCover) * (1.0 - sparkle), max(plateCover * plateAlarm, flare)) * (1.0 - step(0.001, lettered));
	white *= 1.0 - plateCover;
	float green = mix(max(plateCover * plateTone, sparkle), letterTone, step(0.001, lettered));

	vec2 boxCenter = vec2(float(BUG_COLUMNS), float(BUG_ROWS)) * 0.5 - 0.5;
	for (int index = 0; index < BUG_COUNT; index++) {
		vec4 bug = uBugs[index];
		vec4 heading = uBugHeadings[index];
		vec2 fromBug = cell - bug.xy - boxCenter;
		if (bug.w < 0.5 || abs(fromBug.x) > BUG_WAKE_REACH || abs(fromBug.y) > BUG_WAKE_REACH) {
			continue;
		}
		float astern = -dot(fromBug, heading.xy);
		float beside = abs(dot(fromBug, heading.yx));
		float trail = (astern - heading.z) / max(heading.w, 0.001);
		float corrupt = step(0.0, trail) * step(trail, 1.0) * step(beside, 0.5) * step(trail, hash21(cell + floor(uTime * 18.0)));
		glyph = mix(glyph, floor(hash21(cell.yx + floor(uTime * 18.0)) * RAMP_COUNT), corrupt);
		level = mix(level, max(level, WALL_BRIGHTNESS), corrupt);
		red = max(red, corrupt * BUG_WAKE_RED);

		vec2 bugLocal = cell - bug.xy;
		if (inBox(bugLocal) > 0.5) {
			float code = spriteAt(bugLocal, bug.z);
			float solid = step(code, SPRITE_SOLID_MAX);
			glyph = mix(glyph, code, solid);
			level = mix(level, BUG_LEVEL, solid);
			red *= 1.0 - solid;
			white *= 1.0 - solid;
			green *= 1.0 - solid;
		}
	}

	vec2 debrisShift = vec2(0.0);
	float debrisTurn = 0.0;
	float debrisLift = 0.0;
	float debrisScale = 1.0;
	for (int index = 0; index < BUG_COUNT; index++) {
		vec4 burst = uBursts[index];
		if (burst.z < 0.0) {
			continue;
		}
		vec2 burstLocal = cell - burst.xy;
		vec2 fromBurst = (burstLocal - boxCenter) * uCellSize;
		float spark = exp(-burst.z * BUG_FLASH_DECAY) * exp(-dot(fromBurst, fromBurst) / (BUG_FLASH_RADIUS * BUG_FLASH_RADIUS));
		level += WALL_BRIGHTNESS * BUG_FLASH_GAIN * spark;
		red = max(red, min(spark * 2.0, 1.0));
		float code = inBox(burstLocal) > 0.5 ? spriteAt(burstLocal, burst.w) : 255.0;
		if (code < SPRITE_SOLID_MAX) {
			float airborne = 1.0 - step(BUG_BURST_SECONDS, burst.z);
			float flight = min(burst.z, BUG_BURST_SECONDS);
			float spent = flight / BUG_BURST_SECONDS;
			vec2 toss = normalize(fromBurst / uCellSize.y + (vec2(hash21(cell + 1.7), hash21(cell + 8.3)) - 0.5) * 1.6 + vec2(0.001, 0.3));
			float flung = BUG_BURST_SPEED * (0.45 + hash21(cell + 4.4)) * (1.0 - exp(-BUG_BURST_DRAG * flight)) / BUG_BURST_DRAG;
			float landed = smoothstep(BUG_BURST_SECONDS, BUG_BURST_SECONDS + BUG_RESTORE_SECONDS, burst.z);
			debrisShift = (toss * flung - vec2(0.0, 0.5 * BUG_BURST_GRAVITY * flight * flight)) * airborne;
			debrisTurn = (hash21(cell + 2.9) - 0.5) * BUG_BURST_SPIN * flight * airborne;
			debrisLift = BUG_BURST_LIFT * sin(spent * HALF_TURN) * airborne;
			debrisScale = mix(1.0, BUG_BURST_SCALE, airborne);
			float flying = BUG_LEVEL * (1.0 - smoothstep(0.6, 1.0, spent));
			float piece = floor(mix(BUG_DEBRIS_RAMP_START, 1.0, hash21(cell + 6.1)) * RAMP_COUNT);
			glyph = mix(piece, glyph, 1.0 - airborne);
			level = mix(flying, level * landed, 1.0 - airborne);
			red = mix(exp(-burst.z * BUG_EMBER_DECAY), red, 1.0 - airborne);
			white *= 1.0 - airborne;
		}
	}

	if (uCrumble >= 0.0) {
		float cluster = mix(hash21(floor(cell / EXIT_CHUNK_CELLS) + 3.1), hash21(floor(cell / (EXIT_CHUNK_CELLS * 3.0)) + 7.7), 0.5);
		float order = (EXIT_ORDER_CLUSTER * cluster + EXIT_ORDER_CELL * hash21(cell + 11.3) + EXIT_ORDER_HEIGHT * (1.0 - typed.y)) / (EXIT_ORDER_CLUSTER + EXIT_ORDER_CELL + EXIT_ORDER_HEIGHT);
		float release = EXIT_RELEASE_SPREAD * order + EXIT_FACE_DELAY * mask;
		float eyeZone = smoothstep(EYE_RED_THRESHOLD, EYE_RED_THRESHOLD * 3.0, iris * mask);
		release = mix(release, EXIT_EYES_RELEASE + EXIT_EYES_JITTER * hash21(cell + 2.2), eyeZone);
		float fall = max(uCrumble - release, 0.0);
		float loose = step(0.0001, fall);
		debrisShift += vec2(
			(hash21(cell + 5.9) - 0.5) * EXIT_DRIFT * fall,
			(hash21(cell + 13.1) - 0.2) * EXIT_KICK * fall - 0.5 * EXIT_GRAVITY * fall * fall
		);
		debrisTurn += (hash21(cell + 2.9) - 0.5) * EXIT_SPIN * fall;
		debrisLift += hash21(cell + 17.3) * EXIT_POP * fall;
		level *= (1.0 + EXIT_RELEASE_FLASH * loose * exp(-fall * EXIT_FLASH_DECAY)) * (1.0 - smoothstep(EXIT_FADE_START, EXIT_FADE_END, fall));
	}

	glyph = mix(glyph, CURSOR_INDEX, max(cursor, step(EYE_CORE_THRESHOLD, iris * mask)));
	float shown = max(printed, max(max(plateCover, lettered), max(sparkle, flare)));
	vLight = shown * (level + PRINT_HEAD_GAIN * head) / INTENSITY_RANGE;
	vRed = red;
	vWhite = white;
	vGreen = green;
	vPlane = corner;

	float atlasRow = floor((glyph + 0.5) / ATLAS_COLUMNS);
	float atlasColumn = glyph - atlasRow * ATLAS_COLUMNS;
	vUv = (vec2(atlasColumn, ATLAS_ROWS - 1.0 - atlasRow) + uv) / vec2(ATLAS_COLUMNS, ATLAS_ROWS);

	vec2 quad = position.xy * uCellSize * debrisScale * plateScale;
	quad = vec2(quad.x * cos(debrisTurn) - quad.y * sin(debrisTurn), quad.x * sin(debrisTurn) + quad.y * cos(debrisTurn));
	vec3 lifted = vec3(
		center + quad + shard.xy + debrisShift + vec2(0.0, letterLift * uCellSize.y),
		faceHeight(corner) * rise + plateHeight(corner) * BUTTON_DEPTH + shard.z + debrisLift
	);
	gl_Position = projectionMatrix * modelViewMatrix * vec4(lifted, 1.0);
}
`,xn=`
uniform sampler2D tAtlas;
uniform sampler2D tLabels;
uniform vec4 uButtons[BUTTON_COUNT];
uniform vec4 uButtonFx[BUTTON_COUNT];
uniform vec4 uButtonMood[BUTTON_COUNT];
uniform vec4 uLabelRects[BUTTON_COUNT];
uniform float uDim;

varying vec2 vUv;
varying vec2 vPlane;
varying float vLight;
varying float vRed;
varying float vWhite;
varying float vGreen;

void main() {
	float light = texture2D(tAtlas, vUv).r * vLight;
	vec4 color = vec4(light, light * vRed, light * vWhite, light * vGreen);

	for (int index = 0; index < BUTTON_COUNT; index++) {
		vec4 box = uButtons[index];
		vec4 fx = uButtonFx[index];
		vec4 region = uLabelRects[index];
		if (fx.y <= 0.0 || region.z <= 0.0) {
			continue;
		}
		vec2 local = (vPlane - box.xy) / box.zw;
		if (abs(local.x) > 1.0 || abs(local.y) > 1.0) {
			continue;
		}
		float mark = textureLod(tLabels, region.xy + (local * 0.5 + 0.5) * region.zw, 0.0).r * fx.y;
		vec4 mood = uButtonMood[index];
		float lit = BUTTON_LABEL_LEVEL / INTENSITY_RANGE * mark * (1.0 - BUTTON_DIM * uDim * (1.0 - mood.z));
		color = color * (1.0 - mark) + vec4(lit, lit * mood.x, 0.0, lit * fx.x);
	}

	gl_FragColor = color;
}
`;function Sn(e,t){let n=new f;n.setAttribute(`position`,new v(new Float32Array(mn),3)),n.setAttribute(`uv`,new v(new Float32Array(hn),2)),n.setIndex(gn);let r=J(vn),i=new Float32Array(e*t*_n),a=0;for(let n=0;n<t;n++)for(let t=0;t<e;t++)i[a++]=t,i[a++]=n,i[a++]=r();return n.setAttribute(`aCell`,new d(i,_n)),n.instanceCount=e*t,n}function Cn({atlas:e,face:t,patches:r,paint:i,holes:a,bugs:o,plates:s,labels:c}){let{eyes:l}=t,u={tAtlas:{value:e.texture},tFace:{value:t.texture},uGrid:{value:new n(1,1)},uCellSize:{value:new n(1,1)},uFaceCenter:{value:new n(0,0)},uFaceScale:{value:1},uFaceDepth:{value:0},uShadeDepth:{value:0},uFace:{value:0},uTime:{value:0},uPrint:{value:0},uPrintWindow:{value:new g(0,0,1,1)},uMouthLine:{value:new g(...t.mouth.line)},uHeadFrame:{value:new n(...t.mouth.frame)},uMouth:{value:0},uCrumble:{value:-1},uDark:{value:0},uEyes:{value:new g(...l.left,...l.right)},uIrisRadius:{value:l.irisRadius},uGaze:{value:new g(0,0,0,0)},uEyeGlow:{value:0},uPatches:{value:r.rects},uPatchFx:{value:r.effects},uPaintSegments:{value:i.segments},uPaintAges:{value:i.ages},tSprite:{value:o.sprite},uBugs:{value:o.bodies},uBugHeadings:{value:o.headings},uBursts:{value:o.bursts},uHoles:{value:a.data},uHoleForms:{value:a.forms},uDigits:{value:e.digitRanks},uButtons:{value:s.rects},uButtonFx:{value:s.effects},uButtonWords:{value:s.words},uButtonLabels:{value:s.labels},uButtonMood:{value:s.moods},tWords:{value:s.wordTexture},uDim:{value:0},tLabels:{value:c.texture},uLabelRects:{value:c.rects}},d=new S({uniforms:u,vertexShader:bn,fragmentShader:xn,defines:{ATLAS_COLUMNS:K(e.columns),ATLAS_ROWS:K(e.rows),RAMP_COUNT:K(e.rampCount),DIGIT_COUNT:e.digitRanks.length,CURSOR_INDEX:K(e.cursorIndex),INTENSITY_RANGE:K(B.intensityRange),PRINT_DURATION:K(A.duration),PRINT_ROW_DURATION:K(A.rowDuration),PRINT_ROW_SPEED_SPREAD:K(A.rowSpeedSpread),PRINT_ROW_JITTER:K(A.rowJitter),PRINT_HEAD_DECAY:K(A.headDecay),PRINT_HEAD_GAIN:K(A.headGain),PRINT_CURSOR_HOLD:K(A.cursorHold),WALL_BRIGHTNESS:K(j.brightness),WALL_BRIGHTNESS_SPREAD:K(j.brightnessSpread),WALL_RAMP_START:K(T.wallRampStart),WALL_DIGIT_SHARE:K(T.digitShare),WALL_CHURN_BASE_RATE:K(j.churnBaseRate),WALL_CHURN_RATE:K(j.churnRate),WALL_CHURN_SPARSITY:K(j.churnSparsity),WALL_CHURN_FLASH:K(j.churnFlash),WALL_CHURN_FLASH_DECAY:K(j.churnFlashDecay),WALL_DIM_WHEN_FACE_OUT:K(j.dimWhenFaceOut),FACE_LIGHT:q(M.light),FACE_AMBIENT:K(M.ambient),FACE_INK_DARKEN:K(M.inkDarken),FACE_INK_BRIGHTEN:K(M.inkBrighten),FACE_CAVITY_SCALE:K(M.cavityScale),FACE_CAVITY_STRENGTH:K(M.cavityStrength),FACE_SHADE_GAMMA:K(M.shadeGamma),FACE_SHADE_GAIN:K(M.shadeGain),FACE_SHADE_TO_RAMP:K(M.shadeToRamp),FACE_HEIGHT_GLOW:K(M.heightGlow),FACE_EDGE_SOFTNESS:K(M.edgeSoftness),FACE_DISSOLVE:K(M.dissolve),FACE_RAMP_JITTER:K(M.rampJitter),FACE_SHIMMER_RATE:K(M.shimmerRate),FACE_SHIMMER_AMOUNT:K(M.shimmerAmount),EYE_CORE_THRESHOLD:K(N.coreThreshold),EYE_RED_THRESHOLD:K(N.redThreshold),PAINT_SAMPLE_COUNT:F.samples,PAINT_RADIUS:K(F.radius),PAINT_RAGGED:K(F.ragged),PAINT_HOLD:K(F.hold),PAINT_REVERT:K(F.revert),PAINT_LEVEL:K(F.level),PAINT_RED:K(F.red),PAINT_WHITE:K(F.white),BUTTON_COUNT:s.count,BUTTON_RADIUS:K(P.radius),BUTTON_REACH_ROWS:K(P.reachRows),BUTTON_BEVEL:K(P.bevel),BUTTON_LABEL_LEVEL:K(P.labelLevel),BUTTON_UNDER_HOT:K(P.underHot),BUTTON_MOAT_ROWS:K(P.moatRows),BUTTON_MOAT_DARKEN:K(P.moatDarken),BUTTON_LABEL_SCALE:K(P.labelScale),BUTTON_LABEL_PAD:K(P.labelPad),BUTTON_SPARK_REACH:K(P.sparkReach),BUTTON_SPARK_DENSITY:K(P.sparkDensity),BUTTON_SPARK_SPEED:K(P.sparkSpeed),BUTTON_SPARK_DUTY:K(P.sparkDuty),BUTTON_SPARK_LEVEL:K(P.sparkLevel),BUTTON_FLARE_LEVEL:K(P.flareLevel),BUTTON_FLARE_BOOST:K(P.flareBoost),BUTTON_PRESS_SINK:K(P.pressSink),BUTTON_PRESS_FLASH:K(P.pressFlash),BUTTON_PRESS_SHRINK:K(P.pressShrink),WORD_MAX:P.wordMax,WORD_NONE:`254.5`,BUTTON_ICON_BLANK:q(P.iconBlank),BUTTON_DIM:K(P.dim),BUTTON_DEPTH:K(P.depth),BUTTON_STEEPNESS:K(P.steepness),BUTTON_CORE_START:K(P.coreStart),BUTTON_CORE_END:K(P.coreEnd),BUTTON_RAGGED:K(P.ragged),BUTTON_RIM_AMBIENT:K(P.rimAmbient),BUTTON_RIM_GAIN:K(P.rimGain),BUTTON_UNDER:K(P.under),BUTTON_CHURN_RATE:K(P.churnRate),BUTTON_HOT_GAIN:K(P.hotGain),BUG_COUNT:o.count,BUG_COLUMNS:o.columns,BUG_ROWS:o.rows,BUG_WAKE_REACH:K(I.wakeReach),BUG_LEVEL:K(I.level),BUG_WAKE_RED:K(I.wakeRed),BUG_BURST_SECONDS:K(I.burstSeconds),BUG_RESTORE_SECONDS:K(I.restoreSeconds),BUG_BURST_SCALE:K(I.burstScale),BUG_DEBRIS_RAMP_START:K(I.debrisRampStart),BUG_EMBER_DECAY:K(I.emberDecay),BUG_BURST_SPEED:K(I.burstSpeed),BUG_BURST_DRAG:K(I.burstDrag),BUG_BURST_GRAVITY:K(I.burstGravity),BUG_BURST_SPIN:K(I.burstSpin),BUG_BURST_LIFT:K(I.burstLift),BUG_FLASH_GAIN:K(I.flashGain),BUG_FLASH_DECAY:K(I.flashDecay),BUG_FLASH_RADIUS:K(I.flashRadius),EXIT_CHUNK_CELLS:q(V.chunkCells),EXIT_ORDER_CLUSTER:K(V.orderCluster),EXIT_ORDER_CELL:K(V.orderCell),EXIT_ORDER_HEIGHT:K(V.orderHeight),EXIT_RELEASE_SPREAD:K(V.releaseSpread),EXIT_FACE_DELAY:K(V.faceDelay),EXIT_EYES_RELEASE:K(V.eyesRelease),EXIT_EYES_JITTER:K(V.eyesJitter),EXIT_GRAVITY:K(V.gravity),EXIT_KICK:K(V.kick),EXIT_DRIFT:K(V.drift),EXIT_SPIN:K(V.spin),EXIT_POP:K(V.pop),EXIT_RELEASE_FLASH:K(V.releaseFlash),EXIT_FLASH_DECAY:K(V.flashDecay),EXIT_FADE_START:K(V.fadeStart),EXIT_FADE_END:K(V.fadeEnd),MOUTH_OPEN_DROP:K(ie.openDrop),MOUTH_OPEN_WIDTH:K(ie.openWidth),MOUTH_CAVITY:K(ie.cavity),MOUTH_EDGE_SOFTNESS:K(ie.edgeSoftness),MOUTH_JAW_HOLD:K(ie.jawHold),MOUTH_JAW_END:K(ie.jawEnd),HOLE_SLOT_COUNT:a.slots,HOLE_CORE_ROWS:K(L.coreRows),HOLE_BOLD_GAIN:K(L.boldGain),HOLE_BOLD_REACH:K(L.boldReach),HOLE_GLINT_WIDTH:K(L.glintWidth),HOLE_GLINT_LEVEL:K(L.glintLevel),TRAIL_ROW_CUTOFF:K(yn),HOLE_CRACK_JITTER:K(L.crackJitter),HOLE_CRACK_MIN:K(L.crackLength[0]),HOLE_CRACK_MAX:K(L.crackLength[1]),HOLE_CRACK_WOBBLE:K(L.crackWobble),HOLE_CRACK_GROW_SECONDS:K(L.crackGrowSeconds),HOLE_CRACK_HEAL:K(L.crackHeal),HOLE_CORE_HEAL:K(L.coreHeal),HOLE_REFILL:K(L.refill),HOLE_DARKEN:K(L.darken),HOLE_RIM_GAIN:K(L.rimGain),HOLE_RIM_PUSH:K(L.rimPush),HOLE_RIM_LIFT:K(L.rimLift),HOLE_FLASH_GAIN:K(L.flashGain),HOLE_FLASH_DECAY:K(L.flashDecay),TRAIL_SPEED:K(R.speed),TRAIL_REACH:K(R.reach),TRAIL_ROW_SPREAD:K(R.rowSpread),TRAIL_ROW_SHORTEST:K(R.rowShortest),TRAIL_CRACK_SPREAD:K(R.crackSpread),TRAIL_ROW_COST:K(R.rowCost),TRAIL_DROPOUT:K(R.dropout),TRAIL_COOL_SECONDS:K(R.coolSeconds),TRAIL_FRONT_SECONDS:K(R.frontSeconds),TRAIL_FRONT_GAIN:K(R.frontGain),TRAIL_GAIN:K(R.gain),TRAIL_RED_HOLD:K(R.redHold),GLITCH_PATCH_COUNT:z.maxPatches,GLITCH_SCRAMBLE_CHANCE:K(z.scrambleChance),GLITCH_SCRAMBLE_GAIN:K(z.scrambleGain),DARK_WALL_LEVEL:K(H.wallLevel),DARK_SPARK_SHARE:K(H.sparkShare),DARK_SPARK_RATE:K(H.sparkRate),DARK_SPARK_FLIP_RATE:K(H.sparkFlipRate),DARK_SPARK_LEVEL:K(H.sparkLevel),DARK_JAM_LEVEL:K(H.jamLevel),DARK_JAM_SHARE:K(H.jamShare),DARK_WINDOW_SCALE:K(H.windowScale),DARK_WINDOW_WOBBLE:K(H.windowWobble),DARK_WINDOW_RAGGED:K(H.windowRagged),DARK_WINDOW_SOFT:K(H.windowSoft),DARK_WINDOW_LEVEL:K(H.windowLevel),DARK_CORE_FAINT:K(H.coreFaint),DARK_AURA_SHAPE:q(H.auraShape),DARK_AURA_START:K(H.auraStart),DARK_AURA_END:K(H.auraEnd),DARK_AURA_RAGGED:K(H.auraRagged),DARK_AURA_LEVEL:K(H.auraLevel)},blending:0,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new p(Sn(1,1),d);return f.frustumCulled=!1,{mesh:f,uniforms:u,setGrid(e,t){(u.uGrid.value.x!==e||u.uGrid.value.y!==t)&&(f.geometry.dispose(),f.geometry=Sn(e,t),u.uGrid.value.set(e,t))},dispose(){f.geometry.dispose(),d.dispose()}}}var wn=4,Tn=2,En=3,Dn=0,On=1,kn=2,An=3;function jn(){let e=L.cap,t=L.levels.length-1,n=new Float32Array(e*wn),r=new Float32Array(e*wn).fill(1),i=new Uint8Array(e),a=new Uint8Array(e),o=new Float32Array(e).fill(1),s=e=>{let{hold:t,life:r}=L.levels[i[e]],a=Math.min(Math.max((n[e*wn+Tn]-t)/(r-t),0),1);return 1-a*a*(3-2*a)},c=e=>{let t=L.levels[i[e]],n=e*wn;r[n+Dn]=t.scale*o[e],r[n+On]=t.cracks,r[n+kn]=t.crackLength,r[n+An]=t.bold},l=(e,t,i)=>{let a=e*wn,o=L.mergeRadius*r[a+Dn];return n[a+En]>0&&Math.hypot(t-n[a],i-n[a+1])<=o},u=e=>{let t=e*wn;return n[t+En]>0?L.levels[i[e]].life-n[t+Tn]:0},d=()=>{let t=0;for(let n=1;n<e;n++)u(n)<u(t)&&(t=n);return t};return{data:n,forms:r,slots:e,add(r,s,u=1,f=!0){let p=0;for(let n=0;n<e;n++)if(l(n,r,s)){if(i[n]===t)return{life:0,shattered:!1};p=Math.max(p,a[n])}let m=d(),h=m*wn,g=f&&p+1>=L.shatterHits;return a[m]=p+1,i[m]=g?t:0,o[m]=u,n[h]=r,n[h+1]=s,n[h+Tn]=0,n[h+En]=1,c(m),{life:L.levels[i[m]].life,shattered:g}},update(t){for(let r=0;r<e;r++){let e=r*wn;n[e+En]<=0||(n[e+Tn]+=t,n[e+En]=s(r))}},settle(){for(let t=0;t<e;t++){let e=t*wn;n[e+En]>0&&(n[e+Tn]=R.settledAge,n[e+En]=1)}},clear(){n.fill(0)}}}var Mn=`touch`,Nn={passive:!0};function Pn(e,t){let n={clientX:0,clientY:0,viewX:0,viewY:0,hovering:!1,gazing:!1,moved:!1},r=0,i=e=>{n.clientX=e.clientX,n.clientY=e.clientY,n.viewX=e.clientX/window.innerWidth*2-1,n.viewY=e.clientY/window.innerHeight*2-1,n.hovering=!0,n.gazing=!0,n.moved=!0,r=0},a=e=>{e.pointerType===Mn&&(n.hovering=!1,r=N.touchReleaseSeconds)},o=()=>{n.hovering=!1,n.gazing=!1},s=e=>{t(e.clientX,e.clientY)};return window.addEventListener(`pointermove`,i,Nn),window.addEventListener(`pointerdown`,i,Nn),window.addEventListener(`pointerup`,a,Nn),window.addEventListener(`pointercancel`,a,Nn),document.documentElement.addEventListener(`pointerleave`,o),e.addEventListener(`click`,s),{state:n,update(e){r<=0||(r-=e,r<=0&&(n.gazing=!1))},dispose(){window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a),document.documentElement.removeEventListener(`pointerleave`,o),e.removeEventListener(`click`,s)}}}var Fn=4,In=-1;function Ln(){let e=new Float32Array(F.samples*Fn),t=new Float32Array(F.samples).fill(In),n=F.hold+F.revert,r=1,i=()=>{e.copyWithin(r*Fn,0,Fn),t[r]=t[0],r=r%(F.samples-1)+1};return{segments:e,ages:t,clear(){t.fill(In)},update(r,a,o){for(let e=1;e<F.samples;e++)t[e]!==In&&(t[e]+=r,t[e]>n&&(t[e]=In));if(!a){t[0]!==In&&(i(),t[0]=In);return}if(t[0]!==In&&!o){t[0]=Math.min(t[0]+r,n);return}t[0]>F.restSeconds&&(i(),e[0]=e[2],e[1]=e[3]),t[0]===In&&(e[0]=a.x,e[1]=a.y),t[0]=0,e[2]=a.x,e[3]=a.y,Math.hypot(a.x-e[0],a.y-e[1])>F.spacing&&(i(),e[0]=a.x,e[1]=a.y)}}}var Rn=[-1,-1,0,3,-1,0,-1,3,0],zn=`
varying vec2 vUv;

void main() {
	vUv = position.xy * 0.5 + 0.5;
	gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Bn=`
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uPixelRatio;
uniform float uTime;
uniform vec4 uPatches[GLITCH_PATCH_COUNT];
uniform vec3 uPatchFx[GLITCH_PATCH_COUNT];
uniform float uFail;
uniform float uPower;
uniform float uSpells;
uniform float uAlarm;
uniform float uBarrel;

varying vec2 vUv;

${G}

vec4 sampleScene(vec2 uv, float lod) {
	return textureLod(tScene, uv, lod) * INTENSITY_RANGE;
}

vec3 tint(vec4 light, vec3 amber, vec3 red, vec3 green) {
	return amber * max(light.r - light.g - light.b - light.a, 0.0) + red * light.g + COLOR_WHITE * light.b + green * light.a;
}

const vec3 LUMA_WEIGHTS = vec3(0.2126, 0.7152, 0.0722);

float spell(float period, float share, float chance, float salt) {
	float clock = uTime / period + salt;
	float tick = floor(clock);
	float along = (fract(clock) - hash11(tick + salt) * (1.0 - share)) / share;

	return uSpells * step(hash11(tick * 1.7 + salt + 9.0), chance) * smoothstep(0.0, SCREEN_SPELL_EDGE, along) * (1.0 - smoothstep(1.0 - SCREEN_SPELL_EDGE, 1.0, along));
}

void main() {
	float off = uFail - EXIT_OFF_START;
	float dying = step(0.0, uFail) * step(0.0, off);
	float sag = dying * smoothstep(0.0, EXIT_OFF_SAG_SECONDS, off);
	float squeeze = dying * smoothstep(EXIT_OFF_SAG_SECONDS, EXIT_OFF_SAG_SECONDS + EXIT_OFF_LINE_SECONDS, off);
	float pinch = dying * smoothstep(EXIT_OFF_SAG_SECONDS + EXIT_OFF_LINE_SECONDS, EXIT_OFF_SAG_SECONDS + EXIT_OFF_LINE_SECONDS + EXIT_OFF_DOT_SECONDS, off);
	float unstable = sag * (1.0 - pinch);
	float offTick = floor(off * EXIT_OFF_JITTER_RATE);
	float wobble = sin(vUv.y * EXIT_OFF_WOBBLE_WAVES + off * EXIT_OFF_WOBBLE_RATE) * EXIT_OFF_WOBBLE * unstable * (1.0 - squeeze);
	float skew = (hash11(offTick + 5.0) - 0.5) * EXIT_OFF_SKEW * unstable;
	float across = vUv.x - 0.5;
	float bulge = 1.0 + EXIT_OFF_BULGE * squeeze * (1.0 - pinch) * (1.0 - 4.0 * across * across);
	float tremble = 1.0 + EXIT_OFF_TREMBLE * (hash11(offTick + 9.0) - 0.5) * squeeze;
	vec2 keep = vec2(
		mix(1.0 + EXIT_OFF_OVERSCAN * unstable, EXIT_OFF_DOT_SIZE, pinch),
		mix(mix(1.0, EXIT_OFF_SAG, sag), EXIT_OFF_LINE_SIZE, squeeze) * bulge * tremble
	);
	vec2 offset = (vUv - 0.5) / keep;
	offset.x -= wobble + skew * offset.y;
	float inside = step(abs(offset.x), 0.5) * step(abs(offset.y), 0.5);
	offset = clamp(offset, -0.5, 0.5);
	vec2 shape = vec2(uResolution.x / uResolution.y, 1.0);
	vec2 scaled = offset * shape;
	float radius = dot(scaled, scaled) / (0.25 * dot(shape, shape));
	vec2 warped = offset * (1.0 + uBarrel * radius) / (1.0 + uBarrel);

	vec2 source = warped + 0.5;
	float rollLine = fract((source.y + uTime * SCREEN_ROLL_LINE_SPEED) * SCREEN_ROLL_LINES);
	float rollMark = 1.0 - smoothstep(0.0, SCREEN_ROLL_LINE_WIDTH, min(rollLine, 1.0 - rollLine) / SCREEN_ROLL_LINES);
	warped.x += rollMark * SCREEN_ROLL_LINE_SHIFT;
	vec2 tear = vec2(0.0);
	for (int index = 0; index < GLITCH_PATCH_COUNT; index++) {
		vec2 hit = step(uPatches[index].xy, source) * step(source, uPatches[index].zw);
		tear += hit.x * hit.y * uPatchFx[index].xy;
	}
	warped.x += tear.x;
	vec2 split = vec2(tear.y, 0.0);

	float jam = 0.0;
	float flicker = 1.0;
	float framed = 1.0;
	if (uFail >= 0.0) {
		float tick = floor(uFail * EXIT_SIGNAL_RATE);
		float onset = smoothstep(0.0, EXIT_SIGNAL_RISE, uFail);
		float surge = step(1.0 - EXIT_SIGNAL_SURGE_CHANCE, hash11(tick + 3.0));
		jam = onset * mix(EXIT_SIGNAL_CALM, 1.0, surge);
		float band = floor(vUv.y * EXIT_TEAR_BANDS) + tick * 3.0;
		warped.x += (hash11(band) - 0.5) * EXIT_TEAR_SHIFT * onset * surge * step(EXIT_TEAR_SPARSITY, hash11(band + 17.0));
		warped.y = fract(warped.y + 0.5 + (hash11(tick + 41.0) - 0.5) * EXIT_ROLL * onset * surge) - 0.5;
		split.x += EXIT_SPLIT * jam;
		flicker = 1.0 - EXIT_FLICKER * onset * hash11(tick + 71.0);
		framed = step(abs(warped.x), 0.5);
	}
	if (uAlarm > 0.0) {
		float alarmTick = floor(uTime * BOOT_ALARM_RATE);
		float alarmBand = floor(vUv.y * BOOT_ALARM_BANDS) + alarmTick * 3.0;
		warped.x += (hash11(alarmBand) - 0.5) * BOOT_ALARM_SHIFT * uAlarm * step(BOOT_ALARM_SPARSITY, hash11(alarmBand + 17.0));
		split.x += BOOT_ALARM_SPLIT * uAlarm;
		flicker *= 1.0 - BOOT_ALARM_FLICKER * uAlarm * hash11(alarmTick + 71.0);
	}
	split.x += EXIT_OFF_SPLIT * unstable;
	jam = max(jam, EXIT_OFF_NOISE * unstable);

	float lodBase = log2(uPixelRatio);
	float focusLod = max(lodBase + log2(SCREEN_FOCUS_BLUR_PX + SCREEN_EDGE_BLUR_PX * radius * radius), 0.0);
	float warm = sampleScene(0.5 + warped * (1.0 - SCREEN_ABERRATION) - split, focusLod).r;
	vec4 core = sampleScene(0.5 + warped, focusLod);
	float cool = sampleScene(0.5 + warped * (1.0 + SCREEN_ABERRATION) + split, focusLod).r;

	float glowLod = lodBase + log2(SCREEN_GLOW_BLUR_PX);
	vec2 tap = exp2(glowLod) * 0.75 / uResolution;
	vec4 glow = 0.25 * (
		sampleScene(0.5 + warped + tap, glowLod)
		+ sampleScene(0.5 + warped - tap, glowLod)
		+ sampleScene(0.5 + warped + vec2(tap.x, -tap.y), glowLod)
		+ sampleScene(0.5 + warped + vec2(-tap.x, tap.y), glowLod)
	);
	vec4 haze = sampleScene(0.5 + warped, lodBase + log2(SCREEN_GLOW_WIDE_BLUR_PX));

	vec3 color = tint(core, COLOR_INK, COLOR_RED, COLOR_GREEN);
	color += tint(core * core, COLOR_HOT * SCREEN_HOT_GAIN, COLOR_RED_HOT * SCREEN_RED_HOT_GAIN, COLOR_GREEN * SCREEN_HOT_GAIN);
	color += (COLOR_FRINGE_WARM * max(warm - core.r, 0.0) + COLOR_FRINGE_COOL * max(cool - core.r, 0.0)) * SCREEN_FRINGE_GAIN;
	color += tint(glow * SCREEN_GLOW_STRENGTH + haze * SCREEN_GLOW_WIDE_STRENGTH, COLOR_GLOW, COLOR_RED, COLOR_GREEN);

	float scanline = 1.0 - SCREEN_SCANLINE_STRENGTH * (0.5 + 0.5 * cos(gl_FragCoord.y * 6.2831853 / (SCREEN_SCANLINE_PERIOD_PX * uPixelRatio)));
	float vignette = 1.0 - SCREEN_VIGNETTE * radius * radius;
	float snow = hash21(floor(gl_FragCoord.xy / (EXIT_SNOW_PX * uPixelRatio)) + fract(uTime) * 91.0);
	float bar = (fract(vUv.y + uFail * EXIT_BAR_SPEED) - 0.5) / EXIT_BAR_WIDTH;
	color = color * framed * flicker + mix(COLOR_HOT, COLOR_WHITE, EXIT_SNOW_WHITE) * pow(snow, EXIT_SNOW_SHARPNESS) * EXIT_SNOW_GAIN * jam * (1.0 + EXIT_BAR_GAIN * exp(-bar * bar));
	float rollBand = (fract(source.y + uTime * SCREEN_ROLL_SPEED) - 0.5) / SCREEN_ROLL_WIDTH;
	float roll = 1.0 + SCREEN_ROLL_GAIN * exp(-rollBand * rollBand) - SCREEN_ROLL_LINE_GAIN * rollMark;
	color += COLOR_RED * BOOT_ALARM_GLOW * uAlarm * (0.5 + 0.5 * sin(uTime * BOOT_ALARM_PULSE)) * radius * radius;
	color = (color * scanline * roll + COLOR_FLOOR) * vignette;
	color *= inside * (1.0 + EXIT_OFF_GAIN * squeeze);
	if (dying > 0.5) {
		vec2 level = vUv - 0.5;
		vec2 levelScaled = level * shape;
		float levelRadius = dot(levelScaled, levelScaled) / (0.25 * dot(shape, shape));
		vec4 ghost = sampleScene(0.5 + level * (1.0 + uBarrel * levelRadius) / (1.0 + uBarrel), lodBase + EXIT_OFF_GHOST_LOD);
		color += tint(ghost, COLOR_GLOW, COLOR_RED, COLOR_GREEN) * EXIT_OFF_GHOST * squeeze * exp(-max(off - EXIT_OFF_SAG_SECONDS, 0.0) * EXIT_OFF_GHOST_DECAY);
		vec2 beam = (vUv - 0.5 - vec2(wobble, 0.0)) / (keep * 0.5 + EXIT_OFF_GLOW_SIZE);
		color += mix(COLOR_HOT, COLOR_WHITE, 0.7) * EXIT_OFF_BEAM * squeeze * squeeze * squeeze * exp(-dot(beam, beam));
		vec2 halo = levelScaled / EXIT_OFF_HALO_SIZE;
		color += mix(COLOR_HOT, COLOR_WHITE, 0.45) * EXIT_OFF_HALO * pinch * exp(-dot(halo, halo)) * (0.8 + 0.2 * hash11(offTick + 13.0));
	}

	float peak = max(color.r, max(color.g, color.b));
	color *= (1.0 - exp(-peak * SCREEN_EXPOSURE)) / max(peak, 0.00001);
	vec3 sepia = vec3(
		dot(color, vec3(0.393, 0.769, 0.189)),
		dot(color, vec3(0.349, 0.686, 0.168)),
		dot(color, vec3(0.272, 0.534, 0.131))
	);
	color = mix(color, sepia, SCREEN_SEPIA);
	color = max(mix(vec3(dot(color, LUMA_WEIGHTS)), color, SCREEN_SATURATION), 0.0);

	float grain = hash21(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5;
	color *= 1.0 + grain * SCREEN_GRAIN * 2.0;
	color += grain * SCREEN_GRAIN * 0.05;
	float grainy = spell(SCREEN_GRAIN_SPELL_PERIOD, SCREEN_GRAIN_SPELL_SHARE, SCREEN_GRAIN_SPELL_CHANCE, 9.6);
	vec2 speck = floor(gl_FragCoord.xy / (SCREEN_GRAIN_SPELL_PX * uPixelRatio));
	float coarse = hash21(speck + fract(uTime * 1.3) * 83.0);
	grainy *= step(hash21(speck.yx + fract(uTime * 1.7) * 47.0), SCREEN_GRAIN_SPELL_DENSITY);
	color *= 1.0 + (coarse - 0.5) * SCREEN_GRAIN_SPELL * 2.0 * grainy;
	color += mix(COLOR_HOT, COLOR_WHITE, 0.5) * coarse * coarse * coarse * SCREEN_GRAIN_SPELL_SNOW * grainy * inside;

	gl_FragColor = vec4(max(color, 0.0) * uPower, 1.0);
	#include <colorspace_fragment>
}
`;function Vn({patches:e}){let t={tScene:{value:null},uResolution:{value:new n(1,1)},uPixelRatio:{value:1},uTime:{value:0},uPatches:{value:e.rects},uPatchFx:{value:e.effects},uFail:{value:-1},uPower:{value:1},uSpells:{value:1},uAlarm:{value:0},uBarrel:{value:B.barrel}},r=new ee;r.setAttribute(`position`,new v(new Float32Array(Rn),3));let i=new S({uniforms:t,vertexShader:zn,fragmentShader:Bn,defines:{INTENSITY_RANGE:K(B.intensityRange),SCREEN_ABERRATION:K(B.aberration),SCREEN_FOCUS_BLUR_PX:K(B.focusBlurPx),SCREEN_EDGE_BLUR_PX:K(B.edgeBlurPx),SCREEN_GLOW_BLUR_PX:K(B.glowBlurPx),SCREEN_GLOW_WIDE_BLUR_PX:K(B.glowWideBlurPx),SCREEN_GLOW_STRENGTH:K(B.glowStrength),SCREEN_GLOW_WIDE_STRENGTH:K(B.glowWideStrength),SCREEN_HOT_GAIN:K(B.hotGain),SCREEN_RED_HOT_GAIN:K(B.redHotGain),SCREEN_FRINGE_GAIN:K(B.fringeGain),SCREEN_EXPOSURE:K(B.exposure),SCREEN_SEPIA:K(B.sepia),SCREEN_SATURATION:K(B.saturation),SCREEN_VIGNETTE:K(B.vignette),SCREEN_SCANLINE_STRENGTH:K(B.scanlineStrength),SCREEN_SCANLINE_PERIOD_PX:K(B.scanlinePeriodPx),SCREEN_GRAIN:K(B.grain),SCREEN_SPELL_EDGE:K(B.spellEdge),BOOT_ALARM_RATE:K(k.alarmRate),BOOT_ALARM_BANDS:K(k.alarmBands),BOOT_ALARM_SHIFT:K(k.alarmShift),BOOT_ALARM_SPARSITY:K(k.alarmSparsity),BOOT_ALARM_SPLIT:K(k.alarmSplit),BOOT_ALARM_FLICKER:K(k.alarmFlicker),BOOT_ALARM_GLOW:K(k.alarmGlow),BOOT_ALARM_PULSE:K(k.alarmPulse),SCREEN_GRAIN_SPELL_PERIOD:K(B.grainSpellPeriod),SCREEN_GRAIN_SPELL_SHARE:K(B.grainSpellShare),SCREEN_GRAIN_SPELL_CHANCE:K(B.grainSpellChance),SCREEN_GRAIN_SPELL:K(B.grainSpell),SCREEN_GRAIN_SPELL_DENSITY:K(B.grainSpellDensity),SCREEN_GRAIN_SPELL_PX:K(B.grainSpellPx),SCREEN_GRAIN_SPELL_SNOW:K(B.grainSpellSnow),GLITCH_PATCH_COUNT:z.maxPatches,COLOR_INK:q(w.ink),COLOR_HOT:q(w.hot),COLOR_GLOW:q(w.glow),COLOR_RED:q(w.red),COLOR_WHITE:q(w.white),COLOR_GREEN:q(w.green),EXIT_SIGNAL_RISE:K(V.signalRise),EXIT_SIGNAL_RATE:K(V.signalRate),EXIT_SIGNAL_CALM:K(V.signalCalm),EXIT_SIGNAL_SURGE_CHANCE:K(V.signalSurgeChance),EXIT_TEAR_BANDS:K(V.tearBands),EXIT_TEAR_SHIFT:K(V.tearShift),EXIT_TEAR_SPARSITY:K(V.tearSparsity),EXIT_ROLL:K(V.roll),EXIT_SPLIT:K(V.split),EXIT_FLICKER:K(V.flicker),EXIT_SNOW_PX:K(V.snowPx),EXIT_SNOW_GAIN:K(V.snowGain),EXIT_SNOW_SHARPNESS:K(V.snowSharpness),EXIT_SNOW_WHITE:K(V.snowWhite),EXIT_BAR_SPEED:K(V.barSpeed),EXIT_BAR_WIDTH:K(V.barWidth),EXIT_BAR_GAIN:K(V.barGain),EXIT_OFF_START:K(V.offStart),EXIT_OFF_SAG_SECONDS:K(V.offSagSeconds),EXIT_OFF_SAG:K(V.offSag),EXIT_OFF_OVERSCAN:K(V.offOverscan),EXIT_OFF_WOBBLE:K(V.offWobble),EXIT_OFF_WOBBLE_WAVES:K(V.offWobbleWaves),EXIT_OFF_WOBBLE_RATE:K(V.offWobbleRate),EXIT_OFF_SKEW:K(V.offSkew),EXIT_OFF_JITTER_RATE:K(V.offJitterRate),EXIT_OFF_BULGE:K(V.offBulge),EXIT_OFF_TREMBLE:K(V.offTremble),EXIT_OFF_SPLIT:K(V.offSplit),EXIT_OFF_NOISE:K(V.offNoise),EXIT_OFF_GHOST:K(V.offGhost),EXIT_OFF_GHOST_DECAY:K(V.offGhostDecay),EXIT_OFF_GHOST_LOD:K(V.offGhostLod),EXIT_OFF_HALO:K(V.offHalo),EXIT_OFF_HALO_SIZE:K(V.offHaloSize),SCREEN_ROLL_SPEED:K(B.rollSpeed),SCREEN_ROLL_WIDTH:K(B.rollWidth),SCREEN_ROLL_GAIN:K(B.rollGain),SCREEN_ROLL_LINES:K(B.rollLines),SCREEN_ROLL_LINE_SPEED:K(B.rollLineSpeed),SCREEN_ROLL_LINE_WIDTH:K(B.rollLineWidth),SCREEN_ROLL_LINE_GAIN:K(B.rollLineGain),SCREEN_ROLL_LINE_SHIFT:K(B.rollLineShift),EXIT_OFF_LINE_SECONDS:K(V.offLineSeconds),EXIT_OFF_DOT_SECONDS:K(V.offDotSeconds),EXIT_OFF_LINE_SIZE:K(V.offLineSize),EXIT_OFF_DOT_SIZE:K(V.offDotSize),EXIT_OFF_GAIN:K(V.offGain),EXIT_OFF_BEAM:K(V.offBeam),EXIT_OFF_GLOW_SIZE:K(V.offGlowSize),COLOR_RED_HOT:q(w.redHot),COLOR_FRINGE_WARM:q(w.fringeWarm),COLOR_FRINGE_COOL:q(w.fringeCool),COLOR_FLOOR:q(w.floor)},blending:0,depthTest:!1,depthWrite:!1,toneMapped:!1}),a=new p(r,i);a.frustumCulled=!1;let o=new h;return{uniforms:t,render(e){e.setRenderTarget(null),e.render(a,o)},dispose(){r.dispose(),i.dispose()}}}var Hn=1,Un=.5,Wn=1e3,Gn=`(prefers-reduced-motion: reduce)`,Kn={boot:`boot`,ready:`ready`,print:`print`,settle:`settle`,face:`face`,awake:`awake`},qn=[Kn.boot,Kn.ready,Kn.print,Kn.settle,Kn.face,Kn.awake],Jn=qn.indexOf(Kn.awake),$={idle:0,running:1,done:2},Yn=-1,Xn=-1,Zn=-1,Qn=[O.fontWeight,k.buttonWeight],$n=16,er=4,tr=V.offStart+V.offSagSeconds+V.offLineSeconds+V.offDotSeconds+V.offFadeSeconds;function nr(){let e=new Promise(e=>{window.setTimeout(e,O.loadWaitSeconds*Wn)}),t=Qn.map(e=>document.fonts.load(`${e} ${$n}px ${O.fontFamily}`));return Promise.race([Promise.allSettled(t),e])}function rr(a,s={}){let c=new te({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`});c.toneMapping=0,c.setClearColor(0,0),c.info.autoReset=!1;let u=c.domElement;a.appendChild(u);let d=new e(1,1,{format:l,type:r,colorSpace:``,magFilter:b,minFilter:_,generateMipmaps:!0,depthBuffer:!1,stencilBuffer:!1}),f=pn(),p=Kt(),h=nn(z.firstStart),g=ut(p.eyes),v=Ln(),y=ot(f),ee=jn(),x=Re(f),ne=me(),S=Cn({atlas:f,face:p,patches:h,paint:v,holes:ee,bugs:y,plates:x,labels:ne}),C=Vn({patches:h}),w=ct(),O=ke(),j=!!s.dark;C.uniforms.tScene.value=d.texture,S.uniforms.uDark.value=+!!j,j&&y.halt();let F=new t;F.add(S.mesh);let I=Hn/Math.tan(m.degToRad(D.fov)/2),R=new re(D.fov,1,D.near,D.far);R.position.set(0,0,I),R.updateMatrixWorld();let oe=new o;oe.connect(document);let U=window.matchMedia(Gn),se=new n,ce=new n,le=new i,ue={x:0,y:0},de={x:0,y:0},fe={x:0,y:0},pe={x:0,y:0},W={aspect:1,narrow:0,barrel:B.barrel,faceHalfSize:1,faceY:0,left:0,top:0,width:1,height:1,zoomDistance:1,zoomFocusY:0},G={zoomStep:$.idle,zoomClock:0,zoom:0,collapseStep:$.idle,collapseClock:0,locked:!1,crumbles:!0,failShift:-V.monitorStart},K=A.duration+(j?H.faceDelay:M.delay),q=0,he=j?A.duration:0,ge=!!s.boot&&!j&&!U.matches,_e=0,ve=+!!ge,ye=Zn,be=0,xe=-1,Se=!1,Ce=!1,we=0,Te=0,Ee=0,De=0,Oe=null,Ae=null,je=0,Me=1,Ne=0,Pe=0,Fe=0,Ie=!0,Le=!!s.held,ze=!1,Be=!1,J=!1,Ve=e=>{let t=qn.indexOf(e);t<=xe||(xe=t,s.onPhase?.(e))},He=()=>{let e=a.getBoundingClientRect();W.left=e.left,W.top=e.top,W.width=e.width||1,W.height=e.height||1},Ue=()=>{let{clientWidth:e,clientHeight:t}=a;if(!e||!t)return!1;let n=e/t,r=m.clamp(m.inverseLerp(B.wideAspect,B.narrowAspect,n),0,1);W.narrow=r;let i=Math.min(window.devicePixelRatio,ae.maxPixelRatio);Me=Math.max(Math.min(ae.minPixelRatio,i),i-je),c.setPixelRatio(Me),c.setSize(e,t),c.getDrawingBufferSize(se),d.setSize(se.x,se.y),C.uniforms.uResolution.value.copy(se),C.uniforms.uPixelRatio.value=Me,G.locked&&w.setSize(se.x,se.y,r),ve>0&&O.setSize(se.x,se.y,r),R.aspect=n,R.updateProjectionMatrix();let o=m.clamp(Math.min(e,t)/E.cellsPerShortSide,E.minCellPx,E.maxCellPx),l=()=>[Math.ceil(e*E.overscan/(o*T.cellAspect)),Math.ceil(t*E.overscan/o)],[u,f]=l();u*f>E.maxCells&&(o*=Math.sqrt(u*f/E.maxCells),[u,f]=l());let h=2/t;S.setGrid(u,f);let g=e/(o*T.cellAspect),_=t/o,v=(u-g)/2,b=(f-_)/2,ee=o*T.cellAspect*h;S.uniforms.uPrintWindow.value.set(v,b,g,_),y.setLayout({columns:u,rows:f,cellWidth:ee,cellHeight:o*h,firstColumn:v,firstRow:b,visibleColumns:g,visibleRows:_}),x.setLayout({columns:u,rows:f,cellWidth:ee,cellHeight:o*h}),S.uniforms.uCellSize.value.set(o*T.cellAspect*h,o*h),W.barrel=m.lerp(B.barrel,B.barrelNarrow,r),C.uniforms.uBarrel.value=W.barrel;let te=M.fitHeight;n<B.narrowAspect?te=M.fitHeightNarrow:n<B.wideAspect&&(te=m.lerp(...M.fitHeightMiddle,r));let ne=Math.min(te,m.lerp(M.fitWidth,M.fitWidthNarrow,r)*n),re=ne*(j?H.faceScale:1)*Hn,D=j?m.lerp(H.faceLift,H.faceLiftNarrow,r):0,k=(M.offsetY+D-M.sink*Math.max(te-ne,0))*Hn;S.uniforms.uFaceScale.value=.5/re,S.uniforms.uFaceDepth.value=M.depth*re,S.uniforms.uShadeDepth.value=M.shadeDepth*re,S.uniforms.uFaceCenter.value.set(0,k);let A=Math.min(V.fillHeight*2*Hn/(p.head.height*re),V.fillWidth*2*Hn*n/(p.head.width*re));return W.zoomDistance=I/Math.max(A,1),W.zoomFocusY=k+(p.head.centerY+V.focusShift)*re,W.aspect=n,W.faceHalfSize=re,W.faceY=k,He(),x.refresh(We,n),ge&&s.onStartBox?.(Ke()),!0},We=(e,t)=>{let{aspect:n,barrel:r}=W,i=(e-W.left)/W.width*2-1,a=1-(t-W.top)/W.height*2,o=(1+r*((i*i*n*n+a*a)/(n*n+1)))/(1+r);return de.x=i*o,de.y=a*o,de},Ge=(e,t)=>{let{aspect:n,barrel:r}=W,i=(e*e*n*n+t*t)/(n*n+1),a=1;for(let e=0;e<er;e++){let e=r*i*a**3+a-1-r;a-=e/(3*r*i*a*a+1)}return fe.x=W.left+(e*a+1)/2*W.width,fe.y=W.top+(1-t*a)/2*W.height,fe},Ke=()=>{let e=O.buttonBox(),t=[[e.left,e.top],[e.left+e.width,e.top],[e.left,e.top+e.height],[e.left+e.width,e.top+e.height]].map(([e,t])=>{let n=Ge(e*2-1,1-t*2);return[n.x-W.left,n.y-W.top]}),n=Math.min(...t.map(([e])=>e)),r=Math.min(...t.map(([,e])=>e));return{left:n,top:r,width:Math.max(...t.map(([e])=>e))-n,height:Math.max(...t.map(([,e])=>e))-r}},qe=(e,t)=>{let{x:n,y:r}=We(e,t);le.set(n,r,Un).unproject(R).sub(R.position);let i=-R.position.z/le.z;return ue.x=R.position.x+le.x*i,ue.y=R.position.y+le.y*i,ue},Je=e=>{let t=.5/W.faceHalfSize;return p.covers(e.x*t+.5,(e.y-W.faceY)*t+.5)},Ye=e=>(pe.x=e.x/W.faceHalfSize,pe.y=(e.y-W.faceY)/W.faceHalfSize,pe),Xe=()=>{let e=s.mouthLevel?Number(s.mouthLevel()):0;return Number.isFinite(e)?m.clamp(e,0,1):0},Ze=()=>{let e=s.loadProgress?Number(s.loadProgress()):1;return Number.isFinite(e)?m.clamp(e,0,1):1},Qe=(e,t,n,r,i,a)=>{S.uniforms.uMouth.value=we,S.uniforms.uTime.value=e,S.uniforms.uPrint.value=t,S.mesh.visible=t>Xn,S.uniforms.uFace.value=n,S.uniforms.uEyeGlow.value=r,S.uniforms.uGaze.value.fromArray(g.offsets),C.uniforms.uTime.value=e,C.uniforms.uSpells.value=+!U.matches,O.uniforms.uClock.value=_e,O.uniforms.uLevel.value=ve,C.uniforms.uAlarm.value=ye<0?0:Math.min(ye/k.alarmRiseSeconds,1)*ve;let o=G.collapseStep!==$.idle,c=o?G.collapseClock+G.failShift:Yn,l=m.clamp((tr-c)/V.offFadeSeconds,0,1);S.uniforms.uCrumble.value=o&&G.crumbles?G.collapseClock:Yn,C.uniforms.uFail.value=Math.max(c,Yn),w.uniforms.uClock.value=G.crumbles?C.uniforms.uFail.value:Yn,w.typing(w.uniforms.uClock.value)&&s.onTyping?.(),C.uniforms.uPower.value=G.collapseStep===$.done?0:l*l;let u=m.lerp(I,W.zoomDistance,G.zoom),d=W.zoomFocusY*G.zoom;R.position.set(Math.sin(i)*Math.cos(a)*u,d+Math.sin(a)*u,Math.cos(i)*Math.cos(a)*u),R.lookAt(0,d,0),R.updateMatrixWorld(),S.uniforms.uDim.value=x.publish(),s.onButtonShift&&x.eachFollowed((e,t)=>{le.set(t.centerX,t.centerY,P.depth*t.presence).project(R);let n=Ge(le.x,le.y);s.onButtonShift(e,n.x-t.clientX,n.y-t.clientY)})},$e=()=>{c.info.reset(),c.setRenderTarget(d),c.render(F,R),w.uniforms.uClock.value>=0&&w.render(c),ve>0&&O.render(c),C.render(c)},et=()=>{ge=!1,ve=0,Ve(Kn.face),h.clear(),Ve(Kn.awake),v.clear(),y.hide(),ee.settle(),g.rest(),x.settle(),we=0,Qe(60,60,1,N.glow,0,0),$e()},tt=e=>{if(Ne++,Ne<=ae.warmupFrames||e>ae.pauseSeconds||(Pe+=e,Fe++,Fe<ae.sampleFrames))return;let t=Pe/Fe>ae.slowFrameSeconds;Pe=0,Fe=0,t&&Me>ae.minPixelRatio&&(je+=ae.pixelRatioStep,Ue())},nt=()=>{ee.clear(),!J&&!ze&&U.matches&&et()},rt=()=>{G.locked||w.setSize(se.x,se.y,W.narrow),G.locked=!0,y.halt(),x.set([],We,W.aspect)},it=e=>{J||G.locked||(x.set(e,We,W.aspect),ne.set(e),!ze&&U.matches&&et())},at=()=>{window.clearTimeout(Ee),G.zoomStep===$.running&&(G.zoomStep=$.done,G.zoom=1),Oe?.(),Oe=null},st=()=>{Ce||(Ce=!0,s.onPowerOff?.())},lt=()=>{window.clearTimeout(De),G.collapseStep===$.running&&(st(),G.collapseStep=$.done,Be=!1,J||c.setAnimationLoop(null),!J&&!ze&&(Qe(q,he,1,0,0,0),$e())),Ae?.(),Ae=null},Y=()=>{let e=Ne;Ee=window.setTimeout(()=>Ne===e?at():Y(),V.stallSeconds*Wn)},dt=()=>{let e=Ne;De=window.setTimeout(()=>Ne===e?lt():dt(),V.stallSeconds*Wn)},ft=()=>J||ze||G.zoomStep!==$.idle||G.collapseStep!==$.idle?Promise.resolve():(rt(),U.matches?(G.zoomStep=$.done,G.zoom=1,et(),Promise.resolve()):(G.zoomStep=$.running,Y(),new Promise(e=>{Oe=e}))),pt=e=>J||ze||G.collapseStep!==$.idle?Promise.resolve():(G.crumbles=e,G.failShift=e?-V.monitorStart:V.offStart-V.rebootSeconds,rt(),Oe?.(),Oe=null,G.collapseStep=$.running,U.matches?(lt(),Promise.resolve()):(dt(),new Promise(e=>{Ae=e}))),mt=()=>{!ge||J||ye>=0||(ye=0,O.alarm(_e),O.setButton(!1,!0),s.onAlarm?.())},X=(e,t)=>{ye<0&&O.setButton(e,t)},ht=(e,t,n)=>{if(J||ze||G.locked||ge)return!1;let r=qe(e,t),i=U.matches,a=i?null:y.tryKill(r.x,r.y);if(!a&&n)return!1;if(j&&!a&&Je(r))return xe>=Jn&&s.onFaceHit?.(),!1;let o=a?ee.add(a.x,a.y,L.bugKillScale):ee.add(r.x,r.y,1);return a?s.onBugKilled?.():xe>=Jn&&Je(r)&&s.onFaceHit?.(),o.shattered&&s.onHoleShattered?.(),i&&o.life>0&&(et(),window.clearTimeout(Te),Te=window.setTimeout(nt,o.life*Wn)),!!a},gt=Pn(a,(e,t)=>{ht(e,t,!1)}),_t=e=>{oe.update(e);let t=oe.getDelta(),n=Math.min(t,ae.maxDeltaSeconds);q+=n,tt(t);let r=Ze();if(ge){let e=r<1&&q<A.maxWaitSeconds;_e=Math.max(_e,e?Math.min(_e+n,O.reach(r)):_e+n),ye>=0&&(ye+=n),ye>=k.alertSeconds&&(ge=!1,be=q)}else{let e=q-be,t=r<1&&e<A.maxWaitSeconds,i=he<A.duration&&he+n<e,a=he+n*(i?A.catchUpRate:1),o=he;he=Math.max(he,t?Math.min(a,r*A.duration):a),ve=Math.max(ve-n/k.clearSeconds,0),he>o&&o<A.duration&&s.onTyping?.()}let i=m.smootherstep(he,K,K+M.riseDuration),a=1+M.breatheAmount*i*Math.sin((he-K)*M.breatheSpeed);he>=K&&!Se&&(Se=!0,h.trigger(q,z.faceBurstDuration)),h.sample(q),gt.update(n);let{state:o}=gt,c=!G.locked,l=c&&(o.hovering||o.gazing)?qe(o.clientX,o.clientY):null;v.update(n,o.hovering?l:null,o.moved),o.moved=!1,y.update(n,he),ee.update(n),x.update(n),c?g.update(n,q,o.gazing?Ye(l):null):g.relax(n),G.zoomStep===$.running&&(G.zoomClock+=n,G.zoom=m.smootherstep(G.zoomClock,0,V.zoomSeconds)),G.collapseStep===$.running&&(G.collapseClock+=n,G.collapseClock+G.failShift>=V.offStart&&st());let u=Xe();we+=(u-we)*(1-Math.exp(-(u>we?ie.attack:ie.release)*n));let d=N.glow*i*i*(1+N.pulseAmount*Math.sin(q*N.pulseSpeed)),f=1-Math.exp(-D.pointerSmoothing*n),p=G.locked?1-G.zoom:1;ce.x+=((c?o.viewX:0)-ce.x)*f,ce.y+=((c?o.viewY:0)-ce.y)*f;let _=Math.sin(q*D.driftYawSpeed)*D.driftYaw*p+ce.x*D.pointerYaw,b=Math.sin(q*D.driftPitchSpeed)*D.driftPitch*p-ce.y*D.pointerPitch;ge?Ve(_e<O.duration?Kn.boot:Kn.ready):he<A.duration?Ve(Kn.print):Ve(he<K?Kn.settle:Kn.face),he>=K+M.riseDuration&&Ve(Kn.awake),Qe(q,ge?Xn:he,i*a,d,_,b),$e(),G.zoomStep===$.running&&G.zoomClock>=V.zoomSeconds&&at(),G.collapseStep===$.running&&G.collapseClock+G.failShift>=tr&&lt()},Z=()=>{if(J)return;let e=!Le&&!U.matches&&Ie&&!document.hidden&&!ze&&G.collapseStep!==$.done;e!==Be&&(Be=e,c.setAnimationLoop(Be?_t:null)),U.matches&&!ze&&et()},vt=()=>{J||!Ue()||ze||(U.matches?et():Ne>0&&!Le&&$e())},yt=e=>{e.preventDefault(),ze=!0,at(),lt(),Z()},Q=()=>{ze=!1,Z()},bt=new IntersectionObserver(([e])=>{Ie=e.isIntersecting,Z()});return bt.observe(a),window.addEventListener(`scroll`,He,{passive:!0}),document.addEventListener(`visibilitychange`,Z),U.addEventListener(`change`,Z),u.addEventListener(`webglcontextlost`,yt),u.addEventListener(`webglcontextrestored`,Q),Ue(),Le&&!U.matches&&(_t(performance.now()),c.setRenderTarget(null),c.clear()),Z(),{resize:vt,begin(){Le&&!J&&(Le=!1,Z())},start:mt,setStartButton:X,zoomIn:ft,collapse:()=>pt(!0),reboot:()=>pt(!1),strikeBug:(e,t)=>ht(e,t,!0),jolt(e){!J&&!U.matches&&h.trigger(q,e)},setButtons:it,getStats(){return{drawCalls:c.info.render.calls,triangles:c.info.render.triangles,pixelRatio:Me,cells:S.mesh.geometry.instanceCount,textures:c.info.memory.textures}},dispose(){J=!0,at(),lt(),Be=!1,c.setAnimationLoop(null),bt.disconnect(),window.clearTimeout(Te),gt.dispose(),window.removeEventListener(`scroll`,He),document.removeEventListener(`visibilitychange`,Z),U.removeEventListener(`change`,Z),u.removeEventListener(`webglcontextlost`,yt),u.removeEventListener(`webglcontextrestored`,Q),oe.dispose(),S.dispose(),C.dispose(),w.dispose(),O.dispose(),ne.dispose(),x.dispose(),f.texture.dispose(),p.texture.dispose(),y.dispose(),d.dispose(),c.dispose(),c.forceContextLoss(),u.remove()}}}export{rr as createGlyphHeroScene,nr as loadGlyphHeroFonts};