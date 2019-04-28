<template>
  <div id="demo">
    <template v-for="branch in branches">
      <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch"></input>
      <label :for="branch">{{branch}}</label>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits">
        <a :href="record.html_url" target="_blank">{{record.sha.slice(0,7)}}</a>
        - <span>{{record.commit.message | truncate}}</span>
        <br/>
        by <span><a :href="record.author.html_url" target="_blank" class="author">{{record.commit.author.name}}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';

export default {
  data () {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },
  created: function () {
    this.fetchData();
  },
  watch: { //监听
    currentBranch: 'fetchData'
  },
  filters: {
    //截断
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    //替换
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText);
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
}
</script>

<style scoped>

#demo {
  font-family: 'Helvetica', Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author, .date {
  font-weight: bold;
}

</style>
