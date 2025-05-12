// Chat.tsx
import { useState, useEffect, useRef, FormEvent } from "react";
import { FiSend, FiX, FiBook } from "react-icons/fi";
import {
  db,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "./firebasechat";
import "./Chat.css";

interface Message {
  text: string;
  user: string;
  timestamp?: any;
  topic: string;
}

interface ChatProps {
  user: string;
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("ვეფხისტყაოსანი");
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Subscribe to messages for the selected topic
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("topic", "==", selectedTopic),
      orderBy("timestamp")
    );
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => d.data() as Message));
    });
    return () => unsub();
  }, [selectedTopic]);

  // Auto-scroll to newest
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        user: user || "Anonymous",
        timestamp: serverTimestamp(),
        topic: selectedTopic,
      });
      setNewMessage("");
      setError(null);
    } catch {
      setError("Couldn't send message. Try again.");
    }
  };

  const topics = ["ვეფხისტყაოსანი", "დავითიანი", "დიდოსტატის მარჯვენა"];

  const getModalMessage = () => {
    switch (selectedTopic) {
      case "ვეფხისტყაოსანი":
        return "ისაუბრეთ მხოლოდ ვეფხისტყაოსანზე";
      case "დავითიანი":
        return "ისაუბრეთ მხოლოდ დავითიანზე";
      case "დიდოსტატის მარჯვენა":
        return "ისაუბრეთ მხოლოდ დიდოსტატის მარჯვენაზე";
      default:
        return "იყავით ადეკვატური.";
    }
  };

  return (
    <div className="chat-wrapper">
      <aside className="sidebar">
        <ul>
          {topics.map((t) => (
            <li
              key={t}
              onClick={() => {
                setSelectedTopic(t);
                setShowModal(true);
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </aside>
      <section className="chat-container">
        <header className="chat-header">{selectedTopic}</header>
        <div className="message-container">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.user === user ? "sent" : "received"}`}
            >
              <div className="message-avatar">
                {msg.user.charAt(0).toUpperCase()}
              </div>
              <div className="message-content">
                <div className="message-header">
                  <span className="message-user">{msg.user}</span>
                  <span className="message-time">
                    {msg.timestamp
                      ?.toDate()
                      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <p className="message-text">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        {error && <div className="error-text">{error}</div>}
        <form onSubmit={sendMessage} className="message-form">
          <input
            className="message-input"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="დაიწყე საუბარი..."
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(e)}
          />
          <button type="submit" className="send-button">
            <FiSend />
          </button>
        </form>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-icon">
                <FiBook />
              </div>
              <h3>{selectedTopic}</h3>
              <div className="modal-body">
                <p>{getModalMessage()}</p>
              </div>
              <button
                className="close-modal"
                onClick={() => setShowModal(false)}
              >
                <FiX /> დახურვა
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Chat;
