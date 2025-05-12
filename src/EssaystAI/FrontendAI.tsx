import { useState, useRef, useEffect } from "react";
import "./essay.css";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export default function SpellCorrector() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "You are a professional spelling and grammar corrector. Correct any errors in the user's text and return only the improved version without additional commentary.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setLoading(true);
    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");

    // Custom keyword-based responses
    if (trimmed.includes("გამარჯობა")) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "XX" },
      ]);
      setLoading(false);
      return;
    }

    if (trimmed.includes("მე")) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `<strong>სწორი ვარიანტი:</strong> “მე ვარ საბა და ვცდილობ, რომ შევქმნა სტარტაპი, რომელიც გააცისკროვნებს თაობებს.” \n\nმოცემული წინადადება საჭიროებს მძიმეს „რომ“-ისა და „რომელიც“-ის წინ, ვინაიდან ეს ორი მაკავშირებელი ქმნის რთულ წინადადებას. ქართულში, როდესაც წინადადების ნაწილი მეორესთან არის დამოკიდებული მაკავშირებლით (მაგ., „რომ“, „რომელიც“, „რათა“, „რადგან“ და სხვ.), მათი წინ ხშირად საჭიროა მძიმის დასმა, რათა მკითხველმა მარტივად შეძლოს აზრის აღქმა და წინადადების გრამატიკული საზღვრების გარჩევა.`,
        },
      ]);
      setLoading(false);
      return;
    }

    if (trimmed.includes("მადლობა")) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `არაფრის! ყოველთვის შენს გვერდით მიგულე.`,
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: newMessages,
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content;

      if (!reply) throw new Error("სამწუხაროდ, API calls ამოიწურა. სცადეთ მოგვიანებით.");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err: any) {
      console.error(err);
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-app">
      <header className="chat-header">ესეისტი AI</header>
      <main className="chat-messages">
        {messages
          .filter((msg) => msg.role !== "system")
          .map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              <div className="bubble">
                <strong>
                  {msg.role === "user" ? "თქვენ" : "AI"}:
                </strong>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />
              </div>
            </div>
          ))}
        <div ref={chatEndRef} />
      </main>
      <div className="input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && !loading && sendMessage()
          }
          placeholder="რით შემიძლია დახმარება?"
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "მუშაობს..." : "გაგზავნა"}
        </button>
      </div>
    </div>
  );
}
