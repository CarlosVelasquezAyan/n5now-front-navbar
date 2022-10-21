import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueI18n from "vue-i18n";
import TranslateBtn from "../../src/components/TranslateBtn.vue";
import N5NowLogo from "../../src/components/N5NowLogo.vue";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(VueI18n);

describe("TranslateBtn.vue", () => {
  const messages = {
    en: {
      navbarTitle: "Challenge",
    },
    es: {
      navbarTitle: "Desafío",
    },
  };
  const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders component when passed", () => {
    // render the component
    const $t = () => {};
    const wrapper = shallowMount(TranslateBtn, {
      mocks: { $t },
      i18n,
      vuetify,
    });
    expect(wrapper.exists()).toBe(true);
  });
});

describe("N5NowLogo.vue", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders component when passed", () => {
    // render the component
    const wrapper = shallowMount(TranslateBtn, {
      vuetify,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
