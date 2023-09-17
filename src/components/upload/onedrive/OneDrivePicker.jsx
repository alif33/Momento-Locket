"use client";
import Http from "@/lib/Http";
import { getCookie } from "@/lib/cookieHandler";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "ex7pjmu42vhb2qv";

const OneDrivePicker =() =>{
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

  function handleSuccess(files) {
      console.log(files);
    setUrl(files[0].thumbnailLink);
    console.log(url);
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
                <button>Upload or Choose Files</button>
            </DropboxChooser>
          ):(
            <button onClick={handleOauth}>Try to authenticated</button>
          )
        }
        
      </div>
  )
}
export default OneDrivePicker;