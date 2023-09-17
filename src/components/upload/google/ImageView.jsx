import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { getCookie } from '@/lib/cookieHandler';
import Http from '@/lib/Http';
import { useRouter } from 'next/navigation';

const ImageView = () =>{
  const [authenticated, setAuthenticated] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);
  const router = useRouter();

  const checkAuth = async()=>{
    const googlePhotos = await getCookie("google-photos");
    if (googlePhotos) {
      setAuthenticated(true)
    }
  } 



  const fetchPhotos = async()=>{
    const googlePhotos = await getCookie("google-photos");
    if (googlePhotos) {
      axios.get("https://photoslibrary.googleapis.com/v1/mediaItems", {
      headers: {
            Authorization: `Bearer ${googlePhotos.access_token}`,
        },
      })
      .then((response) => {
          if (response.data) {
              setMediaItems(response.data.mediaItems);
          }
      })
      .catch((error) => {
          console.error("API Error:", error);
      });
    }
  }
  
  useEffect(()=>{
    checkAuth();
    fetchPhotos();
  }, [])

  const handleUpload = async (id) => {

  
  };


  const handleDrive = async formData =>{
      fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              console.error('Failed to upload image:', response.statusText);
            }
          })
          .then((data) => {
            // Handle the response data from the server, if needed
            console.log('Image upload response:', data);
          })
          .catch((error) => {
            console.error('Error uploading image:', error);
          });
  }


    const handleOauth = async()=>{
      Http('get', '/google-photos/oauth')
      .then(res=>{
          if(res.authUrl){
              router.push(res.authUrl);
          }
          console.log(res);
      })
      .catch(err=>console.log(err))
    }

  return(

    <div className="col-span-7">
    {
      authenticated ? (
        <div className="gallery overflow-y-scroll min-h-[400px]">
          {
              authenticated && mediaItems && mediaItems.map((img, index)=>(
                  <Image
                      key={index}
                      height={100}
                      width={100}
                      src={img.baseUrl}
                      alt="google photos"
                      onClick={()=>handleUpload(img.id)}
                  />
              ))
          }  
        </div>
      ):(
        <div className="flex flex-col h-full">
          <span onClick={handleOauth} className="cursor-pointer mx-auto my-auto">
              <h1 className="text-center text-xl">continue with</h1>
              <div className="mx-auto">
                <Image
                  width={50}
                  height={50}
                  src="/icons/upload/google-photo.svg"
                  className="block mx-auto"
                  alt="google photo"
                />
              </div>
            </span>
        </div>
        
      )
    }
  </div>
  )
}
export default ImageView;