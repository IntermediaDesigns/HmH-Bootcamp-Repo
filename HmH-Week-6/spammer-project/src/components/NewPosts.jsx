'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';
import { API_URL } from '@/lib/API_URL.js';
import { useRouter } from 'next/navigation.js';

export default function NewPosts() {
       const [text, setText] = useState('');
       const [error, setError] = useState('');
       const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (text === '') {
      setError('You must provide text in field.');
      return;
    }

    const res = await fetch(`${API_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
      }),
    });
    const info = await res.json();
    if (!info.success) {
      setError(info.error);
    } else {
      setText('');
      router.refresh();
    }
  }




  return (
       <div>
       <form onSubmit={handleSubmit} className={styles.newPostsContainer}>
         <textarea
           value={text}
           onChange={(e) => {
             setText(e.target.value);
             setError('');
           }}
           placeholder="What's your message?"
           className={styles.textInput}
         />
         <button className={styles.submitBtn} type='submit'>
           Post Message
         </button>
       </form>
       {error && <p className={styles.errorMessage}>⛔ {error}</p>}
     </div>
  )
}
