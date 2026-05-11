'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MembershipShield({ children }) {
  const router = useRouter();

  useEffect(() => {
    const signupDate = localStorage.getItem('signupDate');
    const role = localStorage.getItem('userRole');

    if (!signupDate && role !== 'Monarch') {
      localStorage.setItem('signupDate', new Date().toISOString());
    } else if (role !== 'Monarch') {
      const diffTime = Math.abs(new Date() - new Date(signupDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 3) {
        alert("3 GÜNLÜK ÜCRETSİZ ERİŞİMİNİZ DOLDU. DEVAM ETMEK İÇİN ABONE OLUN.");
        router.push('/subscription');
      }
    }
  }, []);

  return <>{children}</>;
}