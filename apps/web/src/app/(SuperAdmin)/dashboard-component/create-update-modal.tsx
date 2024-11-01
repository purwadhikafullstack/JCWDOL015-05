// import { useEffect, useState } from 'react';
// import Button from '../components/Button';
// import Modal from '../components/Modal';

// type Post = {
//   id: number;
//   title: string;
//   quantity: number;
// };

// export default function Posts() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [postToEdit, setPostToEdit] = useState<number | null>(null);
//   const [title, setTitle] = useState('');
//   const [quantity, setQuantity] = useState(0);

//   // Fetch posts from the API initially
//   const fetchPosts = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/posts');
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   // Open modal to create or edit a post
//   const openModal = (post?: Post) => {
//     if (post) {
//       setIsEditing(true);
//       setPostToEdit(post.id);
//       setTitle(post.title);
//       setQuantity(post.quantity);
//     } else {
//       setIsEditing(false);
//       setTitle('');
//       setQuantity(0);
//     }
//     setIsModalOpen(true);
//   };

//   // Close modal and reset state
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setPostToEdit(null);
//     setTitle('');
//     setQuantity(0);
//   };

//   // Create a new post
//   const createPost = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, quantity }),
//       });
//       const newPost = await response.json();
//       setPosts((prevPosts) => [...prevPosts, newPost]); // Add the new post to the list
//       closeModal();
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   // Update an existing post
//   const updatePost = async () => {
//     if (postToEdit === null) return;

//     try {
//       const response = await fetch(
//         `http://localhost:4000/api/posts/${postToEdit}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ title, quantity }),
//         },
//       );
//       if (response.ok) {
//         // Update the post list after editing
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post.id === postToEdit ? { ...post, title, quantity } : post,
//           ),
//         );
//         closeModal();
//       }
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <Button
//         onClick={() => openModal()}
//         className="bg-green-500 text-white py-2 px-4 rounded mb-4"
//       >
//         Create Post
//       </Button>

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="mb-4">
//             <h2 className="text-xl font-semibold">{post.title}</h2>
//             <p className="mb-2">Quantity: {post.quantity}</p>
//             <Button
//               onClick={() => openModal(post)}
//               className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
//             >
//               Edit
//             </Button>
//           </li>
//         ))}
//       </ul>

//       {/* Modal for Creating or Updating Post */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onConfirm={isEditing ? updatePost : createPost}
//         title={title}
//         setTitle={setTitle}
//         quantity={quantity}
//         setQuantity={setQuantity}
//       />
//     </div>
//   );
// }
