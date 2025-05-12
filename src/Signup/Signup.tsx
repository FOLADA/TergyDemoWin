import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { PostObj } from "../Authorization/POST";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    username: "",
    role: "აბიტურიენტი",
    desc: "",
    rating: 0,
    isChecked: false
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    checkbox: ""
  });
  const maxDesc = 200;
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      checkbox: ""
    };
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = "აუცილებელია სახელი";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "აუცილებელია ელ.ფოსტა";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "ელ.ფოსტა არასწორია";
      isValid = false;
    }
    if (!formData.phoneNumber || isNaN(Number(formData.phoneNumber))) {
      newErrors.phoneNumber = "აუცილებელია ტელეფონის ნომერი";
      isValid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო";
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "პაროლები არ ემთხვევა";
      isValid = false;
    }
    if (formData.role === "რეპეტიტორი" && !formData.isChecked) {
      newErrors.checkbox = "აუცილებელია თანხმობა";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const userData = {
      ...formData,
      userid: crypto.randomUUID() + (formData.role === "რეპეტიტორი" ? "tutor" : "")
    };

    try {
      await PostObj(userData);
      navigate("/შესვლა");
    } catch (error) {
      alert("რეგისტრაციის შეცდომა!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">შექმენი ანგარიში</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">სახელი</label>
          <input
            className="form-input"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="სახელის შეყვანა"
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">ელ.ფოსტა</label>
          <input
            className="form-input"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="sabafola@gmail.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">ტელეფონის ნომერი</label>
          <input
            className="form-input"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            placeholder="551002580"
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">პაროლი</label>
          <input
            className="form-input"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="პაროლის შეყვანა"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">გაიმეორე პაროლი</label>
          <input
            className="form-input"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="პაროლის დადასტურება"
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="select-wrapper">
          <label className="form-label">აირჩიე როლი</label>
          <select
            className="form-select"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="აბიტურიენტი">აბიტურიენტი</option>
            <option value="რეპეტიტორი">რეპეტიტორი</option>
          </select>
        </div>

        {formData.role === "რეპეტიტორი" && (
          <div className="tutor-fields">
            <div className="form-group">
              <label className="form-label">
                თქვენს შესახებ
                <span className="char-count">{formData.desc.length}/{maxDesc}</span>
              </label>
              <textarea
                className="form-textarea"
                value={formData.desc}
                onChange={(e) => 
                  e.target.value.length <= maxDesc && 
                  handleChange("desc", e.target.value)
                }
                placeholder="მოკლე აღწერა"
              />
            </div>
            
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.isChecked}
                  onChange={(e) => handleChange("isChecked", e.target.checked)}
                  className="styled-checkbox"
                />
                <span className="checkmark"></span>
                <span className="consent-text">
                  ვეთანხმები ვებსაიტზე ინფორმაციის გამოჩენას
                </span>
              </label>
              {errors.checkbox && <span className="error-message">{errors.checkbox}</span>}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="signup-button"
          disabled={loading}
        >
          {loading ? "დამუშავება..." : "რეგისტრაცია"}
        </button>
      </form>
    </div>
  );
};

export default Signup;