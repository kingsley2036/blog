import blog from '@/api/blog.js'
export default {
  data () {
    return {
     user:{},
     blogs:[],
     page:1,
     total:null,
     userId:null,
    }
  },
  created(){
    this.userId=this.$route.params.userId;
    this.page=parseInt(this.$route.query.page) || 1;
    console.log(this.userId)
    blog.getBlogsByUserId(this.userId, { page:this.page }).then(res=>{
      if(res.data.length>0){
        this.user=res.data[0].user;
      }
     this.blogs=res.data;
     this.total=res.total;
     this.page=res.page;
     this.$router.push({query:{page:this.page}})
     
    })

  },
  methods: {
    splitDate(dateStr){
      let dateObj=typeof dateStr==="object"?dateStr:new Date(dateStr)
      return {
       year:dateObj.getFullYear(),
       month:dateObj.getMonth()+1,
       date:dateObj.getDate()

      }
    },
    onPageChange(newpage){
      blog.getBlogsByUserId(this.userId, { page:newpage }).then(res=>{
        
        this.blogs=res.data;
        this.total=res.total;
        this.page=res.page;
        this.$router.push({path:`/user/${this.userId}`,query:{page:newpage}})
       })
    }
  },
}