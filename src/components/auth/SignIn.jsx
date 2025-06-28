import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, set as dbSet } from "firebase/database";
import { auth, rtdb } from "../../firebase";
import { setUser } from "../../Redux/createUser";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const clearFields = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;
      

      await dbSet(ref(rtdb, `users/${uid}`), { email });

      dispatch(setUser({ 
        uid, 
        email: userCred.user.email 
      }));
      clearFields();
    } catch (err) {
      setError(handleFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      dispatch(setUser({
        uid: userCred.user.uid,
        email: userCred.user.email,
        name: name
      }));
      clearFields();
    } catch (err) {
      setError(handleFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleFirebaseError = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "Пользователь не найден.";
      case "auth/wrong-password":
        return "Неверный пароль.";
      case "auth/email-already-in-use":
        return "Такой email уже используется.";
      case "auth/invalid-email":
        return "Неверный формат email.";
      case "auth/weak-password":
        return "Слишком слабый пароль (минимум 6 символов).";
      default:
        return "Произошла ошибка. Попробуйте ещё раз.";
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {mode === "login" ? "Вход" : "Регистрация"}
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm mb-4">
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

        <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={mode === "register" ? handleRegister : handleLogin}
          className={`w-full bg-blue-600 text-white py-2 rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Загрузка..." : mode === "register" ? "Зарегистрироваться" : "Войти"}
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
            }}
          >
            {mode === "login" ? "Зарегистрироваться" : "Войти"}
          </button>
        </p>
      </div>
    </div>
  );
};