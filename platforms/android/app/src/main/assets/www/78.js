(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/jsgmefly.entry.js ***!
  \***********************************************************************/
/*! exports provided: IonAlert, IonAlertController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlertController", function() { return AlertController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-2994e275.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2994e275.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function iosEnterAnimation(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var a=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o);return Promise.resolve(a)}function iosLeaveAnimation(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9);var a=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o);return Promise.resolve(a)}function mdEnterAnimation(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;return o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.5),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o))}function mdLeaveAnimation(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var o=new e;return o.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.5,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(o))}var Alert=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.buttonsChanged=function(){this.processedButtons=this.buttons.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,n=new Set(t.map(function(e){return e.type}));n.has("checkbox")&&n.has("radio")&&console.warn("Alert cannot mix input types: "+Array.from(n.values()).join("/")+". Please see alert docs for more info."),this.inputType=n.values().next().value,this.processedInputs=t.map(function(t,n){return{type:t.type||"text",name:t.name||""+n,placeholder:t.placeholder||"",value:t.value||"",label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-"+e.overlayIndex+"-"+n,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.componentDidLoad=function(){this.ionAlertDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionAlertDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["a"])},e.prototype.dispatchCancelHandler=function(e){if(Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["d"])(e.detail.role)){var t=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(t)}},e.prototype.present=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this,"alertEnter",iosEnterAnimation,mdEnterAnimation)},e.prototype.dismiss=function(e,t){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this,e,t,"alertLeave",iosLeaveAnimation,mdLeaveAnimation)},e.prototype.onDidDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionAlertDidDismiss")},e.prototype.onWillDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionAlertWillDismiss")},e.prototype.rbClick=function(e){for(var t=0,n=this.processedInputs;t<n.length;t++){var r=n[t];r.checked=r===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var t=e.role,n=this.getValues();if(Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t))return this.dismiss({values:n},t);var r=this.callButtonHandler(e,n);return!1!==r?this.dismiss(Object.assign({values:n},r),e.role):Promise.resolve(!1)},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var n=e.handler(t);if(!1===n)return!1;if("object"==typeof n)return n}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!!e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-checkbox-group","aria-labelledby":e},n.map(function(e){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":e.checked?"true":null,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-button-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-checkbox-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-checkbox-inner"})),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect",null))}))},e.prototype.renderRadio=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},n.map(function(e){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":e.checked?"true":null,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-button-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-radio-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-radio-inner"})),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-radio-label"},e.label)),"md"===t.mode&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect",null))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-input-wrapper"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){return{role:"alertdialog",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass),{"alert-translucent":this.translucent})}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons;return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(function(t){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{type:"button","ion-activatable":!0,class:buttonClass(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span",{class:"alert-button-inner"},t.text))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayIndex+"-hdr",n="alert-"+this.overlayIndex+"-sub-hdr",r="alert-"+this.overlayIndex+"-msg";return void 0!==this.header?e=t:void 0!==this.subHeader&&(e=n),[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop",{tappable:this.backdropDismiss}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-wrapper"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"alert-head"},this.header&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("h2",{id:n,class:"alert-sub-title"},this.subHeader)),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{id:r,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-alert-md-h{--min-width:250px;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.alert-top.sc-ion-alert-md-h{padding-top:50px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin:0;padding:0}.alert-sub-title.sc-ion-alert-md{margin:5px 0 0;padding:0;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding:10px 0;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button-inner.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable.sc-ion-alert-md{margin:0;padding:0;width:100%;border:0;background:0 0;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-button.sc-ion-alert-md:active, .alert-button.sc-ion-alert-md:focus, .alert-checkbox.sc-ion-alert-md:active, .alert-checkbox.sc-ion-alert-md:focus, .alert-input.sc-ion-alert-md:active, .alert-input.sc-ion-alert-md:focus, .alert-radio.sc-ion-alert-md:active, .alert-radio.sc-ion-alert-md:focus{outline:0}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, #fafafa);--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:2px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.alert-head.sc-ion-alert-md{padding:20px 23px 15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color,#000);font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding:0 24px 24px;color:var(--ion-text-color-step-450,#737373)}.alert-message.sc-ion-alert-md{max-height:240px;font-size:15px}.alert-message.sc-ion-alert-md:empty{padding:0}.alert-input.sc-ion-alert-md{margin:5px 0;border-bottom:1px solid var(--ion-background-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-text-color,#999);font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-background-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-background-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:44px;contain:strict;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding:13px 26px 13px 52px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-text-color-step-450,#737373)}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-radio-label.sc-ion-alert-md{color:var(--ion-text-color-step-150,#262626)}[aria-checked=true].sc-ion-alert-md   .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.alert-checkbox-label.sc-ion-alert-md{padding:13px 26px 13px 53px;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--ion-text-color-step-150,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-text-color-step-450,#737373);contain:strict}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0 2px 2px 0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}.alert-button-group.sc-ion-alert-md{padding:5px 12px 7px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;margin:0 8px 0 0;padding:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button.activated.sc-ion-alert-md{background-color:var(--ion-background-color-step-400,#999)}.alert-button-inner.sc-ion-alert-md{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function buttonClass(e){return Object.assign({"alert-button":!0},Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.cssClass))}var AlertController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,n){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc,e,t,"ion-alert",n)},e.prototype.getTop=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return[2,Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc,"ion-alert")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=78.js.map