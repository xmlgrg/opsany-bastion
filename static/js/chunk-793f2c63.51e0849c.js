(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-793f2c63"],{"4bbf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history_main"},[a("ContentHeader",[a("div",{attrs:{slot:"docs"},slot:"docs"},[t._v(" 所有堡垒机登录的会话，审计查看可以播放会话的执行详情，用于做安全审核。 ")])]),a("a-card",[a("div",{staticClass:"search_box"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入关键字搜索",allowClear:""},on:{search:t.searchTable},model:{value:t.pagination.search_data,callback:function(e){t.$set(t.pagination,"search_data",e)},expression:"pagination.search_data"}},[a("a-select",{staticStyle:{width:"100px"},attrs:{slot:"addonBefore"},slot:"addonBefore",model:{value:t.pagination.search_type,callback:function(e){t.$set(t.pagination,"search_type",e)},expression:"pagination.search_type"}},t._l(t.searchList,(function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.name))])})),1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{icon:"reload"},on:{click:t.refresh}},[t._v("刷新")])],1),a("a-table",{attrs:{loading:t.tableLoading,pagination:t.pagination,columns:t.columns,"data-source":t.tableData},on:{change:t.onChange},scopedSlots:t._u([{key:"action",fn:function(e,n){return[a("a",{staticStyle:{margin:"0 10px 0 0"},on:{click:function(e){return t.preview(n)}}},[t._v("播放历史")]),a("a",{attrs:{disabled:"Linux"!=n.system_type},on:{click:function(e){return t.$router.push({path:"/auditManagement/historical/historicalDetails",query:{id:n.id}})}}},[t._v("查看详情")])]}}])})],1),a("WindowsPlayer",{ref:"WindowsPlayer"}),a("PlayerModel",{ref:"PlayerModel"})],1)},i=[],o=(a("d81d"),a("d3b7"),a("0977")),s=a("b899"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{title:"审计查看",visible:t.visible,maskClosable:!1,"confirm-loading":t.confirmLoading,width:"100%",destroyOnClose:"","dialog-style":{top:"0"},zIndex:1e3},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("div",{attrs:{id:"player_box"},on:{click:t.start,mousemove:t.mousemove}},[a("a-icon",{ref:"icons",staticClass:"icons",attrs:{type:t.iconType,id:"icons"}})],1)])],1)},c=[],l=a("a9c6"),d=a.n(l),u={data:function(){return{visible:!1,confirmLoading:!1,recording:{},iconType:"play-circle",timer:null}},methods:{show:function(t){var e=this;this.visible=!0;var a=Object(s["g"])(t);this.$nextTick((function(){var t=document.getElementById("player_box"),n=new d.a.StaticHTTPTunnel(a,!0),i=new d.a.SessionRecording(n);e.recording=i;var o=i.getDisplay(),s=o.getElement();t.appendChild(s),i.connect(),e.$nextTick((function(){s.style.margin="0 auto"})),i.onplay=function(){e.iconType="pause-circle"},i.onpause=function(){e.iconType="play-circle"}}))},start:function(){this.recording.isPlaying()?this.recording.pause():this.recording.play()},mousemove:function(){var t=this;clearTimeout(this.timer),this.$nextTick((function(){var e=t.$refs.icons.$el;e.style.opacity=.5,t.timer=setTimeout((function(){e.style.opacity=0}),2e3)}))},handleOk:function(){this.visible=!1},handleCancel:function(){this.visible=!1}}},h=u,p=(a("e5c3"),a("2877")),g=Object(p["a"])(h,r,c,!1,null,"68d08ea0",null),m=g.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{title:"审计查看",visible:t.visible,maskClosable:!1,"confirm-loading":t.confirmLoading,width:"960px"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("div",{attrs:{id:"player_box"},domProps:{innerHTML:t._s(t.asciinemaPlayerHtml)}})])],1)},y=[],v={data:function(){return{visible:!1,confirmLoading:!1,asciinemaPlayerHtml:""}},methods:{show:function(t){var e=this,a=s["a"]+"session-log/terminal/"+"".concat(t)+"/";this.visible=!0,this.asciinemaPlayerHtml="",this.$nextTick((function(){var t='<asciinema-player id="asciinemaPlayerHtml" cols="132"  src="'.concat(a,'"></asciinema-player>');e.asciinemaPlayerHtml=t}))},handleOk:function(){this.visible=!1},handleCancel:function(){this.visible=!1;var t=document.getElementById("player_box"),e=document.getElementById("asciinemaPlayerHtml");e&&t.removeChild(e)}},mounted:function(){}},b=v,_=Object(p["a"])(b,f,y,!1,null,"ab849abe",null),w=_.exports,k={data:function(){return{tableData:[],pagination:{total:0,current:1,pageSize:10,showTotal:function(t){return"共有 ".concat(t," 条数据")},search_type:"user",search_data:void 0,showSizeChanger:!0,showQuickJumper:!0},tableLoading:!1,columns:[{title:"登录用户",dataIndex:"user"},{title:"主机",dataIndex:"host_name"},{title:"IP地址",dataIndex:"host_address",width:"170px"},{title:"系统用户",dataIndex:"login_name"},{title:"开始时间",dataIndex:"start_time"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],searchList:[{name:"登录用户",key:"user"},{name:"主机",key:"server"}]}},mounted:function(){this.getSessionLogData()},methods:{preview:function(t){if("Windows"==t.system_type)return this.$refs.WindowsPlayer.show(t.log_name);var e=t.log_name;this.$refs.PlayerModel.show(e)},searchTable:function(t){this.search_data=t,this.pagination.current=1,this.getSessionLogData()},getSessionLogData:function(){var t=this;this.tableLoading=!0;var e={current:this.pagination.current,pageSize:this.pagination.pageSize,finished:1};this.pagination.search_data&&("server"==this.pagination.search_type?e.search_type="host__host_name":e.search_type=this.pagination.search_type,e.search_data=this.pagination.search_data),Object(s["f"])(e).then((function(e){200==e.code&&e.data?(t.pagination.total=e.data.total,t.pagination.current=e.data.current,t.pagination.pageSize=e.data.pageSize,e.data.data.map((function(t){t.key=t.id})),t.tableData=e.data.data):t.tableData=[]})).finally((function(){t.tableLoading=!1}))},refresh:function(){this.getSessionLogData()},onChange:function(t){this.pagination.total=t.total,this.pagination.current=t.current,this.pagination.pageSize=t.pageSize,this.getSessionLogData()}},components:{ContentHeader:o["a"],WindowsPlayer:m,PlayerModel:w}},x=k,S=(a("8d56"),Object(p["a"])(x,n,i,!1,null,"a814a5be",null));e["default"]=S.exports},"8d56":function(t,e,a){"use strict";var n=a("d396"),i=a.n(n);i.a},b899:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return d}));var n=a("b775"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"session-log/",method:"get",params:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"session-log/",method:"delete",data:t})},s=window.location.origin+window.API_ROOT+"api/bastion/v0_1/",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s+"session-log/guacamole/"+"".concat(t,"/")},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"command-log/",method:"get",params:t})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"operation-log/",method:"get",params:t})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"session-command-history/",method:"get",params:t})}},c1a6:function(t,e,a){},d396:function(t,e,a){},e5c3:function(t,e,a){"use strict";var n=a("c1a6"),i=a.n(n);i.a}}]);