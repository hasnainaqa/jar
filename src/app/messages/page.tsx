"use client";

import { useState } from "react";
import MessagesChats from "@/components/modals/MessagesChats";
import { Link, Microphone } from "@/components/assets/icons";
import { Menu } from "lucide-react"; // simple icon for menu

interface Message {
  id: number;
  sender: "me" | "them";
  type: "text" | "offer";
  content: string;
  time: string;
  offerTitle?: string;
  offerDescription?: string;
  img?: string;
}

export default function ChatUI() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 2,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 3,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 4,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 5,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 6,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 7,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 8,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 9,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 10,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 12,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 13,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 11,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 22,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 23,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 21,
      sender: "them",
      type: "text",
      content:
        "pulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con egetpulvinar eleifend. In eu dolor tellus. Nam metus orci, eleifend at con eget",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 32,
      sender: "me",
      type: "text",
      content: "pulvinar eleifend. In eu dolor tellus. Nam metus",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 33,
      sender: "them",
      type: "offer",
      content: "Hiring Offer",
      offerTitle: "Plumbing Contract",
      offerDescription:
        "consectetur adipiscing elit. Proin molestie consectetur adipiscing elit. Proinmlem olestie consectetur adipiscing elit. Proin molestie",
      time: "08:30 AM",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ]);

  return (
    <div className="max-w-[1300px] mx-auto shadow-dark rounded-xl flex flex-col lg:flex-row mt-8 h-[85vh] pb-12 relative">
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[300px] bg-white border-r border-[#F3F3F3] z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-[25%] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <MessagesChats />
      </div>

      <div className="w-full lg:w-[75%] flex flex-col bg-(--white)">
        <div className="flex items-center justify-between gap-3 p-[16px] border-b border-[#E6E6E6]">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-1 rounded hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <img
              src="https://randomuser.me/api/portraits/women/40.jpg"
              alt="User"
              width={56}
              height={56}
              className="rounded-full"
            />
            <span className="ml-1 h-3 w-3 bg-green-500 rounded-full"></span>
            <div>
              <p className="font-medium typo-heading3">Savannah Nguyen</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[calc(85vh-140px)] sm:max-h-[calc(85vh-120px)]">
          {messages.map((msg) =>
            msg.type === "text" ? (
              <div
                key={msg.id}
                className={`flex items-start gap-2 ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "me" && (
                  <img
                    src={msg.img}
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full shrink-0"
                  />
                )}

                <div
                  className={`max-w-[85%] sm:max-w-2xl p-3 rounded-xl typo-body font-normal break-words ${
                    msg.sender === "me"
                      ? "bg-(--primary) text-(--white)"
                      : "bg-(--light-grey) text-[#303030]"
                  }`}
                >
                  {msg.content}
                  <div className="typo-small mt-2 text-(--grey-text)">
                    {msg.time}
                  </div>
                </div>

                {msg.sender === "me" && (
                  <img
                    src={msg.img}
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full shrink-0"
                  />
                )}
              </div>
            ) : (
              <div
                key={msg.id}
                className="flex justify-start items-start gap-2 w-full"
              >
                <img
                  src={msg.img}
                  alt="User"
                  width={24}
                  height={24}
                  className="rounded-full shrink-0"
                />
                <div className="bg-gray-100 p-3 rounded-xl max-w-[85%] sm:max-w-2xl relative break-words">
                  <p className="text-(--primary) font-normal typo-heading3">
                    {msg.content}
                  </p>
                  <div className="absolute right-3 top-3 flex gap-2">
                    <button className="bg-(--danger) text-(--white) px-3 py-1 rounded-lg cursor-pointer">
                      ✕
                    </button>
                    <button className="bg-[#00A400] text-(--white) px-3 py-1 rounded-lg cursor-pointer">
                      Accept
                    </button>
                  </div>
                  <p className="font-semibold mt-4 typo-label text-(--primary-black)">
                    {msg.offerTitle}
                  </p>
                  <p className="font-normal typo-body text-(--primary-black)">
                    {msg.offerDescription}
                  </p>
                  <div className="flex justify-between items-center mt-[10px]">
                    <div className="typo-small text-(--grey-text)">
                      {msg.time}
                    </div>
                    <button className="text-(--primary) typo-small font-semibold cursor-pointer">
                      View Proposal
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Input area */}
        <div className="p-3 border-t border-[#F3F3F3] flex items-center gap-2">
          <div className="flex items-center p-2 rounded-full border border-[#F3F3F3] gap-2 flex-1">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-full border-none outline-none text-sm"
            />
            <button className="cursor-pointer">
              <Link />
            </button>
          </div>
          <button className="bg-(--primary) p-2 rounded-full cursor-pointer">
            <Microphone />
          </button>
        </div>
      </div>
    </div>
  );
}
