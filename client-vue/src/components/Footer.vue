 <template>
    <footer>
        <div>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/about">About App</router-link>
            <!-- <router-link to="/about-me">About Developer</router-link> -->
            <router-link to="/counter-app">CounterApp</router-link>
            <p>&copy; Amrit Regmi </p>
        </div>

    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>
