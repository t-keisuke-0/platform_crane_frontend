import React, { useState } from "react";
import InputBox from "./components/InputBox";
import ApiButton from "./components/ApiButton";
import styles from "./styles/App.module.css";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("/api/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.text();
      setResponse(data);
    } catch (e) {
      setResponse("API呼び出しに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>テストFE</div>
      <div className={styles.row}>
        <InputBox value={input} onChange={setInput} />
        <ApiButton onClick={handleApiCall} disabled={loading || !input}>
          {loading ? "送信中..." : "送信"}
        </ApiButton>
      </div>
      {response && <div className={styles.response}>{response}</div>}
    </div>
  );
};

export default App;
