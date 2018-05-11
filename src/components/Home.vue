<template>
    <div class="container">
        <ul class="nav nav-pills mb-3"
            id="pills-tab"
            role="tablist">
            <li class="nav-item">
                <a class="nav-link active"
                   id="pills-home-tab"
                   data-toggle="pill"
                   href="#pills-home"
                   role="tab"
                   aria-controls="pills-home"
                   aria-selected="true">Trello</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"
                   id="pills-profile-tab"
                   data-toggle="pill"
                   href="#pills-profile"
                   role="tab"
                   aria-controls="pills-profile"
                   aria-selected="false">Calendar</a>
            </li>
        </ul>
        <div class="tab-content"
             id="pills-tabContent">
            <div class="tab-pane fade show active"
                 id="pills-home"
                 role="tabpanel"
                 aria-labelledby="pills-home-tab">

                <div class="form-row">
                    <div class="col-6">
                        <div class="form-group row flex-nowrap">
                            <input type="text"
                                   class="form-control"
                                   placeholder="請輸入標題"
                                   v-model="firebaseData.projectName">
                            <button class="btn btn-primary"
                                    @click="postFirebase()">新增專案</button>
                        </div>
                    </div>
                    <div class="row w-100">
                        <div class="col-2"
                             v-for="card in firebaseData.form">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{{card.projectName}}</h5>
                                    <router-link :to="{path:'/projectContent?',query: {key: card.key}}">詳細資料</router-link>
                                    <button class="btn btn-danger btn-sm"
                                            @click="deleteFirebase(card.key)">刪除專案</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade"
                 id="pills-profile"
                 role="tabpanel"
                 aria-labelledby="pills-profile-tab">
                Trello
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      key: 1,
      firebaseRefProject: firebase.database().ref('/Project/'),
      firebaseData: {
        projectName: '',
        form: {
          title: 'tt',
          Quill: ''
        }
      }
    }
  },
  methods: {
    // post firebase 儲存
    postFirebase: function() {
      // 存取資料庫
      if (this.firebaseData.projectName == '') return false
      this.firebaseRefProject.push({
        projectName: this.firebaseData.projectName,
        form: {
          title: '',
          Quill: ''
        }
      })
      this.firebaseData.projectName = ''
    },
    // get firebase 取得
    getFirebase: function() {
      this.firebaseRefProject.on('value', snapshot => {
        const array = []
        snapshot.forEach(x => {
          const item = x.val()
          item.key = x.key
          // console.log(item)
          array.push(item)
        })
        return (this.firebaseData.form = array)
      })
    },
    deleteFirebase: function(key) {
      this.firebaseRefProject.child(key).remove()
    }
  },
  mounted() {
    this.getFirebase()
  }
}
</script>

