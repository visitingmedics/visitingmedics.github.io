"use client";

import { useState, type FormEvent } from "react";

const areas = [
  "Jogeshwari",
  "Andheri",
  "Lokhandwala",
  "Juhu",
  "Goregaon",
  "Malad",
  "Kandivali",
  "Vile Parle",
  "Santa Cruz",
  "Bandra",
  "Churchgate",
  "Other area",
];

const services = [
  "Doctor Home Visit",
  "General Physician Consultation",
  "Wound Dressing",
  "Foley Catheterization",
  "Ryle's Tube Care / Insertion",
  "IV Cannulation / Medication",
  "Elderly Care",
  "Diabetic Care",
  "Palliative Care",
  "Not sure",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const area = String(data.get("area") || "");
    const service = String(data.get("service") || "");
    const details = String(data.get("details") || "-");

    const text =
      "Home visit request\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Area: " + area + "\n" +
      "Service: " + service + "\n" +
      "Details: " + details;

    const whatsappUrl =
      "https://wa.me/918080882201?text=" + encodeURIComponent(text);

    window.open(whatsappUrl, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        Your name
        <input
          name="name"
          required
          autoComplete="name"
        />
      </label>

      <label>
        Phone number
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
        />
      </label>

      <label>
        Area in Mumbai
        <select name="area" required defaultValue="">
          <option value="" disabled>
            Select area
          </option>

          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>

      <label>
        Service needed
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select service
          </option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label>
        Details (optional)
        <textarea
          name="details"
          rows={3}
        />
      </label>

      <button
        className="btn btn-primary"
        type="submit"
      >
        Request a Home Visit
      </button>

      <p className="meta">By sending this you agree that we may contact you about your enquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>

      {sent && (
        <p role="status">
          Your request opened in WhatsApp. Please press send to share it with us.
        </p>
      )}
    </form>
  );
}
