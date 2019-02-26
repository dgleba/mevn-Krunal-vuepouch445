<template>
  <div class="maindb">
    <h4>Edit</h4>
    <form @submit.prevent="update_mrow">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label> Title: </label>
            <input type="text" class="form-control" v-model="maindb.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Body: </label>
            <textarea
              class="form-control"
              v-model="maindb.body"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Statusfld:</label>
            <input
              type="text"
              class="form-control"
              v-model="maindb.statusfld"
            />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
        <button
          class="btn btn-danger float-right"
          @click.prevent="delete_mrow(mrow._id);"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mrow: {},
      maindb: {}
    };
  },

  created_api() {
    //
    // let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    // this.axios.get(uri).then(response => {
    //   this.post = response.data;
    // });
  },
  methods: {
    updatePost_api() {
      //   let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      //   this.axios.post(uri, this.post).then(() => {
      //  this.$router.push({ name: "posts" });
      //   });
    },

    update_mrow: function() {
      console.log(this.maindb);
      this.$pouch
        .put(
          "maindb",
          this.maindb
          // or update each field specifically
          // , {
          // title: this.mainlists.title,
          // body: this.mainlists.body,
          // rtype: "mlist",
          // _id: this.$route.params.id,
          // _rev: this.mainlists._rev
          // }
        )
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    },
    deletePost_api(id) {
      // let uri = `http://localhost:4000/posts/delete/${id}`;
      // this.axios.delete(uri).then(response => {
      //   this.posts.splice(this.posts.indexOf(id), 1);
      // });
    },
    delete_mrow(id) {
      console.log("to delete.. ", this.maindb);
      this.$pouch
        .remove("maindb", {
          _id: this.$route.params.id,
          _rev: this.maindb._rev
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
    maindb: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        selector: { _id: this.$route.params.id },
        first: true
      };
      console.log(this.maindb);
    }
  }
};
</script>
