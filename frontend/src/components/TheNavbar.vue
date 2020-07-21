<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag='router-link' :to="{ name: 'home' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag='router-link' :to="{ name: 'about' }">
                About Us
            </b-navbar-item>
            <b-navbar-item tag='router-link' :to="{ name: 'menu' }">Menu</b-navbar-item>
            <b-navbar-item tag='router-link' :to="{ name: 'example' }">Example</b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="router-link"
                        to="/sign-up"
                        type="is-primary">
                        Sign Up
                    </b-button>
                    <b-button tag="router-link"
                        to="/login"
                        type="is-light">
                        Login
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
//   data() {
//     return {
//       isActive: true
//     }
//   }
}
</script>