import { createStore } from "vuex";

export default createStore({
  state: {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmY5ZjRiMWFkNGE2ZWNhZTQwN2Q4YTQ4N2Q0OThmNGE1MzM0MjA3NzljZTdjOTg5ZDFmOGViMTViNGMzN2U1ZWQ3YTA1ODhmNWYxZDU1ZDIiLCJpYXQiOjE2ODMxMjY4MDEuMDYwMTc3LCJuYmYiOjE2ODMxMjY4MDEuMDYwMTgyLCJleHAiOjQ4Mzg4MDA0MDEuMDQ5NjUsInN1YiI6IjEiLCJzY29wZXMiOlsiY29tcGFueV90b2tlbiJdfQ.oGlxF6wNUjuHk3cX_lPfGwrci7BPg3K9dVcvS6Oq7DuPhuq5CUndOHVMBvLz_z0OQTx22VwOGhWoZ8oQ-XweAhiFZ4VuAOr5X3u6iiHTjE2ohJjiI7vV8V9Hzu7a9FxJ989IaPPqh6vzS7kh6AlTFKXmCWGlccBhuFO4CJvQtxUap0V9h4tOcCjRM7EwklZNUthEZnhfEy4LdSpKJaUlGT5WkyVYiwzAR3hmivdqwWcOMRRDrQt-Hko90VQAIlR80bzUFZdch4lMtJRo9a_jImdj_15Qwew8jX7CPeo_23zJGdNaQdIGMgZkuLL05X46xilKJFBVDt0M2vYzEIj_xXnJcCG3qUegLW3MOpvcTW0Vit-iGrONqOCNUeMaVPfxIFCmojApNBLR1UV5xTfFF02pGtds-1pYVcuzjTPxBOlkGszdn8u366Bv9xdtQ4WT-dZvHJ313RIhO-y12lnJTGhVExrj3NusPl8d8XhC-0zK9dMH8Op8wlrzWxV3UpvDto3b5eTbcXS6fvZ7rUSSE6ypDESnyXcdd5HBiJLi2dynVjowopk8oCZHZOMGbm-nR05n6wW2b1l8AHpe4634LgWBg-rEh_8sc29-ur3Fe7C1FV2YSrsW5V--oGt7-tyPQ1hxfd0ix9BHCjZhEjsJuU4mC6Sz50JvtxZH_9iZn_c",
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    updateToken({ commit }, token) {
      commit("setToken", token);
    },
  },
  modules: {},
});
