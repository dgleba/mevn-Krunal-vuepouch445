<template>
  <div class="localaapp">
    <br />
    <div>SETTINGS</div>
    <input id="dginput" v-model="arow.synca" placeholder="...??Enter New... " />
    <button id="dgbutton" @click="addrow">Save</button>
    <div>
      Click on an item below to edit it. Click outside that box to finish (like
      a spreadsheet).
    </div>

    <div v-for="arow in localaapp">
      <div class="svdiv"></div>
      <input
        id="dginput"
        v-model="arow.synca"
        @change="
          // arow.updatedat = this.dghelper.updatedat(); // TypeError: Cannot read property 'updatedat' of undefined
          $pouch.put('_local/aapp', arow);
        "
      />
      {{ arow._id }}, {{ arow.updatedat }},
    </div>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");

export default {
  data: () => ({
    arow: {},
    syncurl: {},
    resultsPerPage: 125,
    currentPage: 1,
    qsearch: "",
    delconfm: null,
    updatedat: null
  }),
  created() {
    console.log(this.atable);
    console.log(this.arow.synca);
    // Send all documents to the remote database, and stream changes in real-time. Note if you use filters you need to set them correctly for pouchdb and couchdb. You can set them for each direction separatly: options.push/options.pull. PouchDB might not need the same filter to push documents as couchdb to send the filtered requested documents.
    // this.$pouch.sync('maindb', 'http://a:a@192.168.88.58:5984/maindb');
    var syncurl = this.$pouch.get('_local/aapp', '1')
    this.$pouch.sync('maindb', this.syncurl.synca);
  },  
  methods: {
    addrow: function() {
      this.$pouch.post("_local/aapp", {
        synca: this.arow.synca,
        //rtype: "XXsettingsTBD",
        updatedat: dghelper.updatedat(),
        _id: "1"
      });
      //this.arow.name = "";
    },
    //
    // see above <template> for edit and delete calls. I couldnt get it to work here in this editrow function.
    //
    editrow: function() {
      // this.$pouch.put("_local/aapp", this.arow);
      //this.arow.updatedat = dghelper.updatedat();
      this.$pouch.put("_local/aapp", {
        synca: this.arow.synca,
        updatedat: dghelper.updatedat(),
        _id: "1",
        _rev: this.arow._rev
      });
    }
  },
  // VuePouch adds a `pouch` config option to all components.
  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    localaapp: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "_local/aapp",
        selector: {},
        sort: [{ name: "asc" }],
        limit: this.resultsPerPage
      };
    }
  }
};
</script>

<style scoped>
/* <!--  // make the input box more visible -->
// background-color: hsl(192, 6%, 93%) ;
 */
#dginput {
  color: black;
  background-color: hsl(80, 12%, 91%);
  margin: 2px;
  width: 60%;
}
#dgbutton {
  background-color: hsl(190, 26%, 91%);
  padding: 6px;
  margin: 5px;
}
</style>
