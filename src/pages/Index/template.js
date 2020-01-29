import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog


export default {
  data () {
    return {
    total:null,
    page:null,
    blogs:[]
    }
  },
  created() {
    this.page=parseInt(this.$route.query.page) || 1;
    // this.getBlogs(this.page) 
    blog.getIndexBlogs({page:this.page}).then(res=>{
      console.log(res)
      this.total=res.total;
      this.page=res.page;
      this.blogs=res.data;
     
    });
  },

  methods: {
    getBlogs(newpage){
      blog.getIndexBlogs({page:newpage}).then(res=>{
        console.log(res)
        this.total=res.total;
        this.page=res.page;
        this.blogs=res.data;
        this.$router.push({path:'/',query:{page:newpage}})
      })

    },
    onPageChange(newpage){
     this.getBlogs(newpage)

    }
 
  }
}