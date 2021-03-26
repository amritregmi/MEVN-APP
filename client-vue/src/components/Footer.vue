 <template>
    <footer>
        <div>
            <router-link to="/signup">Signup</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/about">About App</router-link>
            <!-- <router-link to="/about-me">About Developer</router-link> -->
            <!-- <router-link to="/counter-app">CounterApp</router-link> -->

               
            <a href="https://github.com/amritregmi/MEVN-APP"> 
                <i class="fab fa-github"></i>
            </a>
             <a href="https://au.linkedin.com/in/amrit-regmi-852815b9"> 
                <i class="fab fa-linkedin"></i>
            </a>
            <p>&copy; Amrit Regmi </p>
        </div>

    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
    i{
        color:blue;
    }
</style>
