'use client';
import EditableImage from "@/components/layout/EditableImage";
import InfoBox from "@/components/layout/InfoBox";
import SuccessBox from "@/components/layout/SuccessBox";
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import {FormEvent, useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const {status} = session;

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setUser(data);
          if(data.role === "admin"){
            setIsAdmin(true);
          }
          setProfileFetched(true);
        })
      });
    }
  }, [session, status]);
console.log(isAdmin);

  async function handleProfileInfoUpdate(ev:FormEvent<HTMLFormElement>, data:any) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve:any, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (response.ok)
        resolve()
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile saved!',
      error: 'Error',
    });

  }

  if (status === 'loading' || !profileFetched) {
    return 'Loading...';
  }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className="mt-8">
      <UserTabs 
      isAdmin={isAdmin}
       />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
}