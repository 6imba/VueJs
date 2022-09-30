<template>
  <!-- <TwoWayBinding/> -->
  <!-- <Form/> -->
  <!-- <ConditionalRendering/> -->
  <!-- <ForLoop/> -->
  <!-- <ParentComponent/> -->
  <!-- <ScriptTag/> -->
  <!-- <PassDataViaProps/> -->
  <!-- <Blog/> -->
  <!-- <HtmlBinding/> -->
  <!-- <ClassBinding/> -->
  <!-- <RefComponent_1/> -->
  <!-- <RefComponent_2/> -->
  <!-- <Form_1/> -->
  <!-- <Form_2/> -->
  <!-- <Form_3/> -->
  <!-- <ComponentLifeCycle/> -->
  <!-- <Create_Method/> -->
  <!-- <Mount_Methods_Hook/> -->
  <!-- <Update_Methods_Hook/> -->
  <!-- <UnMount_Methods_Hook/> -->

  <!-- simple-static-routing -->
  <!-- <router-link to="/">Home </router-link>
  <router-link to="about">About </router-link>
  <router-link to="contact">Contact </router-link>
  <hr>
  <router-view></router-view> -->

  <!-- dynamic-routing -->
  <!-- <router-link to="/">Home </router-link>
  <router-link to="/about">About </router-link>
  <router-link to="/contact">Contact </router-link>
  <router-link to="/profile/Amir">Profile </router-link>
  <hr>
  <router-view></router-view> -->

  <!-- <API/> -->
  <PostAPI/>

</template>

<script>
import TwoWayBinding from './components/1.TwoWayBinding.vue'
import Form from './components/2.Form.vue'
import ConditionalRendering from './components/3.ConditionalRendering.vue'
import ForLoop from './components/4.ForLoop-ListRendering.vue'
import ParentComponent from './components/5.1.ParentComponent.vue'
import PassDataViaProps from './components/6.1.PassDataFromParentToChildViaProps.vue'
import ScriptTag from './components/ScriptTag.vue'
import Blog from './components/7.1.ReuseComponent.vue'
import HtmlBinding from './components/8.HtmlBinding.vue'
import ClassBinding from './components/9.ClassBinding.vue'
import RefComponent_1 from './components/10.1.Ref.vue'
import RefComponent_2 from './components/10.2.SameRefInMultipleElement.vue'
import Form_1 from './components/11.1.Form_1.vue'
import Form_2 from './components/11.2.Form_2.vue'
import Form_3 from './components/11.3.Form_Validation.vue'
import ComponentLifeCycle from './components/20.0.Component_LifeCycle.vue'
import Create_Method from './components/20.1.LifeCycle_Create_Method.vue'
import Mount_Methods_Hook from './components/20.2.LifeCycle_Mount_Method.vue'
import Update_Methods_Hook from './components/20.3.LifeCycle_Update_Method.vue'
import UnMount_Methods_Hook from './components/20.4.1.LifeCycle_UnMount_Method.vue'
import API from './components/24.1.GetAPI.vue'
import PostAPI from './components/24.2.PostAPI.vue'

export default {
  name: 'App',
  components: {
    TwoWayBinding,
    Form,
    ConditionalRendering,
    ForLoop,
    ParentComponent,
    PassDataViaProps,
    ScriptTag,
    Blog,
    HtmlBinding,
    ClassBinding,
    RefComponent_1,
    RefComponent_2,
    Form_1,
    Form_2,
    Form_3,
    ComponentLifeCycle,
    Create_Method,
    Mount_Methods_Hook,
    Update_Methods_Hook,
    UnMount_Methods_Hook,
    API,
    PostAPI,
  }
}
</script>

<!-- 
  - bind form:input_field<template> with model:data_property<script> using v-model directives.
  - 
 -->