"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SyncLoader from "react-spinners/SyncLoader";
import Http from "@/lib/Http";
import override from "@/lib/spinner";

const Dropbox = () =>{
    const [auth, setAuth] = useState();
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();
    const code = searchParams.get("code");

    useEffect(()=>{
       Http('post', `/dropbox/oauth?code=${code}`)
       .then(res=>{
            if(res){
                console.log(res);
                // router.back();
            }
       })
       .catch(err=>{
            console.log(err);
       })
    }, [])

    return(
        <div className="flex-1">
            {
               loading? <SyncLoader cssOverride={override} color="#996D01" />:(
                  content
               )
            }
        </div>
    )
}
export default Dropbox;