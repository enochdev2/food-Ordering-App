'use client';
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import Loader from "@/components/Lorder";
import {useProfile} from "@/components/UseProfile";
import { User } from "@/interface";
import {useParams} from "next/navigation";
import {FormEvent, useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function EditUserPage() {
  const {loading, data} = useProfile() as any;
  const [user, setUser] = useState<User | null>(null);
  const {id} = useParams();

  useEffect(() => {
    fetch('/api/profile?_id='+id).then(res => {
      res.json().then(user => {
        setUser(user);
      });
    })
  }, [id]);

  async function handleSaveButtonClick(ev:FormEvent, data:User) {
    ev.preventDefault();
    const promise = new Promise(async (resolve:any, reject) => {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data,_id:id}),
      });
      if (res.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(promise, {
      loading: 'Saving user...',
      success: 'User saved',
      error: 'An error has occurred while saving the user',
    });
  }

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center">
      <Loader/>
      </div>
  }

  const admin = data.role == "admin" ? true : false


  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs
       isAdmin={admin} 
       />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}