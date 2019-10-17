<template>
  <div>
    <div class="formitem">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-row>
          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div :class="isbigormini?'bigform':'miniform'">
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        isbigormini: false,
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      bombsize() {
        this.isbigormini = !this.isbigormini
        console.log(this.isbigormini)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scoped>
  .elasticframe >>> .el-dialog {
    position: relative;
  }

  .elasticframe >>> .el-dialog__body {
    overflow: hidden;
    height: calc(100vh - 100px);
  }

  .el-col-4 {
    margin-right: 14%;
  }

  .formitem {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  /* 大表单 */
  .bigform {
    width: 250%;
  }

  /* 小表单 */
  .miniform {
    width: 200%;
  }

  .el-button--primary {
    margin-left: -600px;
  }
</style>
