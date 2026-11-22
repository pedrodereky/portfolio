import{F as e,G as t,J as n,K as r,M as i,P as a,Q as o,T as s,X as c,Y as l,Z as u,q as d}from"./index-w3BRHVFD.js";import{C as f,D as p,a as m,g as h,l as g,p as ee,r as _,t as te,v as ne,w as re,y as v}from"./three.module-B-CQE7DZ.js";var y=([e,t])=>e+Math.random()*(t-e),ie=(e,n,r,i,a)=>{let o=y(t.tinkleHz);for(let[s,c]of t.partials){let t=u(e,o*s);t.connect(d(e,i*c,n,r)).connect(a),t.start(n),t.stop(n+r)}},b=(e,n,r,i,a,o)=>{for(let s=0;s<r;s+=1)ie(e,n+Math.random()**t.scatterBias*i,y(t.tinkleSeconds),a*y(t.tinkleSpread),o)},x=(e,i,a)=>{let o=l(e,t.volume),s=r(e,t.echoSeconds,t.echoFeedback);o.connect(a),o.connect(s).connect(l(e,t.echoMix)).connect(a);let f=c(e,t.snapSeconds);f.connect(n(e,`highpass`,t.snapHz)).connect(d(e,t.snapGain,i,t.snapSeconds)).connect(o),f.start(i);let p=u(e,t.knockHz);p.connect(d(e,t.knockGain,i,t.knockSeconds)).connect(o),p.start(i),p.stop(i+t.knockSeconds);let m=c(e,t.crackleSeconds);m.connect(n(e,`bandpass`,t.crackleHz)).connect(d(e,t.crackleGain,i,t.crackleSeconds)).connect(o),m.start(i),b(e,i,t.crackTinkles,t.crackSpan,t.tinkleGain,o)},ae=(e,n,r)=>{let i=l(e,t.volume);i.connect(r),b(e,n,t.debrisTinkles,t.debrisSpan,t.debrisGain,i)},oe=e=>({crack(){let t=e.unlock();t&&x(t,t.currentTime,e.output())},debris(){let t=e.unlock();t&&ae(t,t.currentTime,e.output())}}),S={maxPixelRatio:1.5,fov:35,ringFirst:60,ringGrowthNear:[1.7,1.95],ringGrowthFar:[2.1,2.6],ringRamp:3,ringJitter:.35,spokes:6,spokeJitter:.6,spokeWobble:.14,splitRing:5,splitChance:.15,seedMargin:60,strays:1,jagSteps:4,jagSpacing:28,jagShare:.06,jagMax:9,thickness:8,captureScale:1,captureMargin:200,mediaWaitMs:120,captureTimeoutSeconds:5,prepareFreshSeconds:1,captureStyles:`display.position.top.right.bottom.left.z-index.float.clear.width.height.min-width.min-height.max-width.max-height.box-sizing.aspect-ratio.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.overflow-x.overflow-y.overflow-clip-margin.clip.clip-path.flex-direction.flex-wrap.flex-grow.flex-shrink.flex-basis.order.justify-content.justify-items.justify-self.align-items.align-self.align-content.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.grid-auto-columns.grid-auto-rows.grid-auto-flow.grid-column-start.grid-column-end.grid-row-start.grid-row-end.color.font-family.font-size.font-weight.font-style.font-stretch.font-variant.font-variant-numeric.font-feature-settings.font-variation-settings.line-height.letter-spacing.word-spacing.text-transform.text-align.text-align-last.text-indent.text-decoration-line.text-decoration-color.text-decoration-style.text-decoration-thickness.text-decoration-skip-ink.text-underline-offset.text-underline-position.text-shadow.text-overflow.text-wrap-mode.text-wrap-style.white-space-collapse.white-space.word-break.overflow-wrap.hyphens.vertical-align.direction.unicode-bidi.-webkit-text-fill-color.-webkit-text-stroke-width.-webkit-text-stroke-color.-webkit-line-clamp.-webkit-box-orient.tab-size.list-style-type.list-style-position.list-style-image.content.quotes.counter-reset.counter-increment.background-color.background-image.background-size.background-position-x.background-position-y.background-repeat.background-clip.-webkit-background-clip.background-origin.background-attachment.background-blend-mode.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-image-source.border-image-slice.border-image-width.border-image-outset.border-image-repeat.border-collapse.border-spacing.table-layout.caption-side.empty-cells.outline-width.outline-style.outline-color.outline-offset.box-shadow.opacity.visibility.transform.transform-origin.transform-style.translate.rotate.scale.perspective.perspective-origin.backface-visibility.filter.backdrop-filter.mix-blend-mode.isolation.mask-image.mask-size.mask-position.mask-repeat.mask-mode.mask-composite.mask-clip.mask-origin.-webkit-mask-image.-webkit-mask-size.-webkit-mask-position.-webkit-mask-repeat.object-fit.object-position.image-rendering.appearance.-webkit-appearance.accent-color.resize.fill.fill-opacity.fill-rule.stroke.stroke-width.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-dasharray.stroke-dashoffset.stroke-opacity.stop-color.stop-opacity.paint-order.vector-effect.shape-rendering.text-anchor.dominant-baseline.x.y.cx.cy.r.rx.ry.d`.split(`.`),crackSeconds:.55,coverAfterCrack:.8,revealSoft:.06,holdSeconds:.25,releaseWaitSeconds:1.6,giveUpSeconds:9,soundSeconds:3,edgeCore:1.4,edgeGlow:3.5,glowLevel:.5,refract:.012,glassDark:[.02,.01,.005],glassTint:[.015,.02,.03],light:[-.4,.6,1],shininess:28,specLevel:.9,glintLight:[.55,-.35,1],glintShininess:90,glintLevel:1.6,edgeGlint:1.1,edgeGlintColor:[1,.66,.36],edgeGlintWidth:3,crackSpec:.15,fallEdgeDim:.5,ink:[1,.42,.08],white:[1,.97,.94],crackGlow:[.7,.4,.2],crackCore:[.95,.8,.66],chroma:.35,crackBend:.35,fresnelPower:3,fresnelLevel:.6,envLow:[.02,.03,.05],envHigh:[.55,.62,.7],glassEdge:[.6,.36,.18],sideSite:.35,sideTint:.45,flashRadius:140,glitchBands:38,glitchRate:24,glitchCut:.62,glitchShift:.035,glitchSplit:.004,glitchFlash:.35,glitchImpact:1,glitchImpactDecay:5,glitchBurstSeconds:[.07,.2],glitchBurstPower:[.45,1],glitchGapSeconds:[.12,.45],glitchFallShare:.75,shardGlitchRate:16,shardGlitchShare:.35,shardGlitchShift:16,shardGlitchSlide:.012,shardGlitchSplit:.01,shardGlitchTint:.16,compileWaitSeconds:.4,blockColumns:14,blockRows:22,blockCut:.87,blockShift:.06,blockTint:.7,blockSwap:.4,blockSwapGain:1.6,snowLevel:.09,scanlineLevel:.07,scanlinePx:3,errors:[`FATAL 0x0000DEAD: site halted`,`render.sys: SCREEN CRACKED`,`DOM tree corrupted @7FFE12A4`,`demon.exe has root access`,`kernel panic: glass buffer overflow`,`ERR_SITE_SHATTERED`,`segmentation fault (core dumped)`,`unhandled exception in reality.js:666`,`NO SIGNAL`,`stack smashing detected`,`access violation at 0x00000666`,`GPU hung: too many shards`],errorTitles:[`SYSTEM ERROR`,`FATAL`,`CRITICAL`,`WARNING`,`EXCEPTION`],errorFont:`"Science Gothic", monospace`,errorWeight:600,errorSizeShare:.0095,errorSize:[11,15],errorTitleScale:.8,errorPad:.7,errorBoxShare:.45,errorRedShare:.35,errorLifeSeconds:[.35,1.1],errorGapSeconds:[.05,.25],errorSpawnFloor:.2,errorPerBurst:3,errorImpactCount:4,errorMax:14,errorTypeRate:90,errorFrameRate:30,errorBlinkShare:.35,errorShake:10,errorSplit:3,errorStopAfterFall:1.1,errorInk:`#ff6a14`,errorRed:`#ff2a2a`,errorText:`#f4ece4`,errorTitleInk:`#0a0503`,errorShade:`rgba(8, 4, 2, 0.82)`,errorSplitLeft:`rgba(255, 0, 60, 0.75)`,errorSplitRight:`rgba(0, 220, 255, 0.6)`,flashDecay:3.5,nudge:[1,4],tilt:.06,fallSeconds:1.6,fallSpeed:1.1,fallSpread:.7,fallJitter:.18,glassSeconds:.5,fadeFrom:.65,gravity:2100,kick:380,throwSpread:1.6,drift:320,lift:300,toward:[-180,520],spin:7,impactCrumbs:140,impactSpeed:[180,1100],impactSpread:.08,fallCrumbs:650,crumbArea:2073600,crumbFloor:.25,crumbFollow:.55,crumbBurst:420,crumbDelay:.3,crumbLife:[.6,1.5],crumbGravity:1700,crumbFadeFrom:.55,crumbTwinkleRate:34,crumbTwinkleFloor:.35,crumbSize:[3,9],crumbWhiteShare:.6,crumbInk:.75,crumbOrder:5e3},C=1e3,w=8,T=16,E=`box`,D=`line`,O=Math.random,k=([e,t])=>e+(t-e)*O(),A=e=>e[Math.floor(O()*e.length)],j=()=>`0x${Math.floor(O()*T**w).toString(T).toUpperCase().padStart(w,`0`)}`;function se(e,t){let n=Math.min(window.devicePixelRatio||1,S.maxPixelRatio),r=document.createElement(`canvas`);r.width=Math.round(e*n),r.height=Math.round(t*n),r.setAttribute(`aria-hidden`,`true`),Object.assign(r.style,{position:`fixed`,inset:`0`,zIndex:`101`,width:`${e}px`,height:`${t}px`,pointerEvents:`none`}),document.body.appendChild(r);let i=r.getContext(`2d`);i.scale(n,n);let a=Math.min(Math.max(e*S.errorSizeShare,S.errorSize[0]),S.errorSize[1]),o=`${S.errorWeight} ${a}px ${S.errorFont}`,s=`${S.errorWeight} ${a*S.errorTitleScale}px ${S.errorFont}`,c=a*S.errorPad,l=[],u=0,d=-1,f=(n,r)=>{for(let s=0;s<r;s+=1){let r=A(S.errors);i.font=o;let s=i.measureText(r).width+c*2;l.push({text:r,title:`${A(S.errorTitles)} ${j()}`,kind:O()<S.errorBoxShare?E:D,red:O()<S.errorRedShare,x:O()*Math.max(e-s,0),y:a*2+O()*Math.max(t-a*6,0),width:s,born:n,until:n+k(S.errorLifeSeconds)*C})}l.splice(0,Math.max(l.length-S.errorMax,0))},p=(e,t,n,r,a)=>{a>0&&(i.globalCompositeOperation=`lighter`,i.fillStyle=S.errorSplitLeft,i.fillText(e,t-a,n),i.fillStyle=S.errorSplitRight,i.fillText(e,t+a,n),i.globalCompositeOperation=`source-over`),i.fillStyle=r,i.fillText(e,t,n)},m=(e,t,n)=>{let r=e.text.slice(0,Math.ceil((t-e.born)/C*S.errorTypeRate)),l=(O()-.5)*n*S.errorShake,u=n*S.errorSplit,d=e.x+l,f=e.red?S.errorRed:S.errorInk;if(i.textBaseline=`top`,e.kind===D){i.fillStyle=S.errorShade,i.fillRect(d-c/2,e.y-c/3,e.width,a+c*.66),i.font=o,p(`> ${r}`,d,e.y,f,u);return}let m=a*S.errorTitleScale+c,h=m+a+c*2;i.fillStyle=S.errorShade,i.fillRect(d,e.y,e.width,h),i.fillStyle=f,i.fillRect(d,e.y,e.width,m),i.strokeStyle=f,i.lineWidth=1,i.strokeRect(d+.5,e.y+.5,e.width-1,h-1),i.font=s,i.fillStyle=S.errorTitleInk,i.fillText(e.title,d+c,e.y+c/2),i.font=o,p(r,d+c,e.y+m+c,S.errorText,u)};return{update(n,r,a){a&&r>S.errorSpawnFloor&&n>=u&&(f(n,1+Math.floor(r*S.errorPerBurst*O())),u=n+k(S.errorGapSeconds)*C);for(let e=l.length-1;e>=0;--e)n>l[e].until&&l.splice(e,1);let o=Math.floor(n/C*S.errorFrameRate);if(o!==d){d=o,i.clearRect(0,0,e,t);for(let e of l)O()>S.errorBlinkShare*r&&m(e,n,r)}},burst(e){f(e,S.errorImpactCount),u=e+k(S.errorGapSeconds)*C},dispose(){r.remove()}}}var M=1e3,N={cracking:0,covered:1,falling:2,done:3},P=.5,F=1e5,I=2,L=`#app`,R=`CANVAS`,ce=`#000`,le=`KHR_parallel_shader_compile`,ue=`EXT_texture_filter_anisotropic`,z=`data-glass-clear`,B=`data-glass-hold`,V=`data-glass-fixed`,H=`data-glass-fixed-host`,U=`rgba(0, 0, 0, 0)`,W=[0,0,1],G=`
float noise1(float value) {
	return fract(sin(value * 12.9898) * 43758.5453);
}
`,de=`
attribute float aEdge;
attribute float aSide;
attribute vec3 aHome;
attribute vec4 aMotion;
attribute vec3 aSpin;
attribute vec4 aNudge;
uniform float uCover;
uniform float uFallTime;
uniform float uTime;
uniform float uGlitch;
varying vec2 vUv;
varying float vEdge;
varying float vSide;
varying float vReveal;
varying float vFall;
varying float vFade;
varying vec3 vNormal;
varying float vJump;
varying vec2 vSlide;

${G}

mat3 turnBy(vec3 angle) {
	vec3 c = cos(angle);
	vec3 s = sin(angle);
	mat3 aroundX = mat3(1.0, 0.0, 0.0, 0.0, c.x, s.x, 0.0, -s.x, c.x);
	mat3 aroundY = mat3(c.y, 0.0, -s.y, 0.0, 1.0, 0.0, s.y, 0.0, c.y);
	mat3 aroundZ = mat3(c.z, s.z, 0.0, -s.z, c.z, 0.0, 0.0, 0.0, 1.0);

	return aroundX * aroundY * aroundZ;
}

void main() {
	float age = max(uFallTime - aMotion.w, 0.0);
	mat3 turn = turnBy(vec3(aNudge.zw * uCover, 0.0) + aSpin * age);
	vec3 shift = vec3(aNudge.xy * uCover, 0.0) + aMotion.xyz * age + vec3(0.0, -0.5 * GRAVITY * age * age, 0.0);
	vec3 world = vec3(aHome.xy, 0.0) + shift + turn * position;
	float shardSeed = noise1(dot(aHome.xy, vec2(0.0137, 0.0711)));
	float shardTick = floor(uTime * SHARD_GLITCH_RATE);
	float jump = step(1.0 - SHARD_GLITCH_SHARE, noise1(shardSeed * 91.7 + shardTick)) * uGlitch;
	vec2 kick = vec2(noise1(shardSeed * 13.1 + shardTick), noise1(shardSeed * 7.3 + shardTick * 1.7)) * 2.0 - 1.0;
	world.xy += kick * SHARD_GLITCH_SHIFT * jump;
	vJump = jump;
	vSlide = kick.yx * SHARD_GLITCH_SLIDE * jump;
	vUv = uv;
	vEdge = aEdge;
	vSide = aSide;
	vReveal = aHome.z;
	vFall = clamp(age / GLASS_SECONDS, 0.0, 1.0);
	vFade = max((clamp(age / FALL_SECONDS, 0.0, 1.0) - FADE_FROM) / (1.0 - FADE_FROM), 0.0);
	vNormal = normalize(turn * normal);
	gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`,fe=`
uniform sampler2D tSite;
uniform float uTextured;
uniform float uCover;
uniform float uTime;
uniform float uGlitch;
uniform vec2 uOrigin;
uniform vec2 uResolution;
varying vec2 vUv;
varying float vEdge;
varying float vSide;
varying float vReveal;
varying float vFall;
varying float vFade;
varying vec3 vNormal;
varying float vJump;
varying vec2 vSlide;

${G}

void main() {
	float crack = smoothstep(vReveal, vReveal + REVEAL_SOFT, uTime);
	float core = 1.0 - smoothstep(EDGE_CORE * 0.5, EDGE_CORE, vEdge);
	float glow = exp(-vEdge / EDGE_GLOW) * GLOW_LEVEL;
	vec3 normal = normalize(vNormal) * (vSide > 0.5 || gl_FrontFacing ? 1.0 : -1.0);
	float facing = abs(normal.z);

	float band = floor(vUv.y * GLITCH_BANDS) + floor(uTime * GLITCH_RATE) * 17.0;
	float torn = step(GLITCH_CUT, noise1(band + 3.1)) * uGlitch;
	vec2 bend = normal.xy * REFRACT * (vFall + CRACK_BEND) + vec2((noise1(band) - 0.5) * GLITCH_SHIFT * torn, 0.0);
	vec2 split = vec2(uGlitch * GLITCH_SPLIT + vJump * SHARD_GLITCH_SPLIT, 0.0);
	vec2 cell = floor(vUv * vec2(BLOCK_COLUMNS, BLOCK_ROWS));
	float blockTick = floor(uTime * GLITCH_RATE);
	float blockRoll = noise1(dot(cell, vec2(7.13, 31.71)) + blockTick * 3.7);
	float blocky = step(BLOCK_CUT, blockRoll) * step(0.15, uGlitch);
	vec2 uv = vUv + vSlide + vec2((noise1(blockRoll * 13.0) - 0.5) * BLOCK_SHIFT * blocky, 0.0);
	vec3 site = vec3(
		texture2D(tSite, uv + bend * (1.0 + CHROMA) + split).r,
		texture2D(tSite, uv + bend).g,
		texture2D(tSite, uv + bend * (1.0 - CHROMA) - split).b
	);
	site = mix(GLASS_DARK, site, uTextured);

	vec3 view = vec3(0.0, 0.0, 1.0);
	float spec = pow(max(dot(reflect(-normalize(LIGHT), normal), view), 0.0), SHININESS);
	float glint = pow(max(dot(reflect(-normalize(GLINT_LIGHT), normal), view), 0.0), GLINT_SHININESS);
	float fresnel = pow(1.0 - facing, FRESNEL_POWER);
	vec3 env = mix(ENV_LOW, ENV_HIGH, clamp(normal.y * 0.5 + 0.5, 0.0, 1.0));
	vec3 color = mix(site, env, fresnel * FRESNEL_LEVEL) + GLASS_TINT;
	color += WHITE * (spec * SPEC_LEVEL * max(vFall, CRACK_SPEC) + glint * GLINT_LEVEL * vFall);
	color += EDGE_GLINT_COLOR * exp(-vEdge / EDGE_GLINT_WIDTH) * (spec + glint) * EDGE_GLINT * vFall;
	if (vSide > 0.5) {
		float lambert = 0.35 + 0.65 * max(dot(normal, normalize(LIGHT)), 0.0);
		color = mix(site * SIDE_SITE, GLASS_EDGE, SIDE_TINT) * lambert + WHITE * (spec * SPEC_LEVEL + glint * GLINT_LEVEL);
	}
	color *= 1.0 + torn * GLITCH_FLASH;
	color += INK * vJump * SHARD_GLITCH_TINT;
	float luma = dot(color, vec3(0.3, 0.5, 0.2));
	vec3 blockColor = mix(INK * luma * 2.5, color.brg * BLOCK_SWAP_GAIN, step(1.0 - BLOCK_SWAP, noise1(blockRoll * 7.0)));
	color = mix(color, blockColor, blocky * BLOCK_TINT);
	color += (noise1(floor(gl_FragCoord.y) * 0.37 + floor(gl_FragCoord.x * 0.5) * 0.013 + uTime * 61.0) - 0.5) * SNOW_LEVEL * uGlitch;
	color *= 1.0 - SCANLINE_LEVEL * step(0.5, fract(gl_FragCoord.y / SCANLINE_PX));

	vec3 edgeColor = mix(CRACK_GLOW, CRACK_CORE, core);
	float lit = crack * max(core, glow) * (1.0 - vSide) * (1.0 - vFall * FALL_EDGE_DIM);
	float flash = exp(-length((vUv - uOrigin) * uResolution) / FLASH_RADIUS) * exp(-uTime * FLASH_DECAY);
	color = mix(color, edgeColor, clamp(lit, 0.0, 1.0)) + WHITE * flash;
	float alpha = clamp(max(max(uCover, lit), flash), 0.0, 1.0) * (1.0 - vFade);
	gl_FragColor = vec4(color * alpha, alpha);
}
`,pe=`
attribute vec3 aVelocity;
attribute vec3 aLife;
uniform float uTime;
uniform float uScale;
varying float vFade;
varying float vSeed;
varying float vTwinkle;

void main() {
	float age = uTime - aLife.x;
	vSeed = aLife.z;
	if (age < 0.0 || age > aLife.y) {
		vFade = 0.0;
		vTwinkle = 0.0;
		gl_PointSize = 0.0;
		gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		return;
	}
	vec3 point = position + aVelocity * age + vec3(0.0, -0.5 * CRUMB_GRAVITY * age * age, 0.0);
	vec4 view = modelViewMatrix * vec4(point, 1.0);
	gl_Position = projectionMatrix * view;
	vFade = 1.0 - smoothstep(CRUMB_FADE_FROM, 1.0, age / aLife.y);
	vTwinkle = CRUMB_TWINKLE_FLOOR + (1.0 - CRUMB_TWINKLE_FLOOR) * (0.5 + 0.5 * sin(age * CRUMB_TWINKLE_RATE + aLife.z * 40.0));
	gl_PointSize = uScale * mix(CRUMB_SIZE_MIN, CRUMB_SIZE_MAX, aLife.z) * (CAMERA_DISTANCE / max(-view.z, 1.0));
}
`,me=`
varying float vFade;
varying float vSeed;
varying float vTwinkle;

void main() {
	vec2 offset = gl_PointCoord - 0.5;
	float shape = 1.0 - smoothstep(0.2, 0.5, abs(offset.x) + abs(offset.y));
	float alpha = shape * vFade * vTwinkle;
	vec3 color = mix(WHITE, INK, step(CRUMB_WHITE_SHARE, vSeed) * CRUMB_INK);
	gl_FragColor = vec4(color * alpha, alpha);
}
`,K=null,q=e=>Number.isInteger(e)?`${e}.0`:String(e),J=e=>`vec3(${e.map(q).join(`, `)})`,Y=Math.random,X=([e,t])=>e+(t-e)*Y(),he=(e,t,n)=>{let r=n.x-t.x,i=n.y-t.y,a=(t.x+n.x)/2,o=(t.y+n.y)/2,s=e=>(e.x-a)*r+(e.y-o)*i,c=[];for(let t=0;t<e.length;t+=1){let n=e[t],r=e[(t+1)%e.length],i=s(n),a=s(r);if(i<=0&&c.push(n),i<=0!=a<=0){let e=i/(i-a);c.push({x:n.x+(r.x-n.x)*e,y:n.y+(r.y-n.y)*e})}}return c},ge=(t,n,r)=>{let a=Math.hypot(Math.max(t.x,n-t.x),Math.max(t.y,r-t.y))+S.ringFirst,o=S.seedMargin,s=Y()*i,c=Array.from({length:S.spokes},(e,t)=>s+(t+(Y()-.5)*S.spokeJitter)/S.spokes*i),l=Array.from({length:S.strays},()=>({x:Y()*n,y:Y()*r})),u=S.ringFirst,d=0;for(;u<a;){let a=d<S.splitRing?c:c.flatMap((e,t)=>{let n=c[(t+1)%c.length]+(t+1===c.length?i:0);return Y()<S.splitChance?[e,(e+n)/2]:[e]});for(let e of a){let i=e+(Y()-.5)*S.spokeWobble,a=u*(1+(Y()-.5)*S.ringJitter),s={x:t.x+Math.cos(i)*a,y:t.y+Math.sin(i)*a};s.x>-o&&s.x<n+o&&s.y>-o&&s.y<r+o&&l.push(s)}let s=Math.min(d/S.ringRamp,1);u*=e(S.ringGrowthNear,Y())*(1-s)+e(S.ringGrowthFar,Y())*s,d+=1}return l},Z=(e,t,n)=>e.x<P||e.y<P||e.x>t-P||e.y>n-P,Q=e=>Math.round(e*I),_e=(e,t,n,r)=>{if(Z(e,n,r)&&Z(t,n,r))return[];let i=Q(e.x)<Q(t.x)||Q(e.x)===Q(t.x)&&Q(e.y)<=Q(t.y),[o,s]=i?[e,t]:[t,e],c=Math.hypot(s.x-o.x,s.y-o.y),l=Math.min(S.jagSteps,Math.floor(c/S.jagSpacing));if(l<1)return[];let u=Q(o.x)*.013+Q(o.y)*.071+Q(s.x)*.037+Q(s.y)*.053,d=-(s.y-o.y)/c,f=(s.x-o.x)/c,p=Math.min(c*S.jagShare,S.jagMax),m=[];for(let e=1;e<=l;e+=1){let t=(e+(a(u+e*1.7)-.5)*.6)/(l+1),n=(a(u+e*3.1)-.5)*2*p;m.push({x:o.x+(s.x-o.x)*t+d*n,y:o.y+(s.y-o.y)*t+f*n})}return i?m:m.reverse()},ve=(e,t,n)=>e.flatMap((r,i)=>[r,..._e(r,e[(i+1)%e.length],t,n)]),ye=(e,t,n)=>{let r=ge(e,t,n),i=[{x:0,y:0},{x:t,y:0},{x:t,y:n},{x:0,y:n}];return r.map(e=>r.reduce((t,n)=>n===e||t.length<3?t:he(t,e,n),i)).filter(e=>e.length>=3).map(e=>({polygon:ve(e,t,n),centre:e.reduce((t,n)=>({x:t.x+n.x/e.length,y:t.y+n.y/e.length}),{x:0,y:0})}))},be=(e,t,n)=>{let r=Math.hypot(n.x-t.x,n.y-t.y)||1;return Math.abs((n.x-t.x)*(t.y-e.y)-(t.x-e.x)*(n.y-t.y))/r},xe=({polygon:e,centre:t},n,r,i,a)=>{let o=Math.hypot(t.x-n.x,t.y-n.y)/a,s=Math.atan2(t.y-n.y,t.x-n.x),c=s+(Y()-.5)*S.throwSpread;return{polygon:e,centre:t,home:[t.x-r/2,i/2-t.y,o*S.crackSeconds],start:Math.min(Math.max(t.y/i,0),1)*S.fallSpread+Y()*S.fallJitter,velocity:[Math.cos(c)*S.kick*Y()+(Y()-.5)*S.drift,-Math.sin(c)*S.kick*Y()+S.lift*Y(),X(S.toward)],spin:[(Y()-.5)*S.spin,(Y()-.5)*S.spin,(Y()-.5)*S.spin*.6],nudge:[Math.cos(s)*X(S.nudge),-Math.sin(s)*X(S.nudge),(Y()-.5)*S.tilt,(Y()-.5)*S.tilt]}},Se=(e,t,n)=>{let r={position:[],normal:[],uv:[],aEdge:[],aSide:[],aHome:[],aMotion:[],aSpin:[],aNudge:[]},i=S.thickness/2;for(let a of e){let{polygon:e,centre:o}=a,s=[...a.velocity,a.start],c=(e,i,c,l,u)=>{r.position.push(e.x-o.x,o.y-e.y,i),r.uv.push(e.x/t,1-e.y/n),r.normal.push(...u),r.aEdge.push(c),r.aSide.push(l),r.aHome.push(...a.home),r.aMotion.push(...s),r.aSpin.push(...a.spin),r.aNudge.push(...a.nudge)};for(let r=0;r<e.length;r+=1){let a=e[r],s=e[(r+1)%e.length],l=Z(a,t,n)&&Z(s,t,n)&&(Math.abs(a.x-s.x)<P||Math.abs(a.y-s.y)<P);c(o,i,l?F:be(o,a,s),0,W),c(a,i,l?F:0,0,W),c(s,i,l?F:0,0,W);let u=Math.hypot(s.x-a.x,s.y-a.y)||1,d=(s.y-a.y)*((a.x+s.x)/2-o.x)-(s.x-a.x)*((a.y+s.y)/2-o.y)>0?1:-1,f=[(s.y-a.y)/u*d,(s.x-a.x)/u*d,0];c(a,i,F,1,f),c(s,i,F,1,f),c(s,-i,F,1,f),c(a,i,F,1,f),c(s,-i,F,1,f),c(a,-i,F,1,f)}}let a={position:3,normal:3,uv:2,aEdge:1,aSide:1,aHome:3,aMotion:4,aSpin:3,aNudge:4},o=new _;for(let[e,t]of Object.entries(r))o.setAttribute(e,new g(t,a[e]));return o},Ce=(e,t,n)=>{let r=new Float32Array(e*3),i=new Float32Array(e*3),a=new Float32Array(e*3);for(let n=0;n<e;n+=1){let e=t();r.set(e.position,n*3),i.set(e.velocity,n*3),a.set([e.start,e.life,Y()],n*3)}let o=new _;o.setAttribute(`position`,new g(r,3)),o.setAttribute(`aVelocity`,new g(i,3)),o.setAttribute(`aLife`,new g(a,3));let s=new v(o,n);return s.frustumCulled=!1,s.renderOrder=S.crumbOrder,s},we=(e,t,n)=>e.bottom>-S.captureMargin&&e.top<t&&e.left<n,Te=(e,t,n)=>{let r=document.createElement(`canvas`);r.width=t.width,r.height=t.height;let i=r.getContext(`2d`),a=t.width/n;i.fillStyle=ce,i.fillRect(0,0,r.width,r.height);for(let t of e){if(!t.width||!t.height)continue;let e=t.getBoundingClientRect();i.globalAlpha=Number(getComputedStyle(t).opacity),i.drawImage(t,e.left*a,e.top*a,e.width*a,e.height*a)}return i.globalAlpha=1,i.drawImage(t,0,0),r},Ee=(e,t)=>{let n=new Set;for(let r of e)for(let e=r.parentElement;e&&e!==t.parentElement;e=e.parentElement)getComputedStyle(e).backgroundColor!==U&&n.add(e);return n.forEach(e=>e.setAttribute(z,``)),()=>n.forEach(e=>e.removeAttribute(z))},De=e=>{let t=[...e.querySelectorAll(`*`)].filter(e=>e.tagName!==R&&getComputedStyle(e).position===`fixed`),n=new Set;return t.forEach(t=>{let r=0;for(let i=t.parentElement;i&&i!==e.parentElement;i=i.parentElement)n.add(i),r+=i.scrollTop;t.setAttribute(V,String(r))}),n.forEach(e=>e.setAttribute(H,``)),()=>{t.forEach(e=>e.removeAttribute(V)),n.forEach(e=>e.removeAttribute(H))}},Oe=(e,t,n)=>{let r=[],i=e=>{for(let a of e.children){if(a.tagName===R||a.hasAttribute(V))continue;let e=a.getBoundingClientRect();a.hasAttribute(H)?i(a):e.bottom<-S.captureMargin?(a.setAttribute(B,`${a.offsetHeight||e.height}px`),r.push(a)):e.top<t&&e.left<n&&i(a)}};return i(e),()=>r.forEach(e=>e.removeAttribute(B))},ke=e=>{let t=(e instanceof Element?e:e.parentElement)?.closest(`[${B}]`);return!!t&&t!==e},Ae=e=>{if(e instanceof Element){if(e.hasAttribute(z)&&e.style.setProperty(`background-color`,`transparent`,`important`),e.hasAttribute(V)){let t=e.style.transform;e.style.transform=`translateY(${e.getAttribute(V)}px)${t&&t!==`none`?` ${t}`:``}`}if(e.hasAttribute(B)){let t=e.getAttribute(B);e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`flex`,`none`,`important`),e.style.setProperty(`height`,t,`important`),e.style.setProperty(`min-height`,t,`important`),e.style.setProperty(`max-height`,t,`important`)}}},je=async(e,t)=>{let n=document.querySelector(L);if(!n)return null;let{createContext:r,destroyContext:i,domToCanvas:a}=await s(async()=>{let{createContext:e,destroyContext:t,domToCanvas:n}=await import(`./dist-DUb8gwR2.js`);return{createContext:e,destroyContext:t,domToCanvas:n}},[]),o=t+S.captureMargin,c=e+S.captureMargin,l=[...n.querySelectorAll(`canvas`)].filter(e=>{let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&we(t,o,c)&&getComputedStyle(e).visibility!==`hidden`}),u=Ee(l,n),d=De(n),f=Oe(n,o,c),p=()=>{u(),d(),f()},m=await r(n,{width:e,height:t,scale:Math.min(window.devicePixelRatio||1,S.captureScale),timeout:S.mediaWaitMs,features:{restoreScrollPosition:!0},includeStyleProperties:S.captureStyles,onCloneEachNode:Ae,filter:e=>!ke(e)&&(!(e instanceof Element)||e.hasAttribute(B)||e.hasAttribute(V)||e.hasAttribute(H)||e.tagName!==R&&we(e.getBoundingClientRect(),o,c))});m.timeout=S.captureTimeoutSeconds*M;try{return Te(l,await a(m),e)}finally{p(),i(m)}},Me=e=>e,Ne=Promise.resolve(),$=null,Pe=(e,t)=>{let n=Ne.then(()=>Me(je(e,t))).catch(()=>null);return Ne=n,n},Fe=(e,t)=>{let n=$&&$.width===e&&$.height===t&&performance.now()-$.at<S.prepareFreshSeconds*M?$.shot:null;return $=null,n},Ie=(e,t)=>Promise.race([e,new Promise(e=>{window.setTimeout(()=>e(null),t*M)})]),Le=e=>({REVEAL_SOFT:q(S.revealSoft),EDGE_CORE:q(S.edgeCore),EDGE_GLOW:q(S.edgeGlow),GLOW_LEVEL:q(S.glowLevel),REFRACT:q(S.refract),GLASS_DARK:J(S.glassDark),GLASS_TINT:J(S.glassTint),LIGHT:J(S.light),GLINT_LIGHT:J(S.glintLight),SHININESS:q(S.shininess),GLINT_SHININESS:q(S.glintShininess),SPEC_LEVEL:q(S.specLevel),GLINT_LEVEL:q(S.glintLevel),EDGE_GLINT:q(S.edgeGlint),EDGE_GLINT_WIDTH:q(S.edgeGlintWidth),CRACK_SPEC:q(S.crackSpec),FALL_EDGE_DIM:q(S.fallEdgeDim),INK:J(S.ink),WHITE:J(S.white),CRACK_GLOW:J(S.crackGlow),CRACK_CORE:J(S.crackCore),EDGE_GLINT_COLOR:J(S.edgeGlintColor),CHROMA:q(S.chroma),CRACK_BEND:q(S.crackBend),FRESNEL_POWER:q(S.fresnelPower),FRESNEL_LEVEL:q(S.fresnelLevel),ENV_LOW:J(S.envLow),ENV_HIGH:J(S.envHigh),GLASS_EDGE:J(S.glassEdge),SIDE_SITE:q(S.sideSite),SIDE_TINT:q(S.sideTint),FLASH_RADIUS:q(S.flashRadius),FLASH_DECAY:q(S.flashDecay),GLITCH_BANDS:q(S.glitchBands),GLITCH_RATE:q(S.glitchRate),GLITCH_CUT:q(S.glitchCut),GLITCH_SHIFT:q(S.glitchShift),GLITCH_SPLIT:q(S.glitchSplit),GLITCH_FLASH:q(S.glitchFlash),SHARD_GLITCH_RATE:q(S.shardGlitchRate),SHARD_GLITCH_SHARE:q(S.shardGlitchShare),SHARD_GLITCH_SHIFT:q(S.shardGlitchShift),SHARD_GLITCH_SLIDE:q(S.shardGlitchSlide),SHARD_GLITCH_SPLIT:q(S.shardGlitchSplit),SHARD_GLITCH_TINT:q(S.shardGlitchTint),BLOCK_COLUMNS:q(S.blockColumns),BLOCK_ROWS:q(S.blockRows),BLOCK_CUT:q(S.blockCut),BLOCK_SHIFT:q(S.blockShift),BLOCK_TINT:q(S.blockTint),BLOCK_SWAP:q(S.blockSwap),BLOCK_SWAP_GAIN:q(S.blockSwapGain),SNOW_LEVEL:q(S.snowLevel),SCANLINE_LEVEL:q(S.scanlineLevel),SCANLINE_PX:q(S.scanlinePx),GRAVITY:q(S.gravity),GLASS_SECONDS:q(S.glassSeconds),FALL_SECONDS:q(S.fallSeconds),FADE_FROM:q(S.fadeFrom),CAMERA_DISTANCE:q(Math.round(e)),CRUMB_GRAVITY:q(S.crumbGravity),CRUMB_FADE_FROM:q(S.crumbFadeFrom),CRUMB_TWINKLE_RATE:q(S.crumbTwinkleRate),CRUMB_TWINKLE_FLOOR:q(S.crumbTwinkleFloor),CRUMB_SIZE_MIN:q(S.crumbSize[0]),CRUMB_SIZE_MAX:q(S.crumbSize[1]),CRUMB_WHITE_SHARE:q(S.crumbWhiteShare),CRUMB_INK:q(S.crumbInk)});function Re(e,t,n=null){K?.dispose();let r=window.innerWidth,a=window.innerHeight,s;try{s=new te({alpha:!0,antialias:!0,premultipliedAlpha:!0})}catch{return t?.(),null}s.debug.checkShaderErrors=!1,s.extensions.has(ue),s.setPixelRatio(Math.min(window.devicePixelRatio||1,S.maxPixelRatio)),s.setSize(r,a),s.setClearColor(0,0);let c=s.domElement;c.setAttribute(`aria-hidden`,`true`),Object.assign(c.style,{position:`fixed`,inset:`0`,zIndex:`100`,width:`${r}px`,height:`${a}px`}),document.body.appendChild(c);let l=a/2/Math.tan(S.fov*Math.PI/360),u=new ne(S.fov,r/a,1,l*4);u.position.set(0,0,l);let d=new f,g=se(r,a),_=n??o(),v=oe(_),y=Math.hypot(Math.max(e.x,r-e.x),Math.max(e.y,a-e.y)),ie=Le(l),b={tSite:{value:null},uTextured:{value:0},uCover:{value:0},uTime:{value:0},uFallTime:{value:-1},uGlitch:{value:0},uOrigin:{value:new p(e.x/r,1-e.y/a)},uResolution:{value:new p(r,a)}},x=ye(e,r,a).map(t=>xe(t,e,r,a,y)),ae=Math.max(...x.map(e=>e.start)),C=new h(Se(x,r,a),new re({uniforms:b,vertexShader:de,fragmentShader:fe,defines:ie,transparent:!0,premultipliedAlpha:!0,blending:1,side:2}));C.frustumCulled=!1,d.add(C);let w=()=>new re({uniforms:{uTime:{value:-1},uScale:{value:s.getPixelRatio()}},vertexShader:pe,fragmentShader:me,defines:ie,transparent:!0,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1}),T=Math.min(1,r*a/S.crumbArea+S.crumbFloor),E=Ce(Math.round(S.impactCrumbs*T),()=>{let t=Y()*i,n=X(S.impactSpeed);return{position:[e.x-r/2,a/2-e.y,0],velocity:[Math.cos(t)*n,Math.sin(t)*n,X(S.toward)],start:Y()*S.impactSpread,life:X(S.crumbLife)}},w()),D=Ce(Math.round(S.fallCrumbs*T),()=>{let e=x[Math.floor(Y()*x.length)],t=Math.floor(Y()*e.polygon.length),n=e.polygon[t],i=e.polygon[(t+1)%e.polygon.length],o=Y();return{position:[n.x+(i.x-n.x)*o-r/2,a/2-(n.y+(i.y-n.y)*o),0],velocity:[e.velocity[0]*S.crumbFollow+(Y()-.5)*S.crumbBurst,e.velocity[1]*S.crumbFollow+(Y()-.5)*S.crumbBurst,X(S.toward)],start:e.start+Y()*S.crumbDelay,life:X(S.crumbLife)}},w());d.add(E,D);let O=0,k={until:0,power:0,next:0},A=Math.max(ae+S.fallSeconds,S.crumbDelay+S.crumbLife[1]),j=N.cracking,P=0,F=1/0,I=!1,L=0,R=0,ce=null,z=new Promise(e=>{ce=e}),B=()=>{j===N.covered&&(j=N.falling,F=Math.max(performance.now(),P+S.holdSeconds*M),window.setTimeout(()=>v.debris(),Math.max(F-performance.now(),0)))},V=e=>{if(j===N.cracking){if(e){let t=new m(e);t.minFilter=ee,t.generateMipmaps=!1,b.tSite.value=t,b.uTextured.value=1}b.uCover.value=1,j=N.covered,P=performance.now(),t?.(),R=window.setTimeout(B,S.releaseWaitSeconds*M),I&&B()}},H=(e,t)=>(e>=k.next&&(k.until=e+X(S.glitchBurstSeconds)*M,k.power=X(S.glitchBurstPower)*(j===N.falling?S.glitchFallShare:1),k.next=e+X(S.glitchGapSeconds)*M),Math.max(S.glitchImpact*Math.exp(-t*S.glitchImpactDecay),e<k.until?k.power:0)),U={release(){return I=!0,B(),z},dispose(){j=N.done,cancelAnimationFrame(L),window.clearTimeout(R);for(let e of[C,E,D])e.geometry.dispose(),e.material.dispose();b.tSite.value?.dispose(),g.dispose(),s.dispose(),s.forceContextLoss(),c.remove(),n||window.setTimeout(()=>_.dispose(),S.soundSeconds*M),K===U&&(K=null),ce()}},W=e=>{O||(O=e,g.burst(e));let t=(e-O)/M;if(b.uTime.value=t,b.uGlitch.value=H(e,t),g.update(e,b.uGlitch.value,e<F+S.errorStopAfterFall*M),E.material.uniforms.uTime.value=t,j===N.falling&&e>=F){let t=(e-F)/M*S.fallSpeed;if(b.uFallTime.value=t,D.material.uniforms.uTime.value=t,t>A){U.dispose();return}}s.render(d,u),L=requestAnimationFrame(W)};K=U,_.unlock(),Ie(s.extensions.has(le)?s.compileAsync(d,u).catch(()=>null):Promise.resolve(),S.compileWaitSeconds).then(()=>{j!==N.done&&(v.crack(),L=requestAnimationFrame(W))});let G=new Promise(e=>{window.setTimeout(e,S.crackSeconds*S.coverAfterCrack*M)}),q=Ie(Fe(r,a)??Pe(r,a),S.captureTimeoutSeconds);return Promise.all([q,G]).then(([e])=>V(e)),window.setTimeout(()=>K===U&&U.dispose(),S.giveUpSeconds*M),U}function ze(){return s(()=>import(`./dist-DUb8gwR2.js`),[])}function Be(){let e=window.innerWidth,t=window.innerHeight;$={width:e,height:t,at:performance.now(),shot:Pe(e,t)}}function Ve(){return K?K.release():Promise.resolve()}export{Re as breakSite,Be as prepareSiteBreak,Ve as releaseSiteBreak,ze as warmSiteBreak};