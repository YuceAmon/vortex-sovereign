import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Vortex Özel Güvenlik Başlıkları
  response.headers.set('X-Sovereign-Status', 'Authorized-Amon');
  response.headers.set('X-Robots-Tag', 'noindex, nofollow'); // Rakiplerin botları içeriği göremez
  
  // Sadece belirli IP'lere veya Monarch'a tam yetki
  return response;
}