import PublicFooter from '@/components/layout/public/Footer';
import PublicHeader from '@/components/layout/public/Header';
import React, { ReactNode } from 'react';

export default function Layout({children} : {children :ReactNode}) {
  return (
    <div>
      <PublicHeader></PublicHeader>
      {children}
      <PublicFooter></PublicFooter>
    </div>
  );
}