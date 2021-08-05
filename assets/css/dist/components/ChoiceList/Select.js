"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_react=require("react"),_react2=_interopRequireDefault(_react),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_lodash=require("lodash.uniqueid"),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}var Select=function Select(props){var children=props.children,className=props.className,id=props.id,inversed=props.inversed,size=props.size,selectProps=_objectWithoutProperties(props,["children","className","id","inversed","size"]),classes=(0,_classnames2.default)("ds-c-field",{"ds-c-field--inverse":inversed},className,size&&"ds-c-field--"+size);return id||(id=(0,_lodash2.default)("select_"+selectProps.name+"_")),_react2.default.createElement("select",_extends({className:classes,id:id},selectProps),children)};exports.Select=Select,Select.propTypes={children:_propTypes2.default.node.isRequired,className:_propTypes2.default.string,defaultValue:_propTypes2.default.string,disabled:_propTypes2.default.bool,id:_propTypes2.default.string,inversed:_propTypes2.default.bool,multiple:function multiple(props,propName,componentName){if(props[propName])return new Error("'"+propName+"' supplied to '"+componentName+"'. [A11Y]: Users often don’t understand how to select multiple items from dropdowns. Use checkboxes instead.")},name:_propTypes2.default.string.isRequired,onBlur:_propTypes2.default.func,onChange:_propTypes2.default.func,size:_propTypes2.default.oneOf(["small","medium"]),value:_propTypes2.default.string},exports.default=Select;