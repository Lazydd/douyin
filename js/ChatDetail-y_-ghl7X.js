import{u as p,s as E,q as i,B as h}from"./other-Cop97DLs.js";import{am as n,a0 as v,_ as N}from"./common-BFjFstv0.js";import"./vendor-EcFAmbRN.js";const f=""+new URL("../assets/add-jAJ-Mhic.png",import.meta.url).href,s=a=>(Vue.pushScopeId("data-v-4b5a7e28"),a=a(),Vue.popScopeId(),a),g={id:"ChatDetail"},w=s(()=>Vue.createElementVNode("span",{class:"f16"},"聊天详情",-1)),k={class:"content"},C={class:"peoples"},L=s(()=>Vue.createElementVNode("img",{src:f,alt:"",class:"head-image"},null,-1)),b=s(()=>Vue.createElementVNode("div",{class:"name"},"多人聊天",-1)),D=[L,b],M={class:"setting"},U={class:"row"},O=s(()=>Vue.createElementVNode("div",{class:"left"},"消息免打扰",-1)),B={class:"right"},R={class:"row"},y=s(()=>Vue.createElementVNode("div",{class:"left"},"置顶聊天",-1)),T={class:"right"},A=s(()=>Vue.createElementVNode("div",{class:"left"},"设备备注",-1)),F={class:"right"},H=s(()=>Vue.createElementVNode("div",{class:"left"},"举报",-1)),$={class:"right"},S=s(()=>Vue.createElementVNode("div",{class:"left"},"拉黑",-1)),I={class:"right"},W=Vue.defineComponent({name:"ChatDetail",__name:"ChatDetail",setup(a){const d=p(),t=Vue.reactive({noMessage:!1,top:!1,blockDialog:!1,list:[{id:"224e9a00-ffa0-4bc1-bb07-c318c7b02fa5",avatar:new URL(""+new URL("../assets/0-DZZhXKhG.png",import.meta.url).href,import.meta.url).href,name:"何以为家",sex:"",age:null,idCard:null,phone:"",address:null,wechat:"",password:null,lastLoginTime:"1629993515",createTime:"1630035089",isDelete:0,account:"234",pinyin:"M",select:!1,type:n.RELATE_ENUM.FOLLOW_EACH_OTHER}]});Vue.onMounted(()=>{});function u(l){t.list[l].type===n.RELATE_ENUM.FOLLOW_ME&&(t.list[l].type=n.RELATE_ENUM.FOLLOW_EACH_OTHER)}function V(l){v("正在与对方相互关注，是否不再关注该用户",null,"gray",()=>{t.list[l].type=n.RELATE_ENUM.FOLLOW_ME},()=>{},"取消关注","返回")}return(l,e)=>{const m=Vue.resolveComponent("BaseHeader"),c=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",g,[Vue.createVNode(m,null,{center:Vue.withCtx(()=>[w]),_:1}),Vue.createElementVNode("div",k,[Vue.createElementVNode("div",C,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.list,(o,r)=>(Vue.openBlock(),Vue.createBlock(E,{onFollow:_=>u(r),onUnfollow:_=>V(r),mode:"normal-add-button",key:r,people:o},null,8,["onFollow","onUnfollow","people"]))),128)),Vue.createElementVNode("div",{class:"add-people",onClick:e[0]||(e[0]=o=>Vue.unref(d)("/message/share-to-friend"))},D)]),Vue.createElementVNode("div",M,[Vue.createElementVNode("div",U,[O,Vue.createElementVNode("div",B,[Vue.createVNode(i,{modelValue:t.noMessage,"onUpdate:modelValue":e[1]||(e[1]=o=>t.noMessage=o),theme:"bootstrap",color:"success"},null,8,["modelValue"])])]),Vue.createElementVNode("div",R,[y,Vue.createElementVNode("div",T,[Vue.createVNode(i,{modelValue:t.top,"onUpdate:modelValue":e[2]||(e[2]=o=>t.top=o),theme:"bootstrap",color:"success"},null,8,["modelValue"])])]),Vue.createElementVNode("div",{class:"row",onClick:e[3]||(e[3]=o=>Vue.unref(d)("/set-remark"))},[A,Vue.createElementVNode("div",F,[Vue.createVNode(c,{direction:"right",scale:".7"})])]),Vue.createElementVNode("div",{class:"row",onClick:e[4]||(e[4]=o=>Vue.unref(d)("/home/report",{mode:"chat"}))},[H,Vue.createElementVNode("div",$,[Vue.createVNode(c,{direction:"right",scale:".7"})])]),Vue.createElementVNode("div",{class:"row",onClick:e[5]||(e[5]=o=>t.blockDialog=!0)},[S,Vue.createElementVNode("div",I,[Vue.createVNode(c,{direction:"right",scale:".7"})])])])]),Vue.createVNode(h,{modelValue:t.blockDialog,"onUpdate:modelValue":e[6]||(e[6]=o=>t.blockDialog=o)},null,8,["modelValue"])])}}}),q=N(W,[["__scopeId","data-v-4b5a7e28"]]);export{q as default};
