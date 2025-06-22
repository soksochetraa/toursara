import { useState } from "react";
import { Star, Pencil, Trash2, Save, X } from "lucide-react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Sochetra S.",
      comment: "Fantastic service, will use again!",
      rating: 5,
    },
    {
      id: 2,
      user: "Bopha Y.",
      comment: "Hotel was clean and staff were friendly.",
      rating: 4,
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ comment: "", rating: 0 });

  const handleEditClick = (review) => {
    setEditingId(review.id);
    setEditForm({ comment: review.comment, rating: review.rating });
  };

  const handleSave = () => {
    setReviews((prev) =>
      prev.map((r) => (r.id === editingId ? { ...r, ...editForm } : r))
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Reviews You've Written
      </h2>

      {reviews.map((r) => (
        <div key={r.id} className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-700">{r.user}</h4>

            {editingId === r.id ? (
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < editForm.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    className="cursor-pointer"
                    onClick={() =>
                      setEditForm((prev) => ({ ...prev, rating: i + 1 }))
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            )}
          </div>

          {editingId === r.id ? (
            <textarea
              className="w-full border p-2 rounded text-sm"
              value={editForm.comment}
              onChange={(e) =>
                setEditForm((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
          ) : (
            <p className="text-sm text-gray-600 italic">"{r.comment}"</p>
          )}

          <div className="flex justify-end gap-2 mt-3">
            {editingId === r.id ? (
              <>
                <button
                  onClick={handleSave}
                  className="text-green-600 flex items-center gap-1"
                >
                  <Save size={16} /> Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-500 flex items-center gap-1"
                >
                  <X size={16} /> Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEditClick(r)}
                  className="text-blue-600 flex items-center gap-1"
                >
                  <Pencil size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="text-red-600 flex items-center gap-1"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
