<template>
  <div>
    <h4>Edit Post</h4>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Title: </label>
            <input type="text" class="form-control" v-model="post.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Body: </label>
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
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: "",
        _id: ""
      }
    };
  },

  created_api() {
    //
    // let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    // this.axios.get(uri).then(response => {
    //   this.post = response.data;
    // });
    //
  },
  created() {
    let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost_api() {
      //   let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      //   this.axios.post(uri, this.post).then(() => {
      //     this.$router.push({ name: "posts" });
      //   });
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
