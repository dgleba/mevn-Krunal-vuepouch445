<template>
  <div>
    <h5>Create A Post</h5>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea
              class="form-control"
              v-model="post.body"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");

export default {
  data() {
    return {
      posts: {},
      post: {},
      resultsPerPage: 25,
      currentPage: 1,
      qsearch: "190221_2046",
      mainlists: {}
    };
  },
  methods: {
    addPost_api() {
      //let uri = "http://192.168.88.58:4000/posts/add";
      // let uri = "http://localhost:4000/posts/add";
      // this.axios.post(uri, this.post).then(() => {
      //   this.$router.push({ name: "posts" });
      // });
      console.log(this.post);
    },

    addPost: function() {
      var viuid = dghelper.iuid();

      console.log("viuid= ", viuid);
      console.log(this.post);
      this.$pouch
        .post("mainlists", {
          title: this.post.title,
          body: this.post.body,
          rtype: "mlist",
          _id: viuid
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    mainlists: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        selector: {},
        limit: this.resultsPerPage
      };
    }
  }
};
</script>
