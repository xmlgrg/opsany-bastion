(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9585a008"],{"23ba":function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return r})),s.d(e,"e",(function(){return d}));var a=s("b775"),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential-group/",method:"get",params:t})},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential-group/",method:"post",data:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential-group/",method:"put",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential-group/",method:"delete",data:t})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"group-credential/",method:"delete",data:t})}},"6fab":function(t,e,s){},a011:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"passwordDetails_main"},[s("content-header",{ref:"contentHeader"},[s("a-button",{attrs:{slot:"right",icon:"arrow-left",type:"primary"},on:{click:function(e){return t.$router.go(-1)}},slot:"right"},[t._v("返回")])],1),s("div",{staticClass:"content"},[s("a-card",{staticClass:"infomation",attrs:{title:"基础信息"}},[s("p",[t._v("分组名称："+t._s(t.groupInfo.name))]),s("p",[t._v("描述："+t._s(t.groupInfo.description||"--"))])]),s("a-tabs",{attrs:{type:"card"},on:{change:t.tabChange}},[s("a-tab-pane",{key:"password",attrs:{tab:"密码凭证"}}),s("a-tab-pane",{key:"ssh_key",attrs:{tab:"SSH密钥"}}),t.$store.state.btnAuth.btnAuth.bastion_credential_group_credential_create?s("a-button",{attrs:{slot:"tabBarExtraContent",type:"primary"},on:{click:function(e){return t.$refs.AddVoucher.show(t.groupInfo)}},slot:"tabBarExtraContent"},[t._v("添加凭证")]):t._e()],1),s("a-table",{staticStyle:{padding:"20px"},attrs:{columns:t.columns,"data-source":t.tableData},scopedSlots:t._u([{key:"login_type",fn:function(e){return[t._v(" "+t._s("auto"==e?"自动登录":"手动登录")+" ")]}},{key:"description",fn:function(e){return[t._v(" "+t._s(e||"--")+" ")]}},{key:"action",fn:function(e,a){return[t.$store.state.btnAuth.btnAuth.bastion_credential_group_credential_delete?s("a",{on:{click:function(e){return t.remove(a)}}},[t._v("移除")]):t._e()]}}])})],1),s("AddVoucher",{ref:"AddVoucher",on:{father:t.getGroupData}})],1)},n=[],i=(s("d81d"),s("b0c0"),s("23ba")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-modal",{attrs:{confirmLoading:t.btnLoading,width:"900px",title:"添加凭据"},on:{ok:t.onSubmit,cancel:t.onClose},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.credentialTypeChange},model:{value:t.credential_type,callback:function(e){t.credential_type=e},expression:"credential_type"}},[s("a-radio-button",{attrs:{value:"password"}},[t._v(" 密码凭证 ")]),s("a-radio-button",{attrs:{value:"ssh"}},[t._v(" SSH密钥 ")])],1),s("a-transfer",{staticStyle:{margin:"20px 0 0 0"},attrs:{operations:t.operations,titles:t.titles,"list-style":t.listStyle,dataSource:t.mockData,targetKeys:t.targetKeys,"show-search":"",render:function(t){return t.title}},on:{change:t.handleChange}})],1)],1)},r=[],d=(s("d3b7"),s("cb20")),l={data:function(){return{visible:!1,credential_type:"password",mockData:[],targetKeys:[],allpasswordList:[],passwordList:[],selectedpasswordList:[],allsshList:[],sshList:[],selectedsshList:[],listStyle:{width:"330px",height:"420px"},titles:[],titles1:["可添加的密码凭据","已选择的密码凭据"],titles2:["可添加的SSH密钥","已选择的SSH密钥"],operations:["加入右侧","加入左侧"],btnLoading:!1}},mounted:function(){},methods:{show:function(t){this.activeGroup=t,this.visible=!0,this.getAllCredential(),this.titles=this.titles1;var e=[],s=[];t.credential.password_credential.map((function(t){e.push(t.id+"")})),this.selectedpasswordList=e,t.credential.ssh_credential.map((function(t){s.push(t.id+"")})),this.selectedsshList=s,this.targetKeys=this.selectedpasswordList},credentialTypeChange:function(t){"password"==t.target.value?(this.mockData=this.passwordList,this.selectedsshList=this.targetKeys,this.targetKeys=this.selectedpasswordList,this.titles=this.titles1):(this.mockData=this.sshList,this.selectedpasswordList=this.targetKeys,this.targetKeys=this.selectedsshList,this.titles=this.titles2)},handleChange:function(t,e,s){this.targetKeys=t},getAllCredential:function(){var t=this;Object(d["d"])({all_data:"1",credential_type:"password"}).then((function(e){if(200==e.code&&e.data){var s=[];e.data.map((function(t){s.push({key:t.id+"",title:t.name})})),t.allpasswordList=s,t.passwordList=t.allpasswordList,t.mockData=t.passwordList}})),Object(d["d"])({all_data:"1",credential_type:"ssh_key"}).then((function(e){if(200==e.code&&e.data){var s=[];e.data.map((function(t){s.push({key:t.id+"",title:t.name})})),t.allsshList=s,t.sshList=t.allsshList}}))},onSubmit:function(){var t=this;this.btnLoading=!0;var e=this.activeGroup;"password"==this.credential_type?this.selectedpasswordList=this.targetKeys:this.selectedsshList=this.targetKeys,e.credential_password_list=this.selectedpasswordList,e.credential_ssh_list=this.selectedsshList,e.id=this.activeGroup.id,Object(i["c"])(e).then((function(e){200==e.code&&(t.$message.success(e.message),t.onClose())})).finally((function(){t.btnLoading=!1}))},onClose:function(){this.visible=!1,this.targetKeys=[],this.$emit("father"),this.selectedpasswordList=[],this.selectedsshList=[]}}},c=l,u=s("2877"),h=Object(u["a"])(c,o,r,!1,null,"1bfa3382",null),p=h.exports,f={data:function(){return{tableData:[],columns:[],columns1:[{title:"凭证名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"资源账户",dataIndex:"login_name",ellipsis:!0},{title:"登录方式",dataIndex:"login_type",ellipsis:!0,scopedSlots:{customRender:"login_type"}},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",ellipsis:!0,scopedSlots:{customRender:"action"},width:100}],columns2:[{title:"凭证名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"资源账户",dataIndex:"login_name",ellipsis:!0},{title:"登录方式",dataIndex:"login_type",ellipsis:!0,scopedSlots:{customRender:"login_type"}},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",scopedSlots:{customRender:"action"},width:100}],groupInfo:{},hidden:!0}},mounted:function(){this.getGroupData()},methods:{remove:function(t){var e=this;this.$confirm({title:"确认移除该凭据吗？",onOk:function(){Object(i["e"])({credential:t.id,credential_group:e.$route.query.id}).then((function(t){200==t.code&&(e.$message.success(t.message),e.getGroupData())}))}})},tabChange:function(t){"password"==t?(this.columns=this.columns1,this.tableData=this.passwordTableData):(this.columns=this.columns2,this.tableData=this.sshTableData)},getGroupData:function(){var t=this;Object(i["d"])({id:this.$route.query.id}).then((function(e){e.data&&e.data.credential&&(e.data.credential.password_credential.map((function(t){t.key=t.id})),e.data.credential.ssh_credential.map((function(t){t.key=t.id})),t.passwordTableData=e.data.credential.password_credential,t.sshTableData=e.data.credential.ssh_credential,t.tableData=t.passwordTableData,t.$refs.contentHeader.mainTitle1=e.data.name),t.columns=t.columns1,t.groupInfo=e.data}))}},components:{AddVoucher:p}},b=f,m=(s("ebf5"),Object(u["a"])(b,a,n,!1,null,"49bbe50d",null));e["default"]=m.exports},cb20:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return r}));var a=s("b775"),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"get",params:t})},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"post",data:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"put",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"delete",data:t})}},ebf5:function(t,e,s){"use strict";var a=s("6fab"),n=s.n(a);n.a}}]);