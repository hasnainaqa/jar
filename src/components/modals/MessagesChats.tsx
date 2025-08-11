"use client";
import { useState } from "react";

const MessagesChats = () => {
  const [activeTab, setActiveTab] = useState("Unread");
  interface Message {
    id: number;
    content: string;
    time: string;
    name: string;
    img?: string;
  }
  
  const [chats] = useState<Message[]>([
    {
      id: 1,
      name: "Savannah Nguyen",
      time: "19:28",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
      content: "pulvinar eleifend. In eu dolor",
    },
    {
      id: 2,
      name: "Savannah Nguyen",
      time: "19:20",
      img: "https://randomuser.me/api/portraits/women/42.jpg",
      content: "Lorem ipsum dolor sit amet...",
    },
  ]);
  const [activeChat, setActiveChat] = useState(chats[0]);
  return (
    <div>
      <div className="flex justify-center p-[6px] gap-2  rounded-lg border border-[#E5E5E5] m-6">
        {["All", "Unread", "Archived"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-[6px] typo-body font-medium transition-colors duration-200 ${
              tab === activeTab
                ? "bg-(--orange) text-(--white)"
                : "text-[#333333] hover:bg-gray-100"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      <div className=" m-6">
        <input
          type="text"
          placeholder="Search keywords"
          className="w-full p-2 rounded-[10px] border border-[#E5E5E5] text-sm"
        />
      </div>

      {chats &&
        chats.map((chat) => (
          <div 
          key={chat.id}
          onClick={() => setActiveChat(chat)}
          className={`px-6 pt-[14px]  cursor-pointer gap-2 flex justify-between  mt-3  ${
            chat === activeChat
              ? "bg-[#F3F3F3]"
              : "bg-[#fcfafa] hover:bg-[#F3F3F3]"
          }`}>
            <div className=" gap-2 flex justify-between">
              <img
                src={chat.img}
                alt="User"
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium typo-label text-[#15120F] ">
                    {chat.name}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-normal text-[#808080]">
                    {chat.content}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">{chat.time}</p>
          </div>
        ))}
    </div>
  );
};

export default MessagesChats;
