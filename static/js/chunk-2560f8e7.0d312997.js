(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2560f8e7"],{4246:function(t,e,s){"use strict";s.d(e,"g",(function(){return a})),s.d(e,"a",(function(){return o})),s.d(e,"e",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"h",(function(){return d})),s.d(e,"b",(function(){return l})),s.d(e,"f",(function(){return c})),s.d(e,"d",(function(){return u})),s.d(e,"j",(function(){return p})),s.d(e,"i",(function(){return h}));var n=s("b775"),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host/",method:"get",params:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host/",method:"post",data:t})},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host/",method:"put",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host/",method:"delete",data:t})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host-group/",method:"get",params:t})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host-group/",method:"post",data:t})},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host-group/",method:"put",data:t})},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host-group/",method:"delete",data:t})},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"host-credential/",method:"delete",data:t})},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])({url:"auth-host/",method:"get",params:t})}},"578c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hostDetails_main"},[s("content-header",{ref:"contentHeader"},[s("a-button",{attrs:{slot:"right",icon:"arrow-left",type:"primary"},on:{click:function(e){return t.$router.go(-1)}},slot:"right"},[t._v("返回")])],1),s("div",{staticClass:"content"},[s("a-card",{staticClass:"infomation",attrs:{title:"基础信息"}},[s("p",{staticClass:"info"},[s("span",[t._v("主机名称："+t._s(t.hostInfo.host_name))]),s("span",[t._v("系统类型："+t._s(t.hostInfo.system_type))]),s("span",[t._v("协议类型："+t._s(t.hostInfo.protocol_type))]),s("span",[t._v("主机地址："+t._s(t.hostInfo.host_address))])]),s("p",{staticClass:"info"},[s("span",[t._v("端口："+t._s(t.hostInfo.port))]),s("span",[t._v("所属分组："+t._s(t.hostInfo.group&&t.hostInfo.group.name))]),s("span",[t._v("创建时间："+t._s(t.hostInfo.create_time))]),s("span")]),s("p",[t._v("描述："+t._s(t.hostInfo.description||"--"))])]),s("a-tabs",{attrs:{type:"card"}},[s("a-tab-pane",{key:"1",attrs:{tab:"关联凭证"}})],1),s("div",{staticClass:"relation"},[s("a-menu",{staticClass:"left",attrs:{selectedKeys:t.selectedKeys,mode:"inline"},on:{select:t.voucherTypeChange}},[s("a-menu-item",{key:"password"},[t._v("密码凭证")]),s("a-menu-item",{key:"ssh"},[t._v("SSH密钥")]),s("a-menu-item",{key:"group"},[t._v("凭证分组")])],1),s("a-table",{staticClass:"right",staticStyle:{padding:"20px"},attrs:{columns:t.columns,"data-source":t.tableData},scopedSlots:t._u([{key:"login_type",fn:function(e){return[t._v(" "+t._s("auto"==e?"自动登录":"手动登录")+" ")]}},{key:"description",fn:function(e){return[t._v(" "+t._s(e||"--")+" ")]}},{key:"action",fn:function(e,n){return[t.$store.state.btnAuth.btnAuth.bastion_host_credential_delete?s("a",{on:{click:function(e){return t.remove(n)}}},[t._v("移除")]):t._e()]}}])})],1)],1)],1)},a=[],o=(s("d81d"),s("4246")),i={data:function(){return{hostInfo:{},tableData:[],columns:[],columns1:[{title:"凭证名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"资源账户",dataIndex:"login_name",ellipsis:!0},{title:"登录方式",dataIndex:"login_type",ellipsis:!0,scopedSlots:{customRender:"login_type"}},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],columns2:[{title:"凭证名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"资源账户",dataIndex:"login_name",ellipsis:!0},{title:"登录方式",dataIndex:"login_type",ellipsis:!0,scopedSlots:{customRender:"login_type"}},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],columns3:[{title:"分组名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"创建时间",dataIndex:"create_time",ellipsis:!0},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],selectedKeys:["password"]}},mounted:function(){this.getHostData(!0)},methods:{remove:function(t){var e=this;this.$confirm({title:"确认移除该凭据吗？",onOk:function(){var s={host:e.$route.query.id};"password"==t.type||"ssh"==t.type?s.credential=t.id:"group"==t.type&&(s.credential_group=t.id),Object(o["j"])(s).then((function(t){200==t.code&&(e.$message.success(t.message),e.getHostData())}))}})},voucherTypeChange:function(t){this.selectedKeys=[t.key],"password"==t.key?(this.columns=this.columns1,this.tableData=this.passwordTableList):"ssh"==t.key?(this.columns=this.columns2,this.tableData=this.sshTableList):"group"==t.key&&(this.columns=this.columns3,this.tableData=this.groupTableList)},getHostData:function(t){var e=this;Object(o["g"])({id:this.$route.query.id}).then((function(s){200==s.code&&s.data&&(e.hostInfo=s.data,e.$refs.contentHeader.mainTitle1=s.data.host_name,s.data.credential.password_credential?(e.passwordTableList=s.data.credential.password_credential,e.passwordTableList.map((function(t){t.key=t.id,t.type="password"}))):e.passwordTableList=[],s.data.credential.ssh_credential?(e.sshTableList=s.data.credential.ssh_credential,e.sshTableList.map((function(t){t.key=t.id,t.type="ssh"}))):e.sshTableList=[],s.data.credential.credential_group?(e.groupTableList=s.data.credential.credential_group,e.groupTableList.map((function(t){t.key=t.id,t.type="group"}))):e.groupTableList=[],t?(e.columns=e.columns1,e.tableData=e.passwordTableList):"password"==e.selectedKeys[0]?e.tableData=e.passwordTableList:"ssh"==e.selectedKeys[0]?e.tableData=e.sshTableList:"group"==e.selectedKeys[0]&&(e.tableData=e.groupTableList))}))}}},r=i,d=(s("6f00"),s("2877")),l=Object(d["a"])(r,n,a,!1,null,"c2af74e4",null);e["default"]=l.exports},"651f":function(t,e,s){},"6f00":function(t,e,s){"use strict";var n=s("651f"),a=s.n(n);a.a}}]);