(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12d51ddd"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function a(t,e,n,a,i,o,s){try{var r=t[o](s),c=r.value}catch(u){return void n(u)}r.done?e(c):Promise.resolve(c).then(a,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){a(s,i,o,r,c,"next",t)}function c(t){a(s,i,o,r,c,"throw",t)}r(void 0)}))}}},"2de9":function(t,e,n){},4246:function(t,e,n){"use strict";n.d(e,"h",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return r})),n.d(e,"i",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return f}));var a=n("b775"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host/",method:"get",params:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host/",method:"post",data:t})},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host/",method:"put",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host/",method:"delete",data:t})},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host-group/",method:"get",params:t})},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host-group/",method:"post",data:t})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host-group/",method:"put",data:t})},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host-group/",method:"delete",data:t})},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"host-credential/",method:"delete",data:t})},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"auth-host/",method:"get",params:t})},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"check-import/",method:"post",data:t})}},"6f7c":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");var a=n("a18c"),i=n("b775"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["b"])({url:"authentication/",method:"get",params:t})},s=function(){a["a"].push({name:"noAuth"})},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n,a){setTimeout((function(){t.$loading.show()}),0),o({action_id:e}).then((function(t){return t.data||s(),n(t.data)})).catch((function(){return s(),n(!1)})).finally((function(){setTimeout((function(){t.$loading.hide()}),0)}))}))}},"931c":function(t,e,n){},cb20:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r}));var a=n("b775"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"get",params:t})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"post",data:t})},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"put",data:t})},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])({url:"credential/",method:"delete",data:t})}},d461:function(t,e,n){"use strict";var a=n("931c"),i=n.n(a);i.a},e05b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"password_main"},[n("ContentHeader",[n("div",{attrs:{slot:"docs"},slot:"docs"},[t._v(" 密码凭证支持自动登录和手工登录，手工登录在登录时，需要用户手工输入密码。一个密码凭证支持关联多个主机资源和应用资源。 ")])]),n("a-card",[n("div",{staticClass:"search_box"},[n("a-input-search",{staticStyle:{width:"200px"},attrs:{allowClear:"",placeholder:"请输入搜索名称"},on:{search:t.onSearch}}),t.$store.state.btnAuth.btnAuth.bastion_password_create?n("a-button",{staticStyle:{float:"right"},attrs:{icon:"plus",type:"primary"},on:{click:function(e){return t.$refs.AddPassword.show()}}},[t._v("新建")]):t._e()],1),n("a-table",{attrs:{loading:t.tableLoading,pagination:t.pagination,"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,"data-source":t.tableData},on:{change:t.onChange},scopedSlots:t._u([{key:"name",fn:function(e,a){return[t.$store.state.btnAuth.btnAuth.bastion_password_details?n("a",{attrs:{title:e},on:{click:function(e){return t.$router.push({path:"/voucher/password/passwordDetails",query:{id:a.id}})}}},[t._v(t._s(e))]):n("span",{attrs:{title:e}},[t._v(t._s(e))])]}},{key:"login_type",fn:function(e){return[t._v(" "+t._s("auto"==e?"自动登录":"手动登录")+" ")]}},{key:"relation",fn:function(e,a){return[t.$store.state.btnAuth.btnAuth.bastion_password_details?n("a",{on:{click:function(e){return t.$router.push({path:"/voucher/password/passwordDetails",query:{id:a.id}})}}},[t._v(t._s(e))]):n("span",[t._v(t._s(e))])]}},{key:"description",fn:function(e){return[t._v(" "+t._s(e||"--")+" ")]}},{key:"action",fn:function(e,a){return[t.$store.state.btnAuth.btnAuth.bastion_password_details?n("a-button",{attrs:{size:"small",type:"link"},on:{click:function(e){return t.$router.push({path:"/voucher/password/passwordDetails",query:{id:a.id}})}}},[t._v("查看")]):t._e(),t.$store.state.btnAuth.btnAuth.bastion_password_update?n("a-button",{attrs:{size:"small",type:"link"},on:{click:function(e){return t.$refs.AddPassword.show(a)}}},[t._v("编辑")]):t._e(),t.$store.state.btnAuth.btnAuth.bastion_password_delete?n("a-button",{staticStyle:{color:"#333"},attrs:{size:"small",type:"link"},on:{click:function(e){return t.deletePassword(a)}}},[t._v("删除")]):t._e()]}}])}),t.tableData.length>0?n("a-button",{staticStyle:{float:"left",margin:"-50px 10px 0 0"},attrs:{disabled:0==t.selectedRowKeys.length,icon:"delete"},on:{click:t.batchDelete}},[t._v("批量删除")]):t._e()],1),n("AddPassword",{ref:"AddPassword",on:{father:function(e){return t.getCredentialData()}}})],1)},i=[],o=(n("4de4"),n("d3b7"),n("96cf"),n("1da1")),s=n("0977"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-drawer",{attrs:{"body-style":{paddingBottom:"80px"},width:"980px",title:t.title,placement:"right",visible:t.visible},on:{close:t.onClose}},[n("a-form",{attrs:{form:t.passwordForm,"label-col":{span:2},"wrapper-col":{span:22}}},[n("a-form-item",{attrs:{label:"凭证名称"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入凭证名称"}]}],expression:"['name', { rules: [{ required: true, message: '请输入凭证名称' }] }]"}],attrs:{placeholder:"请输入凭证名称"}})],1),n("a-form-item",{attrs:{label:"登录方式"}},[n("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["login_type",{initialValue:"auto",rules:[{required:!0,message:"请选择登录方式"}]}],expression:"['login_type', { initialValue: 'auto' ,rules: [{ required: true, message: '请选择登录方式' }] }]"}],on:{change:t.loginTypeChange}},[n("a-radio",{attrs:{value:"auto"}},[t._v(" 自动登录 ")]),n("a-radio",{attrs:{value:"hand"}},[t._v(" 手动登录 ")])],1)],1),n("a-form-item",{attrs:{label:"资源账户"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["login_name",{rules:[{required:!0,message:"请输入资源账户"}]}],expression:"['login_name', { rules: [{ required: true , message: '请输入资源账户' }] }]"}],attrs:{placeholder:"请输入资源账户的名称"}})],1),"auto"==t.loginType?[n("a-form-item",{attrs:{label:"密码"}},[n("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["login_password",{rules:[{required:!0,message:"请输入密码"}]}],expression:"['login_password', { rules: [{ required: true, message: '请输入密码' }] }]"}],attrs:{placeholder:"请输入密码"}})],1)]:t._e(),n("a-form-item",{attrs:{label:"描述"}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1},{max:200,message:"最多输入200个汉字或字符"}]}],expression:"['description', { rules: [{ required: false},{max:200,message:'最多输入200个汉字或字符'}] }]"}],attrs:{placeholder:"请输入，最多输入200个汉字或字符"}})],1),n("a-form-item",{attrs:{label:"关联资源"}},[n("a-radio-group",{attrs:{"button-style":"solid"},on:{change:t.resourcesTypeChange},model:{value:t.resources_type,callback:function(e){t.resources_type=e},expression:"resources_type"}},[n("a-radio-button",{attrs:{value:"host"}},[t._v(" 主机资源 ")])],1)],1),n("a-transfer",{staticStyle:{margin:"0 0 0 8.33%"},attrs:{operations:t.operations,titles:t.titles,"list-style":t.listStyle,dataSource:t.mockData,targetKeys:t.targetKeys,"show-search":"",render:function(t){return t.title}},on:{change:t.handleChange}})],2),n("footer",[n("a-button",{on:{click:t.onClose}},[t._v("取消")]),n("a-button",{staticStyle:{margin:"0 0px 0 8px"},attrs:{loading:t.btnLoading,type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},c=[],u=(n("a4d3"),n("e01a"),n("d81d"),n("b0c0"),n("cb20")),l=n("4246"),d={data:function(){return{title:"",visible:!1,passwordForm:this.$form.createForm(this,{name:"passwordForm"}),mockData:[],targetKeys:[],isEdit:!1,btnLoading:!1,loginType:"auto",resources_type:"host",allhostList:[],hostList:[],selectedhostList:[],allappList:[],appList:[],selectedappList:[],listStyle:{width:"360px",height:"420px"},titles:["可选中的主机资源","已选择的主机资源"],operations:["加入右侧","加入左侧"]}},mounted:function(){},methods:{resourcesTypeChange:function(){},getAllHost:function(){var t=this;Object(l["h"])({all_data:1}).then((function(e){if(200==e.code&&e.data){var n=[];e.data.map((function(t){n.push({key:t.id+"",title:t.host_name})})),t.allhostList=n,t.hostList=t.allhostList,t.mockData=t.hostList}}))},loginTypeChange:function(t){this.loginType=t.target.value},show:function(t){if(this.visible=!0,this.getAllHost(),t){this.activePassword=t,this.isEdit=!0,this.title="编辑密码凭证",this.loginType=t.login_type;var e=[];t.host_list.map((function(t){e.push(t.id+"")})),this.selectedhostList=e,this.targetKeys=this.selectedhostList,this.$nextTick((function(){this.passwordForm.setFieldsValue({name:t.name,login_type:t.login_type,login_name:t.login_name,login_password:"******",description:t.description})}))}else this.isEdit=!1,this.title="新建密码凭证",this.loginType="auto"},onClose:function(){this.visible=!1,this.passwordForm.resetFields(),this.$emit("father"),this.targetKeys=[],this.selectedhostList=[],this.selectedappList=[]},handleChange:function(t,e,n){this.targetKeys=t},onSubmit:function(){var t=this;this.passwordForm.validateFields((function(e,n){if(!e){t.btnLoading=!0;var a=n;a.credential_type="password","host"==t.resources_type?t.selectedhostList=t.targetKeys:t.selectedappList=t.targetKeys,a.host_list=t.selectedhostList,t.isEdit?(a.id=t.activePassword.id,Object(u["c"])(a).then((function(e){200==e.code&&(t.$message.success(e.message),t.onClose())})).finally((function(){t.btnLoading=!1}))):Object(u["a"])(a).then((function(e){200==e.code&&(t.$message.success(e.message),t.onClose())})).finally((function(){t.btnLoading=!1}))}}))}}},h=d,p=(n("d461"),n("2877")),f=Object(p["a"])(h,r,c,!1,null,"0de4ef22",null),g=f.exports,m=n("6f7c"),b={data:function(){return{tableData:[],columns:[{title:"凭证名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"资源账户",dataIndex:"login_name",ellipsis:!0},{title:"登录方式",dataIndex:"login_type",ellipsis:!0,scopedSlots:{customRender:"login_type"}},{title:"关联主机",dataIndex:"relation",ellipsis:!0,scopedSlots:{customRender:"relation"}},{title:"描述",dataIndex:"description",ellipsis:!0,scopedSlots:{customRender:"description"}},{title:"操作",scopedSlots:{customRender:"action"},align:"center",width:200}],selectedRowKeys:[],pagination:{total:0,current:1,pageSize:10,showTotal:function(t){return"共有 ".concat(t," 条数据")},search_type:"name",search_data:void 0,showSizeChanger:!0,showQuickJumper:!0},tableLoading:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["a"])(t,"visit-password-voucher");case 2:n=e.sent,n&&t.getCredentialData();case 4:case"end":return e.stop()}}),e)})))()},methods:{onSearch:function(t){this.pagination.search_data=t,this.pagination.current=1,this.getCredentialData()},onChange:function(t){this.pagination.total=t.total,this.pagination.current=t.current,this.pagination.pageSize=t.pageSize,this.getCredentialData()},batchDelete:function(){var t=this;this.$confirm({title:"确认删除吗？",onOk:function(){Object(u["b"])({id_list:t.selectedRowKeys}).then((function(e){200==e.code&&(t.$message.success(e.message),t.getCredentialData(),t.selectedRowKeys=[])}))}})},deletePassword:function(t){var e=this;this.$confirm({title:"确认删除该密码凭证吗？",onOk:function(){Object(u["b"])({id:t.id}).then((function(t){200==t.code&&(e.$message.success(t.message),e.getCredentialData())}))}})},onSelectChange:function(t){this.selectedRowKeys=t},getCredentialData:function(){var t=this;this.tableLoading=!0;var e={current:this.pagination.current,pageSize:this.pagination.pageSize,credential_type:"password"};this.pagination.search_data&&(e.search_type="name",e.search_data=this.pagination.search_data),Object(u["d"])(e).then((function(e){if(200==e.code&&e.data){t.pagination.total=e.data.total,t.pagination.current=e.data.current,t.pagination.pageSize=e.data.pageSize;var n=e.data.data.filter((function(t){return t.key=t.id,t.relation=t.host_list.length,"password"==t.credential_type}));t.tableData=n}else t.tableData=[]})).finally((function(){t.tableLoading=!1}))}},components:{ContentHeader:s["a"],AddPassword:g}},v=b,_=(n("e71b3"),Object(p["a"])(v,a,i,!1,null,"f2a41fb8",null));e["default"]=_.exports},e71b3:function(t,e,n){"use strict";var a=n("2de9"),i=n.n(a);i.a}}]);