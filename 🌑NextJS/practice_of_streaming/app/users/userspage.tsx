// app/users/page.tsx
import { Suspense } from "react";
import UserCard from "./UserCard";
import UserCardSkeleton from "./UserCardSkeleton";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // disable caching for demo purposes
  });
  return res.json();
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-fade-in-down">
        🚀 Team Roster Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <Suspense key={user.id} fallback={<UserCardSkeleton />}>
            <UserCard user={user} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}



































// 'use client';
// // pages/users.tsx
// import { useEffect, useState } from "react";

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
// };

// export default function UsersPage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//         setLoading(false);
//       });
//   }, []);


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6">
//       <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-fade-in-down">
//         🚀 Team Roster Showcase
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
//         {users.map((user, idx) => (
//           <div
//             key={user.id}
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out hover:shadow-indigo-500/20 animate-fade-in-up"
//             style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
//           >
//             <h2 className="text-xl font-semibold text-indigo-300 mb-2">
//               {user.name}
//             </h2>
//             <p className="text-slate-300 mb-1">
//               📧 <a href={`mailto:${user.email}`} className="text-indigo-400 hover:underline">
//                 {user.email}
//               </a>
//             </p>
//             <p className="text-slate-300 mb-1">📞 {user.phone}</p>
//             <p className="text-slate-300">
//               🌐 <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-violet-400">
//                 {user.website}
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
