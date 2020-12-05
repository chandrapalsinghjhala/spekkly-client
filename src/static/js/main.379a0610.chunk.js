(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,r){e.exports=r.p+"static/media/settings_check.d35c122f.svg"},196:function(e,t,r){},373:function(e,t){},374:function(e,t){},375:function(e,t){},386:function(e,t,r){e.exports=r.p+"static/media/google.09aea0f5.svg"},388:function(e,t,r){e.exports=r.p+"static/media/facebook.3ae13bc8.svg"},389:function(e,t,r){e.exports=r.p+"static/media/messages.e6956db2.svg"},390:function(e,t,r){e.exports=r.p+"static/media/success.807c3750.svg"},393:function(e,t,r){e.exports=r.p+"static/media/checkbox.6bc6733e.svg"},395:function(e,t,r){e.exports=r.p+"static/media/off.0b3be563.svg"},413:function(e,t,r){e.exports=r(980)},515:function(e,t,r){},540:function(e,t){},609:function(e,t,r){e.exports=r.p+"static/media/edit.d37d9400.svg"},615:function(e,t){},617:function(e,t){},690:function(e,t){},691:function(e,t){},735:function(e,t){},737:function(e,t){},753:function(e,t){},980:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),i=r(38),n=r.n(i),l=r(2),s=r(11),m=r(22),c=r(26),u=r(35),_=r(364),d=r.n(_);const b="(min-width: 56.25em)",f="(max-width: 37.5em)",N="(max-width: 56.25em)",p="(max-width: 75em)",v=b,g="(max-width: 75em) and (min-width: 37.5em)",h="(min-width: 75em)",E="(min-width: 125em)",y=(e,t=!0)=>`${t?"@media":""} only screen and ${e}`;var w=r(1),k=r(3);const S=w.b.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  display: block;
  max-width: 115rem;
  position: relative;

  ${Object(k.a)("nav")`
    z-index: 11;
    max-width: var(--nav-container);
  `};
  
   ${Object(k.a)("userPosts")`
    max-width: 120rem;
  `};
   
  ${Object(k.a)("text")`
    max-width: 90rem;
  `};
  
  ${Object(k.a)("messages")`
    margin-top: 4rem;
    max-width: 170rem;
    height: calc(100vh - var(--vh-offset, 0px) - var(--messages-navbar-offset) - ${e=>e.navbarHeight}px)
  `};
  
   ${Object(k.a)("post")`
    max-width: 130rem;
  `};
  
   ${Object(k.a)("home")`
    max-width: 150rem;
  `};
`,O=w.b.div`
  overflow-y: auto;
`,x=w.b.div`
  display: grid;
  grid-column-gap: 2rem;
   margin-top: 4rem;
  
  
   ${y(v)} { 
      grid-template-columns: .4fr 1fr;
      margin-bottom: 6rem;
     
  }
`,j=w.b.div`
    background-color: var(--background-color);
    position: relative;
`,C=w.a`
  padding: var(--input-box-padding);
  background-color: white;
  position: relative;
  
  ${Object(k.a)("center")`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
   
   ${Object(k.a)("clearBackground")`
      background-color: rgba(255,255,255,0);
  `};
   
  ${Object(k.a)("borderBottom")`
    border-bottom: 2px solid var(--background-color);
  `};
  
  ${Object(k.a)("extraPadding")`
    padding: 4rem
  `};
  
  ${Object(k.a)("textCenter")`
    text-align: center;
  `};
  
  ${Object(k.a)("borderTop")`
    border-top: 2px solid var(--background-color);
  `};
    
  ${Object(k.a)("belowSiblings")`
       z-index: 0;
  `};
`,I=w.b.div`
    ${C};
    
     ${Object(k.a)("emptyBox")`
        height: 6rem;
     `}
     
      ${Object(k.a)("mobileScroll")`
       ${y(N)} { 
            overflow: auto;
        }
     `}
     
     ${Object(k.a)("smallPadding")`
       padding: 1.3rem 2rem;
     `}
    
    ${Object(k.a)("navbarBottomMargin")`
        margin-bottom: ${e=>e.navbarHeight}px;
    `};
    
    ${Object(k.a)("customSize")`
         ${Object(k.a)("width")`
            width: ${e=>e.width};
        `};
    
        ${Object(k.a)("height")`
             height: ${e=>e.height};
        `};
    `};
    
    
    ${Object(k.a)("customMobileSize")`
      ${y(N)} { 
           ${Object(k.a)("width")`
            width: ${e=>e.width};
        `};
    
        ${Object(k.a)("height")`
             height: ${e=>e.height};
        `};
      }
    `};
    
    
    
    ${Object(k.a)("center")`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
  `};
`,D=w.b.div`
  position: relative;

  ${Object(k.a)("inline")`
       display: inline-block;
       margin-right: 2rem;
  `};
`,P=w.b.div`
  display: flex;
  
  ${Object(k.a)("alignCenter")`
       align-items: center;
  `};
`,T=w.b.div`
  margin-top: 8rem;
  margin-bottom: 6rem;
  background-color: white;
  padding: 4rem;
  
  ${y(N)} {
      padding: 2rem;
  }
  
  ${y(f)} {
    margin: 4rem 0;
  }
`,M=w.b.div`
  height: 100%;
`;var L=r(50);const A=w.b.div`
  display: flex;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s linear;

  ${Object(k.a)("dataLoaded")`
       opacity: 1;
  `};
`,$=w.b.img`
  width: 3.8rem;
  border-radius: 100px;
  cursor: pointer;
`,W=w.b.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 3rem;
  position: relative;
`,B=(Object(w.b)(L.a)`
  // todo add measure
  div {
    height: 20px;

    svg {
      width: 2rem;
      cursor: pointer;
      height: auto;
      fill: #757575;
      transition: fill 0.1s linear;

      &:hover {
        fill: black;
      }
    }
  }
`,w.b.div`
  margin-left: auto;
`),U=w.b.button`
  ${Object(k.a)("right_margin")`
     margin-right: 4rem
  `};

  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
`,Y=w.b.img`
  height: 5rem;
`;var R=r(370),z=r(40);const F=w.b.div`
  border-bottom: 1px solid #eeeeee;
`,V=w.b.div`
  background-color: white;
  position: absolute;
  top: 5.4rem;
  right: -28px;
  z-index: 10;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  border-radius: 3px;
  width: 22rem;

  //todo move away
  &:after,
  &:before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    top: -8px;
    content: "";
    left: 76%;
    position: absolute;
  }

  &:before {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #cecece;
    transform: translateY(-1px);
    margin-left: -1px;
  }
`,H=w.b.div`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.68);
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }

  ${y(p)} {
    color: black;
    font-size: 2rem;
  }

  ${y(f)} {
    font-size: 1.6rem;
    padding: 1.4rem 2rem;
  }
`,G=w.b.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100px;
  margin-right: 1rem;

  ${y(g)} {
    width: 8rem;
    height: 8rem;
    margin-right: 2rem;
  }
`,q=Object(w.b)(F)`
  display: flex;
  align-items: center;
  padding: 2.6rem;

  ${y(p)} {
    padding: 2rem;
  }
`,J=w.b.div`
  font-family: "Bold";
  font-size: 1.4rem;

  ${y(p)} {
    font-size: 2.2rem;
  }

  ${y(f)} {
    font-size: 1.8rem;
  }
`,K=Object(w.b)(F)`
  padding: 0.8rem 0;
`,X=w.b.div`
  background-color: #fbfbfb;
  padding: 1rem 2.2rem;
  display: inline-grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-column-gap: 1.2rem;
`,Q=w.b.div`
  color: #767676;
  font-size: 1.3rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;var Z=r(371),ee=r.n(Z).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL});const te=()=>({headers:oe()}),re=e=>({headers:oe(),params:e}),oe=()=>({Authorization:localStorage.getItem("sessionToken")});var ae=r(67),ie=r(372),ne=r.n(ie),le=r(989);const se={isSignUpOpen:!1,isLoginOpen:!1,isEmailLoginOpen:!1,isEmailSignUpOpen:!1,isForgotPasswordOpen:!1,isResetPasswordOpen:!1};var me=(e=se,t)=>"IS_SIGN_UP_OPEN"===t.type?{...e,isSignUpOpen:t.isSignUpOpen}:"IS_LOGIN_OPEN"===t.type?{...e,isLoginOpen:t.isLoginOpen}:"IS_EMAIL_LOGIN_OPEN"===t.type?{...e,isEmailLoginOpen:t.isEmailLoginOpen}:"IS_EMAIL_SIGN_UP_OPEN"===t.type?{...e,isEmailSignUpOpen:t.isEmailSignUpOpen}:"IS_FORGOT_PASSWORD_OPEN"===t.type?{...e,isForgotPasswordOpen:t.isForgotPasswordOpen}:"IS_RESET_PASSWORD_OPEN"===t.type?{...e,isResetPasswordOpen:t.isResetPasswordOpen}:e;const ce={isLoggedIn:void 0,appDataLoaded:void 0};var ue=(e=ce,t)=>"IS_LOGGED_IN"===t.type?Object.assign({},e,{isLoggedIn:t.isLoggedIn}):e;const _e={activeNavIndex:0,loading:!1};var de=(e=_e,t)=>"CREATE_POST_ACTIVE_NAV"===t.type?Object.assign({},e,{activeNavIndex:t.activeNavIndex}):"CURRENT_PAGE_IS_VALID"===t.type?Object.assign({},e,{currentPageIsValid:t.currentPageIsValid}):"LOADING"===t.type?Object.assign({},e,{loading:t.loading}):"FORM_TYPE"===t.type?Object.assign({},e,{formType:t.formType}):"EDIT_POST_ID"===t.type?Object.assign({},e,{editPostId:t.editPostId}):e;const be={isNavProfileOptionsOpen:!1};var fe=(e=be,t)=>"IS_NAV_PROFILE_OPTIONS_OPEN"===t.type?Object.assign({},e,{isNavProfileOptionsOpen:t.isNavProfileOptionsOpen}):"NAVBAR_HEIGHT"===t.type?Object.assign({},e,{navbarHeight:t.navbarHeight}):e;const Ne={activeNavIndex:0,settingsEditActive:!0,settingsEditComplete:!1};var pe=(e=Ne,t)=>"ACTIVE_NAV_INDEX"===t.type?Object.assign({},e,{activeNavIndex:t.activeNavIndex}):"SETTINGS_EDIT_ACTIVE"===t.type?Object.assign({},e,{settingsEditActive:t.settingsEditActive}):"SETTINGS_EDIT_COMPLETE"===t.type?Object.assign({},e,{settingsEditComplete:t.settingsEditComplete}):"SETTINGS_LOADING"===t.type?Object.assign({},e,{settingsLoading:t.settingsLoading}):e;const ve={profileImageChanged:0};var ge=(e=ve,t)=>"USER_DATA"===t.type?{...e,...t.userData}:"PROFILE_IMAGE_CHANGED"===t.type?{...e,profileImageChanged:t.profileImageChanged}:e;const he={newMessages:[],recipientOnlineChanges:[],messageImagesLoaded:0,newCurrentConversationMessages:[],updateConversationOnMessageDelete:[],lastMessageStatus:null,mobileActiveConversation:!1,deleteMessages:[],currentConversation:{}};var Ee=(e=he,t)=>"CURRENT_CONVERSATION"===t.type?{...e,currentConversation:t.currentConversation}:"NEW_MESSAGES"===t.type?{...e,newMessages:t.newMessages}:"NEW_CURRENT_CONVERSATION_MESSAGES"===t.type?{...e,newCurrentConversationMessages:t.newCurrentConversationMessages}:"LAST_MESSAGE_STATUS"===t.type?{...e,lastMessageStatus:t.lastMessageStatus}:"MESSAGE_IMAGES_LOADED"===t.type?{...e,messageImagesLoaded:t.messageImagesLoaded}:"DELETE_MESSAGES"===t.type?{...e,deleteMessages:t.deleteMessages}:"UPDATE_CONVERSATION_ON_MESSAGE_DELETE"===t.type?{...e,updateConversationOnMessageDelete:t.updateConversationOnMessageDelete}:"RECIPIENT_ONLINE_CHANGE"===t.type?{...e,recipientOnlineChanges:t.recipientOnlineChanges}:"MOBILE_ACTIVE_CONVERSATION"===t.type?{...e,mobileActiveConversation:t.mobileActiveConversation}:e;const ye={clearFilters:0};var we=(e=ye,t)=>"CLEAR_FILTERS"===t.type?{...e,clearFilters:t.clearFilters}:e,ke=r(373),Se=r.n(ke),Oe=r(374),xe=r.n(Oe),je=r(375),Ce=r.n(je);var Ie=(e={},t)=>"ASSET_INIT"===t.type?Object.assign({},e,t.assetInit):e;const De={};var Pe=(e=De,t)=>"BLUR_BACKGROUND"===t.type?Object.assign({},e,{blurBackground:t.blurBackground}):e;var Te=Object(ae.combineReducers)({sessionState:ue,appState:Pe,inputState:Ce.a,loginSignUpState:me,createPostState:de,navbarState:fe,settingsState:pe,userState:ge,messageState:Ee,homeState:we,assetState:Ie,postState:Se.a,modalState:xe.a,form:le.a}),Me=r(378);var Le=Object(ae.compose)(ne()())(ae.createStore)(Te,Object(Me.devToolsEnhancer)());const Ae=e=>({type:"IS_NAV_PROFILE_OPTIONS_OPEN",isNavProfileOptionsOpen:e}),$e=e=>({type:"NAVBAR_HEIGHT",navbarHeight:e}),We=e=>({type:"ASSET_INIT",assetInit:e}),Be=()=>{const e=Le.getState().navbarState.navbarHeight,t=Le.getState().assetState;Le.dispatch({type:"RESET"}),Le.dispatch($e(e)),Le.dispatch(We(t))},Ue=async e=>{await ee.post("/users/logout",{data:{}},te()),e.push("/"),localStorage.removeItem("sessionToken"),Be()};var Ye="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\NavOptionsItems.jsx";var Re=()=>{const e=Object(m.f)();return a.a.createElement(K,{__self:void 0,__source:{fileName:Ye,lineNumber:13,columnNumber:5}},a.a.createElement(s.b,{to:"/posts",__self:void 0,__source:{fileName:Ye,lineNumber:14,columnNumber:7}},a.a.createElement(H,{__self:void 0,__source:{fileName:Ye,lineNumber:15,columnNumber:9}}," My Posts ")),a.a.createElement(s.b,{to:"/settings",__self:void 0,__source:{fileName:Ye,lineNumber:17,columnNumber:7}},a.a.createElement(H,{__self:void 0,__source:{fileName:Ye,lineNumber:18,columnNumber:9}}," Settings ")),a.a.createElement(H,{onClick:()=>Ue(e),__self:void 0,__source:{fileName:Ye,lineNumber:20,columnNumber:7}}," ","Sign Out"," "))},ze="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\NavbarProfileOptions.jsx";const Fe=({closeNavProfileOptions:e})=>{const t=Object(m.g)(),r=Object(l.d)(({userState:e})=>e),i=Object(R.a)(t.pathname);return Object(o.useEffect)(()=>{i&&i!==t.pathname&&e()},[t]),Fe.handleClickOutside=e,a.a.createElement(V,{__self:void 0,__source:{fileName:ze,lineNumber:34,columnNumber:5}},a.a.createElement(O,{__self:void 0,__source:{fileName:ze,lineNumber:35,columnNumber:7}},a.a.createElement(q,{__self:void 0,__source:{fileName:ze,lineNumber:36,columnNumber:9}},a.a.createElement(G,{src:r.profileImage,__self:void 0,__source:{fileName:ze,lineNumber:37,columnNumber:11}}),a.a.createElement(s.b,{to:"/settings",__self:void 0,__source:{fileName:ze,lineNumber:38,columnNumber:11}},a.a.createElement(J,{__self:void 0,__source:{fileName:ze,lineNumber:39,columnNumber:13}},r.name))),a.a.createElement(Re,{__self:void 0,__source:{fileName:ze,lineNumber:42,columnNumber:9}}),a.a.createElement(X,{__self:void 0,__source:{fileName:ze,lineNumber:43,columnNumber:9}},a.a.createElement(s.b,{to:"/terms-of-service",__self:void 0,__source:{fileName:ze,lineNumber:44,columnNumber:11}},a.a.createElement(Q,{__self:void 0,__source:{fileName:ze,lineNumber:45,columnNumber:13}}," Terms ")),a.a.createElement(s.b,{to:"/privacy-policy",__self:void 0,__source:{fileName:ze,lineNumber:47,columnNumber:11}},a.a.createElement(Q,{__self:void 0,__source:{fileName:ze,lineNumber:48,columnNumber:13}}," Privacy ")),a.a.createElement(s.b,{to:"/about",__self:void 0,__source:{fileName:ze,lineNumber:50,columnNumber:11}},a.a.createElement(Q,{__self:void 0,__source:{fileName:ze,lineNumber:51,columnNumber:13}}," About ")))))};Fe.prototype={};const Ve={handleClickOutside:()=>Fe.handleClickOutside};var He=Object(z.a)(Fe,Ve);const Ge=w.b.div`
  width: ${"1.2rem"};
  height: ${"1.2rem"};
  position: absolute;
  right: -1.1rem;
  top: -0.3rem;
  border-radius: 100px;
  background-color: #eb3039;
  border: 2px solid var(--background-color);
`;w.b.div`
  color: white;
  padding: 0.3rem;
  font-size: 1.1rem;
  font-family: "Medium";
`;var qe="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\LoggedInOptions.jsx";var Je=()=>{const e=Object(l.d)(({userState:e})=>e),[t,r]=Object(o.useState)(!1),{profileImage:i,hasUnreadMessages:n}=e;return a.a.createElement(W,{__self:void 0,__source:{fileName:qe,lineNumber:26,columnNumber:5}},a.a.createElement(s.b,{to:"/post",__self:void 0,__source:{fileName:qe,lineNumber:27,columnNumber:7}},"Post"),a.a.createElement(D,{__self:void 0,__source:{fileName:qe,lineNumber:29,columnNumber:7}},a.a.createElement(s.b,{to:"/messages",__self:void 0,__source:{fileName:qe,lineNumber:30,columnNumber:9}},"Messages"),n&&a.a.createElement(Ge,{__self:void 0,__source:{fileName:qe,lineNumber:32,columnNumber:31}})),a.a.createElement($,{onClick:()=>r(!t),className:"ignore-react-onclickoutside",src:((e,t)=>e?`${t}?${e}`:t)(null,i),__self:void 0,__source:{fileName:qe,lineNumber:35,columnNumber:7}}),t&&a.a.createElement(He,{closeNavProfileOptions:()=>{r(!1)},__self:void 0,__source:{fileName:qe,lineNumber:42,columnNumber:9}}))};const Ke=w.a`
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 5px;
  text-align: center;
  padding: 1.2rem 2.4rem;
  transition: all .1s linear;
  
   &:focus {
    outline: none;
  }
  
   ${Object(k.a)("small")`
     padding: 1rem 1.7rem;
  `}
  
  ${Object(k.a)("stretch")`
    width: 100%;
  `}
  
  ${Object(k.a)("no-stretch")`
    justify-self: center;
    align-self: center;
  `}
  
   ${Object(k.a)("rightMargin")`
     margin-right: 2rem
  `};
`,Xe=w.b.button`
  ${Ke};
  color: white;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
 
  &:hover {
    background-color: var(--primary-color-highlighted);
    border: 1px solid var(--primary-color-highlighted);
  }
  
  ${Object(k.a)("warning")`
   border: 1px solid var(--button-warning-color);
   background-color: var(--button-warning-color);
   
   &:hover {
        background-color: var(--button-warning-highlighted);
        border: 1px solid var(--button-warning-highlighted);
      }
  `}
  
  ${Object(k.a)("disabledColor")`
      background-color: var(--disabled-color);
      border: 1px solid var(--disabled-color);

      &:hover {
        background-color: var(--disabled-color-highlighted);
        border: 1px solid var(--disabled-color-highlighted);
      }
  `}
`,Qe=w.b.div`
  display: inline-block;
  color: white;
  
  ${Object(k.a)("small")`
    font-size: 1.5rem;
  `}
`,Ze=w.b.div`
  display: inline-block;
  
   ${Object(k.a)("stretch")`
        display: block;
   `}
`,et=w.b.div`
  position: relative;
  display: flex;
  align-items: center;
  
  ${Object(k.a)("mtAuto")`
    margin-top: auto;
  `}
  
   ${Object(k.a)("mlAuto")`
    margin-left: auto;
  `}
   
    ${Object(k.a)("homeSearch")`
    padding: 1rem;
  `}
`;const tt=w.b.button`
  ${Ke};
  color: var(--disabled-color);
  background-color: transparent;
  border: 1px solid var(--hollow-border-color);

  ${Object(k.a)("active")`
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
  `};

  &:hover {
    background-color: initial;
    border: 1px solid var(--hollow-border-color);

    ${Object(k.a)("active")`
      border: 1px solid var(--primary-color-highlighted);
      color: var(--primary-color-highlighted);
    `};
  }
`;var rt=e=>a.a.createElement(tt,{active:e.active,type:"button",rightMargin:e.rightMargin,onClick:e.onClick,__self:void 0,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\buttons\\HollowButton.jsx",lineNumber:30,columnNumber:5}},e.buttonText);const ot=e=>({type:"IS_EMAIL_LOGIN_OPEN",isEmailLoginOpen:e}),at=e=>({type:"IS_EMAIL_SIGN_UP_OPEN",isEmailSignUpOpen:e}),it=e=>({type:"IS_FORGOT_PASSWORD_OPEN",isForgotPasswordOpen:e}),nt=e=>({type:"IS_SIGN_UP_OPEN",isSignUpOpen:e}),lt=e=>({type:"IS_LOGIN_OPEN",isLoginOpen:e}),st=e=>({type:"IS_RESET_PASSWORD_OPEN",isResetPasswordOpen:e});var mt="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\NotLoggedInOptions.jsx";var ct=()=>{const e=Object(l.c)();return a.a.createElement("div",{__self:void 0,__source:{fileName:mt,lineNumber:22,columnNumber:5}},a.a.createElement(U,{onClick:()=>{e(Ae(!1)),e(lt(!0))},right_margin:!0,__self:void 0,__source:{fileName:mt,lineNumber:23,columnNumber:7}}," ","Login"," "),a.a.createElement(rt,{onClick:()=>{e(Ae(!1)),e(nt(!0))},active:!0,buttonText:"Sign up",__self:void 0,__source:{fileName:mt,lineNumber:27,columnNumber:7}}))};const ut=w.b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - var(--vh-offset, 0px));
  overflow-y: auto;
  z-index: 10;
  background-color: var(--background-color);
`,_t=w.b.div`
  background-color: white;
  position: relative;
  top: calc(${e=>e.navbarHeight}px + 2rem);
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;

  ${y(p)} {
    height: calc(94vh - var(--vh-offset, 0px));
  }

  ${y(f)} {
    height: calc(86vh - var(--vh-offset, 0px));
  }
`;var dt=r(990);const bt=()=>{Object(o.useEffect)(()=>(document.getElementById("html").style.overflow="hidden",()=>document.getElementById("html").style.overflow="scroll"))};var ft="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\MobileNav.jsx";var Nt=()=>{const e=Object(l.d)(({navbarState:{navbarHeight:e}})=>e),t=Object(l.d)(({userState:e})=>e);return bt(),a.a.createElement(dt.a,{__self:void 0,__source:{fileName:ft,lineNumber:28,columnNumber:5}},a.a.createElement(ut,{__self:void 0,__source:{fileName:ft,lineNumber:29,columnNumber:7}},a.a.createElement(_t,{navbarHeight:e,__self:void 0,__source:{fileName:ft,lineNumber:30,columnNumber:9}},a.a.createElement(q,{__self:void 0,__source:{fileName:ft,lineNumber:31,columnNumber:11}},a.a.createElement(G,{src:t.profileImage,__self:void 0,__source:{fileName:ft,lineNumber:32,columnNumber:13}}),a.a.createElement(s.b,{to:"/settings",__self:void 0,__source:{fileName:ft,lineNumber:33,columnNumber:13}},a.a.createElement(J,{__self:void 0,__source:{fileName:ft,lineNumber:34,columnNumber:15}},t.name))),a.a.createElement(K,{__self:void 0,__source:{fileName:ft,lineNumber:37,columnNumber:11}},a.a.createElement(s.b,{to:"/post",__self:void 0,__source:{fileName:ft,lineNumber:38,columnNumber:13}},a.a.createElement(H,{__self:void 0,__source:{fileName:ft,lineNumber:39,columnNumber:15}}," Post ")),a.a.createElement(s.b,{to:"/messages",__self:void 0,__source:{fileName:ft,lineNumber:41,columnNumber:13}},a.a.createElement(H,{__self:void 0,__source:{fileName:ft,lineNumber:42,columnNumber:15}}," Messages "))),a.a.createElement(K,{__self:void 0,__source:{fileName:ft,lineNumber:45,columnNumber:11}},a.a.createElement(s.b,{to:"/terms-of-service",__self:void 0,__source:{fileName:ft,lineNumber:46,columnNumber:13}},a.a.createElement(H,{__self:void 0,__source:{fileName:ft,lineNumber:47,columnNumber:15}}," Terms ")),a.a.createElement(s.b,{to:"/privacy-policy",__self:void 0,__source:{fileName:ft,lineNumber:49,columnNumber:13}},a.a.createElement(H,{__self:void 0,__source:{fileName:ft,lineNumber:50,columnNumber:15}}," Privacy ")),a.a.createElement(s.b,{to:"/about",__self:void 0,__source:{fileName:ft,lineNumber:52,columnNumber:13}},a.a.createElement(H,{__self:void 0,__source:{fileName:ft,lineNumber:53,columnNumber:15}}," About "))),a.a.createElement(Re,{__self:void 0,__source:{fileName:ft,lineNumber:56,columnNumber:11}}))))};const pt=w.c`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,vt=w.b.div`
  display: block;
  background-color: rgba(255,255,255,0.85);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  ${Object(k.a)("fixed")`
      position: fixed;
  `};
  
  ${Object(k.a)("clearBackground")`
      background-color: rgba(255,255,255,0);
  `};
  
  ${Object(k.a)("solidBackground")`
      background-color: rgba(255,255,255,1);
  `};
`,gt=w.b.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
  height: 100%;  
`,ht=w.b.div`
  margin-top: 3rem;
`,Et=w.b.div`
  &:before {
  content: '';
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
  
  &:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1rem;
  height: 1rem;
  margin-top: -0.5rem;
  animation: ${pt} 1500ms infinite linear;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5rem 0 0 0, rgba(0, 0, 0, 0.75) 1.1rem 1.1rem 0 0, rgba(0, 0, 0, 0.75) 0 1.5rem 0 0, rgba(0, 0, 0, 0.75) -1.1rem 1.1rem 0 0, rgba(0, 0, 0, 0.75) -1.5rem 0 0 0, rgba(0, 0, 0, 0.75) -1.1rem -1.1rem 0 0, rgba(0, 0, 0, 0.75) 0 -1.5rem 0 0, rgba(0, 0, 0, 0.75) 1.1rem -1.1rem 0 0;
  
  
  ${Object(k.a)("fillPage")`
    margin-bottom: ${e=>e.navbarHeight}px;
  `};
  
   ${Object(k.a)("marginBottom")`
      margin-bottom: ${e=>e.marginBottom}px;
   `};
  }
}`;var yt=r(380),wt=r.n(yt),kt="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\loading\\LoadingButtonSpinner.jsx";const St=w.b.div`
  position: absolute;

  ${Object(k.a)("insideButtonLoading")`
        top: calc(50% - ${"15px"} / 2);
        left: calc(50% - ${"15px"} - ${e=>e.buttonTextWidth}px / 2);
        transform: translateX(-1rem);
    `}

  ${Object(k.a)("leftSideLoading")`
        left: 0;
        top: calc(50% - ${"18px"} / 2);
        transform: translateX(1.3rem);
    `}
    
    ${Object(k.a)("rightSideLoading")`
        right: 0;
        top: calc(50% - ${"18px"} / 2);
        transform: translateX(1.3rem);
    `}
`,Ot=w.b.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${"15px"};
  height: ${"15px"};
  border: 2px solid #fff;
  border-radius: 50%;
  animation: ${pt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  ${Object(k.a)("blackLoadingIcon")`
        border: 2px solid rgba(0,0,0,1);
        width: ${"18px"};
        height: ${"18px"};
        border-color: rgba(0,0,0,1) transparent transparent transparent;
    `}

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;var xt=e=>{const t=[];return wt()(4,r=>t.push(a.a.createElement(Ot,{key:r,blackLoadingIcon:e.rightSideLoading||e.leftSideLoading,__self:void 0,__source:{fileName:kt,lineNumber:70,columnNumber:9}}))),a.a.createElement(St,{buttonTextWidth:e.buttonTextWidth,rightSideLoading:e.rightSideLoading,insideButtonLoading:e.insideButtonLoading,leftSideLoading:e.leftSideLoading,__self:void 0,__source:{fileName:kt,lineNumber:79,columnNumber:5}},t.map(e=>e))},jt="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\buttons\\FilledButton.jsx";var Ct=e=>{const[t,r]=Object(o.useState)(0),i=Object(o.useCallback)(e=>{null!==e&&r(e.offsetWidth)},[]);return a.a.createElement(Ze,{stretch:e.stretch,__self:void 0,__source:{fileName:jt,lineNumber:24,columnNumber:5}},a.a.createElement(et,{mlAuto:e.mlAuto,mtAuto:e.mtAuto,homeSearch:e.homeSearch,__self:void 0,__source:{fileName:jt,lineNumber:25,columnNumber:7}},e.loading&&a.a.createElement(xt,{rightSideLoading:e.rightSideLoading,leftSideLoading:e.leftSideLoading,buttonTextWidth:t,insideButtonLoading:e.insideButtonLoading,__self:void 0,__source:{fileName:jt,lineNumber:31,columnNumber:11}}),a.a.createElement(Xe,{"no-stretch":e.noStretch,disabled:e.disabled,stretch:e.stretch,disabledColor:e.disabledColor,rightMargin:e.rightMargin,onClick:e.onClick,warning:e.warning,small:e.small,type:e.type||"button",__self:void 0,__source:{fileName:jt,lineNumber:38,columnNumber:9}},a.a.createElement(Qe,{ref:i,small:!0,__self:void 0,__source:{fileName:jt,lineNumber:49,columnNumber:11}},e.buttonText))))},It="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\navbar\\Navbar.jsx";var Dt=e=>{const t=Object(l.c)(),[r,i]=Object(o.useState)(!1),n=Object(l.d)(({sessionState:{isLoggedIn:e}})=>e),_=Object(l.d)(({assetState:{SPEKKLY_LOGO:e}})=>e),b=Object(m.g)();return Object(o.useEffect)(()=>{i(!1)},[b]),a.a.createElement("div",{__self:void 0,__source:{fileName:It,lineNumber:38,columnNumber:5}},a.a.createElement(c.a,{bounds:!0,onResize:e=>{t($e(e.bounds.height))},__self:void 0,__source:{fileName:It,lineNumber:39,columnNumber:7}},({measureRef:o})=>a.a.createElement(S,{ref:o,nav:!0,__self:void 0,__source:{fileName:It,lineNumber:46,columnNumber:11}},a.a.createElement(A,{dataLoaded:e.dataLoaded,__self:void 0,__source:{fileName:It,lineNumber:47,columnNumber:13}},a.a.createElement(s.b,{to:"/",__self:void 0,__source:{fileName:It,lineNumber:48,columnNumber:15}},a.a.createElement(Y,{src:_,__self:void 0,__source:{fileName:It,lineNumber:49,columnNumber:17}})),a.a.createElement(B,{__self:void 0,__source:{fileName:It,lineNumber:52,columnNumber:15}},a.a.createElement(u.a,{query:"(max-width: 75em)",__self:void 0,__source:{fileName:It,lineNumber:53,columnNumber:17}},e=>e?a.a.createElement(a.a.Fragment,null,n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{isOpen:r,menuClicked:()=>{i(!r)},width:26,height:18,strokeWidth:3,rotate:0,color:"black",borderRadius:1,animationDuration:.5,__self:void 0,__source:{fileName:It,lineNumber:59,columnNumber:29}}),r&&a.a.createElement(Nt,{__self:void 0,__source:{fileName:It,lineNumber:73,columnNumber:47}})),!n&&a.a.createElement(Ct,{buttonText:"Get Started",onClick:()=>t(nt(!0)),__self:void 0,__source:{fileName:It,lineNumber:78,columnNumber:27}})):a.a.createElement(a.a.Fragment,null,n&&a.a.createElement(Je,{__self:void 0,__source:{fileName:It,lineNumber:86,columnNumber:40}}),!n&&a.a.createElement(ct,{__self:void 0,__source:{fileName:It,lineNumber:88,columnNumber:41}}))))))))},Pt=(r(515),r(381)),Tt=r(33),Mt=r(16),Lt=r.n(Mt),At=r(23),$t=r(382),Wt=r.n($t);const Bt=e=>({type:"NEW_CURRENT_CONVERSATION_MESSAGES",newCurrentConversationMessages:e}),Ut=e=>({type:"MOBILE_ACTIVE_CONVERSATION",mobileActiveConversation:e}),Yt=e=>({type:"CURRENT_CONVERSATION",currentConversation:e}),Rt=e=>({type:"RECIPIENT_ONLINE_CHANGE",recipientOnlineChanges:e}),zt=e=>({type:"NEW_MESSAGES",newMessages:e}),Ft=e=>({type:"LAST_MESSAGE_STATUS",lastMessageStatus:e}),Vt=e=>({type:"UPDATE_CONVERSATION_ON_MESSAGE_DELETE",updateConversationOnMessageDelete:e}),Ht=e=>({type:"USER_DATA",userData:e});var Gt=function(){var e=Object(At.a)(Lt.a.mark((function e(){var t;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Wt.a.connect(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL)).on("connect",Object(At.a)(Lt.a.mark((function e(){return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee.post("/users/socket",{socketId:t.id},te());case 1:case"end":return e.stop()}}),e)})))),t.on("recipientOnlineChanges",(function(e){Le.dispatch(Rt([].concat(Object(Tt.a)(Le.getState().messageState.recipientOnlineChanges),[e])))})),t.on("disconnect",Object(At.a)(Lt.a.mark((function e(){return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee.delete("/users/socket",te());case 1:case"end":return e.stop()}}),e)})))),t.on("newMessage",(function(e){Le.dispatch(zt([].concat(Object(Tt.a)(Le.getState().messageState.newMessages),[e]))),e.authoredUserId!==Le.getState().userState.userId&&Le.dispatch(Ht(Object(Pt.a)({},Le.getState().userState,{hasUnreadMessages:!0})))})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();const qt=(e,t)=>{if(e)return t;throw new Error},Jt=async()=>{const{data:{userInfo:e,success:t}}=await ee.get("/users/user_info",te());return qt(t,e)},Kt=(e,t,r,o)=>{e&&!t&&r(o+1)},Xt=e=>({type:"IS_LOGGED_IN",isLoggedIn:e});var Qt=r(383),Zt=r.n(Qt);const er=async(e,t)=>{try{Zt()();const r=await(async()=>{const{data:{assets:e,success:t}}=await ee.get("/users/assets",te());return qt(t,e)})();t(We(r));const o=await(async()=>{if(localStorage.getItem("sessionToken")){const{data:{validUser:e}}=await ee.get("/users/verify_session_token",te());return e}throw new Error})();return t(Xt(o)),o&&(await Gt(),t(Ht(await Jt()))),!0}catch(r){return!1}finally{e(!0)}};var tr=r(7);const rr=w.b.div`
  margin-top: 0.8rem;
`,or=w.b.h1`
  margin-bottom: 2rem;
  font-size: 3.4rem;
`,ar=w.b.div`
  margin-bottom: 3rem;
  font-size: 1.6rem;
`,ir=w.b.div`
  display: grid;
  grid-row-gap: 1.6rem;
  margin-bottom: 2.2rem;
`,nr=w.b.span`
  color: var(--primary-color);
  cursor: pointer;
`,lr=w.b.div`
  text-align: center;

  ${y(h)} {
    width: 50%;
  }
`,sr=w.b.div`
  display: grid;
  grid-row-gap: 2.4rem;
`,mr=w.a`
  color: grey;
  font-size: 1.4rem;
`,cr=w.b.span`
  ${mr};
  text-decoration: underline;
  cursor: pointer;
`,ur=w.b.p`
  ${mr};
`,_r=w.b.span`
  margin-bottom: 6rem;
`,dr=w.b.div`
  margin-top: 1.4rem;
  ${Object(k.a)("center")`
     text-align: center;
  `};
`,br=w.b.form`
  width: 100%;
  display: grid;
  grid-row-gap: 2.4rem;
  text-align: left;
  margin-bottom: 3rem;
`;const fr=w.b.label`
  display: block;
  font-family: "Bold";
  margin-bottom: 1rem;

  ${Object(k.a)("textLabel")`
         margin-bottom: .6rem;
    `};

  ${Object(k.a)("extraLabelSpace")`
         margin-bottom: 1.4rem;
    `};
`;class Nr extends a.a.Component{render(){return a.a.createElement(fr,{extraLabelSpace:this.props.extraLabelSpace,textLabel:this.props.textLabel,htmlFor:this.props.for,__self:this,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\InputLabel.jsx",lineNumber:22,columnNumber:7}}," ",this.props.label," ")}}var pr=Nr;const vr=w.b.p`
  margin-top: .6rem;
  font-size: 1.25rem;
  color: var(--red-error-color);
  
   ${Object(k.a)("loginSignUpError")`
      margin-bottom: 2rem;
      margin-top: -1rem;
  `};
`;var gr=e=>a.a.createElement(vr,{loginSignUpError:e.loginSignUpError,__self:void 0,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\InputError.jsx",lineNumber:17,columnNumber:5}},e.error);const hr=w.a`
  display: block;
  border-radius: 2px;
  border: 1px solid #cbcbcb;
  padding: 1.2rem;
  transition: all .2s linear;
  background-color: white;
  font-size: 1.5rem;
  width: 100%;
  
  &:focus {
    border: 1px solid var(--primary-color);
    box-shadow: var(--inner-box-shadow);
  }
`,Er=w.b.input`
  ${hr}
  
   ${Object(k.a)("reducedWidth")`
     width: 80%;
  `};
   
    ${Object(k.a)("customWidth")`
     width: ${e=>e.customWidth};
  `};
   
   ${Object(k.a)("homeSearch")`
       border: none;
       height: 100%;
       font-size: 1.5rem
       
       &:focus {
         border: none;
         box-shadow: none;
       }
   `};
`,yr=w.b.div`
  border-left: 1px solid var(--input-border-color);
  border-right: 1px solid var(--input-border-color);
  border-bottom: 1px solid var(--input-border-color);
  transform: translateY(-2px);
  background-color: white;
  z-index: 10;
  
   ${Object(k.a)("homeSearch")`
       position: absolute;
       transform: translateY(0px);
       left: 0;
       right: 0;
  `};
  
  
`,wr=w.b.div`
  font-size: 1.3rem;
  padding: 1rem 1.4rem;
  cursor: pointer;
   
  &:hover {
   background-color: #f8f8f8;
  }
`;var kr="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\TextInput.jsx";var Sr=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:kr,lineNumber:8,columnNumber:5}},a.a.createElement(pr,{for:e.input.name,label:e.label,__self:void 0,__source:{fileName:kr,lineNumber:9,columnNumber:7}}),a.a.createElement(Er,Object.assign({customWidth:e.customWidth},e.input,{__self:void 0,__source:{fileName:kr,lineNumber:10,columnNumber:7}})),e.meta.touched&&e.meta.invalid&&a.a.createElement(gr,{error:e.meta.error,__self:void 0,__source:{fileName:kr,lineNumber:12,columnNumber:9}})),Or="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\FormSubmitContainer.jsx";var xr=({submitting:e,error:t,onClick:r})=>a.a.createElement(rr,{__self:void 0,__source:{fileName:Or,lineNumber:8,columnNumber:3}},a.a.createElement(Ct,{stretch:!0,onClick:r,type:"submit",insideButtonLoading:!0,loading:e,buttonText:"Submit",__self:void 0,__source:{fileName:Or,lineNumber:9,columnNumber:5}}),a.a.createElement(dr,{center:!0,__self:void 0,__source:{fileName:Or,lineNumber:17,columnNumber:5}},a.a.createElement(gr,{error:t,__self:void 0,__source:{fileName:Or,lineNumber:18,columnNumber:7}}))),jr=r(36);const Cr=async(e,t,r,o)=>{try{const{data:{success:a,error:i,token:n}}=await ee.post(e,t);if(!a)throw console.log(i),new Error(i);await o(n,r)}catch(a){return{[jr.a]:a.message?a.message:"Something went wrong"}}},Ir=async(e,t,r,o)=>{try{const{data:{success:o,token:a}}=await ee.post(e,t);if(!o)throw new Error;Dr(a,r)}catch(a){o("Something went wrong. Please try again later.")}},Dr=async(e,t)=>{localStorage.setItem("sessionToken",e),Be(),await Jt,t(Ht(await Jt())),t(Xt(!0)),t(lt(!1)),t(nt(!1))};var Pr=r(74),Tr=r.n(Pr),Mr=r(384),Lr=r.n(Mr),Ar=r(109);const $r=(e="")=>Tr.a.isEmail(e)?void 0:"Email must be valid",Wr=(e="",t,r={})=>{const o=Object(Ar.a)(t);if(!r.allowBlank){const{min:t,max:a}=r.length;return Tr.a.isLength(e,{min:t})?Tr.a.isLength(e,{max:a})?void 0:`${o} cannot be more than ${a} characters long`:`${o} must be at least ${t} characters long`}},Br=(e="",t)=>e&&!Tr.a.isEmpty(e,{ignore_whitespace:!0})?void 0:Lr()(t)?Object.keys(t)[0]+" cannot be blank":Object(Ar.a)(t)+" cannot be blank",Ur=(e="",t,r={})=>t[r.currentPassword]===t[r.passwordConfirm]?void 0:"Passwords do not match",Yr=([e,t,r],o,a)=>{r&&o.formState.values[t]===e?a.changeValue(o,t,()=>null):a.changeValue(o,t,()=>e)},Rr=([e,t],r,o)=>{o.changeValue(r,t,(t=[])=>{const r=t.findIndex(t=>t===e);return-1===r?t.push(e):t.splice(r,1),t})};var zr="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\LoginForm.jsx",Fr=function(){var e={},t=Object(l.c)();return a.a.createElement(tr.b,{onSubmit:function(e){return Cr("/users/login",e,t,Dr)},initialValues:e,render:function(e){var t=e.handleSubmit,r=e.submitting,o=e.submitError;return a.a.createElement(br,{onSubmit:t,__self:void 0,__source:{fileName:zr,lineNumber:31,columnNumber:9}},a.a.createElement(tr.a,{name:"email",component:Sr,label:"Email",type:"email",validate:$r,__self:void 0,__source:{fileName:zr,lineNumber:32,columnNumber:11}}),a.a.createElement(tr.a,{name:"password",component:Sr,label:"Password",type:"password",validate:function(e,t,r){return Br(e,r.name)},__self:void 0,__source:{fileName:zr,lineNumber:40,columnNumber:11}}),a.a.createElement(xr,{type:"submit",error:o,submitting:r,__self:void 0,__source:{fileName:zr,lineNumber:48,columnNumber:11}}))},__self:void 0,__source:{fileName:zr,lineNumber:25,columnNumber:5}})};const Vr={min:3,max:50},Hr={min:6,max:50},Gr={min:3,max:120},qr={min:10,max:2e3},Jr={min:6,max:100},Kr={min:20,max:4e3},Xr={min:3,max:100},Qr=(e,t={})=>{const r={length:{min:e.min,max:e.max}};return t.allowBlank&&(r.allowBlank=!0),r};var Zr="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\SignupForm.jsx",eo=function(){var e=Object(l.c)();return a.a.createElement(tr.b,{onSubmit:function(t){return Cr("/users/sign_up",t,e,Dr)},initialValues:{name:"",email:"",password:"",passwordConfirm:""},render:function(e){var t=e.handleSubmit,r=e.submitting,o=e.submitError;return a.a.createElement(br,{id:"signUpForm",onSubmit:t,__self:void 0,__source:{fileName:Zr,lineNumber:38,columnNumber:9}},a.a.createElement(tr.a,{name:"name",component:Sr,type:"text",validate:function(e,t,r){return Wr(e,r.name,Qr(Vr))},label:"Name",__self:void 0,__source:{fileName:Zr,lineNumber:39,columnNumber:11}}),a.a.createElement(tr.a,{name:"email",component:Sr,type:"email",validate:$r,label:"Email",__self:void 0,__source:{fileName:Zr,lineNumber:49,columnNumber:11}}),a.a.createElement(tr.a,{name:"password",component:Sr,type:"password",validate:function(e,t,r){return Wr(e,r.name,Qr(Hr))},label:"Password",__self:void 0,__source:{fileName:Zr,lineNumber:57,columnNumber:11}}),a.a.createElement(tr.a,{name:"passwordConfirm",component:Sr,type:"password",validate:function(e,t){return Ur(e,t,{currentPassword:"password",passwordConfirm:"passwordConfirm"})},label:"Confirm Password",__self:void 0,__source:{fileName:Zr,lineNumber:71,columnNumber:11}}),a.a.createElement(xr,{type:"submit",error:o,submitting:r,__self:void 0,__source:{fileName:Zr,lineNumber:84,columnNumber:11}}))},__self:void 0,__source:{fileName:Zr,lineNumber:32,columnNumber:5}})};const to=w.b.p`
  margin-bottom: 5rem;

  ${Object(k.a)("smallBottomSpace")`
       margin-bottom: 3rem;
  `};

  ${Object(k.a)("noBottomMargin")`
       margin-bottom: 0rem;
  `};
`,ro=w.b.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
`,oo=w.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${Object(k.a)("fixed")`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
  
  ${Object(k.a)("fillPage")`
       height: calc(100vh - ${e=>e.navbarHeight}px);
  `}
  
  ${Object(k.a)("flexDirectionRow")`
        flex-direction: row;
  `}
  
   ${Object(k.a)("fillContentPage")`
    justify-content: center;
   `}
 
   ${Object(k.a)("vertical")`
    justify-content: center;
  `}
   
   ${Object(k.a)("w100")`
    width: 100%
  `}
   
    ${Object(k.a)("textCenter")`
        text-align: center;
  `}
   
   ${Object(k.a)("mtAuto")`
    margin-top: auto;
  `}
   
    ${Object(k.a)("h100")`
    height: 100%
  `}
`;var ao="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\EmailLoginSignupController.jsx";var io=e=>{const t=Object(l.d)(({loginSignUpState:e})=>e),r=Object(l.c)(),o=()=>{r(ot(!1)),r(at(!1))};return a.a.createElement(oo,{__self:void 0,__source:{fileName:ao,lineNumber:47,columnNumber:5}},a.a.createElement(ro,{__self:void 0,__source:{fileName:ao,lineNumber:48,columnNumber:7}},e.title),a.a.createElement(to,{__self:void 0,__source:{fileName:ao,lineNumber:49,columnNumber:7}}," ",e.details," "),t.isEmailLoginOpen&&a.a.createElement(Fr,{__self:void 0,__source:{fileName:ao,lineNumber:51,columnNumber:45}}),t.isEmailSignUpOpen&&a.a.createElement(eo,{__self:void 0,__source:{fileName:ao,lineNumber:52,columnNumber:46}}),a.a.createElement(sr,{__self:void 0,__source:{fileName:ao,lineNumber:54,columnNumber:7}},t.isEmailLoginOpen&&a.a.createElement(nr,{onClick:()=>{r(it(!0)),o()},__self:void 0,__source:{fileName:ao,lineNumber:56,columnNumber:11}}," ","Forgot password?"," "),a.a.createElement("span",{__self:void 0,__source:{fileName:ao,lineNumber:61,columnNumber:9}}," ",e.switchLoginMethodTitle,a.a.createElement(nr,{onClick:()=>{t.isEmailLoginOpen?(r(ot(!1)),r(at(!0))):(r(ot(!0)),r(at(!1)))},__self:void 0,__source:{fileName:ao,lineNumber:64,columnNumber:11}}," ",e.switchLoginMethodBtn," ")),a.a.createElement(nr,{onClick:o,__self:void 0,__source:{fileName:ao,lineNumber:69,columnNumber:9}}," ","\u2190 All login in options."," ")))},no=r(385),lo=r.n(no),so=r(386),mo=r.n(so),co="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\LoginSignUpButton.jsx";const uo=w.b.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`,_o=w.b.button`
  ${Ke};
  background-color: transparent;
  border: 1px solid var(--input-border-color);
  color: black;
  display: flex;
  align-items: center;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #f5f5f5;
  }
`;var bo=e=>a.a.createElement(_o,{onClick:e.onClick,__self:void 0,__source:{fileName:co,lineNumber:27,columnNumber:5}},a.a.createElement(uo,{src:e.buttonImage,__self:void 0,__source:{fileName:co,lineNumber:28,columnNumber:7}}),a.a.createElement("span",{__self:void 0,__source:{fileName:co,lineNumber:29,columnNumber:7}}," ",e.buttonText," "));const fo=["Subway","Bus","Parking","Train","Bike Parking","Boat","Airport"],No=["Office","Warehouse","Retail","Industrial"],po=["Fraud or Scam","Hate Speech","Copyright Infringement","Spam","Violence","Threatening","Inappropriate"],vo=["Title","Description","Space","Cost","Location","Type","Transit","Summary"];var go="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\GoogleLogin.jsx";var ho=e=>{const t=Object(l.c)();return a.a.createElement(lo.a,{clientId:"462069596826-5vf73hd6ubnubici9qrrd4sdeqdv2bin.apps.googleusercontent.com",render:t=>a.a.createElement(bo,{onClick:t.onClick,buttonImage:mo.a,buttonText:e.btnText+" with Google",__self:void 0,__source:{fileName:go,lineNumber:24,columnNumber:9}}),onSuccess:r=>Ir("/users/google_login",{tokenId:r.tokenId},t,e.setError),onFailure:e=>{console.log(e)},cookiePolicy:"single_host_origin",__self:void 0,__source:{fileName:go,lineNumber:21,columnNumber:5}})},Eo=r(387),yo=r.n(Eo),wo=r(388),ko=r.n(wo),So="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\login_methods\\FacebookLogin.jsx";var Oo=e=>{const t=Object(l.c)();return a.a.createElement(yo.a,{appId:"463423911265947",autoLoad:!1,fields:"name,email,picture.width(400).height(400)",callback:r=>Ir("/users/facebook_login",{facebookResponse:r},t,e.setError),render:t=>a.a.createElement(bo,{onClick:t.onClick,buttonImage:ko.a,buttonText:e.btnText+" with Facebook",__self:void 0,__source:{fileName:So,lineNumber:26,columnNumber:9}}),__self:void 0,__source:{fileName:So,lineNumber:13,columnNumber:5}})},xo=r(389),jo=r.n(xo),Co="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\LoginSignUpTermsPrivacyContainer.jsx";var Io=()=>{const e=Object(l.c)(),t=Object(m.f)(),r=Object(l.d)(({loginSignUpState:{isLoginOpen:e}})=>e),o=r=>{e(lt(!1)),e(nt(!1)),t.push(r)};return a.a.createElement(ur,{__self:void 0,__source:{fileName:Co,lineNumber:26,columnNumber:5}},"By signing ",r?"in":"up"," your are accepting our ",a.a.createElement("br",{__self:void 0,__source:{fileName:Co,lineNumber:27,columnNumber:74}})," ",a.a.createElement(cr,{onClick:()=>o("terms-of-service"),__self:void 0,__source:{fileName:Co,lineNumber:28,columnNumber:7}},"Terms of Service")," ","&"," ",a.a.createElement(cr,{onClick:()=>o("privacy-policy"),__self:void 0,__source:{fileName:Co,lineNumber:32,columnNumber:7}},"Privacy Policy"))},Do="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\LoginSignUpButtonsContainer.jsx";var Po=e=>{const t=Object(l.d)(({loginSignUpState:e})=>e),[r,i]=Object(o.useState)(""),n=Object(l.c)();return a.a.createElement(oo,{__self:void 0,__source:{fileName:Do,lineNumber:51,columnNumber:5}},a.a.createElement(or,{__self:void 0,__source:{fileName:Do,lineNumber:52,columnNumber:7}},e.title),a.a.createElement(ar,{__self:void 0,__source:{fileName:Do,lineNumber:53,columnNumber:7}}," ",e.message," "),a.a.createElement(ir,{__self:void 0,__source:{fileName:Do,lineNumber:55,columnNumber:7}},a.a.createElement(ho,{btnText:t.isLoginOpen?"Login":"Sign up",setError:i,__self:void 0,__source:{fileName:Do,lineNumber:56,columnNumber:9}}),a.a.createElement(Oo,{btnText:t.isLoginOpen?"Login":"Sign up",setError:i,__self:void 0,__source:{fileName:Do,lineNumber:60,columnNumber:9}}),a.a.createElement(bo,{onClick:()=>{t.isLoginOpen?n(ot(!0)):n(at(!0))},buttonImage:jo.a,buttonText:(t.isLoginOpen?"Login":"Sign up")+" with Email",__self:void 0,__source:{fileName:Do,lineNumber:64,columnNumber:9}})),a.a.createElement(gr,{loginSignUpError:!0,error:r,__self:void 0,__source:{fileName:Do,lineNumber:73,columnNumber:7}}),a.a.createElement(_r,{__self:void 0,__source:{fileName:Do,lineNumber:75,columnNumber:7}}," ",e.switchModeTitle,a.a.createElement(nr,{onClick:()=>{t.isLoginOpen?(n(nt(!0)),n(lt(!1))):(n(nt(!1)),n(lt(!0)))},__self:void 0,__source:{fileName:Do,lineNumber:78,columnNumber:9}}," ",e.switchModeBtnText," ")),a.a.createElement(Io,{__self:void 0,__source:{fileName:Do,lineNumber:84,columnNumber:7}}))};w.b.div`
  margin-bottom: 5rem;
`;const To=w.b.img`
  width: 2.5rem;
  margin-right: 1rem;
`,Mo=w.b.div`
  display: flex;
  align-items: center;
  
  ${Object(k.a)("center")`
    justify-content: center;
  `};
  
   ${Object(k.a)("largeMarginBottom")`
      margin-bottom: 5rem;
  `};
`;var Lo=r(390),Ao=r.n(Lo),$o="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\alerts\\SuccessMessage.jsx";var Wo=e=>a.a.createElement(Mo,{largeMarginBottom:e.largeMarginBottom,__self:void 0,__source:{fileName:$o,lineNumber:6,columnNumber:5}},a.a.createElement(To,{src:Ao.a,alt:"success icon",__self:void 0,__source:{fileName:$o,lineNumber:7,columnNumber:9}}),a.a.createElement("div",{__self:void 0,__source:{fileName:$o,lineNumber:8,columnNumber:9}}," ",e.message)),Bo="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\forogotPassword\\ForgotPasswordForm.jsx";var Uo=e=>{const[t,r]=Object(o.useState)(!1),i=Object(l.c)(),n=()=>{r(!0)};return a.a.createElement(oo,{__self:void 0,__source:{fileName:Bo,lineNumber:39,columnNumber:5}},a.a.createElement(ro,{__self:void 0,__source:{fileName:Bo,lineNumber:40,columnNumber:7}},"Forgot Password"),a.a.createElement(to,{__self:void 0,__source:{fileName:Bo,lineNumber:41,columnNumber:7}}," ","Please enter the email address associated with your account and we will send you a link to reset to your password."," "),!t&&a.a.createElement(tr.b,{onSubmit:t=>Cr("/users/forgot_password",t,e,n),initialValues:{},render:({handleSubmit:e,submitting:t,submitError:r})=>a.a.createElement(br,{id:"forgotPasswordForm",onSubmit:e,__self:void 0,__source:{fileName:Bo,lineNumber:54,columnNumber:13}},a.a.createElement(tr.a,{name:"email",component:Sr,label:"Email",type:"email",validate:$r,__self:void 0,__source:{fileName:Bo,lineNumber:55,columnNumber:15}}),a.a.createElement(xr,{type:"submit",error:r,submitting:t,__self:void 0,__source:{fileName:Bo,lineNumber:63,columnNumber:15}})),__self:void 0,__source:{fileName:Bo,lineNumber:48,columnNumber:9}}),t&&a.a.createElement(Wo,{center:!0,largeMarginBottom:!0,message:"Your password reset email was successfully sent",__self:void 0,__source:{fileName:Bo,lineNumber:74,columnNumber:9}}),a.a.createElement(nr,{onClick:()=>{i(it(!1)),i(ot(!0))},__self:void 0,__source:{fileName:Bo,lineNumber:81,columnNumber:7}}," ","\u2190 login with email"," "))},Yo=r(141),Ro=r.n(Yo),zo=r(391),Fo=r.n(zo),Vo="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\forogotPassword\\ResetPasswordForm.jsx";var Ho=Object(l.b)(null,{isForgotPasswordOpen:it,isResetPasswordOpen:st,isEmailLoginOpen:ot})(e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)(!1),{validUntil:l,token:s}=Ro.a.parse(window.location.search);Object(o.useEffect)(()=>{Fo()().diff(l,"m")<0&&r(!0)},[t]);const m=()=>{n(!0)},c={};return a.a.createElement("div",{__self:void 0,__source:{fileName:Vo,lineNumber:66,columnNumber:5}},t&&a.a.createElement(oo,{__self:void 0,__source:{fileName:Vo,lineNumber:68,columnNumber:9}},a.a.createElement(ro,{__self:void 0,__source:{fileName:Vo,lineNumber:69,columnNumber:11}},"Reset Password"),a.a.createElement(to,{__self:void 0,__source:{fileName:Vo,lineNumber:70,columnNumber:11}}," Please enter your new password below. "),t&&!i&&a.a.createElement(tr.b,{onSubmit:t=>Cr("/users/reset_password",{...t,token:s},e,m),initialValues:c,render:({handleSubmit:e,submitting:t,submitError:r})=>a.a.createElement(br,{id:"resetPasswordForm",onSubmit:e,__self:void 0,__source:{fileName:Vo,lineNumber:87,columnNumber:17}},a.a.createElement(tr.a,{name:"password",component:Sr,type:"password",validate:(e,t,r)=>Wr(e,r.name,Qr(Hr)),label:"Password",__self:void 0,__source:{fileName:Vo,lineNumber:88,columnNumber:19}}),a.a.createElement(tr.a,{name:"passwordConfirm",component:Sr,type:"password",validate:(e,t)=>Ur(e,t,{currentPassword:"password",passwordConfirm:"passwordConfirm"}),label:"Confirm Password",__self:void 0,__source:{fileName:Vo,lineNumber:102,columnNumber:19}}),a.a.createElement(xr,{type:"submit",error:r,submitting:t,__self:void 0,__source:{fileName:Vo,lineNumber:115,columnNumber:19}})),__self:void 0,__source:{fileName:Vo,lineNumber:73,columnNumber:13}})),!t&&a.a.createElement(oo,{__self:void 0,__source:{fileName:Vo,lineNumber:128,columnNumber:9}},a.a.createElement(ro,{__self:void 0,__source:{fileName:Vo,lineNumber:129,columnNumber:11}},"Link Expired"),a.a.createElement(to,{smallBottomSpace:!0,__self:void 0,__source:{fileName:Vo,lineNumber:130,columnNumber:11}}," ","The password reset link has expired. To request another link, please enter your email again in the forgot password section."," "),a.a.createElement(Ct,{buttonText:"Return to Forgot Password",onClick:()=>{e.isForgotPasswordOpen(!0),e.isResetPasswordOpen(!1)},__self:void 0,__source:{fileName:Vo,lineNumber:135,columnNumber:11}})),i&&a.a.createElement(oo,{__self:void 0,__source:{fileName:Vo,lineNumber:143,columnNumber:9}},a.a.createElement(Wo,{message:"Your password has been reset",largeMarginBottom:!0,center:!0,__self:void 0,__source:{fileName:Vo,lineNumber:144,columnNumber:11}})),t&&a.a.createElement(oo,{__self:void 0,__source:{fileName:Vo,lineNumber:153,columnNumber:9}},a.a.createElement(nr,{onClick:()=>{e.isResetPasswordOpen(!1),e.isEmailLoginOpen(!0)},__self:void 0,__source:{fileName:Vo,lineNumber:154,columnNumber:11}}," ","\u2190 login with email"," ")))}),Go="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\LoginSignUpControls.jsx";var qo=e=>{const t=Object(l.d)(({loginSignUpState:e})=>e);return a.a.createElement("div",{__self:void 0,__source:{fileName:Go,lineNumber:14,columnNumber:5}},!t.isForgotPasswordOpen&&!t.isEmailLoginOpen&&!t.isEmailSignUpOpen&&!t.isResetPasswordOpen&&a.a.createElement(Po,{title:e.title,message:e.message,switchModeTitle:e.switchModeTitle,switchModeBtnText:e.switchModeBtnText,__self:void 0,__source:{fileName:Go,lineNumber:19,columnNumber:11}}),t.isEmailLoginOpen&&a.a.createElement(io,{title:"Sign in with Email",details:"Enter your email address and password below",switchLoginMethodTitle:"No account?",switchLoginMethodBtn:"Create one",__self:void 0,__source:{fileName:Go,lineNumber:28,columnNumber:9}}),t.isEmailSignUpOpen&&a.a.createElement(io,{title:"Sign up with Email",details:"Please fill out the information below",switchLoginMethodTitle:"Have an account?",switchLoginMethodBtn:"Sign in",__self:void 0,__source:{fileName:Go,lineNumber:37,columnNumber:9}}),t.isForgotPasswordOpen&&!t.isResetPasswordOpen&&a.a.createElement(Uo,{__self:void 0,__source:{fileName:Go,lineNumber:46,columnNumber:50}}),t.isResetPasswordOpen&&a.a.createElement(Ho,{__self:void 0,__source:{fileName:Go,lineNumber:48,columnNumber:48}}))},Jo="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\login_signup\\LoginSignUp.jsx";var Ko=()=>{const e=Object(l.d)(({loginSignUpState:e})=>e);return a.a.createElement(oo,{__self:void 0,__source:{fileName:Jo,lineNumber:13,columnNumber:5}},a.a.createElement(lr,{__self:void 0,__source:{fileName:Jo,lineNumber:14,columnNumber:7}},e.isLoginOpen&&a.a.createElement(qo,{title:"Welcome Back",message:"Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.",switchModeTitle:"No Account?",switchModeBtnText:"Create One",__self:void 0,__source:{fileName:Jo,lineNumber:16,columnNumber:11}}),e.isSignUpOpen&&a.a.createElement(qo,{title:"Join Spekkly",message:"Sign up to get personalized story recommendations, follow authors and topics you love, and interact with stories.",switchModeTitle:"Have an account?",switchModeBtnText:"Sign in",__self:void 0,__source:{fileName:Jo,lineNumber:25,columnNumber:11}})))},Xo=r(392),Qo=r.n(Xo);const Zo=w.b.div`
  ${Object(k.a)("blurBackground")`
     filter: blur(4px);
  `}
`,ea=w.c`
  from {transform: scale(0);}
  to {transform: scale(1);}
`,ta=w.b.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.86);
  animation: ${ea} 0.1s linear forwards;
  display: flex;
  justify-content: center;
  align-items: center;
`,ra=w.b.div`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: auto;
  padding: 3rem;
  position: relative;
  animation: ${ea} 0.05s linear;
  overflow: scroll;

  ${Object(k.a)("stretch")`
    width: 40%;
    height: 50%;
    overflow: scroll;
  `}

  ${Object(k.a)("large")`
    width: 80%;
    max-width: 80%;
    padding: 6rem 10rem;
  `}
   
   ${Object(k.a)("medium")`
    width: 60%;
    max-width: 60%;
    padding: 10rem;
  `}
   
  ${y(h)} {
    max-height: 80vh;
    min-width: 20%;
    max-width: 200rem;
  }

  ${y(E)} {
    padding: 14rem;
  }

  ${y(p)} {
    max-width: 100%;
    width: 90%;
    padding: 8rem 6rem;
    height: calc(94vh - var(--vh-offset, 0px));
  }

  ${y(f)} {
    padding: 8rem 4rem;
  }
`,oa=w.b.h1`
  font-size: 3rem;
  margin-bottom: 1.4rem;
`,aa=w.b.p`
  margin-bottom: 3rem;
`,ia=w.b.div`
  margin-bottom: 2rem;
`,na=w.b.div`
  margin-bottom: 2rem;
`,la=w.b.img`
  width: 1.5rem;
  height: 1.5rem;
`,sa=w.b.button`
  padding: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`,ma=e=>({type:"BLUR_BACKGROUND",blurBackground:e});var ca="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\modals\\Modal.jsx";var ua=e=>{const t=Object(l.d)(({assetState:{BLACK_X_ICON:e}})=>e),r=Object(l.c)();return bt(),Object(o.useEffect)(()=>(r(ma(!0)),()=>{r(ma(!1))}),[]),a.a.createElement(dt.a,{__self:void 0,__source:{fileName:ca,lineNumber:33,columnNumber:5}},a.a.createElement(ta,{className:e.outsideClickIgnoreClass,onClick:t=>((e,t)=>{t&&e.target===e.currentTarget&&(e.preventDefault(),t())})(t,e.closeModal),__self:void 0,__source:{fileName:ca,lineNumber:34,columnNumber:7}},a.a.createElement(ra,{large:e.large,medium:e.medium,__self:void 0,__source:{fileName:ca,lineNumber:38,columnNumber:9}},e.showCloseButton&&a.a.createElement(sa,{onClick:e.closeModal,__self:void 0,__source:{fileName:ca,lineNumber:40,columnNumber:13}},a.a.createElement(la,{src:t,__self:void 0,__source:{fileName:ca,lineNumber:41,columnNumber:15}})),e.children)))},_a=r(13);const da=w.b.div`
  display: flex;
  padding: 1.4rem;
  align-items: center;

  ${Object(k.a)("active")`
      background-color: white;
      border-left: 4px solid var(--primary-color);
      box-shadow: var(--light-shadow);
    `};

  ${Object(k.a)("clickable")`
      cursor: pointer;
    `};

  ${Object(k.a)("hoverable")`
      transition: background-color .1s linear;
      &:hover {
        background-color: var(--background-color-highlighted);
      }
     `};
`,ba=w.b.span`
  color: #868686 ${Object(k.c)("active","completed")`
      color: black;
    `};
`,fa=w.b.img`
  height: 1.6rem;
  width: 1.6rem;
  margin-left: auto;
`;var Na=r(393),pa=r.n(Na),va="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\create_post\\CreatePostNavItems.jsx";var ga=Object(l.b)(({createPostState:e})=>({activeNavIndex:e.activeNavIndex}))(e=>a.a.createElement("div",{__self:void 0,__source:{fileName:va,lineNumber:9,columnNumber:5}},vo.map((t,r)=>a.a.createElement(da,{key:t.toLowerCase(),active:e.activeNavIndex===r,__self:void 0,__source:{fileName:va,lineNumber:11,columnNumber:13}},a.a.createElement(ba,{completed:e.activeNavIndex>r,active:e.activeNavIndex===r,__self:void 0,__source:{fileName:va,lineNumber:13,columnNumber:17}}," ",t),e.completed?a.a.createElement(fa,{src:pa.a,__self:void 0,__source:{fileName:va,lineNumber:16,columnNumber:36}}):""))));const ha=w.b.h1`
  text-align: center;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  font-size: 1.8rem;
  border-bottom: var(--box-border);
  background-color: white;

  ${Object(k.a)("emptyConversation")`
     height: 6rem;
  `}
`;var Ea=e=>a.a.createElement(ha,{emptyConversation:e.emptyConversation,__self:void 0,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\headings\\ViewBoxHeading.jsx",lineNumber:19,columnNumber:3}}," ",e.heading," "),ya="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\TextArea.jsx";const wa=w.b.textarea`
  ${hr};
  resize: none;
  min-height: 20rem;
  width: 100%;
`;var ka=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:ya,lineNumber:16,columnNumber:5}},a.a.createElement(pr,{for:e.name,label:e.label,__self:void 0,__source:{fileName:ya,lineNumber:17,columnNumber:7}}),a.a.createElement(wa,Object.assign({},e.input,{type:"text",__self:void 0,__source:{fileName:ya,lineNumber:18,columnNumber:7}})),e.meta.touched&&e.meta.invalid&&a.a.createElement(gr,{error:e.meta.error,__self:void 0,__source:{fileName:ya,lineNumber:20,columnNumber:9}})),Sa=r(111),Oa="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\NumberInput.jsx";const xa=w.b.input`
  ${hr};
  padding: 1rem;
  width: 100%;
  direction: rtl;
  font-size: 1.4rem;

  ${Object(k.a)("borderNone")`
        border: none;
    `};
`,ja=w.b.div`
  position: relative;
`,Ca=w.b.span`
  position: absolute;
  top: 25%;
  left: 10px;
  font-size: 1.4rem;
`;var Ia=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:Oa,lineNumber:32,columnNumber:5}},a.a.createElement(ja,{__self:void 0,__source:{fileName:Oa,lineNumber:33,columnNumber:7}},a.a.createElement(xa,Object.assign({placeholder:e.placeholder,"data-lpignore":"true",borderNone:e.borderNone},e.input,{__self:void 0,__source:{fileName:Oa,lineNumber:34,columnNumber:9}})),a.a.createElement(Ca,{__self:void 0,__source:{fileName:Oa,lineNumber:40,columnNumber:9}},e.inputLabel))),Da=(r(394),"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\InputRange.jsx");function Pa(){var e=Object(Sa.a)(["\n      width: 100%;\n  "]);return Pa=function(){return e},e}function Ta(){var e=Object(Sa.a)(["\n  ",";\n"]);return Ta=function(){return e},e}function Ma(){var e=Object(Sa.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ma=function(){return e},e}function La(){var e=Object(Sa.a)(["\n  margin-left: 1.2rem;\n  margin-right: 1.2rem;\n"]);return La=function(){return e},e}var Aa=w.b.div(La()),$a=w.b.div(Ma()),Wa=w.b.div(Ta(),Object(k.a)("stretch")(Pa())),Ba=function(e){var t=Object(o.useState)(""),r=Object(_a.a)(t,2),i=(r[0],r[1],function(e){return e?e.replace(/,/g,""):void 0}),n=function(t,r){if(!r[e.name]||!r[e.name].min&&!r[e.name].max)return"Min and max ".concat(e.name," cannot be blank");if(!r[e.name].min)return"Min ".concat(e.name," cannot be blank");if(!r[e.name].max)return"Max ".concat(e.name," cannot be blank");var o=/^\d+$/.test(r[e.name].min),a=/^\d+$/.test(r[e.name].max);return o&&a?parseInt(i(r[e.name].min.toString()))>=parseInt(i(r[e.name].max.toString()))?"Min ".concat(e.name," must be less than max ").concat(e.name):void 0:"Input field must be Integer"},l=function(t,r){return a.a.createElement(tr.a,{name:t,component:Ia,borderNone:e.borderNone,placeholder:r,validate:!!e.validation&&n,inputLabel:e.inputLabel,__self:void 0,__source:{fileName:Da,lineNumber:83,columnNumber:5}})};return a.a.createElement("div",{__self:void 0,__source:{fileName:Da,lineNumber:94,columnNumber:5}},a.a.createElement(pr,{extraLabelSpace:!0,label:e.label,__self:void 0,__source:{fileName:Da,lineNumber:95,columnNumber:7}}),a.a.createElement(Wa,{stretch:e.stretch,__self:void 0,__source:{fileName:Da,lineNumber:96,columnNumber:7}},a.a.createElement($a,{__self:void 0,__source:{fileName:Da,lineNumber:97,columnNumber:9}},l("".concat(e.name,".min"),"Min"),a.a.createElement(Aa,{__self:void 0,__source:{fileName:Da,lineNumber:99,columnNumber:11}}," To "),l("".concat(e.name,".max"),"Max"))),e.invalid&&e.touched&&a.a.createElement(gr,{error:e.error,__self:void 0,__source:{fileName:Da,lineNumber:103,columnNumber:42}}))};const Ua=w.b.form`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr .2rem 1fr auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  background-color: white;
  
  ${y(N)} {
     grid-template-columns: 1fr auto;
  }
`,Ya=w.b.div`
  
   background-color: var(--background-color);
   
   ${y(v)} {
      position: sticky;
      top: 0;
      z-index: 1;
      padding: 7rem 0; 
  }
  
  ${y(N)} {
      padding-top: 5rem;
      padding-bottom: 7rem;
  }
`,Ra=w.b.input`
  font-size: 1.5rem;
  border: none;
  padding: 2rem;
  height: 100%;
  width: 100%;
`,za=w.b.div`
  background-color: var(--background-color);
`;var Fa="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\location\\InputLocationPopup.jsx";const Va=e=>(Va.handleClickOutside=e.closeInputLocationSuggestionsPopup,a.a.createElement(yr,{homeSearch:e.homeSearch,__self:void 0,__source:{fileName:Fa,lineNumber:10,columnNumber:5}},e.predictions.map(t=>a.a.createElement(wr,{onClick:()=>e.handleLocationSuggestionClick(t.description),key:t.id,__self:void 0,__source:{fileName:Fa,lineNumber:12,columnNumber:9}}," ",t.description))));Va.prototype={};const Ha={handleClickOutside:()=>Va.handleClickOutside};var Ga=Object(z.a)(Va,Ha),qa="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\location\\InputLocationSuggestions.jsx";var Ja=e=>{const[t,r]=Object(o.useState)(!0),i=e.predictions.map(e=>e.id);return Object(o.useEffect)(()=>{r(!0)},[i.toString()]),a.a.createElement(D,{__self:void 0,__source:{fileName:qa,lineNumber:23,columnNumber:5}},!e.homeSearch&&a.a.createElement(pr,{for:e.name,label:e.label,__self:void 0,__source:{fileName:qa,lineNumber:24,columnNumber:29}}),!e.homeSearch&&a.a.createElement(Er,Object.assign({},e.input,{placeholder:"Location",__self:void 0,__source:{fileName:qa,lineNumber:27,columnNumber:9}})),e.homeSearch&&a.a.createElement(Ra,Object.assign({},e.input,{placeholder:"Location",__self:void 0,__source:{fileName:qa,lineNumber:31,columnNumber:9}})),e.predictions.length>0&&t&&a.a.createElement(Ga,{homeSearch:e.homeSearch,handleLocationSuggestionClick:e.handleLocationSuggestionClick,closeInputLocationSuggestionsPopup:()=>{r(!1)},predictions:e.predictions,__self:void 0,__source:{fileName:qa,lineNumber:35,columnNumber:9}}),(!e.homeSearch&&e.meta.touched||e.submit)&&e.meta.error&&a.a.createElement(gr,{error:e.meta.error,__self:void 0,__source:{fileName:qa,lineNumber:46,columnNumber:29}}))};var Ka=e=>{const[t,r]=Object(o.useState)([]);return a.a.createElement(tr.a,{name:"location",component:Ja,homeSearch:e.homeSearch,label:e.label,parse:e=>(e.length>0?(async e=>{try{const{data:{predictions:t,success:o}}=await ee.get("/api/services/location_suggestions",{params:{value:e}});if(!o)throw new Error;r(t)}catch(t){}})(e):(r([]),setTimeout(()=>r([]),200)),e),validate:!e.homeSearch&&((e,t,r)=>Wr(e,r.name,Qr(Xr))),predictions:t,handleLocationSuggestionClick:t=>{e.setLocation(t,"location"),r([])},__self:void 0,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\location\\InputLocation.jsx",lineNumber:52,columnNumber:5}})};const Xa=w.b.div`
  display: grid;
  grid-row-gap: 4rem;
`,Qa=w.b.div`
  margin-bottom: 1rem;
  font-family: "Bold";
`,Za=w.b.div`
  color: grey;
`,ei=w.b.p`
  line-height: 2.6rem;
`,ti=w.b.div`
  white-space: pre-line;
`,ri=w.b.div`
  font-family: "Bold";

  ${Object(k.a)("clickable")`
    cursor: pointer;
  `}
`,oi=w.b.h1`
  text-align: center;
  font-size: 3.4rem;
  margin-bottom: 5rem;
`;var ai=r(47),ii=r.n(ai),ni="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\create_post\\CreatePostSummary.jsx";const li=w.b.div`
  display: grid;
  grid-row-gap: 1rem;
`;var si=({values:e})=>a.a.createElement(Xa,{__self:void 0,__source:{fileName:ni,lineNumber:13,columnNumber:5}},a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:14,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:15,columnNumber:9}},"Title"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:16,columnNumber:9}},e.title)),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:18,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:19,columnNumber:9}},"Description"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:20,columnNumber:9}},e.description)),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:22,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:23,columnNumber:9}},"Space"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:24,columnNumber:9}},ii.a.get(e,"space.min")," sqft to"," ",ii.a.get(e,"space.max")," sqft")),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:29,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:30,columnNumber:9}},"Cost"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:31,columnNumber:9}},"$",ii.a.get(e,"cost.min")," per month to $",ii.a.get(e,"cost.max")," per month")),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:36,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:37,columnNumber:9}},"Location"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:38,columnNumber:9}},e.location)),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:40,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:41,columnNumber:9}},"Type"),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:42,columnNumber:9}},e.type)),a.a.createElement("div",{__self:void 0,__source:{fileName:ni,lineNumber:44,columnNumber:7}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:ni,lineNumber:45,columnNumber:9}},"Transit Options"),a.a.createElement(li,{__self:void 0,__source:{fileName:ni,lineNumber:46,columnNumber:9}},e.transit&&e.transit.map((e,t)=>a.a.createElement("div",{key:t,__self:void 0,__source:{fileName:ni,lineNumber:49,columnNumber:15}},e))))),mi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\CheckBox.jsx";const ci=w.b.div`
  display: inline-block;
`,ui=w.b.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: var(--background-color);

    ${Object(k.a)("whiteInput")`
      background: white;
    `};
  }

  &:checked + label:before {
    background: var(--primary-color);
  }

  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;var _i=e=>a.a.createElement(ci,{onClick:e.handleToggle,__self:void 0,__source:{fileName:mi,lineNumber:51,columnNumber:3}},a.a.createElement(ui,Object.assign({whiteInput:e.whiteInput,type:e.type},e.input,{__self:void 0,__source:{fileName:mi,lineNumber:52,columnNumber:5}})),a.a.createElement("label",{htmlFor:e.name,__self:void 0,__source:{fileName:mi,lineNumber:57,columnNumber:5}}," ",e.label," ")),di="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\InputOptions.jsx";const bi=w.b.div`
  &:not(:last-child) { 
    margin-bottom: 1.2rem;
  }
`;var fi=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:di,lineNumber:15,columnNumber:5}},a.a.createElement(pr,{for:e.name,label:e.label,__self:void 0,__source:{fileName:di,lineNumber:16,columnNumber:9}}),e.options.map((t,r)=>a.a.createElement(bi,{key:r,__self:void 0,__source:{fileName:di,lineNumber:20,columnNumber:13}},a.a.createElement(tr.a,{name:e.name,label:t,type:e.type,value:t,whiteInput:e.whiteInput,validate:"radio"===e.type&&Br,handleToggle:()=>"radio"===e.type?e.setValue(t,e.name,e.allowNull):e.toggleCheckMark(t,e.name),component:_i,__self:void 0,__source:{fileName:di,lineNumber:21,columnNumber:17}}))));const Ni=e=>({type:"CREATE_POST_ACTIVE_NAV",activeNavIndex:e});var pi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\create_post\\CreatePostButtons.jsx";var vi=Object(l.b)(({createPostState:e})=>({activeNavIndexProp:e.activeNavIndex,currentPageIsValid:e.currentPageIsValid,editPostId:e.editPostId}),{activeNavIndex:Ni})(e=>{const t=Object(m.f)(),r=vo.length-1;return a.a.createElement(I,{__self:void 0,__source:{fileName:pi,lineNumber:26,columnNumber:5}},a.a.createElement(P,{__self:void 0,__source:{fileName:pi,lineNumber:27,columnNumber:7}},a.a.createElement(rt,{buttonText:"Back",rightMargin:!0,onClick:()=>{0===e.activeNavIndexProp?t.push("/"):e.activeNavIndex(e.activeNavIndexProp-1)},__self:void 0,__source:{fileName:pi,lineNumber:28,columnNumber:9}}),e.activeNavIndexProp===r&&a.a.createElement(Ct,{buttonText:"edit"===e.createPostType?"Update Post":"Create Post",rightSideLoading:!0,loading:e.submitting,type:"submit",__self:void 0,__source:{fileName:pi,lineNumber:34,columnNumber:11}}),e.activeNavIndexProp!==r&&a.a.createElement(Ct,{buttonText:"Continue",disabled:e.invalid,disabledColor:e.invalid,onClick:()=>e.activeNavIndex(e.activeNavIndexProp+1),type:"button",__self:void 0,__source:{fileName:pi,lineNumber:44,columnNumber:11}}),a.a.createElement(gr,{error:e.error,__self:void 0,__source:{fileName:pi,lineNumber:53,columnNumber:9}})))}),gi=r(139),hi=function(){var e=Object(At.a)(Lt.a.mark((function e(t,r,o){var a;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"create"!==r.createPostType){e.next=7;break}return e.next=4,ee.post("/posts/create",t,te());case 4:a=e.sent,e.next=11;break;case 7:return t.belongsToUser=t.belongsToUser.id,e.next=10,ee.patch("/posts/".concat(r.postID),t,te());case 10:a=e.sent;case 11:if(!a.data.success){e.next=16;break}o.push("/"),e.next=17;break;case 16:throw new Error;case 17:e.next=22;break;case 19:return e.prev=19,e.t0=e.catch(0),e.abrupt("return",Object(gi.a)({},jr.a,"Login Failed"));case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,r,o){return e.apply(this,arguments)}}(),Ei="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\create_post\\CreatePostInput.jsx",yi=function(e){var t=Object(o.useState)({}),r=Object(_a.a)(t,2),i=r[0],n=r[1],s=Object(o.useState)({}),u=Object(_a.a)(s,2),_=u[0],d=u[1],b=Object(m.f)(),f=Object(l.d)((function(e){return e.createPostState})),N=f.activeNavIndex,p=(f.editPostId,Object(l.d)((function(e){return e.navbarState.navbarHeight}))),v=function(){var t=Object(At.a)(Lt.a.mark((function t(){var r,o;return Lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee.get("/posts/".concat(e.postID));case 3:if(r=t.sent,!(o=r.data)){t.next=9;break}n(o.post),t.next=10;break;case 9:throw new Error;case 10:t.next=14;break;case 12:t.prev=12,t.t0=t.catch(0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){e.createPostType?v():n({})}),[]),a.a.createElement(tr.b,{onSubmit:function(t){return hi(t,e,b)},mutators:{setValue:Yr,toggleCheckMark:Rr},initialValues:i,render:function(t){return a.a.createElement("form",{onSubmit:t.handleSubmit,__self:void 0,__source:{fileName:Ei,lineNumber:65,columnNumber:9}},a.a.createElement(I,{borderBottom:!0,mobileScroll:!0,customMobileSize:!0,height:"calc(100vh - var(--vh-offset, 0px) - ".concat(_,"px - ").concat(p,"px - ").concat(e.headingHeight,"px - 4rem)"),__self:void 0,__source:{fileName:Ei,lineNumber:66,columnNumber:11}},0===N&&a.a.createElement(tr.a,{name:"title",component:Sr,validate:function(e,t,r){return Wr(e,r.name,Qr(Jr))},label:"Choose a title for your post",__self:void 0,__source:{fileName:Ei,lineNumber:73,columnNumber:15}}),1===N&&a.a.createElement(tr.a,{name:"description",component:ka,validate:function(e,t,r){return Wr(e,r.name,Qr(Kr))},label:"Choose a description for your post",__self:void 0,__source:{fileName:Ei,lineNumber:88,columnNumber:15}}),2===N&&a.a.createElement(Ba,{label:"Choose range of space you need",inputLabel:"sqft",name:"space",invalid:t.invalid,error:ii.a.get(t.errors,"space.min"),touched:t.touched["space.min"]&&t.touched["space.max"],validation:!0,__self:void 0,__source:{fileName:Ei,lineNumber:103,columnNumber:15}}),3===N&&a.a.createElement(Ba,{label:"Choose the price per square foot range you would like",inputLabel:"$/mo",name:"cost",invalid:t.invalid,validation:!0,touched:t.touched["space.min"]&&t.touched["space.max"],error:ii.a.get(t.errors,"space.min"),__self:void 0,__source:{fileName:Ei,lineNumber:118,columnNumber:15}}),4===N&&a.a.createElement(Ka,{label:"Choose the location of the property you would like",setLocation:t.form.mutators.setValue,__self:void 0,__source:{fileName:Ei,lineNumber:133,columnNumber:15}}),5===N&&a.a.createElement(fi,{label:"Choose the type of space you need",options:No,type:"radio",setValue:t.form.mutators.setValue,name:"type",__self:void 0,__source:{fileName:Ei,lineNumber:140,columnNumber:15}}),6===N&&a.a.createElement(fi,{label:"Optionally choose any transit options you need",options:fo,type:"checkbox",toggleCheckMark:t.form.mutators.toggleCheckMark,name:"transit",__self:void 0,__source:{fileName:Ei,lineNumber:150,columnNumber:15}}),7===N&&a.a.createElement(si,{values:t.values,__self:void 0,__source:{fileName:Ei,lineNumber:160,columnNumber:15}})),a.a.createElement(c.a,{bounds:!0,onResize:function(e){d(e.bounds.height)},__self:void 0,__source:{fileName:Ei,lineNumber:164,columnNumber:11}},(function(r){var o=r.measureRef;return a.a.createElement("div",{ref:o,__self:void 0,__source:{fileName:Ei,lineNumber:171,columnNumber:15}},a.a.createElement(vi,{createPostType:e.createPostType,submitting:t.submitting,invalid:t.invalid,__self:void 0,__source:{fileName:Ei,lineNumber:172,columnNumber:17}}))})))},__self:void 0,__source:{fileName:Ei,lineNumber:60,columnNumber:5}})},wi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\loading\\Loading.jsx";var ki=e=>{const t=Object(l.d)(({navbarState:{navbarHeight:e}})=>e);return a.a.createElement(oo,{navbarHeight:t,vertical:!0,fillPage:e.fillPage,__self:void 0,__source:{fileName:wi,lineNumber:18,columnNumber:5}},a.a.createElement(vt,{fixed:e.fixed,solidBackground:e.solidBackground,clearBackground:e.clearBackground,__self:void 0,__source:{fileName:wi,lineNumber:19,columnNumber:7}},a.a.createElement(gt,{__self:void 0,__source:{fileName:wi,lineNumber:24,columnNumber:9}},a.a.createElement(Et,{fillPage:e.fillPage,marginBottom:e.marginBottom,navbarHeight:t,__self:void 0,__source:{fileName:wi,lineNumber:25,columnNumber:11}}),e.loadingText&&a.a.createElement(ht,{__self:void 0,__source:{fileName:wi,lineNumber:30,columnNumber:33}},e.loadingText))))},Si="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\containers\\FullScreenBox.jsx";var Oi=e=>{const t=Object(l.d)(({navbarState:{navbarHeight:e}})=>e);return a.a.createElement(oo,{navbarHeight:t,vertical:!0,fillPage:!0,__self:void 0,__source:{fileName:Si,lineNumber:12,columnNumber:5}},a.a.createElement(I,{center:!0,clearBackground:e.clearBackground,customSize:!0,width:"40%",navbarBottomMargin:!0,navbarHeight:t,__self:void 0,__source:{fileName:Si,lineNumber:13,columnNumber:7}},a.a.createElement(oo,{textCenter:!0,__self:void 0,__source:{fileName:Si,lineNumber:21,columnNumber:9}},e.children)))},xi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\notices\\VerifyEmailNotice.jsx";var ji=e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)(!1),[l,s]=Object(o.useState)(""),[m,c]=Object(o.useState)("");return a.a.createElement(Oi,{__self:void 0,__source:{fileName:xi,lineNumber:45,columnNumber:5}},!i&&a.a.createElement("div",{__self:void 0,__source:{fileName:xi,lineNumber:47,columnNumber:9}},t&&a.a.createElement(ki,{__self:void 0,__source:{fileName:xi,lineNumber:48,columnNumber:23}}),a.a.createElement(ro,{__self:void 0,__source:{fileName:xi,lineNumber:49,columnNumber:11}},"Email Verification Required"),a.a.createElement(to,{smallBottomSpace:!0,__self:void 0,__source:{fileName:xi,lineNumber:50,columnNumber:11}}," ",e.text," To verify your email, please click use the verification link we emailed you when you created your account. If you no longer have access to this email, you can send it again by clicking the button below."," "),a.a.createElement(Ct,{buttonText:"Resend Verification Email",onClick:async()=>{let e="",t="";try{r(!1);const{data:{success:o}}=await ee.get("/users/send_verify_account_email",re({hideToken:!0}));if(!o)throw new Error;e="Email Verification Link Sent",t="We've sent you a new link to verify your email. Please check your spam folder and ensure your account email is current if you do not receive this email."}catch{e="Something Went Wrong",t="We were unable to send your email verification link. Please try again later."}finally{r(!1),n(!0),s(e),c(t)}},__self:void 0,__source:{fileName:xi,lineNumber:57,columnNumber:11}})),i&&a.a.createElement("div",{__self:void 0,__source:{fileName:xi,lineNumber:65,columnNumber:9}},a.a.createElement(ro,{__self:void 0,__source:{fileName:xi,lineNumber:66,columnNumber:11}},l),a.a.createElement(to,{noBottomMargin:!0,__self:void 0,__source:{fileName:xi,lineNumber:67,columnNumber:11}},m)))},Ci="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\create_post\\CreatePost.jsx",Ii=Object(l.b)((function(e){return{emailVerified:e.userState.emailVerified}}),{formType:e=>({type:"FORM_TYPE",formType:e})})((function(e){var t=Object(o.useState)(""),r=Object(_a.a)(t,2),i=(r[0],r[1]),n=Object(o.useState)({}),l=Object(_a.a)(n,2),s=l[0],m=l[1],_=Object(o.useState)(""),d=Object(_a.a)(_,2),f=d[0],N=d[1];return Object(o.useEffect)((function(){i(e.formTypeProp),e.params&&N(e.params.match.params.id)}),[]),a.a.createElement("div",{__self:void 0,__source:{fileName:Ci,lineNumber:28,columnNumber:5}},a.a.createElement(S,{__self:void 0,__source:{fileName:Ci,lineNumber:29,columnNumber:7}},e.emailVerified&&a.a.createElement(x,{__self:void 0,__source:{fileName:Ci,lineNumber:31,columnNumber:11}},a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:Ci,lineNumber:32,columnNumber:13}},(function(e){return e&&a.a.createElement(ga,{__self:void 0,__source:{fileName:Ci,lineNumber:33,columnNumber:40}})})),a.a.createElement(j,{__self:void 0,__source:{fileName:Ci,lineNumber:36,columnNumber:13}},a.a.createElement("div",{__self:void 0,__source:{fileName:Ci,lineNumber:37,columnNumber:15}},a.a.createElement(c.a,{bounds:!0,onResize:function(e){m(e.bounds.height)},__self:void 0,__source:{fileName:Ci,lineNumber:38,columnNumber:17}},(function(t){var r=t.measureRef;return a.a.createElement("div",{ref:r,__self:void 0,__source:{fileName:Ci,lineNumber:45,columnNumber:21}},a.a.createElement(Ea,{heading:e.title,__self:void 0,__source:{fileName:Ci,lineNumber:46,columnNumber:23}}))})),a.a.createElement(yi,{createPostType:e.formTypeProp,headingHeight:s,postID:f,__self:void 0,__source:{fileName:Ci,lineNumber:51,columnNumber:17}}))))),!e.emailVerified&&a.a.createElement(ji,{text:"Please verify your email to create a new post.",__self:void 0,__source:{fileName:Ci,lineNumber:63,columnNumber:9}}))})),Di=r(142),Pi=r.n(Di),Ti=r(395),Mi=r.n(Ti),Li="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\SettingsNotice.jsx";const Ai=w.b.img`
  width: 2.2rem;
  margin-right: 1.2rem;
`,$i=w.b.div`
  display: flex;
  align-items: start;
`,Wi=w.b.span`
  font-family: "Bold";
`,Bi=w.b.div`
  padding-top: 1px;
`,Ui=w.b.div`
  margin-top: 0.4rem;
`;var Yi=e=>a.a.createElement($i,{__self:void 0,__source:{fileName:Li,lineNumber:30,columnNumber:5}},a.a.createElement(Ai,{alt:"settings security check mark",src:e.active?Pi.a:Mi.a,__self:void 0,__source:{fileName:Li,lineNumber:31,columnNumber:7}}),a.a.createElement(Bi,{__self:void 0,__source:{fileName:Li,lineNumber:35,columnNumber:7}},a.a.createElement(Wi,{__self:void 0,__source:{fileName:Li,lineNumber:36,columnNumber:9}},e.title),a.a.createElement(Ui,{__self:void 0,__source:{fileName:Li,lineNumber:37,columnNumber:9}},e.details))),Ri=r(396),zi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\UpdateSuccessful.jsx";const Fi=w.b.div`
  font-size: 1.4rem;
`,Vi=w.b.img`
  width: 2rem;
  margin-right: 0.8rem;
`,Hi=w.b.div`
  display: flex;
  align-items: center;
`;var Gi=e=>{const t=a.a.createRef();return a.a.createElement(I,{belowSiblings:!0,ref:t,borderTop:!0,__self:void 0,__source:{fileName:zi,lineNumber:37,columnNumber:5}},a.a.createElement(Hi,{__self:void 0,__source:{fileName:zi,lineNumber:38,columnNumber:7}},a.a.createElement(Vi,{onLoad:()=>{const e=t.current.offsetHeight;Object(Ri.a)({targets:t.current,easing:"easeOutCubic",translateY:[{value:-e,duration:0,delay:0},{value:0,duration:1e3,delay:400}]})},src:Pi.a,alt:"Update successful",__self:void 0,__source:{fileName:zi,lineNumber:39,columnNumber:9}}),a.a.createElement(Fi,{__self:void 0,__source:{fileName:zi,lineNumber:44,columnNumber:9}},e.message)))},qi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_security\\SettingsSecurityInfo.jsx";var Ji=Object(l.b)(({userState:e})=>({passwordSet:e.passwordSet}))(e=>{const t=e.passwordSet?"Your password has been set":"Your password has not been set";return a.a.createElement("div",{__self:void 0,__source:{fileName:qi,lineNumber:13,columnNumber:5}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:qi,lineNumber:14,columnNumber:7}},a.a.createElement(Yi,{title:"Password",active:e.passwordSet,details:t,__self:void 0,__source:{fileName:qi,lineNumber:15,columnNumber:9}})))});const Ki=w.b.form`
  position: relative;
`,Xi=e=>({type:"SETTINGS_EDIT_COMPLETE",settingsEditComplete:e});var Qi="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\SettingsSubmitButtons.jsx";var Zi=Object(l.b)(null,{settingsEditComplete:Xi})(e=>a.a.createElement(I,{__self:void 0,__source:{fileName:Qi,lineNumber:18,columnNumber:5}},a.a.createElement(P,{__self:void 0,__source:{fileName:Qi,lineNumber:19,columnNumber:7}},a.a.createElement(rt,{buttonText:"Cancel",rightMargin:!0,onClick:()=>{e.setEditActive(!1)},__self:void 0,__source:{fileName:Qi,lineNumber:20,columnNumber:9}}),a.a.createElement(Ct,{buttonText:"Submit",type:"submit",__self:void 0,__source:{fileName:Qi,lineNumber:21,columnNumber:9}})),e.error&&a.a.createElement(dr,{__self:void 0,__source:{fileName:Qi,lineNumber:24,columnNumber:9}},a.a.createElement(gr,{error:e.error,__self:void 0,__source:{fileName:Qi,lineNumber:25,columnNumber:11}}))));const en=async(e,t,r={})=>{try{const{data:{success:o,error:a}}=await ee.patch(r.url,e,te());if(!o)return{[jr.a]:a};t.setEditCompleteText(r.editCompleteText),t.setEditActive(!1),await t.getUpdatedUserData()}catch(o){return{[jr.a]:"Something went wrong"}}},tn=w.b.div`
  display: grid;
  grid-row-gap: 2rem;
  width: 50%;
`;var rn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_security\\SettingsSecurityEdit.jsx";var on=Object(l.b)(({userState:e})=>({passwordSet:e.passwordSet}))(e=>{const t={url:"/users/password",editCompleteText:"Your password has been updated"};return a.a.createElement(tr.b,{onSubmit:r=>en(r,e,t),initialValues:{},render:({handleSubmit:t,submitting:r,submitError:o})=>a.a.createElement(Ki,{onSubmit:t,__self:void 0,__source:{fileName:rn,lineNumber:37,columnNumber:9}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:rn,lineNumber:38,columnNumber:11}},a.a.createElement(tn,{__self:void 0,__source:{fileName:rn,lineNumber:39,columnNumber:13}},e.passwordSet&&a.a.createElement(tr.a,{name:"currentPassword",component:Sr,type:"password",label:"Current Password",__self:void 0,__source:{fileName:rn,lineNumber:41,columnNumber:17}}),a.a.createElement(tr.a,{name:"newPassword",component:Sr,validate:(e,t,r)=>Wr(e,r.name,Qr(Hr)),label:"New Password",type:"password",__self:void 0,__source:{fileName:rn,lineNumber:49,columnNumber:15}}),a.a.createElement(tr.a,{name:"passwordConfirm",component:Sr,type:"password",validate:(e,t)=>Ur(e,t,{currentPassword:"newPassword",passwordConfirm:"passwordConfirm"}),label:"Confirm New Password",__self:void 0,__source:{fileName:rn,lineNumber:63,columnNumber:15}}))),a.a.createElement(Zi,{setEditActive:e.setEditActive,error:o,__self:void 0,__source:{fileName:rn,lineNumber:77,columnNumber:11}})),__self:void 0,__source:{fileName:rn,lineNumber:33,columnNumber:5}})});const an=w.b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 4rem;
  grid-column-gap: 4rem;
`;var nn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsInfoEdit.jsx";const ln=w.b.div`
  grid-column: 1/3;
`;var sn=Object(l.b)(({userState:e})=>({userState:e}))(e=>{const{name:t,email:r,jobTitle:o,bio:i}=e.userState,n={name:t,email:r,jobTitle:o,bio:i},l={url:"/users/user_info",editCompleteText:"You're profile has been updated"};return a.a.createElement(tr.b,{onSubmit:t=>en(t,e,l),initialValues:n,render:({handleSubmit:t,submitting:r,submitError:o})=>a.a.createElement(Ki,{onSubmit:t,__self:void 0,__source:{fileName:nn,lineNumber:49,columnNumber:9}},r&&a.a.createElement(ki,{__self:void 0,__source:{fileName:nn,lineNumber:50,columnNumber:26}}),a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:nn,lineNumber:51,columnNumber:11}},a.a.createElement(an,{__self:void 0,__source:{fileName:nn,lineNumber:52,columnNumber:13}},a.a.createElement(tr.a,{name:"name",component:Sr,validate:(e,t,r)=>Wr(e,r.name,Qr(Vr)),label:"Name",__self:void 0,__source:{fileName:nn,lineNumber:53,columnNumber:15}}),a.a.createElement(tr.a,{name:"email",component:Sr,validate:$r,label:"Email",type:"email",__self:void 0,__source:{fileName:nn,lineNumber:66,columnNumber:15}}),a.a.createElement(tr.a,{name:"jobTitle",component:Sr,validate:(e,t,r)=>Wr(e,r.name,Qr(Gr,{allowBlank:!0})),label:"Job Title",__self:void 0,__source:{fileName:nn,lineNumber:74,columnNumber:15}}),a.a.createElement(ln,{__self:void 0,__source:{fileName:nn,lineNumber:87,columnNumber:15}},a.a.createElement(tr.a,{name:"bio",component:ka,validate:(e,t,r)=>Wr(e,r.name,Qr(qr,{allowBlank:!0})),label:"Bio",__self:void 0,__source:{fileName:nn,lineNumber:88,columnNumber:17}})))),a.a.createElement(Zi,{setEditActive:e.setEditActive,error:o,__self:void 0,__source:{fileName:nn,lineNumber:103,columnNumber:11}})),__self:void 0,__source:{fileName:nn,lineNumber:45,columnNumber:5}})}),mn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_security\\SettingsSecurity.jsx";var cn=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:mn,lineNumber:10,columnNumber:5}},!e.editActive&&a.a.createElement(Ji,{__self:void 0,__source:{fileName:mn,lineNumber:11,columnNumber:29}}),e.editActive&&a.a.createElement(on,{getUpdatedUserData:e.getUpdatedUserData,setEditActive:e.setEditActive,setEditCompleteText:e.setEditCompleteText,__self:void 0,__source:{fileName:mn,lineNumber:13,columnNumber:9}})),un="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\SettingsNav.jsx";var _n=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:un,lineNumber:11,columnNumber:5}},e.navTitles.map((t,r)=>a.a.createElement(da,{active:e.activeIndex===r,key:t,clickable:!0,hoverable:e.activeIndex!==r,onClick:()=>(t=>{e.setActiveIndex(t),e.setEditActive(!1)})(r),__self:void 0,__source:{fileName:un,lineNumber:13,columnNumber:9}},t))),dn=(r(609),"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\headings\\IconHeadingBox.jsx");const bn=w.b.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: var(--box-border);
  background-color: white;
  position: relative;
  text-align: center;
`,fn=w.b.img`
  width: 1.8rem;
`,Nn=w.b.h1`
  font-size: 1.8rem;
`,pn=w.b.div`
  position: absolute;
  right: 2.4rem;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 100px;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  transition: box-shadow 0.2s linear;
  cursor: pointer;
  top: 21px;

  &:hover {
    box-shadow: 0 2px 10px 1px rgba(57, 73, 76, 0.4),
      0 1px 2px rgba(57, 73, 76, 0.25);
  }
`;var vn=Object(l.b)(({assetState:e})=>({editIcon:e.SETTINGS_EDIT_ICON}))(e=>a.a.createElement(bn,{__self:void 0,__source:{fileName:dn,lineNumber:42,columnNumber:5}},a.a.createElement(Nn,{__self:void 0,__source:{fileName:dn,lineNumber:43,columnNumber:7}}," ",e.heading," "),3!==e.activeIndex&&a.a.createElement(pn,{onClick:e.handleClick,__self:void 0,__source:{fileName:dn,lineNumber:45,columnNumber:9}},a.a.createElement(fn,{alt:"edit button",src:e.editIcon,__self:void 0,__source:{fileName:dn,lineNumber:46,columnNumber:11}})))),gn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsInfoShow.jsx";const hn=w.b.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  color: grey;
`;var En=Object(l.b)(({userState:e})=>({name:e.name,email:e.email,jobTitle:e.jobTitle,bio:e.bio}))(e=>a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:21,columnNumber:5}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:gn,lineNumber:22,columnNumber:7}},a.a.createElement(Xa,{__self:void 0,__source:{fileName:gn,lineNumber:23,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:24,columnNumber:11}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:gn,lineNumber:25,columnNumber:13}},"Name"),a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:26,columnNumber:13}},e.name)),a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:28,columnNumber:11}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:gn,lineNumber:29,columnNumber:13}},"Email"),a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:30,columnNumber:13}},e.email),a.a.createElement(hn,{__self:void 0,__source:{fileName:gn,lineNumber:31,columnNumber:13}},"Your email is private")),e.jobTitle&&a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:35,columnNumber:13}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:gn,lineNumber:36,columnNumber:15}},"Job Title"),a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:37,columnNumber:15}},e.jobTitle)),e.bio&&a.a.createElement("div",{__self:void 0,__source:{fileName:gn,lineNumber:42,columnNumber:13}},a.a.createElement(Qa,{__self:void 0,__source:{fileName:gn,lineNumber:43,columnNumber:15}},"Bio"),a.a.createElement(ei,{__self:void 0,__source:{fileName:gn,lineNumber:44,columnNumber:15}},e.bio)))))),yn=r(108),wn=r.n(yn),kn=r(397),Sn=r.n(kn),On=(r(842),r(143)),xn=r.n(On),jn=r(398),Cn=r.n(jn),In=r(146),Dn=r.n(In);const Pn=(e,t,r,o,a={})=>{const i=Dn()(t)[1].type;"image/jpeg"===i||"image/png"===i?"add"===a.operation?r([...a.attachedImages,Dn()(t)[0].target.result]):r(Dn()(t)[0].target.result):o("Please upload a jpg or png image")},Tn=w.b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`,Mn=w.b.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
`,Ln=w.b.div`
  font-size: 1.8rem;
  font-family: "Bold";
  margin-bottom: 3rem;
`,An=w.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,$n=w.b.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100px;
  margin-bottom: 3rem;
`,Wn=w.b.div`
  font-size: 1.3rem;
  text-align: center;
  margin-top: .8rem;
  color: #9a9a9a;
`,Bn=w.b.div`
  display: flex;
`;var Un="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsProfilePicture\\ChangeProfileImagePreview.jsx";let Yn={};var Rn=e=>{const t=Object(l.d)(({userState:{profileImage:e}})=>e),[r,i]=Object(o.useState)(""),[n,s]=Object(o.useState)(""),[m,c]=Object(o.useState)({unit:"%",aspect:1});Object(o.useEffect)(()=>{i(t)},[t]),Object(o.useEffect)(()=>{r&&u()},[r]);const u=async()=>{if(Cn()(r)){const e=await wn.a.encodeFromURL(r);i(e)}};return a.a.createElement(oo,{__self:void 0,__source:{fileName:Un,lineNumber:59,columnNumber:5}},a.a.createElement(Sn.a,{src:r,onChange:e=>c(e),onComplete:t=>{0!==t.width&&e.setCroppedImage(((e,t)=>{const r=document.createElement("canvas"),o=e.naturalWidth/e.width,a=e.naturalHeight/e.height;r.width=t.width*o,r.height=t.height*a;return r.getContext("2d").drawImage(e,t.x*o,t.y*a,t.width*o,t.height*a,0,0,t.width*o,t.height*a),r.toDataURL("image/jpeg")})(Yn,t))},onImageLoaded:e=>Yn=e,crop:m,__self:void 0,__source:{fileName:Un,lineNumber:60,columnNumber:7}}),a.a.createElement(oo,{mtAuto:!0,__self:void 0,__source:{fileName:Un,lineNumber:67,columnNumber:7}},a.a.createElement(Wn,{__self:void 0,__source:{fileName:Un,lineNumber:68,columnNumber:9}}," Drag to choose the crop area "),a.a.createElement(Mn,{__self:void 0,__source:{fileName:Un,lineNumber:69,columnNumber:9}},a.a.createElement(xn.a,{as:"url",id:"fileReader",onChange:(e,t)=>Pn(0,t,i,s),__self:void 0,__source:{fileName:Un,lineNumber:70,columnNumber:11}},a.a.createElement(Ct,{buttonText:"Upload",__self:void 0,__source:{fileName:Un,lineNumber:82,columnNumber:13}})),a.a.createElement(gr,{error:n,__self:void 0,__source:{fileName:Un,lineNumber:84,columnNumber:11}}))))},zn=r(147),Fn=r.n(zn);var Vn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsProfilePicture\\ChangeProfileImageSubmit.jsx";var Hn=e=>{const t=Object(l.c)(),[r,i]=Object(o.useState)(""),n=Object(l.d)(({userState:{profileImage:e}})=>e),s=Object(l.d)(({userState:{profileImageChanged:e}})=>e);return a.a.createElement(An,{__self:void 0,__source:{fileName:Vn,lineNumber:47,columnNumber:5}},a.a.createElement(Ln,{__self:void 0,__source:{fileName:Vn,lineNumber:48,columnNumber:7}},"Your Profile Picture"),a.a.createElement($n,{src:e.croppedImage?e.croppedImage:n,alt:"Formatted profile picture",__self:void 0,__source:{fileName:Vn,lineNumber:49,columnNumber:7}}),a.a.createElement(Bn,{__self:void 0,__source:{fileName:Vn,lineNumber:53,columnNumber:7}},a.a.createElement(rt,{buttonText:"Cancel",rightMargin:!0,onClick:e.closeEditProfilePicture,__self:void 0,__source:{fileName:Vn,lineNumber:54,columnNumber:9}}),a.a.createElement(Ct,{type:"submit",buttonText:"Submit",disabled:!e.croppedImage,onClick:async()=>{try{e.setLoading(!0);const r=await(async e=>{const t=await Fn.a.read(e);return await t.resize(500,500).quality(60).getBufferAsync(Fn.a.MIME_JPEG)})(e.croppedImage);await(async e=>{let{data:{success:t,url:r}}=await ee.get("/users/signed_url_profile_image",te());if(!t)throw new Error;await ee.put(r,e,{headers:{"Content-Type":Fn.a.MIME_JPEG}})})(r),t({type:"PROFILE_IMAGE_CHANGED",profileImageChanged:s+1}),e.closeEditProfilePicture(),e.showProfileUpdatedNotice()}catch(r){i("Something went wrong")}finally{e.setLoading(!1)}},__self:void 0,__source:{fileName:Vn,lineNumber:59,columnNumber:9}})),a.a.createElement(gr,{error:r,__self:void 0,__source:{fileName:Vn,lineNumber:66,columnNumber:7}}))},Gn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsProfilePicture\\ChangeProfileImage.jsx";var qn=e=>{const[t,r]=Object(o.useState)(null),[i,n]=Object(o.useState)(!1);return a.a.createElement("div",{__self:void 0,__source:{fileName:Gn,lineNumber:13,columnNumber:5}},a.a.createElement(Tn,{__self:void 0,__source:{fileName:Gn,lineNumber:15,columnNumber:7}},a.a.createElement(Rn,{setCroppedImage:r,profileImage:e.profileImage,__self:void 0,__source:{fileName:Gn,lineNumber:16,columnNumber:9}}),a.a.createElement(Hn,{croppedImage:t,setLoading:n,showProfileUpdatedNotice:e.showProfileUpdatedNotice,setEditCompleteText:e.setEditCompleteText,closeEditProfilePicture:e.closeEditProfilePicture,__self:void 0,__source:{fileName:Gn,lineNumber:20,columnNumber:9}})))};const Jn=w.b.img`
  width: 8rem;
  border-radius: 100px;
  cursor: pointer;
  transition: box-shadow .2s linear;
  
  &:hover {
   box-shadow: 0 2px 10px 1px rgba(57,73,76,0.4), 0 1px 2px rgba(57,73,76,0.25);
  }
`,Kn=w.b.div`
  display: flex;
  justify-content: center;
`;var Xn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_info\\SettingsInfo.jsx";var Qn=e=>{const[t,r]=Object(o.useState)(!1),i=Object(l.d)(({userState:e})=>e.profileImage),n=()=>{e.setEditActive(!1),r(!1)};return a.a.createElement("div",{__self:void 0,__source:{fileName:Xn,lineNumber:28,columnNumber:5}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:Xn,lineNumber:29,columnNumber:7}},a.a.createElement(Kn,{__self:void 0,__source:{fileName:Xn,lineNumber:30,columnNumber:9}},a.a.createElement(Jn,{alt:"profile image",src:i,onClick:()=>r(!0),__self:void 0,__source:{fileName:Xn,lineNumber:31,columnNumber:11}}))),!e.editActive&&a.a.createElement(En,{__self:void 0,__source:{fileName:Xn,lineNumber:38,columnNumber:29}}),e.editActive&&a.a.createElement(sn,{getUpdatedUserData:e.getUpdatedUserData,setEditActive:e.setEditActive,setEditCompleteText:e.setEditCompleteText,__self:void 0,__source:{fileName:Xn,lineNumber:41,columnNumber:9}}),t&&a.a.createElement(ua,{closeModal:n,showCloseButton:!0,medium:!0,__self:void 0,__source:{fileName:Xn,lineNumber:49,columnNumber:9}},a.a.createElement(qn,{showProfileUpdatedNotice:()=>{e.setEditCompleteText("Your profile has been updated")},closeEditProfilePicture:n,__self:void 0,__source:{fileName:Xn,lineNumber:50,columnNumber:11}})))},Zn="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_notifications\\SettingsNotificationsInfo.jsx";var el=Object(l.b)(e=>({notifications:e.userState.notifications}))(e=>a.a.createElement("div",{__self:void 0,__source:{fileName:Zn,lineNumber:9,columnNumber:5}},a.a.createElement(I,{__self:void 0,__source:{fileName:Zn,lineNumber:10,columnNumber:7}},a.a.createElement(Xa,{__self:void 0,__source:{fileName:Zn,lineNumber:11,columnNumber:9}},a.a.createElement(Yi,{title:"New Message",active:e.notifications.newMessages,details:"Receive an email notification when you receive a new message",__self:void 0,__source:{fileName:Zn,lineNumber:12,columnNumber:11}}),a.a.createElement(Yi,{title:"Password Changed",active:e.notifications.passwordChanged,details:"Receive an email notification when your password is updated",__self:void 0,__source:{fileName:Zn,lineNumber:17,columnNumber:11}}),a.a.createElement(Yi,{title:"Email Changed",active:e.notifications.emailChanged,details:"Receive an email notification when your account email is updated",__self:void 0,__source:{fileName:Zn,lineNumber:22,columnNumber:11}}))))),tl=r(399),rl=r.n(tl),ol="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\inputs\\Switch.jsx";const al=w.b.div`
  color: grey;
  font-size: 1.3rem;
  margin-top: 0.4rem;
`,il=w.b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`,nl=Object(w.b)(rl.a)`
  margin-left: auto;
`;var ll=e=>a.a.createElement(il,{__self:void 0,__source:{fileName:ol,lineNumber:24,columnNumber:5}},a.a.createElement("div",{__self:void 0,__source:{fileName:ol,lineNumber:25,columnNumber:7}},a.a.createElement(pr,{label:e.label,textLabel:!0,__self:void 0,__source:{fileName:ol,lineNumber:26,columnNumber:9}}),a.a.createElement(al,{__self:void 0,__source:{fileName:ol,lineNumber:27,columnNumber:9}},e.details)),a.a.createElement(nl,{onChange:e.input.onChange,checked:e.input.value,checkedIcon:!1,uncheckedIcon:!1,onColor:"#467AFF",__self:void 0,__source:{fileName:ol,lineNumber:30,columnNumber:7}})),sl="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_notifications\\SettingsNotificationsEdit.jsx";const ml=w.b.div`
  display: grid;
  grid-row-gap: 4rem;
`;var cl=Object(l.b)(({userState:e})=>({userNotifications:e.notifications}))(e=>{const t={url:"/users/notifications",editCompleteText:"Your notifications have been updated"};return a.a.createElement(tr.b,{onSubmit:r=>en(r,e,t),initialValues:e.userNotifications,render:({handleSubmit:t,submitting:r,submitError:o})=>a.a.createElement(Ki,{onSubmit:t,__self:void 0,__source:{fileName:sl,lineNumber:28,columnNumber:9}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:sl,lineNumber:30,columnNumber:11}},a.a.createElement(ml,{__self:void 0,__source:{fileName:sl,lineNumber:31,columnNumber:13}},a.a.createElement(tr.a,{name:"newMessages",component:ll,label:"New Message",details:"Receive an email notification when you have a new unread message",__self:void 0,__source:{fileName:sl,lineNumber:32,columnNumber:15}}),a.a.createElement(tr.a,{name:"passwordChanged",component:ll,label:"Password Changed",details:"Receive an email notification when your account password is changed",__self:void 0,__source:{fileName:sl,lineNumber:39,columnNumber:15}}),a.a.createElement(tr.a,{name:"emailChanged",component:ll,label:"Email Changed",details:"Receive an email notification when your account email is changed",__self:void 0,__source:{fileName:sl,lineNumber:46,columnNumber:15}}))),a.a.createElement(Zi,{setEditActive:e.setEditActive,error:o,__self:void 0,__source:{fileName:sl,lineNumber:54,columnNumber:11}})),__self:void 0,__source:{fileName:sl,lineNumber:24,columnNumber:5}})}),ul="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_notifications\\SettingsNotifications.jsx";var _l=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:ul,lineNumber:7,columnNumber:3}},!e.editActive&&a.a.createElement(el,{__self:void 0,__source:{fileName:ul,lineNumber:8,columnNumber:27}}),e.editActive&&a.a.createElement(cl,{editActive:e.editActive,getUpdatedUserData:e.getUpdatedUserData,setEditActive:e.setEditActive,setEditCompleteText:e.setEditCompleteText,__self:void 0,__source:{fileName:ul,lineNumber:10,columnNumber:7}}));const dl=w.b.div`
  margin-bottom: 2rem;
  width: 90%;
`,bl=w.b.div`
  font-family: "Bold";
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
`,fl=w.b.div`
  display: grid;
  grid-row-gap: 5rem;
`;var Nl="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_account\\SettingsAccountItem.jsx";var pl=e=>a.a.createElement(D,{__self:void 0,__source:{fileName:Nl,lineNumber:13,columnNumber:5}},a.a.createElement(dl,{__self:void 0,__source:{fileName:Nl,lineNumber:14,columnNumber:7}},a.a.createElement(bl,{__self:void 0,__source:{fileName:Nl,lineNumber:15,columnNumber:9}},e.heading),a.a.createElement("div",{__self:void 0,__source:{fileName:Nl,lineNumber:16,columnNumber:9}}," ",e.text)),a.a.createElement(Ct,{warning:e.warning,buttonText:e.btnText,onClick:e.onClick,__self:void 0,__source:{fileName:Nl,lineNumber:18,columnNumber:7}}),a.a.createElement(gr,{error:e.error,__self:void 0,__source:{fileName:Nl,lineNumber:23,columnNumber:7}}));var vl=e=>{const[t,r]=Object(o.useState)(""),[i,n]=Object(o.useState)(!1);return a.a.createElement(pl,{onClick:async()=>{try{n(!0);const{data:{success:t}}=await ee.get("/users/send_verify_account_email",re({hideToken:!0}));if(!t)throw new Error;e.setEmailVerificationEmailSent(!0)}catch(t){r("Something went wrong. Please try again later.")}finally{n(!1)}},btnText:"Verify Account",error:t,heading:"Resend Verification Email",loading:i,text:"Your account has not been verified. To verify your account, please confirm your email address via a verification email.",__self:void 0,__source:{fileName:"D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_account\\SendVerificationEmail.jsx",lineNumber:36,columnNumber:5}})},gl="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\modals\\ConfirmAlertWithText.jsx";var hl=e=>{const t=e=>e&&"confirm"===e?void 0:"invalid";return a.a.createElement(tr.b,{onSubmit:e.action,initialValues:{},render:({handleSubmit:r,submitting:o,invalid:i,submitError:n})=>a.a.createElement(Ki,{onSubmit:r,id:"confirmAlert",__self:void 0,__source:{fileName:gl,lineNumber:26,columnNumber:9}},o&&a.a.createElement(ki,{loading:o,__self:void 0,__source:{fileName:gl,lineNumber:27,columnNumber:26}}),a.a.createElement(oa,{__self:void 0,__source:{fileName:gl,lineNumber:29,columnNumber:11}},e.heading),a.a.createElement(aa,{__self:void 0,__source:{fileName:gl,lineNumber:30,columnNumber:11}},e.text),a.a.createElement(na,{__self:void 0,__source:{fileName:gl,lineNumber:31,columnNumber:11}},a.a.createElement(tr.a,{name:"confirm",customWidth:"50%",component:Sr,validate:t,label:'Please type "confirm"',__self:void 0,__source:{fileName:gl,lineNumber:32,columnNumber:13}})),a.a.createElement(P,{__self:void 0,__source:{fileName:gl,lineNumber:40,columnNumber:11}},a.a.createElement(rt,{buttonText:"Cancel",rightMargin:!0,onClick:e.closeAlert,__self:void 0,__source:{fileName:gl,lineNumber:41,columnNumber:13}}),a.a.createElement(Ct,{buttonText:"Submit",warning:!0,type:"submit",disabled:i,__self:void 0,__source:{fileName:gl,lineNumber:46,columnNumber:13}})),n&&a.a.createElement(gr,{error:n,__self:void 0,__source:{fileName:gl,lineNumber:53,columnNumber:27}})),__self:void 0,__source:{fileName:gl,lineNumber:22,columnNumber:5}})},El="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\notices\\Notice.jsx";var yl=e=>a.a.createElement("div",{__self:void 0,__source:{fileName:El,lineNumber:15,columnNumber:5}},a.a.createElement(oa,{__self:void 0,__source:{fileName:El,lineNumber:16,columnNumber:7}},e.heading),a.a.createElement(aa,{__self:void 0,__source:{fileName:El,lineNumber:17,columnNumber:7}},e.text),a.a.createElement(Ct,{buttonText:e.buttonText,onClick:e.handleNoticeConfirm,__self:void 0,__source:{fileName:El,lineNumber:18,columnNumber:7}})),wl="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_account\\SettingsDeleteAccount.jsx";var kl=e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)(!1),l=Object(m.f)(),s=()=>{r(!1)};return a.a.createElement("div",{__self:void 0,__source:{fileName:wl,lineNumber:48,columnNumber:5}},a.a.createElement(pl,{onClick:()=>r(!0),btnText:"Delete Account",heading:"Delete Account",text:"If you delete your account, all your profile information, posts, messages, and user data will be permanently deleted.",warning:!0,__self:void 0,__source:{fileName:wl,lineNumber:49,columnNumber:7}}),t&&a.a.createElement(ua,{closeModal:s,__self:void 0,__source:{fileName:wl,lineNumber:58,columnNumber:9}},a.a.createElement(hl,{type:"confirmAlert",heading:"Delete Account",text:"Are you sure you want to delete your account? This can't be undone.",btnText:"Delete Account",action:async()=>{try{const{data:{success:e}}=await ee.delete("/users",te());if(!e)throw new Error;r(!1),n(!0)}catch(e){return{[jr.a]:"Something went wrong"}}},closeAlert:s,__self:void 0,__source:{fileName:wl,lineNumber:59,columnNumber:11}})),i&&a.a.createElement(ua,{__self:void 0,__source:{fileName:wl,lineNumber:70,columnNumber:9}},a.a.createElement(yl,{heading:"Account Deleted",btnText:"Got it",handleNoticeConfirm:()=>{n(!1),Ue(l)},text:"Your account and all your user data have been permanently deleted. Thank you for using Spekkly and we hope that you will join again in the future.",__self:void 0,__source:{fileName:wl,lineNumber:71,columnNumber:11}})))},Sl=r(58);const Ol=w.b.div`
  grid-row-gap: 2rem;
  height: 40rem;

  ${Object(k.b)("loading")`
    height: 100%
    max-height: 40rem;
    overflow: auto;
  `};
`,xl=w.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,jl=w.b.img`
  width: 4.6rem;
  border-radius: 100px;
`,Cl=w.b.div`
  display: flex;
  align-items: center;
`,Il=w.b.div`
  margin-left: 1rem;
  font-size: 1.7rem;
`,Dl=w.b.div`
  display: grid;
  grid-row-gap: 2rem;
`,Pl=w.b.div`
  margin-left: auto;
`;var Tl="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_account\\BlockedUsersDetails.jsx";var Ml=Object(l.b)(({userState:e})=>({blockedUsers:e.blockedUsers,userDataProp:e.userData}),{userDataDispatch:Ht})(e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)([]),[l,s]=Object(o.useState)(!1),[m,c]=Object(o.useState)(-1),[u,_]=Object(o.useState)([]);Object(o.useEffect)(()=>{if(-1!==m){const e=u.findIndex(e=>e===m);Object(Sl.a)(u,e,1),_([...u]),c(-1)}},[m]),Object(o.useEffect)(()=>{d()},[]);const d=async()=>{try{const{data:{success:e,blockedUsers:t}}=await ee.get("/users/blocked_users",te());if(!e)throw new Error;n(t)}catch(e){s(!0)}finally{r(!1)}};return a.a.createElement(Ol,{loading:t?1:0,__self:void 0,__source:{fileName:Tl,lineNumber:99,columnNumber:5}},a.a.createElement(ki,{loading:t,solidBackground:!0,__self:void 0,__source:{fileName:Tl,lineNumber:100,columnNumber:7}}),l&&a.a.createElement(xl,{__self:void 0,__source:{fileName:Tl,lineNumber:103,columnNumber:9}},"Blocked users could not be loaded"),!l&&a.a.createElement(Dl,{__self:void 0,__source:{fileName:Tl,lineNumber:107,columnNumber:9}},i.map((t,r)=>a.a.createElement(Cl,{key:t.id,__self:void 0,__source:{fileName:Tl,lineNumber:109,columnNumber:13}},a.a.createElement(jl,{src:t.profileImage,alt:"Blocked user's profile image",__self:void 0,__source:{fileName:Tl,lineNumber:110,columnNumber:15}}),a.a.createElement(Il,{__self:void 0,__source:{fileName:Tl,lineNumber:114,columnNumber:15}},t.name),a.a.createElement(Pl,{__self:void 0,__source:{fileName:Tl,lineNumber:115,columnNumber:15}},a.a.createElement(Ct,{buttonText:"Unblock",warning:!0,leftSideLoading:!0,loading:u.includes(r),disabled:u.includes(r),onClick:()=>(async(t,r)=>{try{_([...u,r]);const o={blockedUserId:t,blockUser:!1},{data:{success:a}}=await ee.patch("/users/blocked_users",o,te());if(!a)throw new Error;{const r=i.findIndex(e=>e.id===t);Object(Sl.a)(i,r,1),0===i.length?(e.userData(Object.assign({},e.userDataProp,{blockedUsers:null})),e.setBlockedUserListVisible(!1)):n([...i])}}catch(o){e.setUnblockUserError("Something went wrong. Please try again later.")}finally{c(r)}})(t.id,r),small:!0,__self:void 0,__source:{fileName:Tl,lineNumber:116,columnNumber:17}}))))))}),Ll="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\settings_account\\SettingsAccount.jsx";var Al=()=>{const e=Object(l.d)(({userState:{emailVerified:e}})=>e),t=Object(l.d)(({userState:{blockedUsers:e}})=>e),[r,i]=Object(o.useState)(!1),[n,s]=Object(o.useState)(!1),[m,c]=Object(o.useState)("");return a.a.createElement("div",{__self:void 0,__source:{fileName:Ll,lineNumber:29,columnNumber:5}},a.a.createElement(I,{borderBottom:!0,__self:void 0,__source:{fileName:Ll,lineNumber:30,columnNumber:7}},a.a.createElement(fl,{__self:void 0,__source:{fileName:Ll,lineNumber:31,columnNumber:9}},t&&!n&&a.a.createElement(pl,{onClick:()=>s(!0),btnText:"Edit",heading:"Blocked Users",text:"Manage users that you've previously blocked.",__self:void 0,__source:{fileName:Ll,lineNumber:33,columnNumber:13}}),n&&a.a.createElement(Ml,{closeShowBlockedUsers:()=>s(!1),setUnblockUserError:c,setBlockedUserListVisible:s,__self:void 0,__source:{fileName:Ll,lineNumber:42,columnNumber:13}}),r&&!n&&a.a.createElement(Wo,{message:"Verification email has been sent",__self:void 0,__source:{fileName:Ll,lineNumber:50,columnNumber:13}}),!e&&!r&&!n&&a.a.createElement(vl,{setEmailVerificationEmailSent:i,__self:void 0,__source:{fileName:Ll,lineNumber:56,columnNumber:15}}),!n&&a.a.createElement(kl,{__self:void 0,__source:{fileName:Ll,lineNumber:61,columnNumber:39}}))),n&&a.a.createElement(I,{__self:void 0,__source:{fileName:Ll,lineNumber:65,columnNumber:9}},a.a.createElement(rt,{buttonText:"Cancel",space:"right",onClick:()=>s(!1),__self:void 0,__source:{fileName:Ll,lineNumber:66,columnNumber:11}}),a.a.createElement(gr,{error:m,__self:void 0,__source:{fileName:Ll,lineNumber:71,columnNumber:11}})))},$l="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\settings\\Settings.jsx";var Wl=()=>{const e=["Profile","Password & Security","Notifications","Account"],[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)(!1),[s,m]=Object(o.useState)(0),[c,_]=Object(o.useState)(""),d=Object(l.c)(),f=async()=>{d(Ht(await Jt()))};return a.a.createElement(S,{__self:void 0,__source:{fileName:$l,lineNumber:51,columnNumber:5}},a.a.createElement(x,{__self:void 0,__source:{fileName:$l,lineNumber:52,columnNumber:7}},a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:$l,lineNumber:53,columnNumber:9}},t=>t&&a.a.createElement(_n,{navTitles:e,activeIndex:s,setEditActive:r,setActiveIndex:m,__self:void 0,__source:{fileName:$l,lineNumber:56,columnNumber:15}})),a.a.createElement(j,{__self:void 0,__source:{fileName:$l,lineNumber:65,columnNumber:9}},a.a.createElement(vn,{heading:e[s],activeIndex:s,handleClick:()=>{r(!t)},__self:void 0,__source:{fileName:$l,lineNumber:66,columnNumber:11}}),0===s&&a.a.createElement(Qn,{editActive:t,setEditCompleteText:_,getUpdatedUserData:f,setEditActive:r,__self:void 0,__source:{fileName:$l,lineNumber:73,columnNumber:13}}),1===s&&a.a.createElement(cn,{editActive:t,getUpdatedUserData:f,setEditActive:r,setEditCompleteText:_,__self:void 0,__source:{fileName:$l,lineNumber:82,columnNumber:13}}),2===s&&a.a.createElement(_l,{editActive:t,getUpdatedUserData:f,setEditActive:r,setEditCompleteText:_,__self:void 0,__source:{fileName:$l,lineNumber:90,columnNumber:13}}),3===s&&a.a.createElement(Al,{__self:void 0,__source:{fileName:$l,lineNumber:97,columnNumber:33}}),c&&a.a.createElement(Gi,{message:c,__self:void 0,__source:{fileName:$l,lineNumber:98,columnNumber:32}}))))};const Bl=w.b.div`

  position: fixed;
  top: calc(${e=>e.conversationOptionsIconBounds.top}px + 2.6rem);
  z-index: 10;
  left: calc(${e=>e.conversationOptionsIconBounds.left}px + ${e=>e.conversationOptionsBounds.width}px);

  ${Object(k.b)("conversationOptionsAreVisible")`
      top: calc(${e=>e.conversationOptionsIconBounds.top}px - .4rem - ${e=>e.conversationOptionsBounds.height}px);
  `};
`,Ul=Object(w.b)(L.a)`
  transform: translateY(.2rem);
`,Yl=w.b.div`
  background-color: white;
  position: relative;
  height: calc(100vh - ${e=>e.conversationSearchContainerHeight}px - var(--messages-navbar-offset) - ${e=>e.navbarHeight}px);
  overflow: scroll;
`,Rl=w.b.div`
  font-size: 1.3rem;
  
  ${Object(k.a)("marginBottom")`
      margin-bottom: ${e=>e.marginBottom}px;
  `};
`,zl=w.b.div`
  background-color: var(--background-color);
  height: 100%;
  overflow: scroll;
`,Fl=w.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
`,Vl=w.b.input`
  background-color: #f5f5f5;
  width: 100%;
  padding: 1.4rem 1.6rem;
  border: none;
  font-size: 1.4rem;
  
  &::placeholder {
    color: #999999;
  }
`;var Hl=r(84),Gl=r(400),ql=r.n(Gl),Jl=r(401),Kl=r(402),Xl=r.n(Kl),Ql=r(75),Zl=r.n(Ql);const es=e=>{const t=new Date(e),r=ts(Date.now(),t);return r>365?Zl()(t,"d/m/yy, h:MM TT"):r>7?Zl()(t,"mmm dd, yyyy, h:MM TT"):r>1?Zl()(t,"ddd h:MM TT"):Zl()(t,"h:MM TT")},ts=(e,t)=>Xl()(new Date(e),new Date(t)).days;r(196);const rs=w.a`
  &:after,
  &:before {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    top: -8px;
    content: "";
    position: absolute;

    ${Object(k.a)("bottomArrow")`
         top: initial;
         left: 0;
         bottom: -8px;
         transform: rotate(180deg);
    `}
  }

  &:before {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #cecece;

    ${Object(k.a)("bottomArrow")`
         top: initial;
         bottom: -8px;
         transform: translateY(1px) rotate(180deg);
    `}

    ${Object(k.b)("bottomArrow")`
         transform: translateY(-1px);
    `}
     
    margin-left: -1px;
  }
`,os=w.b.div`
  position: absolute;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 4px;
  right: 1.2rem;
  padding: 0.4rem 0;
  z-index: 100;
  transition: top linear 0.1s;

  ${Object(k.a)("profileOptions")`
    top: 2.8rem;
  `};

  ${Object(k.a)("conversationOptions")`
         ${rs}
      
     &:after,
     &:before {
        left: 13%;
     }
  `};

  ${Object(k.a)("emojiContainer")`
      ${rs}
      padding: 0;
      right: -2rem
      top: calc(-2rem - ${e=>e.height}px);
     
      
      &:after,
      &:before {
        left: 88%;
      }
   `};

  ${Object(k.a)("messageOptions")`
    ${rs}
    right: -1.4rem;
    top: -3.4rem;
    
     &:after,
     &:before {
        left: 64%;
     }
  `};

  ${Object(k.a)("fixed")`
    position: fixed;
  `};
`,as=w.b.div`
  white-space: nowrap;
  font-size: 1.4rem;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #e6e6e6;
  }
`;var is="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\modals\\ConfirmAlert.jsx";var ns=e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)("");return a.a.createElement("div",{__self:void 0,__source:{fileName:is,lineNumber:35,columnNumber:5}},a.a.createElement(oa,{__self:void 0,__source:{fileName:is,lineNumber:36,columnNumber:7}},e.heading),a.a.createElement(aa,{__self:void 0,__source:{fileName:is,lineNumber:37,columnNumber:7}},e.text),a.a.createElement(P,{__self:void 0,__source:{fileName:is,lineNumber:39,columnNumber:7}},a.a.createElement(rt,{buttonText:"Back",rightMargin:!0,onClick:e.closeAlert,__self:void 0,__source:{fileName:is,lineNumber:40,columnNumber:9}}),a.a.createElement(Ct,{buttonText:e.buttonText,warning:!0,rightSideLoading:!0,loading:t,onClick:()=>{console.log("I am here")},__self:void 0,__source:{fileName:is,lineNumber:45,columnNumber:9}})),a.a.createElement(gr,{error:i,__self:void 0,__source:{fileName:is,lineNumber:54,columnNumber:7}}))},ls="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\modals\\BlockUserModal.jsx";var ss=e=>{const t=e.user,[r,i]=Object(o.useState)(!1);return a.a.createElement(ua,{closeModal:e.closeModal,outsideClickIgnoreClass:e.outsideClickIgnoreClass,__self:void 0,__source:{fileName:ls,lineNumber:30,columnNumber:5}},!r&&a.a.createElement(ns,{heading:"Block "+t.name,action:async()=>{const e={blockedUserId:t.id,blockUser:!0},{data:{success:r}}=await ee.patch("/users/blocked_users",e,te());if(!r)throw new Error;i(!0)},text:`Are you sure you want to block ${t.name}? This person will no longer be visible or able to communicate with you on Spekkly.`,buttonText:"Block",__self:void 0,__source:{fileName:ls,lineNumber:35,columnNumber:9}}),r&&a.a.createElement(yl,{heading:"Success",buttonText:"Got it",handleNoticeConfirm:e.handleBlockedUserConfirmation,text:`${t.name} has been blocked and will no longer be able to communicate with you on Spekkly? You can unblock ${t.name} in your account settings`,__self:void 0,__source:{fileName:ls,lineNumber:44,columnNumber:9}}))},ms="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\ConversationItemOptions.jsx";const cs=e=>{const t=e.conversation,[r,i]=Object(o.useState)({}),[n,l]=Object(o.useState)(!1),[s,m]=Object(o.useState)(!0),u={id:t.recipientId,name:t.recipientName};cs.handleClickOutside=()=>e.hideOptions();const _=async()=>{const r={conversationId:t.id,mute:!t.muted},{data:{success:o}}=await ee.patch("/conversations/mute",r,te());o&&e.toggleMuteIcon(t.id)},d=async()=>{const r={conversationId:t.id},{data:{success:o}}=await ee.delete("/conversations",re(r));o&&e.removeConversation(t.id)};Object(o.useEffect)(()=>{e.windowBounds.windowHeight-e.conversationOptionsIconBounds.bottom<r.height?m(!1):m(!0)},[e.windowBounds.windowHeight]);return a.a.createElement(dt.a,{node:document&&document.getElementById("conversation-options"),__self:void 0,__source:{fileName:ms,lineNumber:78,columnNumber:5}},a.a.createElement(c.a,{bounds:!0,onResize:({bounds:e})=>i(e),__self:void 0,__source:{fileName:ms,lineNumber:79,columnNumber:7}},({measureRef:t})=>a.a.createElement("div",{__self:void 0,__source:{fileName:ms,lineNumber:84,columnNumber:11}},a.a.createElement(Bl,{conversationOptionsIconBounds:e.conversationOptionsIconBounds,conversationOptionsAreVisible:s,conversationOptionsBounds:r,__self:void 0,__source:{fileName:ms,lineNumber:85,columnNumber:13}},a.a.createElement(os,{ref:t,conversationOptions:!0,__self:void 0,__source:{fileName:ms,lineNumber:92,columnNumber:15}},a.a.createElement(as,{onClick:_,__self:void 0,__source:{fileName:ms,lineNumber:93,columnNumber:17}},e.conversation.muted?"Unmute":"Mute"),a.a.createElement(as,{onClick:d,__self:void 0,__source:{fileName:ms,lineNumber:96,columnNumber:17}},"Delete"),a.a.createElement(as,{onClick:()=>l(!0),__self:void 0,__source:{fileName:ms,lineNumber:97,columnNumber:17}},"Block"))))),n&&a.a.createElement(ss,{user:u,handleBlockedUserConfirmation:()=>{e.hideOptions(),e.removeConversation(t.id)},outsideClickIgnoreClass:e.outsideClickIgnoreClass,closeModal:()=>l(!1),__self:void 0,__source:{fileName:ms,lineNumber:107,columnNumber:9}}))};cs.prototype={};const us={handleClickOutside:()=>cs.handleClickOutside};var _s=Object(z.a)(cs,us);const ds=w.b.div`
  height: ${e=>e.svgContainerHeight>0?`calc(${e.svgContainerHeight}px - 4px)`:"100%"};
`;var bs="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\icons\\Icon.jsx";var fs=e=>{const[t,r]=Object(o.useState)(0),[i,n]=Object(o.useState)(0);return Object(o.useEffect)(()=>{t>0&&0===i&&n(t)},[t]),a.a.createElement(c.a,{bounds:!0,onResize:({bounds:{height:e}})=>r(e),__self:void 0,__source:{fileName:bs,lineNumber:17,columnNumber:5}},({measureRef:t})=>a.a.createElement(ds,{ref:t,svgContainerHeight:i,__self:void 0,__source:{fileName:bs,lineNumber:22,columnNumber:9}},a.a.createElement(L.a,{src:e.src,beforeInjection:t=>{e.svgClasses.forEach(e=>t.classList.add(e))},__self:void 0,__source:{fileName:bs,lineNumber:23,columnNumber:11}})))};const Ns=w.b.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;var ps="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\ConversationOptionsIcon.jsx";var vs=e=>{const t=Object(l.d)(({assetState:{OPTIONS_ICON:e}})=>e);return a.a.createElement(c.a,{bounds:!0,onResize:({bounds:t})=>e.setConversationOptionsIconBounds(t),__self:void 0,__source:{fileName:ps,lineNumber:14,columnNumber:5}},({measureRef:r})=>a.a.createElement(Ns,{ref:r,__self:void 0,__source:{fileName:ps,lineNumber:19,columnNumber:9}},a.a.createElement("div",{ref:e.conversationOptionsIconRef,onClick:()=>e.setShowOptions(!e.showOptions),className:"messages-ignore-outside-click-"+e.conversation.id,__self:void 0,__source:{fileName:ps,lineNumber:20,columnNumber:11}},a.a.createElement(fs,{src:t,svgClasses:["standard-icon","mute-icon"],__self:void 0,__source:{fileName:ps,lineNumber:25,columnNumber:13}}))))},gs=r(73);const hs=w.b.div`
  margin-left: auto;
  color: #a0a0a0;
  font-size: 1.3rem;
`,Es=w.b.div`
  display: flex;
  align-items: center;
`,ys=w.b.div`
  width: 2rem;
  height: 2rem;
  background-color: #27C589;
  position: absolute;
  right: 0;
  bottom: -4px;
  border-radius: 100px;
  border: .3rem solid white;
  
   ${Object(k.a)("selected")`
     border: .3rem solid ${"#F5F5F5"};
  `};
   
   ${Object(k.a)("headingIndicator")`
     right: 9px;
  `};



`,ws=w.b.img`
  width: 6rem;
  border-radius: 100px;
`,ks=w.b.div`
  width: 100%;
  
  span {
    color: #a0a0a0;
    font-size: 1.3rem;
    margin-top: .3rem;
    
    ${Object(k.a)("unreadMessages")`
     color: black;
     font-family: "Bold";
  `};
  }
`,Ss=w.b.div`
  margin-left: 1rem;
  width: 100%;
`,Os=w.b.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  
  ${Object(k.a)("selected")`
    background-color: ${"#F5F5F5"};
  `};
`,xs=w.b.div`
   ${Object(k.a)("unreadMessages")`
     font-family: "Bold";
  `};
`;var js="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\ConversationListItem.jsx";var Cs=e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)({}),[s,m]=Object(o.useState)({}),c=Object(l.d)(({assetState:e})=>e),{currentConversation:u}=Object(l.d)(({messageState:e})=>e),[_,d]=Object(o.useState)(!1),b=Object(o.useRef)({}),f=e.conversation,N=f.id===u.id,p=()=>{r(!0)},v=()=>{_||r(!1)},g=Object(Jl.a)({onSwipedLeft:p,onSwipedRight:v}),h=Object(l.c)();Object(o.useEffect)(()=>{t&&m(b.current.getBoundingClientRect())},[t]);return a.a.createElement(ql.a,{onResize:e=>n(e),__self:void 0,__source:{fileName:js,lineNumber:84,columnNumber:5}},u&&a.a.createElement(Os,Object.assign({onMouseEnter:p,onMouseLeave:v},g,{selected:N,onClick:()=>{h(Yt(f)),h(Ut(!0))},__self:void 0,__source:{fileName:js,lineNumber:86,columnNumber:9}}),a.a.createElement(D,{__self:void 0,__source:{fileName:js,lineNumber:93,columnNumber:11}},a.a.createElement(ws,{src:f.recipientProfileImage,alt:"Conversation recipient photo",__self:void 0,__source:{fileName:js,lineNumber:94,columnNumber:13}}),f.recipientIsOnline&&a.a.createElement(ys,{selected:N,__self:void 0,__source:{fileName:js,lineNumber:99,columnNumber:15}})),a.a.createElement(Ss,{__self:void 0,__source:{fileName:js,lineNumber:103,columnNumber:11}},a.a.createElement(Es,{__self:void 0,__source:{fileName:js,lineNumber:104,columnNumber:13}},a.a.createElement(xs,{unreadMessages:f.unread,__self:void 0,__source:{fileName:js,lineNumber:105,columnNumber:15}},f.recipientName),a.a.createElement(hs,{__self:void 0,__source:{fileName:js,lineNumber:108,columnNumber:15}},es(f.lastMessageTimeStamp))),a.a.createElement(Es,{__self:void 0,__source:{fileName:js,lineNumber:113,columnNumber:13}},a.a.createElement(ks,{unreadMessages:f.unread,__self:void 0,__source:{fileName:js,lineNumber:114,columnNumber:15}},a.a.createElement(gs.a,{trimWhitespace:!0,__self:void 0,__source:{fileName:js,lineNumber:115,columnNumber:17}},f.latestMessageText||"Send your first first message to "+f.recipientName)),t&&a.a.createElement(vs,{setConversationOptionsIconBounds:m,conversation:f,showOptions:_,setShowOptions:d,conversationOptionsIconRef:b,__self:void 0,__source:{fileName:js,lineNumber:122,columnNumber:17}}),!t&&f.muted&&a.a.createElement(Ns,{__self:void 0,__source:{fileName:js,lineNumber:134,columnNumber:17}},a.a.createElement(Ul,{src:c.MUTE_CONVERSATION_ICON,beforeInjection:e=>{e.classList.add("standard-icon"),e.classList.add("three-dots-options-small")},__self:void 0,__source:{fileName:js,lineNumber:135,columnNumber:19}})))),_&&a.a.createElement(_s,{hideOptions:()=>{d(!1),r(!1)},outsideClickIgnoreClass:"conversation-ignore-outside-click",toggleMuteIcon:e.toggleMuteIcon,windowBounds:i,removeConversation:e.removeConversation,conversationOptionsIconBounds:s,conversation:f,__self:void 0,__source:{fileName:js,lineNumber:147,columnNumber:13}})))},Is=r(112),Ds=r.n(Is),Ps=r(409);const Ts=async e=>{let t=[];for(const r of e){const{dataBuffer:e}=wn.a.decode(Object(Ps.a)(r)?await wn.a.encodeFromURL(r):r),o=await Ds.a.read(e);o.quality(60),o.bitmap.width>1e3||o.bitmap.height>1e3?t.push(await(await o.scaleToFit(1e3,1e3)).getBufferAsync(Ds.a.MIME_JPEG)):t.push(await o.getBufferAsync(Ds.a.MIME_JPEG))}return t},Ms=async e=>{const t=await Promise.all(e.map(()=>ee.get("/conversations/signed_write_url",te())));return await Promise.all(t.map(({data:t},r)=>ee.put(t.url,e[r],{headers:{"Content-Type":Ds.a.MIME_JPEG}}))),t.map(e=>e.data.fileName)};var Ls=r(403),As=r.n(Ls);const $s=async({conversations:e,setConversations:t,dispatch:r,state:o})=>{const{userId:a}=o.userState,{newMessages:i,currentConversation:n,newCurrentConversationMessages:l}=o.messageState,s=i.shift(),m=e.findIndex(e=>e.id===s.conversationId);await(async(e,t,r,o)=>{if(-1!==e){const n=t[e];r.text?n.latestMessageText=r.text:n.latestMessageText=(a=r.text,i=r.images,a||`You sent ${i.length} photo${1===i.length?"":"s"}`),n.lastMessageTimeStamp=r.createdAt,o(As()(t,e,0))}else{const{data:{conversation:e}}=await ee.get("/conversations",re({conversation:r.conversationId}));o([e,...t])}var a,i})(m,e,s,t),s.authoredUserId===a&&r(Yt(e[m])),s.conversationId===n.id&&r(Bt([...l,s])),r(zt([...i]))};var Ws="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\ConversationListItems.jsx";var Bs=({conversationSearchContainerHeight:e})=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)([]),[s,m]=Object(o.useState)(1),[c,u]=Object(o.useState)(!0),[_,d]=Object(o.useState)(""),b=Object(l.d)(({messageState:e})=>e),f=Object(l.d)(({navbarState:{navbarHeight:e}})=>e),N=Object(l.c)(),p=Object(l.d)(e=>e),v={conversations:i,setConversations:n,dispatch:N,state:p},{newMessages:g,currentConversation:h,updateConversationOnMessageDelete:E,recipientOnlineChanges:y}=b;return Object(o.useEffect)(()=>{y.length>0&&(({conversations:e,setConversations:t,dispatch:r,state:o})=>{const{recipientOnlineChanges:a,currentConversation:i}=o.messageState,n=a.shift(),l=e.findIndex(e=>e.recipientId===n.recipientUserId);e[l].recipientIsOnline=n.isOnline,e[l].recipientLastSignIn=n.recipientLastSignIn,t([...e]),i.recipientId===n.recipientUserId&&(i.recipientIsOnline=n.isOnline,i.recipientLastSignIn=n.recipientLastSignIn),r(Rt([...a])),r(Yt({...i}))})(v)},[y.length]),Object(o.useEffect)(()=>{E.length>0&&(async({conversations:e,setConversations:t,dispatch:r,state:o})=>{const{updateConversationOnMessageDelete:a}=o.messageState,i=a.shift(),{data:{conversation:n}}=await ee.get("/conversations/"+i,te()),l=e.findIndex(e=>e.id===i);e[l]=n,t([...e]),r(Vt([...a]))})(v)},[E.length]),Object(o.useEffect)(()=>{g.length>0&&$s(v)},[g.length]),Object(o.useEffect)(()=>{(async()=>{try{r(!0);const{data:e}=await ee.get("/conversations",re({page:s}));n([...i,...e.conversations]),u(e.hasNextPage),1===s&&N(Yt({...e.conversations[0]}))}catch(e){d("Conversations could not be loaded")}finally{r(!1)}})()},[]),Object(o.useEffect)(()=>{h.id&&h.unread&&i.length>0&&(async({conversations:e,setConversations:t,dispatch:r,state:o})=>{const{currentConversation:a}=o.messageState,{userState:i}=o,n=e.findIndex(e=>e.id===a.id);e[n].unread=!1,t([...e]);try{await ee.patch("/conversations/"+a.id,{readBy:i.userId},te());e.find(e=>e.unread)||r(Ht({...i,hasUnreadMessages:!1}))}catch(l){console.log(l)}})(v)},[i.length,h.id]),a.a.createElement(Hl.a,{onBottom:()=>Kt(c,t,m,s),__self:void 0,__source:{fileName:Ws,lineNumber:111,columnNumber:5}},a.a.createElement(Yl,{conversationSearchContainerHeight:e,navbarHeight:f,__self:void 0,__source:{fileName:Ws,lineNumber:114,columnNumber:7}},t&&a.a.createElement(ki,{solidBackground:!0,marginBottom:e,__self:void 0,__source:{fileName:Ws,lineNumber:119,columnNumber:11}}),i.length>0&&a.a.createElement("div",{__self:void 0,__source:{fileName:Ws,lineNumber:126,columnNumber:11}},i.map((e,t)=>a.a.createElement(Cs,{key:t,removeConversation:()=>((e,{conversations:t,setConversations:r})=>{const o=t.findIndex(t=>t.id===e);Object(Sl.a)(t,o,1),r([...t])})(e.id,v),toggleMuteIcon:()=>((e,{conversations:t,setConversations:r})=>{const o=t.findIndex(t=>t.id===e);t[o].muted=!t[o].muted,r([...t])})(e.id,v),conversation:e,__self:void 0,__source:{fileName:Ws,lineNumber:128,columnNumber:15}}))),0===i.length&&a.a.createElement(oo,{vertical:!0,h100:!0,__self:void 0,__source:{fileName:Ws,lineNumber:141,columnNumber:11}},a.a.createElement(Za,{__self:void 0,__source:{fileName:Ws,lineNumber:142,columnNumber:13}},_)),!t&&_&&a.a.createElement(oo,{h100:!0,vertical:!0,__self:void 0,__source:{fileName:Ws,lineNumber:147,columnNumber:11}},a.a.createElement(Rl,{marginBottom:e,__self:void 0,__source:{fileName:Ws,lineNumber:148,columnNumber:13}},_))))},Us="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\ConversationsList.jsx";var Ys=()=>{const[e,t]=Object(o.useState)(0);return a.a.createElement(D,{__self:void 0,__source:{fileName:Us,lineNumber:20,columnNumber:5}},a.a.createElement("div",{id:"conversation-options",__self:void 0,__source:{fileName:Us,lineNumber:21,columnNumber:7}}),a.a.createElement(zl,{__self:void 0,__source:{fileName:Us,lineNumber:22,columnNumber:7}},a.a.createElement(c.a,{bounds:!0,onResize:({bounds:{height:e}})=>{t(e)},__self:void 0,__source:{fileName:Us,lineNumber:23,columnNumber:9}},({measureRef:e})=>a.a.createElement(Fl,{ref:e,__self:void 0,__source:{fileName:Us,lineNumber:30,columnNumber:13}},a.a.createElement(Vl,{placeholder:"Search Conversations",__self:void 0,__source:{fileName:Us,lineNumber:31,columnNumber:15}}))),a.a.createElement(Bs,{conversationSearchContainerHeight:e,__self:void 0,__source:{fileName:Us,lineNumber:35,columnNumber:9}})))},Rs=r(144),zs=r.n(Rs),Fs=function(){var e=Object(At.a)(Lt.a.mark((function e(t,r,o,a,i){var n,l;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===t.target.scrollTop&&r&&(n=o.current.scrollHeight,l=o.current.scrollHeight,o.current.scrollTop=l-n,i(a+1));case 1:case"end":return e.stop()}}),e)})));return function(t,r,o,a,i){return e.apply(this,arguments)}}(),Vs=function(e){var t=zs.a.scroller;setTimeout((function(){t.scrollTo("lastMessagePosition",{containerId:"messageListContainer"}),e(!0)}),0)},Hs=function(e){var t=e.current;return t.scrollTop+t.clientHeight===t.scrollHeight},Gs=r(86),qs=r.n(Gs),Js=r(404);const Ks=w.b.div`
  display: flex;
  align-items: flex-end;
`,Xs=w.b.img`
  width: 2.5rem;
  cursor: pointer;
`,Qs=w.b.div`
  width: 10rem;
  height: 10rem;
`,Zs=w.b.div`
  display: flex;
`,em=w.b.form`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 2rem;
  width: 100%;
  
  ${Object(k.a)("alignCenter")`
     align-items: center;
  `}
  
  ${Object(k.b)("alignCenter")`
     align-items: end;
  `}
`,tm=w.b.img`
  width: 1.8rem;
  position: absolute;
  right: .6rem;
  top: .6rem;
  cursor: pointer;
  display: none;
`,rm=w.b.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`,om=w.b.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
  position: relative;
`,am=Object(w.b)(Js.a)`
  padding: 1.2rem;
  height: auto;
  font-size: 1.6rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
`;var im="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\MessageInputAttachedImages.jsx";var nm=e=>{const t=Object(l.d)(({assetState:{WHITE_CLOSE_CIRCLE:e}})=>e),r=(e,t)=>{t.target.parentElement.previousSibling&&(t.target.parentElement.previousSibling.style.display=e)};return a.a.createElement(om,{onMouseEnter:e=>r("block",e),onMouseLeave:e=>r("none",e),__self:void 0,__source:{fileName:im,lineNumber:23,columnNumber:5}},a.a.createElement(tm,{src:t,alt:"Remove attached image",onClick:()=>e.removeAttachedImage(e.index),__self:void 0,__source:{fileName:im,lineNumber:27,columnNumber:7}}),a.a.createElement(Qs,{__self:void 0,__source:{fileName:im,lineNumber:32,columnNumber:7}},a.a.createElement(rm,{src:e.src,alt:"Attached image",__self:void 0,__source:{fileName:im,lineNumber:33,columnNumber:9}})))};const lm=w.b.div`
  padding: 1rem;
  background-color: white;
`,sm=w.b.div`
  display: flex;
`,mm=w.b.div`
  overflow: scroll;
  max-height: 38rem;
  display: grid;
  padding: 1.4rem;
  grid-template-columns: repeat(6, 1fr);
`,cm=w.b.div`
  min-width: 30rem;
  min-height: 40rem;
  transition: all linear .1s;
  position: relative;
`,um=w.b.div`
  font-size: 3.2rem;
  max-width: 3.2rem;
  cursor: pointer;
`,_m=w.b.div`
  padding: .2rem 1rem;
  display: flex;
  font-size: 2.1rem;
  cursor: pointer;
  width: 4.1rem;

  ${Object(k.a)("active")`
    background-color: #e9e9e9;
  `}
`;var dm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\EmojiContainer.jsx";const bm=e=>{const t=Object(l.d)(({assetState:e})=>e),[r,i]=Object(o.useState)([]),[n,s]=Object(o.useState)(0),[m,u]=Object(o.useState)(0);return bm.handleClickOutside=()=>e.hideOptions(),Object(o.useEffect)(()=>{(async()=>{const{data:e}=await ee.get(t.EMOJIS_NESTED_LIST);i([...e])})()},[]),a.a.createElement(c.a,{bounds:!0,onResize:({bounds:{height:e}})=>s(e),__self:void 0,__source:{fileName:dm,lineNumber:37,columnNumber:5}},({measureRef:t})=>a.a.createElement(os,{ref:t,bottomArrow:!0,height:n,emojiContainer:!0,__self:void 0,__source:{fileName:dm,lineNumber:39,columnNumber:9}},a.a.createElement(cm,{__self:void 0,__source:{fileName:dm,lineNumber:45,columnNumber:11}},0===r.length&&a.a.createElement(ki,{solidBackground:!0,__self:void 0,__source:{fileName:dm,lineNumber:46,columnNumber:37}}),a.a.createElement(mm,{__self:void 0,__source:{fileName:dm,lineNumber:48,columnNumber:13}},r.length>0&&r[m].subgroups.map(t=>t.emojis.map(t=>a.a.createElement(oo,{vertical:!0,key:t.codes,__self:void 0,__source:{fileName:dm,lineNumber:52,columnNumber:21}},a.a.createElement(um,{onClick:()=>e.addEmoji(t.char),__self:void 0,__source:{fileName:dm,lineNumber:53,columnNumber:23}},t.char))))),a.a.createElement(lm,{__self:void 0,__source:{fileName:dm,lineNumber:60,columnNumber:13}},a.a.createElement(sm,{__self:void 0,__source:{fileName:dm,lineNumber:61,columnNumber:15}},r.length>0&&r.map((e,t)=>a.a.createElement(oo,{key:e.subgroups[0].emojis[0].codes,onClick:()=>u(t),vertical:!0,__self:void 0,__source:{fileName:dm,lineNumber:64,columnNumber:21}},a.a.createElement(_m,{active:t===m,__self:void 0,__source:{fileName:dm,lineNumber:69,columnNumber:23}},e.subgroups[0].emojis[0].char))))))))};bm.prototype={};const fm={handleClickOutside:()=>bm.handleClickOutside};var Nm=Object(z.a)(bm,fm),pm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\ConversationButtons.jsx",vm=function(e){e.handleNewMessage;var t=Object(o.useState)([]),r=Object(_a.a)(t,2),i=r[0],n=r[1],s=Object(o.useState)(""),m=Object(_a.a)(s,2),c=m[0],_=m[1],d=Object(o.useState)(!1),f=Object(_a.a)(d,2),N=f[0],p=f[1],v=Object(o.useState)(null),g=Object(_a.a)(v,2),h=g[0],E=g[1],y=Object(o.useState)(!0),w=Object(_a.a)(y,2),k=w[0],S=w[1],O=Object(l.d)((function(e){return e.assetState})),x=(Object(l.d)((function(e){return e.userState.userId})),Object(l.d)((function(e){return e.messageState.currentConversation}))),j=(Object(l.d)((function(e){return e.messageState.newMessages})),Object(l.c)()),C=!0,P={operation:"add",attachedImages:i},T=function(e){Object(Sl.a)(i,e,1),n(Object(Tt.a)(i))},M=function(e){null===h&&E(e),h&&S(e===h)};return a.a.createElement(I,{__self:void 0,__source:{fileName:pm,lineNumber:187,columnNumber:5}},a.a.createElement(Zs,{__self:void 0,__source:{fileName:pm,lineNumber:188,columnNumber:7}},i.map((function(e,t){return a.a.createElement(nm,{key:t,src:e,index:t,removeAttachedImage:T,__self:void 0,__source:{fileName:pm,lineNumber:190,columnNumber:11}})}))),a.a.createElement(Ks,{__self:void 0,__source:{fileName:pm,lineNumber:198,columnNumber:7}},a.a.createElement(tr.b,{onSubmit:function(e,t){var r=e.messageText,o=[],a=qs()(),l=qs()(),s=r,m=Object(Tt.a)(i);t&&t.change({messageText:""}),n([]),setTimeout(Object(At.a)(Lt.a.mark((function e(){var t,r,n;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(i.length>0)){e.next=8;break}return e.next=4,Ts(m);case 4:return t=e.sent,e.next=7,Ms(t);case 7:o=e.sent;case 8:return r={text:s,recipientId:x.recipientId,conversationId:x.id,images:o,messageTextTempId:a,messageImageTempId:l},e.next=11,ee.post("/conversations/messages",r,te());case 11:if(n=e.sent,!n.data.success){e.next=17;break}j(Ft("Delivered")),e.next=18;break;case 17:throw new Error;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),j(Ft("Not Delivered"));case 23:case"end":return e.stop()}}),e,null,[[0,20]])}))),100)},mutators:{addEmoji:function(e,t,r){var o=Object(_a.a)(e,1)[0];r.changeValue(t,"messageText",(function(e){return e?e+o:o}))}},render:function(e){var t=e.form,r=e.handleSubmit,o=e.invalid;e.values;return a.a.createElement(em,{onSubmit:r,alignCenter:k,__self:void 0,__source:{fileName:pm,lineNumber:203,columnNumber:13}},a.a.createElement(tr.a,{name:"messageText",render:function(e){return a.a.createElement(am,Object.assign({onHeightChange:M,maxRows:8},e.input,{__self:void 0,__source:{fileName:pm,lineNumber:210,columnNumber:19}}))},validate:Br,__self:void 0,__source:{fileName:pm,lineNumber:207,columnNumber:15}}),a.a.createElement(xn.a,{onChange:function(e,t){return Pn(0,t,n,_,P)},__self:void 0,__source:{fileName:pm,lineNumber:219,columnNumber:15}},a.a.createElement(Xs,{src:O.ADD_IMAGE_ICON,alt:"Add image icon",__self:void 0,__source:{fileName:pm,lineNumber:230,columnNumber:17}})),a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:pm,lineNumber:236,columnNumber:15}},(function(e){return e&&a.a.createElement(D,{__self:void 0,__source:{fileName:pm,lineNumber:239,columnNumber:21}},a.a.createElement(Xs,{onClick:function(){return p(!N)},className:"conversation-emoji-button-ignore-outside-click",src:O.EMOJI_ICON,alt:"Add emoji icon",__self:void 0,__source:{fileName:pm,lineNumber:240,columnNumber:23}}),N&&a.a.createElement(Nm,{addEmoji:t.mutators.addEmoji,outsideClickIgnoreClass:"conversation-emoji-button-ignore-outside-click",hideOptions:function(){return p(!1)},__self:void 0,__source:{fileName:pm,lineNumber:248,columnNumber:25}}))})),C=o&&0===i.length,a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:pm,lineNumber:261,columnNumber:15}},(function(e){return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(Ct,{buttonText:"Send",mlAuto:!0,disabled:C,disabledColor:C,type:"submit",__self:void 0,__source:{fileName:pm,lineNumber:265,columnNumber:23}}),!e&&a.a.createElement("button",{type:"submit",__self:void 0,__source:{fileName:pm,lineNumber:276,columnNumber:23}},a.a.createElement(Xs,{src:O.SEND_MESSAGE_ICON,alt:"send message icon",__self:void 0,__source:{fileName:pm,lineNumber:277,columnNumber:25}})))})))},__self:void 0,__source:{fileName:pm,lineNumber:199,columnNumber:9}})),c&&a.a.createElement(gr,{error:c,__self:void 0,__source:{fileName:pm,lineNumber:290,columnNumber:30}}))};const gm=w.b.div`
  ${C};
  height: calc(100vh - ${e=>e.offsetHeight}px - var(--messages-navbar-offset) - ${e=>e.navbarHeight}px);
  overflow: scroll;
`,hm=w.b.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 100%;
   
   ${Object(k.a)("noConversation")`
     justify-content: center;
  `};
`,Em=w.b.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: .2rem;
  
  ${Object(k.a)("isLastMessageInSeries")`
      margin-bottom: 2rem;
  `};
  
  ${Object(k.a)("isLastMessage")`
      margin-bottom: 0;
  `};
`,ym=w.b.img`
  width: ${"3.2rem"};
  border-radius: 100px;
  margin-right: ${"1rem"};
`,wm=w.b.div`
  display: flex;
  flex-direction: column;
  
  
   ${Object(k.b)("authored","isLastMessageInSeries")`
      margin-left: calc(${"3.2rem"} + ${"1rem"});
  `};
  
  ${Object(k.a)("authored")`
      margin-left: auto;
      margin-right: 1.8rem;
  `};
  
  ${Object(k.a)("images")`
      margin-bottom: 1rem;
      margin-top: 1rem;
  `};
  
   ${Object(k.b)("authored","isLastMessageInSeries")`
      margin-left: calc(${"3.2rem"} + ${"1rem"});
  `};
   
   ${e=>!e.authored&&e.isLastMessageInSeries?"margin-bottom: 0":""}
   
`,km=w.b.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: .4fr 1fr;
  height: 100%;
  
  ${y(N)} {
     grid-template-columns: 1fr;
  }
`,Sm=(w.b.div`
  width: calc(100% + var(--standard-scroll-bar-width));
  
   ${Object(k.b)("scrolledToBottom")`
     visibility: hidden;
  `};
`,w.b.div`
  font-size: 1.3rem;
  margin-top: 1.2rem;
`),Om=w.b.div`
  font-size: 1.2rem;
  color: grey;
  margin-top: .2rem;
  margin-left: auto;
`,xm=w.b.div`
  color: var(--black-trash-icon);
  font-size: 1.2rem;
`,jm=w.b.div`
 ${Object(k.a)("authored")`
     margin-left: auto;
  `};
`,Cm=w.b.div`

  display: flex;
  flex-direction: column;
  position: relative;

  ${Object(k.a)("authored")`
      order: -1;
      margin-right: 2rem;
  `};
  
  ${Object(k.b)("authored")`
      margin-left: 2rem;
  `};
`,Im=w.b.div`
  padding: 1.5rem;
  border-radius: 26px;
  font-size: 1.4rem;
  max-width: 40rem;
  display: inline-block;
  
  ${Object(k.a)("authored","previousMessageIsSameAuthor")`
     border-top-right-radius: ${"4px"};
  `};
  
  ${e=>!e.authored&&e.previousMessageIsSameAuthor&&"border-top-left-radius: 4px;"}
  
  ${Object(k.a)("authored","previousMessageIsSameAuthor","timeStampBefore")`
     border-top-right-radius: ${"26px"};
  `};
  
  ${e=>!e.authored&&e.previousMessageIsSameAuthor&&e.timeStampBefore&&"border-top-left-radius: 26px;"}
  
  ${Object(k.a)("authored","nextMessageIsSameAuthor")`
     border-bottom-right-radius: ${"4px"};
  `};
  
  ${e=>!e.authored&&e.nextMessageIsSameAuthor&&"border-bottom-left-radius: 4px;"}
  
  ${Object(k.a)("authored","nextMessageIsSameAuthor","timeStampAfter")`
     border-bottom-right-radius: ${"26px"};
  `};
   
  ${e=>!e.authored&&e.nextMessageIsSameAuthor&&e.timeStampAfter&&"border-top-left-radius: 26px;"}
  
  ${Object(k.b)("authored")`
    background-color: #F1F0F0;
  `};
  
  ${Object(k.a)("authored")`
     background-color: var(--primary-color);
     color: white;
     margin-left: auto;
  `};
`,Dm=w.b.div`
  text-align: center;
  color: var(--messages-grey-color);
  font-size: 1.3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

   ${Object(k.a)("firstMessage")`
     margin-top: 0rem;
  `};
`;var Pm=r(204);const Tm=e=>1===e?1:e%2===0?2:3,Mm=w.b.img`
  width: 3.4rem;
  border-radius: 100px;
`,Lm=w.b.div`
  display: grid;
  grid-template-columns: repeat(${e=>Tm(e.imagesLength)}, 1fr);
  grid-gap: .6rem;
  
  ${Object(k.a)("messagePresent")`
    margin-bottom: .8rem;
  `};
`,Am=w.b.div`
 
  img {
   width: 40rem;
   border-radius: 10px;
   cursor: pointer;
    
   ${e=>2===Tm(e.imagesLength)&&"width: 30rem"}
   ${e=>3===Tm(e.imagesLength)&&"width: 25rem"}
  }
`;var $m="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_list_components\\NewConversationGreeting.jsx";var Wm=()=>{const e=Object(l.d)(({messageState:{currentConversation:e}})=>e);return a.a.createElement("div",{__self:void 0,__source:{fileName:$m,lineNumber:20,columnNumber:5}},e.createdAt&&a.a.createElement(hm,{__self:void 0,__source:{fileName:$m,lineNumber:22,columnNumber:9}},a.a.createElement(Dm,{first:!0,newMessage:!0,__self:void 0,__source:{fileName:$m,lineNumber:23,columnNumber:11}},es(e.createdAt)),a.a.createElement(Mm,{src:e.recipientProfileImage,__self:void 0,__source:{fileName:$m,lineNumber:26,columnNumber:11}}),a.a.createElement(Sm,{__self:void 0,__source:{fileName:$m,lineNumber:29,columnNumber:11}}," ","Say hi to ",e.recipientName," ")))},Bm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\Message\\MessageOptionsBox.jsx";const Um=e=>{const[t,r]=Object(o.useState)(!1),i=Object(l.d)(({messageState:{deleteMessages:e}})=>e),n=Object(l.c)();return Um.handleClickOutside=()=>e.hideOptions(),a.a.createElement(a.a.Fragment,null,a.a.createElement(os,{bottomArrow:!0,messageOptions:!0,__self:void 0,__source:{fileName:Bm,lineNumber:39,columnNumber:7}},a.a.createElement(as,{onClick:()=>r(!0),__self:void 0,__source:{fileName:Bm,lineNumber:40,columnNumber:9}},"Delete")),t&&a.a.createElement(ua,{closeModal:e.hideOptions,outsideClickIgnoreClass:e.outsideClickIgnoreClass,__self:void 0,__source:{fileName:Bm,lineNumber:44,columnNumber:9}},a.a.createElement(ns,{text:"Are you sure you want to delete your message?",buttonText:"Delete",closeAlert:e.hideOptions,action:async()=>{const t=e.message.id,{data:r}=await ee.delete("/conversations/messages/"+t,te());if(!r.success)throw new Error;n((e=>({type:"DELETE_MESSAGES",deleteMessages:e}))([...i,t]))},heading:"Delete Message",__self:void 0,__source:{fileName:Bm,lineNumber:48,columnNumber:11}})))};Um.prototype={};const Ym={handleClickOutside:()=>Um.handleClickOutside};var Rm=Object(z.a)(Um,Ym),zm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\Message\\MessageOptions.jsx";var Fm=({authored:e,setOpenOptions:t,openOptions:r,message:o,hideMessageOptions:i})=>{const n=Object(l.d)(({assetState:{OPTIONS_ICON:e}})=>e);return a.a.createElement(Cm,{authored:e,__self:void 0,__source:{fileName:zm,lineNumber:29,columnNumber:5}},a.a.createElement(xm,{__self:void 0,__source:{fileName:zm,lineNumber:30,columnNumber:7}},es(o.createdAt)),e&&a.a.createElement(jm,{authored:e,onClick:()=>t(!0),className:"message-options-ignore-click",__self:void 0,__source:{fileName:zm,lineNumber:35,columnNumber:9}},a.a.createElement(fs,{svgClasses:["standard-icon","three-dots-options-small"],src:n,__self:void 0,__source:{fileName:zm,lineNumber:40,columnNumber:11}})),e&&r&&a.a.createElement(Rm,{message:o,hideOptions:()=>{i(),t(!1)},outsideClickIgnoreClass:"message-options-ignore-click",__self:void 0,__source:{fileName:zm,lineNumber:48,columnNumber:9}}))},Vm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\Message\\MessageImages.jsx";var Hm=({message:e,nextMessage:t})=>{const r=Object(l.c)(),o=Object(l.d)(({messageState:{messageImagesLoaded:e}})=>e);return a.a.createElement(Lm,{messagePresent:e.text&&t,imagesLength:e.images.length,__self:void 0,__source:{fileName:Vm,lineNumber:16,columnNumber:5}},e.images.map((t,i)=>a.a.createElement(Am,{key:i,imagesLength:e.images.length,multipleImages:e.images.length>0,__self:void 0,__source:{fileName:Vm,lineNumber:21,columnNumber:9}},a.a.createElement(Pm.a,{src:t,onLoad:()=>r((e=>({type:"MESSAGE_IMAGES_LOADED",messageImagesLoaded:e}))(o+1)),alt:"Message image",__self:void 0,__source:{fileName:Vm,lineNumber:26,columnNumber:11}}))))},Gm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\Message\\Message.jsx";var qm=({message:e,nextMessage:t,previousMessage:r,timeStampBefore:i,timeStampAfter:n})=>{const[s,m]=Object(o.useState)(!1),[c,u]=Object(o.useState)(!1),_=Object(l.d)(({userState:{userId:e}})=>e),d=Object(l.d)(({messageState:e})=>e),{lastMessageStatus:b,currentConversation:f}=d,N=_===e.authoredUserId,p=r&&e.authoredUserId===r.authoredUserId,v=t&&e.authoredUserId===t.authoredUserId,g=(e,t)=>!t||(e.authoredUserId!==t.authoredUserId||1<ts(e.createdAt,t.createdAt));return a.a.createElement(Em,{key:e.id,isLastMessageInSeries:g(e,t),isLastMessage:!t,image:!e.text,__self:void 0,__source:{fileName:Gm,lineNumber:57,columnNumber:5}},g(e,t)&&!N&&a.a.createElement(ym,{src:f.recipientProfileImage,alt:"Message profile image",__self:void 0,__source:{fileName:Gm,lineNumber:64,columnNumber:9}}),a.a.createElement(wm,{authored:N,isLastMessageInSeries:g(e,t),images:e.images.length>0,__self:void 0,__source:{fileName:Gm,lineNumber:70,columnNumber:7}},a.a.createElement(P,{alignCenter:!0,onMouseLeave:()=>{c||m(!1)},onMouseEnter:()=>m(!0),__self:void 0,__source:{fileName:Gm,lineNumber:75,columnNumber:9}},e.images.length>0&&a.a.createElement(Hm,{message:e,nextMessage:t,__self:void 0,__source:{fileName:Gm,lineNumber:81,columnNumber:13}}),e.text&&a.a.createElement(Im,{authored:N,timeStampAfter:n,timeStampBefore:i,previousMessageIsSameAuthor:p,nextMessageIsSameAuthor:v,__self:void 0,__source:{fileName:Gm,lineNumber:85,columnNumber:13}},e.text),s&&a.a.createElement(Fm,{authored:N,hideMessageOptions:()=>m(!1),message:e,openOptions:c,setOpenOptions:u,__self:void 0,__source:{fileName:Gm,lineNumber:97,columnNumber:13}})),!t&&N&&a.a.createElement(Om,{__self:void 0,__source:{fileName:Gm,lineNumber:108,columnNumber:11}}," ",b," ")))},Jm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\ConversationRenderMessage.jsx";var Km=({message:e,index:t,nextMessage:r,previousMessage:o})=>{const i=r&&1<ts(e.createdAt,r.createdAt),n=o&&1<ts(e.createdAt,o.createdAt);return a.a.createElement(a.a.Fragment,null,0===t&&a.a.createElement(Dm,{key:qs()(),firstMessage:!0,__self:void 0,__source:{fileName:Jm,lineNumber:27,columnNumber:9}},es(e.createdAt)),a.a.createElement(qm,{key:e.id,previousMessage:o,message:e,timeStampBefore:n,timeStampAfter:i,nextMessage:r,__self:void 0,__source:{fileName:Jm,lineNumber:32,columnNumber:7}}),i&&a.a.createElement(Dm,{key:qs()(),__self:void 0,__source:{fileName:Jm,lineNumber:42,columnNumber:9}}," ",es(r.createdAt)," "))},Xm="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\ConversationMessageDisplay.jsx",Qm=function(e){var t=zs.a.Element,r=Object(o.useRef)(null),i=Object(l.d)((function(e){return e.messageState})),n=Object(l.d)((function(e){return e.navbarState.navbarHeight})),s=Object(l.d)((function(e){return e.userState.userId})),m=i.currentConversation,c=i.newCurrentConversationMessages,u=i.lastMessageStatus,_=i.messageImagesLoaded,d=i.deleteMessages,b=i.updateConversationOnMessageDelete,f=Object(o.useState)(""),N=Object(_a.a)(f,2),p=N[0],v=N[1],g=Object(o.useState)(1),h=Object(_a.a)(g,2),E=h[0],y=h[1],w=Object(o.useState)(!0),k=Object(_a.a)(w,2),S=k[0],O=k[1],x=Object(o.useState)(!1),j=Object(_a.a)(x,2),C=j[0],I=j[1],D=Object(l.c)(),P=function(){var t=Object(At.a)(Lt.a.mark((function t(r,o){var a,i,n,l,s;return Lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,I(!0),v(""),a=r||E,i=o||m.id,n={page:a,conversationId:i},t.next=8,ee.get("/conversations/messages",re(n));case 8:if(l=t.sent,!(s=l.data).success){t.next=15;break}O(S),1===a?(e.setMessages(s.messages),D(Ft("Delivered"))):e.setMessages([].concat(Object(Tt.a)(s.messages),Object(Tt.a)(e.messages))),t.next=16;break;case 15:throw new Error;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),v("Messages could not loaded");case 21:return t.prev=21,I(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(e,r){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){d.length>0&&function(){var t=d.shift(),r=e.messages.findIndex((function(e){return e.id===t}));if(e.messages.length===r+1){var o=[].concat(Object(Tt.a)(b),[e.messages[r].conversationId]);D(Vt(o))}Object(Sl.a)(e.messages,r,1),e.setMessages(Object(Tt.a)(e.messages))}()}),[d.length]),Object(o.useEffect)((function(){c.length>0&&function(){console.log(c);var t=c.shift();if(-1===e.messages.findIndex((function(e){return e.tempId===t.tempId}))){var o=t.authoredUserId===s;e.setMessages([].concat(Object(Tt.a)(e.messages),[t])),D(Bt(c)),e.setNewMessageAdded(!0),(o||!o&&Hs(r))&&Vs(e.setScrolledToBottom)}}()}),[c.length]),Object(o.useEffect)((function(){m.id&&(1===E?(P(1,m.id),y(1)):(e.setMessages([]),y(1)))}),[m.id]),Object(o.useEffect)((function(){2===E&&e.messages.length>0&&u&&!e.newMessageAdded&&Vs(e.setScrolledToBottom)}),[E,e.messages.length,u,_]),Object(o.useEffect)((function(){m.id&&P(E,m.id)}),[E]),a.a.createElement(gm,{borderBottom:!0,navbarHeight:n,offsetHeight:e.offsetHeight,ref:r,onScroll:function(e){return Fs(e,S,r,E,y)},id:"messageListContainer",__self:void 0,__source:{fileName:Xm,lineNumber:185,columnNumber:5}},C&&1===E&&a.a.createElement(ki,{solidBackground:!0,__self:void 0,__source:{fileName:Xm,lineNumber:201,columnNumber:33}}),p&&a.a.createElement(oo,{vertical:!0,h100:!0,__self:void 0,__source:{fileName:Xm,lineNumber:204,columnNumber:9}},a.a.createElement(Za,{__self:void 0,__source:{fileName:Xm,lineNumber:205,columnNumber:11}},p)),!p&&e.messages.length>0&&a.a.createElement("div",{scrolledToBottom:e.scrolledToBottom,__self:void 0,__source:{fileName:Xm,lineNumber:210,columnNumber:9}},e.messages.map((function(t,r){return a.a.createElement(Km,{message:t,key:r,previousMessage:e.messages[r-1],nextMessage:e.messages[r+1],index:r,__self:void 0,__source:{fileName:Xm,lineNumber:212,columnNumber:13}})}))),a.a.createElement(t,{name:"lastMessagePosition",__self:void 0,__source:{fileName:Xm,lineNumber:223,columnNumber:7}}),!p&&0===e.messages.length&&a.a.createElement(Wm,{__self:void 0,__source:{fileName:Xm,lineNumber:226,columnNumber:9}}))},Zm=r(85),ec=r.n(Zm),tc=r(988),rc=r(408),oc=r(405),ac=r.n(oc),ic=r(406),nc=r.n(ic),lc=r(407),sc=r(145);const mc=w.b.div`
  display: flex;
  align-items: center;
`,cc=w.b.img`
  border-radius: 100px;
  width: 5.2rem;
  margin-right: 1.2rem;
`,uc=w.b.div`
  font-size: 1.9rem;
  font-family: "Bold";
  margin-bottom: .2rem;
`,_c=w.b.div`
  color: var(--messages-grey-color);
  font-size: 1.3rem;
`,dc=w.b.img`
  width: 1.4rem;
  margin-right: 2.2rem;
`;var bc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\ConversationHeading.jsx";tc.a.addLocale(rc);var fc=()=>{const e=new tc.a("en-US"),t=Object(l.d)(({messageState:{currentConversation:e}})=>e),r=Object(l.d)(({assetState:e})=>e),i=Object(l.c)(),[n,s]=Object(o.useState)(0);let m;if(Object(o.useEffect)(()=>{(async()=>{await Object(sc.a)(nc()("10 minutes")),s(n+1)})()},[n]),t.recipientIsOnline)m="Online Now";else{const r=new Date(t.recipientLastSignIn);t.recipientLastSignIn&&(m=e.format(ac.a.subtract(r,1,"seconds"),{gradation:lc.a}))}return a.a.createElement(I,{smallPadding:!0,borderBottom:!0,emptyConversation:ec()(t),__self:void 0,__source:{fileName:bc,lineNumber:66,columnNumber:5}},t.recipientLastSignIn&&a.a.createElement(mc,{__self:void 0,__source:{fileName:bc,lineNumber:72,columnNumber:9}},a.a.createElement(u.a,{query:"(max-width: 56.25em)",__self:void 0,__source:{fileName:bc,lineNumber:73,columnNumber:11}},e=>e&&a.a.createElement(dc,{src:r.BACK_ICON,onClick:()=>{i(Ut(!1))},__self:void 0,__source:{fileName:bc,lineNumber:76,columnNumber:17}})),a.a.createElement(D,{__self:void 0,__source:{fileName:bc,lineNumber:85,columnNumber:11}},a.a.createElement(cc,{src:t.recipientProfileImage,__self:void 0,__source:{fileName:bc,lineNumber:86,columnNumber:13}}),t.recipientIsOnline&&a.a.createElement(ys,{headingIndicator:!0,__self:void 0,__source:{fileName:bc,lineNumber:90,columnNumber:15}})),a.a.createElement("div",{__self:void 0,__source:{fileName:bc,lineNumber:93,columnNumber:11}},a.a.createElement(uc,{__self:void 0,__source:{fileName:bc,lineNumber:94,columnNumber:13}},t.recipientName),a.a.createElement(_c,{__self:void 0,__source:{fileName:bc,lineNumber:97,columnNumber:13}},m))))},Nc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\conversation_message_components\\ConversationDetails.jsx",pc=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),r=Object(_a.a)(t,2),i=r[0],n=(r[1],Object(o.useState)(0)),s=Object(_a.a)(n,2),m=s[0],u=s[1],_=Object(o.useState)(0),d=Object(_a.a)(_,2),b=d[0],f=d[1],N=Object(o.useState)([]),p=Object(_a.a)(N,2),v=p[0],g=p[1],h=Object(o.useState)(!1),E=Object(_a.a)(h,2),y=E[0],w=E[1],k=Object(o.useState)(!1),S=Object(_a.a)(k,2),O=S[0],x=S[1],C=Object(l.c)(),I=Object(l.d)((function(e){return e.messageState})),D=(Object(l.d)((function(e){return e.navbarState.navbarHeight})),Object(l.d)((function(e){return e.userState.userId}))),P=(I.currentConversation,I.newCurrentConversationMessages),T=(I.lastMessageStatus,I.messageImagesLoaded,I.deleteMessages,I.updateConversationOnMessageDelete,function(){var t=P.shift();if(-1===v.findIndex((function(e){return e.tempId===t.tempId}))){console.log("I m ");var r=t.authoredUserId===D;g([].concat(Object(Tt.a)(v),[t])),C(Bt(P)),x(!0),(r||!r&&Hs(e))&&Vs(w)}});return a.a.createElement(j,{__self:void 0,__source:{fileName:Nc,lineNumber:74,columnNumber:5}},i&&a.a.createElement(ki,{loadingText:"Loading Messages",solidBackground:!0,__self:void 0,__source:{fileName:Nc,lineNumber:75,columnNumber:19}}),a.a.createElement(M,{__self:void 0,__source:{fileName:Nc,lineNumber:77,columnNumber:7}},a.a.createElement(c.a,{bounds:!0,onResize:function(e){var t=e.bounds.height;return u(t)},__self:void 0,__source:{fileName:Nc,lineNumber:78,columnNumber:9}},(function(e){var t=e.measureRef;return a.a.createElement("div",{ref:t,__self:void 0,__source:{fileName:Nc,lineNumber:83,columnNumber:13}},a.a.createElement(fc,{__self:void 0,__source:{fileName:Nc,lineNumber:84,columnNumber:15}}))})),a.a.createElement(Qm,{offsetHeight:m+b,setMessages:g,messages:v,newMessageAdded:O,setScrolledToBottom:w,scrolledToBottom:y,setNewMessageAdded:x,__self:void 0,__source:{fileName:Nc,lineNumber:89,columnNumber:9}}),a.a.createElement(c.a,{bounds:!0,onResize:function(e){var t=e.bounds.height;return f(t)},__self:void 0,__source:{fileName:Nc,lineNumber:99,columnNumber:9}},(function(e){var t=e.measureRef;return a.a.createElement("div",{ref:t,__self:void 0,__source:{fileName:Nc,lineNumber:106,columnNumber:13}},a.a.createElement(vm,{handleNewMessage:T,__self:void 0,__source:{fileName:Nc,lineNumber:107,columnNumber:15}}))}))))},vc=r(212),gc=r.n(vc),hc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\messages\\Messages.jsx";var Ec=()=>{const e=Object(l.d)(({userState:{emailVerified:e}})=>e),t=Object(l.d)(({navbarState:{navbarHeight:e}})=>e),{mobileActiveConversation:r}=Object(l.d)(({messageState:e})=>e);bt();return Object(o.useEffect)(()=>()=>{(async()=>{try{await ee.delete("/conversations/loaded_conversations",te())}catch(e){}})()},[]),a.a.createElement("div",{__self:void 0,__source:{fileName:hc,lineNumber:50,columnNumber:5}},e&&a.a.createElement(S,{messages:!0,navbarHeight:t,__self:void 0,__source:{fileName:hc,lineNumber:52,columnNumber:9}},a.a.createElement(km,{__self:void 0,__source:{fileName:hc,lineNumber:53,columnNumber:11}},a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:hc,lineNumber:54,columnNumber:13}},e=>a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ys,{__self:void 0,__source:{fileName:hc,lineNumber:59,columnNumber:23}}),a.a.createElement(pc,{__self:void 0,__source:{fileName:hc,lineNumber:60,columnNumber:23}})),!e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(gc.a,{show:!r,__self:void 0,__source:{fileName:hc,lineNumber:66,columnNumber:23}},a.a.createElement(Ys,{__self:void 0,__source:{fileName:hc,lineNumber:67,columnNumber:25}})),a.a.createElement(gc.a,{show:r,__self:void 0,__source:{fileName:hc,lineNumber:69,columnNumber:23}},a.a.createElement(pc,{__self:void 0,__source:{fileName:hc,lineNumber:70,columnNumber:25}}))))))),!1===e&&a.a.createElement(ji,{__self:void 0,__source:{fileName:hc,lineNumber:81,columnNumber:35}}))};const yc=w.b.div`
  background-color: white;
  padding: 3rem;
  position: relative;
`,wc=w.b.h1`
  font-size: 4rem;
  
  ${y(N)} {
    font-size: 3rem;
  }
`,kc=w.b.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`,Sc=w.b.div`
  display: grid;
  grid-template-columns: 4fr 1.2fr;
  grid-column-gap: 9rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
  
  ${y(N)} {
        grid-template-columns: 1fr;
        grid-row-gap: 6rem;
        margin-top: 2rem;
        margin-bottom: 6rem;
  }
`,Oc=w.b.div`
  margin-left: auto;
  margin-top: .2rem;
  position: relative;
`,xc=w.b.div`
  margin-bottom: 4rem;
`,jc=w.b.div`
  margin-bottom: .6rem;
`,Cc=w.b.div`
  margin-bottom: 4rem;
`,Ic=w.b.div`
  margin-bottom: 4rem;
`;var Dc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\modals\\ReportModal.jsx";var Pc=e=>{const[t,r]=Object(o.useState)(!1);return a.a.createElement("div",{__self:void 0,__source:{fileName:Dc,lineNumber:48,columnNumber:5}},a.a.createElement(oa,{__self:void 0,__source:{fileName:Dc,lineNumber:49,columnNumber:7}},"Report ",Object(Ar.a)(e.reportedEntityType)),!t&&a.a.createElement("div",{__self:void 0,__source:{fileName:Dc,lineNumber:53,columnNumber:9}},a.a.createElement(aa,{__self:void 0,__source:{fileName:Dc,lineNumber:54,columnNumber:11}},"We're sorry you had this experience. Please let us know which of the following apply."),a.a.createElement(tr.b,{onSubmit:async t=>{try{const o={...t,reportedEntityId:e.reportedEntityId,reportedEntityType:e.reportedEntityType},{data:{success:a,error:i}}=await ee.post("/report",o,te());if(!a)return{[jr.a]:i};r(!0)}catch(o){return{[jr.a]:"Something went wrong"}}},mutators:{setValue:Yr},initialValues:{},render:({handleSubmit:t,form:r,submitting:o,submitError:i,invalid:n})=>a.a.createElement("form",{onSubmit:t,__self:void 0,__source:{fileName:Dc,lineNumber:70,columnNumber:15}},a.a.createElement(ia,{__self:void 0,__source:{fileName:Dc,lineNumber:71,columnNumber:17}},a.a.createElement(fi,{label:"Choose the following that apply",options:po,type:"radio",setValue:r.mutators.setValue,name:"type",__self:void 0,__source:{fileName:Dc,lineNumber:72,columnNumber:19}})),a.a.createElement(P,{__self:void 0,__source:{fileName:Dc,lineNumber:80,columnNumber:17}},a.a.createElement(rt,{buttonText:"Back",rightMargin:!0,onClick:e.closeModal,__self:void 0,__source:{fileName:Dc,lineNumber:81,columnNumber:19}}),a.a.createElement(Ct,{buttonText:"Report",loading:o,rightSideLoading:!0,disabled:n,type:"submit",disabledColor:n,__self:void 0,__source:{fileName:Dc,lineNumber:87,columnNumber:19}})),a.a.createElement(gr,{error:i,__self:void 0,__source:{fileName:Dc,lineNumber:96,columnNumber:17}})),__self:void 0,__source:{fileName:Dc,lineNumber:59,columnNumber:11}})),t&&a.a.createElement("div",{__self:void 0,__source:{fileName:Dc,lineNumber:103,columnNumber:9}},a.a.createElement(aa,{__self:void 0,__source:{fileName:Dc,lineNumber:104,columnNumber:11}},"Thank you for submitting your report. We will review the information you sent over and resolve this issue as quickly as possible."),a.a.createElement(rt,{buttonText:"Back",onClick:e.closeModal,__self:void 0,__source:{fileName:Dc,lineNumber:108,columnNumber:11}})))},Tc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostOptions.jsx",Mc=function e(t){var r=t.post,i=t.postSection,n=t.outsideClickIgnoreClass,s=(t.reportedEntityType,t.hideOptions),c=t.postDeleted,u=Object(o.useState)(!1),_=Object(_a.a)(u,2),d=_[0],b=_[1],f=Object(o.useState)(!1),N=Object(_a.a)(f,2),p=N[0],v=N[1],g=Object(l.d)((function(e){return e.userState.userId})),h=Object(l.c)(),E=Object(m.f)();e.handleClickOutside=function(){s()};var y=function(){var e=Object(At.a)(Lt.a.mark((function e(){var t;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.delete("/posts/".concat(r.id),re({postId:r.id}));case 2:t=e.sent,t.data.success&&c(),"home"===i&&E.push("/");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return r.belongsToUser.id==g},k=function(){v(!1),b(!1),s()};return a.a.createElement(os,{__self:void 0,__source:{fileName:Tc,lineNumber:73,columnNumber:5}},!w()&&a.a.createElement(as,{onClick:function(){return b(!0)},__self:void 0,__source:{fileName:Tc,lineNumber:75,columnNumber:9}},"Report"),w()&&a.a.createElement("div",{__self:void 0,__source:{fileName:Tc,lineNumber:79,columnNumber:9}},a.a.createElement(as,{onClick:function(){h({type:"EDIT_POST_ID",editPostId:r.id}),E.push("/posts/edit/".concat(r.id))},__self:void 0,__source:{fileName:Tc,lineNumber:80,columnNumber:11}},"Edit Post"),a.a.createElement(as,{onClick:function(){y(r)},__self:void 0,__source:{fileName:Tc,lineNumber:81,columnNumber:11}},"Delete Post")),p&&a.a.createElement(ua,{closeModal:k,__self:void 0,__source:{fileName:Tc,lineNumber:92,columnNumber:9}}),d&&a.a.createElement(ua,{closeModal:k,outsideClickIgnoreClass:n,__self:void 0,__source:{fileName:Tc,lineNumber:104,columnNumber:9}},a.a.createElement(Pc,{reportedEntityId:r.id,closeModal:k,reportedEntityType:"post",__self:void 0,__source:{fileName:Tc,lineNumber:108,columnNumber:11}})))};Mc.prototype={};var Lc={handleClickOutside:function(){return Mc.handleClickOutside}},Ac=Object(z.a)(Mc,Lc);const $c=w.b.div`
  font-family: "Bold";
  margin-bottom: .6rem;
`,Wc=w.b.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  
  ${Object(k.a)("smallContainer")`
       grid-template-columns: 1fr 1fr;
  `};
  
   ${y(N)} {
       grid-template-columns: 1fr;
   }
`;var Bc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostRequirements.jsx";var Uc=({post:e,smallContainer:t})=>a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:10,columnNumber:3}},e.space&&e.cost&&a.a.createElement(Wc,{smallContainer:t,__self:void 0,__source:{fileName:Bc,lineNumber:12,columnNumber:7}},a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:13,columnNumber:9}},a.a.createElement($c,{__self:void 0,__source:{fileName:Bc,lineNumber:14,columnNumber:11}},"Space"),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:15,columnNumber:11}},e.space.min," to ",e.space.max," sqft")),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:20,columnNumber:9}},a.a.createElement($c,{__self:void 0,__source:{fileName:Bc,lineNumber:21,columnNumber:11}},"Cost"),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:22,columnNumber:11}},"$",e.cost.min," to $",e.cost.max," / month")),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:27,columnNumber:9}},a.a.createElement($c,{__self:void 0,__source:{fileName:Bc,lineNumber:28,columnNumber:11}},"Type"),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:29,columnNumber:11}},e.type)),a.a.createElement("div",{__self:void 0,__source:{fileName:Bc,lineNumber:32,columnNumber:9}},a.a.createElement($c,{__self:void 0,__source:{fileName:Bc,lineNumber:33,columnNumber:11}},"Transit"),e.transit&&e.transit.map((e,t)=>a.a.createElement("div",{key:t,__self:void 0,__source:{fileName:Bc,lineNumber:35,columnNumber:47}},e)))));const Yc=e=>Zl()(e,"mmm d, yyyy");var Rc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostDetailsItem.jsx";var zc=({post:e,postSection:t,anyChange:r,setAnyChange:i,smallContainer:n})=>{const[s,m]=Object(o.useState)(!1),c=Object(l.d)(({sessionState:e})=>e.isLoggedIn),u=Object(l.d)(({assetState:{OPTIONS_ICON:e}})=>e);return a.a.createElement(yc,{__self:void 0,__source:{fileName:Rc,lineNumber:40,columnNumber:5}},e.belongsToUser&&a.a.createElement("div",{__self:void 0,__source:{fileName:Rc,lineNumber:42,columnNumber:9}},a.a.createElement(kc,{__self:void 0,__source:{fileName:Rc,lineNumber:43,columnNumber:11}},a.a.createElement(wc,{__self:void 0,__source:{fileName:Rc,lineNumber:44,columnNumber:13}}," ",e.title," "),c&&a.a.createElement(Oc,{__self:void 0,__source:{fileName:Rc,lineNumber:46,columnNumber:15}},a.a.createElement(L.a,{src:u,onClick:()=>m(!s),className:"post-options-ignore-click-"+e.id,beforeInjection:e=>{e.classList.add("standard-icon")},__self:void 0,__source:{fileName:Rc,lineNumber:47,columnNumber:17}}),s&&a.a.createElement(Ac,{post:e,postSection:t,outsideClickIgnoreClass:"post-options-ignore-click-"+e.id,reportedEntityType:"post",hideOptions:()=>m(!1),postDeleted:function(){i(!0)},__self:void 0,__source:{fileName:Rc,lineNumber:57,columnNumber:19}}))),a.a.createElement(Ic,{__self:void 0,__source:{fileName:Rc,lineNumber:70,columnNumber:11}},"Posted ",Yc(e.createdAt)," by"," ",e.belongsToUser.name),a.a.createElement(Cc,{__self:void 0,__source:{fileName:Rc,lineNumber:75,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Rc,lineNumber:76,columnNumber:13}},"Details"),a.a.createElement(xc,{__self:void 0,__source:{fileName:Rc,lineNumber:77,columnNumber:13}},e.description)),a.a.createElement(Cc,{__self:void 0,__source:{fileName:Rc,lineNumber:82,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Rc,lineNumber:83,columnNumber:13}},"Location"),a.a.createElement("div",{__self:void 0,__source:{fileName:Rc,lineNumber:84,columnNumber:13}},e.location)),a.a.createElement(Uc,{post:e,smallContainer:n,__self:void 0,__source:{fileName:Rc,lineNumber:86,columnNumber:11}})))};const Fc=w.b.div`
  margin-top: 6rem;
  padding-bottom: 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 6rem;
`,Vc=w.b.h1`
  font-size: 2.6rem;
  font-family: Bold;
  margin-bottom: 1.6rem;
`,Hc=w.b.p`
  margin-bottom: 3rem;
`;w.b.div`
  width: 60%;
`;var Gc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\user_posts\\NoPosts.jsx";var qc=()=>a.a.createElement(Oi,{__self:void 0,__source:{fileName:Gc,lineNumber:8,columnNumber:3}},a.a.createElement(Vc,{__self:void 0,__source:{fileName:Gc,lineNumber:9,columnNumber:5}},"You Don't Have Any Posts"),a.a.createElement(Hc,{__self:void 0,__source:{fileName:Gc,lineNumber:10,columnNumber:5}},"It looks like you haven't created any posts yet. Click the button below to create your first one."),a.a.createElement(s.b,{to:"/post",__self:void 0,__source:{fileName:Gc,lineNumber:14,columnNumber:5}},a.a.createElement(Ct,{buttonText:"Create Post",__self:void 0,__source:{fileName:Gc,lineNumber:15,columnNumber:7}}))),Jc="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\user_posts\\UserPosts.jsx",Kc=function(){var e=Object(o.useState)(!1),t=Object(_a.a)(e,2),r=t[0],i=t[1],n=Object(o.useState)([]),l=Object(_a.a)(n,2),s=l[0],m=l[1],c=Object(o.useState)(1),u=Object(_a.a)(c,2),_=u[0],d=u[1],b=Object(o.useState)(""),f=Object(_a.a)(b,2),N=f[0],p=f[1],v=Object(o.useState)(!0),g=Object(_a.a)(v,2),h=g[0],E=g[1],y=Object(o.useState)(!1),w=Object(_a.a)(y,2),k=w[0],O=w[1],x=function(){var e=Object(At.a)(Lt.a.mark((function e(){var t,r;return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,ee.get("/users/posts",re({page:_}));case 4:if(t=e.sent,!(r=t.data).success){e.next=11;break}m(1===_?r.posts:[].concat(Object(Tt.a)(s),Object(Tt.a)(r.posts))),E(r.hasNextPage),e.next=12;break;case 11:throw new Error;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),p("Posts could not be loaded right now. Please try again later");case 17:return e.prev=17,i(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){(1===_||h)&&x()}),[_]),Object(o.useEffect)((function(){k&&(1===_?x():(O(!1),d(1)))}),[k]),a.a.createElement("div",{__self:void 0,__source:{fileName:Jc,lineNumber:77,columnNumber:5}},!N&&s.length>0&&a.a.createElement(S,{userPosts:!0,__self:void 0,__source:{fileName:Jc,lineNumber:79,columnNumber:9}},a.a.createElement(Hl.a,{onBottom:function(){h&&!r&&d(_+1)},__self:void 0,__source:{fileName:Jc,lineNumber:80,columnNumber:11}},a.a.createElement(Fc,{__self:void 0,__source:{fileName:Jc,lineNumber:81,columnNumber:13}},s.map((function(e,t){return a.a.createElement(zc,{post:e,smallContainer:!0,key:t,setAnyChange:O,__self:void 0,__source:{fileName:Jc,lineNumber:83,columnNumber:17}})}))))),!N&&!r&&0===s.length&&a.a.createElement(qc,{__self:void 0,__source:{fileName:Jc,lineNumber:95,columnNumber:59}}),N&&a.a.createElement(Oi,{clearBackground:!0,__self:void 0,__source:{fileName:Jc,lineNumber:98,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:Jc,lineNumber:99,columnNumber:11}},"Posts could not be loaded")),!N&&r&&0===s.length&&a.a.createElement(ki,{fillPage:!0,clearBackground:!0,__self:void 0,__source:{fileName:Jc,lineNumber:104,columnNumber:9}}))};const Xc=w.b.img`
  border-radius: 100px;
  width: 3.8rem;
  margin-right: 1rem;
  
  ${Object(k.a)("profileModal")`
    width: 11rem;
    margin-right: 2rem
  `}
`,Qc=w.b.div`
  font-family: "Bold";
  
   ${Object(k.a)("profileModal")`
    font-size: 2.4rem
    margin-bottom: .6rem
  `}
`,Zc=w.b.div`
  display: grid;
  grid-row-gap: 3rem;
`,eu=w.b.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  ${Object(k.a)("profileModal")`
    margin-top: 4rem;
    margin-bottom: 5rem;
  `}
`,tu=Object(w.b)(L.a)`
  margin-left: auto;
  align-items: center;
  display: flex;
`,ru=w.b.div`
  margin-bottom: 2rem;
`,ou=w.b.div`
  ${y(v)} {
    margin-top: 10rem;
    position: sticky;
  }
`,au=w.b.div`
  color: grey;
  font-size: 1.4rem;
  margin-top: 1rem;
  cursor: pointer;
`;r(977);var iu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\UserOptions.jsx";const nu=e=>{const[t,r]=Object(o.useState)(!1),[i,n]=Object(o.useState)(!1),l=Object(m.f)(),s=()=>{r(!1),n(!1),e.hideOptions()};nu.handleClickOutside=()=>{e.hideOptions()};return a.a.createElement(os,{profileOptions:!0,__self:void 0,__source:{fileName:iu,lineNumber:31,columnNumber:5}},a.a.createElement(as,{onClick:()=>r(!0),__self:void 0,__source:{fileName:iu,lineNumber:32,columnNumber:7}},"Block"),a.a.createElement(as,{onClick:()=>n(!0),__self:void 0,__source:{fileName:iu,lineNumber:33,columnNumber:7}},"Report"),i&&a.a.createElement(ua,{closeModal:s,outsideClickIgnoreClass:e.outsideClickIgnoreClass,__self:void 0,__source:{fileName:iu,lineNumber:36,columnNumber:9}},a.a.createElement(Pc,{reportedEntityId:e.user.id,closeModal:s,reportedEntityType:"user",__self:void 0,__source:{fileName:iu,lineNumber:40,columnNumber:11}})),t&&a.a.createElement(ss,{user:e.user,handleBlockedUserConfirmation:()=>{l.push("/")},outsideClickIgnoreClass:e.outsideClickIgnoreClass,closeModal:s,__self:void 0,__source:{fileName:iu,lineNumber:49,columnNumber:9}}))};nu.prototype={};const lu={handleClickOutside:()=>nu.handleClickOutside};var su=Object(z.a)(nu,lu),mu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostProfileInfo.jsx";var cu=({profile:e,postAuthoredByCurrentUser:t,setShowPostProfileInfoModal:r})=>{const[i,n]=Object(o.useState)(!1),s=Object(l.d)(({sessionState:e})=>e.isLoggedIn),m=Object(l.d)(({assetState:{OPTIONS_ICON:e}})=>e);return a.a.createElement(eu,{__self:void 0,__source:{fileName:mu,lineNumber:25,columnNumber:5}},a.a.createElement(Xc,{src:e.profileImage,alt:"Author's profile picture",__self:void 0,__source:{fileName:mu,lineNumber:26,columnNumber:7}}),a.a.createElement(ri,{clickable:!0,onClick:()=>r(!0),__self:void 0,__source:{fileName:mu,lineNumber:27,columnNumber:7}},e.name),!t&&s&&a.a.createElement(tu,{onClick:()=>n(!0),className:"post-profile-options-ignore-click",src:m,beforeInjection:e=>{e.classList.add("standard-icon"),e.classList.add("three-dots-options-small")},__self:void 0,__source:{fileName:mu,lineNumber:31,columnNumber:9}}),i&&a.a.createElement(su,{user:e,outsideClickIgnoreClass:"post-profile-options-ignore-click",hideOptions:()=>n(!1),__self:void 0,__source:{fileName:mu,lineNumber:43,columnNumber:9}}))},uu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostProfileBio.jsx";var _u=({profile:e,setShowPostProfileInfoModal:t})=>a.a.createElement(ru,{__self:void 0,__source:{fileName:uu,lineNumber:7,columnNumber:5}},e.bio&&a.a.createElement(gs.a,{lines:3,ellipsis:a.a.createElement("span",{__self:void 0,__source:{fileName:uu,lineNumber:12,columnNumber:13}},"... ",a.a.createElement("br",{__self:void 0,__source:{fileName:uu,lineNumber:13,columnNumber:19}}),a.a.createElement(au,{onClick:()=>t(!0),__self:void 0,__source:{fileName:uu,lineNumber:14,columnNumber:15}}," ","Read More")," "),__self:void 0,__source:{fileName:uu,lineNumber:9,columnNumber:9}},e.bio),!e.bio&&a.a.createElement("div",{__self:void 0,__source:{fileName:uu,lineNumber:26,columnNumber:9}},"Do you have a property that ",e.name," would be interested in?"));const du=async(e,t,r)=>{try{r(!0);const{data:o}=await ee.post("/conversations",{recipientUserId:e},te());o.success&&t.push("/messages")}catch(o){}finally{r(!1)}};var bu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostProfileInfoModal.jsx";var fu=({profile:e})=>{const t=Object(l.d)(({userState:e})=>e.userId),r=Object(m.f)(),o=Object(l.c)();return a.a.createElement("div",{__self:void 0,__source:{fileName:bu,lineNumber:22,columnNumber:5}},a.a.createElement(eu,{profileModal:!0,__self:void 0,__source:{fileName:bu,lineNumber:23,columnNumber:7}},a.a.createElement(Xc,{src:e.profileImage,profileModal:!0,alt:"Author's profile picture",__self:void 0,__source:{fileName:bu,lineNumber:24,columnNumber:9}}),a.a.createElement(Qc,{profileModal:!0,__self:void 0,__source:{fileName:bu,lineNumber:29,columnNumber:9}},e.name),t&&t!==e.id&&a.a.createElement(Ct,{buttonText:"Message",mlAuto:!0,onClick:()=>du(e.id,o,r),small:!0,__self:void 0,__source:{fileName:bu,lineNumber:32,columnNumber:11}})),a.a.createElement(Zc,{__self:void 0,__source:{fileName:bu,lineNumber:40,columnNumber:7}},a.a.createElement("div",{__self:void 0,__source:{fileName:bu,lineNumber:41,columnNumber:9}},a.a.createElement(jc,{__self:void 0,__source:{fileName:bu,lineNumber:42,columnNumber:11}},"Job Title"),a.a.createElement("div",{__self:void 0,__source:{fileName:bu,lineNumber:43,columnNumber:11}},e.jobTitle)),a.a.createElement("div",{__self:void 0,__source:{fileName:bu,lineNumber:46,columnNumber:9}},a.a.createElement(jc,{__self:void 0,__source:{fileName:bu,lineNumber:47,columnNumber:11}},"Bio"),a.a.createElement(ti,{__self:void 0,__source:{fileName:bu,lineNumber:48,columnNumber:11}},e.bio))))},Nu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\SideProfileInfo.jsx";var pu=({post:{belongsToUser:e}})=>{const t=e,r=Object(l.d)(({userState:e})=>e.userId),[i,n]=Object(o.useState)(!1),[s,c]=Object(o.useState)(!1),u=Object(m.f)(),_=()=>t.id===r,d=()=>n(!1);return a.a.createElement(ou,{__self:void 0,__source:{fileName:Nu,lineNumber:31,columnNumber:5}},t&&a.a.createElement("div",{__self:void 0,__source:{fileName:Nu,lineNumber:33,columnNumber:9}},a.a.createElement(cu,{profile:t,setShowPostProfileInfoModal:n,postAuthoredByCurrentUser:_(),__self:void 0,__source:{fileName:Nu,lineNumber:34,columnNumber:11}}),a.a.createElement(_u,{profile:t,setShowPostProfileInfoModal:n,__self:void 0,__source:{fileName:Nu,lineNumber:40,columnNumber:11}}),t&&r&&!_()&&a.a.createElement(Ct,{buttonText:"Message",rightSideLoading:!0,loading:s,onClick:()=>du(t.id,u,c),small:!0,__self:void 0,__source:{fileName:Nu,lineNumber:46,columnNumber:13}}),t&&i&&a.a.createElement(ua,{closeModal:d,__self:void 0,__source:{fileName:Nu,lineNumber:62,columnNumber:13}},a.a.createElement(fu,{closeModal:d,profile:t,__self:void 0,__source:{fileName:Nu,lineNumber:63,columnNumber:15}}))))},vu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\post\\PostDetails.jsx";var gu=e=>{const[t,r]=Object(o.useState)({}),[i,n]=Object(o.useState)(!1),[l,s]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{(async()=>{try{n(!0);const{data:{post:t}}=await ee.get("/posts/"+e.params.match.params.id);r(t)}catch(t){s(!0)}finally{n(!1)}})()},[]),a.a.createElement("div",{__self:void 0,__source:{fileName:vu,lineNumber:38,columnNumber:5}},i&&a.a.createElement(ki,{fillPage:!0,clearBackground:!0,__self:void 0,__source:{fileName:vu,lineNumber:39,columnNumber:19}}),!l&&!i&&a.a.createElement(S,{post:!0,__self:void 0,__source:{fileName:vu,lineNumber:42,columnNumber:9}},a.a.createElement(Sc,{__self:void 0,__source:{fileName:vu,lineNumber:43,columnNumber:11}},a.a.createElement(zc,{post:t,postSection:e.postSection,__self:void 0,__source:{fileName:vu,lineNumber:44,columnNumber:13}}),a.a.createElement(pu,{post:t,__self:void 0,__source:{fileName:vu,lineNumber:45,columnNumber:13}}))),l&&a.a.createElement(Oi,{clearBackground:!0,__self:void 0,__source:{fileName:vu,lineNumber:51,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:vu,lineNumber:52,columnNumber:11}},"This post could not be loaded right now")))};const hu=w.b.h1`
  font-size: 2.4rem;
  text-align: center;
  width: 70%;
`,Eu=w.b.div`
  font-family: "Bold";
  margin-bottom: 3rem;
`,yu=w.b.h4`
  font-size: 1.7rem;
  font-family: "Bold";
  margin-bottom: .6rem;
  
  ${Object(k.a)("larger")`
      font-size: 2rem;
      margin-bottom: 2rem;
  `};
`,wu=w.b.a`
  color: #2A5DB0;
`;var ku="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\terms_privacy\\TermsOfService.jsx";var Su=()=>a.a.createElement(S,{text:!0,__self:void 0,__source:{fileName:ku,lineNumber:11,columnNumber:3}},a.a.createElement(T,{__self:void 0,__source:{fileName:ku,lineNumber:12,columnNumber:5}},a.a.createElement(oi,{__self:void 0,__source:{fileName:ku,lineNumber:13,columnNumber:7}},"Terms of Service"),a.a.createElement(Eu,{__self:void 0,__source:{fileName:ku,lineNumber:15,columnNumber:7}},"Last updated: January 31, 2020"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:17,columnNumber:7}},"Please read these Terms and Conditions carefully before using the Spekkly application operated by Spekkly, LLC."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:22,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:24,columnNumber:7}},"Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:30,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:32,columnNumber:7}},"By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:37,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:38,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:40,columnNumber:7}},"Communications"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:42,columnNumber:7}},"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:49,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:50,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:52,columnNumber:7}},"Content"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:54,columnNumber:7}},"Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:62,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:64,columnNumber:7}},"By posting Content on or through the Service, You represent and warrant that (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.",a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:71,columnNumber:9}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:72,columnNumber:9}}),"We reserve the right to terminate the account of anyone found to be infringing on a copyright."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:77,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:79,columnNumber:7}},"You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service.",a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:84,columnNumber:9}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:85,columnNumber:9}}),"However, by posting Content using the Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:93,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:95,columnNumber:7}},"Spekkly, LLC has the right but not the obligation to monitor and edit all Content provided by users."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:99,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:101,columnNumber:7}},"In addition, Content found on or through this Service are the property of Spekkly, LLC or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:109,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:110,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:112,columnNumber:7}},"Accounts"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:114,columnNumber:7}},"When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:122,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:124,columnNumber:7}},"You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:134,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:135,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:137,columnNumber:7}},"Intellectual Property"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:139,columnNumber:7}},"The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Spekkly, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Spekkly, LLC."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:149,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:150,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:152,columnNumber:7}},"Links To Other Web Sites"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:154,columnNumber:7}},"Our Service may contain links to third party web sites or services that are not owned or controlled by Spekkly, LLC"),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:159,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:161,columnNumber:7}},"Spekkly, LLC has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:168,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:170,columnNumber:7}},"You acknowledge and agree that Spekkly, LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:178,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:180,columnNumber:7}},"We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:185,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:186,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:188,columnNumber:7}},"Termination"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:190,columnNumber:7}},"We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:197,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:199,columnNumber:7}},"If you wish to terminate your account, you may simply discontinue using the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:204,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:206,columnNumber:7}},"All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:213,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:214,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:216,columnNumber:7}},"Indemnification"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:218,columnNumber:7}},"You agree to defend, indemnify and hold harmless Spekkly, LLC and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:229,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:230,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:232,columnNumber:7}},"Limitation Of Liability"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:234,columnNumber:7}},"In no event shall Spekkly, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:249,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:250,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:252,columnNumber:7}},"Disclaimer"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:254,columnNumber:7}},'Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.'),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:262,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:264,columnNumber:7}},"Spekkly, LLC its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:273,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:274,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:276,columnNumber:7}},"Exclusions"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:278,columnNumber:7}},"Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:284,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:285,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:287,columnNumber:7}},"Governing Law"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:289,columnNumber:7}},"These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:295,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:297,columnNumber:7}},"Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:306,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:307,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:309,columnNumber:7}},"Changes"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:311,columnNumber:7}},"We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:318,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:320,columnNumber:7}},"By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:326,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:ku,lineNumber:327,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:ku,lineNumber:329,columnNumber:7}},"Contact Us"),a.a.createElement("p",{__self:void 0,__source:{fileName:ku,lineNumber:331,columnNumber:7}},"If you have any questions about these Terms, please contact us."))),Ou=r(412),xu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\HomeSearch.jsx";var ju=e=>{const t=Object(l.d)(({homeState:{clearFilters:e}})=>e);let r=null;Object(o.useEffect)(()=>{t>0&&r()},[t]);return a.a.createElement(Ya,{__self:void 0,__source:{fileName:xu,lineNumber:35,columnNumber:5}},a.a.createElement(tr.b,{onSubmit:t=>e.setFilters({...e.filters,...t}),mutators:{setValue:Yr},render:({handleSubmit:e,form:t,...o})=>{return a.a.createElement(Ua,{onSubmit:e,__self:void 0,__source:{fileName:xu,lineNumber:41,columnNumber:11}},a.a.createElement(tr.a,{name:"keywords",type:"text",__self:void 0,__source:{fileName:xu,lineNumber:42,columnNumber:13}},({input:e})=>a.a.createElement(Ra,Object.assign({},e,{placeholder:"Keywords",__self:void 0,__source:{fileName:xu,lineNumber:44,columnNumber:17}}))),a.a.createElement(u.a,{query:b,__self:void 0,__source:{fileName:xu,lineNumber:47,columnNumber:13}},e=>e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(za,{__self:void 0,__source:{fileName:xu,lineNumber:51,columnNumber:21}}),a.a.createElement(Ka,{homeSearch:!0,setLocation:t.mutators.setValue,__self:void 0,__source:{fileName:xu,lineNumber:52,columnNumber:21}}))),a.a.createElement(Ct,{type:"submit",homeSearch:!0,noStretch:!0,buttonText:"Submit",__self:void 0,__source:{fileName:xu,lineNumber:61,columnNumber:13}}),(i=t.reset,void(r=i)));var i},__self:void 0,__source:{fileName:xu,lineNumber:36,columnNumber:7}}))};const Cu=w.b.div`
  display: grid;
  grid-template-columns: .35fr 1fr;
  grid-column-gap: 6rem;
  margin-bottom: 6rem;
  
  ${y(N)} {
     grid-template-columns: 1fr;
     grid-row-gap: 5rem;
  }
`,Iu=w.b.form`
  display: grid;
  grid-row-gap: 4rem;
  
   ${y(v)} {
      position: sticky;
      top: 20rem;
  }
`,Du=w.b.div`
  color: var(--primary-color);
  
    ${Object(k.a)("showFilters")`
       margin-bottom: 4rem;
  `};
`;var Pu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\HomeFilters.jsx",Tu=function(e){var t=Object(o.useState)(!1),r=Object(_a.a)(t,2),i=r[0],n=r[1],s=Object(l.d)((function(e){return e.homeState.clearFilters}));Object(o.useEffect)((function(){s>0&&m()}),[s]);var m=function(e){e};return a.a.createElement("div",{__self:void 0,__source:{fileName:Pu,lineNumber:31,columnNumber:5}},a.a.createElement(u.a,{query:"(max-width: 56.25em)",onChange:function(e){n(!e)},__self:void 0,__source:{fileName:Pu,lineNumber:32,columnNumber:7}},(function(e){return e&&a.a.createElement(Du,{showFilters:i,onClick:function(){n(!i)},__self:void 0,__source:{fileName:Pu,lineNumber:40,columnNumber:13}},i?"Hide":"Show"," Filters")})),i&&a.a.createElement(tr.b,{onSubmit:function(){},mutators:{setValue:Yr,toggleCheckMark:Rr},render:function(t){var r=t.handleSubmit,o=t.form;return a.a.createElement(Iu,{onSubmit:r,__self:void 0,__source:{fileName:Pu,lineNumber:58,columnNumber:13}},a.a.createElement(Ba,{label:"Space",inputLabel:"sqft",name:"space",stretch:!0,validation:!1,borderNone:!0,__self:void 0,__source:{fileName:Pu,lineNumber:59,columnNumber:15}}),a.a.createElement(Ba,{label:"Cost",inputLabel:"$/mo",name:"cost",stretch:!0,borderNone:!0,errorName:"price",__self:void 0,__source:{fileName:Pu,lineNumber:68,columnNumber:15}}),a.a.createElement(fi,{label:"Type",options:No,name:"type",allowNull:!0,whiteInput:!0,setValue:o.mutators.setValue,type:"radio",__self:void 0,__source:{fileName:Pu,lineNumber:77,columnNumber:15}}),a.a.createElement(fi,{label:"Transit",options:fo,whiteInput:!0,name:"transit",toggleCheckMark:o.mutators.toggleCheckMark,type:"checkbox",__self:void 0,__source:{fileName:Pu,lineNumber:87,columnNumber:15}}),m(o.reset),a.a.createElement(tr.c,{onChange:function(){var t=Object(At.a)(Lt.a.mark((function t(r){var o;return Lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.values,t.next=3,Object(sc.a)(0);case 3:e.setFilters(o);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),__self:void 0,__source:{fileName:Pu,lineNumber:98,columnNumber:15}}))},__self:void 0,__source:{fileName:Pu,lineNumber:53,columnNumber:9}}))};var Mu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\HomePostOptions.jsx";const Lu=w.b.div`
  display: flex;
  margin-bottom: 4rem;
`,Au=w.b.div`
  font-family: "Bold";
  margin-bottom: 0.4rem;
`,$u=w.b.span`
  margin-left: auto;
  color: var(--primary-color);
  cursor: pointer;
`;var Wu=({postsLength:e})=>{const t=Object(l.d)(({homeState:{clearFilters:e}})=>e),r=Object(l.c)();return a.a.createElement(Lu,{__self:void 0,__source:{fileName:Mu,lineNumber:33,columnNumber:5}},a.a.createElement("span",{__self:void 0,__source:{fileName:Mu,lineNumber:34,columnNumber:7}},a.a.createElement(Au,{__self:void 0,__source:{fileName:Mu,lineNumber:35,columnNumber:9}},"Showing:")," ",e," filtered results"),a.a.createElement($u,{onClick:()=>{r({type:"CLEAR_FILTERS",clearFilters:t+1})},__self:void 0,__source:{fileName:Mu,lineNumber:37,columnNumber:7}},"Clear Filters"))};const Bu=w.b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 6rem;
  
  ${y(N)} {
     grid-template-columns: 1fr;
  }
`,Uu=w.b.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`,Yu=w.b.h2`
  font-size: 2rem;
  margin-bottom: 2.6rem;
`,Ru=w.b.div`
  margin-bottom: 3rem;
`,zu=(w.b.div`
  font-family: Bold;
  margin-bottom: 1.6rem;
`,w.b.div`
  font-family: Bold;
  margin-bottom: .7rem;
`,w.b.div`
  display: grid;
  grid-row-gap: 1.5rem;
`),Fu=w.b.p`
  margin-bottom: 3rem;
`,Vu=w.b.div`
  margin-bottom: 3.6rem;
  margin-top: auto;
`;var Hu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\HomePostListItem.jsx";var Gu=({post:e,handlePostClick:t})=>a.a.createElement(Uu,{__self:void 0,__source:{fileName:Hu,lineNumber:17,columnNumber:5}},a.a.createElement(Yu,{__self:void 0,__source:{fileName:Hu,lineNumber:18,columnNumber:7}},e.title),a.a.createElement(Ru,{__self:void 0,__source:{fileName:Hu,lineNumber:19,columnNumber:7}},"Posted ",Yc(e.createdAt)," by ",e.belongsToUser.name),a.a.createElement(Fu,{__self:void 0,__source:{fileName:Hu,lineNumber:22,columnNumber:7}},a.a.createElement(gs.a,{lines:3,__self:void 0,__source:{fileName:Hu,lineNumber:23,columnNumber:9}},e.description)),a.a.createElement(Vu,{__self:void 0,__source:{fileName:Hu,lineNumber:25,columnNumber:7}},a.a.createElement(zu,{__self:void 0,__source:{fileName:Hu,lineNumber:26,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:Hu,lineNumber:27,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Hu,lineNumber:28,columnNumber:13}},"Location:")," ",e.location),a.a.createElement("div",{__self:void 0,__source:{fileName:Hu,lineNumber:31,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Hu,lineNumber:32,columnNumber:13}},"Space:")," ",e.space.min," to ",e.space.max," sqft"),a.a.createElement("div",{__self:void 0,__source:{fileName:Hu,lineNumber:35,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Hu,lineNumber:36,columnNumber:13}},"Cost:")," $",e.cost.min," to $",e.cost.max," / mo"),a.a.createElement("div",{__self:void 0,__source:{fileName:Hu,lineNumber:39,columnNumber:11}},a.a.createElement($c,{__self:void 0,__source:{fileName:Hu,lineNumber:40,columnNumber:13}},"Type:")," ",e.type," "))),a.a.createElement(Ct,{onClick:t,buttonText:"Learn More",stretch:!0,__self:void 0,__source:{fileName:Hu,lineNumber:44,columnNumber:7}})),qu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\HomePostsList.jsx";var Ju=e=>{const t=Object(m.f)();return a.a.createElement(D,{__self:void 0,__source:{fileName:qu,lineNumber:29,columnNumber:5}},e.loading&&0===e.posts.length&&a.a.createElement(ki,{clearBackground:!0,__self:void 0,__source:{fileName:qu,lineNumber:30,columnNumber:53}}),e.hasFilters&&a.a.createElement(Wu,{postsLength:e.totalDocs,__self:void 0,__source:{fileName:qu,lineNumber:32,columnNumber:28}}),e.postsLoadingError&&a.a.createElement(oo,{h100:!0,vertical:!0,__self:void 0,__source:{fileName:qu,lineNumber:35,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:qu,lineNumber:36,columnNumber:11}}," ",e.postsLoadingError," ")),e.posts.length>0&&a.a.createElement(Hl.a,{onBottom:e.setNextPage,__self:void 0,__source:{fileName:qu,lineNumber:41,columnNumber:9}},a.a.createElement(Bu,{__self:void 0,__source:{fileName:qu,lineNumber:42,columnNumber:11}},e.posts.map(e=>a.a.createElement(Gu,{post:e,key:e.id,handlePostClick:()=>{return r=e.id,void t.push("/posts/"+r);var r},__self:void 0,__source:{fileName:qu,lineNumber:45,columnNumber:17}})))))},Ku="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\home\\Home.jsx";var Xu=e=>{const[t,r]=Object(o.useState)({}),[i,n]=Object(o.useState)([]),[s,m]=Object(o.useState)(!1),[c,u]=Object(o.useState)(0),[_,d]=Object(o.useState)(""),[b,f]=Object(o.useState)(1),[N,p]=Object(o.useState)(!0),[v,g]=Object(o.useState)(0),h=Object(l.d)(({userState:{userId:e}})=>e),E=Object(l.c)(),y=Object(l.d)(({homeState:{clearFilters:e}})=>e);return Object(o.useEffect)(()=>{e.resetPassword&&(E(st(!0)),E(lt(!0)))}),Object(o.useEffect)(()=>{y>0&&r({})},[y]),Object(o.useEffect)(()=>{N&&(async()=>{try{m(!0);const e={userId:h,filters:t,page:b},{data:r}=await ee.get("/posts",{params:e});n([...i,...r.posts]),p(r.hasNextPage),g(r.totalDocs),0===i.length&&0===r.posts.length?ec()(t)?d("There are no posts yet on Spekkly"):d("No posts matched your filters"):d("")}catch(e){d("Posts could not be loaded right now. Please try again later")}finally{m(!1)}})()},[b,c]),Object(Ou.a)(()=>{f(1),p(!0),n([]),u(c+1)},[t,ii.a.get(t,"transit.length")]),a.a.createElement(S,{home:!0,__self:void 0,__source:{fileName:Ku,lineNumber:98,columnNumber:5}},a.a.createElement(ju,{filters:t,setFilters:r,__self:void 0,__source:{fileName:Ku,lineNumber:99,columnNumber:7}}),a.a.createElement(Cu,{__self:void 0,__source:{fileName:Ku,lineNumber:100,columnNumber:7}},a.a.createElement(Tu,{filters:t,setFilters:r,__self:void 0,__source:{fileName:Ku,lineNumber:101,columnNumber:9}}),a.a.createElement(Ju,{loading:s,posts:i,totalDocs:v,hasFilters:!ec()(t),setNextPage:()=>Kt(N,s,f,b),postsLoadingError:_,__self:void 0,__source:{fileName:Ku,lineNumber:102,columnNumber:9}})))},Qu="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\errors\\VerifyEmail.jsx";class Zu extends a.a.Component{constructor(...e){super(...e),this.state={validDate:!1,loading:!0}}async componentDidMount(){const{emailVerificationToken:e}=Ro.a.parse(window.location.search),{data:t}=await ee.post("/users/verify_email",{emailVerificationToken:e});t.success?(await Jt(),this.setSuccessMessage()):this.setFailureMessage(),this.setState({loading:!1})}setSuccessMessage(){this.setState({heading:"Email Verified",text:"Your email has been verified. You can close this page."})}setFailureMessage(){this.setState({heading:"Something Went Wrong",text:"We were unable to verify your email. Please try resending the link from your account settings. You can close this page."})}closePage(){this.props.history.push("/")}render(){return a.a.createElement(S,{__self:this,__source:{fileName:Qu,lineNumber:58,columnNumber:7}},a.a.createElement(oo,{vertical:!0,navbarHeight:this.props.navbarHeight,fillPage:!0,__self:this,__source:{fileName:Qu,lineNumber:59,columnNumber:9}},a.a.createElement(I,{center:!0,navbarBottomMargin:!0,navbarHeight:this.props.navbarHeight,width:"60%",height:"22rem",customSize:!0,__self:this,__source:{fileName:Qu,lineNumber:60,columnNumber:11}},a.a.createElement(oo,{__self:this,__source:{fileName:Qu,lineNumber:68,columnNumber:13}},a.a.createElement(ro,{__self:this,__source:{fileName:Qu,lineNumber:69,columnNumber:15}},this.state.heading),a.a.createElement(to,{smallBottomSpace:!0,__self:this,__source:{fileName:Qu,lineNumber:70,columnNumber:15}}," ",this.state.text," "),a.a.createElement(Ct,{btnText:"Close",onClick:this.closePage.bind(this),__self:this,__source:{fileName:Qu,lineNumber:71,columnNumber:15}}),this.state.loading&&a.a.createElement(ki,{solidBackground:!0,loading:this.state.loading,loadingText:"Verifying Email",__self:this,__source:{fileName:Qu,lineNumber:76,columnNumber:17}})))))}}var e_=Object(m.h)(Object(l.b)(({navbarState:e})=>({navbarHeight:e.navbarHeight}))(Zu));const t_=w.b.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`,r_=w.b.div`
  margin-bottom: 9rem;
  
   ${Object(k.a)("lastImage")`
    margin-bottom: 0;
  `};
`,o_=w.b.p`
  margin-bottom: 3.4rem;
  line-height: 2.4rem;
  
   ${Object(k.a)("subParagraph")`
    margin-bottom: 6rem;
  `};
   
    ${Object(k.a)("lastParagraph")`
    margin-bottom: 0;
  `};
   
`,a_=w.b.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;var i_="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\about\\About.jsx";class n_ extends a.a.Component{render(){return a.a.createElement(S,{text:!0,__self:this,__source:{fileName:i_,lineNumber:13,columnNumber:7}},a.a.createElement(T,{__self:this,__source:{fileName:i_,lineNumber:14,columnNumber:9}},a.a.createElement(a_,{smallBottomMargin:!0,__self:this,__source:{fileName:i_,lineNumber:15,columnNumber:11}},"Why Spekkly Exists"),a.a.createElement(o_,{__self:this,__source:{fileName:i_,lineNumber:16,columnNumber:11}},"Quora\u2019s mission is to share and grow the world\u2019s knowledge. A vast amount of the knowledge that would be valuable to many people is currently only available to a few \u2014 either locked in people\u2019s heads, or only accessible to select groups. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world."),a.a.createElement(r_,{__self:this,__source:{fileName:i_,lineNumber:26,columnNumber:11}},a.a.createElement(t_,{src:"https://storage.cloud.google.com/spekkly_public/about_main_image.jpg?authuser=4",__self:this,__source:{fileName:i_,lineNumber:27,columnNumber:13}})),a.a.createElement(a_,{__self:this,__source:{fileName:i_,lineNumber:30,columnNumber:11}},"Who Created Spekkly"),a.a.createElement(o_,{__self:this,__source:{fileName:i_,lineNumber:31,columnNumber:11}},"The heart of Quora is questions \u2014 questions that affect the world, questions that explain recent world events, questions that guide important life decisions, and questions that provide insights into why other people think differently. Quora is a place where you can ask questions you care about and get answers that are amazing."),a.a.createElement(r_,{lastImage:!0,__self:this,__source:{fileName:i_,lineNumber:39,columnNumber:11}},a.a.createElement(t_,{src:"https://storage.cloud.google.com/spekkly_public/about_main_image.jpg?authuser=4",__self:this,__source:{fileName:i_,lineNumber:40,columnNumber:13}}))))}}var l_=n_;const s_=w.b.h1`
    font-size: 10rem;
    text-align: center;
    color: #afafaf;
    margin-bottom: 2.4rem;
`,m_=w.b.p`
  font-size: 1.8rem;
  text-align: center;
  width: 80%;
`,c_=w.b.div`
   color: #2A5DB0;
   
    ${Object(k.a)("middleLink")`
        margin-bottom: .7rem;
        margin-top: .7rem;
    `};
`,u_=w.b.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  width: 80%;
`;var __="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\errors\\NoMatch.jsx";class d_ extends a.a.Component{render(){return a.a.createElement(S,{text:!0,__self:this,__source:{fileName:__,lineNumber:21,columnNumber:7}},a.a.createElement(T,{__self:this,__source:{fileName:__,lineNumber:22,columnNumber:9}},a.a.createElement(s_,{__self:this,__source:{fileName:__,lineNumber:23,columnNumber:11}},"404"),a.a.createElement(oo,{__self:this,__source:{fileName:__,lineNumber:24,columnNumber:11}},a.a.createElement(m_,{__self:this,__source:{fileName:__,lineNumber:25,columnNumber:13}},"We're sorry but we could not find that page. Perhaps you're looking for one of the pages below?")),a.a.createElement(oo,{__self:this,__source:{fileName:__,lineNumber:30,columnNumber:11}},a.a.createElement(u_,{__self:this,__source:{fileName:__,lineNumber:31,columnNumber:13}},a.a.createElement("div",{__self:this,__source:{fileName:__,lineNumber:32,columnNumber:15}},a.a.createElement(ri,{__self:this,__source:{fileName:__,lineNumber:33,columnNumber:17}},"Post"),a.a.createElement(s.b,{to:"/",__self:this,__source:{fileName:__,lineNumber:34,columnNumber:17}},a.a.createElement(c_,{middleLink:!0,__self:this,__source:{fileName:__,lineNumber:35,columnNumber:19}}," View Public Posts ")),a.a.createElement(s.b,{to:"/create-post",__self:this,__source:{fileName:__,lineNumber:37,columnNumber:17}},a.a.createElement(c_,{__self:this,__source:{fileName:__,lineNumber:38,columnNumber:19}}," Create Post "))),a.a.createElement("div",{__self:this,__source:{fileName:__,lineNumber:41,columnNumber:15}},a.a.createElement(ri,{__self:this,__source:{fileName:__,lineNumber:42,columnNumber:17}},"Account"),a.a.createElement(s.b,{to:"/posts",__self:this,__source:{fileName:__,lineNumber:43,columnNumber:17}},a.a.createElement(c_,{middleLink:!0,__self:this,__source:{fileName:__,lineNumber:44,columnNumber:19}}," My Posts ")),a.a.createElement(s.b,{to:"/messages",__self:this,__source:{fileName:__,lineNumber:46,columnNumber:17}},a.a.createElement(c_,{middleLink:!0,__self:this,__source:{fileName:__,lineNumber:47,columnNumber:19}}," Messages ")),a.a.createElement(s.b,{to:"/settings",__self:this,__source:{fileName:__,lineNumber:49,columnNumber:17}},a.a.createElement(c_,{__self:this,__source:{fileName:__,lineNumber:50,columnNumber:19}}," Settings "))),a.a.createElement("div",{__self:this,__source:{fileName:__,lineNumber:53,columnNumber:15}},a.a.createElement(ri,{__self:this,__source:{fileName:__,lineNumber:54,columnNumber:17}},"Company"),a.a.createElement(s.b,{to:"/about",__self:this,__source:{fileName:__,lineNumber:55,columnNumber:17}},a.a.createElement(c_,{middleLink:!0,__self:this,__source:{fileName:__,lineNumber:56,columnNumber:19}}," About ")),a.a.createElement(s.b,{to:"/terms-of-service",__self:this,__source:{fileName:__,lineNumber:58,columnNumber:17}},a.a.createElement(c_,{middleLink:!0,__self:this,__source:{fileName:__,lineNumber:59,columnNumber:19}}," Terms of Service ")),a.a.createElement(s.b,{to:"/privacy-policy",__self:this,__source:{fileName:__,lineNumber:61,columnNumber:17}},a.a.createElement(c_,{__self:this,__source:{fileName:__,lineNumber:62,columnNumber:19}}," Privacy Policy ")))))))}}var b_=d_,f_="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\pages\\terms_privacy\\PrivacyPolicy.jsx";var N_=()=>a.a.createElement(S,{text:!0,__self:void 0,__source:{fileName:f_,lineNumber:16,columnNumber:3}},a.a.createElement(T,{__self:void 0,__source:{fileName:f_,lineNumber:17,columnNumber:5}},a.a.createElement(oi,{__self:void 0,__source:{fileName:f_,lineNumber:18,columnNumber:7}}," Privacy Policy"),a.a.createElement(Eu,{__self:void 0,__source:{fileName:f_,lineNumber:20,columnNumber:7}},"Last updated: February 10, 2020"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:22,columnNumber:7}},"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:29,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:31,columnNumber:7}},"We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:36,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:37,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:38,columnNumber:7}}),a.a.createElement(oo,{__self:void 0,__source:{fileName:f_,lineNumber:40,columnNumber:7}},a.a.createElement(hu,{__self:void 0,__source:{fileName:f_,lineNumber:41,columnNumber:9}},"Interpretation and Definitions")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:43,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:45,columnNumber:7}},"Interpretation"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:46,columnNumber:7}},"The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:53,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:54,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:56,columnNumber:7}},"Definitions"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:57,columnNumber:7}},"For the purposes of this Privacy Policy:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:59,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:60,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:61,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:62,columnNumber:11}},"You")," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:66,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:67,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:68,columnNumber:11}},"Company"),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Spekkly, LLC, 1234 Mariposa Street, San Francisco, CA 94107.'),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:72,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:73,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:74,columnNumber:11}},"Affiliate"),' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:80,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:81,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:82,columnNumber:11}},"Account")," means a unique account created for You to access our Service or parts of our Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:86,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:87,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:88,columnNumber:11}},"Website")," refers to Spekkly, accessible from spekkly.com"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:92,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:93,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:94,columnNumber:11}},"Service")," refers to the Website."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:97,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:98,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:99,columnNumber:11}},"Country")," refers to: California, United States"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:102,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:103,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:104,columnNumber:11}},"Service Provider")," means any natural or legal person who processes the data on behalf of the Company. It refers to third- party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:112,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:113,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:114,columnNumber:11}},"Third-party Social Media Service")," refers to any website or any social network website through which a User can log in or create an account to use the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:119,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:120,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:121,columnNumber:11}},"Personal Data")," is any information that relates to an identified or identifiable individual."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:125,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:126,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:127,columnNumber:11}},"Cookies")," are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:133,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:134,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:135,columnNumber:11}},"Usage Data")," refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:141,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:142,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:143,columnNumber:7}}),a.a.createElement(oo,{__self:void 0,__source:{fileName:f_,lineNumber:145,columnNumber:7}},a.a.createElement(hu,{__self:void 0,__source:{fileName:f_,lineNumber:146,columnNumber:9}},"Collecting and Using Your Personal Data")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:150,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:151,columnNumber:7}}),a.a.createElement(yu,{larger:!0,__self:void 0,__source:{fileName:f_,lineNumber:153,columnNumber:7}},"Types of Data Collected"),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:154,columnNumber:7}},"Personal Data"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:155,columnNumber:7}},"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:161,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:163,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:164,columnNumber:9}},"Email address"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:165,columnNumber:9}},"First name and last name"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:166,columnNumber:9}},"Address, State, Province, ZIP/Postal code, City"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:167,columnNumber:9}},"Usage Data")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:170,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:171,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:173,columnNumber:7}},"Usage Data"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:174,columnNumber:7}},"Usage Data is collected automatically when using the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:175,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:176,columnNumber:7}},"Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:183,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:185,columnNumber:7}},"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:194,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:196,columnNumber:7}},"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:201,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:202,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:204,columnNumber:7}},"Tracking Technologies and Cookies"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:206,columnNumber:7}},"We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:213,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:214,columnNumber:7}},"You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:220,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:221,columnNumber:7}},'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.'),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:227,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:228,columnNumber:7}},"We use both session and persistent Cookies for the purposes set out below:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:232,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:233,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:235,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:236,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:237,columnNumber:11}}," Necessary / Essential Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:238,columnNumber:11}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:239,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:240,columnNumber:11}},"Type: Session Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:242,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:243,columnNumber:11}},"Administered by: Us"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:244,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:245,columnNumber:11}},"Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:254,columnNumber:9}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:255,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:257,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:258,columnNumber:11}}," Cookies Policy / Notice Acceptance Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:259,columnNumber:11}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:260,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:261,columnNumber:11}},"Type: Persistent Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:263,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:264,columnNumber:11}},"Administered by: Us"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:265,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:266,columnNumber:11}},"Purpose: These Cookies identify if users have accepted the use of cookies on the Website.")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:271,columnNumber:9}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:272,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:274,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:275,columnNumber:11}}," Functionality Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:276,columnNumber:11}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:277,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:278,columnNumber:11}},"Type: Persistent Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:280,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:281,columnNumber:11}},"Administered by: Us"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:282,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:283,columnNumber:11}},"Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:292,columnNumber:9}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:293,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:295,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:296,columnNumber:11}}," Tracking and Performance Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:297,columnNumber:11}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:298,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:299,columnNumber:11}},"Type: Persistent Cookies"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:301,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:302,columnNumber:11}},"Administered by: Third-Parties"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:303,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:304,columnNumber:11}},"Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them."))),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:317,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:318,columnNumber:7}}),a.a.createElement(yu,{larger:!0,__self:void 0,__source:{fileName:f_,lineNumber:320,columnNumber:7}},"Use of Your Personal Data"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:321,columnNumber:7}},"The Company may use Personal Data for the following purposes:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:322,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:323,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:324,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:325,columnNumber:11}},"To provide and maintain our Service"),", including to monitor the usage of our Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:329,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:330,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:331,columnNumber:11}},"To manage Your Account:")," to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:337,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:338,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:339,columnNumber:11}},"For the performance of a contract:")," the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:345,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:346,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:347,columnNumber:11}},"To contact You:")," To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:356,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:357,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:358,columnNumber:11}},"To provide You")," with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:364,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:365,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:366,columnNumber:11}},"To manage Your requests:")," To attend and manage Your requests to Us.")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:370,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:371,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:373,columnNumber:7}},"We may share your personal information in the following situations:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:374,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:376,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:377,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:378,columnNumber:11}},"With Service Providers:")," We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to contact You, to advertise on third party websites to You after You visited our Service or for payment processing."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:386,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:387,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:388,columnNumber:11}},"For Business transfers:")," We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:394,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:395,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:396,columnNumber:11}},"With Affiliates:")," We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:403,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:404,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:405,columnNumber:11}},"With Business partners:")," We may share Your information with Our business partners to offer You certain products, services or promotions."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:410,columnNumber:9}}),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:411,columnNumber:9}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:412,columnNumber:11}},"With other users:")," when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:423,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:424,columnNumber:7}}),a.a.createElement(yu,{larger:!0,__self:void 0,__source:{fileName:f_,lineNumber:426,columnNumber:7}},"Transfer of Your Personal Data"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:427,columnNumber:7}},"Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:436,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:437,columnNumber:7}},"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:442,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:443,columnNumber:7}},"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:450,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:451,columnNumber:7}}),a.a.createElement(yu,{larger:!0,__self:void 0,__source:{fileName:f_,lineNumber:453,columnNumber:7}},"Transfer of Your Personal Data"),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:454,columnNumber:7}},"Business Transactions"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:456,columnNumber:7}},"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:462,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:464,columnNumber:7}},"Law enforcement"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:465,columnNumber:7}},"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:471,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:473,columnNumber:7}},"Other legal requirements"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:474,columnNumber:7}},"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:479,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:480,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:481,columnNumber:9}},"Comply with a legal obligation"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:482,columnNumber:9}},"Protect and defend the rights or property of the Company"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:483,columnNumber:9}},"Prevent or investigate possible wrongdoing in connection with the Service"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:487,columnNumber:9}},"Protect the personal safety of Users of the Service or the public"),a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:490,columnNumber:9}},"Protect against legal liability")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:493,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:494,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:495,columnNumber:7}},"Security of Your Personal Data"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:496,columnNumber:7}},"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:504,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:505,columnNumber:7}}),a.a.createElement(oo,{__self:void 0,__source:{fileName:f_,lineNumber:507,columnNumber:7}},a.a.createElement(hu,{__self:void 0,__source:{fileName:f_,lineNumber:508,columnNumber:9}},"Detailed Information on the Processing of Your Personal Data")),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:513,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:515,columnNumber:7}},"Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:520,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:522,columnNumber:7}},"Analytics"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:524,columnNumber:7}},"We may use third-party Service providers to monitor and analyze the use of our Service."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:529,columnNumber:7}}),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:530,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:531,columnNumber:9}},a.a.createElement("div",{__self:void 0,__source:{fileName:f_,lineNumber:532,columnNumber:11}},a.a.createElement(ri,{__self:void 0,__source:{fileName:f_,lineNumber:533,columnNumber:13}},"Google Analytics:")," Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:540,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:542,columnNumber:11}},"You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add- on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:550,columnNumber:11}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:551,columnNumber:11}}," ","For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:"," ",a.a.createElement(wu,{target:"_blank",href:"https://policies.google.com/privacy?hl=en-US",__self:void 0,__source:{fileName:f_,lineNumber:555,columnNumber:13}}," ","Google Analytics Privacy Policy"," ")))),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:565,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:566,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:568,columnNumber:7}},"Children's Privacy"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:569,columnNumber:7}},"Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:579,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:580,columnNumber:7}},"We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old. In some cases, this means We will be unable to provide certain functionality of the Service to these users."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:587,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:588,columnNumber:7}},"If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:595,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:596,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:597,columnNumber:7}},"Links to Other Websites"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:598,columnNumber:7}},"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:604,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:606,columnNumber:7}},"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:611,columnNumber:7}}),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:612,columnNumber:7}}),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:613,columnNumber:7}},"Changes to this Privacy Policy"),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:614,columnNumber:7}},"We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:619,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:620,columnNumber:7}},'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.'),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:626,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:627,columnNumber:7}},"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),a.a.createElement(yu,{__self:void 0,__source:{fileName:f_,lineNumber:633,columnNumber:7}},"Contact"),a.a.createElement("br",{__self:void 0,__source:{fileName:f_,lineNumber:634,columnNumber:7}}),a.a.createElement("p",{__self:void 0,__source:{fileName:f_,lineNumber:635,columnNumber:7}},"If you have any questions about this Privacy Policy, You can contact us:"),a.a.createElement("ul",{__self:void 0,__source:{fileName:f_,lineNumber:639,columnNumber:7}},a.a.createElement("li",{__self:void 0,__source:{fileName:f_,lineNumber:640,columnNumber:9}},"By email:"," ",a.a.createElement(wu,{target:"_blank",href:"mailto:support@spekkly.com",__self:void 0,__source:{fileName:f_,lineNumber:642,columnNumber:11}},"support@spekkly.com"))))),p_="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\router\\AppRouter.jsx";var v_=()=>{const e=Object(l.d)(({sessionState:{isLoggedIn:e}})=>e);return a.a.createElement(m.c,{__self:void 0,__source:{fileName:p_,lineNumber:22,columnNumber:5}},e&&a.a.createElement(m.a,{exact:!0,path:"/post",render:()=>a.a.createElement(Ii,{title:"Create Post",formTypeProp:"create",__self:void 0,__source:{fileName:p_,lineNumber:28,columnNumber:13}}),__self:void 0,__source:{fileName:p_,lineNumber:24,columnNumber:9}}),e&&a.a.createElement(m.a,{exact:!0,path:"/settings",component:Wl,__self:void 0,__source:{fileName:p_,lineNumber:32,columnNumber:22}}),e&&a.a.createElement(m.a,{exact:!0,path:"/messages",component:Ec,__self:void 0,__source:{fileName:p_,lineNumber:33,columnNumber:22}}),e&&a.a.createElement(m.a,{exact:!0,path:"/posts",component:Kc,__self:void 0,__source:{fileName:p_,lineNumber:34,columnNumber:22}}),a.a.createElement(m.a,{path:"/terms-of-service",exact:!0,component:Su,__self:void 0,__source:{fileName:p_,lineNumber:35,columnNumber:7}}),a.a.createElement(m.a,{path:"/privacy-policy",exact:!0,component:N_,__self:void 0,__source:{fileName:p_,lineNumber:36,columnNumber:7}}),a.a.createElement(m.a,{path:"/posts/edit/:id",render:e=>a.a.createElement(Ii,{title:"Edit Post",formTypeProp:"edit",params:e,__self:void 0,__source:{fileName:p_,lineNumber:40,columnNumber:11}}),__self:void 0,__source:{fileName:p_,lineNumber:37,columnNumber:7}}),a.a.createElement(m.a,{path:"/posts/:id",render:e=>a.a.createElement(gu,{postSection:"home",params:e,__self:void 0,__source:{fileName:p_,lineNumber:45,columnNumber:29}}),__self:void 0,__source:{fileName:p_,lineNumber:43,columnNumber:7}}),a.a.createElement(m.a,{path:"/",exact:!0,component:Xu,__self:void 0,__source:{fileName:p_,lineNumber:47,columnNumber:7}}),a.a.createElement(m.a,{path:"/about",exact:!0,component:l_,__self:void 0,__source:{fileName:p_,lineNumber:48,columnNumber:7}}),a.a.createElement(m.a,{path:"/users/verify-email",exact:!0,component:e_,__self:void 0,__source:{fileName:p_,lineNumber:49,columnNumber:7}}),a.a.createElement(m.a,{path:"/users/reset_password",render:e=>a.a.createElement(Xu,{resetPassword:!0,params:e,__self:void 0,__source:{fileName:p_,lineNumber:52,columnNumber:29}}),__self:void 0,__source:{fileName:p_,lineNumber:50,columnNumber:7}}),a.a.createElement(m.a,{path:"*",__self:void 0,__source:{fileName:p_,lineNumber:54,columnNumber:7}},!1===e&&a.a.createElement(b_,{__self:void 0,__source:{fileName:p_,lineNumber:54,columnNumber:48}})))},g_="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\components\\app\\App.jsx";var h_=()=>{const[e,t]=Object(o.useState)(!1),r=Object(l.d)(({loginSignUpState:e})=>e),i=Object(l.d)(({assetState:{FAVICON:e}})=>e),n=Object(l.d)(({appState:{blurBackground:e}})=>e),m=Object(l.c)();return Object(o.useEffect)(()=>{er(t,m)},[t]),a.a.createElement(Zo,{blurBackground:n,__self:void 0,__source:{fileName:g_,lineNumber:38,columnNumber:5}},a.a.createElement(Qo.a,{url:i,__self:void 0,__source:{fileName:g_,lineNumber:39,columnNumber:7}}),a.a.createElement(s.a,{__self:void 0,__source:{fileName:g_,lineNumber:40,columnNumber:7}},a.a.createElement(Dt,{dataLoaded:e,__self:void 0,__source:{fileName:g_,lineNumber:41,columnNumber:9}}),a.a.createElement(v_,{__self:void 0,__source:{fileName:g_,lineNumber:42,columnNumber:9}}),(r.isSignUpOpen||r.isLoginOpen)&&a.a.createElement(ua,{medium:!0,closeModal:()=>{m(nt(!1)),m(lt(!1))},showCloseButton:!0,__self:void 0,__source:{fileName:g_,lineNumber:44,columnNumber:11}},a.a.createElement(Ko,{__self:void 0,__source:{fileName:g_,lineNumber:45,columnNumber:13}}))))};r.d(t,"default",(function(){return y_}));var E_="D:\\CompanyWork\\Dtechies\\wdfinch-spekly-v2-1a3afd84feed_ew\\Spekky\\client\\src\\index.jsx";class y_ extends a.a.Component{render(){return a.a.createElement(l.a,{store:Le,__self:this,__source:{fileName:E_,lineNumber:11,columnNumber:7}},a.a.createElement(h_,{__self:this,__source:{fileName:E_,lineNumber:12,columnNumber:9}}))}}n.a.render(a.a.createElement(y_,{__self:void 0,__source:{fileName:E_,lineNumber:18,columnNumber:17}}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.379a0610.chunk.js.map