"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ChoiceList=void 0;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Choice=require("./Choice"),_Choice2=_interopRequireDefault(_Choice),_FormLabel=require("../FormLabel/FormLabel"),_FormLabel2=_interopRequireDefault(_FormLabel),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_react=require("react"),_react2=_interopRequireDefault(_react),_Select=require("./Select"),_Select2=_interopRequireDefault(_Select),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_lodash=require("lodash.uniqueid"),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var ChoiceList=exports.ChoiceList=function(_React$PureComponent){function ChoiceList(){return _classCallCheck(this,ChoiceList),_possibleConstructorReturn(this,(ChoiceList.__proto__||Object.getPrototypeOf(ChoiceList)).apply(this,arguments))}return _inherits(ChoiceList,_react2.default.PureComponent),_createClass(ChoiceList,[{key:"field",value:function field(){var _this2=this,type=this.type(),ChoiceComponent="select"===type?"option":_Choice2.default,selectProps={},choices=this.props.choices.map((function(choice){var checked=choice.checked,defaultChecked=choice.defaultChecked,label=choice.label,props=_objectWithoutProperties(choice,["checked","defaultChecked","label"]);return"select"===type?(checked&&(selectProps.value=props.value),defaultChecked&&(selectProps.defaultValue=props.value)):(props.checked=checked,props.defaultChecked=defaultChecked,props.disabled=props.disabled||_this2.props.disabled,props.inversed=_this2.props.inversed,props.name=_this2.props.name,props.onBlur=_this2.props.onBlur,props.onChange=_this2.props.onChange,props.type=type),_react2.default.createElement(ChoiceComponent,_extends({key:choice.value},props),label)}));return"select"===type?this.select(selectProps,choices):choices}},{key:"id",value:function id(){if("select"===this.type())return this._id||(this._id=(0,_lodash2.default)("select_"+this.props.name+"_")),this._id}},{key:"select",value:function select(selectProps,options){var classes=this.props.size&&"ds-c-field--"+this.props.size;return _react2.default.createElement(_Select2.default,_extends({disabled:this.props.disabled,id:this.id(),inversed:this.props.inversed,name:this.props.name,onBlur:this.props.onBlur,onChange:this.props.onChange,className:classes},selectProps),options)}},{key:"type",value:function type(){return this.props.type?this.props.type:this.props.multiple||1===this.props.choices.length?"checkbox":this.props.choices.length>7?"select":"radio"}},{key:"render",value:function render(){var type=this.type(),classes=(0,_classnames2.default)({"ds-c-fieldset":"select"!==type},this.props.className),RootComponent="select"===type?"div":"fieldset",FormLabelComponent="select"===type?"label":"legend";return _react2.default.createElement(RootComponent,{className:classes||null},_react2.default.createElement(_FormLabel2.default,{className:this.props.labelClassName,component:FormLabelComponent,errorMessage:this.props.errorMessage,fieldId:this.id(),hint:this.props.hint,requirementLabel:this.props.requirementLabel,inversed:this.props.inversed},this.props.label),this.field())}}]),ChoiceList}();ChoiceList.propTypes={choices:_propTypes2.default.arrayOf(_propTypes2.default.shape({checked:_Choice2.default.propTypes.checked,defaultChecked:_Choice2.default.propTypes.defaultChecked,disabled:_Choice2.default.propTypes.disabled,hint:_Choice2.default.propTypes.hint,label:_Choice2.default.propTypes.children,requirementLabel:_Choice2.default.propTypes.requirementLabel,value:_Choice2.default.propTypes.value})).isRequired,className:_propTypes2.default.string,disabled:_propTypes2.default.bool,errorMessage:_propTypes2.default.node,hint:_propTypes2.default.node,requirementLabel:_propTypes2.default.node,inversed:_propTypes2.default.bool,label:_propTypes2.default.node.isRequired,labelClassName:_propTypes2.default.string,multiple:_propTypes2.default.bool,name:_propTypes2.default.string.isRequired,onBlur:_propTypes2.default.func,onChange:_propTypes2.default.func,size:_propTypes2.default.oneOf(["small","medium"]),type:_propTypes2.default.oneOf(["checkbox","radio","select"])},exports.default=ChoiceList;