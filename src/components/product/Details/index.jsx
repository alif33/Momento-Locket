"use client";
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Cookies from 'universal-cookie';
import BreadCrumb from '../../BreadCrumb';
import Image from 'next/image';
import Circle from '@/components/svg/Circle';
import Slide from '../Slide';
import { list } from '@/lib/data';
import BagOption from './BagOption';
import Drop from "@/components/upload/Drop"
import Laptop from '@/components/svg/Laptop';
import Dropbox from '@/components/svg/Dropbox';
import { useDropzone } from 'react-dropzone';
import Http from '@/lib/Http';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ImageView from '@/components/upload/google/ImageView';
import DropBoxChooser from '@/components/upload/dropbox/DropboxChooser';

const Details = ({products, params: { title }}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('local');

    const [mediaItems, setMediaItems] = useState([]);

    const router = useRouter();
    const cookies = new Cookies();

    const googlePhotos = cookies.get("google-photos");

    const onDrop = useCallback((acceptedFiles) => {
        uploadFiles(acceptedFiles);
      }, []);
    
      const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*, audio/*, video/*'
      });
    
    const uploadFiles = async (files) => {
        const formData = new FormData();
        for (const file of files) {
            formData.append('file', file);
        }

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
            console.error('Failed to upload files:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };


    return(
        <div>
            <BreadCrumb
                page={title}
                link={"/#products"}
                linkTxt={"Urns"}
            />
            <div className="w-9/12 mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <Slide/>
                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
                        <div className="flex gap-3">
                            <span className="text-xs font-light my-auto">Metal</span> 
                            <div className="flex gap-1 text-sm font-light">
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">Sliver</button>
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">Yellow Gold</button>
                                <button className="bg-[#74706714] px-5 py-3 rounded-full">White Gold</button>
                            </div>
                        </div>
                        <div className="flex gap-3 py-4">
                            <span className="text-xs font-light my-auto">Colors</span> 
                            <Circle/>
                        </div>
                        <div className="flex gap-3 pb-3">
                            <span className="text-xs font-light my-auto">Metal</span> 
                            <span className="text-[#747067] text-xl font-medium">$ 300</span>
                        </div>
                        <hr/>
                        <BagOption products={products}/>
                        <hr/>
                        <div className="mt-5">
                            <span onClick={()=>setIsOpen(!isOpen)} className="rounded-3xl bg-[#996D01] text-base font-normal text-white py-3 px-4 mx-auto cursor-pointer">
                                <Image
                                    height={30}
                                    width={30}
                                    src="/icons/upload.svg"
                                    className="inline-block"
                                    alt="upload icon"
                                />
                                <span className="py-5 my-auto">UPLOAD YOUR FILE & ORDER NOW</span>
                            </span>                            
                        </div>
                        <Drop 
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            content={
                                <div className="p-5 z-30">
                                    <div className="flex justify-between px-2">
                                        <h1 className="text-[#996D01] trajan-font text-4xl py-2">Upload files</h1>
                                        <span className="my-auto cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                                            <Image
                                                height={20}
                                                width={20}
                                                src="/icons/Close.svg"
                                                alt="close modal"
                                            />
                                        </span>
                                    </div>
                                    <div className="border border-[#BDBDBD] px-3 py-3 mt-3">
                                        <h3 className="text-[#996D01] text-2xl uppercase">My photos</h3>
                                    </div>
                                    <div className="grid grid-cols-12 gap-5 bg-[#F5F5F5] p-7">
                                        {
                                            type==='local' && (
                                                <div className="col-span-7">
                                                <section className="w-full min-h-full cursor-pointer">
                                                    <div {...getRootProps({className: 'dropzone border-dashed border-2 border-[#B6B6B6] h-[300px] flex justify-center'})}>
                                                        <div className="my-auto mx-auto">
                                                            <input {...getInputProps()} />
                                                            <span className="flex justify-center">
                                                                <Image
                                                                    height={30}
                                                                    width={30}
                                                                    src="/img/upload.png"
                                                                    alt="upload icon"
                                                                />
                                                            </span>
                                                            <p className="trajan-font text-2xl text-[#BEBEBE]">or drag a file here</p>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            )
                                        }

                                        {type==='dropbox' && (<DropBoxChooser/>)}
                                        {type==='onedrive' && (<DropBoxChooser/>)}
                                        { type==='googlePhotos' && (<ImageView images={mediaItems}/>)}
                                       
                                        <div className="col-span-5">
                                            <div className="flex flex-col trajan-font gap-3">
                                                <span onClick={()=>setType('local')} className="flex gap-5 bg-[#996D01] px-3 py-2 rounded">
                                                    <Laptop color="#ffffff"/>
                                                    <h1 className="my-auto text-white text-xl font-normal">UPLOAD FROM COMPUTER</h1>
                                                </span>
                                                <span onClick={()=>setType('dropbox')} className="flex gap-3 bg-white px-3 py-2 rounded cursor-pointer">
                                                    <Dropbox color="#996D01"/>
                                                    <h1 className="my-auto text-xl font-normal">DROPBOX</h1>
                                                </span>
                                                <span onClick={()=>setType('onedrive')} className="flex gap-3 bg-white px-3 py-2 rounded">
                                                    <Dropbox color="#996D01"/>
                                                    <h1 className="my-auto text-xl font-normal">ONE DRIVE</h1>
                                                </span>
                                                <span onClick={()=>setType("googlePhotos")} className="flex gap-3 bg-white px-3 py-2 rounded cursor-pointer">
                                                    <Dropbox color="#996D01"/>
                                                    <h1 className="my-auto text-xl font-normal">GOOGLE PHOTOS</h1>
                                                </span>
                                                <span className="flex gap-3 bg-white px-3 py-2 rounded">
                                                    <Dropbox color="#996D01"/>
                                                    <h1 className="my-auto text-xl font-normal">FROM RECENT FILES</h1>
                                                </span>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            }
                        />
                        <div className="py-5">
                            <span className="text-[#996D01] text-2xl font-bold mr-3 underline cursor-pointer"><Link href="/shopping-cart">Not now.</Link></span>
                            <span className="text-[#996D01] text-base font-medium my-auto">I you can upload photos when reciving the urn</span>
                        </div>
                        <hr/>
                        <ul>
                            {
                                list.map((item, index)=>(
                                    <li key={index} className="flex gap-2 py-3">
                                        <span>
                                            <Image
                                                height={24}
                                                width={24}
                                                src={item.image}
                                                alt="icon"
                                            />
                                        </span>
                                        <span>
                                            <h1 className="text-[#996D01] text-base font-medium">{ item.title }</h1>
                                            <h5 className="text-[#747067] text-sm font-light">{ item.description }</h5>
                                        </span>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;
