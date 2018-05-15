'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _=require('.');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({anchors:{borderTopWidth:1,borderTopColor:'#f6f7f8',backgroundColor:'#e4e7e9',flexDirection:'row',justifyContent:'space-between'},anchor:{flex:1,paddingTop:12.5,paddingBottom:12.5,paddingLeft:18,paddingRight:18,overflow:'hidden'},anchorBar:{position:'absolute',bottom:-2,left:0,right:0,height:2},anchorBarSelected:{bottom:0}});var Anchors=function(_React$PureComponent){(0,_inherits3.default)(Anchors,_React$PureComponent);function Anchors(props){(0,_classCallCheck3.default)(this,Anchors);var _this=(0,_possibleConstructorReturn3.default)(this,(Anchors.__proto__||(0,_objectGetPrototypeOf2.default)(Anchors)).call(this,props));_this.onAnchorsScrollViewLayout=function(event){_this.clientWidth=event.nativeEvent.layout.width;};_this.onAnchorsScrollViewContentSizeChange=function(contentWidth){_this.scrollWidth=contentWidth;};_this.onAnchorLayout=function(index,event){var categories=_this.props.categories;var _event$nativeEvent$la=event.nativeEvent.layout;var left=_event$nativeEvent$la.x;var width=_event$nativeEvent$la.width;var category=categories[index];_this.anchorsOffset[category.name]=left;_this.anchorsWidth[category.name]=width;};var defaultCategory=props.categories.filter(function(category){return category.first;})[0];_this.data=props.data;_this.state={selected:defaultCategory.name};_this.setScrollViewRef=_this.setScrollViewRef.bind(_this);return _this;}(0,_createClass3.default)(Anchors,[{key:'componentDidMount',value:function componentDidMount(){this.anchorsOffset={};this.anchorsWidth={};}},{key:'onSelectAnchor',value:function onSelectAnchor(categoryName){var _this2=this;this.setState({selected:categoryName},function(){var selected=_this2.state.selected;var contentOffset=0;if(_this2.clientWidth&&_this2.scrollWidth){var anchorOffset=_this2.anchorsOffset[selected];var anchorWidth=_this2.anchorsWidth[selected];var anchorHalfWidth=anchorWidth/2;var scrollCenter=_this2.scrollWidth/2;var clientCenter=_this2.clientWidth/2;var scrollStart=clientCenter-anchorHalfWidth;if(anchorOffset>scrollStart){contentOffset=anchorOffset-scrollStart;}}_this2.scrollView.scrollTo({x:contentOffset,animated:true});});}},{key:'handlePress',value:function handlePress(index){var _props=this.props;var categories=_props.categories;var onAnchorPress=_props.onAnchorPress;onAnchorPress(categories[index],index);}},{key:'setScrollViewRef',value:function setScrollViewRef(c){this.scrollView=c;}},{key:'render',value:function render(){var _this3=this;var _props2=this.props;var categories=_props2.categories;var onAnchorPress=_props2.onAnchorPress;var color=_props2.color;var i18n=_props2.i18n;var emojiProps=_props2.emojiProps;var categoryEmojis=_props2.categoryEmojis;var selected=this.state.selected;return _react2.default.createElement(_reactNative.ScrollView,{ref:this.setScrollViewRef,horizontal:true,showsHorizontalScrollIndicator:false,keyboardShouldPersistTaps:'handled',onLayout:this.onAnchorsScrollViewLayout,onContentSizeChange:this.onAnchorsScrollViewContentSizeChange},_react2.default.createElement(_reactNative.View,{style:styles.anchors},categories.map(function(category,i){var id=category.id;var name=category.name;var anchor=category.anchor;var isSelected=name==selected;if(anchor===false){return null;}return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,{key:id,'data-index':i,onPress:_this3.handlePress.bind(_this3,i),onLayout:_this3.onAnchorLayout.bind(_this3,i)},_react2.default.createElement(_reactNative.View,{style:[styles.anchor,isSelected?styles.anchorSelected:null]},_react2.default.createElement(_.NimbleEmoji,(0,_extends3.default)({data:_this3.data},emojiProps,{emoji:categoryEmojis[id],onPress:null,onLongPress:null})),_react2.default.createElement(_reactNative.View,{style:[styles.anchorBar,isSelected?styles.anchorBarSelected:null,{backgroundColor:color}]})));})));}}]);return Anchors;}(_react2.default.PureComponent);Anchors.defaultProps={categories:[],onAnchorPress:function onAnchorPress(){}};exports.default=Anchors;