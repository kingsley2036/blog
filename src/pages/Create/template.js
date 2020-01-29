import blog from '@/api/blog.js'
import { Message } from 'element-ui'
export default {
  data () {
    return {
      title:'',
      content:'',
      description:'',
      atIndex:false
    }
  },
  methods: {
    createBlog(){
      blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
      .then(res=>{
        Message.success(res.msg)
        this.$router.push({path:`/detail/${res.data.id}`})
      })
    }
  },
}