# MEVN example converted to use pouchdb

## Code is at Github this.

https://github.com/dgleba/mevn-Krunal-vuepouch445

## Status

- 2019-02-25_Mon_22.59-PM vue-material autocomplete has a bug with sub term - even typing a letter will
  not result in populating the field with the selection.

## Source:

```
Original project source for Vue rest api app: https://github.com/KrunalLathiya/MEVNCRUDExample
https://appdividend.com/2018/11/21/mevn-stack-tutorial-with-example-from-scratch/

I replaced  rest api calls [express] with vue-pouch / pouch-vue calls.
See:
https://github.com/buhrmi/vue-pouch

Todo:
 - Convert to  https://github.com/MDSLKTR/pouch-vue
 - Add autocomplete fields
 - Add couchdb sync
 - make it a PWA  - offline web app

David Gleba 2019-02-22_Fri_07.09-AM
```

## Status History

- 2019-02-25_Mon_22.59-PM vue-material autocomplete has bug. with sub term even typing a letter will not result in populating the field with the selection. for example, see https://github.com/vuematerial/vue-material/issues/1937.

* 2019-02-25 cleaned crud, search. maindb, mrow, bootstrap. no autocomplete.

* 2019-02-23_Sat_23.47-PM `edit` and `delete` are working.

* 2019-02-23_Sat_09.29-AM:: `create post` and `posts` are working.
  I set edit path to a constant to avoid error for now.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
