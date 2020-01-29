import blog from '@/api/blog.js'
import { Message } from 'element-ui'
export default {
  data () {
    return {
      title:'',
      content:'',
      description:'',
      atIndex:false,
      blogId:'',
    }
  },
  created() {
    this.blogId=this.$route.params.blogId;
    blog.getDetail({ blogId:this.blogId}).then(res=>{
      this.title=res.data.title;
      this.content=res.data.content;
      this.description=res.data.description;

    }).catch(err=>{
      console.log(err);
    });
  },
  methods:{
    updateBlog(){
      blog.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
      .then(res=>{
        Message.success(res.msg);
        this.$router.push({path:`/my`});
      });
    }
  },
}