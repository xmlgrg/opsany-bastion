(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78db90a6"],{3765:function(t,e,a){},"6e2b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("content-header",[a("div",{attrs:{slot:"docs"},slot:"docs"},[t._v(" 通过策略授权将主机和应用资源、用户和用户组、资源和凭证进行关联，设置用户在什么时间，以什么凭证登录指定的主机或者应用。 ")])]),a("a-card",[a("div",{staticClass:"top_search"},[a("div",[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入关键字搜索",allowClear:""},on:{search:t.searchTable},model:{value:t.tableQuery.search_data,callback:function(e){t.$set(t.tableQuery,"search_data",e)},expression:"tableQuery.search_data"}},[a("a-select",{staticStyle:{width:"100px"},attrs:{slot:"addonBefore"},slot:"addonBefore",model:{value:t.tableQuery.search_type,callback:function(e){t.$set(t.tableQuery,"search_type",e)},expression:"tableQuery.search_type"}},t._l(t.searchList,(function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.name))])})),1)],1)],1),a("div",[a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{icon:"reload"},on:{click:t.refresh}},[t._v("刷新")]),t.$store.state.btnAuth.btnAuth.bastion_access_strategy_create?a("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:t.add}},[t._v("新建")]):t._e()],1)]),a("search-box",{staticClass:"search_box",attrs:{visible:t.visible}},[a("a-row",{attrs:{type:"flex",gutter:[36]}},[a("a-col",{attrs:{xxl:8,xl:12,lg:12,md:24,sm:24,xs:24}}),a("a-col",{attrs:{xxl:8,xl:12,lg:12,md:24,sm:24,xs:24}}),a("a-col",{attrs:{xxl:8,xl:12,lg:12,md:24,sm:24,xs:24}}),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[a("a-button",{on:{click:t.refresh}},[t._v("重置")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.searchTable}},[t._v("搜索")])],1)],1)],1),a("a-table",{attrs:{defaultExpandAllRows:!0,loading:t.tableLoading,dataSource:t.tableData,columns:t.columns,pagination:Object.assign({},t.tableQuery,{showSizeChanger:!0,showTotal:function(t){return"共 "+t+" 条数据"},showQuickJumper:!0}),rowKey:function(t){return t.id}},on:{change:t.tableChange},scopedSlots:t._u([{key:"name",fn:function(e,i){return[a("a",{attrs:{title:e,type:"link"},on:{click:function(e){return t.viewDetail(i)}}},[t._v(t._s(e))])]}},{key:"status",fn:function(e,i){return[t.$store.state.btnAuth.btnAuth.bastion_access_strategy_on_off?a("a-switch",{on:{click:function(e){return t.changeStatus(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}}):t._e(),t._v(" "+t._s(e?"开启":"关闭")+" ")]}},{key:"user",fn:function(e,a){return[t._v(" "+t._s(e.user.length)+"/"+t._s(e.user_group.length)+" ")]}},{key:"credential_host",fn:function(e,a){return[t._v(" "+t._s(e.password_credential_host_id.length)+"/"+t._s(e.ssh_credential_host_id.length)+"/"+t._s(e.credential_group.length)+" ")]}},{key:"action",fn:function(e,i){return[a("a-button",{attrs:{type:"link",size:"small"},on:{click:function(e){return t.viewDetail(i)}}},[t._v("查看")]),t.$store.state.btnAuth.btnAuth.bastion_access_strategy_update?a("a-button",{attrs:{type:"link",size:"small"},on:{click:function(e){return t.edit(i)}}},[t._v("编辑")]):t._e(),t.$store.state.btnAuth.btnAuth.bastion_access_strategy_delete?a("a-button",{attrs:{type:"link",size:"small"},on:{click:function(e){return t.del(i)}}},[t._v("删除")]):t._e()]}}])}),a("ControlVisitPolicy",{ref:"ControlVisitPolicy",on:{done:t.getTableData}})],1)],1)},n=[],r=(a("d3b7"),a("96cf"),a("1da1")),s=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-drawer",{attrs:{title:t.id?"编辑访问策略":"新建访问策略",width:920,visible:t.visible,"body-style":{paddingBottom:"80px"}},on:{close:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.infoLoading}},[a("div",{staticStyle:{"margin-bottom":"30px"}},[a("a-steps",{staticStyle:{width:"70%",margin:"0 auto"},attrs:{current:t.activeCurrent},on:{change:t.changeActiceCurrent}},[a("a-step",{attrs:{title:"配置基本信息"}}),a("a-step",{attrs:{title:"关联用户/用户组"}}),a("a-step",{attrs:{title:"关联资源凭证"}})],1)],1),a("Step1",{directives:[{name:"show",rawName:"v-show",value:0==t.activeCurrent,expression:"activeCurrent == 0"}],ref:"Step1",attrs:{strategy:t.strategy}}),a("Step2",{directives:[{name:"show",rawName:"v-show",value:1==t.activeCurrent,expression:"activeCurrent == 1"}],ref:"Step2",attrs:{user:t.user}}),a("Step3",{directives:[{name:"show",rawName:"v-show",value:2==t.activeCurrent,expression:"activeCurrent == 2"}],ref:"Step3",attrs:{credential_host:t.credential_host}})],1),a("div",{staticClass:"bottom_btns"},[a("a-button",{style:{marginRight:"8px"},on:{click:t.handleCancel}},[t._v(" 取消 ")]),1==t.activeCurrent||2==t.activeCurrent?a("a-button",{style:{marginRight:"8px"},on:{click:function(e){t.activeCurrent-=1}}},[t._v(" 上一步 ")]):t._e(),0==t.activeCurrent||1==t.activeCurrent?a("a-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v(" 下一步 ")]):t._e(),2==t.activeCurrent?a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleOk}},[t._v(" 确定 ")]):t._e()],1)],1)],1)},o=[],c=(a("4160"),a("cd3f")),u=a.n(c),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form-model",{ref:"formData",staticStyle:{padding:"10px 0 0 0"},attrs:{layout:"horizontal",model:t.formData,rules:t.formDataRules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-model-item",{attrs:{label:"策略名称",prop:"name"}},[a("a-input",{attrs:{placeholder:"请输入策略名称",disabled:!!t.formData.id},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("a-form-model-item",[a("span",{attrs:{slot:"label"},slot:"label"},[a("span",[t._v("有效期")]),a("a-tooltip",{attrs:{title:"指选择策略生效时间和策略的失效时间"}},[a("a-icon",{staticStyle:{margin:"0 0 0 3px",color:"#666"},attrs:{type:"exclamation-circle"}})],1)],1),a("a-date-picker",{attrs:{allowClear:"",showTime:"",placeholder:"请选择生效时间"},on:{change:function(e,a){return t.changeTime(e,a,"start_time")}},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}}),a("a-date-picker",{staticStyle:{"margin-left":"20px"},attrs:{allowClear:"",showTime:"",placeholder:"请选择失效时间"},on:{change:function(e,a){return t.changeTime(e,a,"end_time")}},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1),a("a-form-model-item",{attrs:{label:"文件传输"}},[a("a-checkbox",{model:{value:t.formData.file_upload,callback:function(e){t.$set(t.formData,"file_upload",e)},expression:"formData.file_upload"}},[t._v(" 上传 ")]),a("a-checkbox",{staticStyle:{"margin-left":"20px"},model:{value:t.formData.file_download,callback:function(e){t.$set(t.formData,"file_download",e)},expression:"formData.file_download"}},[t._v(" 下载 ")])],1),a("a-form-model-item",{attrs:{label:"更多选项"}},[a("a-checkbox",{model:{value:t.formData.file_manager,callback:function(e){t.$set(t.formData,"file_manager",e)},expression:"formData.file_manager"}},[t._v(" 文件管理 ")]),a("a-checkbox",{staticStyle:{"margin-left":"20px"},model:{value:t.formData.copy_tool,callback:function(e){t.$set(t.formData,"copy_tool",e)},expression:"formData.copy_tool"}},[t._v(" 剪贴板 ")])],1),a("a-form-model-item",{staticClass:"time_item"},[a("span",{attrs:{slot:"label"},slot:"label"},[a("span",[t._v("登录时段限制")]),a("a-tooltip",{attrs:{title:"指在策略有效期内选择登录资源的时间段权限"}},[a("a-icon",{staticStyle:{margin:"0 0 0 3px",color:"#666"},attrs:{type:"exclamation-circle"}})],1)],1),a("SelectTime",{ref:"SelectTime",model:{value:t.formData.login_time_limit,callback:function(e){t.$set(t.formData,"login_time_limit",e)},expression:"formData.login_time_limit"}})],1),a("a-form-model-item",{attrs:{label:"IP限制类型"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择限制类型"},on:{change:function(e){t.formData.limit_list=[]}},model:{value:t.formData.ip_limit,callback:function(e){t.$set(t.formData,"ip_limit",e)},expression:"formData.ip_limit"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("无")]),a("a-select-option",{attrs:{value:"2"}},[t._v("黑名单")]),a("a-select-option",{attrs:{value:"3"}},[t._v("白名单")])],1)],1),1!=t.formData.ip_limit?a("a-form-model-item",{attrs:{label:2==t.formData.ip_limit?"黑名单":"白名单",prop:"limit_list"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags","token-separators":[","],placeholder:"请输入IP后按回车键录入"},model:{value:t.formData.limit_list,callback:function(e){t.$set(t.formData,"limit_list",e)},expression:"formData.limit_list"}})],1):t._e()],1)],1)},m=[],f=(a("a630"),a("3ca3"),a("cae8")),h={components:{SelectTime:f["a"]},props:{strategy:{type:Object,default:function(){return{}}}},watch:{strategy:{handler:function(t){for(var e in this.formData)e in t&&(this.formData[e]=t[e]);this.start_time=t.start_time||null,this.end_time=t.end_time||null,this.formData.ip_limit=t.ip_limit+""}}},data:function(){return{formData:{id:void 0,name:void 0,start_time:void 0,end_time:void 0,file_upload:!0,file_download:!0,file_manager:!0,copy_tool:!0,login_time_limit:[],ip_blacklist:[],ip_whitelist:[],ip_limit:"1",limit_list:[]},formDataRules:{name:[{required:!0,message:"请填写策略名称",trigger:"change"}],limit_list:[{required:!0,type:"array",message:"请填写IP",trigger:"change"}]},labelCol:{span:4},wrapperCol:{span:20},start_time:null,end_time:null}},methods:{changeTime:function(t,e,a){this.formData[a]=e},resetFormData:function(){var t=this;this.formData=this.$options.data().formData,this.$nextTick((function(){var e;null===(e=t.$refs.formData)||void 0===e||e.clearValidate()}));var e=Array.from({length:7},(function(t,e){return{week:e+1,time:Array.from({length:24},(function(t,e){return e}))}}));this.formData.login_time_limit=e,this.start_time=null,this.end_time=null}},mounted:function(){}},p=h,_=(a("8fcf"),a("2877")),b=Object(_["a"])(p,d,m,!1,null,"76785c1b",null),v=b.exports,g=a("6421"),y=a("d816"),x=a("3be4"),D={components:{Step1:v,Step2:g["a"],Step3:y["a"]},data:function(){return{visible:!1,loading:!1,infoLoading:!1,activeCurrent:0,id:void 0,strategy:{},user:{},credential_host:{}}},methods:{showModal:function(t){var e=this;this.id=t,t&&this.getAccessStrategy();var a=["Step1","Step2","Step3"];this.activeCurrent=this.$options.data().activeCurrent,this.$nextTick((function(){setTimeout((function(){a.forEach((function(t){var a;null===(a=e.$refs[t])||void 0===a||a.resetFormData()}))}),0)})),this.visible=!0},getAccessStrategy:function(){var t=this;this.infoLoading=!0,Object(x["e"])({id:this.id}).then((function(e){var a=e.data,i=a.user,n=a.strategy,r=a.credential_host;t.user=i,t.strategy=n,t.credential_host=r})).finally((function(){t.infoLoading=!1}))},nextStep:function(){var t=this;if(0==this.activeCurrent){var e=this.$refs.Step1;e.$refs.formData.validate((function(e){e&&(t.activeCurrent+=1)}))}else this.activeCurrent+=1},handleOk:function(){var t=this,e=u()(this.$refs.Step1.formData),a=this.$refs.Step2.getFormData(),i=this.$refs.Step3.getFormData(),n={strategy:e,user:a,credential_host:i};this.loading=!0;var r={addAccessStrategy:x["a"],editAccessStrategy:x["c"]},s=e.id?"editAccessStrategy":"addAccessStrategy";r[s](n).then((function(e){t.$message.success(e.message),t.visible=!1,t.$emit("done")})).finally((function(){t.loading=!1}))},handleCancel:function(t){this.visible=!1},changeActiceCurrent:function(t){this.activeCurrent=t}}},k=D,w=(a("965e"),Object(_["a"])(k,l,o,!1,null,"57270630",null)),S=w.exports,C=a("6f7c"),$={components:{ControlVisitPolicy:S},data:function(){return{tableLoading:!1,visible:!1,tableQuery:{search_data:void 0,search_type:"name",current:1,pageSize:10,total:0,data_type:"list",status:void 0,call_type:void 0,execute_type:void 0},searchList:[{name:"策略名称",key:"name"}],tableData:[],columns:[{title:"策略名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"状态",dataIndex:"status",ellipsis:!0,scopedSlots:{customRender:"status"}},{title:"关联用户",dataIndex:"user",ellipsis:!0,scopedSlots:{customRender:"user"}},{title:"关联资源凭证",dataIndex:"credential_host",ellipsis:!0,scopedSlots:{customRender:"credential_host"}},{title:"创建时间",dataIndex:"create_time",ellipsis:!0},{title:"操作",ellipsis:!0,scopedSlots:{customRender:"action"},align:"center"}]}},methods:{searchTable:function(){this.tableQuery.current=1,this.getTableData()},refresh:function(){this.tableQuery=this.$options.data().tableQuery,this.getTableData()},tableChange:function(t){var e=t.current,a=t.pageSize;this.tableQuery.current=e,this.tableQuery.pageSize=a,this.getTableData()},viewDetail:function(t){this.$router.push({name:"visitPolicyInfo",query:{id:t.id}})},add:function(){this.$refs.ControlVisitPolicy.showModal()},edit:function(t){this.$refs.ControlVisitPolicy.showModal(t.id)},del:function(t){var e=this,a=t.id;this.$confirm({title:"删除确认",content:"请确认是否删除?",okType:"danger",onOk:function(){return Object(x["b"])({id:a}).then((function(t){e.$message.success("删除成功"),e.getTableData()}))}})},changeStatus:function(t){var e=this,a={id:t.id,status:t.status,type:"access"};Object(x["d"])(a).then((function(t){e.getTableData()}))},getTableData:function(){var t=this;this.tableLoading=!0,Object(x["e"])(Object(s["a"])({},this.tableQuery)).then((function(e){var a=e.data,i=a.data,n=a.current,r=a.total;t.tableData=i,t.tableQuery.current=n,t.tableQuery.total=r,t.tableQuery.total>0&&t.tableQuery.current>1&&0==t.tableData.length&&(t.tableQuery.current--,t.getTableData())})).finally((function(){t.tableLoading=!1}))}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(C["a"])(t,"use-access-credential");case 2:a=e.sent,a&&t.getTableData();case 4:case"end":return e.stop()}}),e)})))()}},T=$,Q=(a("deab"),Object(_["a"])(T,i,n,!1,null,"764a3795",null)),A=Q.exports;e["default"]=A},"8fcf":function(t,e,a){"use strict";var i=a("dae0"),n=a.n(i);n.a},"965e":function(t,e,a){"use strict";var i=a("9708"),n=a.n(i);n.a},9708:function(t,e,a){},dae0:function(t,e,a){},deab:function(t,e,a){"use strict";var i=a("3765"),n=a.n(i);n.a}}]);