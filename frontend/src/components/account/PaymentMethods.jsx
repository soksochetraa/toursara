import { useState } from "react";
import { Trash2 } from "lucide-react";

function validateLuhn(cardNumber) {
  const num = cardNumber.replace(/\s/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

function detectCardType(number) {
  const num = number.replace(/\D/g, "");
  if (/^4/.test(num)) return "Visa";
  if (/^5[1-5]/.test(num)) return "MasterCard";
  if (/^3[47]/.test(num)) return "American Express";
  return "Card";
}

export default function PaymentMethods() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    number: "",
    holder: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "number") {
      val = val.replace(/\D/g, "").slice(0, 16);
      val = val.replace(/(\d{4})/g, "$1 ").trim();
    }

    if (name === "expiry") {
      val = val.replace(/\D/g, "").slice(0, 4);
      if (val.length > 2) val = val.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    if (name === "cvv") val = val.replace(/\D/g, "").slice(0, 4);

    setForm((prev) => ({ ...prev, [name]: val }));
  };

  const validate = () => {
    const errs = {};
    const num = form.number.replace(/\s/g, "");

    if (!validateLuhn(num)) errs.number = "Invalid card number";
    if (!form.holder) errs.holder = "Cardholder name is required";

    const [mm, yy] = form.expiry.split("/");
    if (!mm || !yy || mm < 1 || mm > 12 || yy.length !== 2) {
      errs.expiry = "Invalid expiry date";
    } else {
      const current = new Date();
      const inputDate = new Date(`20${yy}`, mm);
      if (inputDate < current) errs.expiry = "Card expired";
    }

    if (form.cvv.length < 3) errs.cvv = "CVV must be 3-4 digits";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAddCard = () => {
    if (!validate()) return;

    const cardType = detectCardType(form.number);
    const masked = `**** **** **** ${form.number.replace(/\s/g, "").slice(-4)}`;

    setCards([
      ...cards,
      {
        id: Date.now(),
        name: cardType,
        number: masked,
        holder: form.holder,
        expiry: form.expiry,
      },
    ]);

    setForm({ number: "", holder: "", expiry: "", cvv: "" });
    setErrors({});
  };

  const handleRemove = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Saved Payment Methods
      </h2>

      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{card.name}</h4>
            <p className="text-sm text-gray-500">{card.number}</p>
            <p className="text-sm text-gray-500">{card.holder}</p>
            <p className="text-sm text-gray-500">Expires: {card.expiry}</p>
          </div>
          <button
            onClick={() => handleRemove(card.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}

      <div className="bg-gray-50 p-5 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Add New Card</h3>

        <div className="space-y-2">
          <input
            name="number"
            value={form.number}
            onChange={handleInputChange}
            placeholder="Card Number"
            className={`w-full border p-2 rounded-md ${
              errors.number ? "border-red-500" : ""
            }`}
          />
          {errors.number && (
            <p className="text-red-500 text-sm">{errors.number}</p>
          )}
        </div>

        <div className="space-y-2">
          <input
            name="holder"
            value={form.holder}
            onChange={handleInputChange}
            placeholder="Cardholder Name"
            className={`w-full border p-2 rounded-md ${
              errors.holder ? "border-red-500" : ""
            }`}
          />
          {errors.holder && (
            <p className="text-red-500 text-sm">{errors.holder}</p>
          )}
        </div>

        <div className="flex gap-3">
          <div className="flex-1 space-y-2">
            <input
              name="expiry"
              value={form.expiry}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className={`w-full border p-2 rounded-md ${
                errors.expiry ? "border-red-500" : ""
              }`}
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm">{errors.expiry}</p>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <input
              name="cvv"
              type="password"
              value={form.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              className={`w-full border p-2 rounded-md ${
                errors.cvv ? "border-red-500" : ""
              }`}
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>

        <button
          onClick={handleAddCard}
          className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700"
        >
          Add Card
        </button>
      </div>
    </div>
  );
}
