import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  // 공통 onChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 간단한 유효성 검사 함수
  const validate = () => {
    const newErrors = {
      nickname: "",
      email: "",
      password: "",
    };

    if (form.nickname.trim().length < 2) {
      newErrors.nickname = "닉네임은 2글자 이상이어야 합니다.";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "이메일 형식이 올바르지 않습니다.";
    }

    if (form.password.length < 6) {
      newErrors.password = "비밀번호는 6글자 이상이어야 합니다.";
    }

    setErrors(newErrors);

    // 에러가 하나라도 있으면 false
    const hasError = Object.values(newErrors).some((msg) => msg);
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    alert("회원가입 완료! 🎉");
  };

  // 버튼 비활성화 조건: 하나라도 비어있으면
  const isEmpty = !form.nickname || !form.email || !form.password;

  return (
    <main style={{ padding: 24 }}>
      <h1>👤 회원가입 폼 + 유효성 검사</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label>
            닉네임:{" "}
            <input
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
            />
          </label>
          {errors.nickname && (
            <p style={{ color: "red" }}>{errors.nickname}</p>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            이메일:{" "}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            비밀번호:{" "}
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <button type="submit" disabled={isEmpty}>
          회원가입
        </button>
        {isEmpty && (
          <p style={{ fontSize: 12, marginTop: 4 }}>
            모든 필드를 채우면 버튼이 활성화됩니다 🙂
          </p>
        )}
      </form>
    </main>
  );
}

export default App;
