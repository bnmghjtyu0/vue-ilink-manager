<template>
  <div class="container">
    <h4 class="mt-3 mb-3"
        v-for="item in firebaseData.form">
      {{item.key == key ? item.projectName:''}}
    </h4>
    <!-- Button trigger modal -->
    <button type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal">新增
    </button>
    <ul class="list-group list-group-flush mt-3">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div v-for="item in firebaseData.form">
          <input type="checkbox"> 1.{{item.form.title}}
          <div v-html="item.form.Quill"></div>
        </div>
        <span class="badge badge-primary">Richard</span>
      </li>
    </ul>
    <!-- <table class="table">
      <thead>
        <tr>
          <th>單號</th>
          <th>功能項目</th>
          <th>子項目</th>
          <th>問題描述</th>
          <th>負責工程師</th>
          <th>處理日期</th>
          <th>交付期限</th>
          <th>更新日期</th>
          <th>功能</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table> -->
    <!-- modal -->
    <div class="modal"
         tabindex="-1"
         role="dialog"
         id="exampleModal">
      <div class="modal-dialog modal-lg"
           role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">新增項目</h5>
            <button type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"
               v-for="item in firebaseData.form">
            <div class="form-group row">
              <label for=""
                     class="col-auto col-form-label">標題</label>
              <div class="col">
                <input type="text"
                       class="form-control"
                       v-model="item.form.title">
              </div>

            </div>
            <div class="form-group row">
              <label for=""
                     class="col-auto col-form-label">測試人員</label>
              <div class="col">
                <input type="text"
                       class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label for=""
                     class="col-auto col-form-label">完成日期</label>
              <div class="col">
                <input type="text"
                       class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label for=""
                     class="col-auto col-form-label">內容</label>
              <div class="col">
                <vue-editor v-model="item.form.Quill"></vue-editor>
              </div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-success"
                    @click="postFirebase()">新增項目</button>
            <button type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">取消
            </button>
          </div>
        </div>
      </div>
    </div>
    <p>{{firebaseData.form}}</p>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'HelloWorld',
  components: {
    VueEditor
  },
  data() {
    return {
      key: this.$route.query.key,
      firebaseRefProject: firebase.database().ref('/Project/'),
      firebaseData: {
        projectName: '',
        form: {
          title: '',
          Quill: ''
        }
      }
    }
  },
  methods: {
    // get firebase 取得
    getFirebase: function() {
      this.firebaseRefProject.on('value', snapshot => {
        const array = []
        snapshot.forEach(x => {
          console.log(x)
          const item = x.val()
          item.key = x.key
          // console.log(item)
          array.push(item)
        })
        return (this.firebaseData.form = array)
      })
    },
    // post firebase 儲存
    postFirebase: function() {
      // 更新單一節點
      var updates = {}
      this.firebaseData.form.forEach(x => {
        if (x.key != this.key) return false
        updates['/Project/' + x.key + '/' + 'form' + '/' + 'title'] = this.firebaseData.form.title
        updates['/Project/' + x.key + '/' + 'form' + '/' + 'Quill'] = this.firebaseData.form.Quill
      })
      return firebase
        .database()
        .ref()
        .update(updates)

      // 存取資料庫
      // if (this.firebaseData.projectName == '') return false
      // this.firebaseRefProject.push({
      //   // projectName: this.firebaseData.projectName,
      //   content: '12312323'
      // })
      // this.firebaseData.projectName = ''
    },
    // put firebase 修改
    putFirebase: function() {
      this.firebaseRefProject.child('Project').set(this.firebaseData.projectName)
    },
    // delete firebase移除資料
    deleteFirebase: function(i) {
      this.firebaseRefProject.child(this.firebaseData.form[i].key).remove()
    },
    showModal: function() {
      this.$refs.mdl_dialog.showModal()
    },
    closeModal: function() {
      this.$refs.mdl_dialog.close()
    }
  },
  mounted() {
    this.getFirebase()
  }
}
</script>
