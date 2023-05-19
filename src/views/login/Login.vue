<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-18 16:18:11
 * @LastEditTime: 2023-05-19 18:21:59
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <!-- 导航栏 -->
  <nav class="login_nav-bar">
    <div class="login_nav-left">
      <img class="login_nav-logo" src="@/assets/img/login/logo.png" alt="logo" />
      <span>Jeecg</span>
    </div>
    <SwitchTheme />
  </nav>
  <!-- 描述和图片 -->
  <header class="login_desc-bar">
    <h4 class="login_desc-title">Jeecg-mobile</h4>
    <span class="login_desc-text">Jeecg mobile terminal by Vue3 & TypeScript</span>
    <img class="login_desc-bg" src="@/assets/img/login/login-bg.png" alt="登录页图片">
  </header>
  <!-- 表单 -->
  <main class="longin_form-bar">
    <div :style="{ width: '6.67rem' }">
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入登录账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password v-model="loginForm.password" placeholder="请输入登录密码" />
        </el-form-item>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="12"><el-button :style="{ width: '100%' }" @click="resetForm(loginFormRef)">重置</el-button>
        </el-col>
        <el-col :span="12"><el-button :style="{ width: '100%' }" type="primary"
            @click="submitForm(loginFormRef)">登录</el-button> </el-col>
      </el-row>
    </div>

  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import SwitchTheme from '@/components/base/SwitchTheme.vue'
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: ''
})
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入登录账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入登录密码', trigger: 'change' }]
})
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .login_nav-bar {
    display: flex;
    align-items: center;
    height: 1.33rem;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    padding: 0 0.13rem;

    .login_nav-left {
      display: flex;
      align-items: center;
    }

    .login_nav-logo {
      height: 1.07rem;
      width: 1.07rem;
    }
  }

  .login_desc-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0.8rem;

    .login_desc-title {
      font-size: 24px;
    }

    .login_desc-text {
      font-size: 0.43rem;
      margin-top: 4.88px;
      margin-bottom: 0.27rem;
    }

    .login_desc-bg {
      width: 100%;
      padding: 0 0.27rem;
      box-sizing: border-box;
    }
  }

  .longin_form-bar {
    margin-top: 1.33rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 601px) {}
</style>