"use client";
export default function UserSelect({ user, onSelect }) {
    return (
        <select
            className="border p-2 rounded mb-4"
            onChange={(e) => {
                const users = user.find((u) => u.id === Number(e.target.value));
                onSelect(users);
            }}
            
        >
            <option value="">Select a user</option>
            {user && user.map((u) => (
                <option key={u.id} value={u.id}>
                    {u.name}
                </option>
            ))}
        </select>
    );
}
