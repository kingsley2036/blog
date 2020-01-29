import marked from 'marked';
import blog from '@/api/blog.js'
export default {
  data () {
    return {
      user:{},
      content:'',
      title:'',
      createdAt:'',
      blogId:null
    }
  },
  computed: {
    markdown(){
      return marked(this.content);
    }
  }, 
  created() {
    this.blogId=this.$route.params.blogId;
    blog.getDetail({blogId:this.blogId}).then(res=>{
        this.user=res.data.user;
        this.content=res.data.content;
        this.title=res.data.title;
        this.createdAt=res.data.createdAt;
    })
  },
   
  
}