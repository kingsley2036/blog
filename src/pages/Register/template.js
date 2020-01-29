import {mapActions} from 'vuex'
export default {
  data () {
    return {
      username:'',
      password:'',
    }
  },
  methods:{
    ...mapActions(['register']),
    clickRegister(){
      this.register({username:this.username,password:this.password}).then(
        (res)=>{
          this.$router.push({path:'./'})
        }
      )
    }
  }
}
