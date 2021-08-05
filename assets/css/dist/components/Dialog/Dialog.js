"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Dialog=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_reactAriaModal=require("react-aria-modal"),_reactAriaModal2=_interopRequireDefault(_reactAriaModal),_Button=require("../Button/Button"),_Button2=_interopRequireDefault(_Button),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_react=require("react"),_react2=_interopRequireDefault(_react),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}var Dialog=function Dialog(props){var actions=props.actions,actionsClassName=props.actionsClassName,ariaCloseLabel=props.ariaCloseLabel,children=props.children,className=props.className,closeButtonSize=props.closeButtonSize,closeButtonVariation=props.closeButtonVariation,closeText=props.closeText,escapeExitDisabled=props.escapeExitDisabled,headerClassName=props.headerClassName,onExit=props.onExit,size=props.size,title=props.title,modalProps=_objectWithoutProperties(props,["actions","actionsClassName","ariaCloseLabel","children","className","closeButtonSize","closeButtonVariation","closeText","escapeExitDisabled","headerClassName","onExit","size","title"]),dialogClassNames=(0,_classnames2.default)("ds-c-dialog","ds-base",className,size&&"ds-c-dialog--"+size),headerClassNames=(0,_classnames2.default)("ds-c-dialog__header",headerClassName),actionsClassNames=(0,_classnames2.default)("ds-c-dialog__actions",actionsClassName);return _react2.default.createElement(_reactAriaModal2.default,_extends({dialogClass:dialogClassNames,escapeExits:!escapeExitDisabled,includeDefaultStyles:!1,onExit:onExit,titleId:"dialog-title",underlayClass:"ds-c-dialog-wrap"},modalProps),_react2.default.createElement("div",{role:"document"},_react2.default.createElement("header",{className:headerClassNames,role:"banner"},title&&_react2.default.createElement("h1",{className:"ds-h2",id:"dialog-title"},title),_react2.default.createElement(_Button2.default,{"aria-label":ariaCloseLabel,className:"ds-c-dialog__close",onClick:onExit,size:closeButtonSize,variation:closeButtonVariation},closeText)),_react2.default.createElement("main",{role:"main"},children),actions&&_react2.default.createElement("aside",{className:actionsClassNames,role:"complementary"},actions)))};exports.Dialog=Dialog,Dialog.defaultProps={ariaCloseLabel:"Close modal dialog",closeButtonVariation:"transparent",closeText:"Close",escapeExitDisabled:!1,underlayClickExits:!1},Dialog.propTypes={alert:_propTypes2.default.bool,applicationNode:function applicationNode(props,propName,componentName){if(props[propName]&&props[propName]instanceof Element==!1)return new Error("Invalid prop `"+propName+"` supplied to `"+componentName+"`. Expected a DOM node. You may also be interested in the getApplicationNode prop")},actions:_propTypes2.default.node,actionsClassName:_propTypes2.default.string,ariaCloseLabel:_propTypes2.default.string,children:_propTypes2.default.node.isRequired,className:_propTypes2.default.string,closeButtonSize:_propTypes2.default.oneOf(["small","big"]),closeButtonVariation:_propTypes2.default.string,closeText:_propTypes2.default.string,escapeExitDisabled:_propTypes2.default.bool,getApplicationNode:_propTypes2.default.func,headerClassName:_propTypes2.default.string,onExit:_propTypes2.default.func,size:_propTypes2.default.oneOf(["narrow","wide","full"]),title:_propTypes2.default.node,underlayClickExits:_propTypes2.default.bool},exports.default=Dialog;