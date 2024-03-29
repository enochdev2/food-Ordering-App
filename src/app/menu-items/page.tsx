'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import Loader from "@/components/Lorder";
import {useProfile} from "@/components/UseProfile";
import { MenuItem } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function MenuItemsPage() {

  const [menuItems, setMenuItems] = useState([]);
  const {loading, data} = useProfile() as any;

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      });
    })
  }, []);

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center">
    <Loader/>
  </div>
  }

  if (data.role != "admin") {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs 
      isAdmin={true} 
      />
      <div className="mt-8">
        <Link
          className="button flex"
          href={'/menu-items/new'}>
          <span>Crete new menu item</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-4">
          {menuItems?.length > 0 && menuItems.map((item:MenuItem) => (
            <Link
              key={item._id}
              href={'/menu-items/edit/'+item._id}
              className="bg-gray-200 rounded-lg p-2"
            >
              <div className="relative rounded-lg w-full h-[200px]">
                <Image
                  className="rounded-md"
                  src={item.image} alt={''} fill />
              </div>
              <div className="text-center mt-3">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}