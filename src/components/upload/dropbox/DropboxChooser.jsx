"use client";
import Http from "@/lib/Http";
import { getCookie } from "@/lib/cookieHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "ex7pjmu42vhb2qv";

const DropBoxChooser =() =>{
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const router = useRouter();

  const checkAuth = async()=>{
    const dropbox = await getCookie("dropbox");
    if (dropbox) {
      setAuthenticated(true)
    }
  } 

  useEffect(()=>{
    checkAuth();
  }, [])

  async function handleSuccess(files) {
    console.log(files);
    // if (files){
    //   const dropbox = await getCookie("dropbox");
    //   Http('post', `/dropbox?access-token=${dropbox.access_token}`, {files})
    //   .then(res=>{
    //     console.log(res);
    //   })
    //   .catch(err=>console.log(err))
    // }



    //   console.log(files);
    // setUrl(files[0].thumbnailLink);
    // console.log(url);
  }

  const handleOauth =()=>{
    Http('get', '/dropbox/oauth')
    .then(res=>{
      if(res){
        router.push(res);
      }
    })
    .catch(err=>console.log(err))
  }

  return(
      <div className="col-span-7">
        {
          authenticated ? (
            <DropboxChooser
              appKey={APP_KEY}
              success={handleSuccess}
              cancel={() => console.log("closed")}
              multiselect={true}
            >
              <div className="flex flex-col h-full">
                <span className="cursor-pointer mx-auto my-auto pt-20">
                  <Image
                      height={30}
                      width={30}
                      src="/icons/upload/upload.png"
                      className="inline-block mr-3"
                      alt="upload icon"
                  />
                  <button>Upload or Choose Files</button>
                </span>
              </div>
                
            </DropboxChooser>
          ):(
            <div className="flex flex-col h-full">
              <span onClick={handleOauth} className="cursor-pointer mx-auto my-auto">
                <h1 className="text-center text-xl">continue with</h1>
                <div className="mx-auto">
                  <Image
                    width={50}
                    height={50}
                    src="/icons/upload/dropbox.svg"
                    className="block mx-auto"
                    alt="dropbox"
                  />
                </div>
              </span>
            </div>
            
          )
        }
      </div>
  )
}
export default DropBoxChooser;