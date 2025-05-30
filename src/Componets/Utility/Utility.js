import toast from 'react-hot-toast';
export  const getBlogs=()=>{
    let blogs=[]
    const findBlogs=localStorage.getItem("blogs")
    if(findBlogs){
        blogs=JSON.parse(findBlogs)
    }
    return blogs

}


export const saveBlogs=(blog)=>{
    let findBlogs = getBlogs()
    console.log("Raj",typeof findBlogs)
    let isExists=findBlogs.find(item =>item.id === blog.id)
    if(isExists){
        return toast.error("Already BookMarked!")
    }
    findBlogs.push(blog)
    localStorage.setItem("blogs",JSON.stringify(findBlogs))
    toast.success("Blog Bookmarked Successfully")
}
export const deleteBlogs=(id)=>{
    let  findBlogs=getBlogs()
    let deleteBlogs=findBlogs.filter(b=>b.id != id)
    localStorage.setItem("blogs",JSON.stringify(deleteBlogs))
    toast.success("Blog remove from bookmarked")

}