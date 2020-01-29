import {mapActions} from 'vuex'
export default {
  data () {
    return {
     username:'',
     password:'',
    }
  },
  methods:{
    ...mapActions(['login']),
    clickLogin(){
      this.login({username:this.username,password:this.password}).then(
        (res)=>{
          this.$router.push({path:this.$route.query.redirect || './'})
        }
        )
    }
  }
}