<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-18 16:18:11
 * @LastEditTime: 2023-05-30 18:22:28
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
  <div class="login-content-bar">
    <!-- 描述和图片 -->
    <header class="login_desc-bar">
      <h4 class="login_desc-title">Jeecg-mobile</h4>
      <span class="login_desc-text">Jeecg mobile terminal by Vue3 & TypeScript</span>
      <img class="login_desc-bg" src="@/assets/img/login/login-bg.png" alt="登录页图片">
    </header>
    <!-- 表单 -->
    <main class="longin_form-bar">
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" :style="{ width: '6.67rem' }">
        <!-- 账号密码 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入登录账号" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password v-model="loginForm.password" clearable placeholder="请输入登录密码" />
        </el-form-item>
        <!-- 验证码 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="captcha">
              <el-input @keyup.enter="submitForm(loginFormRef)" v-model="loginForm.captcha" placeholder="请输入验证码"
                clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12"><img @click="getVerificationCode" :src="verificationSrc" class="longin_form-verification"
              alt="验证码"></el-col>
        </el-row>

        <!-- 按钮 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-button :loading="loginLoading" :style="{ width: '100%' }" type="primary"
              @click="submitForm(loginFormRef)">
              登录
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import SwitchTheme from '@/components/base/SwitchTheme.vue'
import { apiGetVerificationCode, apiLogin, apiGetUserPermission } from '@/api/systemApi'
import useGlob from '@/hooks/useGlobal'
import { useUserStore, useSystemStore } from '@/stores/index'
const GLOB = useGlob()
const userStore = useUserStore()
const systemStore = useSystemStore()
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: '',
  captcha: '',
  remember_me: true,
})
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入登录账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入登录密码', trigger: 'change' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'change' }]
})
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      handleLogin()
    } else {
      console.log('error submit!', fields)
    }
  })
}
let loginLoading = ref<boolean>(false)
function handleLogin() {
  loginLoading.value = true
  apiLogin(loginForm).then(async (res: any) => {
    GLOB.$message({
      type: 'success',
      message: '登录成功'
    })
    userStore.setUserInfo(res.result.userInfo)
    userStore.setToken(res.result.token)
    await getUserPermission()
    loginLoading.value = false
    GLOB.$router?.push({
      path: '/home'
    })
  }).catch((err) => {
    getVerificationCode()
    GLOB.$message({
      type: 'error',
      message: err.message || '登录失败'
    })
    loginLoading.value = false
  })
}
let verificationSrc = ref<string>('')
function getVerificationCode() {
  apiGetVerificationCode().then((res: any) => {
    verificationSrc.value = res.result
    loginForm.captcha = ''
  })
}
async function getUserPermission() {
  const res: any = await apiGetUserPermission()
  systemStore.setPermissionsList(res.result.menu)
}
getVerificationCode()

</script>

<style lang="scss" scoped>
@import '@/assets/css/media.scss';

.login_nav-bar {
  @include use-media('desktop') {
    padding: 0 15Px;
    font-size: 30Px;
    height: 60Px;
  }

  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 30px;

  .login_nav-left {
    display: flex;
    align-items: center;
  }

  .login_nav-logo {
    height: 40px;
    width: 40px;

    @include use-media('desktop') {
      height: 40Px;
      width: 40Px;
    }
  }
}

.login-content-bar {
  @include use-media('desktop') {
    position: relative;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    width: 900Px;
    height: 600px;
    margin: 60Px auto;
    border-radius: 20px;
    box-shadow: 2Px 2Px 6Px rgba(0, 0, 0, 0.5), -4Px -4Px 8Px rgba(255, 255, 255, 0.1);
  }
}

.login_desc-bar {
  @include use-media('desktop') {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;

  .login_desc-title {
    font-size: 28px;

    @include use-media('desktop') {
      font-size: 35px;
      position: absolute;
      top: 60Px;
    }
  }

  .login_desc-text {
    font-size: 16px;
    margin-top: 4.88px;
    margin-bottom: 0.27rem;

    @include use-media('desktop') {
      position: absolute;
      top: 120Px;
    }
  }

  .login_desc-bg {
    width: 375px;
    padding: 0 0.27rem;
    box-sizing: border-box;

    @include use-media('desktop') {
      width: 60%;
      position: absolute;
      left: 0;
      top: 180Px;
    }
  }
}

.longin_form-bar {
  @include use-media('desktop') {
    width: 400px;
    position: relative;
  }

  margin-top: 1.33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.longin_form-verification {
  width: 100%;
  height: 0.853rem;
}
</style>