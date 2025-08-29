import { createContext, useState } from "react";

export const ContextStore = createContext([]);

export function Provider({ children }) {
  const [imgSource, setImgSource] = useState(null);
  const [imgTitle, setImgTitle] = useState('');
  const [posts, setPosts] = useState(
  
 [
  {
    time:'22h',
    title:'❤',
    postImg:'/images/salman1.jpg',
    reactions:'Mahnoor and 50 others',
    comments:18
  },
  {
    time:'January 22, 2025',
    postImg:'/images/salman2.jpg',
    reactions:'Sultan Saleem and 115 others',
    comments:46
  },
  {
    time:'January 22, 2025',
    title:'👀',
    postImg:'/images/salman3.jpg',
    reactions:'Muneer Ahmad and 275 others',
    comments:53
  },
  {
    time:'May 1, 2024',
    title:` وقت ملے تو ہماری دوستی کی کتاب کھول کر دیکھ لینا✨ہماری دوستی تمہیں ہر دوستی سے لاجواب ملے گی✌️❤️` ,
    postImg:'/images/salman4.jpg',
    reactions:'IsrarAhmed and 122 others',
    comments:53
  },
  
]
  );
  
function addPostFun(navigate) {
  navigate('/profile')
  let obj = {title:imgTitle,time:'Just now',postImg:imgSource}
   setPosts( [obj,...posts])
  
}

  function uploadPost(e,navigate) {
    const file = e.target.files[0];
    if (file) {
      let imgURL = URL.createObjectURL(file);
      setImgSource(imgURL);
      navigate('/uploadbox')
    }
  }

  function setTitle (title,navigate) {
    setImgTitle(title)
  }
  return (
    <ContextStore.Provider value={{ imgSource,imgTitle, posts,addPostFun, setImgSource, uploadPost,setTitle}}>
      {children}
    </ContextStore.Provider>
  );
}
