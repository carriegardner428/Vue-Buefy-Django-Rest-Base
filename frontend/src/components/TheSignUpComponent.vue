<template>
    <ValidationObserver ref="observer" v-slot="{ passes }">
    <section>
        <BInputWithValidation rules="required" label="Name" v-model="name"/>

        <BInputWithValidation rules="required|email" type="email" label="Email" v-model="email"/>

        <BInputWithValidation rules="required" label="Username" v-model="username"/>

        <BInputWithValidation
            rules="required"
            type="password"
            label="Password"
            vid="password"
            v-model="password"
        />
        
        <BInputWithValidation
            rules="required|confirmed:password"
            name="Password"
            type="password"
            label="Confirm Password"
            v-model="confirmation"
        />

        <button class="button is-success" @click="passes(submit)">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit</span>
        </button>

    </section>
    </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import BInputWithValidation from '@/components/inputs/BInputWithValidation.vue'

export default {
  name: 'TheSignUpComponent',
  components: {
    BInputWithValidation,
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmation: "",
  }),
  methods: {
    submit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.username = "";
      this.password = "";
      this.confirmation = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
}
</script>